import { useState } from 'react';
import MolecularNodeSvg from './MolecularNodeSvg';
import { ArrowUpRight, ShieldCheck, X } from 'lucide-react';

interface FooterProps {
  founderName: string;
}

export default function Footer({ founderName }: FooterProps) {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="bg-[#171426] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand Identity & Tagline */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5 text-white mb-3">
              <MolecularNodeSvg className="w-5 h-5 text-[#38BDE5]" />
              <span className="font-serif-display text-2xl font-medium tracking-tight">
                {founderName}
              </span>
            </div>

            <p className="text-sm font-serif-display italic text-white/80 mb-4 max-w-sm">
              “Your partner in innovation & beyond”
            </p>

            <p className="text-xs text-white/60 leading-relaxed max-w-sm mb-6">
              Co-founder of ARETE Labs and Curezma. Cheerleader for startups and SMEs. Dedicated to building businesses that solve real human pain and foster genuine purpose.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#38BDE5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDE5]" />
              <span>Melbourne & Sydney · Australia</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#38BDE5] block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-white/80 font-medium">
              <li>
                <a href="#story" className="hover:text-[#38BDE5] transition-colors">
                  The Story
                </a>
              </li>
              <li>
                <a href="#ventures" className="hover:text-[#38BDE5] transition-colors">
                  Entrepreneurial Ventures
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#38BDE5] transition-colors">
                  Core Philosophy
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-[#38BDE5] transition-colors">
                  Notes & Insights
                </a>
              </li>
              <li>
                <a href="#connect" className="hover:text-[#38BDE5] transition-colors">
                  Start a Conversation
                </a>
              </li>
            </ul>
          </div>

          {/* Ventures & Ecosystem */}
          <div className="md:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#38BDE5] block mb-4">
              Official Ventures
            </span>
            <ul className="space-y-3 text-xs text-white/80 mb-6">
              <li>
                <a
                  href="https://www.arete-labs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#38BDE5] transition-colors group"
                >
                  <span className="font-semibold text-white group-hover:text-[#38BDE5]">ARETE Labs</span>
                  <span className="text-white/50">— Breakthrough R&D Formulations</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDE5]" />
                </a>
              </li>
              <li>
                <a
                  href="https://curezma.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#38BDE5] transition-colors group"
                >
                  <span className="font-semibold text-white group-hover:text-[#38BDE5]">Curezma</span>
                  <span className="text-white/50">— Steroid-Free Eczema Care</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDE5]" />
                </a>
              </li>
            </ul>

            <span className="text-xs font-semibold uppercase tracking-widest text-[#38BDE5] block mb-2">
              Professional Network
            </span>
            <div className="flex items-center gap-3 text-xs text-white/70">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38BDE5] transition-colors inline-flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#38BDE5]" />
              </a>
              <span className="text-white/20">/</span>
              <a href="#newsletter" className="hover:text-[#38BDE5] transition-colors">
                Substack Newsletter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {founderName}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setShowPrivacy(true)}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">·</span>
            <button
              type="button"
              onClick={() => setShowTerms(true)}
              className="hover:text-white transition-colors"
            >
              Editorial Terms
            </button>
            <span className="text-white/20">·</span>
            <span className="text-white/40">Australian Privacy Principles (APP)</span>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="bg-[#F7F5F0] text-[#171426] p-6 sm:p-8 rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowPrivacy(false)}
              className="absolute top-4 right-4 p-1 text-[#2B2836]/70 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif-display text-2xl mb-3">Privacy & Newsletter Policy</h3>
            <p className="text-xs sm:text-sm text-[#2B2836]/80 leading-relaxed space-y-3">
              We respect your inbox and confidentiality. Any email address submitted for the newsletter or contact inquiry is stored securely solely to transmit fortnightly reflections or direct replies. We never rent, sell, or disclose your contact information to third-party data brokers. You may unsubscribe with a single click at any time.
            </p>
            <button
              type="button"
              onClick={() => setShowPrivacy(false)}
              className="mt-6 px-4 py-2 text-xs font-semibold uppercase text-white bg-[#171426] rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {showTerms && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowTerms(false)}
        >
          <div
            className="bg-[#F7F5F0] text-[#171426] p-6 sm:p-8 rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowTerms(false)}
              className="absolute top-4 right-4 p-1 text-[#2B2836]/70 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif-display text-2xl mb-3">Editorial Terms & Disclaimers</h3>
            <p className="text-xs sm:text-sm text-[#2B2836]/80 leading-relaxed space-y-3">
              The articles and reflections on this website are shared solely for educational, philosophical, and entrepreneurial context. They do not constitute formal legal, financial, or medical advice. For clinical eczema or dermatological inquiries, always consult registered healthcare professionals. Official commercial offerings are subject to respective agreements with ARETE Labs and Curezma.
            </p>
            <button
              type="button"
              onClick={() => setShowTerms(false)}
              className="mt-6 px-4 py-2 text-xs font-semibold uppercase text-white bg-[#171426] rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
