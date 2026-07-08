/*
 * DESIGN: Nordic Institutional Minimalism
 * - Market intelligence presentation
 * - Regional focus areas
 * - Members-only data hub preview
 */

import { Link } from "wouter";
import {
  ArrowRight,
  Globe,
  TrendingUp,
  FileText,
  Database,
  Lock,
  MapPin,
  Building2,
  Scale,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const asiaMarkets = [
  {
    region: "China",
    description:
      "The world's second-largest economy offers vast opportunities across manufacturing, technology, and consumer markets, with evolving regulatory frameworks and growing middle-class consumption.",
    keyFactors: [
      "Manufacturing hub with advanced supply chains",
      "Rapidly growing consumer market",
      "Strong technology and innovation sector",
      "Complex regulatory environment",
    ],
  },
  {
    region: "Japan",
    description:
      "A mature, highly developed market known for quality standards, technological innovation, and strong intellectual property protection, offering opportunities for premium products and services.",
    keyFactors: [
      "High-quality standards and consumer expectations",
      "Advanced technology adoption",
      "Aging population creating new market needs",
      "Strong IP protection framework",
    ],
  },
  {
    region: "Korea",
    description:
      "A dynamic economy with strong technology, automotive, and entertainment sectors, characterized by rapid innovation cycles and sophisticated consumer preferences.",
    keyFactors: [
      "Technology-driven economy",
      "Strong manufacturing capabilities",
      "Sophisticated consumer market",
      "Active free trade agreements",
    ],
  },
  {
    region: "ASEAN",
    description:
      "A diverse region of ten nations with combined GDP exceeding $3 trillion, offering varied market opportunities from manufacturing hubs to emerging consumer markets.",
    keyFactors: [
      "Diverse market opportunities",
      "Growing middle class across region",
      "Manufacturing cost advantages",
      "Regional economic integration",
    ],
  },
  {
    region: "Central Asia",
    description:
      "Emerging markets along historic trade routes, rich in natural resources and positioned as bridges between Europe and Asia, with growing infrastructure development.",
    keyFactors: [
      "Strategic geographic position",
      "Rich natural resources",
      "Infrastructure development opportunities",
      "Growing trade corridor importance",
    ],
  },
];

const europeInsights = [
  {
    icon: TrendingUp,
    title: "Export Potential",
    description:
      "European products and services are highly valued in Asian markets for quality, innovation, and brand reputation. Key export sectors include machinery, automotive, pharmaceuticals, luxury goods, and professional services.",
  },
  {
    icon: Scale,
    title: "Regulatory Environment",
    description:
      "Understanding EU regulations and standards is essential for Asian companies entering European markets. EEAA provides guidance on compliance requirements, certification processes, and market access procedures.",
  },
  {
    icon: Building2,
    title: "Market Structure",
    description:
      "The European market comprises diverse national markets within a unified regulatory framework. Success requires understanding both EU-wide regulations and local market characteristics.",
  },
  {
    icon: Users,
    title: "Business Culture",
    description:
      "European business practices vary by country but generally emphasize relationship building, formal agreements, and long-term partnerships. EEAA helps bridge cultural differences for successful collaboration.",
  },
];

const dataHubFeatures = [
  {
    icon: Database,
    title: "Verified Suppliers",
    description:
      "Access our curated database of verified suppliers and business partners across European and Asian markets.",
  },
  {
    icon: TrendingUp,
    title: "Investment Opportunities",
    description:
      "Browse current investment opportunities and project proposals from our member network.",
  },
  {
    icon: FileText,
    title: "Market Entry Checklists",
    description:
      "Step-by-step guides and checklists for entering specific markets, covering legal, regulatory, and practical requirements.",
  },
  {
    icon: Globe,
    title: "Market Reports",
    description:
      "In-depth market analysis and industry reports covering key sectors and trends in Europe-Asia trade.",
  },
];

export default function MarketHub() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/global-network.jpg"
            alt="Global network"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Market Intelligence
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] mb-6">
              Asia–Europe Market Hub
            </h1>
            <p className="text-xl text-[var(--color-gray-cool)] leading-relaxed">
              Your gateway to comprehensive market intelligence, business
              insights, and verified partner networks across European and Asian
              markets.
            </p>
          </div>
        </div>
      </section>

      {/* Asia Market Insights */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Asia Markets
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-navy)] mb-6">
              Asian Market Insights
            </h2>
            <p className="text-[var(--color-gray-cool)] leading-relaxed">
              Explore key Asian markets and understand the opportunities and
              considerations for European businesses seeking to establish or
              expand their presence.
            </p>
          </div>

          <div className="space-y-6">
            {asiaMarkets.map((market, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-12 gap-8 p-8 bg-[var(--color-stone)] rounded-sm"
              >
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[var(--color-copper)]" />
                    <h3 className="font-serif text-2xl text-[var(--color-navy)]">
                      {market.region}
                    </h3>
                  </div>
                  <p className="text-[var(--color-gray-cool)] leading-relaxed">
                    {market.description}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <div className="bg-white p-6 rounded-sm h-full">
                    <h4 className="font-mono text-sm text-[var(--color-copper)] mb-4">
                      Key Market Factors
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {market.keyFactors.map((factor, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-[var(--color-navy)]"
                        >
                          <span className="w-1.5 h-1.5 bg-[var(--color-copper)] rounded-full mt-2 shrink-0" />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Europe Market Insights */}
      <section className="py-24 bg-[var(--color-navy)] text-white">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Europe Markets
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              European Market Insights
            </h2>
            <p className="text-white/70 leading-relaxed">
              Understanding the European market landscape is essential for Asian
              businesses seeking to establish presence in Europe, as well as for
              European companies looking to strengthen their competitive
              position.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {europeInsights.map((insight, index) => (
              <div
                key={index}
                className="border border-white/10 p-8 rounded-sm"
              >
                <div className="w-14 h-14 bg-white/5 rounded flex items-center justify-center mb-6">
                  <insight.icon className="w-7 h-7 text-[var(--color-copper)]" />
                </div>
                <h3 className="font-serif text-xl mb-4">{insight.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members-Only Data Hub */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-number text-[var(--color-copper)] mb-4">
                Exclusive Access
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-navy)] mb-6">
                Members-Only Data Hub
              </h2>
              <p className="text-[var(--color-gray-cool)] leading-relaxed mb-8">
                EEAA members gain exclusive access to our comprehensive data
                hub, featuring verified business partners, investment
                opportunities, and detailed market entry resources.
              </p>

              <div className="space-y-4 mb-8">
                {dataHubFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-[var(--color-stone)] rounded-sm"
                  >
                    <div className="w-10 h-10 bg-white rounded flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-[var(--color-copper)]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[var(--color-navy)] mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-[var(--color-gray-cool)]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/membership">
                <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]">
                  Become a Member
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-[var(--color-stone)] p-8 rounded-sm">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <Lock className="w-6 h-6 text-[var(--color-copper)]" />
                  <span className="font-serif text-xl text-[var(--color-navy)]">
                    Member Access Required
                  </span>
                </div>

                {/* Preview Cards */}
                <div className="space-y-4 opacity-60">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white p-4 rounded-sm">
                      <div className="h-4 bg-[var(--color-stone-dark)] rounded w-3/4 mb-2" />
                      <div className="h-3 bg-[var(--color-stone-dark)] rounded w-1/2" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--color-stone-dark)] text-center">
                  <p className="text-sm text-[var(--color-gray-cool)] mb-4">
                    Join EEAA to unlock full access to our data hub
                  </p>
                  <Link href="/membership/apply">
                    <Button
                      variant="outline"
                      className="border-[var(--color-navy)] text-[var(--color-navy)]"
                    >
                      Apply for Membership
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-[var(--color-navy)] mb-6">
              Need Specific Market Information?
            </h2>
            <p className="text-[var(--color-gray-cool)] leading-relaxed mb-8">
              Our team can provide customized market research and analysis
              tailored to your specific business needs and target markets.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)] px-8">
                  Request Information
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-[var(--color-navy)] text-[var(--color-navy)] px-8"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
