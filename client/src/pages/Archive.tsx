/**
 * PAGE: News Archive
 * DESIGN: Nordic Institutional Minimalism
 * - Year + month navigation (previous 3 years)
 * - Archive list with “type” and “category”
 * - Simple pagination imitation
 */

import { Link } from "wouter";
import {
  ArrowRight,
  Calendar,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const years = [
  {
    year: 2026,
    months: ["January", "February", "March", "April", "May", "June"],
  },
  {
    year: 2025,
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "September",
      "November",
      "December",
    ],
  },
  {
    year: 2024,
    months: ["February", "March", "May", "June", "October", "November"],
  },
];

const archiveItems = [
  {
    date: "January 15, 2026",
    type: "News",
    category: "Announcement",
    title: "EEAA Launches New SME Market Entry Program",
    excerpt:
      "A structured support program helping SMEs evaluate market readiness and build partner pipelines in Southeast Asia.",
  },
  {
    date: "December 20, 2025",
    type: "Publication",
    category: "Report",
    title: "Annual Trade Analysis Report Published",
    excerpt:
      "An overview of Europe–Asia trade flows with sector highlights and priority corridors for 2026 planning.",
  },
  {
    date: "December 15, 2025",
    type: "Event Recap",
    category: "Forum",
    title: "Investment Forum Concludes Successfully",
    excerpt:
      "Over 100 participants and cross-border matchups across manufacturing, agribusiness, and services.",
  },
  {
    date: "November 28, 2025",
    type: "News",
    category: "Governance",
    title: "New Board Member Appointments",
    excerpt:
      "Leadership strengthening and expanded regional coverage for member coordination and partner outreach.",
  },
  {
    date: "October 08, 2024",
    type: "News",
    category: "Partnership",
    title: "Memorandum Signed with Regional Business Network",
    excerpt:
      "A framework for joint events, investor briefings, and member referrals across priority markets.",
  },
  {
    date: "March 19, 2024",
    type: "Publication",
    category: "Guide",
    title: "Practical Market Entry Checklist (Preview)",
    excerpt:
      "A concise checklist covering documentation, compliance, and operational readiness for new markets.",
  },
];

const pages = [
  { label: "1", active: true },
  { label: "2", active: false },
  { label: "3", active: false },
];

export default function Archive() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-4xl">
            <div className="section-number text-[var(--color-copper)] mb-4">
              News & Events
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] mb-6">
              Archive
            </h1>
            <p className="text-xl text-[var(--color-gray-cool)] leading-relaxed">
              Browse historical announcements, publications, and event recaps by
              year and month. (Placeholder archive structure.)
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/news">
                <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]">
                  Back to News & Events
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-[var(--color-navy)] text-[var(--color-navy)]"
                >
                  Media Inquiries
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Navigation + List */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left: Year / Month navigation */}
            <aside className="lg:col-span-4">
              <div className="p-8 bg-[var(--color-stone)] rounded-sm">
                <h2 className="font-serif text-2xl text-[var(--color-navy)] mb-2">
                  Browse by Date
                </h2>
                <p className="text-sm text-[var(--color-gray-cool)] leading-relaxed mb-6">
                  Select a year and month to filter items. (This is a static
                  placeholder—wire it later.)
                </p>

                <div className="space-y-6">
                  {years.map(y => (
                    <div key={y.year}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[var(--color-copper)]" />
                          <span className="font-mono text-sm text-[var(--color-navy)]">
                            {y.year}
                          </span>
                        </div>
                        <span className="text-xs text-[var(--color-gray-cool)]">
                          {y.months.length} months
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {y.months.map(m => (
                          <button
                            key={`${y.year}-${m}`}
                            className="px-3 py-1 text-xs border border-[var(--color-stone-dark)] bg-white text-[var(--color-navy)] rounded-sm hover:border-[var(--color-copper)] hover:text-[var(--color-copper)] transition-colors"
                            type="button"
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--color-stone-dark)]">
                  <p className="text-xs text-[var(--color-gray-cool)]">
                    Tip: You can later connect these buttons to query params
                    like <span className="font-mono">?year=2025&month=12</span>.
                  </p>
                </div>
              </div>
            </aside>

            {/* Right: Archive list */}
            <div className="lg:col-span-8">
              <div className="flex items-end justify-between gap-6 mb-8 flex-wrap">
                <div>
                  <h2 className="font-serif text-2xl text-[var(--color-navy)] mb-2">
                    Archived Items
                  </h2>
                  <p className="text-[var(--color-gray-cool)]">
                    Showing:{" "}
                    <span className="text-[var(--color-navy)]">All</span>{" "}
                    (placeholder)
                  </p>
                </div>

                {/* Fake filter chips */}
                <div className="flex flex-wrap gap-2">
                  {["All", "News", "Publications", "Event Recaps"].map(x => (
                    <button
                      key={x}
                      type="button"
                      className={`px-3 py-1 text-xs rounded-sm border transition-colors ${
                        x === "All"
                          ? "bg-[var(--color-navy)] text-white border-[var(--color-navy)]"
                          : "bg-white text-[var(--color-navy)] border-[var(--color-stone-dark)] hover:border-[var(--color-copper)] hover:text-[var(--color-copper)]"
                      }`}
                    >
                      {x}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {archiveItems.map((item, idx) => (
                  <article
                    key={idx}
                    className="p-6 bg-white border border-[var(--color-stone-dark)] rounded-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                      <div className="flex items-center gap-2 text-sm text-[var(--color-gray-cool)]">
                        <Calendar className="w-4 h-4 text-[var(--color-copper)]" />
                        <span>{item.date}</span>
                      </div>

                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--color-stone)] text-[var(--color-navy)] border border-[var(--color-stone-dark)]">
                        {item.type}
                      </span>

                      <span className="text-xs font-medium text-[var(--color-copper)]">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-[var(--color-navy)] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[var(--color-gray-cool)] leading-relaxed mb-4">
                      {item.excerpt}
                    </p>

                    <button
                      type="button"
                      className="text-[var(--color-copper)] text-sm font-medium inline-flex items-center hover:underline"
                    >
                      Open item
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </article>
                ))}
              </div>

              {/* Fake Pagination */}
              <div className="mt-10 flex items-center justify-between gap-4 flex-wrap">
                <div className="text-sm text-[var(--color-gray-cool)]">
                  Page <span className="text-[var(--color-navy)]">1</span> of{" "}
                  <span className="text-[var(--color-navy)]">3</span>{" "}
                  (placeholder)
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="border-[var(--color-navy)] text-[var(--color-navy)]"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  {pages.map(p => (
                    <button
                      key={p.label}
                      type="button"
                      className={`w-10 h-10 rounded-sm border text-sm font-medium transition-colors ${
                        p.active
                          ? "bg-[var(--color-navy)] text-white border-[var(--color-navy)]"
                          : "bg-white text-[var(--color-navy)] border-[var(--color-stone-dark)] hover:border-[var(--color-copper)] hover:text-[var(--color-copper)]"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}

                  <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]">
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Small footer note */}
              <div className="mt-10 p-6 bg-[var(--color-stone)] rounded-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-[var(--color-copper)]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[var(--color-navy)] mb-1">
                      Archive Content Library
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
