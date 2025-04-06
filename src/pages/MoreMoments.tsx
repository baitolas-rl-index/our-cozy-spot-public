
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookHeart, Mail, MessageCircleWarning, FileVideo, Music} from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import Header from '../components/Header';
import MenuButton from '../components/MenuButton';

const MoreMoments: React.FC = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    document.title = "Nosso cantinho - Mais de nós";
    
    // Initialize audio element
    audioRef.current = new Audio('/music/background-music.mp3');
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleToggleMusic = () => {
    const newMusicState = !isMusicPlaying;
    setIsMusicPlaying(newMusicState);
    
    if (audioRef.current) {
      if (newMusicState) {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
          setIsMusicPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  };

  const backgroundImage = isMobile ? 'url("/images/cottage_mobile.png")' : 'url("/images/cottage_main.png")';
  
  const moreMenuItems = [
    {
      icon: MessageCircleWarning,
      label: "Sequestro",
      url: "/more_moments/Sequestro.html"
    },
    {
      icon: BookHeart,
      label: "Poema Animado",
      url: "/more_moments/Poema Animado.html"
    },
    {
      icon: Mail,
      label: "Carta de Aniversário Laís (2025)",
      url: "/more_moments/Carta de Aniversário para Laís (2025).html"
    },
    {
      icon: FileVideo,
      label: "Video de Aniversário Ramon (2025)",
      url: "/more_moments/Video de Aniversário para Ramon (2025).mp4"
    }
  ];

  const handleNavigation = (url: string) => {
    window.location.href = url;
  };

  return (
    <div 
      className="min-h-screen flex flex-col p-4 md:p-8" 
      style={{ backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
    >
      <Header 
        onToggleMusic={handleToggleMusic}
        isMusicPlaying={isMusicPlaying}
      />
      
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="glass-panel p-8 w-full max-w-xl mx-auto">
          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-2 mb-6 hover:text-wood-beige transition-colors text-wood-dark">
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar ao Menu Principal</span>
            </Link>
            
            <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2'} gap-4 mt-4`}>
              {moreMenuItems.map((item, index) => (
                <MenuButton 
                  key={index}
                  icon={item.icon} 
                  label={item.label} 
                  onClick={() => handleNavigation(item.url)}
                  className="hover:bg-wood-dark"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MoreMoments;
