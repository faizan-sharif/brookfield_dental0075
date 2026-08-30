'use client';

import React, { useState } from 'react';
import { Calendar, User, Stethoscope, ArrowRight } from 'lucide-react';
import { teamData } from '@/data/team';
import { servicesData } from '@/data/services';
import { getTodayDateString } from '@/lib/bookingStore';

interface QuickBookingBarProps {
  onBook: (details: { doctor: string; date: string; service: string }) => void;
}

export function QuickBookingBar({ onBook }: QuickBookingBarProps) {
  const todayStr = getTodayDateString();
  const [doctor, setDoctor] = useState('Dr. Maqsood A. Chaudhry');
  const [date, setDate] = useState(todayStr);
  const [service, setService] = useState('Free Oral Consultation');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBook({ doctor, date, service });
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100 relative z-30">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
        {/* Doctor Dropdown */}
        <div className="lg:col-span-3 bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center gap-2">
          <User className="w-4 h-4 text-brand-600 shrink-0" />
          <div className="w-full">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Select Doctor
            </label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="w-full bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
            >
              {teamData.map((doc) => (
                <option key={doc.name} value={doc.name}>
                  {doc.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date Picker */}
        <div className="lg:col-span-3 bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-brand-600 shrink-0" />
          <div className="w-full">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Select Date
            </label>
            <input
              type="date"
              required
              min={todayStr}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Service Dropdown */}
        <div className="lg:col-span-3 bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center gap-2">
          <Stethoscope className="w-4 h-4 text-brand-600 shrink-0" />
          <div className="w-full">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Select Service
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="Free Oral Consultation">Free Consultation ($150 Value)</option>
              {servicesData.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Cyan Book Button */}
        <div className="lg:col-span-3">
          <button
            type="submit"
            className="w-full py-3.5 px-6 btn-cyan flex items-center justify-center gap-2 text-sm font-bold shadow-cyan cursor-pointer"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
