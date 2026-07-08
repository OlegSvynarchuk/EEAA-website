/*
 * DESIGN: Nordic Institutional Minimalism
 * - Clear membership tiers
 * - Comprehensive benefits presentation
 */

import { Link } from "wouter";
import {
  ArrowRight,
  Building2,
  User,
  Briefcase,
  Truck,
  Scale,
  TrendingUp,
  Megaphone,
  Landmark,
  Users,
  Plane,
  BookOpen,
  Database,
  Calendar,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const legalEntityBenefits = [
  {
    icon: Briefcase,
    title: "Business Facilitation",
    items: [
      "Market entry support and partner identification",
      "Business matchmaking services",
      "Trade mission coordination",
      "Contract negotiation assistance",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & On-Site Support",
    items: [
      "Supply chain optimization guidance",
      "Customs and import/export advisory",
      "Local operational support",
      "Facility location assistance",
    ],
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    items: [
      "Regulatory framework guidance",
      "Compliance advisory services",
      "Contract review support",
      "Intellectual property guidance",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Support",
    items: [
      "Investment opportunity identification",
      "Due diligence support",
      "Financial advisory connections",
      "Funding source guidance",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing & Promotion",
    items: [
      "Market positioning advisory",
      "Brand localization guidance",
      "Trade fair participation support",
      "Media and PR connections",
    ],
  },
  {
    icon: Landmark,
    title: "Government & Institutional Relations",
    items: [
      "Government liaison services",
      "Policy briefings and updates",
      "Institutional introductions",
      "Public affairs support",
    ],
  },
  {
    icon: Users,
    title: "Networking & Knowledge",
    items: [
      "Exclusive member events",
      "Industry roundtables",
      "Expert consultations",
      "Knowledge sharing platforms",
    ],
  },
  {
    icon: Plane,
    title: "Cultural & Tourism Cooperation",
    items: [
      "Cultural exchange programs",
      "Business tourism support",
      "Delegation hosting services",
      "Cross-cultural training",
    ],
  },
];

const individualBenefits = [
  {
    icon: BookOpen,
    title: "Training & Events",
    description:
      "Access to professional development programs, workshops, and educational seminars on Europe-Asia business practices.",
  },
  {
    icon: FileCheck,
    title: "Project Participation",
    description:
      "Opportunities to participate in EEAA projects and initiatives, contributing expertise while gaining valuable experience.",
  },
  {
    icon: Database,
    title: "Market Information",
    description:
      "Regular market updates, industry reports, and economic analyses covering European and Asian markets.",
  },
  {
    icon: Calendar,
    title: "Networking Events",
    description:
      "Invitations to member networking events, conferences, and forums connecting professionals across continents.",
  },
];

export default function Membership() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-4xl">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Membership
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] mb-6">
              Join Our Growing Network
            </h1>
            <p className="text-xl text-[var(--color-gray-cool)] leading-relaxed mb-8">
              EEAA membership provides access to comprehensive resources,
              services, and a network of professionals dedicated to
              strengthening Europe-Asia economic cooperation.
            </p>
            <Link href="/membership/apply">
              <Button
                size="lg"
                className="bg-[var(--color-copper)] hover:bg-[var(--color-copper-light)]"
              >
                Apply for Membership
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Legal Entities */}
            <div className="bg-[var(--color-navy)] text-white p-10 rounded-sm">
              <div className="w-14 h-14 bg-white/10 rounded flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-[var(--color-copper)]" />
              </div>
              <h2 className="font-serif text-2xl mb-4">Legal Entities</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                For companies, institutions, and organizations seeking
                comprehensive support for their Europe-Asia business activities.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm">
                  <span className="w-1.5 h-1.5 bg-[var(--color-copper)] rounded-full" />
                  Full access to all EEAA services
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="w-1.5 h-1.5 bg-[var(--color-copper)] rounded-full" />
                  Voting rights in Assembly
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="w-1.5 h-1.5 bg-[var(--color-copper)] rounded-full" />
                  Priority access to market data
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="w-1.5 h-1.5 bg-[var(--color-copper)] rounded-full" />
                  Dedicated account management
                </li>
              </ul>
              <Link href="/membership/apply">
                <Button className="w-full bg-[var(--color-copper)] hover:bg-[var(--color-copper-light)]">
                  Apply as Organization
                </Button>
              </Link>
            </div>

            {/* Individuals */}
            <div className="border-2 border-[var(--color-stone-dark)] p-10 rounded-sm">
              <div className="w-14 h-14 bg-[var(--color-stone)] rounded flex items-center justify-center mb-6">
                <User className="w-7 h-7 text-[var(--color-copper)]" />
              </div>
              <h2 className="font-serif text-2xl text-[var(--color-navy)] mb-4">
                Individuals
              </h2>
              <p className="text-[var(--color-gray-cool)] leading-relaxed mb-6">
                For professionals, consultants, academics, and experts
                interested in Europe-Asia economic cooperation.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-[var(--color-navy)]">
                  <span className="w-1.5 h-1.5 bg-[var(--color-copper)] rounded-full" />
                  Access to training and events
                </li>
                <li className="flex items-center gap-3 text-sm text-[var(--color-navy)]">
                  <span className="w-1.5 h-1.5 bg-[var(--color-copper)] rounded-full" />
                  Project participation opportunities
                </li>
                <li className="flex items-center gap-3 text-sm text-[var(--color-navy)]">
                  <span className="w-1.5 h-1.5 bg-[var(--color-copper)] rounded-full" />
                  Market information access
                </li>
                <li className="flex items-center gap-3 text-sm text-[var(--color-navy)]">
                  <span className="w-1.5 h-1.5 bg-[var(--color-copper)] rounded-full" />
                  Limited database access
                </li>
              </ul>
              <Link href="/membership/apply">
                <Button
                  variant="outline"
                  className="w-full border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white"
                >
                  Apply as Individual
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Legal Entities */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="section-number text-[var(--color-copper)] mb-4">
              For Organizations
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-navy)] mb-6">
              Benefits for Legal Entities
            </h2>
            <p className="text-[var(--color-gray-cool)] leading-relaxed">
              Organizational members receive comprehensive support across all
              aspects of Europe-Asia business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalEntityBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-sm">
                <div className="w-12 h-12 bg-[var(--color-stone)] rounded flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[var(--color-copper)]" />
                </div>
                <h3 className="font-serif text-lg text-[var(--color-navy)] mb-3">
                  {benefit.title}
                </h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-[var(--color-gray-cool)] text-sm flex items-start gap-2"
                    >
                      <span className="w-1 h-1 bg-[var(--color-copper)] rounded-full mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Individuals */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="section-number text-[var(--color-copper)] mb-4">
                For Professionals
              </div>
              <h2 className="font-serif text-3xl text-[var(--color-navy)] mb-6">
                Benefits for Individuals
              </h2>
              <p className="text-[var(--color-gray-cool)] leading-relaxed">
                Individual members gain access to professional development
                opportunities and a network of experts in Europe-Asia economic
                cooperation.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-6">
                {individualBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="border border-[var(--color-stone-dark)] p-6 rounded-sm"
                  >
                    <div className="w-12 h-12 bg-[var(--color-stone)] rounded flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-[var(--color-copper)]" />
                    </div>
                    <h3 className="font-serif text-lg text-[var(--color-navy)] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[var(--color-gray-cool)] text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rights & Obligations */}
      <section className="py-24 bg-[var(--color-navy)] text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Rights */}
            <div>
              <h2 className="font-serif text-2xl mb-6">Member Rights</h2>
              <ul className="space-y-4">
                {[
                  "Participate in Assembly meetings and vote on key decisions",
                  "Access EEAA services according to membership tier",
                  "Receive regular updates on Association activities",
                  "Propose initiatives and projects for consideration",
                  "Use EEAA member designation in communications",
                  "Access member-only resources and databases",
                ].map((right, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[var(--color-copper)] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-white/80">{right}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Obligations */}
            <div>
              <h2 className="font-serif text-2xl mb-6">Member Obligations</h2>
              <ul className="space-y-4">
                {[
                  "Pay annual membership fees in a timely manner",
                  "Comply with the Association's Statute and regulations",
                  "Act in accordance with EEAA's mission and values",
                  "Maintain professional conduct in all activities",
                  "Protect confidential information appropriately",
                  "Support the Association's objectives and initiatives",
                ].map((obligation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white/60 text-xs">{index + 1}</span>
                    </span>
                    <span className="text-white/80">{obligation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-[var(--color-navy)] mb-6">
              Ready to Join?
            </h2>
            <p className="text-[var(--color-gray-cool)] leading-relaxed mb-8">
              Take the first step toward expanding your Europe-Asia business
              horizons. Our membership team is ready to assist you through the
              application process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/membership/apply">
                <Button
                  size="lg"
                  className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)] px-8"
                >
                  Start Application
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[var(--color-navy)] text-[var(--color-navy)] px-8"
                >
                  Contact Us First
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
