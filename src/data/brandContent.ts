export interface Venture {
  id: 'arete-labs' | 'curezma';
  name: string;
  category: string;
  tagline: string;
  headline: string;
  yearEstablished: string;
  role: string;
  description: string;
  fullStory: string[];
  externalUrl: string;
  image: string;
  badgeAccent: string;
  features: string[];
  disclaimer?: string;
}

export interface PhilosophyPillar {
  id: string;
  title: string;
  summary: string;
  expandedReflection: string;
  practicalPrinciple: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  deck: string;
  content: string[];
  keyTakeaway: string;
}

export interface TimelineMilestone {
  era: string;
  title: string;
  label: string;
  story: string;
  insight: string;
}

export const FOUNDER_DEFAULT = {
  name: 'Jai Uniyal',
  isPlaceholder: false,
  publicTitle: 'Entrepreneur · Innovator · Startup Cheerleader',
  tagline: 'Your partner in innovation & beyond',
  positioning: 'Entrepreneur on a mission and Cheerleader for Start-ups & SMEs.',
  coreMessage: 'Build a better business. Become a better human. Create an impact that matters.',
  heroHeadline: 'Build Something Meaningful. Become Someone Better.',
  heroLead:
    "I'm an entrepreneur on a mission, a cheerleader for startups and SMEs, and a believer in the power of ideas that make a difference. Here, I share lessons from building businesses, navigating unexpected turns, and finding purpose in the work we do.",
  location: 'Melbourne & Sydney, Australia',
};

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    era: 'Chapter 01',
    label: 'The Early Ambition',
    title: 'A Career in Finance',
    story:
      'In my twenties, I fancied myself a Wall Street hotshot. I was captivated by high-stakes momentum, capital markets, and the conventional playbook of financial prestige.',
    insight: 'Ambition is a powerful engine, but when detached from real-world utility, it runs on borrowed fuel.',
  },
  {
    era: 'Chapter 02',
    label: 'The Unexpected Turn',
    title: 'The Global Financial Crisis',
    story:
      'Then the Global Financial Crisis arrived with no warning. That dream fizzled out faster than a New York minute. What seemed like an immutable career trajectory vanished practically overnight.',
    insight: 'Sudden disruption is rarely pleasant, but it is often the greatest antidote to autopilot complacency.',
  },
  {
    era: 'Chapter 03',
    label: 'The Transition',
    title: 'Working in the Nonprofit Sector',
    story:
      'Leaving the financial bubble behind, I joined the nonprofit sector. For the first time, my daily work centered on community resilience, empathy, and grassroots problem-solving without the cushion of corporate safety nets.',
    insight: 'True value isn’t calculated on a balance sheet; it is measured in lives tangibly eased or strengthened.',
  },
  {
    era: 'Chapter 04',
    label: 'The Entrepreneurial Chapter',
    title: 'Co-Founding ARETE Labs & Curezma',
    story:
      'In 2019, I co-founded ARETE Labs to push boundaries in scientific formulation and R&D. Later, watching my young daughter struggle through chronic eczema inspired the creation of Curezma to engineer steroid-free topical relief.',
    insight: 'The problems closest to our personal vulnerabilities often hold the greatest entrepreneurial conviction.',
  },
  {
    era: 'Chapter 05',
    label: 'The Bigger Mission',
    title: 'Sharing Lessons & Championing Founders',
    story:
      'Today, alongside building our ventures, I dedicate time to cheering on fellow founders, sharing the unvarnished reality of early-stage growth, and exploring what becomes possible when commerce aligns with human purpose.',
    insight: 'Success is not about climbing a solo ladder; it is about widening the platform so others can build meaningfully too.',
  },
];

export const VENTURES: Venture[] = [
  {
    id: 'arete-labs',
    name: 'ARETE Labs',
    category: 'RESEARCH · DEVELOPMENT · INNOVATION',
    tagline: 'Your partner in innovation & beyond',
    headline: 'Turning Ideas Into Innovative Solutions.',
    yearEstablished: 'Est. 2019',
    role: 'Co-Founder & Director',
    description:
      'ARETE Labs is an R&D startup established in 2019. We develop breakthrough formulations for the personal care, pet care, and pharmaceutical wellness and over-the-counter industries.',
    fullStory: [
      'ARETE Labs was born from a fundamental frustration: many consumer and wellness categories rely on outdated formulation blueprints and incremental packaging tweaks rather than true chemical and biological innovation.',
      'At its heart, our work is about exploration, scientific precision, and finding opportunities to solve real-world formulation bottlenecks through dedicated research and rigorous development.',
      'From advanced botanical delivery mechanisms to next-generation stability in topical actives, we partner with forward-thinking brands and SMEs across Australasia to turn lab hypotheses into shelf-ready, compliant solutions.',
    ],
    externalUrl: 'https://www.arete-labs.com/',
    image: '/src/assets/images/arete_labs_innovation_1792362488560.jpg',
    badgeAccent: '#38BDE5',
    features: [
      'Custom Active Delivery Formulations',
      'Pharmaceutical Wellness & OTC Compliance',
      'Next-Gen Personal & Pet Care Chemistry',
      'Bespoke Formulation Prototyping',
    ],
  },
  {
    id: 'curezma',
    name: 'Curezma',
    category: 'PURPOSE · PERSONAL STORY · SKIN HEALTH',
    tagline: 'Empathetic dermatological innovation',
    headline: 'When a Personal Challenge Becomes a Mission.',
    yearEstablished: 'Purpose-Driven Brand',
    role: 'Co-Founder',
    description:
      "Curezma was inspired by my daughter's journey with eczema. What began as a personal search for a better solution grew into a mission to develop an effective steroid-free topical treatment for people living with eczema.",
    fullStory: [
      'There is a unique helplessness every parent feels when watching their child scratch until their skin is raw and broken, while relying indefinitely on topical steroids with known skin-thinning side effects.',
      'What began at the kitchen table as a frantic search for alternatives became an obsession. Building Curezma has reinforced my belief that entrepreneurship can be deeply personal. The problems closest to us can inspire us to create solutions that matter to many others.',
      'Our vision is simple yet urgent: to help people affected by eczema live more fully, with less discomfort, fewer sleepless nights, and fewer limitations.',
    ],
    externalUrl: 'https://curezma.com/',
    image: '/src/assets/images/curezma_skin_care_1792362489632.jpg',
    badgeAccent: '#8C5A9F',
    features: [
      'Targeted Steroid-Free Topical Relief',
      'Gentle Barrier Repair & Soothing Lipid Profiles',
      'Developed with Empathy for Sensitive Families',
      'Rigorous Dermatological Philosophy',
    ],
    disclaimer:
      'Notice: Formulations are designed to provide cosmetic soothing and symptomatic comfort for dry, eczema-prone skin. Always consult a healthcare professional for clinical diagnoses.',
  },
];

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    id: 'personal-growth',
    title: 'Personal Growth',
    summary: 'Keep learning, challenge assumptions, and allow experience to change your perspective.',
    expandedReflection:
      'We often enter entrepreneurship believing our technical knowledge is our primary asset. In reality, the most critical skill is epistemic humility: the willingness to admit what isn’t working and unlearn obsolete assumptions before the market forces you to.',
    practicalPrinciple: 'Audit your core assumptions quarterly. What did you swear by twelve months ago that you now view with nuance?',
  },
  {
    id: 'resilience',
    title: 'Confidence & Resilience',
    summary: 'Learn to navigate uncertainty, accept setbacks, and keep taking thoughtful action.',
    expandedReflection:
      'Confidence is not the absence of doubt or the blind bravado of a keynote speaker. True resilience is built in the quiet aftermath of a broken deal or a failed test batch, when you calmly sit down the next morning and ask, "What is the single most constructive move right now?"',
    practicalPrinciple: 'Separate the event from your identity. A setback is diagnostic data, not a verdict on your worth.',
  },
  {
    id: 'purpose',
    title: 'Purpose & Meaning',
    summary: 'Look beyond status and financial success to consider the value and impact of the work you do.',
    expandedReflection:
      'Profit is oxygen for any business—without it, the venture suffocates. But nobody wakes up energized simply to generate cash flow. When your enterprise genuinely relieves pain or solves an unaddressed bottleneck, fatigue turns into enduring stamina.',
    practicalPrinciple: 'Ground every commercial initiative in a living human beneficiary.',
  },
  {
    id: 'relationships',
    title: 'Relationships & Leadership',
    summary: 'Build trust, lead with empathy, and recognize that meaningful achievements rarely happen alone.',
    expandedReflection:
      'Transactions close deals, but shared values build enduring enterprises. The founders who thrive across decades are those who treat supplier partners, lab technicians, and early team members with genuine dignity and transparency.',
    practicalPrinciple: 'Prioritize long-term relational goodwill over short-term negotiation leverage.',
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship & Innovation',
    summary: 'Turn ideas into action, solve real problems, and learn from the process of building something new.',
    expandedReflection:
      'Ideas are cheap; disciplined execution across messy variables is where value lives. True innovation doesn’t require inventing a new particle—it often involves synthesizing proven insights from disparate fields to solve a specific pain point cleanly.',
    practicalPrinciple: 'Build the simplest viable feedback loop. Test in reality before polishing in isolation.',
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'when-life-doesnt-follow-your-plan',
    title: "When Life Doesn't Follow Your Plan",
    category: 'Resilience & Reinvention',
    readTime: '5 min read',
    date: 'Autumn 2026',
    deck: 'What unexpected career detours can teach us about resilience, reinvention, and finding a direction with genuine purpose.',
    keyTakeaway: 'The detour is often where the actual destination is forged.',
    content: [
      'In our twenties, most of us carry a very neat, linear spreadsheet of how our life is going to unfold. We calibrate our ambitions against conventional milestones: the right corporate brand, the prestigious promotion, the accelerated trajectory.',
      'My plan was Wall Street. I had the drive, the appetite for intensity, and the naive certainty that hard work guaranteed predictable ascent. Then the Global Financial Crisis arrived and swept that entire landscape away within months.',
      'At the time, it felt like an unmitigated catastrophe. The institutions we were told were permanent suddenly folded, and junior aspirations were discarded without ceremony.',
      'Yet what felt like a devastating failure in my mid-twenties turned out to be the most liberating event of my adult life. When the pre-packaged script burns down, you are forced to ask an uncomfortable question: "If I cannot simply climb someone else’s ladder, what do I actually care about building?"',
      'The detour took me into nonprofit operations, where budgets were tight and every dollar spent had to justify itself in human terms. It stripped away corporate pretension and taught me how to listen to people under pressure.',
      'If you find yourself in a season where your original roadmap has collapsed, resist the urge to panic. The detour is rarely an error. Often, it is the universe’s clumsy way of steering you toward work that actually matters.',
    ],
  },
  {
    id: 'building-a-business-around-a-problem-that-matters',
    title: 'Building a Business Around a Problem That Matters',
    category: 'Mission-Driven Innovation',
    readTime: '6 min read',
    date: 'Winter 2026',
    deck: 'How deeply personal family struggles can spark authentic entrepreneurial conviction and steroid-free dermatological innovation.',
    keyTakeaway: 'When the customer is someone you love, compromise is not an option.',
    content: [
      'There is a world of difference between starting a business because you spotted an arbitrage opportunity in an industry report, and starting a business because a real problem keeps you awake at 3:00 AM.',
      'Curezma didn’t start as a pitch deck or a venture capital thesis. It started because my daughter was suffering from persistent, distressing eczema.',
      'Anyone who has managed childhood eczema knows the cycle: the unbearable itch, the bleeding skin, the restless tears, and the doctor prescription for topical steroids. While steroids can calm an acute flare, parents are left with the gnawing anxiety of topical steroid withdrawal, skin atrophy, and the fact that the root barrier remains compromised.',
      'As a father with an R&D mindset, I couldn’t accept that this was the best contemporary science had to offer. Why couldn’t we formulate a gentle, steroid-free topical product that respected the skin’s biological lipid mantle without harsh synthetic dependencies?',
      'That search led directly to the lab bench. What began as a personal quest to help my child eventually evolved into Curezma. When a venture originates from intimate family vulnerability, the standard for quality, safety, and transparency stops being a marketing metric—it becomes a sacred duty.',
      'If you are an aspiring entrepreneur searching for your "big idea," look closer to home. What problem makes you furious? What issue touches the people you care about? That is where your stamina will come from when the journey gets hard.',
    ],
  },
  {
    id: 'what-building-a-business-teaches-you-about-yourself',
    title: 'What Building a Business Teaches You About Yourself',
    category: 'Founder Self-Awareness',
    readTime: '4 min read',
    date: 'Spring 2026',
    deck: 'Reflections on uncertainty, patience, humility, and the quiet internal transformation that occurs while building something meaningful.',
    keyTakeaway: 'Your business will never outgrow your own emotional maturity.',
    content: [
      'Business schools teach financial modeling, competitive moat analysis, and supply chain logistics. What they rarely prepare you for is the mirror that entrepreneurship holds up to your character every single day.',
      'In the early days of ARETE Labs, I thought my primary responsibility was technical and strategic: coordinating formulations, securing equipment, negotiating supplier contracts. But as months turned into years, I realized that the hardest constraint on the enterprise wasn’t capital or technology—it was my own patience and emotional regulation.',
      'When a batch fails quality control testing at the eleventh hour, your immediate reaction reveals who you are. Do you blame the lab technician? Do you spiral into catastrophic thinking? Or do you take a deep breath, brew a coffee, and treat the data as a puzzle to be solved together?',
      'Building a business forces you to confront your relationship with ambiguity. You must learn to make decisions with 60% of the information, defend your team from erratic panic, and accept that perfectionism is often just fear dressed up in expensive clothes.',
      'Ultimately, you don’t just build a business. The business builds you. And if you do it with intention, the person who emerges on the other side is someone far more patient, grounded, and generous than the person who started.',
    ],
  },
];

export const CONTENT_ENGINE_BLUEPRINT = {
  title: 'Sustainable Content & Audience Architecture',
  subtitle: 'A pragmatic framework for a solo founder dedicated to 3 hours/week under an A$1,000 budget.',
  principles: [
    {
      format: '1. The Core Essay (Monthly)',
      timeCommitment: '90 mins / month',
      description: 'One deeply considered reflection written directly from authentic founder experience. Published here as an editorial feature.',
    },
    {
      format: '2. The LinkedIn Thought Piece',
      timeCommitment: '20 mins / week',
      description: 'Extracted key lessons, practical takeaways, and founder stories formatted for Australian startup & SME leaders.',
    },
    {
      format: '3. Fortnightly Sunday Newsletter',
      timeCommitment: '30 mins / fortnight',
      description: 'A quiet, thoughtful email containing 1 core reflection, 1 startup observation, and 1 recommendation from the ecosystem.',
    },
    {
      format: '4. Micro-Video Script / Audio Note',
      timeCommitment: '15 mins / week',
      description: 'A 60-second unscripted conversational video or voice note addressing a common dilemma faced by early-stage founders.',
    },
  ],
  budgetBreakdown: [
    { item: 'Domain & Clean Hosting (Vercel / Cloud Run)', cost: 'A$ 85 / yr', note: 'Fast, secure, minimal maintenance' },
    { item: 'Lightweight Newsletter Software (Substack / MailerLite Free)', cost: 'A$ 0 / mo', note: 'Up to 1,000 subscribers without cost' },
    { item: 'Privacy-first Analytics (Plausible / Cloudflare)', cost: 'A$ 0 - 12 / mo', note: 'GDPR/APPs compliant, zero cookies' },
    { item: 'Virtual Assistant Repurposing Support (3 hrs/mo)', cost: 'A$ 120 / mo', note: 'Formatting posts & managing newsletter queues' },
  ],
};
