'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function WorkingHoursShowcase() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Dark Navy Hours & Contact Card */}
          <div className="lg:col-span-5 bg-navy-900 text-white p-7 sm:p-8 rounded-3xl shadow-xl border border-navy-800 flex flex-col justify-between h-full space-y-6">
            <div>
              <span className="text-[10px] font-extrabold tracking-widest text-brand-400 uppercase bg-brand-500/20 px-3 py-1 rounded-full border border-brand-400/30 inline-block mb-3">
                OPEN 6 DAYS A WEEK
              </span>
              <h3 className="text-2xl font-black text-white">Visit Our Practice</h3>
              <p className="text-xs text-slate-300 mt-1">Convenient appointments in Springfield, VA.</p>
            </div>

            <div className="space-y-2 pt-1 flex-1 flex flex-col justify-center">
              {siteConfig.hours.map((h, i) => (
                <div key={i} className="flex justify-between py-1.5 border-b border-navy-800/60 text-xs">
                  <span className="text-slate-300 font-medium">{h.days}</span>
                  <span className="font-bold text-brand-300">{h.time}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 space-y-2.5 text-xs text-slate-300 border-t border-navy-800/80">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>
                  Direct:{' '}
                  <a href={`tel:${siteConfig.phonePrimary}`} className="text-white hover:text-brand-300 font-bold">
                    {siteConfig.phonePrimary}
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Operatory Room Photo with Equal Height */}
          <div className="lg:col-span-7 relative w-full min-h-[380px] sm:min-h-[440px] h-full rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
              alt="Operatory Room"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
