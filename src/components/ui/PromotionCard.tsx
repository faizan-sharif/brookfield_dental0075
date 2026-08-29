'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Promotion } from '@/data/promotions';

interface PromotionCardProps {
  promo: Promotion;
  onClaimClick: (title: string) => void;
}

export function PromotionCard({ promo, onClaimClick }: PromotionCardProps) {
  const isDark = promo.popular;

  return (
    <div
      className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative h-full transition-all ${
        isDark
          ? 'bg-navy-900 text-white shadow-2xl border border-navy-800 lg:scale-105 z-10'
          : 'bg-white text-navy-900 shadow-lg border border-slate-100/80 hover:shadow-xl'
      }`}
    >
      {/* Top Best Value / Tag */}
      {isDark && (
        <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase bg-brand-500 text-white shadow-md">
          BEST VALUE
        </div>
      )}

      <div>
        {isDark && (
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-300 bg-brand-500/20 px-2.5 py-0.5 rounded-full border border-brand-400/30 inline-flex items-center gap-1 mb-3">
            <Sparkles className="w-3 h-3" /> Save more
          </span>
        )}

        {/* Big Price Tag */}
        <div className="mb-2">
          <span className={`text-3xl font-black block leading-tight ${isDark ? 'text-brand-400' : 'text-brand-500'}`}>
            {promo.price}
          </span>
          <span className={`text-xs font-bold block mt-0.5 ${isDark ? 'text-white' : 'text-navy-900'}`}>
            {promo.title}
          </span>
          <span className={`text-[11px] font-semibold line-through block mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>
            {promo.originalPrice}
          </span>
        </div>

        {/* Description */}
        <p className={`text-xs leading-relaxed font-medium mb-6 ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
          {promo.description}
        </p>
      </div>

      {/* Light Cyan Pill Button matching screenshot */}
      <button
        onClick={() => onClaimClick(promo.title)}
        className={`w-full py-2.5 px-4 rounded-full font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
          isDark
            ? 'bg-brand-500 hover:bg-brand-400 text-white shadow-md'
            : 'bg-brand-50 hover:bg-brand-100 text-brand-600 border border-brand-200'
        }`}
      >
        <span>Claim offer</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
