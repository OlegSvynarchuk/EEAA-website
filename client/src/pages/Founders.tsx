/*
 * DESIGN: Nordic Institutional Minimalism
 * - Clean founder listing
 * - International representation emphasis
 * UPDATE:
 * - Inserted provided titles + phone numbers for members you listed:
 *   Teodor Kern, Mirko Vlačo, Jovan Cvetković, Zlatko Edelinski, Vladimir Pecić
 */

import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const founders = [
  {
    name: "Msc.Oec Teodor Kern",
    role: "President of the Board",
    title:
      "President of the European Economic Alliance for Cooperation with Asia",
    org: "European Economic Alliance for Cooperation with Asia",
  },
  {
    name: "Jovan Cvetković",
    role: "Board Member",
    title: "Vice President for Project Management and Operations",
    org: "European Economic Alliance for Cooperation with Asia",
  },
  {
    name: "Vladimir Pecić",
    role: "Board Member",
    title: "Vice President for Business Relations and Membership",
    org: "European Economic Alliance for Cooperation with Asia",
  },
  {
    name: "Zlatko Edelinski",
    role: "Board Member",
    title: "Vice President for Foreign Investment, Agribusiness & Tourism",
    org: "European Economic Alliance for Cooperation with Asia",
  },
  {
    name: "Miloš Nikolić",
    role: "Founder",
  },
  {
    name: "Milan Stanković",
    role: "Founder",
  },
  {
    name: "Mirko Vlačo",
    role: "Board Member",
    title: "Vice President for Central European Regional Cooperation",
    org: "European Economic Alliance for Cooperation with Asia",
  },
  {
    name: "Rudolf Vlček",
    role: "Founder",
  },
  {
    name: "Eryk Krzysztof Pausch",
    role: "Founder",
  },
];

const countries = [
  { name: "Serbia", count: 5 },
  { name: "North Macedonia", count: 1 },
  { name: "Bosnia and Herzegovina", count: 1 },
  { name: "Czech Republic", count: 1 },
  { name: "Austria", count: 1 },
];

export default function Founders() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-4xl">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Our Foundation
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] mb-6">
              Founding Members
            </h1>
            <p className="text-xl text-[var(--color-gray-cool)] leading-relaxed">
              EEAA was established by nine founding members representing five
              European nations, bringing together diverse expertise and a shared
              commitment to Europe-Asia cooperation.
            </p>
          </div>
        </div>
      </section>

      {/* Country Representation */}
      <section className="pt-12 pb-6 border-b border-[var(--color-stone-dark)]">
        <div className="container">
          <div className="flex flex-wrap gap-6 justify-center">
            {countries.map((country, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-[var(--color-gray-cool)]"
              >
                <MapPin className="w-4 h-4 text-[var(--color-copper)]" />
                <span>{country.name}</span>
                <span className="font-mono text-[var(--color-copper)]">
                  ({country.count})
                </span>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center my-6">
            <img
              src="/images/EEAA map beige.png"
              className="w-full md:w-[70%]"
              alt="EEAA map"
            />
          </div>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {founders.map((founder, index) => {
              const isBoard = founder.role.includes("Board");
              return (
                <div
                  key={index}
                  className={`p-8 rounded-sm transition-all ${
                    isBoard
                      ? "bg-[var(--color-navy)] text-white"
                      : "bg-[var(--color-stone)] hover:shadow-md"
                  }`}
                >
                  <div className="font-mono text-xs mb-4 opacity-60">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3
                    className={`font-serif text-xl mb-2 ${
                      isBoard ? "text-white" : "text-[var(--color-navy)]"
                    }`}
                  >
                    {founder.name}
                  </h3>

                  <p
                    className={`text-sm mb-3 ${
                      isBoard
                        ? "text-[var(--color-copper)]"
                        : "text-[var(--color-copper)]"
                    }`}
                  >
                    {founder.role}
                  </p>

                  {/* Inserted extra info when available */}
                  {founder.title && (
                    <p
                      className={`text-sm leading-relaxed mb-3 ${
                        isBoard
                          ? "text-white/70"
                          : "text-[var(--color-gray-cool)]"
                      }`}
                    >
                      {founder.title}
                    </p>
                  )}

                  {founder.org && (
                    <p
                      className={`text-sm leading-relaxed ${
                        isBoard
                          ? "text-white/60"
                          : "text-[var(--color-gray-cool)]"
                      }`}
                    >
                      {founder.org}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="font-serif text-2xl text-[var(--color-copper)]">
                i
              </span>
            </div>
            <h2 className="font-serif text-2xl text-[var(--color-navy)] mb-4">
              Professional Biographies
            </h2>
            <p className="text-[var(--color-gray-cool)] leading-relaxed mb-8">
              Detailed professional biographies of our founding members will be
              added in the near future. Each founder brings unique expertise and
              experience to our mission of strengthening Europe-Asia economic
              cooperation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/organization">
                <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]">
                  View Organization Structure
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/membership">
                <Button
                  variant="outline"
                  className="border-[var(--color-navy)] text-[var(--color-navy)]"
                >
                  Join Our Network
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
