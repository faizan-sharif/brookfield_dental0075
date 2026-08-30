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
    // Only enable on devices with a mouse/fine pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

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
      {/* Subtle Cyan Glow Aura Follower */}
      <motion.div
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          scale: isClicking ? 0.8 : isHovered ? 1.4 : 1,
          opacity: isHovered ? 0.8 : 0.4,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.1 }}
        className="fixed top-0 left-0 w-9 h-9 rounded-full bg-cyan-400/30 blur-md pointer-events-none"
      />

      {/* Photorealistic 3D Tooth Custom Cursor (Transparent Background) */}
      <motion.div
        animate={{
          x: position.x - 14,
          y: position.y - 14,
          scale: isClicking ? 0.85 : isHovered ? 1.35 : 1,
          rotate: isHovered ? 12 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 350, mass: 0.15 }}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none select-none flex items-center justify-center"
        style={{
          mixBlendMode: 'screen', // Seamless transparent background!
        }}
      >
        <Image
          src="/images/realistic_tooth.jpg"
          alt="Tooth Cursor"
          width={36}
          height={36}
          priority
          className="object-contain filter drop-shadow-[0_6px_16px_rgba(6,182,212,0.85)] pointer-events-none"
        />
      </motion.div>
    </div>
  );
}
