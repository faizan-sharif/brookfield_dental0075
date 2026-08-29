'use client';

import React from 'react';
import { promotionsData } from '@/data/promotions';
import { PromotionCard } from '../ui/PromotionCard';

interface PromotionsSectionProps {
  onClaimClick: (title: string) => void;
}

export function PromotionsSection({ onClaimClick }: PromotionsSectionProps) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-brand-500 block mb-1">
            TRANSPARENT PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Limited–time offers for new patients
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
            Claim your savings today. All offers are confirmed in writing and honored at checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-8">
          {promotionsData.map((promo) => (
            <PromotionCard key={promo.id} promo={promo} onClaimClick={onClaimClick} />
          ))}
        </div>

        <p className="text-[11px] text-slate-400 font-semibold text-center sm:text-left">
          Financing available. Final pricing is confirmed in writing after your visit.
        </p>
      </div>
    </section>
  );
}
