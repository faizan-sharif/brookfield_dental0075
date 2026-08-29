'use client';

import React, { useState } from 'react';
import { promotionsData } from '@/data/promotions';
import { PromotionCard } from '@/components/ui/PromotionCard';
import { AppointmentModal } from '@/components/ui/AppointmentModal';
import { GlassCard } from '@/components/ui/GlassCard';
import { ShieldCheck, Tag, Phone } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function PromotionsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState('');

  const handleClaim = (title: string) => {
    setSelectedOffer(title);
    setModalOpen(true);
  };

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-brand-600 uppercase bg-brand-100/80 px-3.5 py-1 rounded-full border border-brand-200 inline-block mb-3">
            Special Offers & Packages
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Exclusive Dental Savings
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Take advantage of our current discounts on new patient exams, teeth whitening, first-visit services, and consultations.
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {promotionsData.map((promo) => (
            <PromotionCard key={promo.id} promo={promo} onClaimClick={handleClaim} />
          ))}
        </div>

        {/* Guarantee Banner */}
        <GlassCard className="p-8 sm:p-10 text-center max-w-3xl mx-auto bg-gradient-to-r from-brand-500/10 to-teal-500/10 border-brand-500/20">
          <ShieldCheck className="w-12 h-12 text-brand-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-900 mb-2">20% Less Than Other Offices</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            At Brookfield Dental Associates, we believe world-class dental care should be affordable for every family in Northern Virginia. Call us at{' '}
            <a href={`tel:${siteConfig.phonePrimary}`} className="font-bold text-brand-600 underline">
              {siteConfig.phonePrimary}
            </a>{' '}
            to lock in your special offer today.
          </p>
        </GlassCard>
      </div>

      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={selectedOffer}
      />
    </div>
  );
}
