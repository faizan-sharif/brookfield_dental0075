'use client';

import React from 'react';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const reviews = [
    {
      stars: 5,
      quote: 'I put off implants for years. One visit here and it was planned, priced and done without drama.',
      author: 'Daniel R.',
    },
    {
      stars: 5,
      quote: 'My denture finally stays put. The team explained every step and checked in after surgery.',
      author: 'Alicia M.',
    },
    {
      stars: 5,
      quote: 'Fast appointment, honest pricing, and my new front tooth matches perfectly.',
      author: 'Kevin T.',
    },
  ];

  return (
    <section className="py-20 bg-ice-100/50 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-brand-500 block mb-1">
            REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            What patients say afterwards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 shadow-lg border border-slate-100 flex flex-col justify-between h-full"
            >
              <div>
                {/* 5 Cyan Stars matching screenshot */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-400 text-brand-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <span className="text-xs font-bold text-slate-500 block border-t border-slate-100 pt-3">
                {rev.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
