import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { MediumArticle } from '../types/medium';
import { fetchMediumArticles, formatArticleDate } from '../utils/medium';
import { ScrollReveal } from './ScrollReveal';
import { trackContactClick } from '../utils/analytics';

export function MediumArticles() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await fetchMediumArticles(4);
        setArticles(data);
      } catch (error) {
        console.error('Failed to load Medium articles:', error);
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, []);

  const handleArticleClick = (link: string) => {
    trackContactClick('medium_article');
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  if (loading) {
    return (
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-neutral-200">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-16">
          Latest Writing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-4 animate-pulse">
              <div className="h-6 bg-neutral-200 rounded w-3/4"></div>
              <div className="h-4 bg-neutral-100 rounded w-1/2"></div>
              <div className="h-16 bg-neutral-100 rounded"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-neutral-200">
      <ScrollReveal>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-16">
          Latest Writing
        </h2>
      </ScrollReveal>

      <div className="space-y-8">
        {articles.map((article, index) => (
          <ScrollReveal key={article.link} delay={index * 0.1}>
            <div
              className="group cursor-pointer flex items-start justify-between gap-6 py-4 border-b border-neutral-200 last:border-b-0"
              onClick={() => handleArticleClick(article.link)}
            >
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-normal text-black group-hover:underline decoration-1 underline-offset-4">
                  {article.title}
                </h3>
                <p className="text-sm text-neutral-600 font-light">
                  {formatArticleDate(article.pubDate)}
                </p>
                {article.description && (
                  <p className="text-base text-neutral-700 leading-relaxed font-light line-clamp-2">
                    {article.description}
                  </p>
                )}
              </div>
              <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors flex-shrink-0 mt-1" />
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="mt-12">
          <a
            href="https://andriansoelistiyo.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-black text-black text-base font-normal transition-colors hover:bg-black hover:text-white"
            onClick={() => trackContactClick('medium_profile')}
          >
            View All Articles
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
