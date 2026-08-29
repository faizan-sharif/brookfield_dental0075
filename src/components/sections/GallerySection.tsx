'use client';

import React from 'react';
import Image from 'next/image';
import { galleryData } from '@/data/gallery';

export function GallerySection() {
  return (
    <section className="py-12 bg-navy-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[10px] font-extrabold tracking-widest text-brand-400 uppercase bg-brand-500/20 px-3 py-0.5 rounded-full border border-brand-400/30 inline-block mb-2">
            OUR CLINIC
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our Surgery & Facility
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Tour our state-of-the-art operatory rooms, 3D imaging suites, and patient lounge in Springfield, VA.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="relative w-full h-32 sm:h-36 rounded-xl overflow-hidden shadow-md border border-white/10 group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5">
                <span className="text-[9px] font-black text-brand-300 uppercase tracking-wider block leading-none mb-0.5">
                  {item.category}
                </span>
                <h4 className="text-[11px] font-bold text-white line-clamp-1 leading-tight">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
