'use client';

import React, { useState } from 'react';
import { teamData } from '@/data/team';
import { TeamCard } from '@/components/ui/TeamCard';
import { DoctorProfile } from '@/components/sections/DoctorProfile';
import { CraftingSmilesBanner } from '@/components/sections/CraftingSmilesBanner';
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
            Meet Our Expert Dental Team
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Our dedicated team of doctors, periodontists, hygienists, and specialists prioritize patient comfort, advanced techniques, and lifelong oral health.
          </p>
        </div>

        {/* Doctor Spotlight */}
        <DoctorProfile onOpenBooking={() => setModalOpen(true)} />

        {/* Full Team Grid */}
        <div className="py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Our Dental Specialists & Staff
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Combining decades of specialized dental expertise under one roof in Springfield, VA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </div>
        </div>
      </div>

      {/* Crafting Stunning Smiles Since 2006 Banner */}
      <CraftingSmilesBanner />

      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService="Consultation"
      />
    </div>
  );
}
