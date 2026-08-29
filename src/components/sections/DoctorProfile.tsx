'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface DoctorProfileProps {
  onOpenBooking: () => void;
}

export function DoctorProfile({ onOpenBooking }: DoctorProfileProps) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Doctor Portrait Photo + Floating Cyan 32 Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[420px] sm:h-[480px] rounded-[32px] overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
              <Image
                src="/images/dr_chaudhry_portrait.png"
                alt="Dr. Maqsood A. Chaudhry, DDS"
                fill
                priority
                className="object-cover"
              />

              {/* Floating Bottom-Left 32 Years Badge */}
              <div className="absolute bottom-5 left-5 bg-brand-500 text-white p-3.5 px-4 rounded-2xl shadow-xl border border-brand-400">
                <span className="text-2xl font-black block leading-none">32</span>
                <span className="text-[9px] font-extrabold uppercase tracking-wider block mt-1">
                  YEARS IN PRACTICE
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Text matching exact reference screenshot */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-brand-500 block mb-1">
                YOUR DENTIST
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Dr. Maqsood A. Chaudhry, DDS
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Maqsood A. Chaudhry, DDS, is a dedicated and compassionate dentist with a passion for delivering high-quality dental care. With 32 years of experience in the dental industry, he is committed to staying current with the latest advancements in dentistry, ensuring his patients receive the best possible care. Dr. Chaudhry takes the time to listen to his patients’ concerns, developing personalized treatment plans to address their unique needs. His warm demeanor and gentle approach make him a favorite among patients of all ages.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              As the esteemed Founder and CEO of Brookfield Dental Associates, Dr. Chaudhry is dedicated to providing exceptional dental care and expanding access to oral health services in underserved communities.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="py-3 px-7 btn-navy text-xs font-extrabold rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Book with Dr. Chaudhry
              </button>

              <Link href="/about">
                <button className="py-3 px-7 bg-white border border-slate-200 hover:border-slate-300 text-navy-900 rounded-full text-xs font-extrabold shadow-sm hover:bg-slate-50 transition-all">
                  Meet the team
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
