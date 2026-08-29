'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Phone, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { QuickBookingBar } from '../ui/QuickBookingBar';

interface HeroProps {
  onOpenBooking: (details?: { service?: string; doctor?: string; date?: string }) => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-36 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-ice-100 via-white to-ice-50">
      {/* Background Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />

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
              We are dedicated to providing exceptional dental care to families in Falls Church, Springfield, and Northern Virginia. From Dental Implants to Lumineer Veneers & Zoom Whitening at <span className="font-bold text-navy-900">20% less than other offices</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto py-3.5 px-8 btn-navy text-sm font-bold shadow-md cursor-pointer"
              >
                Get Started
              </button>

              <a href={`tel:${siteConfig.phonePrimary}`} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto py-3.5 px-8 bg-white border border-slate-200 text-navy-900 rounded-full font-bold text-sm shadow-sm hover:bg-slate-50 transition-colors">
                  Call {siteConfig.phonePrimary}
                </button>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Hero Patient Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                alt="Patient smiling at dentist"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />

              {/* Floating Free Consult Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-white/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-gradient text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
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
