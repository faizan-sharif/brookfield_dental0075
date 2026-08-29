'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ThreeDToothCanvasProps {
  className?: string;
  autoRotate?: boolean;
}

export function ThreeDToothCanvas({
  className = '',
  autoRotate = true,
}: ThreeDToothCanvasProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let startTime = Date.now();

    const animateAutoRotate = () => {
      if (autoRotate) {
        const elapsed = (Date.now() - startTime) / 1000;
        const autoY = Math.sin(elapsed * 1.2) * 12;
        const autoX = Math.cos(elapsed * 1.5) * 6;
        setRotateY((prev) => prev * 0.95 + autoY * 0.05);
        setRotateX((prev) => prev * 0.95 + autoX * 0.05);
      }
      animationFrameId = requestAnimationFrame(animateAutoRotate);
    };

    animateAutoRotate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [autoRotate]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setRotateY((x / (rect.width / 2)) * 25);
    setRotateX(-(y / (rect.height / 2)) * 25);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* 3D Floating Realistic Tooth Container */}
      <motion.div
        animate={{
          rotateX,
          rotateY,
          scale: 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center"
      >
        {/* Ambient Cyan Glow Aura */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-brand-500/25 via-teal-300/15 to-brand-400/35 blur-2xl pointer-events-none animate-pulse" />

        {/* Floating Isolated 3D Tooth (Transparent Blend) */}
        <div
          className="relative w-56 h-56 sm:w-72 sm:h-72 transition-transform duration-300 hover:scale-105"
          style={{
            transform: 'translateZ(40px)',
            mixBlendMode: 'screen', // Converts dark background to 100% transparent!
          }}
        >
          <Image
            src="/images/realistic_tooth.jpg"
            alt="Seamless 3D Tooth"
            fill
            priority
            className="object-contain filter drop-shadow-[0_15px_35px_rgba(20,184,166,0.6)]"
          />
        </div>

        {/* Floating Sparkle Particles */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <span className="absolute top-6 left-8 w-2 h-2 rounded-full bg-brand-300 animate-ping opacity-80" />
          <span className="absolute bottom-10 right-8 w-2.5 h-2.5 rounded-full bg-teal-200 animate-pulse" />
          <span className="absolute top-12 right-12 w-1.5 h-1.5 rounded-full bg-white animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
}
