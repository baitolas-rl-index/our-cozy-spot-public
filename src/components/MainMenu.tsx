
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarDays, BookOpen, ImageIcon, Leaf, Music} from 'lucide-react';
import MenuButton from './MenuButton';

const MainMenu: React.FC = () => {
  const navigate = useNavigate();

  const handleExternalNavigation = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-xl mx-auto">
      <MenuButton 
        icon={CalendarDays} 
        label="Nossa Timeline" 
        onClick={() => handleExternalNavigation('https://baitolasrl.github.io/baitolas_timeline/')}
        className="hover:bg-wood-dark"
      />
      
      <MenuButton 
        icon={Leaf} 
        label="Caminho ao seu Lado" 
        onClick={() => handleExternalNavigation('https://baitolas-rl2.github.io/the-road-beside-you-public/')}
        className="hover:bg-wood-dark"
      />
      
      <MenuButton 
        icon={BookOpen} 
        label="Nossas Experiências" 
        onClick={() => handleExternalNavigation('https://docs.google.com/spreadsheets/d/1i6XsFf28Gyf-MKH1b-6gI1ja6ZHlnsw1YbbKg4VATpA/edit?usp=sharing')}
        className="hover:bg-wood-dark"
      />

      <MenuButton 
        icon={Music} 
        label="Playlist de Músicas" 
        onClick={() => handleExternalNavigation('https://youtube.com/playlist?list=PLFsDJD2VM1-Y7EH2LSFgdNJ36cBPDCyMV&si=CgaXVVJFr8QXU-nj')}
        className="hover:bg-wood-dark"
      />

      <MenuButton 
        icon={ImageIcon} 
        label="Mais de nós" 
        onClick={() => navigate('/mais-momentos')}
        className="hover:bg-wood-dark"
      />
    </div>
  );
};

export default MainMenu;
