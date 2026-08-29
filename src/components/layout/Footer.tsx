'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white pt-16 pb-12 border-t border-navy-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-navy-900/80">
          {/* Column 1: White Logo Emblem + Short Description */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block group">
              <img
                src="/images/logo_white_outline.png"
                alt="Brookfield Dental Associates Logo"
                className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Implant and family dentistry in Springfield, Virginia — clear pricing, gentle care, one steady team.
            </p>
          </div>

          {/* Column 2: TREATMENTS */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-400">
              TREATMENTS
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/implants" className="hover:text-white transition-colors">Dental implants</Link>
              </li>
              <li>
                <Link href="/implants" className="hover:text-white transition-colors">All-on-4</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Crowns & bridges</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Teeth whitening</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Emergency care</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: PRACTICE */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-400">
              PRACTICE
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About us</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">Our team</Link>
              </li>
              <li>
                <Link href="/promotions" className="hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-white transition-colors">Patient stories</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li className="pt-1">
                <Link href="/admin" className="text-brand-400 hover:text-brand-300 font-bold transition-colors">Admin Portal</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-400">
              CONTACT
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>7108 Brookfield Plaza</li>
              <li>Springfield, VA 22150</li>
              <li className="pt-1 font-semibold text-white">703-913-1377</li>
              <li>info@brookfielddentalassociates.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Privacy Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Brookfield Dental Associates. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <Link href="/" className="hover:text-white transition-colors">Privacy</Link>
            <span>·</span>
            <Link href="/" className="hover:text-white transition-colors">Terms</Link>
            <span>·</span>
            <Link href="/" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
