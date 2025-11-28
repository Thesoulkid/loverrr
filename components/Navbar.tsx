import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-6 py-6 ${
        isScrolled ? 'bg-white/5 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="#" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-full border border-white/20 backdrop-blur-md transition-all ${isScrolled ? 'bg-white/80' : 'bg-transparent'}`}>
             <Heart className={`w-4 h-4 ${isScrolled ? 'text-rose-400 fill-rose-400' : 'text-white'}`} />
          </div>
          <span className={`font-serif text-lg tracking-widest uppercase ${isScrolled ? 'text-stone-800' : 'text-white/90'}`}>
            A & A
          </span>
        </a>

        {/* Minimal Audio / Menu Placeholder - kept simple for PMV vibe */}
        <button className={`text-xs uppercase tracking-widest font-medium px-4 py-2 rounded-full border border-white/30 backdrop-blur-md hover:bg-white/20 transition-all ${isScrolled ? 'text-stone-600 border-stone-200' : 'text-white'}`}>
          Save the Date
        </button>
      </div>
    </header>
  );
};