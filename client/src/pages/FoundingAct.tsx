/*
 * DESIGN: Nordic Institutional Minimalism
 * - Clean legal document presentation
 * - Clear section hierarchy
 * - Professional institutional tone
 */

import { Link } from "wouter";
import { Download, FileText, Scale, Users, Building, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    icon: Scale,
    title: "Legal Basis",
    content: `The European Economic Alliance for Cooperation with Asia (EEAA) is established in accordance with Articles 10 and 11 of the Law on Associations of the Republic of Serbia (Official Gazette RS, No. 51/2009, 99/2011, and 44/2018). The Founding Act was adopted at the founding assembly held on October 20, 2025, in Belgrade.`,
  },
  {
    icon: FileText,
    title: "Purpose",
    content: `EEAA is established as a voluntary, non-governmental, and non-profit association, founded for an indefinite period, with the aim of achieving objectives in the field of international cooperation, economic development, and promotion of cultural and scientific exchange between Europe and Asia.`,
  },
  {
    icon: Building,
    title: "Activities",
    content: `The Association's activities include: enhancing economic, cultural, scientific, and institutional cooperation; providing informational, advisory, and educational support; encouraging dialogue regarding investment and development projects; organizing conferences, forums, and workshops; cooperating with chambers of commerce, universities, and government institutions; and supporting innovative solutions for sustainable development.`,
  },
  {
    icon: Users,
    title: "Governance Structure",
    content: `The organs of the Association are the Assembly and the Board of Directors. The Board of Directors consists of five members appointed by the Founding Act, with the President of the Board serving as the legal representative of the Association. The internal distribution of tasks within the Board is regulated by a separate decision or bylaw.`,
  },
  {
    icon: Wallet,
    title: "Financing Model",
    content: `As a non-profit organization, EEAA operates without the purpose of generating profit. The Association is financed through membership fees, donations, grants, and other lawful sources in accordance with Serbian law. All funds are directed toward achieving the Association's statutory objectives.`,
  },
];

const boardMembers = [
  {
    name: "Teodor Kern",
    role: "President of the Board of Directors",
    country: "Serbia",
  },
  {
    name: "Zlatko Edelinski",
    role: "Board Member",
    country: "North Macedonia",
  },
  {
    name: "Vladimir Pecić",
    role: "Board Member",
    country: "Serbia",
  },
  {
    name: "Jovan Cvetković",
    role: "Board Member",
    country: "Serbia",
  },
  {
    name: "Mirko Vlačo",
    role: "Board Member",
    country: "Bosnia and Herzegovina",
  },
];

export default function FoundingAct() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-4xl">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Legal Framework
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] mb-6">
              Founding Act & Statute
            </h1>
            <p className="text-xl text-[var(--color-gray-cool)] leading-relaxed mb-8">
              A comprehensive summary of EEAA's legal foundation, governance
              structure, and operational framework as established in our
              founding documents.
            </p>
            <a
              href="/documents/EEAA-Founding-Act.docx"
              download
              className="inline-flex"
            >
              <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]">
                <Download className="mr-2 w-4 h-4" />
                Download Founding Act (DOCX)
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--color-stone)] p-8 rounded-sm">
              <h3 className="font-mono text-sm text-[var(--color-copper)] mb-2">
                Full Name
              </h3>
              <p className="font-serif text-lg text-[var(--color-navy)]">
                European Economic Alliance for Cooperation with Asia
              </p>
            </div>
            <div className="bg-[var(--color-stone)] p-8 rounded-sm">
              <h3 className="font-mono text-sm text-[var(--color-copper)] mb-2">
                Abbreviated Name
              </h3>
              <p className="font-serif text-lg text-[var(--color-navy)]">EEAA</p>
            </div>
            <div className="bg-[var(--color-stone)] p-8 rounded-sm">
              <h3 className="font-mono text-sm text-[var(--color-copper)] mb-2">
                Registered Address
              </h3>
              <p className="font-serif text-lg text-[var(--color-navy)]">
                Omladinska staza 2b, Vrnjačka Banja
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-12 gap-8 py-8 border-b border-[var(--color-stone-dark)]"
              >
                <div className="lg:col-span-4 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-stone)] rounded flex items-center justify-center shrink-0">
                    <section.icon className="w-6 h-6 text-[var(--color-copper)]" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[var(--color-copper)] mb-1">
                      Section {String(index + 1).padStart(2, "0")}
                    </div>
                    <h2 className="font-serif text-2xl text-[var(--color-navy)]">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-[var(--color-gray-cool)] leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-24 bg-[var(--color-navy)] text-white">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Initial Board
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Board of Directors
            </h2>
            <p className="text-white/70 leading-relaxed">
              The first composition of the Board of Directors was appointed by
              the Founding Act. The President of the Board serves as the legal
              representative of the Association.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className={`border border-white/10 p-6 rounded-sm ${
                  index === 0 ? "lg:col-span-1 bg-white/5" : ""
                }`}
              >
                <h3 className="font-serif text-xl mb-2">{member.name}</h3>
                <p className="text-[var(--color-copper)] text-sm mb-1">
                  {member.role}
                </p>
                <p className="text-white/50 text-sm">{member.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-[var(--color-stone)] rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-[var(--color-copper)]" />
            </div>
            <h2 className="font-serif text-2xl text-[var(--color-navy)] mb-4">
              Official Document
            </h2>
            <p className="text-[var(--color-gray-cool)] leading-relaxed mb-8">
              This page provides a summary of the Founding Act for informational
              purposes. For the complete and legally binding text, please
              download the official document.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/documents/EEAA-Founding-Act.docx"
                download
                className="inline-flex"
              >
                <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]">
                  <Download className="mr-2 w-4 h-4" />
                  Download Founding Act
                </Button>
              </a>
              <Link href="/organization">
                <Button
                  variant="outline"
                  className="border-[var(--color-navy)] text-[var(--color-navy)]"
                >
                  View Organization Structure
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
