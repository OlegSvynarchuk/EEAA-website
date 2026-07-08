/*
 * DESIGN: Nordic Institutional Minimalism
 * - Clear organizational hierarchy
 * - Professional governance presentation
 */

import { Link } from "wouter";
import { ArrowRight, Users, UserCheck, User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const organs = [
  {
    icon: Users,
    title: "Assembly",
    subtitle: "Highest Governing Body",
    description:
      "The Assembly is the highest organ of the Association, composed of all members. It convenes regularly to make strategic decisions, approve financial reports, elect Board members, and amend the statute when necessary.",
    responsibilities: [
      "Adopting and amending the Statute",
      "Electing and dismissing Board members",
      "Approving annual reports and financial statements",
      "Making decisions on strategic direction",
      "Approving membership fee structures",
    ],
  },
  {
    icon: UserCheck,
    title: "Board of Directors",
    subtitle: "Executive Management",
    description:
      "The Board of Directors is responsible for the operational management of the Association. It implements decisions of the Assembly and manages day-to-day activities in accordance with the Statute.",
    responsibilities: [
      "Implementing Assembly decisions",
      "Managing operational activities",
      "Preparing reports for the Assembly",
      "Proposing strategic initiatives",
      "Overseeing financial management",
    ],
    members: [
      { name: "Teodor Kern", role: "President", country: "Serbia" },
      { name: "Zlatko Edelinski", role: "Member", country: "North Macedonia" },
      { name: "Vladimir Pecić", role: "Member", country: "Serbia" },
      { name: "Jovan Cvetković", role: "Member", country: "Serbia" },
      { name: "Mirko Vlačo", role: "Member", country: "Bosnia and Herzegovina" },
    ],
  },
];

const leadership = [
  {
    icon: User,
    title: "President",
    description:
      "The President of the Board of Directors serves as the legal representative of the Association. The President chairs Board meetings, represents EEAA in external relations, and ensures implementation of strategic decisions.",
    current: "Teodor Kern",
  },
  {
    icon: User,
    title: "Vice President",
    description:
      "The Vice President supports the President in their duties and assumes presidential responsibilities in the President's absence. The position ensures continuity of leadership.",
    current: "To be appointed",
  },
  {
    icon: FileText,
    title: "Secretary",
    description:
      "The Secretary is responsible for administrative functions, maintaining records, coordinating communications, and ensuring proper documentation of all Association activities.",
    current: "To be appointed",
  },
];

export default function Organization() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-4xl">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Governance
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] mb-6">
              Organization Structure
            </h1>
            <p className="text-xl text-[var(--color-gray-cool)] leading-relaxed">
              EEAA operates under a clear governance framework designed to ensure
              transparency, accountability, and effective decision-making in
              pursuit of our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Organizational Chart Visual */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Assembly */}
            <div className="text-center mb-8">
              <div className="inline-block bg-[var(--color-navy)] text-white px-12 py-6 rounded-sm">
                <h3 className="font-serif text-xl">Assembly</h3>
                <p className="text-white/60 text-sm mt-1">All Members</p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center mb-8">
              <div className="w-0.5 h-12 bg-[var(--color-copper)]" />
            </div>

            {/* Board of Directors */}
            <div className="text-center mb-8">
              <div className="inline-block bg-[var(--color-copper)] text-white px-12 py-6 rounded-sm">
                <h3 className="font-serif text-xl">Board of Directors</h3>
                <p className="text-white/80 text-sm mt-1">5 Members</p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center mb-8">
              <div className="w-0.5 h-12 bg-[var(--color-stone-dark)]" />
            </div>

            {/* Leadership Roles */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center bg-[var(--color-stone)] p-6 rounded-sm">
                <h4 className="font-serif text-lg text-[var(--color-navy)]">
                  President
                </h4>
                <p className="text-[var(--color-gray-cool)] text-sm mt-1">
                  Legal Representative
                </p>
              </div>
              <div className="text-center bg-[var(--color-stone)] p-6 rounded-sm">
                <h4 className="font-serif text-lg text-[var(--color-navy)]">
                  Vice President
                </h4>
                <p className="text-[var(--color-gray-cool)] text-sm mt-1">
                  Deputy Leadership
                </p>
              </div>
              <div className="text-center bg-[var(--color-stone)] p-6 rounded-sm">
                <h4 className="font-serif text-lg text-[var(--color-navy)]">
                  Secretary
                </h4>
                <p className="text-[var(--color-gray-cool)] text-sm mt-1">
                  Administration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Bodies Detail */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="space-y-16">
            {organs.map((organ, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-12 gap-12 items-start"
              >
                <div className="lg:col-span-5">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-white rounded flex items-center justify-center shrink-0">
                      <organ.icon className="w-7 h-7 text-[var(--color-copper)]" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl text-[var(--color-navy)]">
                        {organ.title}
                      </h2>
                      <p className="text-[var(--color-copper)] text-sm">
                        {organ.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-[var(--color-gray-cool)] leading-relaxed">
                    {organ.description}
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div className="bg-white p-8 rounded-sm">
                    <h4 className="font-mono text-sm text-[var(--color-copper)] mb-4">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {organ.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[var(--color-navy)]"
                        >
                          <span className="w-1.5 h-1.5 bg-[var(--color-copper)] rounded-full mt-2 shrink-0" />
                          <span className="text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {organ.members && (
                      <div className="mt-8 pt-6 border-t border-[var(--color-stone)]">
                        <h4 className="font-mono text-sm text-[var(--color-copper)] mb-4">
                          Current Members
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {organ.members.map((member, i) => (
                            <div key={i} className="text-sm">
                              <p className="font-medium text-[var(--color-navy)]">
                                {member.name}
                              </p>
                              <p className="text-[var(--color-gray-cool)]">
                                {member.role} · {member.country}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Roles */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Leadership
            </div>
            <h2 className="font-serif text-3xl text-[var(--color-navy)] mb-6">
              Executive Positions
            </h2>
            <p className="text-[var(--color-gray-cool)] leading-relaxed">
              The leadership structure ensures effective management and
              representation of the Association's interests.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((role, index) => (
              <div
                key={index}
                className="border border-[var(--color-stone-dark)] p-8 rounded-sm"
              >
                <div className="w-12 h-12 bg-[var(--color-stone)] rounded flex items-center justify-center mb-6">
                  <role.icon className="w-6 h-6 text-[var(--color-copper)]" />
                </div>
                <h3 className="font-serif text-xl text-[var(--color-navy)] mb-3">
                  {role.title}
                </h3>
                <p className="text-[var(--color-gray-cool)] text-sm leading-relaxed mb-4">
                  {role.description}
                </p>
                <div className="pt-4 border-t border-[var(--color-stone)]">
                  <p className="font-mono text-xs text-[var(--color-copper)] mb-1">
                    Current
                  </p>
                  <p className="text-[var(--color-navy)] font-medium">
                    {role.current}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-navy)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl mb-6">
              Learn More About Our Foundation
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              For detailed information about our governance framework, legal
              basis, and operational structure, please refer to our founding
              documents.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/founding-act">
                <Button className="bg-[var(--color-copper)] hover:bg-[var(--color-copper-light)]">
                  Read Founding Act
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/founders">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Meet Our Founders
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
