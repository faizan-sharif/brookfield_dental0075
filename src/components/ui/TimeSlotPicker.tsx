'use client';

import React from 'react';
import { Clock, Lock, Check, AlertTriangle } from 'lucide-react';
import { TIME_SLOTS, isSlotBooked, isClosedDay, isPastDate, isSlotClosedForDay } from '@/lib/bookingStore';

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
      ) : isClosedDay(date) ? (
        <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-center text-xs text-amber-800 font-bold flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>The clinic is CLOSED on Thursdays and Sundays. Please select an open working day.</span>
        </div>
      ) : isPastDate(date) ? (
        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-center text-xs text-rose-700 font-bold">
          Selected date is in the past. Please select today or a future date.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {TIME_SLOTS.map((slot) => {
            const booked = isSlotBooked(doctor, date, slot);
            const closed = isSlotClosedForDay(date, slot);
            const isDisabled = booked || closed;
            const isSelected = selectedSlot === slot && !isDisabled;

            return (
              <button
                key={slot}
                type="button"
                disabled={isDisabled}
                onClick={() => onSelectSlot(slot)}
                className={`py-2 px-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-between border cursor-pointer ${
                  closed
                    ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed line-through opacity-60'
                    : booked
                    ? 'bg-rose-50 text-rose-500 border-rose-200 cursor-not-allowed line-through opacity-80'
                    : isSelected
                    ? 'bg-brand-500 text-white border-brand-500 shadow-sm'
                    : 'bg-slate-50 text-navy-900 border-slate-200 hover:border-brand-400 hover:bg-brand-50'
                }`}
              >
                <span>{slot}</span>
                {closed ? (
                  <span className="text-[9px] text-slate-400 no-underline uppercase">Off</span>
                ) : booked ? (
                  <Lock className="w-3 h-3 text-rose-500" />
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
