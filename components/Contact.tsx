import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="location" className="py-32 relative perspective-container flex justify-center">
      <div className="container mx-auto px-6 max-w-3xl transform-style-3d">
        <motion.div 
          initial={{ opacity: 0, y: 100, rotateX: 30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring" }}
          className="bg-white/90 backdrop-blur-xl rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] p-12 text-center border border-white/50 relative overflow-hidden transform-style-3d group"
        >
          {/* Holographic Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-100/30 via-transparent to-gold-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-6 transform-style-3d">
            <motion.div 
              className="p-5 bg-rose-50 rounded-full shadow-inner"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 1 }}
            >
              <MapPin className="w-8 h-8 text-rose-400" />
            </motion.div>
            
            <h2 className="font-serif text-5xl text-stone-800 drop-shadow-sm" style={{ transform: "translateZ(20px)" }}>The Venue</h2>
            
            <div className="space-y-2 transform translate-z-10">
              <p className="text-2xl font-medium text-stone-700">Grand Hyatt Bolgatty</p>
              <p className="text-stone-500 tracking-wide">Kochi, Kerala, India</p>
            </div>

            <div className="w-24 h-[1px] bg-stone-200 my-6"></div>

            <p className="text-stone-500 font-light italic max-w-sm mx-auto text-lg">
              "We would be delighted to have your presence as we tie the knot."
            </p>

            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: "#E64980" }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-10 py-4 bg-stone-800 text-white rounded-full text-xs uppercase tracking-widest transition-all shadow-xl hover:shadow-rose-300/50"
            >
              Get Directions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};