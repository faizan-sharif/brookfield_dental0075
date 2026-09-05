'use client';

import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function FreeConsultationBanner() {
  return (
    <section className="relative bg-[#DCEFFB] overflow-hidden pt-12 sm:pt-16 pb-12 sm:pb-0">
      {/* Decorative Wave/Contour Background Pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <svg
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          fill="none"
          stroke="#93C5FD"
          strokeWidth="2.5"
          preserveAspectRatio="none"
        >
          <path d="M-100,200 C300,50 600,350 1000,150 C1250,50 1400,250 1600,100" />
          <path d="M-100,350 C350,200 700,500 1100,300 C1300,200 1500,400 1600,250" />
          <path d="M-100,500 C400,350 800,600 1200,450 C1400,350 1550,500 1600,400" />
          <path d="M-50,100 C450,-50 750,250 1150,50 C1350,-50 1500,150 1600,50" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Text & Phone Button */}
          <div className="lg:col-span-7 space-y-5 pb-8 sm:pb-16 lg:pr-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Free Initial Consultation
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              We value your smile, which is why we offer a complimentary first oral health consultation at our clinic. Our skilled dentists will craft a personalized treatment plan for you, utilizing digital x-rays and a thorough dental exam. Once you&apos;re fully content with our proposed approach, we&apos;ll proceed with your treatment. Allow us to create the smile you&apos;ve always dreamed of!
            </p>

            <div className="pt-2">
              <a
                href={`tel:${siteConfig.phonePrimary}`}
                className="inline-flex items-center gap-2 py-3 px-8 btn-navy text-white rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{siteConfig.phonePrimary}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Smiling Woman Cutout Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-square -mb-0 lg:-mb-1">
              <Image
                src="/images/consultation_smile_woman.jpg"
                alt="Free Dental Consultation Patient"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
