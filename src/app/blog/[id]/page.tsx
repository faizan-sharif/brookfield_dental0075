'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Phone,
  Sparkles,
  BookOpen,
  Share2,
  CheckCircle,
} from 'lucide-react';
import { blogData, BlogPost } from '@/data/blog';
import { BlogCard } from '@/components/ui/BlogCard';
import { siteConfig } from '@/data/site';
import { AppointmentModal } from '@/components/ui/AppointmentModal';

export default function SingleBlogPage() {
  const params = useParams();
  const id = params?.id as string;
  const [modalOpen, setModalOpen] = useState(false);

  const post = blogData.find((b) => b.id === id) || blogData[0];
  const exploreBlogs = blogData.filter((b) => b.id !== post.id).slice(0, 3);

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      {/* Top Breadcrumb Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Articles
        </Link>
      </div>

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 space-y-8">
          {/* Category & Meta */}
          <div className="space-y-4">
            <span className="badge-cyan">
              <BookOpen className="w-3.5 h-3.5 inline mr-1 text-brand-500" /> {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1.5 text-navy-900 font-bold">
                <User className="w-4 h-4 text-brand-500" /> {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" /> {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" /> {post.readTime}
              </span>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="relative w-full h-[300px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Article Body Content */}
          <div className="prose prose-slate max-w-none space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith('•')) {
                return (
                  <div key={index} className="pl-4 py-1 flex items-start gap-2.5 text-slate-800 font-semibold">
                    <CheckCircle className="w-4 h-4 text-brand-500 shrink-0 mt-1" />
                    <span>{paragraph.replace('•', '').trim()}</span>
                  </div>
                );
              }

              if (/^\d+\./.test(paragraph)) {
                return (
                  <h3 key={index} className="text-lg sm:text-xl font-extrabold text-navy-900 pt-3">
                    {paragraph}
                  </h3>
                );
              }

              return <p key={index}>{paragraph}</p>;
            })}
          </div>

          {/* End of Blog CTA Box: Book an Appointment & Phone Number */}
          <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-slate-900 p-8 sm:p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 relative z-10 max-w-xl">
              <span className="badge-cyan">
                <Sparkles className="w-3.5 h-3.5 inline mr-1 text-brand-400" /> Patient Consultation Special
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Ready to Experience Radiant Dental Health?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Schedule your appointment with Dr. Maqsood A. Chaudhry and our expert team at Brookfield Dental. New patients receive a FREE oral consultation ($150 value)!
              </p>
            </div>

            {/* CTA Buttons: Book Online + Direct Call */}
            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto py-3.5 px-8 btn-cyan font-extrabold text-xs sm:text-sm shadow-cyan uppercase tracking-wider cursor-pointer"
              >
                Book An Appointment
              </button>

              <a href={`tel:${siteConfig.phonePrimary}`} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto py-3.5 px-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer">
                  <Phone className="w-4 h-4 text-brand-300" />
                  <span>Call Us: {siteConfig.phonePrimary}</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Explore More Blogs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="badge-cyan mb-2">CONTINUE READING</span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
              Explore More Dental Articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-brand-500 hover:text-brand-600"
          >
            View All Articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exploreBlogs.map((b) => (
            <BlogCard key={b.id} post={b} />
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService="Consultation"
      />
    </div>
  );
}
