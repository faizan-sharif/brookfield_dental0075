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
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-navy-900 flex flex-col justify-between h-full group hover:shadow-2xl hover:border-brand-500 transition-all duration-300">
        <div>
          {/* Article Image Preview */}
          <div className="relative w-full h-40 sm:h-44 overflow-hidden bg-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-3 left-3 bg-brand-500 text-white font-black text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md">
              {post.category}
            </span>
          </div>

          {/* Body Content */}
          <div className="p-5 pb-3">
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold mb-1.5">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-brand-500" /> {post.readTime}
              </span>
            </div>

            <h3 className="text-base font-bold text-navy-900 group-hover:text-brand-500 transition-colors line-clamp-2 mb-1.5">
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
            href={`/blog/${post.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-500 hover:text-brand-600 transition-colors cursor-pointer pt-2.5 border-t border-slate-100 w-full"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </Tilt3DCard>
  );
}
