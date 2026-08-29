'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { testimonialsData } from '@/data/testimonials';
import { GlassCard } from './GlassCard';

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <GlassCard glow className="p-8 sm:p-12 relative overflow-hidden">
        <Quote className="absolute -top-4 -right-4 w-32 h-32 text-brand-500/10 pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Star Rating */}
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-semibold text-slate-500">
                5.0 Google Review
              </span>
            </div>

            {/* Testimonial Quote */}
            <p className="text-lg sm:text-xl text-slate-800 font-medium italic leading-relaxed">
              "{current.quote}"
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
              <div>
                <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  {current.author}
                  {current.verified && (
                    <span className="flex items-center gap-1 text-[11px] text-brand-600 bg-brand-50 font-normal px-2 py-0.5 rounded-full border border-brand-200">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified Patient
                    </span>
                  )}
                </h4>
                <p className="text-xs text-slate-500">
                  {current.location} • <span className="font-medium text-brand-600">{current.treatment}</span>
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-white/80 hover:bg-white text-slate-700 border border-slate-200 shadow-sm transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-white/80 hover:bg-white text-slate-700 border border-slate-200 shadow-sm transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </GlassCard>
    </div>
  );
}
