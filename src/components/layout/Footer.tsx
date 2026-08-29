'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Heart, Lock } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-800/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <img
                src="/images/logo_white.png"
                alt="Brookfield Dental Associates Logo"
                className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed">
              Crafting your perfect smile with compassionate, high-tech dental care across Falls Church, Springfield, and Northern Virginia.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-brand-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-brand-400" /> 32+ Years Clinical Excellence
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-400 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-brand-300 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-300 transition-colors">Comprehensive Dental Services</Link>
              </li>
              <li>
                <Link href="/implants" className="hover:text-brand-300 transition-colors">Dental Implants Center</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-300 transition-colors">Meet Doctor & Team</Link>
              </li>
              <li>
                <Link href="/promotions" className="hover:text-brand-300 transition-colors">Current Special Offers</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-300 transition-colors">Book Online Appointment</Link>
              </li>
              <li className="pt-1">
                <Link href="/admin" className="inline-flex items-center gap-1.5 text-brand-400 hover:text-brand-300 font-bold transition-colors">
                  <Lock className="w-3.5 h-3.5" /> Staff / Reception Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-400 mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>
                  Direct:{' '}
                  <a href={`tel:${siteConfig.phonePrimary}`} className="text-white hover:text-brand-300 font-bold">
                    {siteConfig.phonePrimary}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Toll-Free: {siteConfig.phoneTollFree}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>

          {/* Practice Hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-400 mb-4">
              Office Hours
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              {siteConfig.hours.map((h, i) => (
                <div key={i} className="flex justify-between pb-1.5 border-b border-white/5">
                  <span className="text-slate-400">{h.days}</span>
                  <span className="font-medium text-white">{h.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-[11px] text-brand-300">
              ⚡ Emergency walk-in patients prioritized daily.
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Brookfield Dental Associates. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for patient well-being & healthy smiles.
          </p>
        </div>
      </div>
    </footer>
  );
}
