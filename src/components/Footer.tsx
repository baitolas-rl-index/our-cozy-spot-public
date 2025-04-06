
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="glass-panel p-4 mt-8 text-center">
      <div className="flex items-center justify-center gap-2">
        <span>Criado com</span>
        <Heart className="w-4 h-4 text-romance" fill="#DB7093" />
        <span>para o nosso amor</span>
      </div>
      <p className="text-sm text-muted-foreground mt-1">
        © {currentYear} Nossa História - Todos os direitos reservados
      </p>
    </footer>
  );
};

export default Footer;
