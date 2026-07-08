/**
 * PAGE: PR & Media Department
 * DESIGN: Nordic Institutional Minimalism
 */

import { Link } from "wouter";
import {
  ArrowRight,
  Megaphone,
  Newspaper,
  Camera,
  Presentation,
  Radio,
  BadgeCheck,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: Megaphone,
    title: "Strategic Communications",
    description:
      "Clear messaging and institutional positioning for initiatives, delegations, and public programs.",
  },
  {
    icon: Newspaper,
    title: "Press & Editorial",
    description:
      "Press releases, media kits, and editorial planning designed for consistency and credibility.",
  },
  {
    icon: Camera,
    title: "Content Production",
    description:
      "Photography, short-form video guidance, and event coverage frameworks (assets delivered by partners).",
  },
];

const services = [
  {
    icon: Radio,
    title: "Media Outreach Package",
    description:
      "Target list + pitch angles + press note template + follow-up plan (adaptable by region).",
  },
  {
    icon: Presentation,
    title: "Event PR Toolkit",
    description:
      "A ready-to-use kit: agenda framing, speaker briefs, social templates, and post-event recap structure.",
  },
  {
    icon: BadgeCheck,
    title: "Brand & Tone Guidelines",
    description:
      "A minimal style and tone guide aligned with institutional credibility and multi-country use.",
  },
];

export default function DepartmentPRMedia() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-4xl">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Department
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] mb-6">
              PR &amp; Media Department
            </h1>
            <p className="text-xl text-[var(--color-gray-cool)] leading-relaxed">
              Institutional communication, press coordination, and media-ready
              assets supporting EEAA initiatives and partner visibility.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact">
                <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]">
                  Request Media Support
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/news">
                <Button
                  variant="outline"
                  className="border-[var(--color-navy)] text-[var(--color-navy)]"
                >
                  View News & Updates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Focus Areas
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-navy)] mb-6">
              What We Cover
            </h2>
            <p className="text-[var(--color-gray-cool)] leading-relaxed">
              Communication frameworks that keep messaging consistent, accurate,
              and aligned with institutional credibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((c, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-[var(--color-stone-dark)] rounded-sm hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-[var(--color-stone)] rounded flex items-center justify-center mb-6">
                  <c.icon className="w-7 h-7 text-[var(--color-copper)]" />
                </div>
                <h3 className="font-serif text-xl text-[var(--color-navy)] mb-3">
                  {c.title}
                </h3>
                <p className="text-[var(--color-gray-cool)] leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[var(--color-navy)] text-white">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Services
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Typical Deliverables
            </h2>
            <p className="text-white/70 leading-relaxed">
              Placeholder deliverables for launch—ready to be replaced with real
              materials as your content library grows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <div key={idx} className="p-8 border border-white/10 rounded-sm">
                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center mb-6">
                  <s.icon className="w-6 h-6 text-[var(--color-copper)]" />
                </div>
                <h3 className="font-serif text-xl mb-3">{s.title}</h3>
                <p className="text-white/60 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-7 h-7 text-[var(--color-copper)]" />
            </div>
            <h2 className="font-serif text-2xl text-[var(--color-navy)] mb-4">
              Media Kit Coming Soon
            </h2>
            <p className="text-[var(--color-gray-cool)] leading-relaxed mb-8">
              Brand assets, press templates, and official photo libraries will
              be added as the department finalizes publications and partner
              approvals.
            </p>
            <Link href="/contact">
              <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]">
                Contact PR &amp; Media Desk
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
