import { useState, useEffect } from 'react';
import MolecularNodeSvg from './MolecularNodeSvg';
import { Menu, X, ArrowUpRight, Lock, CheckCircle2 } from 'lucide-react';

interface NavigationProps {
  founderName: string;
}

export default function Navigation({ founderName }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginSubmitted, setLoginSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#story' },
    { label: 'Venture', href: '#ventures' },
    { label: 'Events', href: '#insights' },
    { label: 'Coaching', href: '#philosophy' },
    { label: 'Explore', href: '#connect' },
  ];

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail) {
      setLoginSubmitted(true);
      setTimeout(() => {
        setIsLoginOpen(false);
        setLoginSubmitted(false);
        setLoginEmail('');
      }, 1500);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#171426]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3.5'
            : 'bg-[#171426] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
          {/* Brand Wordmark: Bold uppercase Tony Robbins style with molecular node logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white hover:text-[#38BDE5] transition-colors whitespace-nowrap shrink-0 group"
          >
            <MolecularNodeSvg className="w-5 h-5 text-[#38BDE5] group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-bold text-lg sm:text-xl tracking-widest uppercase text-white font-sans">
              {founderName}
            </span>
          </a>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-white/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: TWO Buttons - "Log In" and "Start Now" */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsLoginOpen(true)}
              className="hidden sm:inline-flex items-center text-xs font-bold tracking-wider uppercase text-white/80 hover:text-white transition-colors px-3 py-2 whitespace-nowrap shrink-0"
            >
              Log In
            </button>

            <a
              href="#connect"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-[#171426] bg-white rounded-full hover:bg-[#38BDE5] hover:text-[#171426] transition-all shadow-md whitespace-nowrap shrink-0"
            >
              <span>Start Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#38BDE5] rounded-md"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-30 bg-black/85 backdrop-blur-md md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-16 right-0 left-0 bg-[#171426] border-b border-white/10 px-6 py-8 shadow-2xl flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4 text-xs font-bold tracking-widest uppercase text-white/90">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 border-b border-white/10 hover:text-[#38BDE5] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsLoginOpen(true);
                }}
                className="w-full text-center py-3 text-xs font-bold tracking-widest uppercase text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              >
                Log In
              </button>
              <a
                href="#connect"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 text-xs font-bold tracking-widest uppercase text-[#171426] bg-white rounded-full hover:bg-[#38BDE5] transition-colors"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Member Log In Modal */}
      {isLoginOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsLoginOpen(false)}
        >
          <div
            className="bg-[#171426] border border-white/20 text-white p-6 sm:p-8 rounded-2xl max-w-md w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-white/70 hover:text-white rounded-full bg-white/10"
              aria-label="Close login dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#38BDE5] mb-2 font-mono">
              <Lock className="w-3.5 h-3.5" />
              <span>Subscriber & Member Portal</span>
            </div>

            <h3 className="font-serif-display text-2xl font-normal mb-2 text-white">
              Welcome back
            </h3>

            <p className="text-xs text-white/70 leading-relaxed mb-6">
              Enter your email to access the archive of Jai Uniyal's founder notes, keynote broadcasts, and subscriber dispatches.
            </p>

            {loginSubmitted ? (
              <div className="p-4 rounded-xl bg-white/10 border border-[#38BDE5]/40 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#38BDE5] shrink-0" />
                <p className="text-xs text-white">
                  Magic link sent! Check your inbox to continue reading.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label htmlFor="login-email" className="block text-[11px] font-bold uppercase tracking-wider text-white/80 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="e.g. member@venture.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-xs placeholder:text-white/40 focus:outline-none focus:border-[#38BDE5]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#38BDE5] text-[#171426] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-md"
                >
                  Send Access Link
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
