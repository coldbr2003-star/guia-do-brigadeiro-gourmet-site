import React from 'react';
import { BENEFITS } from '../constants';
import Button from './Button';

const BenefitsSection: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-6 bg-brand-dark text-brand-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-brand-gold">
            O que você vai encontrar lá dentro?
          </h2>
          <p className="text-brand-cream/80 text-lg">
            Um conteúdo direto ao ponto, sem enrolação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {BENEFITS.map((benefit) => (
            <div key={benefit.id} className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-brand-gold/50 transition-all duration-300 hover:bg-white/10 group">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-dark mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
          
          {/* Bonus Card */}
          <div className="bg-gradient-to-br from-brand-gold to-yellow-600 p-6 rounded-2xl border border-yellow-400 transform scale-105 shadow-2xl flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-bold mb-2 text-brand-dark">BÔNUS EXCLUSIVO</h3>
            <p className="text-brand-dark/90 text-sm font-medium mb-0">
              Planilha Automática de Precificação
            </p>
          </div>
        </div>

        <div className="flex justify-center">
            <Button text="Quero Acessar Agora" variant="primary" onClick={scrollToPricing} />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;