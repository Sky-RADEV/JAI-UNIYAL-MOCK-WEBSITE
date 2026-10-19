import { Quote } from 'lucide-react';
import MolecularNodeSvg from './MolecularNodeSvg';

export default function StorySection() {
  return (
    <section id="story" className="py-24 md:py-36 bg-[#F7F5F0] relative overflow-hidden">
      {/* Background graphic motif */}
      <div className="absolute top-10 right-10 opacity-15 pointer-events-none hidden lg:block">
        <MolecularNodeSvg variant="banner" className="w-80 h-32 text-[#38BDE5]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Section Header: Pure, aligned headline with no distracting pill badge */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#171426] font-normal tracking-tight leading-[1.08] sm:whitespace-nowrap">
            My Journey Wasn't a Straight Line
          </h2>
        </div>

        {/* The Entire Story in One Clear, Impactful Paragraph */}
        <div className="bg-white p-8 sm:p-12 md:p-16 rounded-3xl border border-[#171426]/10 shadow-sm">
          <p className="text-lg sm:text-xl md:text-2xl text-[#2B2836] leading-relaxed font-normal first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-4 first-letter:text-[#171426]">
            In my twenties, I fancied myself a Wall Street hotshot until the Global Financial Crisis shattered that trajectory overnight—a detour that led me into the nonprofit sector, where I learned the quiet power of empathy and grassroots resilience. Those lessons ultimately ignited my true calling in entrepreneurship: in 2019, I co-founded ARETE Labs to engineer breakthrough R&D formulations, and later founded Curezma after watching my young daughter battle chronic eczema, driving our mission to develop gentle, steroid-free topical relief. Today, I dedicate my life to building businesses that solve real human pain, championing fellow startup founders and SMEs, and discovering what becomes possible when ambition meets genuine purpose.
          </p>
        </div>

        {/* Cinematic Pull Quote Banner */}
        <div className="mt-12 md:mt-16 p-8 md:p-12 rounded-3xl bg-[#171426] text-white relative overflow-hidden shadow-xl text-center">
          <div className="w-10 h-1 bg-[#38BDE5] mx-auto mb-6" />
          <blockquote className="font-serif-display text-2xl sm:text-3xl italic font-normal leading-snug mb-4 text-white max-w-2xl mx-auto">
            “Success isn't about stubborn adherence to your initial blueprint. It's about having the humility to let life redirect your ambition toward work that truly matters.”
          </blockquote>
          <p className="text-xs font-bold uppercase tracking-widest text-[#38BDE5]">
            Jai Uniyal · Co-Founder & Startup Advocate
          </p>
        </div>
      </div>
    </section>
  );
}
