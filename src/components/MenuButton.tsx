
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  className?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ icon: Icon, label, onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick} 
      className={`menu-button ${className}`}
    >
      <div className="flex items-center gap-3 text-wood-beige">
        <Icon className="w-6 h-6" />
        <span className="font-medium">{label}</span>
      </div>
    </button>
  );
};

export default MenuButton;
