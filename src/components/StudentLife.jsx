'use client';

import React from 'react';
import {
  Target,
  Waves,
  Compass,
  Shield,
  CircleDot,
  Square,
  Trophy,
  Crosshair,
  Cpu,
  Feather,
  Music,
  Film,
  Sparkles,
} from 'lucide-react';
import { SPORTS_AND_CLUBS } from '@/lib/constants';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';

export const StudentLife = ({ onOpenEnquire }) => {
  const iconMap = {
    Target,
    Waves,
    Compass,
    Shield,
    CircleDot,
    Square,
    Dribbble: Trophy,
    Crosshair,
    Cpu,
    Feather,
    Music,
    Film,
  };

  return (
    <section id="student-life" className="relative py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Beyond Academics"
          title="16+ Sports & Co-Curricular"
          highlight="Clubs Guild"
          subtitle="At Tula's International School, athletics and creative arts are not just hobbies—they are integral pillars of discipline, team spirit, and self-discovery."
        />

        {/* Feature Hero Card for Sports */}
        <Reveal direction="up" className="mb-12">
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c09d59]/10 border border-[#c09d59]/30 text-[#c09d59] text-xs font-semibold uppercase">
                  <Sparkles className="w-3.5 h-3.5" /> Professional National Coaches
                </div>
                <h3 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                  "Sports is not just a facility at TIS. <span className="text-[#c09d59]">It's the foundation!</span>"
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  With 16+ Olympic-standard sports, every residential student discovers physical endurance, strategy, and sportsmanship under the guidance of certified trainers.
                </p>

                <div className="pt-2">
                  <Button variant="gold" size="md" onClick={onOpenEnquire}>
                    Enquire About Sports Academies
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                  <img
                    src="/images/sports-complex.jpg"
                    alt="TIS Sports Complex Archery Field"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-semibold text-white">
                    Olympic Archery Range & Sports Complex
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Interactive Sports & Clubs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {SPORTS_AND_CLUBS.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Target;
            return (
              <Reveal key={idx} direction="up" delay={idx * 0.05}>
                <div
                  onClick={onOpenEnquire}
                  className="group p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#c09d59]/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-[#c09d59] group-hover:bg-[#b90124] group-hover:border-[#b90124] group-hover:text-white transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950 text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#c09d59] transition-colors">
                      {item.name}
                    </h4>
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
