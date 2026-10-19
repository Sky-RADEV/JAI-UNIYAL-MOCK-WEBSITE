import { useEffect } from 'react';
import { CONTENT_ENGINE_BLUEPRINT } from '../data/brandContent';
import { X, Clock, DollarSign, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import MolecularNodeSvg from './MolecularNodeSvg';

interface AudienceStrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AudienceStrategyModal({
  isOpen,
  onClose,
}: AudienceStrategyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#171426]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#F7F5F0] rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-[#171426]/20 shadow-2xl relative my-auto p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#2B2836]/70 hover:text-[#171426] rounded-md"
          aria-label="Close strategy modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C5A9F] mb-2">
          <Layers className="w-4 h-4 text-[#38BDE5]" />
          <span>Execution Framework</span>
        </div>

        <h3 className="font-serif-display text-2xl sm:text-3xl text-[#171426] mb-2">
          {CONTENT_ENGINE_BLUEPRINT.title}
        </h3>

        <p className="text-sm text-[#2B2836]/80 leading-relaxed mb-8">
          {CONTENT_ENGINE_BLUEPRINT.subtitle}
        </p>

        {/* The 1 Idea -> 4 Formats Cascade */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#171426]/10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#171426]">
              The 1 → 4 Content Repurposing Cascade
            </span>
            <span className="text-xs text-[#8C5A9F] font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#38BDE5]" />
              ~3 hours weekly
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CONTENT_ENGINE_BLUEPRINT.principles.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-[#171426]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-serif-display text-base text-[#171426]">
                      {item.format}
                    </span>
                  </div>
                  <p className="text-xs text-[#2B2836]/80 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#171426]/10 flex items-center justify-between text-[11px] text-[#8C5A9F] font-medium">
                  <span>Founder Time:</span>
                  <span className="font-mono text-[#171426] font-semibold">{item.timeCommitment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* A$1,000 Budget & Operating Stack */}
        <div className="bg-white p-6 rounded-xl border border-[#171426]/10 mb-8">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#171426]/10">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-[#38BDE5]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#171426]">
                A$1,000 Operating Budget & Stack Breakdown
              </span>
            </div>
            <span className="text-xs text-[#38BDE5] font-semibold uppercase tracking-wider">
              Lean & Sustainable
            </span>
          </div>

          <div className="space-y-3">
            {CONTENT_ENGINE_BLUEPRINT.budgetBreakdown.map((row, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-2 border-b border-[#171426]/5 last:border-0 gap-1 sm:gap-4"
              >
                <div className="font-medium text-[#171426] sm:w-1/2">
                  {row.item}
                </div>
                <div className="text-[#2B2836]/70 text-[11px] sm:w-1/3">
                  {row.note}
                </div>
                <div className="font-mono font-semibold text-[#8C5A9F] sm:w-1/6 text-left sm:text-right">
                  {row.cost}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VA / Assistant Handoff Process */}
        <div className="bg-[#171426] text-white p-6 rounded-xl flex items-start gap-4">
          <MolecularNodeSvg className="w-6 h-6 text-[#38BDE5] shrink-0 mt-1" />
          <div className="text-xs leading-relaxed">
            <span className="text-[#38BDE5] font-semibold uppercase tracking-wider block mb-1">
              Virtual Assistant Delegation Rule
            </span>
            <p className="text-white/80">
              The founder only writes or voice-records the raw monthly reflection. The VA handles formatting the markdown, creating carousel slides on Canva, and queuing the fortnightly Substack/newsletter campaign. No complex software, no burnout.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#171426] rounded-md hover:bg-[#171426]/90 transition-colors"
          >
            Close Blueprint
          </button>
        </div>
      </div>
    </div>
  );
}
