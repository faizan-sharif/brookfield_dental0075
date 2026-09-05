'use client';

import React, { useState } from 'react';
import { Calendar, User, Stethoscope, ArrowRight } from 'lucide-react';
import { bookingDoctors } from '@/data/team';
import { servicesData } from '@/data/services';
import { getTodayDateString } from '@/lib/bookingStore';

import { CustomDropdown } from './CustomDropdown';

interface QuickBookingBarProps {
  onBook: (details: { doctor: string; date: string; service: string }) => void;
}

export function QuickBookingBar({ onBook }: QuickBookingBarProps) {
  const todayStr = getTodayDateString();
  const [doctor, setDoctor] = useState('Dr. Ahmad Hawasli');
  const [date, setDate] = useState(todayStr);
  const [service, setService] = useState('Free Oral Consultation');

  const doctorOptions = bookingDoctors.map((doc) => ({
    value: doc.name,
    label: doc.name,
    subtitle: doc.role,
    icon: User,
  }));

  const serviceOptions = [
    {
      value: 'Free Oral Consultation',
      label: 'Free Consultation ($150 Value)',
      subtitle: 'Complimentary new patient exam',
      icon: Stethoscope,
    },
    ...servicesData.map((s) => ({
      value: s.title,
      label: s.title,
      subtitle: 'Specialized dental treatment',
      icon: Stethoscope,
    })),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBook({ doctor, date, service });
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100 relative z-30">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
        {/* Doctor Dropdown */}
        <div className="lg:col-span-3">
          <CustomDropdown
            label="Select Doctor"
            value={doctor}
            onChange={setDoctor}
            options={doctorOptions}
            icon={User}
          />
        </div>

        {/* Date Picker */}
        <div className="lg:col-span-3 bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 rounded-xl p-2.5 flex items-center gap-2.5 transition-colors">
          <div className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-100">
            <Calendar className="w-4 h-4" />
          </div>
          <div className="w-full">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
              Select Date
            </label>
            <input
              type="date"
              required
              min={todayStr}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-xs font-bold text-navy-900 focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Service Dropdown */}
        <div className="lg:col-span-3">
          <CustomDropdown
            label="Select Service"
            value={service}
            onChange={setService}
            options={serviceOptions}
            icon={Stethoscope}
          />
        </div>

        {/* Cyan Book Button */}
        <div className="lg:col-span-3">
          <button
            type="submit"
            className="w-full py-3.5 px-6 btn-cyan flex items-center justify-center text-sm font-bold shadow-cyan cursor-pointer"
          >
            <span>Book Now</span>
          </button>
        </div>
      </form>
    </div>
  );
}
