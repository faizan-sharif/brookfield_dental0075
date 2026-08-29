'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, Menu, X, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/site';

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Dental Implants', href: '/implants' },
    { name: 'About & Team', href: '/about' },
    { name: 'Special Offers', href: '/promotions' },
    { name: 'Contact', href: '/contact' },
    { name: 'Admin Portal', href: '/admin' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Hotline Top Bar */}
      <div className="bg-navy-900 text-white text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-brand-400" /> Reception:{' '}
              <a href={`tel:${siteConfig.phonePrimary}`} className="text-white hover:text-brand-400 font-bold underline">
                {siteConfig.phonePrimary}
              </a>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">
              Toll Free: <a href={`tel:${siteConfig.phoneTollFree}`} className="text-white font-semibold">{siteConfig.phoneTollFree}</a>
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <Clock className="w-3.5 h-3.5" /> Open Today: 8 AM - 6 PM
            </span>
            <span className="bg-brand-500/20 text-brand-300 text-[11px] px-2.5 py-0.5 rounded-full border border-brand-400/30">
              20% Less Than Other Offices
            </span>
          </div>
        </div>
      </div>

      {/* Floating Header */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
            : 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-cyan-gradient flex items-center justify-center text-white shadow-cyan group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="text-lg font-black text-navy-900 tracking-tight block leading-none">
                BROOKFIELD
              </span>
              <span className="text-[10px] font-extrabold text-brand-500 tracking-widest uppercase block mt-0.5">
                Dental Associates
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/80">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    active
                      ? 'bg-white text-brand-600 shadow-sm border border-slate-200'
                      : 'text-slate-700 hover:text-brand-600 hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Cyan CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="py-2.5 px-6 btn-cyan text-xs uppercase tracking-wider font-extrabold flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white border border-slate-200 text-navy-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                    pathname === link.href
                      ? 'bg-brand-50 text-brand-600 border border-brand-200'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 btn-cyan text-sm font-bold uppercase tracking-wider"
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
