import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Collections: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0.5, 0.8], [20, 0]);
  const scale = useTransform(scrollYProgress, [0.5, 0.8], [0.8, 1]);

  return (
    <section className="py-32 relative flex items-center justify-center overflow-hidden min-h-screen perspective-container">
      <div className="absolute inset-0 bg-rose-50/30"></div>
      
      {/* Floating 3D Orbs */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-200/20 rounded-full blur-[80px]" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-[100px]" 
      />

      <motion.div 
        style={{ rotateX, scale }}
        className="container relative z-10 text-center px-4 transform-style-3d"
      >
        <motion.div
          initial={{ opacity: 0, z: -100 }}
          whileInView={{ opacity: 1, z: 0 }}
          transition={{ duration: 1.5 }}
          className="relative inline-block py-16 px-8 md:px-32 border-y border-champagne-500/30 bg-white/10 backdrop-blur-sm shadow-xl rounded-lg"
        >
          <motion.p 
            className="text-stone-500 uppercase tracking-[0.5em] text-sm md:text-base mb-8"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            We're getting married
          </motion.p>
          
          <h2 className="font-serif text-8xl md:text-[10rem] text-gold-gradient font-bold drop-shadow-2xl leading-none tracking-tight transform-style-3d">
            <motion.span 
              className="block"
              whileHover={{ scale: 1.1, rotateZ: 2 }}
            >
              25
            </motion.span>
            <span className="block text-4xl md:text-6xl my-4 text-stone-700 font-light italic">December</span>
            <span className="block text-6xl md:text-8xl text-stone-300">2025</span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-stone-500 uppercase tracking-[0.5em] text-sm md:text-base mt-12"
          >
            Kerala, India
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};