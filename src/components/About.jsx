'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';

export const About = ({ onOpenEnquire }) => {
  return (
    <section id="about" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#b90124]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Heritage & Vision"
          title="Nurturing Tomorrow's Global Leaders in the"
          highlight="Heart of Dehradun"
          subtitle="Tula's International School was established in 2012 by Rishabh Educational Trust with a vision to combine ancient Indian residential discipline with modern global pedagogy."
        />

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Large Editorial Image with Floating Card Overlay */}
          <div className="lg:col-span-7 relative">
            <Reveal direction="right">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-black group">
                <img
                  src="/images/hero-campus.jpg"
                  alt="Tula's International School Campus Building"
                  className="w-full h-[450px] sm:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase font-semibold text-[#c09d59] tracking-widest">
                    Dehradun Foothills Campus
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    22+ Acres of Pristine, Pollution-Free Residential Environment
                  </h4>
                </div>
              </div>
            </Reveal>

            {/* Floating Asymmetric Badge Card */}
            <Reveal direction="up" delay={0.3} className="hidden sm:block absolute -bottom-8 -right-6 z-20">
              <div className="glass-panel p-6 rounded-2xl max-w-xs border border-[#c09d59]/40 shadow-2xl shadow-black">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#c09d59] text-slate-950 flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">Modern Gurukul</div>
                    <div className="text-xs text-[#c09d59]">Mind • Body • Soul</div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                  Combining traditional reverence for knowledge with cutting-edge STEM laboratories and 16+ sports.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column - Text Content & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="left" delay={0.2}>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                “When you choose a school that chooses your child's potential, education becomes a lifelong joy.”
              </h3>
            </Reveal>

            <Reveal direction="left" delay={0.3}>
              <p className="text-base text-slate-400 leading-relaxed">
                At Tula's International School, we recognize that true education goes far beyond standard textbook learning. Inspired by the <strong>Modern Gurukul system</strong>, we foster character, intellectual independence, athletic strength, and ethical leadership.
              </p>
            </Reveal>

            {/* Key Value Points */}
            <Reveal direction="left" delay={0.4}>
              <div className="space-y-3 pt-2">
                {[
                  "Affiliated with CBSE (Central Board of Secondary Education), New Delhi",
                  "Class IV to Class XII Co-Educational Boarding & Day Boarding",
                  "Managed by Rishabh Educational Trust (Founder: Mr. Sunil Kumar Jain)",
                  "Dedicated Competitive Exam Guidance (JEE, NEET, CUET, SAT)",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c09d59] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CTA Trigger */}
            <Reveal direction="left" delay={0.5}>
              <div className="pt-4">
                <Button
                  variant="gold"
                  size="lg"
                  icon={ArrowRight}
                  onClick={onOpenEnquire}
                  className="font-bold uppercase tracking-wider"
                >
                  Schedule A Campus Visit
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
