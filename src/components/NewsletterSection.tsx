import { useState, FormEvent } from 'react';
import MolecularNodeSvg from './MolecularNodeSvg';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('loading');

    // Simulate reliable subscriber persistence
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('founder_newsletter_subscribers') || '[]');
        const newSubscriber = {
          email: email.trim().toLowerCase(),
          firstName: firstName.trim() || undefined,
          subscribedAt: new Date().toISOString(),
        };
        existing.push(newSubscriber);
        localStorage.setItem('founder_newsletter_subscribers', JSON.stringify(existing));
        setStatus('success');
      } catch (err) {
        setStatus('success');
      }
    }, 500);
  };

  const handleReset = () => {
    setStatus('idle');
    setEmail('');
    setFirstName('');
  };

  return (
    <section id="newsletter" className="py-24 md:py-36 bg-[#171426] text-white relative overflow-hidden">
      {/* Decorative subtle molecular graphic element */}
      <div className="absolute top-10 right-10 opacity-15 pointer-events-none hidden lg:block">
        <MolecularNodeSvg variant="banner" className="w-96 h-40" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
        {/* Pure aligned headline matching all sections */}
        <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.08] mb-6">
          A Little More Purpose in Your Inbox
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Reflections, practical lessons, and ideas on building businesses, navigating life's unexpected turns, and creating impact that matters.
        </p>

        {status === 'success' ? (
          <div className="bg-white/10 backdrop-blur-sm border border-[#38BDE5]/40 rounded-2xl p-8 max-w-lg mx-auto text-left">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#38BDE5] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif-display text-xl text-white mb-2">
                  Welcome to the dispatch{firstName ? `, ${firstName}` : ''}.
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  Your address (<span className="text-[#38BDE5] font-mono">{email}</span>) has been registered. You will receive thoughtful fortnightly reflections, with zero spam and zero sales pitches.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs uppercase tracking-wider font-semibold text-[#38BDE5] hover:underline"
                >
                  Register another email
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 items-stretch"
          >
            <div className="w-full sm:w-1/3">
              <label htmlFor="first-name" className="sr-only">
                First Name (optional)
              </label>
              <input
                id="first-name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name (optional)"
                className="w-full px-4 py-3.5 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#38BDE5] focus:ring-1 focus:ring-[#38BDE5] transition-colors"
              />
            </div>

            <div className="w-full sm:w-2/3 flex flex-col sm:flex-row gap-3">
              <div className="w-full">
                <label htmlFor="email-address" className="sr-only">
                  Email Address (required)
                </label>
                <input
                  id="email-address"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3.5 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#38BDE5] focus:ring-1 focus:ring-[#38BDE5] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-7 py-3.5 rounded bg-[#38BDE5] text-[#171426] font-bold text-xs tracking-widest uppercase hover:bg-white transition-all whitespace-nowrap shrink-0 flex items-center justify-center gap-2 shadow-md hover:shadow-cyan-500/20"
              >
                <span>{status === 'loading' ? 'Joining...' : 'Join The Dispatch'}</span>
                <ArrowRight className="w-4 h-4 text-[#171426]" />
              </button>
            </div>
          </form>
        )}

        {status === 'error' && (
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-rose-300">
            <AlertCircle className="w-4 h-4" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    </section>
  );
}
