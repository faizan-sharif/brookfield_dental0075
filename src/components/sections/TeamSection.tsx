'use client';

import React from 'react';
import Image from 'next/image';
import { teamData } from '@/data/team';
import { Tilt3DCard } from '../ui/Tilt3DCard';

export function TeamSection() {
  const specialists = teamData.slice(1, 4);

  return (
    <section className="py-20 bg-ice-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-cyan mb-3">EXPERT TEAM</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Meet Our Expert Dental Team
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Combining decades of specialized dental expertise under one roof in Springfield, VA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialists.map((member, idx) => (
            <Tilt3DCard key={idx} maxTilt={6} className="h-full rounded-2xl">
              <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-slate-100 flex flex-col justify-between h-full group hover:shadow-xl transition-all">
                <div>
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="bg-brand-500 text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy-900 mb-1">{member.name}</h3>
                    <p className="text-xs font-bold text-brand-500 mb-3">{member.title}</p>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  );
}
