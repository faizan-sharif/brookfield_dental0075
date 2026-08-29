'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/data/blog';
import { Tilt3DCard } from './Tilt3DCard';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Tilt3DCard maxTilt={6} className="h-full rounded-2xl">
      <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-slate-100 flex flex-col justify-between h-full group hover:shadow-xl transition-all duration-300">
        <div>
          {/* Article Image Preview */}
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-108 transition-transform duration-500"
            />
            <span className="absolute top-3 left-3 bg-brand-500 text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
              {post.category}
            </span>
          </div>

          {/* Body Content */}
          <div className="p-5">
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold mb-2">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-brand-500" /> {post.readTime}
              </span>
            </div>

            <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 mb-2">
              {post.title}
            </h3>

            <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Read More Footer */}
        <div className="p-5 pt-0">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-600 hover:text-brand-700 transition-colors cursor-pointer"
          >
            <span>Read More</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </Tilt3DCard>
  );
}
