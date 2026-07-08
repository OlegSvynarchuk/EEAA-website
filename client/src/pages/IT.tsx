/**
 * PAGE: IT Department
 * DESIGN: Nordic Institutional Minimalism
 */

import { Link } from "wouter";
import {
  ArrowRight,
  ShieldCheck,
  Server,
  Workflow,
  Cloud,
  Code2,
  Network,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Compliance",
    description:
      "Baseline risk assessments, security policies, and practical controls aligned with modern EU requirements and best practices.",
  },
  {
    icon: Cloud,
    title: "Digital Infrastructure",
    description:
      "Cloud adoption guidance, vendor selection, and architecture planning for stable, scalable operations across regions.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "Lightweight automation of reporting and internal workflows to improve operational speed and reduce administrative overhead.",
  },
];

const services = [
  {
    icon: Server,
    title: "IT Readiness Review",
    description:
      "A structured review of tools, permissions, backups, and infrastructure maturity with prioritized next steps.",
  },
  {
    icon: Code2,
    title: "Web & Member Portal Support",
    description:
      "Support for website improvements and member-facing functionality, with documentation and maintainable patterns.",
  },
  {
    icon: Network,
    title: "Vendor & Integration Planning",
    description:
      "Shortlisting tools and planning integrations (CRM, email, analytics) with clear data ownership and access rules.",
  },
];

export default function DepartmentIT() {
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
              IT Department
            </h1>
            <p className="text-xl text-[var(--color-gray-cool)] leading-relaxed">
              Digital infrastructure, cybersecurity, and practical systems that
              support cross-border cooperation and member services.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact">
                <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]">
                  Request IT Support
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/membership">
                <Button
                  variant="outline"
                  className="border-[var(--color-navy)] text-[var(--color-navy)]"
                >
                  Member Access
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
              We provide a reliable baseline for secure operations and improve
              the digital experience for members and partners.
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
              Typical Engagements
            </h2>
            <p className="text-white/70 leading-relaxed">
              Simple, documented, and repeatable service modules—designed to
              scale across partners and working groups.
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
              Knowledge Base In Development
            </h2>
            <p className="text-[var(--color-gray-cool)] leading-relaxed mb-8">
              Technical guidelines, templates, and internal standards will be
              published as the EEAA member portal expands.
            </p>
            <Link href="/contact">
              <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]">
                Contact IT Coordination
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
