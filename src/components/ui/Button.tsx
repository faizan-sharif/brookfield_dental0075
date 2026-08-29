'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white shadow-lg shadow-brand-500/25 border border-brand-400/30',
    secondary:
      'bg-navy-900 hover:bg-navy-800 text-white shadow-lg shadow-navy-900/20 border border-slate-700/50',
    glass:
      'bg-white/80 hover:bg-white backdrop-blur-md text-brand-700 border border-white/80 shadow-md hover:shadow-xl',
    outline:
      'border-2 border-brand-500 text-brand-600 hover:bg-brand-50/80 backdrop-blur-sm',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...(props as any)}
    >
      {children}
      {icon && <span className="inline-block">{icon}</span>}
    </motion.button>
  );
}
