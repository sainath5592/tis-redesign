'use client';

import React from 'react';
import { CAMPUS_FACILITIES } from '@/lib/constants';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { Maximize2 } from 'lucide-react';

export const Facilities = ({ onOpenEnquire }) => {
  return (
    <section id="facilities" className="relative py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Infrastructure & Environment"
          title="World-Class 22-Acre Campus &"
          highlight="Residential Facilities"
          subtitle="Designed to support comprehensive academic, athletic, and personal growth in a safe, pollution-free mountain setting."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {CAMPUS_FACILITIES.map((facility, idx) => (
            <Reveal
              key={facility.id}
              direction="up"
              delay={idx * 0.1}
              className={facility.span}
            >
              <div
                onClick={onOpenEnquire}
                className="group relative h-72 md:h-80 rounded-3xl overflow-hidden border border-slate-800 hover:border-[#c09d59]/60 transition-all duration-500 shadow-xl cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={facility.image}
                  alt={facility.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] uppercase font-bold tracking-widest text-[#c09d59]">
                    {facility.category}
                  </span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-950/70 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-[#c09d59]" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform group-hover:-translate-y-1 transition-transform">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#c09d59] transition-colors">
                    {facility.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed font-normal">
                    {facility.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
