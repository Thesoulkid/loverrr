import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollThread: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] flex justify-center perspective-container">
      <div className="relative h-full w-full max-w-4xl mx-auto transform-style-3d">
        {/* Background Guide Line */}
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-stone-200/20 transform -translate-x-1/2" />
        
        {/* Living Thread */}
        <motion.div 
          className="absolute top-0 left-1/2 w-[2px] bg-gradient-to-b from-rose-300 via-gold-400 to-rose-300 origin-top transform -translate-x-1/2 shadow-[0_0_10px_rgba(250,176,5,0.4)]"
          style={{ 
            height: "100%",
            scaleY: scaleY 
          }}
        >
          {/* Glowing Head */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_5px_rgba(252,196,25,0.8)] border-2 border-gold-300 animate-pulse"></div>
        </motion.div>
      </div>
    </div>
  );
};