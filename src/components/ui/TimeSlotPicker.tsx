'use client';

import React from 'react';
import { Clock, Lock, Check } from 'lucide-react';
import { TIME_SLOTS, isSlotBooked } from '@/lib/bookingStore';

interface TimeSlotPickerProps {
  doctor: string;
  date: string;
  selectedSlot: string;
  onSelectSlot: (slot: string) => void;
}

export function TimeSlotPicker({
  doctor,
  date,
  selectedSlot,
  onSelectSlot,
}: TimeSlotPickerProps) {
  return (
    <div>
      <label className="block text-xs font-bold text-navy-900 mb-2 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-brand-500" /> Select Available Time Slot *
        </span>
        {date && (
          <span className="text-[10px] text-slate-400 font-semibold">
            {date} Availability
          </span>
        )}
      </label>

      {!date ? (
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs text-slate-400 font-semibold">
          Please select a date first to view doctor time slots.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {TIME_SLOTS.map((slot) => {
            const booked = isSlotBooked(doctor, date, slot);
            const isSelected = selectedSlot === slot;

            return (
              <button
                key={slot}
                type="button"
                disabled={booked}
                onClick={() => onSelectSlot(slot)}
                className={`py-2 px-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-between border cursor-pointer ${
                  booked
                    ? 'bg-rose-50 text-rose-400 border-rose-200 cursor-not-allowed line-through opacity-70'
                    : isSelected
                    ? 'bg-brand-500 text-white border-brand-500 shadow-sm'
                    : 'bg-slate-50 text-navy-900 border-slate-200 hover:border-brand-400 hover:bg-brand-50'
                }`}
              >
                <span>{slot}</span>
                {booked ? (
                  <Lock className="w-3 h-3 text-rose-400" />
                ) : isSelected ? (
                  <Check className="w-3.5 h-3.5 text-white" />
                ) : null}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
