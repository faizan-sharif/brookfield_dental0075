'use client';

import React from 'react';
import Image from 'next/image';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { Tilt3DCard } from '../ui/Tilt3DCard';

export function ResultsSection() {
  const cases = [
    {
      title: 'Full Arch Restoration',
      before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Lumineers & Whitening',
      before: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Single Tooth Implant',
      before: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-cyan mb-3">OUR RESULTS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Life-Changing Results
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Same-day smiles from actual patients at Brookfield Dental Associates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <Tilt3DCard key={idx} maxTilt={6} className="h-full rounded-2xl">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                <h3 className="text-sm font-extrabold text-navy-900 text-center uppercase tracking-wider">
                  {c.title}
                </h3>
                <BeforeAfterSlider beforeImage={c.before} afterImage={c.after} />
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  );
}
