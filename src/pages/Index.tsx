
import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import MainMenu from '../components/MainMenu';
import { useIsMobile } from '../hooks/use-mobile';

const Index: React.FC = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    document.title = "Nosso cantinho";
    
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
            <MainMenu />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
