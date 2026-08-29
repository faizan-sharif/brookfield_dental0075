'use client';

import React from 'react';
import { Eye, Target, Heart, Award } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export function VisionMission() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard dark glow className="p-8 sm:p-10 border-white/15">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-300 flex items-center justify-center mb-6 border border-brand-400/30">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">
              Our Vision
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">
              Leading Patient-Centered Innovation
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Our vision at Brookfield Dental Associates is to be a leader in innovative, patient-centered dental care, empowering our community across Northern Virginia to achieve lifelong oral health and confidence through radiant, healthy smiles.
            </p>
          </GlassCard>

          <GlassCard dark glow className="p-8 sm:p-10 border-white/15">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-300 flex items-center justify-center mb-6 border border-brand-400/30">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">
              Our Mission
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">
              Compassionate & Accessible Excellence
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              At Brookfield Dental Associates, our mission is to provide exceptional dental care in a compassionate and welcoming environment. We combine state-of-the-art technology with personalized treatment plans to ensure top-quality care at accessible rates.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
