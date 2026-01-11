import React, { useState, useEffect } from 'react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Altura total do conteúdo da página
      const docHeight = document.documentElement.scrollHeight;
      // Altura da janela visível
      const winHeight = window.innerHeight;
      // Posição atual do scroll
      const scrollTop = window.scrollY;

      // Calcula a altura rolável total
      const scrollableHeight = docHeight - winHeight;
      
      // Se a altura rolável for 0 (página não tem scroll), não faz nada ou mostra direto
      if (scrollableHeight <= 0) return;

      // Calcula a porcentagem rolada (0 a 100)
      const scrollPercent = (scrollTop / scrollableHeight) * 100;

      // Define visibilidade baseada na porcentagem (> 50%)
      setIsVisible(scrollPercent > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Chamada inicial para verificar o estado ao carregar (caso o usuário atualize a página já no meio)
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToPricing}
        className="bg-brand-action text-white py-4 px-8 rounded-full shadow-2xl font-bold text-lg flex items-center gap-2 hover:bg-green-600 hover:scale-105 transition-all duration-300 border-2 border-white/20"
      >
        <span>Comprar Agora</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default FloatingCTA;