import { useState, useEffect } from 'react';
import { FOUNDER_DEFAULT, Article } from './data/brandContent';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import VenturesSection from './components/VenturesSection';
import PhilosophySection from './components/PhilosophySection';
import InsightsSection from './components/InsightsSection';
import NewsletterSection from './components/NewsletterSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';
import ArticleModal from './components/ArticleModal';
import AudienceStrategyModal from './components/AudienceStrategyModal';

export default function App() {
  const [founderName] = useState('Jai Uniyal');

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isStrategyOpen, setIsStrategyOpen] = useState(false);

  const scrollToStory = () => {
    const el = document.getElementById('story');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToInsights = () => {
    const el = document.getElementById('insights');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2B2836] font-sans selection:bg-[#38BDE5]/20 selection:text-[#171426]">
      {/* Editorial Top Bar */}
      <Navigation founderName={founderName} />

      {/* Main Sections */}
      <main>
        {/* Section 2: Hero */}
        <HeroSection
          founderName={founderName}
          onExploreStory={scrollToStory}
          onReadInsights={scrollToInsights}
        />

        {/* Section 3: Personal Story — The Unexpected Journey */}
        <StorySection />

        {/* Section 4: Entrepreneurial Ventures — ARETE Labs & Curezma */}
        <VenturesSection />

        {/* Section 5: Personal Philosophy — Five Interconnected Themes */}
        <PhilosophySection />

        {/* Section 6: Insights — The Beginning of a Newsletter */}
        <InsightsSection
          onSelectArticle={(article) => setSelectedArticle(article)}
          onOpenStrategy={() => setIsStrategyOpen(true)}
        />

        {/* Section 7: Newsletter Signup */}
        <NewsletterSection />

        {/* Section 8: Connect & Collaborate */}
        <ConnectSection founderName={founderName} />
      </main>

      {/* Section 9: Footer */}
      <Footer founderName={founderName} />

      {/* Interactive Essay Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Audience Growth & Operating Strategy Modal */}
      <AudienceStrategyModal
        isOpen={isStrategyOpen}
        onClose={() => setIsStrategyOpen(false)}
      />
    </div>
  );
}
