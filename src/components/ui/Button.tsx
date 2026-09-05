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
      'bg-navy-900 hover:bg-navy-950 text-white shadow-lg shadow-navy-900/20 border border-slate-700/40 rounded-full font-bold',
    secondary:
      'bg-navy-900 hover:bg-navy-950 text-white shadow-lg shadow-navy-900/20 border border-slate-700/50 rounded-full font-bold',
    glass:
      'bg-navy-900 hover:bg-navy-950 text-white shadow-md hover:shadow-xl border border-navy-800 rounded-full font-bold',
    outline:
      'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white rounded-full font-bold backdrop-blur-sm',
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
