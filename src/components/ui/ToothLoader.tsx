'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ThreeDToothCanvas } from './ThreeDToothCanvas';

export function ToothLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if loader was already shown in this session
    const hasLoaded = sessionStorage.getItem('brookfield_intro_shown');
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('brookfield_intro_shown', 'true');
          }, 400);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 bg-navy-950 flex flex-col items-center justify-center p-4 overflow-hidden"
        >
          {/* Background Ambient Light Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[120px] pointer-events-none" />

          {/* 3D Glass Tooth Container */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full glass-card-dark border-white/20 shadow-glow-teal flex items-center justify-center overflow-hidden mb-8"
          >
            {/* Pulsing Energy Ring */}
            <div className="absolute inset-2 rounded-full border border-brand-400/30 animate-ping opacity-30 pointer-events-none" />
            
            {/* Interactive 3D WebGL Tooth Canvas */}
            <ThreeDToothCanvas className="w-full h-full" autoRotate={true} />

            {/* Glowing Accent Badge */}
            <div className="absolute bottom-3 px-3.5 py-1 rounded-full glass-badge text-[10px] font-bold text-brand-300 flex items-center gap-1.5 shadow-md pointer-events-none z-10">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" /> Interactive 3D Dental Tech
            </div>
          </motion.div>

          {/* Practice Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-2 max-w-sm"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              BROOKFIELD
            </h2>
            <p className="text-xs font-extrabold text-brand-400 tracking-widest uppercase">
              Dental Associates
            </p>

            {/* Progress Bar & Counter */}
            <div className="pt-4 space-y-2">
              <div className="w-48 sm:w-64 h-1.5 bg-white/10 rounded-full mx-auto overflow-hidden p-0.5 border border-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-400 to-teal-300 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-[11px] font-semibold text-slate-400">
                Preparing Dental Experience... <span className="text-brand-300 font-bold">{progress}%</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
