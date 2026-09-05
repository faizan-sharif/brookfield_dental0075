'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function CraftingSmilesBanner() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Dental Staff / Team Image */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
              <Image
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop"
                alt="Brookfield Dental Associates Team"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column: Text & Call Button matching screenshot */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* 3D Cyan Shield Icon */}
            <div className="w-16 h-16 rounded-2xl bg-cyan-gradient text-white flex items-center justify-center shadow-lg shadow-cyan-400/30">
              <ShieldCheck className="w-10 h-10 stroke-[2]" />
            </div>

            {/* Cyan Subtitle Badge */}
            <p className="text-xs sm:text-sm font-black text-cyan-400 tracking-wider uppercase">
              WE ARE BROOKFIELD DENTAL ASSOCIATES
            </p>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 leading-tight tracking-tight">
              Crafting Stunning Smiles Since 2006
            </h2>

            {/* Subtitle Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              At Brookfield Dental Associates, our dedicated team of professionals prioritizes patient care above all. We warmly welcome patients from all walks of life to experience our wide range of dental services tailored to every age group.
            </p>

            {/* Phone Action Button matching screenshot */}
            <div className="pt-2">
              <a href={`tel:${siteConfig.phonePrimary}`}>
                <button className="py-3.5 px-8 btn-navy text-white rounded-full font-bold text-sm shadow-md hover:shadow-lg flex items-center gap-2 transition-all cursor-pointer">
                  <Phone className="w-4 h-4 fill-current" />
                  <span>{siteConfig.phonePrimary}</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
