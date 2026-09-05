'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle, Sparkles, AlertCircle, Stethoscope } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { bookingDoctors } from '@/data/team';
import { CustomDropdown } from './CustomDropdown';
import {
  saveBooking,
  isSlotBooked,
  BookingRecord,
  getTodayDateString,
  isClosedDay,
  isPastDate,
  isSlotClosedForDay,
  getFirstAvailableSlot,
} from '@/lib/bookingStore';
import { TimeSlotPicker } from './TimeSlotPicker';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedDoctor?: string;
  preselectedDate?: string;
}

export function AppointmentModal({
  isOpen,
  onClose,
  preselectedService = '',
  preselectedDoctor = '',
  preselectedDate = '',
}: AppointmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [createdRecord, setCreatedRecord] = useState<BookingRecord | null>(null);

  const todayStr = getTodayDateString();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || 'Free Oral Consultation',
    doctor: preselectedDoctor || 'Dr. Ahmad Hawasli',
    preferredDate: preselectedDate || todayStr,
    timeSlot: '10:00 AM',
    notes: '',
  });

  // Auto-find first available slot when doctor, date, or modal visibility changes
  useEffect(() => {
    const targetDate = preselectedDate || formData.preferredDate || todayStr;
    const targetDoctor = preselectedDoctor || formData.doctor;

    const availableSlot = getFirstAvailableSlot(targetDoctor, targetDate) || '10:00 AM';

    setFormData((prev) => ({
      ...prev,
      service: preselectedService || prev.service,
      doctor: targetDoctor,
      preferredDate: targetDate,
      timeSlot: availableSlot,
    }));
    setErrorMsg('');
  }, [preselectedService, preselectedDoctor, preselectedDate, isOpen]);

  // When date changes manually in modal
  const handleDateChange = (newDate: string) => {
    setErrorMsg('');

    if (isClosedDay(newDate)) {
      setErrorMsg('The clinic is CLOSED on Thursdays and Sundays. Please select an open working day.');
    } else if (isPastDate(newDate)) {
      setErrorMsg('Selected date is in the past. Please select today or a future date.');
    }

    const nextAvailableSlot = getFirstAvailableSlot(formData.doctor, newDate) || '10:00 AM';
    setFormData((prev) => ({
      ...prev,
      preferredDate: newDate,
      timeSlot: nextAvailableSlot,
    }));
  };

  // When doctor changes manually in modal
  const handleDoctorChange = (newDoctor: string) => {
    setErrorMsg('');
    const nextAvailableSlot = getFirstAvailableSlot(newDoctor, formData.preferredDate) || '10:00 AM';
    setFormData((prev) => ({
      ...prev,
      doctor: newDoctor,
      timeSlot: nextAvailableSlot,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.preferredDate) {
      setErrorMsg('Please select an appointment date.');
      return;
    }

    if (isClosedDay(formData.preferredDate)) {
      setErrorMsg('The clinic is CLOSED on Thursdays and Sundays. Please select an open working day.');
      return;
    }

    if (isPastDate(formData.preferredDate)) {
      setErrorMsg('Selected date is in the past. Please select today or a future date.');
      return;
    }

    if (isSlotClosedForDay(formData.preferredDate, formData.timeSlot)) {
      setErrorMsg(`The clinic is closed at ${formData.timeSlot} on ${formData.preferredDate}. Please select an open time slot.`);
      return;
    }

    // Double-booking check
    if (isSlotBooked(formData.doctor, formData.preferredDate, formData.timeSlot)) {
      setErrorMsg(
        `Slot ${formData.timeSlot} on ${formData.preferredDate} for ${formData.doctor} is already booked! Please select another time slot.`
      );
      return;
    }

    // Save to persistent storage
    const record = saveBooking({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      doctor: formData.doctor,
      date: formData.preferredDate,
      timeSlot: formData.timeSlot,
      service: formData.service,
      notes: formData.notes,
    });

    setCreatedRecord(record);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMsg('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white text-navy-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <div className="mb-6">
                  <span className="badge-cyan mb-2">
                    <Sparkles className="w-3.5 h-3.5 inline mr-1 text-brand-500" /> Real-Time Slot Reservation
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-navy-900">
                    Book Your Appointment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Free Consultation for New Patients • Call{' '}
                    <a href={`tel:${siteConfig.phonePrimary}`} className="text-brand-500 font-bold underline">
                      {siteConfig.phonePrimary}
                    </a>
                  </p>
                </div>

                {errorMsg && (
                  <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-navy-900 placeholder-slate-400 focus:outline-none focus:border-brand-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(703) 913-1377"
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-navy-900 placeholder-slate-400 focus:outline-none focus:border-brand-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@example.com"
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-navy-900 placeholder-slate-400 focus:outline-none focus:border-brand-500"
                        />
                      </div>
                    </div>

                    <div>
                      <CustomDropdown
                        label="Selected Service"
                        value={formData.service}
                        onChange={(val) => setFormData({ ...formData, service: val })}
                        options={[
                          { value: 'Free Oral Consultation', label: 'Free Consultation ($150 Value)', subtitle: 'Complimentary new patient exam', icon: Stethoscope },
                          { value: 'Dental Implants', label: 'Dental Implants / All-On-4®', subtitle: 'Permanent titanium tooth replacement', icon: Stethoscope },
                          { value: 'Zoom Whitening', label: 'Philips Zoom! Teeth Whitening', subtitle: 'In-office professional smile brightening', icon: Stethoscope },
                          { value: 'Lumineers & Veneers', label: 'Porcelain Veneers & Lumineers', subtitle: 'Custom aesthetic cosmetic laminates', icon: Stethoscope },
                          { value: 'Invisalign Aligners', label: 'Clear Aligners / ClearCorrect', subtitle: 'Discreet orthodontic teeth alignment', icon: Stethoscope },
                          { value: 'Emergency Care', label: 'Urgent Emergency Dental Care', subtitle: 'Same-day severe tooth pain relief', icon: Stethoscope },
                        ]}
                        icon={Stethoscope}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <CustomDropdown
                        label="Selected Doctor"
                        value={formData.doctor}
                        onChange={handleDoctorChange}
                        options={bookingDoctors.map((doc) => ({
                          value: doc.name,
                          label: doc.name,
                          subtitle: doc.role,
                          icon: User,
                        }))}
                        icon={User}
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 leading-tight">
                        Selected Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="date"
                          required
                          min={todayStr}
                          value={formData.preferredDate}
                          onChange={(e) => handleDateChange(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-navy-900 focus:outline-none focus:border-brand-500 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Interactive Time Slot Picker with Conflict Checking */}
                  <TimeSlotPicker
                    doctor={formData.doctor}
                    date={formData.preferredDate}
                    selectedSlot={formData.timeSlot}
                    onSelectSlot={(slot) => setFormData({ ...formData, timeSlot: slot })}
                  />

                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1">
                      Notes or Symptoms (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Any dental pain, preferred time, or questions..."
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-navy-900 placeholder-slate-400 focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="w-full py-3.5 btn-cyan text-sm font-bold uppercase tracking-wider">
                      Confirm Appointment Request
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-brand-50 text-brand-500 rounded-full flex items-center justify-center mx-auto border border-brand-200 shadow-cyan"
                >
                  <CheckCircle className="w-10 h-10" />
                </motion.div>

                <h3 className="text-2xl font-extrabold text-navy-900">
                  Appointment Confirmed!
                </h3>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-left text-xs space-y-1.5 max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-semibold">Booking ID:</span>
                    <span className="font-extrabold text-brand-500">{createdRecord?.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-semibold">Patient:</span>
                    <span className="font-bold text-navy-900">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-semibold">Service:</span>
                    <span className="font-bold text-navy-900">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-semibold">Doctor:</span>
                    <span className="font-bold text-navy-900">{formData.doctor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-semibold">Date & Time:</span>
                    <span className="font-bold text-brand-500">
                      {formData.preferredDate} at {formData.timeSlot}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-semibold">Status:</span>
                    <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Pending Reception Approval
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  This appointment has been saved to the clinic database and will appear in the reception Admin Panel (`/admin`).
                </p>

                <button onClick={handleReset} className="py-3 px-8 btn-navy text-xs font-bold">
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
