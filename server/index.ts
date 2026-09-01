import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import {
  handleContact,
  handleMembership,
  handleMailHealth,
  mailConfigured,
} from "./mail.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Behind Passenger/Apache every request arrives from 127.0.0.1, which would
  // make the per-IP throttle apply to all visitors at once.
  app.set("trust proxy", true);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Form endpoints - must be registered before the SPA catch-all
  app.use(express.json({ limit: "100kb" }));
  app.post("/api/contact", handleContact);
  app.post("/api/membership", handleMembership);
  app.get("/api/mail-health", handleMailHealth);

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
    if (!mailConfigured) {
      console.warn(
        "Warning: SMTP environment variables are missing - contact and membership forms will return an error."
      );
    }
  });
}

startServer().catch(console.error);
