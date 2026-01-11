import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-cream/60 py-8 text-center text-sm">
      <p>&copy; 2024 Brigadeiro Lucrativo. Todos os direitos reservados.</p>
      <p className="mt-2 text-xs">
        Este site não é afiliado ao Facebook ou a qualquer entidade do Meta.
      </p>
    </footer>
  );
};

export default Footer;