'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Shield, Heart, Cpu } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export function WelcomeSection() {
  const highlights = [
    { title: 'Free Oral Consultation', desc: 'Warm welcome to new patients with zero obligation.' },
    { title: 'Luxurious Comfort', desc: 'Equipped with state-of-the-art gentle dental technology.' },
    { title: '20% Lower Pricing', desc: 'Exceptional care priced fairly for Northern Virginia families.' },
    { title: 'All-in-One Practice', desc: 'General, cosmetic, periodontics, and implant surgery under one roof.' },
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-widest text-brand-600 uppercase bg-brand-100/80 px-3.5 py-1 rounded-full border border-brand-200 inline-block mb-3">
            Welcome to Brookfield Dental
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Crafting Your Perfect Smile in a Luxurious, Comfort-First Environment
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Our clinic provides a wide array of dental services spanning general, cosmetic, and restorative dentistry to meet every need. Our offerings include Dental Implants, Lumineer Veneers, Zoom Whitening, Crowns, Deep Cleaning, Extractions, Root Canals, Invisalign, and Dentures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <GlassCard key={i} className="p-6">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 border border-brand-200">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{h.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{h.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
