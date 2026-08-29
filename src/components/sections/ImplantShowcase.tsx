'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';

interface ImplantShowcaseProps {
  onOpenBooking: () => void;
}

export function ImplantShowcase({ onOpenBooking }: ImplantShowcaseProps) {
  const implantTypes = [
    {
      title: 'Single & Multi-Tooth Implants',
      desc: 'Restore missing individual teeth with durable, natural-looking porcelain crowns anchored directly to titanium implant roots.',
      features: ['Preserves jawbone density', 'Permanent lifetime stability', '20% less cost than VA average'],
    },
    {
      title: 'Snap-In Implant Dentures',
      desc: 'Secure removable dentures anchored to 2-4 implants to prevent slipping, painful gum sores, and messy adhesives.',
      features: ['Removable easy cleaning', 'No denture slip-ups', 'High chewing confidence'],
    },
    {
      title: 'All-On-4® Full Arch Implants',
      desc: 'Replace an entire upper or lower arch of teeth permanently using just 4 strategically placed titanium implants.',
      features: ['Same-day full smile', 'Non-removable fixed bridge', '100% natural appearance'],
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-brand-300 uppercase bg-brand-500/20 px-3.5 py-1 rounded-full border border-brand-400/30 inline-block mb-3">
            Implants Center of Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Single Implants to Fixed Teeth on Implants
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Bringing your best smile to life with durable, permanent implant solutions performed by Dr. Maqsood A. Chaudhry DDS (32+ Yrs Experience).
          </p>
        </div>

        {/* Implant Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {implantTypes.map((imp, idx) => (
            <GlassCard key={idx} dark hoverEffect className="p-7 border-white/15 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-brand-400 uppercase bg-brand-500/10 px-2.5 py-1 rounded-md border border-brand-500/20 inline-block mb-3">
                  Option {idx + 1}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{imp.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">{imp.desc}</p>
                
                <ul className="space-y-2 mb-6">
                  {imp.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant="glass"
                size="sm"
                className="w-full text-slate-900 font-semibold"
                onClick={onOpenBooking}
              >
                Schedule Consult
              </Button>
            </GlassCard>
          ))}
        </div>

        {/* Visual Transformation Interactive Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card-dark p-8 sm:p-10 rounded-3xl border border-white/15">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Real Patient Smile Makeover
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Slide to See Life-Changing Same-Day Smile Results
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Drag the interactive handle on the right image to visually compare real patient before-and-after smile restorations performed at Brookfield Dental Associates.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Button variant="primary" onClick={onOpenBooking}>
                Claim Free Consultation
              </Button>
              <a href={`tel:${siteConfig.phonePrimary}`} className="text-xs text-brand-300 font-semibold underline">
                Call {siteConfig.phonePrimary}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
              labelBefore="Before Implants"
              labelAfter="After All-on-4®"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
