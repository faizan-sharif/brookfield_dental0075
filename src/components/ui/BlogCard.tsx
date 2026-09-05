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
    <Tilt3DCard maxTilt={5} className="h-full rounded-3xl">
      <div className="bg-white rounded-3xl overflow-hidden shadow-[0_12px_36px_rgba(10,37,64,0.07)] hover:shadow-[0_22px_50px_rgba(0,201,219,0.22)] flex flex-col justify-between h-full group transition-all duration-300 transform hover:-translate-y-1">
        <div>
          {/* Article Image Preview */}
          <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <span className="absolute top-3.5 left-3.5 bg-brand-500 text-white font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md backdrop-blur-md">
              {post.category}
            </span>
          </div>

          {/* Body Content */}
          <div className="p-6 pb-3">
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold mb-2">
              <span>{post.date}</span>
              <span className="flex items-center gap-1 text-slate-500">
                <Clock className="w-3 h-3 text-brand-500" /> {post.readTime}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-brand-500 transition-colors line-clamp-2 mb-2 leading-snug">
              {post.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Read More Footer */}
        <div className="p-6 pt-2">
          <Link
            href={`/blog/${post.id}`}
            className="inline-flex items-center justify-between text-xs font-bold text-brand-600 hover:text-brand-500 transition-colors cursor-pointer pt-3 border-t border-slate-100/80 w-full group/link"
          >
            <span>Read Full Article</span>
            <div className="w-6 h-6 rounded-full bg-brand-50 text-brand-500 flex items-center justify-center group-hover/link:bg-brand-500 group-hover/link:text-white transition-all">
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </Tilt3DCard>
  );
}
