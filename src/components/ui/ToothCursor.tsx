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
          x: position.x - 14,
          y: position.y - 14,
          scale: isClicking ? 0.75 : isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.9 : 0.45,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.1 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-cyan-400/35 blur-md pointer-events-none"
      />

      {/* 100% Transparent 3D Tooth Custom Mouse Cursor */}
      <motion.div
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isClicking ? 0.8 : isHovered ? 1.4 : 1,
          rotate: isHovered ? 15 : 0,
        }}
        transition={{ type: 'spring', damping: 18, stiffness: 380, mass: 0.12 }}
        className="fixed top-0 left-0 w-9 h-9 pointer-events-none select-none flex items-center justify-center"
      >
        {toothSrc ? (
          <img
            src={toothSrc}
            alt="Tooth Cursor"
            className="w-full h-full object-contain filter drop-shadow-[0_5px_12px_rgba(6,182,212,0.8)] pointer-events-none"
          />
        ) : (
          <img
            src="/images/realistic_tooth.jpg"
            alt="Tooth Cursor"
            className="w-full h-full object-contain filter drop-shadow-[0_5px_12px_rgba(6,182,212,0.8)] pointer-events-none"
            style={{ mixBlendMode: 'screen' }}
          />
        )}
      </motion.div>
    </div>
  );
}
