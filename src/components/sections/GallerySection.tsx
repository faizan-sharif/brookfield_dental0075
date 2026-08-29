'use client';

import React from 'react';
import Image from 'next/image';
import { galleryData } from '@/data/gallery';

export function GallerySection() {
  return (
    <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-widest text-brand-400 uppercase bg-brand-500/20 px-3.5 py-1 rounded-full border border-brand-400/30 inline-block mb-3">
            OUR CLINIC
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Surgery & Facility
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Tour our state-of-the-art operatory rooms, 3D imaging suites, and patient lounge in Springfield, VA.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[10px] font-extrabold text-brand-300 uppercase tracking-widest block">
                  {item.category}
                </span>
                <h4 className="text-xs font-bold text-white line-clamp-1">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
