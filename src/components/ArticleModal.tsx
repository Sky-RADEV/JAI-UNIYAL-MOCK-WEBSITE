import { useEffect } from 'react';
import { Article } from '../data/brandContent';
import { X, Clock, Calendar, ArrowLeft, BookmarkCheck } from 'lucide-react';
import MolecularNodeSvg from './MolecularNodeSvg';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#171426]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#F7F5F0] rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-[#171426]/20 shadow-2xl relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Action Bar */}
        <div className="sticky top-0 bg-[#F7F5F0]/95 backdrop-blur-md px-6 py-4 border-b border-[#171426]/10 flex items-center justify-between z-10">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2B2836] hover:text-[#38BDE5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Notes</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#8C5A9F] font-semibold uppercase tracking-wider hidden sm:inline">
              Founder Dispatch
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-md text-[#2B2836]/70 hover:text-[#171426] hover:bg-black/5"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Essay Content */}
        <div className="px-6 sm:px-12 py-8 sm:py-12">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#8C5A9F] mb-4">
            <span>{article.category}</span>
            <span aria-hidden="true" className="text-[#38BDE5]">·</span>
            <span className="flex items-center gap-1 text-[#2B2836]/70">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span aria-hidden="true" className="text-[#38BDE5]">·</span>
            <span className="flex items-center gap-1 text-[#2B2836]/70">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#171426] font-normal tracking-tight leading-tight mb-6">
            {article.title}
          </h2>

          <p className="font-serif-display text-lg sm:text-xl italic text-[#171426]/85 pb-6 mb-8 border-b border-[#171426]/10 leading-relaxed">
            {article.deck}
          </p>

          {/* Key Takeaway Callout */}
          <div className="bg-white p-5 rounded-xl border border-[#171426]/10 mb-8 flex items-start gap-3">
            <BookmarkCheck className="w-5 h-5 text-[#38BDE5] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C5A9F] block mb-0.5">
                Core Takeaway
              </span>
              <p className="font-serif-display text-base sm:text-lg text-[#171426]">
                {article.keyTakeaway}
              </p>
            </div>
          </div>

          {/* Longform Prose */}
          <div className="space-y-5 text-base sm:text-lg text-[#2B2836]/90 leading-relaxed font-normal">
            {article.content.map((p, idx) => (
              <p
                key={idx}
                className={idx === 0 ? "first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#171426]" : ""}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-12 pt-8 border-t border-[#171426]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <MolecularNodeSvg className="w-5 h-5 text-[#38BDE5]" />
              <span className="text-xs text-[#2B2836]/70 italic">
                Published from the notes of Jai Uniyal · Co-founder ARETE Labs & Curezma
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#171426] rounded-md hover:bg-[#171426]/90 transition-colors"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
