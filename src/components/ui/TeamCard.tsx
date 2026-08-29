'use client';

import React from 'react';
import Image from 'next/image';
import { Award, CheckCircle } from 'lucide-react';
import { TeamMember } from '@/data/team';
import { GlassCard } from './GlassCard';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <GlassCard className="p-6 flex flex-col justify-between h-full group shadow-xl border border-slate-200/80 hover:border-brand-300 hover:shadow-2xl transition-all rounded-3xl">
      <div>
        <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-5 border border-slate-100 shadow-inner">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
            <span className="bg-brand-500/90 backdrop-blur-md px-2.5 py-1 rounded-full font-extrabold text-[10px] uppercase border border-white/20 shadow-md">
              {member.role}
            </span>
            {member.experience && (
              <span className="bg-navy-900/80 backdrop-blur-md px-2.5 py-1 rounded-full font-medium border border-white/20 text-slate-200 text-[10px]">
                {member.experience}
              </span>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-brand-500 transition-colors">{member.name}</h3>
        <p className="text-xs font-semibold text-brand-600 mb-3">{member.title}</p>
        
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          {member.bio}
        </p>
      </div>

      <div>
        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 pt-2 border-t border-slate-100">
          Specialties
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {member.specialties.map((spec, idx) => (
            <span
              key={idx}
              className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-50 text-slate-700 border border-slate-200"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
