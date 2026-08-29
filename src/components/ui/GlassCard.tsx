'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  glow?: boolean;
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  className = '',
  dark = false,
  glow = false,
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={hoverEffect ? { y: -6, transition: { duration: 0.2 } } : undefined}
      className={`rounded-2xl transition-all duration-300 ${
        dark
          ? 'glass-card-dark text-white'
          : 'glass-card text-slate-800'
      } ${glow ? 'shadow-glow-teal border-brand-400/40' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
