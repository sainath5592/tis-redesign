'use client';

import React from 'react';
import { BookOpen, Trophy, ShieldCheck, Utensils } from 'lucide-react';
import { TRUST_METRICS } from '@/lib/constants';
import { Reveal } from './ui/Reveal';

export const TrustSection = () => {
  const iconMap = {
    BookOpen: BookOpen,
    Trophy: Trophy,
    ShieldCheck: ShieldCheck,
    Utensils: Utensils,
  };

  return (
    <section className="relative py-16 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_METRICS.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || BookOpen;
            return (
              <Reveal key={idx} direction="up" delay={idx * 0.15}>
                <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-[#c09d59]/40 transition-all duration-300 group hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[#c09d59]/10 border border-[#c09d59]/30 flex items-center justify-center text-[#c09d59] group-hover:bg-[#b90124] group-hover:border-[#b90124] group-hover:text-white transition-all duration-300 mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#c09d59] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
