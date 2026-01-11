import React from 'react';
import { APP_CONTENT } from '../constants';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-brand-cream relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-milk/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="text-brand-milk font-bold tracking-widest uppercase text-sm mb-2 block">Apresentando</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-8">
                Brigadeiro Lucrativo
            </h2>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-brand-milk/20 mb-10 max-w-3xl mx-auto transform hover:-translate-y-1 transition-transform duration-300">
                <p className="text-xl text-gray-700 font-medium mb-6">
                    {APP_CONTENT.solution.description}
                </p>
                <div className="bg-brand-gold/20 p-4 rounded-xl border border-brand-gold/50">
                    <p className="text-brand-dark font-bold text-lg">
                        ✨ {APP_CONTENT.solution.highlight}
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default SolutionSection;