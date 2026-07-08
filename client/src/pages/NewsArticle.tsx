/*
 * DESIGN: Nordic Institutional Minimalism
 * Single news article page
 * - Clean, readable typography
 * - Featured image support
 * - Related articles sidebar
 */

import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getNews, getNewsBySlug, type NewsItem } from "@/lib/news";
import Gallery from "@/components/Gallery";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const allNews = getNews();
  const related = allNews.filter((item) => item.slug !== currentSlug).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-[var(--color-stone-dark)]">
      <h2 className="font-serif text-2xl text-[var(--color-navy)] mb-8">
        Related News
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {related.map((item) => (
          <Link
            key={item.slug}
            href={`/news/${item.slug}`}
            className="group block"
          >
            <article className="h-full">
              {item.image && (
                <div className="aspect-video mb-4 overflow-hidden rounded-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[var(--color-copper)] text-xs font-medium uppercase tracking-wide">
                  {item.category}
                </span>
              </div>
              <h3 className="font-serif text-lg text-[var(--color-navy)] group-hover:text-[var(--color-copper)] transition-colors line-clamp-2">
                {item.title}
              </h3>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ArticleContent({ content }: { content: string }) {
  // Simple markdown-like rendering for basic formatting
  const renderContent = (text: string) => {
    const lines = text.split('\n');
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Handle lists
      if (trimmedLine.startsWith('- ')) {
        if (!inList) {
          inList = true;
          listItems = [];
        }
        listItems.push(trimmedLine.slice(2));
        return;
      } else if (inList) {
        elements.push(
          <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 text-[var(--color-gray-cool)]">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        inList = false;
        listItems = [];
      }

      // Skip empty lines
      if (!trimmedLine) return;

      // Handle headings
      if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        elements.push(
          <h3 key={index} className="font-serif text-xl text-[var(--color-navy)] mt-8 mb-4">
            {trimmedLine.slice(2, -2)}
          </h3>
        );
        return;
      }

      // Regular paragraph
      elements.push(
        <p key={index} className="text-[var(--color-gray-cool)] leading-relaxed mb-6">
          {trimmedLine}
        </p>
      );
    });

    // Handle any remaining list items
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key="list-final" className="list-disc list-inside space-y-2 mb-6 text-[var(--color-gray-cool)]">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }

    return elements;
  };

  return <div className="article-content">{renderContent(content)}</div>;
}

export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = getNewsBySlug(slug || '');

  if (!article) {
    return (
      <div className="min-h-screen bg-[var(--color-stone)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-[var(--color-navy)] mb-4">
            Article Not Found
          </h1>
          <p className="text-[var(--color-gray-cool)] mb-8">
            The news article you're looking for doesn't exist.
          </p>
          <Link href="/news">
            <Button className="bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)]">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to News
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-[var(--color-stone)]">
        <div className="container">
          <div className="max-w-3xl">
            <Link
              href="/news"
              className="inline-flex items-center text-[var(--color-copper)] hover:text-[var(--color-copper-light)] mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[var(--color-copper)] text-white text-xs font-medium uppercase tracking-wide rounded-full">
                {article.category}
              </span>
              {article.featured && (
                <span className="px-3 py-1 bg-[var(--color-navy)] text-white text-xs font-medium uppercase tracking-wide rounded-full">
                  Featured
                </span>
              )}
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-navy)] mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-6 text-[var(--color-gray-cool)]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>{article.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            {article.image && (
              <div className="mb-12 -mt-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-auto rounded-sm shadow-lg"
                />
              </div>
            )}

            {/* Excerpt as lead paragraph */}
            <p className="text-xl text-[var(--color-navy)] leading-relaxed mb-8 font-medium">
              {article.excerpt}
            </p>

            {/* Divider */}
            <hr className="hr-accent mb-8" />

            {/* Article body */}
            {article.content && <ArticleContent content={article.content} />}

            {/* Image Gallery */}
            {article.gallery && article.gallery.length > 0 && (
              <Gallery images={article.gallery} title="Photo Gallery" />
            )}

            {/* Related Articles */}
            <RelatedArticles currentSlug={article.slug} />
          </div>
        </div>
      </section>

      {/* Back to News CTA */}
      <section className="py-16 bg-[var(--color-navy)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-white/70 mb-8">
              Explore more news and updates from the European Economic Alliance.
            </p>
            <Link href="/news">
              <Button className="bg-[var(--color-copper)] hover:bg-[var(--color-copper-light)]">
                View All News
                <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
