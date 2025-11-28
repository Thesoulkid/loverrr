import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F9F1E8] py-32 border-t border-white overflow-hidden relative perspective-container">
      <div className="container mx-auto px-6 text-center relative z-10 transform-style-3d">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-12"
        >
          <span className="font-serif text-3xl md:text-5xl italic text-stone-800 block mb-6">
            With Love,
          </span>
          
          <div className="mt-8 flex justify-center items-center gap-6 transform-style-3d">
             <motion.span 
               initial={{ rotateX: 90, opacity: 0 }}
               whileInView={{ rotateX: 0, opacity: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="font-handwriting text-6xl md:text-9xl text-rose-400 font-serif drop-shadow-lg"
             >
               Anjana
             </motion.span>
             
             <span className="text-4xl text-stone-300">&</span>
             
             <motion.span 
               initial={{ rotateX: 90, opacity: 0 }}
               whileInView={{ rotateX: 0, opacity: 1 }}
               transition={{ duration: 1, delay: 0.4 }}
               className="font-handwriting text-6xl md:text-9xl text-rose-400 font-serif drop-shadow-lg"
             >
               Abhi
             </motion.span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-stone-400 text-sm tracking-[0.5em] uppercase"
        >
          #AnjanaWedsAbhi • 2025
        </motion.div>

      </div>
    </footer>
  );
};