
import React from 'react';
import { Music } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  onToggleMusic: () => void;
  isMusicPlaying: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  onToggleMusic,
  isMusicPlaying
}) => {
  return (
    <header className="glass-panel p-4 mb-8 flex flex-col md:flex-row items-center justify-between bg-wood-light/50 w-full max-w-xl mx-auto">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-wood-dark">Nosso cantinho</h1>
      </div>
      <div className="flex gap-2 mt-2 md:mt-0">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onToggleMusic}
          className={`text-wood-dark hover:bg-wood-light ${isMusicPlaying ? 'bg-wood-light/50' : ''}`}
        >
          <Music className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
