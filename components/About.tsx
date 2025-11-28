import React from 'react';
import { motion } from 'framer-motion';

const storyPoints = [
  { year: "2018", title: "First Meeting", desc: "A chance encounter at a coffee shop that changed everything.", align: "left" },
  { year: "2020", title: "The Yes", desc: "Under the starlit sky, a promise was made forever.", align: "right" },
  { year: "2025", title: "The Beginning", desc: "As we step into forever, hand in hand.", align: "left" }
];

export const About: React.FC = () => {
  return (
    <section id="story" className="py-32 relative overflow-hidden transform-style-3d perspective-container">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, rotateX: 90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
           <h2 className="font-serif text-6xl text-stone-800 mb-4 transform-style-3d">Our Timeline</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto transform-style-3d">
          {storyPoints.map((point, index) => (
            <div key={index} className={`flex items-center justify-between mb-32 w-full perspective-container ${point.align === 'right' ? 'flex-row-reverse' : ''}`}>
               
               {/* 3D Content Card */}
               <motion.div 
                 initial={{ opacity: 0, x: point.align === 'left' ? -100 : 100, rotateY: point.align === 'left' ? 30 : -30 }}
                 whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
                 className={`w-5/12 transform-style-3d ${point.align === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}
               >
                 <motion.span 
                   className="text-gold-500 font-bold text-xl mb-2 block"
                   whileInView={{ scale: [1, 1.2, 1] }}
                 >
                   {point.year}
                 </motion.span>
                 <h3 className="font-serif text-4xl text-stone-800 mb-4">{point.title}</h3>
                 <p className="text-stone-500 font-light leading-relaxed text-lg">{point.desc}</p>
               </motion.div>

               {/* Center Node with 3D Pop */}
               <div className="w-2/12 flex justify-center relative transform-style-3d">
                 <motion.div 
                   initial={{ scale: 0, z: -100 }}
                   whileInView={{ scale: 1, z: 0 }}
                   viewport={{ once: true }}
                   className="w-6 h-6 bg-rose-400 rounded-full border-4 border-white shadow-[0_0_20px_rgba(244,63,94,0.4)] z-10"
                 ></motion.div>
               </div>

               <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};