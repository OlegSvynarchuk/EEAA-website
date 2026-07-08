/**
 * PAGE: Board of Directors
 * DESIGN: Nordic Institutional Minimalism (matches Founders page)
 * - Grid of director cards
 * - Placeholder image rectangle (no photos yet)
 * - Same color tokens: --color-stone, --color-navy, --color-copper, --color-gray-cool
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const board = [
  {
    name: "Msc.Oec Teodor Kern",
    role: "President",
    org: "European Economic Alliance for Cooperation with Asia",
    highlight: true,
  },
  {
    name: "Mirko Vlačo",
    role: "Vice President for Central European Regional Cooperation",
    org: "European Economic Alliance for Cooperation with Asia",
    highlight: false,
  },
  {
    name: "Jovan Cvetković",
    role: "Vice President for Project Management and Operations",
    org: "European Economic Alliance for Cooperation with Asia",
    highlight: false,
  },
  {
    name: "Zlatko Edelinski",
    role: "Vice President for Foreign Investment, Agribusiness & Tourism",
    org: "European Economic Alliance for Cooperation with Asia",
    highlight: false,
  },
  {
    name: "Vladimir Pecić",
    role: "Vice President for Business Relations and Membership",
    org: "European Economic Alliance for Cooperation with Asia",
    highlight: false,
  },
];

export default function BoardOfDirectors() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-24 pb-12 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-4xl">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Governance
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] mb-6">
              Board of Directors
            </h1>
            <p className="text-xl text-[var(--color-gray-cool)] leading-relaxed">
              Our Board provides strategic direction and institutional
              oversight, representing regional expertise across Europe and
              strengthening cooperation with Asia.
            </p>
          </div>
        </div>
      </section>

      {/* Board Grid */}
      <section className="pt-12 pb-24">
        <div className="container">
          <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl text-[var(--color-navy)] mb-2">
                Directors
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {board.map((d, index) => (
              <article
                key={index}
                className={`rounded-sm overflow-hidden border transition-all ${
                  d.highlight
                    ? "bg-[var(--color-navy)] text-white border-[var(--color-navy)]"
                    : "bg-white border-[var(--color-stone-dark)] hover:shadow-md"
                }`}
              >
                {/* “Image” placeholder */}
                <div
                  className={`h-44 w-full flex items-center justify-center border-b ${
                    d.highlight
                      ? "bg-white/5 border-white/10"
                      : "bg-[var(--color-stone)] border-[var(--color-stone-dark)]"
                  }`}
                >
                  <div
                    className={`w-20 h-20 rounded-sm border flex items-center justify-center ${
                      d.highlight
                        ? "border-white/25 text-white/70"
                        : "border-[var(--color-stone-dark)] text-[var(--color-gray-cool)]"
                    }`}
                  >
                    Photo
                  </div>
                </div>

                <div className="p-8">
                  <div className="font-mono text-xs mb-4 opacity-60">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3
                    className={`font-serif text-xl mb-2 ${
                      d.highlight ? "text-white" : "text-[var(--color-navy)]"
                    }`}
                  >
                    {d.name}
                  </h3>

                  <p
                    className={`text-sm mb-4 ${
                      d.highlight
                        ? "text-[var(--color-copper)]"
                        : "text-[var(--color-copper)]"
                    }`}
                  >
                    {d.role}
                  </p>

                  <p
                    className={`text-sm leading-relaxed ${
                      d.highlight
                        ? "text-white/70"
                        : "text-[var(--color-gray-cool)]"
                    }`}
                  >
                    {d.org}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
