'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { teamData } from '@/data/team';
import { siteConfig } from '@/data/site';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';

interface DoctorProfileProps {
  onOpenBooking: () => void;
}

export function DoctorProfile({ onOpenBooking }: DoctorProfileProps) {
  const drChaudhry = teamData[0];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Doctor Image Container */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-[450px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
            >
              <Image
                src={drChaudhry.image}
                alt={drChaudhry.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="bg-brand-500 text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  Founder & CEO
                </span>
                <h3 className="text-2xl font-bold">{drChaudhry.name}</h3>
                <p className="text-xs text-brand-300 font-semibold">{drChaudhry.title}</p>
              </div>
            </motion.div>
          </div>

          {/* Doctor Bio & Message */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold tracking-wider text-brand-600 uppercase bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                Lead Dental Surgeon
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Meet Dr. Maqsood A. Chaudhry, DDS
              </h2>
              <p className="text-xs font-bold text-brand-600 uppercase tracking-widest">
                52+ Years of Dedicated Clinical Excellence
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Dr. Maqsood A. Chaudhry is a dedicated and compassionate dentist with a passion for delivering high-quality dental care. With 52+ years of experience in the dental industry, he is committed to staying current with the latest advancements in dentistry, ensuring his patients receive the best possible care.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Dr. Chaudhry takes the time to listen to his patients’ concerns, developing personalized treatment plans to address their unique needs. His warm demeanor and gentle approach make him a favorite among patients of all ages. As Founder and CEO of Brookfield Dental Associates, he is dedicated to expanding access to oral health services across Northern Virginia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {drChaudhry.specialties.map((spec, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-800 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Button variant="primary" icon={<Calendar className="w-4 h-4" />} onClick={onOpenBooking}>
                Book Consultation with Dr. Chaudhry
              </Button>
              <a href={`tel:${siteConfig.phonePrimary}`}>
                <Button variant="outline" icon={<Phone className="w-4 h-4" />}>
                  Call {siteConfig.phonePrimary}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
