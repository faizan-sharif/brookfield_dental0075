'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface DentalEmergencyBannerProps {
  onOpenBooking?: () => void;
}

export function DentalEmergencyBanner({ onOpenBooking }: DentalEmergencyBannerProps) {
  const symptoms = [
    'A Severe Toothache or Bleeding',
    'Broken Tooth or Jaw',
    'Lost Dental Filling or Crown',
    'Object Stuck in Teeth',
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Dental Vector Illustration */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-square">
              <Image
                src="/images/dental_emergency.jpg"
                alt="Dental Emergency Care"
                fill
                priority
                className="object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* Right Column: Emergency Text & Symptoms */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-cyan-400 tracking-tight leading-tight uppercase">
              Do You Have An<br />Emergency?
            </h2>

            <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed max-w-xl">
              Do not hesitate to seek urgent dental care if you experience any of the following symptoms:
            </p>

            {/* Symptoms List */}
            <div className="space-y-3 pt-2">
              {symptoms.map((symptom, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <ArrowRight className="w-4 h-4 text-slate-900 stroke-[2.5] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    {symptom}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-4">
              {onOpenBooking ? (
                <button
                  onClick={onOpenBooking}
                  className="py-3.5 px-8 btn-navy text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center justify-center rounded-full"
                >
                  Contact Us Now
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="py-3.5 px-8 btn-navy text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center justify-center rounded-full"
                >
                  Contact Us Now
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
