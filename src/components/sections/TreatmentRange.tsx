'use client';

import React from 'react';
import Image from 'next/image';
import { Tilt3DCard } from '../ui/Tilt3DCard';

interface TreatmentRangeProps {
  onOpenBooking: (service?: string) => void;
}

export function TreatmentRange({ onOpenBooking }: TreatmentRangeProps) {
  const cards = [
    {
      title: 'Single & multi-tooth implants',
      description: 'Natural-looking replacements that restore chewing, speech and confidence one tooth at a time.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
      badges: ['1 visit consult', 'Titanium post', 'Custom crown'],
    },
    {
      title: 'Snap-in implant dentures',
      description: 'A secure, removable option for missing teeth — improved stability, comfort and bite force.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
      badges: ['2–4 implants', 'Removable', 'No adhesive'],
    },
    {
      title: 'All-on-4 full arch',
      description: 'A fixed full-arch solution for missing teeth: full smile function, restored in fewer visits.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
      badges: ['Fixed arch', 'Same-day teeth', 'Guided surgery'],
    },
  ];

  return (
    <section className="py-16 bg-navy-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mb-10 text-center sm:text-left">
          <span className="text-xs font-black uppercase tracking-widest text-brand-400 block mb-2">
            TREATMENT RANGE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            From one tooth to a full arch
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Bringing your best smile to life with the option that fits your bone, your bite and your budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {cards.map((c, idx) => (
            <Tilt3DCard key={idx} maxTilt={4} className="h-full">
              <div
                onClick={() => onOpenBooking(c.title)}
                className="bg-white text-navy-900 rounded-2xl overflow-hidden shadow-lg border border-white/10 flex flex-col justify-between h-full group hover:shadow-2xl transition-all cursor-pointer"
              >
                <div>
                  {/* Compact Aspect-Ratio Image Header */}
                  <div className="relative w-full h-40 sm:h-44 overflow-hidden bg-slate-100">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-extrabold text-navy-900 mb-1.5 group-hover:text-brand-500 transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed min-h-[44px]">
                      {c.description}
                    </p>
                  </div>
                </div>

                {/* Compact Bottom Badge Section */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {c.badges.map((b, bIdx) => (
                      <span
                        key={bIdx}
                        className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-600 border border-brand-200"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  );
}
