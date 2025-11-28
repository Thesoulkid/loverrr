import React, { useEffect, useState, useRef } from 'react';
import { Hero } from './components/Hero';
import { About as StoryTimeline } from './components/About';
import { Gallery as Moments } from './components/Gallery';
import { Collections as DateReveal } from './components/Collections';
import { Contact as Location } from './components/Contact';
import { Footer as Outro } from './components/Footer';
import { Navbar } from './components/Navbar';
import { FloatingParticles } from './components/FloatingParticles';
import { ScrollThread } from './components/ScrollThread';
import { AnimatePresence, motion } from 'framer-motion';
import { Lock, Heart, Music } from 'lucide-react';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '280825') {
      setError(false);
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.play().catch(e => console.log("Audio play failed", e));
      }
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setIsAuthenticated(true);
      }, 3000); 
    } else {
      setError(true);
    }
  };

  // Cinematic Zoom-Through Loader
  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#F9F1E8] z-50 fixed top-0 left-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, z: 0 }}
          animate={{ opacity: 1, scale: 20, z: 1000 }}
          transition={{ duration: 2.8, ease: "easeIn" }}
          className="flex flex-col items-center justify-center"
        >
          <div className="w-48 h-48 border-[1px] border-champagne-500 rounded-full flex items-center justify-center">
             <span className="font-serif text-4xl italic text-champagne-600">A & A</span>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-[#F9F1E8] relative overflow-hidden perspective-container">
        <FloatingParticles />
        
        <motion.div 
          initial={{ opacity: 0, rotateX: 20, z: -200 }}
          animate={{ opacity: 1, rotateX: 0, z: 0 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="relative z-10 bg-white/40 backdrop-blur-xl p-10 rounded-3xl border border-white/60 shadow-2xl max-w-sm w-full mx-4 text-center transform-style-3d"
        >
          <div className="mb-6 flex justify-center">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="p-3 bg-white rounded-full shadow-md"
            >
              <Heart className="w-6 h-6 text-rose-400 fill-rose-100" />
            </motion.div>
          </div>
          
          <h1 className="font-serif text-3xl text-stone-800 mb-2">Anjana & Abhi</h1>
          <p className="text-stone-500 text-xs uppercase tracking-widest mb-8">Enter The Date (DDMMYY)</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
              className="w-full bg-white/80 border border-stone-200 rounded-xl px-4 py-3 text-center tracking-[0.5em] outline-none focus:ring-2 focus:ring-rose-200 transition-all placeholder:text-stone-300 text-stone-700"
              autoFocus
            />
            
            {error && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rose-500 text-xs">
                Incorrect date. Remember the beginning.
              </motion.p>
            )}

            <button type="submit" className="w-full bg-stone-800 text-white py-3 rounded-xl uppercase text-xs tracking-widest hover:bg-stone-700 transition-shadow shadow-lg hover:shadow-xl">
              Unlock Memories
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative font-sans text-stone-700 selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden perspective-container">
      <audio ref={audioRef} loop>
        <source src="https://files.catbox.moe/0u5cvy.mp3" type="audio/mpeg" />
      </audio>

      <FloatingParticles />
      <ScrollThread />
      <Navbar />
      
      {/* 3D Scene Wrapper */}
      <main className="relative z-10 w-full transform-style-3d">
        <Hero />
        <Moments />
        <DateReveal />
        <StoryTimeline />
        <Location />
      </main>
      
      <Outro />

      <div className="fixed bottom-6 right-6 z-50 cursor-pointer group" onClick={() => {
        if(audioRef.current?.paused) audioRef.current.play();
        else audioRef.current?.pause();
      }}>
         <div className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 animate-pulse-slow group-hover:bg-rose-500 group-hover:text-white transition-colors">
           <Music className="w-4 h-4" />
         </div>
      </div>
    </div>
  );
};

export default App;
