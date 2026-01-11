import React from 'react';
import { APP_CONTENT } from '../constants';
import Button from './Button';
import { Check, ShieldCheck } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-brand-cream to-white">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-milk/10 max-w-lg mx-auto relative">
          {/* Ribbon */}
          <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-8 py-2 transform rotate-45 translate-x-8 translate-y-4 shadow-md">
            70% OFF
          </div>

          <div className="p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-600 mb-2">Tudo isso por apenas:</h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-red-400 line-through text-xl">{APP_CONTENT.pricing.oldPrice}</span>
              <span className="text-brand-action font-extrabold text-6xl tracking-tight">{APP_CONTENT.pricing.currentPrice}</span>
            </div>
            <p className="text-gray-500 text-sm mb-8">Pagamento único. Acesso vitalício.</p>

            <ul className="text-left space-y-3 mb-8 max-w-xs mx-auto text-gray-700">
              <li className="flex items-center gap-2"><Check className="text-brand-action" size={18} /> Acesso Imediato</li>
              <li className="flex items-center gap-2"><Check className="text-brand-action" size={18} /> 10 Receitas Premium</li>
              <li className="flex items-center gap-2"><Check className="text-brand-action" size={18} /> Guia de Vendas</li>
              <li className="flex items-center gap-2"><Check className="text-brand-action" size={18} /> Planilha de Bônus</li>
            </ul>

            <Button text="Comprar Agora - R$ 27,00" fullWidth className="animate-bounce-slow" />

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-3 text-brand-dark/80">
              <ShieldCheck className="text-brand-gold w-10 h-10" />
              <div className="text-left">
                <p className="font-bold text-sm">Garantia Incondicional</p>
                <p className="text-xs text-gray-500">Teste por {APP_CONTENT.pricing.guaranteeDays} dias. Se não gostar, devolvemos seu dinheiro.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
            <img src="https://picsum.photos/seed/payment/300/50" alt="Formas de Pagamento" className="h-8 mx-auto opacity-50 grayscale hover:grayscale-0 transition-all" />
            <p className="text-xs text-gray-400 mt-2">Ambiente 100% seguro e criptografado.</p>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;