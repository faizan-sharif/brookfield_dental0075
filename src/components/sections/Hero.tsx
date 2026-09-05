'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Phone, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { QuickBookingBar } from '../ui/QuickBookingBar';

interface HeroProps {
  onOpenBooking: (details?: { service?: string; doctor?: string; date?: string }) => void;
}

const HERO_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    alt: 'Modern Dental Office & Equipment',
  },
  {
    url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    alt: 'Professional Dental Care & Consultation',
  },
  {
    url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
    alt: 'Patient Smile & Dental Hygiene',
  },
  {
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    alt: 'State of the Art Dental Clinic',
  },
  {
    url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
    alt: 'Expert Dentist Team',
  },
];

export function Hero({ onOpenBooking }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-36 sm:pt-40 lg:pt-44 pb-20 md:pb-24 bg-gradient-to-b from-ice-100 via-white to-ice-50 z-20">
      {/* Background Orbs (isolated overflow-hidden so floating dropdowns never get clipped) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="badge-cyan">Caring For Your Smile</span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy-900 leading-[1.15] tracking-tight">
              Your <span className="text-brand-500">Smile</span> <br />
              Matters to Us
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              We are dedicated to providing exceptional dental care to families in the Falls Church area, treating patients of all ages with expert care.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto py-3.5 px-8 btn-navy text-sm font-bold shadow-md cursor-pointer"
              >
                Book Appointment
              </button>

              <a href={`tel:${siteConfig.phonePrimary}`} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto py-3.5 px-8 bg-white border border-slate-200 text-navy-900 rounded-full font-bold text-sm shadow-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-brand-500 fill-current" />
                  <span>{siteConfig.phonePrimary}</span>
                </button>
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Auto-Rotating Hero Visual */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end -mt-4 lg:-mt-10">
            <div className="relative w-full max-w-xl h-[360px] sm:h-[400px] lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={HERO_IMAGES[currentIndex].url}
                    alt={HERO_IMAGES[currentIndex].alt}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Carousel Indicators / Dots */}
              <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                {HERO_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'bg-cyan-400 w-4' : 'bg-white/60 hover:bg-white w-1.5'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Floating Free Consult Badge */}
              <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/80 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-gradient text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-navy-900">Free Consultation</span>
                  <span className="text-[10px] text-slate-500 font-semibold">$150 Value • New Patients</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Quick Booking Bar */}
        <QuickBookingBar
          onBook={(details) => onOpenBooking(details)}
        />
      </div>
    </section>
  );
}

