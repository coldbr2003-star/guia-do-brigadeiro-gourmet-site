import React, { useState } from 'react';
import { IMAGE_PROMPTS, PALETTE } from '../constants';
import { ChevronDown, ChevronUp, Palette, Image } from 'lucide-react';

const StyleGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-gray-300 border-t-4 border-brand-gold">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors font-mono text-sm uppercase tracking-wider"
      >
        {isOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        {isOpen ? "Ocultar Guia de Design & Prompts" : "Ver Guia de Design & Prompts (Solicitação)"}
      </button>

      {isOpen && (
        <div className="p-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Color Palette */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-brand-gold">
              <Palette size={20} />
              <h3 className="text-xl font-bold">Paleta de Cores</h3>
            </div>
            <div className="space-y-4">
              {PALETTE.map((color) => (
                <div key={color.hex} className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg border border-gray-700">
                  <div 
                    className="w-16 h-16 rounded-lg shadow-inner border border-white/10" 
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div>
                    <p className="text-white font-bold">{color.name}</p>
                    <p className="font-mono text-brand-gold text-sm">{color.hex}</p>
                    <p className="text-xs text-gray-400 mt-1">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Prompts */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-brand-gold">
              <Image size={20} />
              <h3 className="text-xl font-bold">Prompts de Imagem (Midjourney/DALL-E)</h3>
            </div>
            <div className="space-y-6">
              {IMAGE_PROMPTS.map((prompt, idx) => (
                <div key={idx} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2 block border-b border-gray-700 pb-2">
                    {prompt.section}
                  </span>
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-1">Português:</p>
                    <p className="text-sm text-gray-300 italic">"{prompt.descriptionPt}"</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">English (Otimizado):</p>
                    <div className="bg-black/30 p-2 rounded text-sm font-mono text-green-400">
                      {prompt.descriptionEn}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default StyleGuide;