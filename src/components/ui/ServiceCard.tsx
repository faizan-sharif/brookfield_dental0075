'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, Zap, Smile, Activity, Shield, ShieldAlert, Heart, Sun, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '@/data/services';
import { GlassCard } from './GlassCard';
import { Tilt3DCard } from './Tilt3DCard';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Sparkles,
  Zap,
  Smile,
  Activity,
  Shield,
  ShieldAlert,
  Heart,
  Sun,
  ShieldCheck,
  CheckCircle2,
};

interface ServiceCardProps {
  service: ServiceItem;
  onBookClick: (title: string) => void;
}

export function ServiceCard({ service, onBookClick }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Sparkles;

  return (
    <Tilt3DCard maxTilt={8} className="h-full rounded-3xl">
      <GlassCard glow={service.popular} className="p-5 sm:p-6 flex flex-col justify-between h-full relative overflow-hidden group">
        <div>
          {/* Service Image Header Container */}
          <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-5 border border-white/40 shadow-md">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-108 transition-transform duration-500"
            />
            {/* Glass Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

            {/* Popular Badge */}
            {service.popular && (
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-brand-500/90 text-white backdrop-blur-md shadow-md border border-white/20">
                Most Requested
              </span>
            )}

            {/* Floating Icon Badge */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md text-brand-600 flex items-center justify-center border border-white/80 shadow-md">
                <IconComponent className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-white uppercase tracking-wider bg-navy-900/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                {service.category}
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
            {service.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
            {service.description}
          </p>

          <ul className="space-y-2 mb-6">
            {service.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-200/80">
          <button
            onClick={() => onBookClick(service.title)}
            className="w-full flex items-center justify-between text-sm font-semibold text-brand-600 group-hover:text-brand-700 transition-colors py-1 cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </GlassCard>
    </Tilt3DCard>
  );
}
