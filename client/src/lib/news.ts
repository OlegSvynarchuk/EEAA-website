/*
 * News content loader
 * Loads markdown files from content/news/ folder
 */

export interface NewsItem {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image?: string;
  gallery?: string[];
  content?: string;
  featured: boolean;
}

function parseFrontmatter(raw: string): { data: Record<string, string | boolean | string[]>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    return { data: {}, content: raw };
  }

  const frontmatterLines = match[1].split('\n');
  const data: Record<string, string | boolean | string[]> = {};

  for (const line of frontmatterLines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value: string | boolean | string[] = line.slice(colonIndex + 1).trim();

    // Parse array values (e.g., gallery: ["/path/1", "/path/2"])
    if (value.startsWith('[') && value.endsWith(']')) {
      const arrayContent = value.slice(1, -1);
      data[key] = arrayContent.split(',').map(item => {
        const trimmed = item.trim();
        // Remove quotes from each item
        if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
          return trimmed.slice(1, -1);
        }
        return trimmed;
      });
      continue;
    }

    // Remove quotes from string values
    if (typeof value === 'string' && value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }

    // Parse boolean
    if (value === 'true') value = true;
    if (value === 'false') value = false;

    data[key] = value;
  }

  return { data, content: match[2].trim() };
}

// Import all markdown files from content/news
const newsModules = import.meta.glob<{ default: string }>('../content/news/*.md', {
  query: '?raw',
  eager: true,
});

export function getNews(): NewsItem[] {
  const news: NewsItem[] = [];

  for (const [path, module] of Object.entries(newsModules)) {
    const rawContent = typeof module === 'string' ? module : module.default;
    const { data, content } = parseFrontmatter(rawContent);

    // Extract slug from filename
    const slug = path.split('/').pop()?.replace('.md', '') || '';

    news.push({
      slug,
      date: String(data.date || ''),
      category: String(data.category || ''),
      title: String(data.title || ''),
      excerpt: String(data.excerpt || ''),
      image: data.image ? String(data.image) : undefined,
      gallery: Array.isArray(data.gallery) ? data.gallery : undefined,
      content,
      featured: Boolean(data.featured),
    });
  }

  // Sort by date descending (newest first)
  return news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  const news = getNews();
  return news.find((item) => item.slug === slug);
}
