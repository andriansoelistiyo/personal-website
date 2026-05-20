export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
  description?: string;
  categories?: string[];
}

export interface RSS2JSONResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: Array<{
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    enclosure: Record<string, unknown>;
    categories: string[];
  }>;
}
