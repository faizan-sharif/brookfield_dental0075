'use client';

import React, { useState } from 'react';
import { servicesData, serviceGroups, problemCards } from '@/data/services';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { AppointmentModal } from '@/components/ui/AppointmentModal';
import { GlassCard } from '@/components/ui/GlassCard';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const [activeGroup, setActiveGroup] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const filteredServices =
    activeGroup === 'all'
      ? servicesData
      : servicesData.filter((s) => s.category === activeGroup);

  const handleBook = (title: string) => {
    setSelectedService(title);
    setModalOpen(true);
  };

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold tracking-widest text-brand-600 uppercase bg-brand-100/80 px-3.5 py-1 rounded-full border border-brand-200 inline-block mb-3">
            Comprehensive Dental Treatments
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Full-Spectrum Dental Services
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            From single tooth implants to porcelain veneers, clear aligners, and 24/7 urgent emergency care in Springfield & Northern Virginia.
          </p>
        </div>

        {/* Group Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {serviceGroups.map((grp) => (
            <button
              key={grp.id}
              onClick={() => setActiveGroup(grp.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeGroup === grp.id
                  ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-md shadow-brand-500/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {grp.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} onBookClick={handleBook} />
          ))}
        </div>

        {/* Common Dental Problems Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-white/15">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Need Help Finding the Right Treatment?</h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Match your current dental concerns directly with our proven remedies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemCards.map((p, idx) => (
              <GlassCard key={idx} dark className="p-6 flex flex-col justify-between border-white/10">
                <div>
                  <h3 className="text-base font-bold text-brand-300 mb-2">{p.problem}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{p.solution}</p>
                </div>
                <button
                  onClick={() => handleBook(p.problem)}
                  className="text-xs font-bold text-brand-400 hover:text-brand-300 flex items-center justify-between pt-3 border-t border-white/10"
                >
                  <span>{p.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
}
