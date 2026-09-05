'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Promotion } from '@/data/promotions';

interface PromotionCardProps {
  promo: Promotion;
  onClaimClick: (title: string) => void;
}

export function PromotionCard({ promo, onClaimClick }: PromotionCardProps) {
  const isBestValue = promo.popular;

  return (
    <div
      className="group rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative h-full bg-navy-900 text-white border border-navy-800/80 shadow-xl hover:shadow-2xl hover:border-brand-400/50 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={() => onClaimClick(promo.title)}
    >
      {/* Top Best Value Ribbon */}
      {isBestValue && (
        <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase bg-brand-500 text-white shadow-md z-10">
          BEST VALUE
        </div>
      )}

      <div>
        {/* Top Save More pill */}
        {isBestValue && (
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-300 bg-brand-500/20 px-2.5 py-0.5 rounded-full border border-brand-400/30 inline-flex items-center gap-1 mb-3">
            <Sparkles className="w-3 h-3 text-brand-400" /> Save more
          </span>
        )}

        {/* Big Cyan Price Tag */}
        <div className="mb-2">
          <span className="text-3xl font-black block leading-tight text-brand-400">
            {promo.price}
          </span>
          <span className="text-xs font-bold block mt-0.5 text-white">
            {promo.title}
          </span>
          <span className="text-[11px] font-semibold line-through block mt-0.5 text-slate-400">
            {promo.originalPrice}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs leading-relaxed font-medium mb-6 text-slate-300">
          {promo.description}
        </p>
      </div>

      {/* Solid Navy Pill Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClaimClick(promo.title);
        }}
        className="w-full py-2.5 px-4 rounded-full font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all btn-navy text-white shadow-md hover:shadow-lg cursor-pointer"
      >
        <span>Claim offer</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
