'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, BookOpen, GraduationCap, Compass, Layers } from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '@/lib/constants';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';

export const Academics = ({ onOpenEnquire }) => {
  const [activeTab, setActiveTab] = useState('senior');

  const currentProgram = ACADEMIC_PROGRAMS.find((p) => p.id === activeTab) || ACADEMIC_PROGRAMS[3];

  return (
    <section id="academics" className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Educational Pathway"
          title="CBSE Academic Curriculum &"
          highlight="Competitive Excellence"
          subtitle="Progressive academic framework from Class IV to XII nurturing analytical depth, scientific enquiry, and university readiness."
        />

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {ACADEMIC_PROGRAMS.map((prog) => {
            const isActive = prog.id === activeTab;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`relative px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'text-slate-950 font-bold shadow-lg shadow-[#c09d59]/30'
                    : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-gradient-to-r from-[#c09d59] via-[#dfc285] to-[#c09d59] rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  {prog.grade}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProgram.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black"
          >
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b90124]/20 border border-[#b90124]/40 text-[#ff4d6d] text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5" />
                {currentProgram.grade} • CBSE Board
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                  {currentProgram.title}
                </h3>
                <p className="text-sm sm:text-base text-[#c09d59] font-medium mt-1">
                  {currentProgram.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentProgram.description}
              </p>

              {/* Stream Breakdown for Senior Secondary */}
              {currentProgram.streams && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Specialized Academic Streams (Classes XI & XII):
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentProgram.streams.map((st, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-[#c09d59]/40 transition-colors"
                      >
                        <div className="text-sm font-bold text-[#c09d59]">{st.name}</div>
                        <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                          {st.subjects}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Program Highlights */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
                  Program Features & Pedagogical Strengths:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentProgram.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-[#c09d59] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onOpenEnquire}
                  className="font-semibold uppercase text-xs tracking-wider"
                >
                  Enquire For {currentProgram.grade} Admissions
                </Button>
              </div>
            </div>

            {/* Right Academic Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                <img
                  src={currentProgram.image}
                  alt={currentProgram.title}
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/10 text-white">
                  <div className="text-xs font-semibold text-[#c09d59] uppercase tracking-wider">
                    Interactive STEM & Science Labs
                  </div>
                  <div className="text-sm font-bold mt-0.5">
                    Equipped with Physics, Chemistry, Biology & Robotics Workstations
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
