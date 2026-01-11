import React from 'react';
import { APP_CONTENT } from '../constants';
import { AlertCircle } from 'lucide-react';

const PainSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="absolute inset-0 bg-brand-dark/20 z-10"></div>
               <img 
                 src="https://picsum.photos/seed/mobile_banking_stress/800/800" 
                 alt="Conta bancária com saldo negativo e notificações de contas" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
               />
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 mb-4 text-red-600">
              <AlertCircle size={24} />
              <span className="font-bold uppercase tracking-wide text-sm">Identificou?</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              {APP_CONTENT.pain.title}
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {APP_CONTENT.pain.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainSection;