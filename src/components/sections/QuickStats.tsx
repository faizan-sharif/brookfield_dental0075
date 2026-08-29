'use client';

import React from 'react';
import { Award, Star, Percent, Users, ShieldCheck, Clock } from 'lucide-react';

export function QuickStats() {
  const stats = [
    {
      value: '99%',
      label: 'Delighted Patients',
      description: 'Satisfaction Survey Rating',
    },
    {
      value: '32+',
      label: 'Years Experience',
      description: 'Founded by Dr. Chaudhry DDS',
    },
    {
      value: '500+',
      label: 'Implants Placed',
      description: 'Single, Snap-In & All-on-4®',
    },
    {
      value: '24/7',
      label: 'Emergency Care',
      description: 'Same-day urgent appointments',
    },
  ];

  return (
    <section className="py-10 bg-navy-900 text-white relative z-20 shadow-xl border-y border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((st, idx) => (
            <div key={idx} className="p-4 border-r border-navy-800 last:border-r-0">
              <span className="text-3xl sm:text-4xl font-black text-brand-500 block mb-1">{st.value}</span>
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">{st.label}</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">{st.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
