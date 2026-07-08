/*
 * DESIGN: Nordic Institutional Minimalism
 * - Project showcase
 * - Clear categorization
 */

import { Link } from "wouter";
import { ArrowRight, Calendar, MapPin, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const currentProjects = [
  {
    title: "SME Market Entry Program",
    category: "Business Development",
    region: "Southeast Asia",
    status: "Active",
    description:
      "A comprehensive program supporting small and medium enterprises from European countries in establishing business presence in Southeast Asian markets, with focus on market research, partner identification, and regulatory guidance.",
    objectives: [
      "Facilitate market entry for 20+ European SMEs",
      "Establish local partnership networks",
      "Provide regulatory compliance support",
      "Develop market intelligence resources",
    ],
  },
  {
    title: "Investment Forum Series",
    category: "Investment",
    region: "Europe & Asia",
    status: "Ongoing",
    description:
      "A series of investment forums bringing together investors, entrepreneurs, and institutions from Europe and Asia to explore cross-continental investment opportunities and foster bilateral economic relations.",
    objectives: [
      "Host quarterly investment forums",
      "Connect investors with opportunities",
      "Facilitate cross-border investments",
      "Build investor community network",
    ],
  },
  {
    title: "Digital Trade Initiative",
    category: "Trade Facilitation",
    region: "Central Asia",
    status: "Planning",
    description:
      "An initiative focused on leveraging digital technologies to streamline trade processes between European businesses and Central Asian markets, including e-commerce platforms and digital documentation systems.",
    objectives: [
      "Develop digital trade platform",
      "Simplify cross-border transactions",
      "Reduce trade barriers",
      "Enhance market accessibility",
    ],
  },
];

const pastProjects = [
  {
    title: "Trade Mission to East Asia",
    category: "Trade Mission",
    region: "Japan, Korea",
    year: "2025",
    description:
      "Organized a comprehensive trade mission to Japan and Korea, facilitating business meetings, factory visits, and networking opportunities for European companies interested in East Asian markets.",
    outcomes: [
      "15 participating companies",
      "50+ business meetings arranged",
      "3 partnership agreements initiated",
    ],
  },
  {
    title: "Regulatory Workshop Series",
    category: "Education",
    region: "Europe",
    year: "2025",
    description:
      "A series of workshops providing detailed guidance on regulatory requirements for doing business in Asian markets, covering topics from corporate establishment to intellectual property protection.",
    outcomes: [
      "6 workshops conducted",
      "200+ participants trained",
      "Comprehensive guidebook published",
    ],
  },
];

const institutionalCooperation = [
  {
    type: "Chambers of Commerce",
    description:
      "Collaborative relationships with chambers of commerce across Europe and Asia, enabling member access to local business networks and resources.",
  },
  {
    type: "Universities & Research Institutions",
    description:
      "Partnerships with academic institutions for research collaboration, knowledge exchange, and professional development programs.",
  },
  {
    type: "Government Agencies",
    description:
      "Working relationships with trade promotion agencies and economic development bodies to support member business activities.",
  },
  {
    type: "Industry Associations",
    description:
      "Cooperation with sector-specific associations to provide specialized support and industry insights to members.",
  },
];

export default function Projects() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-4xl">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Our Work
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] mb-6">
              Projects & Initiatives
            </h1>
            <p className="text-xl text-[var(--color-gray-cool)] leading-relaxed">
              EEAA develops and implements projects that advance our mission of
              strengthening economic cooperation between Europe and Asia,
              creating tangible value for our members and partners.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="py-24">
        <div className="container">
          <Tabs defaultValue="current" className="w-full">
            <TabsList className="w-full max-w-md mb-12 bg-[var(--color-stone)]">
              <TabsTrigger
                value="current"
                className="flex-1 data-[state=active]:bg-[var(--color-navy)] data-[state=active]:text-white"
              >
                Current Projects
              </TabsTrigger>
              <TabsTrigger
                value="past"
                className="flex-1 data-[state=active]:bg-[var(--color-navy)] data-[state=active]:text-white"
              >
                Past Projects
              </TabsTrigger>
            </TabsList>

            {/* Current Projects */}
            <TabsContent value="current">
              <div className="space-y-8">
                {currentProjects.map((project, index) => (
                  <div
                    key={index}
                    className="grid lg:grid-cols-12 gap-8 p-8 bg-white border border-[var(--color-stone-dark)] rounded-sm"
                  >
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            project.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : project.status === "Ongoing"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {project.status}
                        </span>
                        <span className="text-sm text-[var(--color-gray-cool)]">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-[var(--color-navy)] mb-3">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[var(--color-gray-cool)] mb-4">
                        <MapPin className="w-4 h-4" />
                        {project.region}
                      </div>
                      <p className="text-[var(--color-gray-cool)] leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="lg:col-span-7">
                      <div className="bg-[var(--color-stone)] p-6 rounded-sm h-full">
                        <h4 className="font-mono text-sm text-[var(--color-copper)] mb-4">
                          Project Objectives
                        </h4>
                        <ul className="space-y-3">
                          {project.objectives.map((obj, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-[var(--color-navy)]"
                            >
                              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                <span className="font-mono text-xs text-[var(--color-copper)]">
                                  {i + 1}
                                </span>
                              </span>
                              <span className="text-sm">{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Past Projects */}
            <TabsContent value="past">
              <div className="space-y-8">
                {pastProjects.map((project, index) => (
                  <div
                    key={index}
                    className="grid lg:grid-cols-12 gap-8 p-8 bg-[var(--color-stone)] rounded-sm"
                  >
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex items-center gap-1 text-sm text-[var(--color-gray-cool)]">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </span>
                        <span className="text-sm text-[var(--color-gray-cool)]">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-[var(--color-navy)] mb-3">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[var(--color-gray-cool)] mb-4">
                        <MapPin className="w-4 h-4" />
                        {project.region}
                      </div>
                      <p className="text-[var(--color-gray-cool)] leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="lg:col-span-7">
                      <div className="bg-white p-6 rounded-sm h-full">
                        <h4 className="font-mono text-sm text-[var(--color-copper)] mb-4">
                          Key Outcomes
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {project.outcomes.map((outcome, i) => (
                            <div
                              key={i}
                              className="text-center p-4 bg-[var(--color-stone)] rounded-sm"
                            >
                              <p className="text-sm text-[var(--color-navy)] font-medium">
                                {outcome}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Institutional Cooperation */}
      <section className="py-24 bg-[var(--color-navy)] text-white">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Partnerships
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Institutional Cooperation
            </h2>
            <p className="text-white/70 leading-relaxed">
              EEAA maintains collaborative relationships with various
              institutions across Europe and Asia, enhancing our capacity to
              serve members and advance our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {institutionalCooperation.map((item, index) => (
              <div
                key={index}
                className="border border-white/10 p-8 rounded-sm hover:border-[var(--color-copper)]/50 transition-colors"
              >
                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center mb-4">
                  {index === 0 ? (
                    <Building2 className="w-6 h-6 text-[var(--color-copper)]" />
                  ) : index === 1 ? (
                    <Users className="w-6 h-6 text-[var(--color-copper)]" />
                  ) : (
                    <Building2 className="w-6 h-6 text-[var(--color-copper)]" />
                  )}
                </div>
                <h3 className="font-serif text-xl mb-3">{item.type}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-[var(--color-navy)] mb-6">
              Interested in Our Projects?
            </h2>
            <p className="text-[var(--color-gray-cool)] leading-relaxed mb-8">
              EEAA members have opportunities to participate in our projects and
              initiatives. Contact us to learn more about current opportunities
              or to propose new project ideas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)] px-8">
                  Get Involved
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/membership">
                <Button
                  variant="outline"
                  className="border-[var(--color-navy)] text-[var(--color-navy)] px-8"
                >
                  Become a Member
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
