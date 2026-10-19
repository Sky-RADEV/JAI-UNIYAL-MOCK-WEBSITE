import { useState } from 'react';
import { PHILOSOPHY_PILLARS } from '../data/brandContent';
import MolecularNodeSvg from './MolecularNodeSvg';
import { ChevronRight, Compass, Lightbulb, Shield, Heart, Cpu } from 'lucide-react';

export default function PhilosophySection() {
  const [activePillar, setActivePillar] = useState<string>(PHILOSOPHY_PILLARS[0].id);

  const getIcon = (id: string) => {
    switch (id) {
      case 'personal-growth':
        return <Lightbulb className="w-5 h-5 text-[#38BDE5]" />;
      case 'resilience':
        return <Shield className="w-5 h-5 text-[#8C5A9F]" />;
      case 'purpose':
        return <Compass className="w-5 h-5 text-[#38BDE5]" />;
      case 'relationships':
        return <Heart className="w-5 h-5 text-[#8C5A9F]" />;
      case 'entrepreneurship':
        return <Cpu className="w-5 h-5 text-[#38BDE5]" />;
      default:
        return <Compass className="w-5 h-5 text-[#38BDE5]" />;
    }
  };

  const selected = PHILOSOPHY_PILLARS.find((p) => p.id === activePillar) || PHILOSOPHY_PILLARS[0];

  return (
    <section id="philosophy" className="py-24 md:py-36 bg-[#171426] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#38BDE5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none hidden lg:block">
        <MolecularNodeSvg variant="banner" className="w-96 h-36 text-[#38BDE5]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header: Tony Robbins-style bold uppercase kicker */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#38BDE5] mb-4 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDE5]" />
            <span>The Core Philosophy</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>Five Breakthrough Pillars</span>
          </div>

          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.08] mb-6">
            What I'm Learning About <br />
            <span className="italic text-[#38BDE5]">Building a Meaningful Life</span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
            These are not abstract theories or corporate platitudes. They are five hard-won operating principles that link entrepreneurial endurance to human growth.
          </p>
        </div>

        {/* 5-Theme Interconnected Grid & Deep Dive Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: 5 Pillars Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {PHILOSOPHY_PILLARS.map((pillar, index) => {
              const isCurrent = pillar.id === activePillar;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillar(pillar.id)}
                  className={`text-left p-5 rounded-xl border transition-all duration-300 flex items-start justify-between gap-4 ${
                    isCurrent
                      ? 'bg-white/10 text-white border-[#38BDE5] shadow-lg shadow-cyan-500/10'
                      : 'bg-white/[0.03] text-white/70 border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5">{getIcon(pillar.id)}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold tracking-widest uppercase font-mono ${isCurrent ? 'text-[#38BDE5]' : 'text-white/40'}`}>
                          PILLAR 0{index + 1}
                        </span>
                      </div>
                      <h3 className={`font-serif-display text-xl sm:text-2xl font-bold ${isCurrent ? 'text-white' : 'text-white/90'}`}>
                        {pillar.title}
                      </h3>
                      <p className={`text-xs mt-1.5 leading-relaxed line-clamp-2 ${isCurrent ? 'text-white/80' : 'text-white/50'}`}>
                        {pillar.summary}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 shrink-0 mt-1 transition-transform ${
                      isCurrent ? 'text-[#38BDE5] translate-x-1.5' : 'text-white/20'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Essay & Applied Principle */}
          <div className="lg:col-span-7 bg-white/[0.04] p-8 sm:p-10 md:p-12 rounded-3xl border border-white/15 relative backdrop-blur-xs">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#38BDE5] mb-4 font-mono">
              <span>PRINCIPLE IN FOCUS</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span>0{PHILOSOPHY_PILLARS.findIndex((p) => p.id === selected.id) + 1} OF 05</span>
            </div>

            <h3 className="font-serif-display text-3xl sm:text-4xl text-white mb-4">
              {selected.title}
            </h3>

            <p className="text-lg sm:text-xl font-serif-display italic text-[#38BDE5] mb-6 pb-6 border-b border-white/10 leading-relaxed">
              “{selected.summary}”
            </p>

            <div className="space-y-4 text-base text-white/85 leading-relaxed mb-8">
              <p>{selected.expandedReflection}</p>
            </div>

            {/* The Applied Principle Box */}
            <div className="bg-[#171426] p-6 rounded-2xl border border-[#38BDE5]/30 shadow-inner">
              <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-[#38BDE5]">
                <Lightbulb className="w-4 h-4" />
                <span>The Operating Reality</span>
              </div>
              <p className="font-serif-display text-lg sm:text-xl text-white">
                {selected.practicalPrinciple}
              </p>
            </div>

            <p className="text-xs text-white/50 mt-6 italic">
              * Distilled from live operational pressure across ARETE Labs and Curezma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
