import { ARTICLES, Article } from '../data/brandContent';
import { ArrowUpRight, BookOpen, Clock, Sparkles } from 'lucide-react';

interface InsightsSectionProps {
  onSelectArticle: (article: Article) => void;
  onOpenStrategy: () => void;
}

export default function InsightsSection({
  onSelectArticle,
  onOpenStrategy,
}: InsightsSectionProps) {
  return (
    <section id="insights" className="py-24 md:py-36 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#8C5A9F] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDE5]" />
              <span>Founder Notes & Teachings</span>
              <span aria-hidden="true" className="text-[#38BDE5]">·</span>
              <span>The Dispatch</span>
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#171426] font-normal tracking-tight leading-[1.08] mb-4">
              Notes From the Journey
            </h2>

            <p className="text-base sm:text-lg text-[#2B2836]/90 leading-relaxed font-normal">
              Honest reflections on entrepreneurship, personal growth, resilience, and the lessons that emerge when you're building something that matters.
            </p>
          </div>

          {/* Tony Robbins-style bold uppercase action button (targeted by CSS selector 1) */}
          <button
            type="button"
            onClick={onOpenStrategy}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold tracking-widest uppercase text-white bg-[#171426] hover:bg-[#38BDE5] hover:text-[#171426] border border-[#38BDE5]/50 rounded shadow-md transition-all shrink-0 group focus-visible:outline-2 focus-visible:outline-[#38BDE5]"
          >
            <Sparkles className="w-4 h-4 text-[#38BDE5] group-hover:text-[#171426] transition-colors" />
            <span>Audience Strategy: 1 Idea → 4 Formats</span>
          </button>
        </div>

        {/* 3 Editorial Cards Grid: Tony Robbins Masterclass Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-[#171426]/10 p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-[#38BDE5] hover:shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#171426]/10">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C5A9F] font-mono">
                    {article.category}
                  </span>
                  <span className="text-xs font-bold text-[#38BDE5] font-mono">
                    0{idx + 1}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-medium text-[#2B2836]/60 mb-3">
                  <Clock className="w-3.5 h-3.5 text-[#38BDE5]" />
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-serif-display text-2xl text-[#171426] font-bold leading-snug mb-3 group-hover:text-[#38BDE5] transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-[#2B2836]/80 leading-relaxed font-normal mb-8">
                  {article.deck}
                </p>
              </div>

              <div className="pt-5 border-t border-[#171426]/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectArticle(article)}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#171426] group-hover:text-[#38BDE5] transition-colors"
                >
                  <span>Read The Story</span>
                  <ArrowUpRight className="w-4 h-4 text-[#38BDE5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Multi-Format Strip */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-[#171426]/10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5 font-bold uppercase tracking-wider text-[#171426]">
            <BookOpen className="w-4 h-4 text-[#8C5A9F]" />
            <span>The Multi-Format Publishing Architecture:</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-semibold text-[#2B2836]/70 uppercase tracking-wider text-[11px]">
            <span>Long-form Essays</span>
            <span aria-hidden="true" className="text-[#38BDE5]">·</span>
            <span>Fortnightly Dispatch</span>
            <span aria-hidden="true" className="text-[#38BDE5]">·</span>
            <span>LinkedIn Founder Insights</span>
            <span aria-hidden="true" className="text-[#38BDE5]">·</span>
            <span>Podcast Guest Conversations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
