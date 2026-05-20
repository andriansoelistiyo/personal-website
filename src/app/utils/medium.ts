import { MediumArticle, RSS2JSONResponse } from '../types/medium';

const MEDIUM_USERNAME = 'andriansoelistiyo';
const RSS_FEED_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
const RSS2JSON_API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_FEED_URL)}`;

// Fallback articles in case API fails or rate limit exceeded
export const fallbackArticles: MediumArticle[] = [
  {
    title: "Understanding UI/UX Design Principles",
    link: `https://${MEDIUM_USERNAME}.medium.com/`,
    pubDate: new Date().toISOString(),
    description: "Explore the fundamental principles that make great user experiences."
  }
];

export async function fetchMediumArticles(limit: number = 4): Promise<MediumArticle[]> {
  try {
    const response = await fetch(RSS2JSON_API);

    if (!response.ok) {
      console.warn('RSS2JSON API failed, using fallback articles');
      return fallbackArticles.slice(0, limit);
    }

    const data: RSS2JSONResponse = await response.json();

    if (data.status !== 'ok' || !data.items || data.items.length === 0) {
      console.warn('Invalid RSS response, using fallback articles');
      return fallbackArticles.slice(0, limit);
    }

    const articles: MediumArticle[] = data.items.slice(0, limit).map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      thumbnail: item.thumbnail,
      description: stripHtmlTags(item.description || '').substring(0, 150) + '...',
      categories: item.categories
    }));

    return articles;
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return fallbackArticles.slice(0, limit);
  }
}

// Helper function to strip HTML tags from description
function stripHtmlTags(html: string): string {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

// Format date to readable string
export function formatArticleDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}
