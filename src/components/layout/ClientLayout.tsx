'use client';

import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AppointmentModal } from '../ui/AppointmentModal';
import { ChatWidget } from '../ui/ChatWidget';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleOpenBooking = (details?: { service?: string; doctor?: string; date?: string }) => {
    if (details) {
      if (details.service) setSelectedService(details.service);
      if (details.doctor) setSelectedDoctor(details.doctor);
      if (details.date) setSelectedDate(details.date);
    }
    setBookingOpen(true);
  };

  return (
    <div className="bg-ice-100 text-navy-900 antialiased min-h-screen flex flex-col justify-between relative selection:bg-brand-500 selection:text-white">
      <Navbar onOpenBooking={() => handleOpenBooking()} />
      <main className="flex-1">{children}</main>
      <Footer />

      <AppointmentModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedService={selectedService}
        preselectedDoctor={selectedDoctor}
        preselectedDate={selectedDate}
      />
      <ChatWidget />
    </div>
  );
}
