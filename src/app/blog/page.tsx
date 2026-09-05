'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles, Phone } from 'lucide-react';
import { blogData } from '@/data/blog';
import { BlogCard } from '@/components/ui/BlogCard';
import { siteConfig } from '@/data/site';

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <span className="badge-cyan">
              <BookOpen className="w-3.5 h-3.5 inline mr-1 text-brand-400" /> Dental Health Library & Tips
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              Latest Articles & Expert Dental Advice
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              Explore patient guides, oral hygiene advice, and insights from Dr. Maqsood A. Chaudhry and the Brookfield Dental team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter & Contact CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 text-center">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-gradient text-white flex items-center justify-center mx-auto font-bold shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-navy-900">
            Have Questions About Your Dental Health?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Our expert team at Brookfield Dental Associates is here to assist with personalized advice, consultations, and comprehensive family dental care.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={`tel:${siteConfig.phonePrimary}`}>
              <button className="py-3 px-8 btn-navy text-xs font-bold shadow-md flex items-center justify-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-400 fill-current" />
                <span>{siteConfig.phonePrimary}</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
