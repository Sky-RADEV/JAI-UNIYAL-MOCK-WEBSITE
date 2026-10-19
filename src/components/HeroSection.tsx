import { useState } from 'react';
import { Play, X, ArrowUpRight, Volume2, Maximize2 } from 'lucide-react';
import MolecularNodeSvg from './MolecularNodeSvg';

interface HeroSectionProps {
  founderName: string;
  onExploreStory?: () => void;
  onReadInsights?: () => void;
}

export default function HeroSection({
  founderName,
}: HeroSectionProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const heroCategoryList = [
    { label: 'About', href: '#story' },
    { label: 'Venture', href: '#ventures' },
    { label: 'Events', href: '#insights' },
    { label: 'Coaching', href: '#philosophy' },
    { label: 'Explore', href: '#connect' },
  ];

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-[#0B0A12] text-white overflow-hidden min-h-[85vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        {/* Main 2-Column Split: Vertically centered and aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Pure Typography and Category List */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            {/* Small subtle brand mark */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#38BDE5] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDE5]" />
              <span>ABOUT {founderName.toUpperCase()}</span>
            </div>

            {/* Headline aligned in DM Serif Display matching all other sections */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.08]">
              Extraordinary lives <br />
              <span className="italic text-[#38BDE5]">answer to a higher calling</span>
            </h1>

            {/* Narrative description */}
            <p className="text-base sm:text-lg text-white/80 max-w-lg leading-relaxed font-normal">
              Entrepreneur on a mission, cheerleader for Startups & SMEs, and co-founder of ARETE Labs and Curezma. Turning unexpected detours into work that creates real impact.
            </p>

            {/* Category List: About, Programs, Events, Coaching, Explore */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#38BDE5] block mb-3 font-mono">
                EXPLORE THE ECOSYSTEM:
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {heroCategoryList.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#38BDE5] text-white hover:text-[#171426] border border-white/15 text-xs font-bold tracking-wider uppercase transition-all shadow-xs group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#38BDE5] group-hover:text-[#171426] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Pure Cinematic Video Frame (No cluttered top/bottom bars) */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="w-full max-w-xl relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#171426] cursor-pointer group"
            >
              {/* Main Video Frame Image (Guy speaking on stage with microphone) */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src="/src/assets/images/jai_uniyal_keynote_video_1792366669277.jpg"
                  alt={`${founderName} delivering keynote on stage`}
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette & Play Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 group-hover:from-black/60 transition-colors" />

                {/* Centered Glowing Play Button */}
                <div className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#38BDE5] text-[#171426] flex items-center justify-center shadow-2xl shadow-cyan-500/50 group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                </div>

                {/* Video Caption inside Frame */}
                <div className="absolute bottom-12 left-6 right-6 text-white">
                  <p className="font-serif-display text-lg sm:text-xl font-normal leading-tight drop-shadow-md text-white">
                    “When Purpose Meets Ambition: Lessons from ARETE Labs & Curezma”
                  </p>
                  <p className="text-xs text-[#38BDE5] font-mono uppercase tracking-wider mt-1 font-semibold">
                    Live Keynote Broadcast · {founderName}
                  </p>
                </div>

                {/* Sleek Minimal Video Scrubber Bar */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-2.5 bg-black/80 backdrop-blur-md flex items-center gap-3 text-white text-xs">
                  <Play className="w-3.5 h-3.5 text-[#38BDE5] fill-current" />
                  <div className="flex-1 h-1 bg-white/25 rounded-full overflow-hidden">
                    <div className="w-2/5 h-full bg-[#38BDE5] rounded-full" />
                  </div>
                  <span className="text-[10px] font-mono text-white/70">01:42 / 04:18</span>
                  <Volume2 className="w-3.5 h-3.5 text-white/70" />
                  <Maximize2 className="w-3.5 h-3.5 text-white/70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="bg-[#171426] border border-white/20 rounded-3xl max-w-3xl w-full p-6 sm:p-8 text-white relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-white/70 hover:text-white rounded-full bg-white/10"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#38BDE5] mb-3">
              <MolecularNodeSvg className="w-4 h-4 text-[#38BDE5]" />
              <span>Broadcast Keynote · {founderName}</span>
            </div>

            <h3 className="font-serif-display text-2xl sm:text-3xl font-normal mb-4">
              Building Businesses That Answer to a Higher Calling
            </h3>

            {/* Video Canvas Frame */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-black border border-white/10 flex items-center justify-center group">
              <img
                src="/src/assets/images/jai_uniyal_keynote_video_1792366669277.jpg"
                alt="Keynote presentation"
                className="w-full h-full object-cover filter brightness-85"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-[#38BDE5] text-[#171426] flex items-center justify-center shadow-xl mb-4">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <p className="font-serif-display text-xl text-white italic max-w-lg">
                  “When your commercial enterprise relieves real human suffering, ambition turns into enduring conviction.”
                </p>
                <span className="text-xs text-[#38BDE5] font-mono mt-3 uppercase tracking-wider font-bold">
                  Now Playing · Full Keynote Session
                </span>
              </div>
            </div>

            <p className="text-sm text-white/80 leading-relaxed mb-6 font-normal">
              In this keynote address, Jai explains how unexpected detours—from the Wall Street financial crisis to his daughter's severe childhood eczema—dismantled his original assumptions and laid the groundwork for co-founding ARETE Labs and Curezma.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <a
                href="#story"
                onClick={() => setIsVideoModalOpen(false)}
                className="text-xs font-bold uppercase tracking-wider text-[#38BDE5] hover:underline"
              >
                Read The Full Biographical Journey →
              </a>

              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-white text-[#171426] rounded-full hover:bg-[#38BDE5] transition-colors"
              >
                Close Broadcast
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
