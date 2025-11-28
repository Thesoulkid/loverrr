import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';

const images = [
  { url: "https://files.catbox.moe/0146d3.jpeg", caption: "The Beginning" },
  { url: "https://files.catbox.moe/sjajmv.jpeg", caption: "Our Spark" },
  { url: "https://files.catbox.moe/u71sdt.jpeg", caption: "Adventures" },
  { url: "https://files.catbox.moe/ytcghe.jpeg", caption: "Laughter" },
  { url: "https://files.catbox.moe/7xjzux.jpeg", caption: "Quiet Moments" },
  { url: "https://files.catbox.moe/ildlsq.jpeg", caption: "Dreams" },
  { url: "https://files.catbox.moe/u3b094.jpeg", caption: "Together" },
  { url: "https://files.catbox.moe/ahfrm9.jpeg", caption: "Forever" },
  { url: "https://files.catbox.moe/3k45p2.jpeg", caption: "Us" },
  { url: "https://files.catbox.moe/5v6yhp.jpeg", caption: "The Journey" },
];

export const Gallery: React.FC = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  
  // Vertical tilt based on scroll velocity (Up/Down 3D tilt)
  const rotateX = useTransform(smoothVelocity, [-1000, 1000], [15, -15]);
  const skewY = useTransform(smoothVelocity, [-1000, 1000], [-3, 3]);

  return (
    <section className="relative bg-[#F9F1E8] py-32 perspective-container">
      
      {/* Title Section */}
      <div className="container mx-auto px-6 mb-32 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative inline-block"
        >
          <h2 className="font-serif text-6xl md:text-8xl text-stone-800 relative z-10">Memories</h2>
          <motion.div 
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             transition={{ delay: 0.5, duration: 1 }}
             className="h-3 w-full bg-rose-200/50 absolute bottom-2 left-0 -z-0 rounded-full" 
          />
        </motion.div>
        <p className="mt-6 text-stone-500 font-sans tracking-[0.3em] uppercase text-xs md:text-sm">
          Scroll to relieve the moments
        </p>
      </div>

      {/* Vertical 3D Stack */}
      <div className="container mx-auto px-6 flex flex-col items-center gap-40 pb-20">
        {images.map((img, i) => (
          <PhotoCard 
            key={i} 
            img={img} 
            rotateX={rotateX} 
            skewY={skewY} 
            index={i} 
          />
        ))}
      </div>
    </section>
  );
};

const PhotoCard: React.FC<{
  img: { url: string; caption: string };
  rotateX: any;
  skewY: any;
  index: number;
}> = ({ img, rotateX, skewY, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Entry Animations relative to viewport position
  // Scale down when entering/leaving, full scale in center
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
  // Fade in/out
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  // Inner image parallax (moves slightly opposite to scroll)
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        rotateX, 
        skewY, 
        scale,
        opacity,
        perspective: 1200
      }}
      className="group relative w-full max-w-4xl z-10"
    >
      <motion.div 
        className="relative w-full aspect-[3/4] md:aspect-[16/9] bg-white p-3 md:p-4 rounded-[2rem] shadow-[0_30px_60px_rgba(226,73,128,0.15)] overflow-hidden transform-style-3d cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
      >
        {/* Deep Shadow / Glow Layer */}
        <div className="absolute inset-0 bg-rose-900/5 transform translate-z-[-20px] blur-xl rounded-[2rem]"></div>

        {/* Image Container */}
        <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-stone-200">
          <motion.img
            style={{ y, scale: 1.2 }} 
            src={img.url}
            alt={img.caption}
            className="h-full w-full object-cover" 
          />
          
          {/* Cinematic Lens Flare Swipe on Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full ease-in-out duration-1000" />
          
          {/* Caption Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
             <motion.p 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="text-white font-serif text-3xl md:text-5xl italic tracking-wide drop-shadow-lg"
             >
               {img.caption}
             </motion.p>
             <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                className="h-[2px] bg-rose-400 mt-4 shadow-[0_0_10px_rgba(251,113,133,0.8)]"
             />
          </div>
        </div>
      </motion.div>

      {/* Aesthetic Thread Line Connecting Images */}
      {index % 2 === 0 ? (
        <div className="absolute left-[-20px] md:left-[-40px] top-1/2 h-32 w-[1px] bg-gradient-to-b from-transparent via-rose-300 to-transparent opacity-30" />
      ) : (
        <div className="absolute right-[-20px] md:right-[-40px] top-1/2 h-32 w-[1px] bg-gradient-to-b from-transparent via-gold-400 to-transparent opacity-30" />
      )}
    </motion.div>
  );
};
