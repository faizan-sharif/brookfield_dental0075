'use client';

import React from 'react';
import { TestimonialCarousel } from '../ui/TestimonialCarousel';

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-widest text-brand-600 uppercase bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200 inline-block mb-3">
            Patient Satisfaction Survey: 99% Delighted
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Heartfelt Testimonials from Smiling Faces
          </h2>
          <p className="text-sm text-slate-600 mt-3">
            See what real Northern Virginia patients say about Dr. Chaudhry and the team.
          </p>
        </div>

        <TestimonialCarousel />
      </div>
    </section>
  );
}
