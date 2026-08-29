'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldAlert, UserCheck, Cpu, ArrowRight } from 'lucide-react';
import { Tilt3DCard } from '../ui/Tilt3DCard';

export function WhyChooseUs() {
  const cards = [
    {
      icon: ShieldAlert,
      title: 'Emergency Care',
      description: 'Immediate relief for toothaches, trauma, or broken crowns with same-day emergency walk-in availability.',
      link: '/services',
    },
    {
      icon: UserCheck,
      title: 'Expert Doctors',
      description: 'Directed by Dr. Maqsood A. Chaudhry DDS with 52+ years of compassionate clinical excellence.',
      link: '/about',
    },
    {
      icon: Cpu,
      title: 'Modern Technology',
      description: 'Equipped with 3D digital imaging, gentle ultrasonic scaling, and laser whitening tools.',
      link: '/services',
    },
  ];

  return (
    <section className="py-20 bg-ice-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge-cyan mb-3">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Why Choose Brookfield Dental?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
            Prioritizing patient comfort, transparent 20% lower pricing, and comprehensive care for all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Tilt3DCard key={i} maxTilt={6} className="h-full rounded-2xl">
                <div className="bg-white p-8 rounded-2xl shadow-card border border-slate-100 flex flex-col justify-between h-full group hover:shadow-xl transition-all">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center mb-6 border border-brand-100 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-brand-500 transition-colors">
                      {c.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {c.description}
                    </p>
                  </div>

                  <Link
                    href={c.link}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-500 hover:text-brand-600 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Tilt3DCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
