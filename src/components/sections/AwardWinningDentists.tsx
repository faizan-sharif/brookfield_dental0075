'use client';

import React from 'react';
import Image from 'next/image';

interface DentistMember {
  role: string;
  name: string;
  subtitle: string;
  image: string;
}

const dentists: DentistMember[] = [
  {
    role: 'DENTIST',
    name: 'Dr. Maqsood Chaudhry',
    subtitle: 'Doctor of Dental Surgery (DDS)',
    image: '/images/dr_maqsood_chaudhry.jpg',
  },
  {
    role: 'DENTIST',
    name: 'Dr. Ahmad Hawasli',
    subtitle: 'Board Certified Periodontist',
    image: '/images/dr_ahmad_hawasli.jpg',
  },
  {
    role: 'DENTIST',
    name: 'Dr. Ameena Chimata',
    subtitle: 'Doctor of Dental Medicine (DMD)',
    image: '/images/dr_ameena_chimata.jpg',
  },
  {
    role: 'DENTAL HYGIENIST',
    name: 'Abdur Rauf Chaudry, RDH',
    subtitle: 'Registered Dental Hygienist',
    image: '/images/abdur_rauf_chaudry.jpg',
  },
];

export function AwardWinningDentists() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-cyan-400 block mb-2">
            MEET OUR TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight">
            Award Winning Dentists
          </h2>
        </div>

        {/* 4 Column Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dentists.map((dentist, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              {/* Doctor Image with Rounded Corners */}
              <div className="relative w-full aspect-square max-w-[280px] sm:max-w-none rounded-[28px] overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 bg-slate-100 mb-5 border border-slate-100">
                <Image
                  src={dentist.image}
                  alt={dentist.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Info */}
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-cyan-400 block">
                  {dentist.role}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-navy-900">
                  {dentist.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">
                  {dentist.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
