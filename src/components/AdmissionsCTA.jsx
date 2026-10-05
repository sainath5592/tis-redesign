'use client';

import React from 'react';
import { ArrowRight, Phone, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TIS_INFO, ADMISSION_STEPS } from '@/lib/constants';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';

export const AdmissionsCTA = ({ onOpenEnquire }) => {
  return (
    <section id="admissions" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden border-t border-slate-800">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b90124]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c09d59]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Admissions Open 2025-26"
          title="Begin Your Child's Journey at"
          highlight="Tula's International School"
          subtitle="Classes IV to XII Co-Ed Boarding & Day Boarding. Limited seats available for the upcoming academic session."
        />

        {/* 4-Step Admissions Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
          {ADMISSION_STEPS.map((item, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.15}>
              <div className="relative p-6 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-[#c09d59]/50 transition-all duration-300">
                <div className="text-3xl font-extrabold text-[#c09d59]/40 mb-2">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* High Conversion Highlight Banner */}
        <Reveal direction="scale">
          <div className="relative rounded-3xl overflow-hidden border border-[#c09d59]/30 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-12 shadow-2xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#b90124]/20 border border-[#b90124]/40 text-[#ff4d6d] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Priority Admissions Desk
            </div>

            <h3 className="text-3xl sm:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
              Ready to Experience Dehradun's Premier Co-Ed Boarding School?
            </h3>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Schedule a personalized virtual tour or visit our 22-acre campus in Dhoolkot, Dehradun. Counselors are available 7 days a week.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="xl"
                icon={ArrowRight}
                onClick={onOpenEnquire}
                className="w-full sm:w-auto font-bold uppercase tracking-wider text-base shadow-xl shadow-[#b90124]/40"
              >
                Submit Admissions Enquiry
              </Button>

              <a href={`tel:${TIS_INFO.helpline}`} className="w-full sm:w-auto">
                <Button
                  variant="glass"
                  size="xl"
                  icon={Phone}
                  iconPosition="left"
                  className="w-full sm:w-auto text-[#c09d59] border-[#c09d59]/30"
                >
                  Call Helpline: {TIS_INFO.helpline}
                </Button>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
