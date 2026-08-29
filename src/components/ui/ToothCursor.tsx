'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function ToothCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on devices with fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'SELECT' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMouse);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Outer Glowing Glass Ring */}
      <motion.div
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isClicking ? 0.75 : isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.2 }}
        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-200 ${
          isHovered
            ? 'bg-brand-500/20 border-brand-400 backdrop-blur-xs shadow-glow-teal'
            : 'bg-white/10 border-brand-300/40 backdrop-blur-xs shadow-sm'
        }`}
      />

      {/* Floating Realistic Mini 3D Tooth Follower */}
      <motion.div
        animate={{
          x: position.x + 10,
          y: position.y + 10,
          scale: isClicking ? 0.8 : isHovered ? 1.4 : 1,
          rotate: isHovered ? 15 : 0,
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 280, mass: 0.3 }}
        className="fixed top-0 left-0 w-7 h-7 flex items-center justify-center drop-shadow-[0_4px_12px_rgba(20,184,166,0.4)]"
      >
        <Image
          src="/images/realistic_tooth.jpg"
          alt="Tooth Cursor"
          width={28}
          height={28}
          className="object-contain rounded-full border border-white/60"
        />
      </motion.div>
    </div>
  );
}
