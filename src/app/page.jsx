'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustSection } from '@/components/TrustSection';
import { About } from '@/components/About';
import { WhyTIS } from '@/components/WhyTIS';
import { Academics } from '@/components/Academics';
import { Facilities } from '@/components/Facilities';
import { StudentLife } from '@/components/StudentLife';
import { AdmissionsCTA } from '@/components/AdmissionsCTA';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { EnquireModal } from '@/components/EnquireModal';

export default function Home() {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);

  const handleOpenEnquire = () => {
    setIsEnquireOpen(true);
  };

  const handleCloseEnquire = () => {
    setIsEnquireOpen(false);
  };

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <Navbar onOpenEnquire={handleOpenEnquire} />

      {/* Hero Section */}
      <Hero onOpenEnquire={handleOpenEnquire} />

      {/* Trust & Introduction Metrics */}
      <TrustSection />

      {/* About TIS - Asymmetric Editorial */}
      <About onOpenEnquire={handleOpenEnquire} />

      {/* Why Choose TIS / Key Values */}
      <WhyTIS onOpenEnquire={handleOpenEnquire} />

      {/* Academic Experience & Streams */}
      <Academics onOpenEnquire={handleOpenEnquire} />

      {/* Campus Facilities Bento Gallery */}
      <Facilities onOpenEnquire={handleOpenEnquire} />

      {/* Student Life & 16+ Sports */}
      <StudentLife onOpenEnquire={handleOpenEnquire} />

      {/* High-Converting Admissions CTA */}
      <AdmissionsCTA onOpenEnquire={handleOpenEnquire} />

      {/* Testimonials / Community Voices */}
      <Testimonials />

      {/* Contact Information & Interactive Enquiry */}
      <Contact />

      {/* Footer */}
      <Footer onOpenEnquire={handleOpenEnquire} />

      {/* Admissions Enquiry Popup Modal */}
      <EnquireModal isOpen={isEnquireOpen} onClose={handleCloseEnquire} />
    </div>
  );
}
