'use client';

import React, { useState } from 'react';
import { CraftingSmilesBanner } from '@/components/sections/CraftingSmilesBanner';
import { AwardWinningDentists } from '@/components/sections/AwardWinningDentists';
import { DentalEmergencyBanner } from '@/components/sections/DentalEmergencyBanner';
import { FreeConsultationBanner } from '@/components/sections/FreeConsultationBanner';
import { AppointmentModal } from '@/components/ui/AppointmentModal';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-brand-600 uppercase bg-brand-100/80 px-3.5 py-1 rounded-full border border-brand-200 inline-block mb-3">
            About Our Practice
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Excellence in Dental Care
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Prioritizing patient comfort, advanced techniques, and lifelong oral health for smiles across Springfield and Northern Virginia.
          </p>
        </div>
      </div>

      {/* Crafting Stunning Smiles Since 2006 Banner */}
      <CraftingSmilesBanner />

      {/* Award Winning Dentists Section */}
      <AwardWinningDentists />

      {/* Dental Emergency Section */}
      <DentalEmergencyBanner onOpenBooking={() => setModalOpen(true)} />

      {/* Free Initial Consultation Banner */}
      <FreeConsultationBanner />

      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService="Emergency Dental Care"
      />
    </div>
  );
}
