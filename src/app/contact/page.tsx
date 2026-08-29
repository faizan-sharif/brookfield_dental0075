'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/site';
import { teamData } from '@/data/team';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle, Sparkles, User } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Free Oral Consultation',
    doctor: 'Dr. Maqsood A. Chaudhry',
    date: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-brand-600 uppercase bg-brand-100/80 px-3.5 py-1 rounded-full border border-brand-200 inline-block mb-3">
            Contact & Location
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Schedule Your Visit Today
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Conveniently located in Springfield VA, serving Falls Church, Alexandria, and surrounding Northern Virginia communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-600" /> Clinic Address
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{siteConfig.address}</p>

              <div className="pt-4 border-t border-slate-200 space-y-4">
                <div>
                  <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">
                    Direct Phone Line
                  </span>
                  <a
                    href={`tel:${siteConfig.phonePrimary}`}
                    className="text-xl font-extrabold text-brand-600 hover:underline"
                  >
                    {siteConfig.phonePrimary}
                  </a>
                </div>

                <div>
                  <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">
                    Toll-Free Hotline
                  </span>
                  <p className="text-base font-bold text-slate-800">{siteConfig.phoneTollFree}</p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">
                    Email Inquiry
                  </span>
                  <p className="text-sm font-medium text-slate-700">{siteConfig.email}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-600" /> Operating Hours
                </h4>
                <div className="space-y-2 text-xs text-slate-600">
                  {siteConfig.hours.map((h, i) => (
                    <div key={i} className="flex justify-between py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-500">{h.days}</span>
                      <span className="font-bold text-slate-900">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>

            {/* Map Embed Card */}
            <GlassCard className="p-4 overflow-hidden rounded-2xl h-64 relative bg-slate-200">
              <iframe
                title="Brookfield Dental Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.5123456789!2d-77.175123!3d38.789123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b653123456789%3A0x123456789abcdef!2s6120%20Brandon%20Ave%2C%20Springfield%2C%20VA%2022150!5e0!3m2!1sen!2sus!4v1234567890"
                className="w-full h-full border-0 rounded-xl"
                loading="lazy"
              />
            </GlassCard>
          </div>

          {/* Right Column: Full Appointment Booking Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 sm:p-10">
              {!submitted ? (
                <>
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold glass-badge text-brand-700 mb-2">
                      <Sparkles className="w-3.5 h-3.5" /> Instant Confirmation Request
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      Book Your Appointment Online
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      New patients receive a complimentary oral health consultation ($150 value).
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="glass-input w-full p-3 rounded-xl text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(703) 913-1377"
                          className="glass-input w-full p-3 rounded-xl text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@example.com"
                          className="glass-input w-full p-3 rounded-xl text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Treatment / Service
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="glass-input w-full p-3 rounded-xl text-sm text-slate-800"
                        >
                          <option value="Free Oral Consultation">Free Oral Consultation ($150 Value)</option>
                          <option value="Dental Implants">Dental Implants / All-On-4®</option>
                          <option value="Zoom Whitening">Philips Zoom! Teeth Whitening</option>
                          <option value="Veneers & Lumineers">Porcelain Veneers & Lumineers</option>
                          <option value="Invisalign Aligners">Clear Aligners / ClearCorrect</option>
                          <option value="Emergency Care">Urgent Emergency Dental Care</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="glass-input w-full p-3 rounded-xl text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Doctor Choice
                        </label>
                        <select
                          value={formData.doctor}
                          onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                          className="glass-input w-full p-3 rounded-xl text-sm text-slate-800"
                        >
                          {teamData.map((d) => (
                            <option key={d.name} value={d.name}>
                              {d.name} ({d.role})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Additional Notes or Symptoms
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell us about any specific tooth discomfort, past dental history, or preferred contact time..."
                        className="glass-input w-full p-3 rounded-xl text-sm"
                      />
                    </div>

                    <Button variant="primary" size="lg" className="w-full font-bold shadow-glow-teal">
                      Submit Appointment Request
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto border border-brand-300">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Request Sent Successfully!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you <span className="font-bold text-brand-600">{formData.name}</span>. Our reception team will call you at <span className="font-bold text-slate-900">{formData.phone}</span> shortly to confirm your visit.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Book Another Appointment
                  </Button>
                </div>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
