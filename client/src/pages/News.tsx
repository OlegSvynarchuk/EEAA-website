/*
 * DESIGN: Nordic Institutional Minimalism
 * - News presentation
 * - Clean card layouts
 * - Content loaded from markdown files in content/news/
 */

import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";
import { getNews } from "@/lib/news";

// Format date string for display
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function News() {
  const news = getNews();

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-4xl">
            <div className="section-number text-[var(--color-copper)] mb-4">
              Stay Informed
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] mb-6">
              News
            </h1>
            <p className="text-xl text-[var(--color-gray-cool)] leading-relaxed">
              Stay updated with the latest news from the European Economic
              Alliance for Cooperation with Asia.
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-8">
            {/* Featured News */}
            {news
              .filter((item) => item.featured)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="block grid lg:grid-cols-2 gap-8 p-8 bg-[var(--color-navy)] text-white rounded-sm hover:bg-[var(--color-navy-light)] transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[var(--color-copper)] text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                      <span className="text-white/60 text-sm">
                        {item.category}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl mb-4">
                      {item.title}
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-6">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                      <Calendar className="w-4 h-4" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                  <div className="flex items-end justify-end">
                    <span className="inline-flex items-center px-4 py-2 bg-white text-[var(--color-navy)] rounded-sm font-medium">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}

            {/* Other News */}
            <div className="grid md:grid-cols-2 gap-6">
              {news
                .filter((item) => !item.featured)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/news/${item.slug}`}
                    className="block p-6 bg-white border border-[var(--color-stone-dark)] rounded-sm hover:shadow-md hover:border-[var(--color-copper)] transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[var(--color-copper)] text-sm font-medium">
                        {item.category}
                      </span>
                      <span className="text-[var(--color-gray-cool)] text-sm">
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-[var(--color-navy)] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[var(--color-gray-cool)] text-sm leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <span className="text-[var(--color-copper)] text-sm font-medium inline-flex items-center">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
