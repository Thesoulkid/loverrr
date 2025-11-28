import React from 'react';

export const FloatingParticles: React.FC = () => {
  // Generate random particles with Z-depth
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${15 + Math.random() * 15}s`,
    size: 4 + Math.random() * 10,
    depth: Math.random() * 200 - 100 // Z-axis range
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden perspective-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bg-rose-300/30 rounded-full blur-[2px] animate-float"
          style={{
            left: p.left,
            bottom: '-20%',
            width: `${p.size}px`,
            height: `${p.size}px`,
            transform: `translateZ(${p.depth}px)`,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        />
      ))}
      
      {/* Cinematic Bokeh Overlay */}
      <div className="fixed top-[-20%] left-[-10%] w-[800px] h-[800px] bg-champagne-400/5 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-rose-400/5 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
    </div>
  );
};