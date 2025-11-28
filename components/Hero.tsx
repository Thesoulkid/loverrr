import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

export const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Scroll Parallax Effects
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  
  // Mouse Parallax Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  function handleMouseMove(event: React.MouseEvent) {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    x.set((clientX / innerWidth) - 0.5);
    y.set((clientY / innerHeight) - 0.5);
  }

  return (
    <section 
      ref={ref} 
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden perspective-container"
    >
      {/* 3D Background Layer */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F9F1E8]/10 to-[#F9F1E8]"></div>
      </motion.div>

      {/* Floating 3D Text Container */}
      <motion.div 
        style={{ 
          y: yText, 
          opacity,
          rotateX: useTransform(mouseY, [-0.5, 0.5], [10, -10]),
          rotateY: useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
        }}
        className="container relative z-20 px-6 text-center transform-style-3d"
      >
        {/* Fly-In Animation */}
        <motion.div
          initial={{ z: -1000, opacity: 0, filter: "blur(20px)" }}
          animate={{ z: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="transform-style-3d"
        >
          <motion.div 
             className="mb-8 inline-block"
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="px-4 py-2 border border-white/40 rounded-full text-white/90 text-xs tracking-[0.4em] uppercase backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Save The Date
            </span>
          </motion.div>

          <h1 className="font-serif text-7xl md:text-9xl text-white drop-shadow-2xl mb-4 transform-style-3d">
            <span className="block" style={{ transform: "translateZ(50px)" }}>Anjana</span>
            <motion.span 
              className="text-rose-300 text-6xl md:text-8xl block my-[-10px]" 
              style={{ transform: "translateZ(80px)" }}
              animate={{ scale: [1, 1.1, 1], filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              &
            </motion.span>
            <span className="block" style={{ transform: "translateZ(50px)" }}>Abhi</span>
          </h1>

          <motion.p
            style={{ transform: "translateZ(20px)" }}
            className="text-xl md:text-3xl text-white/90 font-light tracking-wide font-sans mt-8 text-shadow-lg"
          >
            Our Journey Begins
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 z-20"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll to Explore</span>
        <motion.div 
          animate={{ height: [0, 60, 0], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] bg-gradient-to-b from-white to-transparent"
        />
      </motion.div>
    </section>
  );
};