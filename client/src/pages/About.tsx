/*
 * DESIGN: Nordic Institutional Minimalism
 * - Clear information hierarchy
 * - Generous whitespace
 * - Institutional credibility
 */

import { Link } from "wouter";
import { ArrowRight, Target, Eye, Building2, Scale, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const objectives = [
  {
    icon: Globe2,
    title: "Economic Cooperation",
    description:
      "Enhancing economic, cultural, scientific, and institutional cooperation between European countries and Asian states.",
  },
  {
    icon: Building2,
    title: "Business Support",
    description:
      "Providing informational, advisory, and educational support to legal entities and individuals operating or intending to operate in Asian markets, without profit motive.",
  },
  {
    icon: Scale,
    title: "Investment Dialogue",
    description:
      "Encouraging dialogue, cooperation, and exchange of information regarding investment and development projects.",
  },
];

const activities = [
  "Organizing informational, educational, and promotional activities in the fields of trade, logistics, economic diplomacy, and legal regulations",
  "Creating conditions for connecting institutions, enterprises, universities, researchers, and experts",
  "Strengthening mutual trust, knowledge exchange, and best practices among members and partners",
  "Organizing conferences, forums, roundtables, and workshops for professional competence development",
  "Cooperation with chambers of commerce, universities, scientific institutions, local governments, and NGOs in Europe and Asia",
  "Supporting the development of innovative and technological solutions contributing to sustainable development, digitalization, environmental protection, and regional connectivity",
  "Participation in domestic and international programs and projects promoting economic cooperation and technological advancement",
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-4xl">
            <div className="section-number text-[var(--color-copper)] mb-4">
              About EEAA
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] mb-6">
              Building Bridges Between Continents
            </h1>
            <p className="text-xl text-[var(--color-gray-cool)] leading-relaxed">
              The European Economic Alliance for Cooperation with Asia is a
              non-profit, non-governmental, and non-political association
              established under the laws of the Republic of Serbia, with
              headquarters in Vrnjačka Banja.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-[var(--color-copper)]" />
              <div className="pl-8">
                <div className="w-16 h-16 bg-[var(--color-stone)] rounded flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[var(--color-copper)]" />
                </div>
                <h2 className="font-serif text-3xl text-[var(--color-navy)] mb-6">
                  Our Mission
                </h2>
                <p className="text-[var(--color-gray-cool)] leading-relaxed mb-4">
                  To serve as a comprehensive platform for economic, cultural,
                  scientific, and institutional cooperation between European
                  countries and Asian states.
                </p>
                <p className="text-[var(--color-gray-cool)] leading-relaxed">
                  We provide informational, advisory, and educational support to
                  organizations and individuals seeking to establish or expand
                  their presence in Asian markets, facilitating dialogue and
                  exchange of information regarding investment and development
                  projects.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-[var(--color-navy)]" />
              <div className="pl-8">
                <div className="w-16 h-16 bg-[var(--color-stone)] rounded flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-[var(--color-navy)]" />
                </div>
                <h2 className="font-serif text-3xl text-[var(--color-navy)] mb-6">
                  Our Vision
                </h2>
                <p className="text-[var(--color-gray-cool)] leading-relaxed mb-4">
                  To become the leading platform for Europe-Asia economic
                  cooperation, recognized for our integrity, expertise, and
                  commitment to fostering sustainable partnerships.
                </p>
                <p className="text-[var(--color-gray-cool)] leading-relaxed">
                  We envision a future where businesses, institutions, and
                  individuals can seamlessly navigate cross-continental
                  opportunities, supported by a trusted network of experts and
                  resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24 bg-[var(--color-navy)] text-white">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Strategic Objectives
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              What We Aim to Achieve
            </h2>
            <p className="text-white/70 leading-relaxed">
              Our objectives are defined in accordance with our founding
              documents and reflect our commitment to facilitating meaningful
              economic cooperation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {objectives.map((obj, index) => (
              <div
                key={index}
                className="border border-white/10 p-8 rounded-sm hover:border-[var(--color-copper)]/50 transition-colors"
              >
                <div className="w-14 h-14 bg-white/5 rounded flex items-center justify-center mb-6">
                  <obj.icon className="w-7 h-7 text-[var(--color-copper)]" />
                </div>
                <h3 className="font-serif text-xl mb-4">{obj.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="section-number text-[var(--color-copper)] mb-4">
                Our Activities
              </div>
              <h2 className="font-serif text-3xl text-[var(--color-navy)] mb-6">
                How We Operate
              </h2>
              <p className="text-[var(--color-gray-cool)] leading-relaxed">
                EEAA engages in a wide range of activities designed to support
                our members and advance our mission of Europe-Asia cooperation.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-6 bg-[var(--color-stone)] rounded-sm"
                  >
                    <div className="font-mono text-[var(--color-copper)] text-sm shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="text-[var(--color-navy)] text-sm leading-relaxed">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Info */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/images/headquarters.jpg"
                alt="EEAA Headquarters"
                className="w-full rounded-sm shadow-lg"
              />
            </div>
            <div>
              <div className="section-number text-[var(--color-copper)] mb-4">
                Our Organization
              </div>
              <h2 className="font-serif text-3xl text-[var(--color-navy)] mb-6">
                Established for Lasting Impact
              </h2>
              <div className="space-y-6 text-[var(--color-gray-cool)]">
                <p className="leading-relaxed">
                  EEAA is established as a voluntary, non-governmental, and
                  non-profit association, founded for an indefinite period under
                  the laws of the Republic of Serbia.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-[var(--color-navy)] mb-2">
                      Legal Status
                    </h4>
                    <p className="text-sm">Non-profit Association</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-navy)] mb-2">
                      Jurisdiction
                    </h4>
                    <p className="text-sm">Republic of Serbia</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-navy)] mb-2">
                      Headquarters
                    </h4>
                    <p className="text-sm">Vrnjačka Banja, Serbia</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-navy)] mb-2">
                      Founded
                    </h4>
                    <p className="text-sm">October 20, 2025</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/founding-act">
                  <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]">
                    Read Founding Act
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/organization">
                  <Button
                    variant="outline"
                    className="border-[var(--color-navy)] text-[var(--color-navy)]"
                  >
                    View Structure
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
