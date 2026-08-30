'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ToothCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [toothSrc, setToothSrc] = useState<string | null>(null);

  useEffect(() => {
    // Enable custom cursor only on fine pointer devices (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    // Process realistic_tooth.jpg to remove black background and produce 100% transparent PNG
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.src = '/images/realistic_tooth.jpg';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const brightness = (r + g + b) / 3;

        // Dark background threshold
        if (brightness < 45) {
          data[i + 3] = 0; // 100% Transparent
        } else if (brightness < 80) {
          // Feathered alpha edge
          data[i + 3] = Math.floor(((brightness - 45) / 35) * 255);
        }
      }

      ctx.putImageData(imgData, 0, 0);
      setToothSrc(canvas.toDataURL('image/png'));
    };

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
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Subtle Cyan Glow Trail Behind Cursor */}
      <motion.div
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isClicking ? 0.7 : isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.85 : 0.4,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.1 }}
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-cyan-400/30 blur-sm pointer-events-none"
      />

      {/* 100% Transparent 3D Tooth Custom Mouse Cursor */}
      <motion.div
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isClicking ? 0.8 : isHovered ? 1.25 : 1,
          rotate: isHovered ? 12 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 400, mass: 0.1 }}
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none select-none flex items-center justify-center"
      >
        {toothSrc ? (
          <img
            src={toothSrc}
            alt="Tooth Cursor"
            className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(6,182,212,0.8)] pointer-events-none"
          />
        ) : (
          <img
            src="/images/realistic_tooth.jpg"
            alt="Tooth Cursor"
            className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(6,182,212,0.8)] pointer-events-none"
            style={{ mixBlendMode: 'screen' }}
          />
        )}
      </motion.div>
    </div>
  );
}
