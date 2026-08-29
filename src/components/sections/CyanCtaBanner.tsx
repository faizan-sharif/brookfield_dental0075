'use client';

import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { siteConfig } from '@/data/site';

interface CyanCtaBannerProps {
  onOpenBooking: () => void;
}

export function CyanCtaBanner({ onOpenBooking }: CyanCtaBannerProps) {
  return (
    <section className="py-16 bg-cyan-gradient text-white relative overflow-hidden shadow-2xl">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
          Your consultation is free. <br />
          You start in 1–2 days away.
        </h2>

        <p className="text-sm sm:text-base text-cyan-50 font-semibold max-w-xl mx-auto">
          Complimentary oral evaluation & digital X-rays ($150 value) for all new Northern Virginia patients.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto py-4 px-9 btn-navy text-sm font-black tracking-wider uppercase shadow-xl flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Now</span>
          </button>

          <a href={`tel:${siteConfig.phonePrimary}`} className="w-full sm:w-auto">
            <button className="w-full sm:w-auto py-4 px-9 bg-white text-navy-900 rounded-full font-black text-sm tracking-wider uppercase shadow-md hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-brand-500" />
              <span>Call {siteConfig.phonePrimary}</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
