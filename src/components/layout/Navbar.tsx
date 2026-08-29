'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, Menu, X, ArrowRight, Clock } from 'lucide-react';
import { siteConfig } from '@/data/site';

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [todayHours, setTodayHours] = useState('Open Today: 8 AM - 6 PM');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const day = new Date().getDay();
    if (day === 0) {
      setTodayHours('Closed Today (Emergency Only)');
    } else if (day === 5) {
      setTodayHours('Open Today: 8 AM - 4 PM');
    } else if (day === 6) {
      setTodayHours('Open Today: 8 AM - 2 PM');
    } else {
      setTodayHours('Open Today: 8 AM - 6 PM');
    }
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/promotions' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/promotions' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Top Thin Navy Accent Bar */}
      <div className="bg-navy-900 text-white text-xs py-1.5 px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-[11px] text-slate-300 font-medium">
            <span className="flex items-center gap-1 text-emerald-400">
              <Clock className="w-3 h-3" /> {todayHours}
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-brand-300 font-semibold">
              20% Lower Rates Than VA Average
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-slate-300">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-brand-400" />
              <a href={`tel:${siteConfig.phonePrimary}`} className="text-white hover:text-brand-300 font-bold">
                {siteConfig.phonePrimary}
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Clean White Main Navigation matching reference screenshot */}
      <nav
        className={`bg-white transition-all duration-300 ${
          scrolled ? 'shadow-md py-2 border-b border-slate-200' : 'py-2.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Prominent Official Brookfield Dental Associates Emblem Logo */}
          <Link href="/" className="flex items-center group py-0.5">
            <img
              src="/images/logo.png"
              alt="Brookfield Dental Associates"
              className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Center Title-Case Nav Links */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    active
                      ? 'text-brand-500 font-bold'
                      : 'text-navy-900 hover:text-brand-500'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Cyan Pill Button ("Book a call ->") */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="py-2.5 px-6 btn-cyan text-xs font-bold rounded-full flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Book a call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-50 border border-slate-200 text-navy-900"
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
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? 'bg-brand-50 text-brand-600 font-bold'
                      : 'text-navy-900 hover:bg-slate-50'
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
                  className="w-full py-3.5 btn-cyan text-xs font-bold rounded-full flex items-center justify-center gap-2"
                >
                  <span>Book a call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
