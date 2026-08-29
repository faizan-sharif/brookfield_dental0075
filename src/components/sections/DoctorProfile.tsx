'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, Award, Stethoscope, Languages } from 'lucide-react';

interface DoctorProfileProps {
  onOpenBooking: () => void;
}

export function DoctorProfile({ onOpenBooking }: DoctorProfileProps) {
  const points = [
    {
      icon: GraduationCap,
      text: 'DDS, Howard University College of Dentistry',
    },
    {
      icon: Award,
      text: 'ICOI Fellow — implant surgery & prosthetics',
    },
    {
      icon: Stethoscope,
      text: '500+ implants placed and restored',
    },
    {
      icon: Languages,
      text: 'English, Urdu, Hindi and Punjabi spoken',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Doctor Portrait Photo + Floating Cyan 52 Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[420px] sm:h-[480px] rounded-[32px] overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
              <Image
                src="/images/dr_chaudhry_portrait.png"
                alt="Dr. Maqsood A. Chaudhry, DDS"
                fill
                priority
                className="object-cover"
              />

              {/* Floating Bottom-Left 52 Years Badge */}
              <div className="absolute bottom-5 left-5 bg-brand-500 text-white p-3.5 px-4 rounded-2xl shadow-xl border border-brand-400">
                <span className="text-2xl font-black block leading-none">52</span>
                <span className="text-[9px] font-extrabold uppercase tracking-wider block mt-1">
                  YEARS IN PRACTICE
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Credentials matching reference image */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-brand-500 block mb-1">
                YOUR DENTIST
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Dr. Maqsood A. Chaudhry, DDS
              </h2>
            </div>

            {/* Italic Quote Card */}
            <div className="border-l-2 border-brand-400 pl-4 py-1">
              <p className="text-xs sm:text-sm text-slate-500 italic font-medium leading-relaxed">
                &ldquo;I want every patient to leave knowing exactly what was done, what it cost, and what happens next.&rdquo;
              </p>
            </div>

            {/* 4 Feature Points with Icon Circles */}
            <div className="space-y-3.5 pt-1">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-500 border border-brand-200 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">
                      {pt.text}
                    </span>
                  </div>
                );
              })}
            </div>

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
