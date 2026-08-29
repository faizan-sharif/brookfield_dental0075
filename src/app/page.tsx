'use client';

import React, { useState } from 'react';
import { Hero } from '@/components/sections/Hero';
import { QuickStats } from '@/components/sections/QuickStats';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { FeaturedImplants } from '@/components/sections/FeaturedImplants';
import { DoctorProfile } from '@/components/sections/DoctorProfile';
import { TeamSection } from '@/components/sections/TeamSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { PromotionsSection } from '@/components/sections/PromotionsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { WorkingHoursShowcase } from '@/components/sections/WorkingHoursShowcase';
import { CyanCtaBanner } from '@/components/sections/CyanCtaBanner';
import { AppointmentModal } from '@/components/ui/AppointmentModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleOpenBooking = (details?: { service?: string; doctor?: string; date?: string }) => {
    if (details) {
      if (details.service) setSelectedService(details.service);
      if (details.doctor) setSelectedDoctor(details.doctor);
      if (details.date) setSelectedDate(details.date);
    }
    setModalOpen(true);
  };

  return (
    <>
      <Hero onOpenBooking={(details) => handleOpenBooking(details)} />
      <QuickStats />
      <WhyChooseUs />
      <FeaturedImplants onOpenBooking={() => handleOpenBooking({ service: 'Dental Implants' })} />
      <DoctorProfile onOpenBooking={() => handleOpenBooking({ service: 'Consultation', doctor: 'Dr. Maqsood A. Chaudhry' })} />
      <TeamSection />
      <ResultsSection />
      <GallerySection />
      <PromotionsSection onClaimClick={(title) => handleOpenBooking({ service: title })} />
      <TestimonialsSection />
      <BlogSection />
      <WorkingHoursShowcase />
      <CyanCtaBanner onOpenBooking={() => handleOpenBooking()} />

      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={selectedService}
        preselectedDoctor={selectedDoctor}
        preselectedDate={selectedDate}
      />
    </>
  );
}
