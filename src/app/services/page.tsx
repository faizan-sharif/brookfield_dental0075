'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Phone,
  Calendar,
  ChevronRight,
  Star,
  CheckCircle2,
  Activity,
  Heart,
  Sparkles,
  ShieldCheck,
  Smile,
  Zap,
  Sun,
  Award,
} from 'lucide-react';
import {
  servicesData,
  serviceGroups,
  liveProblemCards,
  digitalXrayBenefits,
  digitalXrayImportance,
  ourPromises,
} from '@/data/services';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { AppointmentModal } from '@/components/ui/AppointmentModal';
import { siteConfig } from '@/data/site';

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Heart,
  Sparkles,
  ShieldCheck,
  Smile,
  Zap,
  Sun,
  Award,
};

export default function ServicesPage() {
  const [activeGroup, setActiveGroup] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const filteredServices =
    activeGroup === 'all'
      ? servicesData
      : servicesData.filter((s) => s.category === activeGroup);

  const handleBook = (serviceName?: string) => {
    setSelectedService(serviceName || 'Consultation');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. Hero Header Banner */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-black uppercase tracking-widest text-cyan-500 bg-cyan-50 px-4 py-1.5 rounded-full border border-cyan-200 inline-block mb-3">
            Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Crafting Healthy Smiles, One Patient at a Time
          </h1>
        </div>
      </section>

      {/* 2. TREAT YOURSELF TO Comprehensive Dental Services Spotlight */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop"
                  alt="Comprehensive Dental Services"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right Text & Phone */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-cyan-500 block mb-1">
                  TREAT YOURSELF TO
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 leading-tight tracking-tight">
                  Comprehensive Dental Services
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                We offer comprehensive services from all fields of dentistry. In addition to high-end dental equipment, high-quality materials, all services are provided in a comfortable environment. New patients are welcomed with a complimentary oral health consultation.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${siteConfig.phonePrimary}`}
                  className="py-3 px-6 bg-cyan-400 hover:bg-cyan-500 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>{siteConfig.phonePrimary}</span>
                </a>

                <button
                  onClick={() => handleBook('Free Consultation')}
                  className="py-3 px-6 bg-navy-900 hover:bg-navy-950 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 8 Problem & Solution Solutions Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight">
              Brookfield Dental – Where healthy smiles meet advanced care.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
              From dental implants to family dentistry, we create confident smiles that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {liveProblemCards.map((item, idx) => {
              const IconComp = iconMap[item.iconName] || Sparkles;
              return (
                <div
                  key={idx}
                  onClick={() => handleBook(item.serviceKey)}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-500 flex items-center justify-center mb-5 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                      <IconComp className="w-6 h-6 stroke-[2]" />
                    </div>

                    <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-cyan-500 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-cyan-600 group-hover:text-cyan-500">
                    <span>Learn & Book</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Full Spectrum Treatment Filter Catalog */}
      <section className="py-20 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-cyan-500 block mb-2">
              SPECIALIZED PROCEDURES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Explore Our Comprehensive Procedures
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {serviceGroups.map((grp) => (
              <button
                key={grp.id}
                onClick={() => setActiveGroup(grp.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeGroup === grp.id
                    ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-md shadow-brand-500/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {grp.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} onBookClick={handleBook} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. DIGITAL X-RAY Overview Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <span className="text-xs font-black uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-full inline-block">
            ADVANCED DIAGNOSTICS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            DIGITAL X-RAY
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto">
            At Brookfield Dental Associates, our cutting-edge digital radiography system ensures top-tier image clarity while minimizing radiation exposure for our patients. This innovative digital X-ray technology not only reduces radiation by half compared to conventional X-rays but also streamlines the diagnostic process. By placing a precise sensor in your mouth, we quickly capture detailed images that are instantly available on our computer. This enables us to review and discuss your oral health findings with you in real time, directly from our screen, enhancing both understanding and comfort.
          </p>
        </div>
      </section>

      {/* 6. Benefits of Digital X-Rays Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 group">
                <Image
                  src="/images/dental_xray_exam.jpg"
                  alt="Benefits of Digital X-Rays"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Benefits List */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-cyan-500 block mb-1">
                  SERVICES
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                  Benefits of Digital X-Rays
                </h2>
              </div>

              <div className="space-y-3.5">
                {digitalXrayBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  onClick={() => handleBook('Digital X-Ray Consultation')}
                  className="py-3 px-7 bg-cyan-400 hover:bg-cyan-500 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Make an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why are Digital X-Rays Important Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Importance List */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-cyan-500 block mb-1">
                  SERVICES
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                  Why are Digital X-Rays Important
                </h2>
              </div>

              <div className="space-y-3.5">
                {digitalXrayImportance.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  onClick={() => handleBook('Digital Radiography Exam')}
                  className="py-3 px-7 bg-cyan-400 hover:bg-cyan-500 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Make an Appointment
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[500px] h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 group">
                <Image
                  src="/images/digital_xray_tech.jpg"
                  alt="Why Digital X-Rays are Important"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Our Promise Section */}
      <section className="py-20 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[500px] h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 group">
                <Image
                  src="/images/dental_care_promise.jpg"
                  alt="Our Promise to Patients"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Promise List */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-cyan-500 block mb-1">
                  SERVICES
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                  Our Promise
                </h2>
              </div>

              <div className="space-y-4">
                {ourPromises.map((promise, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {promise}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  onClick={() => handleBook('Appointment with Our Team')}
                  className="py-3 px-7 bg-cyan-400 hover:bg-cyan-500 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Make an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Contact Info / Need Consultation? Banner */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <span className="text-xs font-black uppercase tracking-widest text-white/90 bg-white/20 px-3.5 py-1 rounded-full inline-block">
            Contact Info
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Need Consultation?
          </h2>
          <p className="text-sm sm:text-base font-semibold text-white/95">
            Contact us now for free consultation
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phonePrimary}`}
              className="w-full sm:w-auto py-3.5 px-8 bg-white text-navy-900 hover:bg-slate-100 rounded-full font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-cyan-500 fill-current" />
              <span>{siteConfig.phonePrimary}</span>
            </a>

            <button
              onClick={() => handleBook('Free Consultation')}
              className="w-full sm:w-auto py-3.5 px-8 bg-navy-900 hover:bg-navy-950 text-white rounded-full font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Make an Appointment</span>
            </button>
          </div>
        </div>
      </section>

      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
}
