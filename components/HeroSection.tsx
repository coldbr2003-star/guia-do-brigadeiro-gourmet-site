import React from 'react';
import { APP_CONTENT } from '../constants';
import Button from './Button';

const HeroSection: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image Layer with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/chocolate2/1920/1080" 
          alt="Brigadeiro Gourmet" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-brand-cream mt-10">
        <div className="inline-block px-4 py-1 mb-6 border border-brand-gold/50 rounded-full bg-brand-dark/50 backdrop-blur-sm">
          <span className="text-brand-gold text-sm font-semibold tracking-wider uppercase">Oferta por Tempo Limitado</span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          {APP_CONTENT.hero.headline}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          {APP_CONTENT.hero.subheadline}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button text={APP_CONTENT.hero.cta} onClick={scrollToPricing} />
        </div>
        
        <p className="mt-4 text-xs text-brand-gold/80 flex items-center justify-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Mais de 1.200 alunas já começaram
        </p>
      </div>
    </section>
  );
};

export default HeroSection;