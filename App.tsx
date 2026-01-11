import React from 'react';
import HeroSection from './components/HeroSection';
import PainSection from './components/PainSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import PricingSection from './components/PricingSection';
import StyleGuide from './components/StyleGuide';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <main className="flex-grow">
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <BenefitsSection />
        <PricingSection />
      </main>
      
      <Footer />
      
      {/* 
        This section is specifically included to fulfill the 
        "UX Specialist" part of the prompt, allowing the user 
        to see the underlying design decisions and prompts.
      */}
      <StyleGuide />
      
      <FloatingCTA />
    </div>
  );
}

export default App;