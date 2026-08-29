'use client';

import React from 'react';
import { blogData } from '@/data/blog';
import { BlogCard } from '../ui/BlogCard';

export function BlogSection() {
  return (
    <section className="py-16 bg-ice-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="badge-cyan mb-2">OUR BLOG</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            Latest Oral Health Articles & Insights
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Expert advice, treatment comparisons, and oral hygiene tips from Dr. Chaudhry and our specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
