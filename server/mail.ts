/*
 * Mail transport and form handlers.
 * Credentials come from environment variables only - never commit them.
 */

import type { Request, Response } from "express";
import nodemailer from "nodemailer";

const {
  SMTP_HOST = "smtp.zoho.eu",
  SMTP_PORT = "587",
  SMTP_USER,
  SMTP_PASS,
  MAIL_FROM,
  MAIL_TO,
} = process.env;

export const mailConfigured = Boolean(SMTP_USER && SMTP_PASS && MAIL_TO);

const transporter = mailConfigured
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
  : null;

/** Very small in-memory throttle: max 5 submissions per IP per 15 minutes. */
const hits = new Map<string, number[]>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

function clean(value: unknown, maxLength = 2000): string {
  return (
    String(value ?? "")
      // Drop control characters; newline and tab are kept for message bodies.
      .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
      .trim()
      .slice(0, maxLength)
  );
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

/** Link-stuffed submissions are almost always bots, whatever the honeypot says. */
function looksLikeSpam(text: string): boolean {
  const links = text.match(/https?:\/\/|www\./gi)?.length ?? 0;
  return links > 4 || /\[url=|\[\/url\]|<a\s+href=/i.test(text);
}

/** Strip CR/LF so user input can never inject extra mail headers. */
function header(value: string): string {
  return value.replace(/[\r\n]+/g, " ").slice(0, 200);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function rowsToHtml(rows: [string, string][]): string {
  const cells = rows
    .filter(([, v]) => v)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;vertical-align:top;color:#5b6472"><strong>${escapeHtml(
          label
        )}</strong></td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(
          value
        )}</td></tr>`
    )
    .join("");
  return `<table style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse">${cells}</table>`;
}

function rowsToText(rows: [string, string][]): string {
  return rows
    .filter(([, v]) => v)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

async function send(
  subject: string,
  rows: [string, string][],
  replyTo: string
): Promise<void> {
  await transporter!.sendMail({
    from: MAIL_FROM || SMTP_USER,
    to: MAIL_TO,
    replyTo,
    subject: header(subject),
    text: rowsToText(rows),
    html: rowsToHtml(rows),
  });
}

function guard(req: Request, res: Response): boolean {
  if (!mailConfigured) {
    console.error(
      "Mail is not configured - missing SMTP environment variables"
    );
    res.status(503).json({ error: "Mail service is not configured." });
    return false;
  }
  // Honeypot: real users never fill a hidden field.
  if (clean(req.body?.website)) {
    res.json({ ok: true });
    return false;
  }
  if (rateLimited(req.ip || "unknown")) {
    res.status(429).json({ error: "Too many submissions. Please try later." });
    return false;
  }
  return true;
}

export async function handleContact(req: Request, res: Response) {
  if (!guard(req, res)) return;

  const firstName = clean(req.body?.firstName, 100);
  const lastName = clean(req.body?.lastName, 100);
  const email = clean(req.body?.email, 150);
  const message = clean(req.body?.message, 5000);

  if (!firstName || !lastName || !message || !isEmail(email)) {
    return res
      .status(400)
      .json({ error: "Please complete all required fields." });
  }

  // Accept silently so bots get no feedback about why the message vanished.
  if (looksLikeSpam(message)) {
    console.warn("Contact form: submission dropped as spam");
    return res.json({ ok: true });
  }

  const rows: [string, string][] = [
    ["Name", `${firstName} ${lastName}`],
    ["Email", email],
    ["Phone", clean(req.body?.phone, 60)],
    ["Organization", clean(req.body?.organization, 200)],
    ["Inquiry type", clean(req.body?.reason, 60)],
    ["Subject", clean(req.body?.subject, 200)],
    ["Message", message],
    ["Consent given", req.body?.consent ? "yes" : "no"],
  ];

  try {
    await send(
      `Contact form: ${clean(req.body?.subject, 120) || "New inquiry"}`,
      rows,
      email
    );
    res.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed:", error);
    res.status(502).json({ error: "Message could not be sent." });
  }
}

export async function handleMembership(req: Request, res: Response) {
  if (!guard(req, res)) return;

  const firstName = clean(req.body?.firstName, 100);
  const lastName = clean(req.body?.lastName, 100);
  const email = clean(req.body?.email, 150);
  const orgName = clean(req.body?.orgName, 200);

  if (!firstName || !lastName || !isEmail(email)) {
    return res
      .status(400)
      .json({ error: "Please complete all required fields." });
  }

  if (
    looksLikeSpam(
      `${clean(req.body?.interests, 2000)} ${clean(req.body?.markets, 2000)}`
    )
  ) {
    console.warn("Membership form: submission dropped as spam");
    return res.json({ ok: true });
  }

  const rows: [string, string][] = [
    ["Membership type", clean(req.body?.memberType, 60)],
    ["Organization", orgName],
    ["Organization type", clean(req.body?.orgType, 60)],
    ["Industry", clean(req.body?.industry, 60)],
    ["Name", `${firstName} ${lastName}`],
    ["Position", clean(req.body?.position, 150)],
    ["Email", email],
    ["Phone", clean(req.body?.phone, 60)],
    ["Address", clean(req.body?.address, 300)],
    ["City", clean(req.body?.city, 100)],
    ["Postal code", clean(req.body?.postalCode, 40)],
    ["Country", clean(req.body?.country, 100)],
    ["Areas of interest", clean(req.body?.interests, 2000)],
    ["Target markets", clean(req.body?.markets, 2000)],
    ["Consent given", req.body?.consent ? "yes" : "no"],
  ];

  try {
    await send(
      `Membership application: ${orgName || `${firstName} ${lastName}`}`,
      rows,
      email
    );
    res.json({ ok: true });
  } catch (error) {
    console.error("Membership form send failed:", error);
    res.status(502).json({ error: "Application could not be sent." });
  }
}
