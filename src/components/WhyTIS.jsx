'use client';

import React from 'react';
import { Sparkles, Activity, Award, Home, ArrowUpRight } from 'lucide-react';
import { WHY_TIS_PILLARS } from '@/lib/constants';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';

export const WhyTIS = ({ onOpenEnquire }) => {
  const iconMap = {
    Sparkles: Sparkles,
    Activity: Activity,
    Award: Award,
    Home: Home,
  };

  return (
    <section id="why-tis" className="relative py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Distinction & Values"
          title="Why Leading Parents Choose"
          highlight="Tula's International School"
          subtitle="Combining ancient wisdom with futuristic education to nurture balanced, compassionate, and competitive leaders."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {WHY_TIS_PILLARS.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles;
            return (
              <Reveal key={pillar.id} direction="up" delay={idx * 0.15}>
                <div
                  onClick={onOpenEnquire}
                  className="group relative p-8 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-[#c09d59]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c09d59]/10 cursor-pointer overflow-hidden"
                >
                  {/* Subtle top border glow on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c09d59] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#c09d59]/10 border border-[#c09d59]/30 flex items-center justify-center text-[#c09d59] group-hover:bg-[#b90124] group-hover:border-[#b90124] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-[#c09d59] group-hover:border-[#c09d59]/40 transition-colors">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="mt-6 space-y-2">
                    <div className="text-xs uppercase font-bold tracking-wider text-slate-500">
                      {pillar.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#c09d59] transition-colors flex items-center gap-2">
                      {pillar.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#c09d59]" />
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed pt-1">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between text-xs font-medium text-slate-400">
                    <span className="text-[#c09d59] font-semibold">{pillar.stats}</span>
                    <span className="text-slate-500 group-hover:text-white transition-colors">Click to enquire →</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
