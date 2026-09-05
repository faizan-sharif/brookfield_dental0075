'use client';

import React, { useState } from 'react';
import { ImplantShowcase } from '@/components/sections/ImplantShowcase';
import { QuickStats } from '@/components/sections/QuickStats';
import { AppointmentModal } from '@/components/ui/AppointmentModal';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function ImplantsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-28 bg-slate-900 text-white min-h-screen">
      {/* Page Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center">
        <span className="text-xs font-extrabold tracking-widest text-brand-300 uppercase bg-brand-500/20 px-3.5 py-1 rounded-full border border-brand-400/30 inline-block mb-3">
          Specialized Dental Surgery
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Dental Implants Center of Northern Virginia
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          Hundreds of implants placed by Dr. Maqsood A. Chaudhry DDS. High-durability titanium implants at 20% less than other offices.
        </p>

        <div className="pt-6 flex flex-wrap justify-center gap-4">
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            Schedule Implant Consult
          </Button>
          <a href={`tel:${siteConfig.phonePrimary}`}>
            <Button variant="primary" className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-brand-400 fill-current" />
              <span>{siteConfig.phonePrimary}</span>
            </Button>
          </a>
        </div>
      </div>

      <QuickStats />
      <ImplantShowcase onOpenBooking={() => setModalOpen(true)} />

      {/* Implant FAQ / Benefit Breakdown */}
      <section className="py-16 bg-slate-950 text-white border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10 text-brand-300">
            Why Choose Brookfield Dental for Your Implants?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard dark className="p-6 border-white/10">
              <h3 className="text-base font-bold text-white mb-2">32+ Years Surgical Expertise</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dr. Chaudhry has placed hundreds of single implants, snap-in dentures, and full-arch All-on-4® restorations with high success rates.
              </p>
            </GlassCard>

            <GlassCard dark className="p-6 border-white/10">
              <h3 className="text-base font-bold text-white mb-2">Transparent & Fair Pricing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Save up to 20% compared to competing Northern Virginia dental clinics without compromising on material quality or comfort.
              </p>
            </GlassCard>

            <GlassCard dark className="p-6 border-white/10">
              <h3 className="text-base font-bold text-white mb-2">3D Digital Precision Imaging</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We use high-resolution digital scanning to map exact nerve and jawbone structures for precise, minimally invasive placement.
              </p>
            </GlassCard>

            <GlassCard dark className="p-6 border-white/10">
              <h3 className="text-base font-bold text-white mb-2">Pain-Free Gentle Sedation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Experience completely relaxed treatment with local anesthesia and soothing sedation options designed for anxious patients.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService="Dental Implants"
      />
    </div>
  );
}


