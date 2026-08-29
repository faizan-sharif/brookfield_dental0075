'use client';

import React from 'react';
import { promotionsData } from '@/data/promotions';
import { PromotionCard } from '../ui/PromotionCard';

interface PromotionsSectionProps {
  onClaimClick: (title: string) => void;
}

export function PromotionsSection({ onClaimClick }: PromotionsSectionProps) {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-widest text-brand-600 uppercase bg-brand-100/80 px-3.5 py-1 rounded-full border border-brand-200 inline-block mb-3">
            Exclusive Offers & Discounts
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Our Current Dental Promotions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Don't miss out on our exclusive offers designed with your dental health in mind. Claim your voucher online or call our office today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotionsData.map((promo) => (
            <PromotionCard key={promo.id} promo={promo} onClaimClick={onClaimClick} />
          ))}
        </div>
      </div>
    </section>
  );
}
