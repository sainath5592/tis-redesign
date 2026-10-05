'use client';

import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

export const Testimonials = () => {
  return (
    <section className="relative py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Voices of TIS"
          title="What Parents & Alumni Say About"
          highlight="Tula's Experience"
          subtitle="Real stories of holistic development, academic excellence, and warm boarding life at Tula's International School."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {TESTIMONIALS.map((item, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.15}>
              <div className="relative p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-[#c09d59]/40 transition-all duration-300 flex flex-col justify-between h-full shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#c09d59] gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#c09d59]" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-slate-700" />
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#c09d59]"
                  />
                  <div>
                    <h4 className="text-base font-bold text-white leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#c09d59] font-medium">
                      {item.role} • {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
