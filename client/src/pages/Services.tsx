/*
 * DESIGN: Nordic Institutional Minimalism
 * - Comprehensive service presentation
 * - Clear categorization
 * - Professional institutional tone
 */

import { Link } from "wouter";
import {
  ArrowRight,
  Briefcase,
  Handshake,
  Scale,
  Truck,
  TrendingUp,
  Megaphone,
  Users,
  Plane,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "business-facilitation",
    icon: Briefcase,
    number: "01",
    title: "Business Facilitation",
    description:
      "Comprehensive support for companies seeking to establish or expand their presence in European and Asian markets.",
    details: [
      "Market entry strategy development and implementation support",
      "Partner identification and business matchmaking services",
      "Trade mission organization and participation coordination",
      "Business delegation hosting and program development",
      "Market research and competitive analysis",
      "Local market representation and liaison services",
    ],
    outcomes: [
      "Accelerated market entry timelines",
      "Reduced operational risks",
      "Established local partnerships",
      "Enhanced market understanding",
    ],
  },
  {
    id: "mediation",
    icon: Handshake,
    number: "02",
    title: "Mediation & Representation",
    description:
      "Professional intermediary services facilitating communication and negotiation between European and Asian parties.",
    details: [
      "Commercial negotiation support and facilitation",
      "Dispute resolution and mediation services",
      "Cross-cultural communication advisory",
      "Contract negotiation assistance",
      "Stakeholder relationship management",
      "Interest representation in business dealings",
    ],
    outcomes: [
      "Successful partnership agreements",
      "Resolved commercial disputes",
      "Improved cross-cultural relations",
      "Protected business interests",
    ],
  },
  {
    id: "legal-services",
    icon: Scale,
    number: "03",
    title: "Legal Services",
    description:
      "Guidance on legal and regulatory frameworks governing business operations across European and Asian jurisdictions.",
    details: [
      "Regulatory compliance guidance and advisory",
      "Corporate structure and establishment support",
      "Intellectual property protection guidance",
      "Contract review and legal documentation support",
      "Employment law and labor regulation advisory",
      "Trade law and customs regulation guidance",
    ],
    outcomes: [
      "Regulatory compliance assurance",
      "Protected intellectual property",
      "Sound legal foundations",
      "Minimized legal risks",
    ],
  },
  {
    id: "logistics",
    icon: Truck,
    number: "04",
    title: "Logistics & Operational Services",
    description:
      "Support for establishing and optimizing operational infrastructure and supply chain management.",
    details: [
      "Supply chain optimization and management advisory",
      "Customs and import/export procedure guidance",
      "Warehouse and distribution network planning",
      "Transportation and freight coordination support",
      "Facility location and establishment assistance",
      "Operational efficiency consulting",
    ],
    outcomes: [
      "Optimized supply chains",
      "Reduced logistics costs",
      "Streamlined operations",
      "Efficient market access",
    ],
  },
  {
    id: "investment",
    icon: TrendingUp,
    number: "05",
    title: "Investment & Financial Advisory",
    description:
      "Strategic guidance on investment opportunities and financial considerations for cross-continental ventures.",
    details: [
      "Investment opportunity identification and analysis",
      "Due diligence support and coordination",
      "Financial structuring advisory",
      "Funding source identification and introductions",
      "Risk assessment and mitigation planning",
      "Joint venture and partnership structuring",
    ],
    outcomes: [
      "Identified investment opportunities",
      "Informed investment decisions",
      "Secured funding sources",
      "Structured partnerships",
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    number: "06",
    title: "Marketing & Market Entry",
    description:
      "Strategic support for brand positioning and market penetration in new territories.",
    details: [
      "Market positioning strategy development",
      "Brand localization and adaptation advisory",
      "Trade fair and exhibition participation support",
      "Media relations and PR coordination",
      "Digital marketing strategy guidance",
      "Customer acquisition strategy development",
    ],
    outcomes: [
      "Established market presence",
      "Localized brand identity",
      "Increased market visibility",
      "Expanded customer base",
    ],
  },
  {
    id: "networking",
    icon: Users,
    number: "07",
    title: "Networking & Education",
    description:
      "Platforms and programs for professional development and relationship building across continents.",
    details: [
      "Industry conferences and forum organization",
      "Professional development workshops and seminars",
      "Expert consultation and advisory sessions",
      "Knowledge sharing platforms and resources",
      "Industry roundtable discussions",
      "Mentorship and peer learning programs",
    ],
    outcomes: [
      "Expanded professional networks",
      "Enhanced industry knowledge",
      "Valuable business connections",
      "Professional skill development",
    ],
  },
  {
    id: "tourism-culture",
    icon: Plane,
    number: "08",
    title: "Tourism & Culture",
    description:
      "Programs promoting cultural exchange and business tourism between Europe and Asia.",
    details: [
      "Business delegation travel coordination",
      "Cultural exchange program development",
      "VIP hosting and protocol services",
      "Cross-cultural training and orientation",
      "Tourism sector partnership facilitation",
      "Cultural event organization and coordination",
    ],
    outcomes: [
      "Successful cultural exchanges",
      "Enhanced cross-cultural understanding",
      "Strengthened bilateral relations",
      "Tourism sector development",
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services-abstract.jpg"
            alt="Services background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Our Services
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] mb-6">
              Comprehensive Support for Your Business
            </h1>
            <p className="text-xl text-[var(--color-gray-cool)] leading-relaxed">
              EEAA offers a full spectrum of services designed to support
              organizations and individuals in navigating the complexities of
              Europe-Asia business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 border-b border-[var(--color-stone-dark)] sticky top-20 bg-white/95 backdrop-blur-sm z-40">
        <div className="container">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="shrink-0 px-4 py-2 text-sm text-[var(--color-gray-cool)] hover:text-[var(--color-copper)] transition-colors"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-40"
              >
                <div className="grid lg:grid-cols-12 gap-12">
                  {/* Left Column */}
                  <div className="lg:col-span-5">
                    <div className="lg:sticky lg:top-40">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 bg-[var(--color-stone)] rounded flex items-center justify-center shrink-0">
                          <service.icon className="w-8 h-8 text-[var(--color-copper)]" />
                        </div>
                        <div>
                          <div className="font-mono text-sm text-[var(--color-copper)] mb-1">
                            {service.number}
                          </div>
                          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-navy)]">
                            {service.title}
                          </h2>
                        </div>
                      </div>
                      <p className="text-[var(--color-gray-cool)] leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <Link href="/contact">
                        <Button
                          variant="outline"
                          className="border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white"
                        >
                          Inquire About This Service
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-7">
                    {/* Service Details */}
                    <div className="bg-[var(--color-stone)] p-8 rounded-sm mb-8">
                      <h3 className="font-mono text-sm text-[var(--color-copper)] mb-6">
                        What We Offer
                      </h3>
                      <ul className="space-y-4">
                        {service.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-[var(--color-navy)]"
                          >
                            <span className="w-1.5 h-1.5 bg-[var(--color-copper)] rounded-full mt-2 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div className="border border-[var(--color-stone-dark)] p-8 rounded-sm">
                      <h3 className="font-mono text-sm text-[var(--color-copper)] mb-6">
                        Expected Outcomes
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {service.outcomes.map((outcome, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-[var(--color-navy)]"
                          >
                            <span className="w-6 h-6 bg-[var(--color-copper)]/10 rounded-full flex items-center justify-center shrink-0">
                              <span className="w-2 h-2 bg-[var(--color-copper)] rounded-full" />
                            </span>
                            <span className="text-sm">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {index < services.length - 1 && (
                  <div className="mt-24 border-b border-[var(--color-stone-dark)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--color-navy)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Contact our team to discuss how EEAA services can support your
              Europe-Asia business objectives. We're here to help you navigate
              the complexities of cross-continental operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[var(--color-copper)] hover:bg-[var(--color-copper-light)] px-8"
                >
                  Contact Our Team
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/membership">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8"
                >
                  View Membership Benefits
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
