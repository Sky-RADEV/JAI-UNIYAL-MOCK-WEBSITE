import { useState } from 'react';
import { VENTURES, Venture } from '../data/brandContent';
import MolecularNodeSvg from './MolecularNodeSvg';
import { ArrowUpRight, Check, X, Microscope, HeartHandshake, ExternalLink } from 'lucide-react';

export default function VenturesSection() {
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);

  return (
    <section id="ventures" className="py-24 md:py-36 bg-white border-t border-[#171426]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header: Tony Robbins-style bold uppercase kicker */}
        <div className="max-w-5xl mb-16 md:mb-20">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#8C5A9F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDE5]" />
            <span>Commercial & Impact Footprint</span>
            <span aria-hidden="true" className="text-[#38BDE5]">·</span>
            <span>Active Ventures</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#171426] font-normal tracking-tight leading-[1.12] mb-6 lg:whitespace-nowrap">
            Different Ventures — <span className="italic text-[#171426]/90">A Shared Belief in Making a Difference</span>
          </h2>

          <p className="text-base sm:text-lg text-[#2B2836]/90 leading-relaxed font-normal">
            I'm interested in more than building businesses. I'm interested in the problems we choose to solve, the people we help, and what becomes possible when innovation meets a meaningful purpose.
          </p>
        </div>

        {/* The Two Distinct Venture Feature Sections: Bold cinematic layout */}
        <div className="space-y-16 md:space-y-24">
          {VENTURES.map((venture, index) => {
            const isArete = venture.id === 'arete-labs';
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={venture.id}
                className="bg-[#F7F5F0] rounded-3xl border border-[#171426]/10 p-6 sm:p-10 md:p-14 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Visual Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative group overflow-hidden rounded-2xl border border-[#171426]/10 shadow-lg">
                      <div className="aspect-[16/10] overflow-hidden bg-[#171426]">
                        <img
                          src={venture.image}
                          alt={`${venture.name} - ${venture.headline}`}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Floating node badge */}
                      <div className="absolute top-4 left-4 bg-[#171426]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded text-xs font-bold tracking-wider uppercase flex items-center gap-2 border border-white/10">
                        {isArete ? (
                          <Microscope className="w-3.5 h-3.5 text-[#38BDE5]" />
                        ) : (
                          <HeartHandshake className="w-3.5 h-3.5 text-[#8C5A9F]" />
                        )}
                        <span>{venture.yearEstablished}</span>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Text Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'} flex flex-col items-start`}>
                    {/* Category Label */}
                    <span className="text-xs font-bold tracking-widest uppercase text-[#8C5A9F] mb-3 font-mono">
                      {venture.category}
                    </span>

                    {/* Venture Name & Headline */}
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-serif-display text-3xl sm:text-4xl text-[#171426] font-bold">
                        {venture.name}
                      </h3>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#171426] bg-white border border-[#171426]/15 px-3 py-1 rounded">
                        {venture.role}
                      </span>
                    </div>

                    <h4 className="font-serif-display text-xl sm:text-2xl text-[#171426]/90 italic mb-5">
                      “{venture.headline}”
                    </h4>

                    {/* Copy */}
                    <p className="text-sm sm:text-base text-[#2B2836]/90 leading-relaxed mb-6 font-normal">
                      {venture.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-5 border-t border-[#171426]/10 text-xs sm:text-sm text-[#2B2836] font-medium">
                      {venture.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#38BDE5] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Group: Tony Robbins bold uppercase tracking */}
                    <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
                      <a
                        href={venture.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-widest uppercase text-white bg-[#171426] rounded hover:bg-[#38BDE5] hover:text-[#171426] transition-all shadow-md focus-visible:outline-2 focus-visible:outline-[#38BDE5]"
                      >
                        <span>Discover {venture.name}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#38BDE5]" />
                      </a>

                      <button
                        type="button"
                        onClick={() => setSelectedVenture(venture)}
                        className="inline-flex items-center justify-center px-5 py-3.5 text-xs font-bold tracking-widest uppercase text-[#171426] bg-white border border-[#171426]/20 rounded hover:border-[#38BDE5] transition-colors"
                      >
                        Read The Backstory
                      </button>
                    </div>

                    {venture.disclaimer && (
                      <p className="text-[11px] text-[#2B2836]/60 italic mt-5 leading-normal">
                        {venture.disclaimer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Backstory Modal */}
      {selectedVenture && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#171426]/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          onClick={() => setSelectedVenture(null)}
        >
          <div
            className="bg-[#F7F5F0] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#171426]/20 p-6 sm:p-10 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedVenture(null)}
              className="absolute top-5 right-5 p-2 text-[#2B2836]/70 hover:text-[#171426] rounded-md"
              aria-label="Close backstory modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#8C5A9F] mb-3">
              <span>{selectedVenture.name}</span>
              <span aria-hidden="true">·</span>
              <span>The Mission Origin</span>
            </div>

            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#171426] mb-5">
              {selectedVenture.headline}
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#2B2836]/90 leading-relaxed">
              {selectedVenture.fullStory.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#171426]/10 flex items-center justify-between">
              <a
                href={selectedVenture.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#38BDE5] hover:underline"
              >
                <span>Visit Official {selectedVenture.name} Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setSelectedVenture(null)}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-[#171426] rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
