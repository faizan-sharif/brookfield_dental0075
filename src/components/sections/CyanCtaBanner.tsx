'use client';

import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { siteConfig } from '@/data/site';

interface CyanCtaBannerProps {
  onOpenBooking: () => void;
}

export function CyanCtaBanner({ onOpenBooking }: CyanCtaBannerProps) {
  return (
    <section className="py-16 bg-brand-500 text-navy-900 relative overflow-hidden shadow-xl">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-5 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight tracking-tight">
          Your consultation is free. <br />
          Your slot is 1–2 days away.
        </h2>

        <p className="text-xs sm:text-sm text-navy-950/80 font-medium max-w-lg mx-auto">
          Book online in under a minute, or call and speak to someone at the front desk today.
        </p>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto py-3.5 px-7 bg-navy-900 text-white hover:bg-navy-950 rounded-full font-bold text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-brand-400" />
            <span>Book appointment</span>
          </button>

          <a href={`tel:${siteConfig.phonePrimary}`} className="w-full sm:w-auto">
            <button className="w-full sm:w-auto py-3.5 px-7 bg-white text-navy-900 hover:bg-slate-50 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer">
              <Phone className="w-4 h-4 text-brand-500" />
              <span>(703) 913-1377</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
