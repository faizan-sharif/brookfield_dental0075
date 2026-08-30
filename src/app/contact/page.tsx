'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  Sparkles,
  User,
  ShieldCheck,
  AlertCircle,
  Stethoscope,
} from 'lucide-react';
import { siteConfig } from '@/data/site';
import { teamData } from '@/data/team';
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
import { TimeSlotPicker } from '@/components/ui/TimeSlotPicker';

export default function ContactPage() {
  const todayStr = getTodayDateString();
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [createdRecord, setCreatedRecord] = useState<BookingRecord | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Free Oral Consultation',
    doctor: 'Dr. Maqsood A. Chaudhry',
    preferredDate: todayStr,
    timeSlot: '10:00 AM',
    notes: '',
  });

  const handleDateChange = (newDate: string) => {
    setErrorMsg('');
    if (isClosedDay(newDate)) {
      setErrorMsg('The clinic is CLOSED on Thursdays and Sundays. Please select an open working day.');
    } else if (isPastDate(newDate)) {
      setErrorMsg('Selected date is in the past. Please select today or a future date.');
    }
    const availableSlot = getFirstAvailableSlot(formData.doctor, newDate) || '10:00 AM';
    setFormData((prev) => ({
      ...prev,
      preferredDate: newDate,
      timeSlot: availableSlot,
    }));
  };

  const handleDoctorChange = (newDoctor: string) => {
    setErrorMsg('');
    const availableSlot = getFirstAvailableSlot(newDoctor, formData.preferredDate) || '10:00 AM';
    setFormData((prev) => ({
      ...prev,
      doctor: newDoctor,
      timeSlot: availableSlot,
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
      setErrorMsg(`The clinic is closed at ${formData.timeSlot} on ${formData.preferredDate}. Please pick an open time slot.`);
      return;
    }

    if (isSlotBooked(formData.doctor, formData.preferredDate, formData.timeSlot)) {
      setErrorMsg(
        `Slot ${formData.timeSlot} on ${formData.preferredDate} for ${formData.doctor} is already booked! Please select another time slot.`
      );
      return;
    }

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

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      {/* Dark Navy Header Section */}
      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <span className="badge-cyan">
              <MapPin className="w-3.5 h-3.5 inline mr-1 text-brand-400" /> Springfield & Falls Church VA Clinic
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Contact & Visit <span className="text-brand-400">Brookfield Dental</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              We warmly welcome patients of all ages. Book your appointment online, call our reception line, or visit our office in Springfield, VA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Top 3 Quick Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 relative z-20 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Address */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xl flex items-start gap-4 group hover:border-brand-400 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-100 group-hover:bg-brand-500 group-hover:text-white transition-all">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
                Clinic Location
              </span>
              <h4 className="text-base font-bold text-navy-900 leading-snug">
                6120 Brandon Ave
              </h4>
              <p className="text-xs text-slate-600 font-medium">Springfield, VA 22150</p>
              <a
                href="https://maps.google.com/?q=6120+Brandon+Ave,+Springfield,+VA+22150"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-500 hover:text-brand-600 mt-2"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xl flex items-start gap-4 group hover:border-brand-400 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-100 group-hover:bg-brand-500 group-hover:text-white transition-all">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
                Reception Hotline
              </span>
              <a
                href={`tel:${siteConfig.phonePrimary}`}
                className="text-base font-black text-navy-900 hover:text-brand-500 transition-colors block"
              >
                {siteConfig.phonePrimary}
              </a>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Toll Free: {siteConfig.phoneTollFree}</p>
              <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200 mt-2">
                Emergency Walk-Ins Welcome
              </span>
            </div>
          </div>

          {/* Card 3: Hours */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-xl flex items-start gap-4 group hover:border-brand-400 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-100 group-hover:bg-brand-500 group-hover:text-white transition-all">
              <Clock className="w-6 h-6" />
            </div>
            <div className="w-full">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
                Clinic Hours
              </span>
              <div className="space-y-1 text-xs">
                {siteConfig.hours.map((h, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-slate-500 font-medium">{h.days}:</span>
                    <span className={`font-bold ${h.time === 'CLOSED' ? 'text-rose-500' : 'text-navy-900'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Interactive Booking Form + Map & Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-slate-200">
              {!submitted ? (
                <>
                  <div className="mb-6">
                    <span className="badge-cyan mb-2">
                      <Sparkles className="w-3.5 h-3.5 inline mr-1 text-brand-500" /> Real-Time Slot Reservation
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-navy-900">
                      Book Your Appointment
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      New patients receive a complimentary consultation ($150 value).
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="mb-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
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
                            placeholder="Your Full Name"
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
                        <label className="block text-xs font-bold text-navy-900 mb-1">
                          Select Service
                        </label>
                        <div className="relative">
                          <Stethoscope className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-navy-900 focus:outline-none focus:border-brand-500 cursor-pointer"
                          >
                            <option value="Free Oral Consultation">Free Consultation ($150 Value)</option>
                            <option value="Dental Implants">Dental Implants / All-On-4®</option>
                            <option value="Zoom Whitening">Philips Zoom! Teeth Whitening</option>
                            <option value="Lumineers & Veneers">Porcelain Veneers & Lumineers</option>
                            <option value="Invisalign Aligners">Clear Aligners / ClearCorrect</option>
                            <option value="Emergency Care">Urgent Emergency Dental Care</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-navy-900 mb-1">
                          Select Doctor
                        </label>
                        <select
                          value={formData.doctor}
                          onChange={(e) => handleDoctorChange(e.target.value)}
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-navy-900 focus:outline-none focus:border-brand-500 cursor-pointer"
                        >
                          {teamData.map((doc) => (
                            <option key={doc.name} value={doc.name}>
                              {doc.name} ({doc.role})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-900 mb-1">
                          Select Date
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

                    {/* Interactive Time Slot Picker */}
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
                        placeholder="Any specific dental pain, questions, or notes for the doctor..."
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
                  <div className="w-16 h-16 bg-brand-50 text-brand-500 rounded-full flex items-center justify-center mx-auto border border-brand-200 shadow-cyan">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-navy-900">
                    Appointment Confirmed!
                  </h3>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-left text-xs space-y-2 max-w-md mx-auto">
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
                  </div>

                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Saved to database. Reception will review in the Admin Panel (`/admin`).
                  </p>

                  <button onClick={() => setSubmitted(false)} className="py-3 px-8 btn-navy text-xs font-bold">
                    Book Another Appointment
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Emergency Callout */}
          <div className="lg:col-span-5 space-y-6">
            {/* Map Embed Card */}
            <div className="bg-white p-3 rounded-3xl shadow-xl border border-slate-200 overflow-hidden h-[340px] relative">
              <iframe
                title="Brookfield Dental Associates Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.5123456789!2d-77.175123!3d38.789123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b653123456789%3A0x123456789abcdef!2s6120%20Brandon%20Ave%2C%20Springfield%2C%20VA%2022150!5e0!3m2!1sen!2sus!4v1234567890"
                className="w-full h-full border-0 rounded-2xl"
                loading="lazy"
              />
            </div>

            {/* Emergency Hotline Box */}
            <div className="bg-gradient-to-r from-navy-950 to-navy-900 p-6 rounded-3xl text-white space-y-3 shadow-xl border border-white/10 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-300 flex items-center justify-center border border-brand-400/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold">Dental Emergency?</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Severe tooth pain, broken tooth, or swelling? We prioritize urgent same-day emergency visits.
              </p>
              <a href={`tel:${siteConfig.phonePrimary}`} className="block pt-1">
                <button className="w-full py-3 px-4 btn-cyan text-xs font-bold shadow-md">
                  Call Hotline: {siteConfig.phonePrimary}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
