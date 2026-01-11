import { DollarSign, BookOpen, Smile, TrendingUp, Award } from 'lucide-react';
import { Benefit, ImagePrompt, ColorPalette } from './types';

// --- Copywriting Content ---

export const APP_CONTENT = {
  hero: {
    headline: "Transforme R$ 50 em um Negócio Lucrativo de Brigadeiros em 24 Horas",
    subheadline: "Descubra o passo a passo exato para criar doces irresistíveis, vender todos os dias e conquistar sua liberdade financeira sem sair da sua cozinha.",
    cta: "Quero Lucrar com Brigadeiros",
  },
  pain: {
    title: "Cansado de contar moedas no fim do mês?",
    text: [
      "Você olha para a conta bancária e sente aquele aperto no peito? As contas chegam, mas o salário (quando tem) desaparece em instantes.",
      "Você sabe que precisa fazer algo diferente, mas não tem milhares de reais para investir em cursos caros ou equipamentos complexos. Você precisa de algo rápido, prático e que dê retorno imediato.",
      "A boa notícia? A solução está bem aí, na sua cozinha."
    ]
  },
  solution: {
    title: "A Ponte para sua Mudança de Vida",
    description: "O Ebook 'Brigadeiro Lucrativo' não é apenas um livro de receitas. É um mapa do tesouro. Compilamos anos de experiência em um guia prático, direto ao ponto, feito para quem nunca enrolou um doce na vida, mas tem vontade de vencer.",
    highlight: "Comece com apenas R$ 50 de material e multiplique esse valor na primeira semana."
  },
  pricing: {
    oldPrice: "R$ 97,00",
    currentPrice: "R$ 27,00",
    guaranteeDays: 7,
  }
};

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: "Receitas Secretas",
    description: "As 10 receitas de brigadeiro gourmet mais vendidas e elogiadas, à prova de falhas.",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Precificação Correta",
    description: "Aprenda a calcular cada centavo para nunca ter prejuízo e garantir seu lucro real.",
    icon: DollarSign,
  },
  {
    id: 3,
    title: "Ponto Perfeito",
    description: "Nunca mais perca ingredientes. Descubra o segredo do ponto de enrolar macio e brilhante.",
    icon: Award,
  },
  {
    id: 4,
    title: "Venda no WhatsApp",
    description: "Scripts de mensagens prontos para você copiar, colar e receber encomendas.",
    icon: TrendingUp,
  },
  {
    id: 5,
    title: "Comece Sem Dinheiro",
    description: "Estratégias para fazer sua primeira venda antes mesmo de comprar o leite condensado.",
    icon: Smile,
  },
];

// --- UX & Prompt Engineering Output ---

export const IMAGE_PROMPTS: ImagePrompt[] = [
  {
    section: "Hero Section",
    descriptionPt: "Close-up macro extremo de um brigadeiro gourmet de chocolate belga, com granulados brilhantes, sendo segurado por uma mão delicada. Fundo desfocado com luzes douradas quentes (bokeh), transmitindo sofisticação e apetite. Iluminação de estúdio de alta qualidade.",
    descriptionEn: "Extreme macro close-up of a Belgian chocolate gourmet brigadeiro with shiny sprinkles, being held by a delicate hand. Blurred background with warm golden bokeh lights, conveying sophistication and appetite. High-quality studio lighting, photorealistic, 8k resolution.",
  },
  {
    section: "A Dor (Pain)",
    descriptionPt: "Close-up da tela de um celular mostrando um aplicativo de banco com saldo em vermelho (negativo) e diversas notificações pop-up de contas atrasadas acumuladas. Iluminação dramática e ambiente levemente escuro para enfatizar a urgência.",
    descriptionEn: "Close-up of a smartphone screen showing a banking app with a red negative balance and multiple accumulated overdue bill pop-up notifications. Dramatic lighting and a slightly dark environment to emphasize urgency.",
  },
  {
    section: "A Solução (Solution)",
    descriptionPt: "Uma caixa de presente aberta cheia de brigadeiros gourmet variados (pistache, churros, chocolate), perfeitamente enrolados. Ao lado, um celular mostrando notificações de vendas. Ambiente ensolarado e feliz.",
    descriptionEn: "An open gift box filled with assorted gourmet brigadeiros (pistachio, churros, chocolate), perfectly rolled. Next to it, a smartphone showing sales notifications/messages. Sunny and happy environment, warm tones.",
  },
  {
    section: "Garantia (Guarantee)",
    descriptionPt: "Selo 3D dourado metálico de garantia de 7 dias, sobre um fundo de textura de chocolate derretido.",
    descriptionEn: "3D metallic golden 7-day guarantee seal, floating over a background of melted chocolate texture. Professional graphic design style.",
  }
];

export const PALETTE: ColorPalette[] = [
  { name: "Chocolate Amargo", hex: "#4E342E", usage: "Textos, Fundos Escuros" },
  { name: "Chocolate ao Leite", hex: "#8D6E63", usage: "Elementos Secundários" },
  { name: "Creme de Leite", hex: "#F5F5DC", usage: "Fundo Geral, Áreas de Respiro" },
  { name: "Ouro Derretido", hex: "#FFD700", usage: "Destaques, Ícones, Bordas" },
  { name: "Verde Lucro", hex: "#2E7D32", usage: "Botões de Ação (CTA)" },
];