'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ThreeDToothCanvasProps {
  className?: string;
  autoRotate?: boolean;
  showBadge?: boolean;
}

export function ThreeDToothCanvas({
  className = '',
  autoRotate = true,
  showBadge = false,
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
        const autoY = Math.sin(elapsed * 1.5) * 15;
        const autoX = Math.cos(elapsed * 1.8) * 8;
        setRotateY((prev) => prev * 0.92 + autoY * 0.08);
        setRotateX((prev) => prev * 0.92 + autoX * 0.08);
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
      className={`relative flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-visible ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* 3D Floating Realistic Tooth Container */}
      <motion.div
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Floating Isolated Photorealistic 3D Tooth */}
        <div
          className="relative w-full h-full transition-transform duration-300 hover:scale-110 flex items-center justify-center"
          style={{
            transform: 'translateZ(25px)',
            mixBlendMode: 'screen', // Seamless background removal!
          }}
        >
          <Image
            src="/images/realistic_tooth.jpg"
            alt="Photorealistic 3D Tooth"
            fill
            priority
            className="object-contain filter drop-shadow-[0_8px_20px_rgba(20,184,166,0.7)]"
          />
        </div>
      </motion.div>

      {/* Floating Interactive Badge (Optional) */}
      {showBadge && (
        <div className="absolute bottom-2 px-3 py-1 rounded-full bg-navy-900/80 backdrop-blur-md border border-white/20 text-[10px] font-bold text-cyan-300 pointer-events-none shadow-lg flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          Photorealistic 3D Tooth • Hover to Tilt
        </div>
      )}
    </div>
  );
}
