'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface FeaturedImplantsProps {
  onOpenBooking: () => void;
}

export function FeaturedImplants({ onOpenBooking }: FeaturedImplantsProps) {
  const col1 = [
    'Single Tooth Replacement',
    'Full Mouth Treatment',
    'All-on-4 Dental Implants',
    'Bone Graft Surgery',
  ];

  const col2 = [
    'Fixed Implant Dentures',
    'Fixed Implant Bridges',
    'Removable Implant Dentures',
    'Mini Dental Implants',
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
                alt="Dental Implants Consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
            </div>

            {/* Small Inset Thumbnail */}
            <div className="absolute -bottom-6 -right-6 w-44 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
                alt="Implant smile result"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Text & 2-Column Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-cyan">Our Best Service</span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Dental Implants & Full Arch Restorations
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Dr. Maqsood A. Chaudhry DDS has placed hundreds of single implants, snap-in dentures, and All-on-4® full arch restorations. Experience permanent smile stability at 20% less cost than other Northern VA clinics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <ul className="space-y-2.5">
                {col1.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-navy-900">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2.5">
                {col2.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-navy-900">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="py-3.5 px-8 btn-navy text-sm font-bold flex items-center gap-2 shadow-md"
              >
                <span>Learn More & Book</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
