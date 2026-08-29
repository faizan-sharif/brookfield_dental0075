'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Phone } from 'lucide-react';
import { siteConfig } from '@/data/site';

interface SmileEnhancementProps {
  onOpenBooking: () => void;
}

export function SmileEnhancement({ onOpenBooking }: SmileEnhancementProps) {
  const leftCol = [
    'Dental crowns & bridges',
    'Teeth cleaning & scaling',
    'Wisdom tooth extraction',
    'Kid-friendly dentistry',
    'Smile makeover',
    'Root canal treatment',
  ];

  const rightCol = [
    'Dental veneers & laminates',
    'Teeth whitening',
    'Braces & clear aligners',
    'Emergency dental care',
    'Dental checkup',
    'Deep cleaning',
  ];

  return (
    <section className="py-20 bg-ice-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & 2-Column Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-brand-500">
              BEYOND IMPLANTS
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Smile enhancement solutions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <ul className="space-y-3">
                {leftCol.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {rightCol.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="py-3.5 px-8 btn-navy text-sm font-bold shadow-md cursor-pointer rounded-full"
              >
                Make an appointment
              </button>
            </div>
          </div>

          {/* Right Column: Dentist Photo + Floating Cyan Help Pill */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-white">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                alt="Smile enhancement treatment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />

              {/* Floating Cyan Phone Help Badge */}
              <div className="absolute bottom-6 right-6">
                <a
                  href={`tel:${siteConfig.phonePrimary}`}
                  className="py-2.5 px-5 bg-brand-500 hover:bg-brand-600 text-white rounded-full font-extrabold text-xs shadow-xl flex items-center gap-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Need help? {siteConfig.phonePrimary}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
