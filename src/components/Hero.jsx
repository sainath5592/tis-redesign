'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Shield, Compass } from 'lucide-react';
import { TIS_INFO, HERO_STATS } from '@/lib/constants';
import { Button } from './ui/Button';

export const Hero = ({ onOpenEnquire }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950">
      {/* Background Hero Image with Dark Gradient & Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-campus.jpg"
          alt="Tulas International School Campus in Dehradun"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse-glow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/40 to-slate-950" />
      </div>

      {/* Decorative Glow Spheres */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#b90124]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c09d59]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Top Credibility Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#c09d59]/40 text-[#dfc285] text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-lg shadow-black/50"
          >
            <Sparkles className="w-4 h-4 text-[#c09d59] animate-spin-slow" />
            <span>Top Co-Ed Boarding School in Dehradun, India</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            Where Heritage Meets Global Innovation —{' '}
            <span className="bg-gradient-to-r from-[#fce8b3] via-[#c09d59] to-[#dfc285] bg-clip-text text-transparent">
              The Modern Gurukul
            </span>
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto"
          >
            Tula's International School integrates CBSE academic rigor with 16+ Olympic sports disciplines, holistic character building, and 24/7 safe residential life nestled in a 22-acre pristine campus.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              size="xl"
              icon={ArrowRight}
              onClick={onOpenEnquire}
              className="w-full sm:w-auto font-bold uppercase tracking-wider text-base shadow-xl shadow-[#b90124]/40"
            >
              Enquire For Admissions
            </Button>

            <a href="#facilities" className="w-full sm:w-auto">
              <Button
                variant="glass"
                size="xl"
                icon={Compass}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Explore Campus & Facilities
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Floating Stat Elements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {HERO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-[#c09d59]/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-4xl font-extrabold text-[#c09d59] group-hover:text-white transition-colors">
                {stat.value}
                <span className="text-xs sm:text-sm font-normal text-slate-400 block sm:inline ml-1">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-semibold text-slate-400 hover:text-[#c09d59] transition-colors"
            aria-label="Scroll down to About section"
          >
            <span>DISCOVER MORE</span>
            <ChevronDown className="w-5 h-5 animate-bounce text-[#c09d59]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
