'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Promotion } from '@/data/promotions';
import { GlassCard } from './GlassCard';

interface PromotionCardProps {
  promo: Promotion;
  onClaimClick: (title: string) => void;
}

export function PromotionCard({ promo, onClaimClick }: PromotionCardProps) {
  return (
    <GlassCard glow={promo.popular} className="p-6 sm:p-8 flex flex-col justify-between relative h-full">
      {promo.popular && (
        <div className="absolute -top-3 left-6 px-3.5 py-0.5 rounded-full text-[10px] font-black tracking-widest uppercase bg-navy-900 text-white shadow-md border border-navy-800">
          Popular Offer
        </div>
      )}

      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold tracking-wider text-brand-600 uppercase bg-brand-50 px-2.5 py-1 rounded-md border border-brand-200">
            {promo.badge}
          </span>
          {promo.expires && (
            <span className="flex items-center gap-1 text-[11px] text-navy-900 font-extrabold">
              <Clock className="w-3.5 h-3.5 text-navy-900" /> {promo.expires}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">{promo.title}</h3>
        
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-extrabold text-brand-600">{promo.price}</span>
          <span className="text-sm line-through text-slate-400 font-medium">{promo.originalPrice}</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
          {promo.description}
        </p>

        <ul className="space-y-2 mb-6">
          {promo.details.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => onClaimClick(promo.title)}
        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
      >
        <span>Claim Special Offer</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </GlassCard>
  );
}
