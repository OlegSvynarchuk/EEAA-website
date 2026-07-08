/**
 * PAGE: Wine & Spirit Department
 * DESIGN: Nordic Institutional Minimalism
 */

import { Link } from "wouter";
import {
  ArrowRight,
  Wine,
  Grape,
  GlassWater,
  BadgeCheck,
  Presentation,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: Grape,
    title: "Trade & Market Access",
    description:
      "Practical support for exporters and importers: positioning, market selection, and partner introductions.",
  },
  {
    icon: BadgeCheck,
    title: "Quality & Provenance",
    description:
      "Guidance on documentation, traceability, and producer representation with a focus on trust and authenticity.",
  },
  {
    icon: GlassWater,
    title: "Events & Delegations",
    description:
      "Curated tastings and B2B meetings that connect producers, distributors, hospitality groups, and investors.",
  },
];

const programs = [
  {
    icon: Wine,
    title: "Producer Showcase Series",
    description:
      "Rotating member showcases featuring regional producers, tasting notes, and importer-ready product briefs.",
  },
  {
    icon: BadgeCheck,
    title: "Distributor Matching",
    description:
      "Structured matchmaking: target profile definition, outreach, and warm introductions to vetted partners.",
  },
  {
    icon: Presentation,
    title: "Market Entry Briefing",
    description:
      "A short briefing on labeling, documentation, positioning, and route-to-market considerations.",
  },
];

export default function DepartmentWineSpirits() {
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
              Wine &amp; Spirit Department
            </h1>
            <p className="text-xl text-[var(--color-gray-cool)] leading-relaxed">
              Supporting producers and partners with market access, trusted
              representation, and curated introductions across Europe and Asia.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact">
                <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]">
                  Enquire About Trade Support
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/membership">
                <Button
                  variant="outline"
                  className="border-[var(--color-navy)] text-[var(--color-navy)]"
                >
                  Become a Member
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
              What We Do
            </h2>
            <p className="text-[var(--color-gray-cool)] leading-relaxed">
              A structured approach to representation and market development,
              designed for both boutique producers and scalable brands.
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

      {/* Programs */}
      <section className="py-24 bg-[var(--color-navy)] text-white">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Programs
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Typical Programs
            </h2>
            <p className="text-white/70 leading-relaxed">
              Placeholder programs that can be adapted into real initiatives as
              content and partners are confirmed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p, idx) => (
              <div key={idx} className="p-8 border border-white/10 rounded-sm">
                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center mb-6">
                  <p.icon className="w-6 h-6 text-[var(--color-copper)]" />
                </div>
                <h3 className="font-serif text-xl mb-3">{p.title}</h3>
                <p className="text-white/60 leading-relaxed">{p.description}</p>
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
              Partner Catalogue Coming Soon
            </h2>
            <p className="text-[var(--color-gray-cool)] leading-relaxed mb-8">
              Producer profiles, portfolio lists, and upcoming tasting schedules
              will be added as the department launches publicly.
            </p>
            <Link href="/contact">
              <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]">
                Contact Wine &amp; Spirits Desk
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
