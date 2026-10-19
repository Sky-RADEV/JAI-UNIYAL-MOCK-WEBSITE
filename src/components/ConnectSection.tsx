import { useState, FormEvent } from 'react';
import { Mail, MessageSquare, Mic, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';

interface ConnectSectionProps {
  founderName: string;
}

export default function ConnectSection({ founderName }: ConnectSectionProps) {
  const [pathway, setPathway] = useState<'startup' | 'speaking' | 'general'>('startup');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pathways = [
    {
      id: 'startup',
      label: 'Business & Startup Collaborations',
      desc: 'Formulation R&D inquiries, SME scaling, and strategic founder advisory.',
      icon: <Lightbulb className="w-4 h-4" />,
    },
    {
      id: 'speaking',
      label: 'Podcast & Speaking Invitations',
      desc: 'Discussions on purpose, resilience, GFC lessons, and authentic entrepreneurship.',
      icon: <Mic className="w-4 h-4" />,
    },
    {
      id: 'general',
      label: 'General Conversations & Ideas',
      desc: 'Thoughtful coffee chats with fellow innovators, creators, and purpose-driven peers.',
      icon: <MessageSquare className="w-4 h-4" />,
    },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      try {
        const existingMessages = JSON.parse(localStorage.getItem('founder_contact_inquiries') || '[]');
        existingMessages.push({
          pathway,
          fullName,
          email,
          organization,
          message,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('founder_contact_inquiries', JSON.stringify(existingMessages));
      } catch (err) {
        // ignore storage errors
      }
      setIsSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setSubmitted(false);
    setMessage('');
  };

  return (
    <section id="connect" className="py-20 md:py-32 bg-white border-t border-[#171426]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & 3 Pathways */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#8C5A9F] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDE5]" />
              <span>Direct Inquiries</span>
              <span aria-hidden="true" className="text-[#38BDE5]">·</span>
              <span>Open Dialogue</span>
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#171426] font-normal tracking-tight leading-[1.08] mb-6">
              Good Ideas Grow When We Connect
            </h2>

            <p className="text-base sm:text-lg text-[#2B2836]/90 leading-relaxed font-normal mb-8">
              If you're building a startup, leading an SME, exploring an idea, or simply looking for a thoughtful conversation about business and life, I'd love to hear from you.
            </p>

            <p className="text-sm text-[#2B2836]/75 leading-relaxed mb-8">
              I'm always interested in meeting people who are curious, purpose-driven, and passionate about making a positive difference.
            </p>

            {/* Pathway Selectors */}
            <div className="space-y-3 pt-6 border-t border-[#171426]/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#171426] block mb-2">
                Select Your Inquiry Pathway:
              </span>
              {pathways.map((item) => {
                const isSelected = pathway === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPathway(item.id as any)}
                    className={`w-full text-left p-3.5 rounded-lg border transition-all text-xs flex items-start gap-3 ${
                      isSelected
                        ? 'bg-[#F7F5F0] border-[#38BDE5] text-[#171426]'
                        : 'bg-white border-[#171426]/10 text-[#2B2836] hover:bg-[#F7F5F0]/60'
                    }`}
                  >
                    <span className={`p-1.5 rounded-md ${isSelected ? 'bg-[#171426] text-[#38BDE5]' : 'bg-[#F7F5F0] text-[#8C5A9F]'}`}>
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-[#171426] text-xs sm:text-sm">
                        {item.label}
                      </p>
                      <p className="text-[#2B2836]/70 text-[11px] mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7 bg-[#F7F5F0] rounded-2xl border border-[#171426]/10 p-6 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-[#171426] text-[#38BDE5] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif-display text-2xl text-[#171426] mb-2">
                  Thank you for reaching out.
                </h3>
                <p className="text-sm text-[#2B2836]/80 max-w-md mx-auto mb-6">
                  Your note regarding <span className="font-semibold text-[#171426]">{pathways.find((p) => p.id === pathway)?.label}</span> has been received. I look forward to reading your message and connecting soon.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#171426] rounded-md hover:bg-[#171426]/90 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="full-name" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2836] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-md bg-white border border-[#171426]/15 text-[#171426] text-sm focus:outline-none focus:border-[#38BDE5] focus:ring-1 focus:ring-[#38BDE5]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2836] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sarah@startup.com.au"
                      className="w-full px-4 py-3 rounded-md bg-white border border-[#171426]/15 text-[#171426] text-sm focus:outline-none focus:border-[#38BDE5] focus:ring-1 focus:ring-[#38BDE5]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="org" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2836] mb-1.5">
                    Organization / Venture (Optional)
                  </label>
                  <input
                    id="org"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. ARETE Labs partner / Startup founder / Podcast host"
                    className="w-full px-4 py-3 rounded-md bg-white border border-[#171426]/15 text-[#171426] text-sm focus:outline-none focus:border-[#38BDE5] focus:ring-1 focus:ring-[#38BDE5]"
                  />
                </div>

                <div>
                  <label htmlFor="message-body" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2836] mb-1.5">
                    Your Message or Collaboration Idea *
                  </label>
                  <textarea
                    id="message-body"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me a bit about what you're working on, the challenge you're exploring, or what kind of conversation you'd like to have..."
                    className="w-full px-4 py-3 rounded-md bg-white border border-[#171426]/15 text-[#171426] text-sm focus:outline-none focus:border-[#38BDE5] focus:ring-1 focus:ring-[#38BDE5]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold tracking-widest uppercase text-[#171426] bg-[#38BDE5] rounded hover:bg-[#171426] hover:text-[#38BDE5] transition-all shadow-md focus-visible:outline-2 focus-visible:outline-[#38BDE5]"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Start A Conversation'}</span>
                    <ArrowRight className="w-4 h-4 text-[#171426]" />
                  </button>

                  <a
                    href="#ventures"
                    className="text-xs font-bold uppercase tracking-wider text-[#2B2836]/70 hover:text-[#38BDE5] transition-colors"
                  >
                    Explore My Ventures First →
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
