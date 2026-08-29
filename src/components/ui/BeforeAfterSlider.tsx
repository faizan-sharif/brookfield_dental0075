'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  labelBefore?: string;
  labelAfter?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  labelBefore = 'Before Treatment',
  labelAfter = 'After Transformation',
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <div
      onMouseMove={handleSliderMove}
      onTouchMove={handleSliderMove}
      className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/20 cursor-ew-resize select-none glass-card"
    >
      {/* After Image (Full Background) */}
      <Image src={afterImage} alt="After treatment" fill className="object-cover" />
      <span className="absolute top-4 right-4 bg-emerald-600/90 text-white font-bold text-xs px-3 py-1 rounded-full backdrop-blur-md z-10">
        {labelAfter}
      </span>

      {/* Before Image (Clipped Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden z-10"
        style={{ width: `${sliderPos}%` }}
      >
        <Image
          src={beforeImage}
          alt="Before treatment"
          fill
          className="object-cover max-w-none"
          style={{ width: '100%', height: '100%' }}
        />
        <span className="absolute top-4 left-4 bg-slate-900/80 text-white font-bold text-xs px-3 py-1 rounded-full backdrop-blur-md">
          {labelBefore}
        </span>
      </div>

      {/* Divider Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-2xl"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-slate-800 font-extrabold flex items-center justify-center text-xs shadow-lg border border-slate-300">
          ↔
        </div>
      </div>
    </div>
  );
}
