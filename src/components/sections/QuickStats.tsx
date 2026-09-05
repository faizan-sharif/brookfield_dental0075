'use client';

import React from 'react';
import { Star, ShieldCheck, Clock } from 'lucide-react';

export function QuickStats() {
  const stats = [
    {
      icon: Star,
      value: '52',
      label: 'Google reviews from local patients',
    },
    {
      icon: ShieldCheck,
      value: '4.7',
      label: 'Average patient rating',
    },
    {
      icon: ShieldCheck,
      value: '500+',
      label: 'Implants placed and restored',
    },
    {
      icon: Clock,
      value: '1–2',
      label: 'Days to your first appointment',
    },
  ];

  return (
    <section className="py-8 bg-ice-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-navy-900 text-white rounded-3xl lg:rounded-full p-6 sm:p-8 shadow-2xl border border-navy-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-navy-800">
            {stats.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div key={idx} className="flex items-center gap-4 px-4 pt-4 sm:pt-0 first:pt-0">
                  <div className="w-12 h-12 rounded-full bg-brand-500/20 text-brand-400 border border-brand-400/30 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 fill-brand-400/30" />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-white block leading-tight">
                      {st.value}
                    </span>
                    <p className="text-xs text-slate-300 leading-snug">
                      {st.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
