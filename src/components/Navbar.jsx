'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowRight, GraduationCap } from 'lucide-react';
import { TIS_INFO, NAV_LINKS } from '@/lib/constants';
import { Button } from './ui/Button';

export const Navbar = ({ onOpenEnquire }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3 shadow-xl shadow-black/40'
            : 'bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* TIS Brand Logo */}
            <a
              href="#"
              className="group flex items-center gap-3 focus:outline-none rounded-xl"
              aria-label="Tulas International School Homepage"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#b90124] to-[#7a0016] p-0.5 shadow-lg shadow-[#b90124]/30 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center border border-[#c09d59]/40">
                  <GraduationCap className="w-6 h-6 text-[#c09d59] group-hover:rotate-6 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-none group-hover:text-[#c09d59] transition-colors">
                  TULA'S
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#c09d59] uppercase leading-tight mt-0.5">
                  International School
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2 text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${TIS_INFO.helpline}`}
                className="hidden xl:flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-[#c09d59] transition-colors px-3 py-2 rounded-full hover:bg-white/5"
              >
                <Phone className="w-3.5 h-3.5 text-[#c09d59]" />
                <span>{TIS_INFO.helpline}</span>
              </a>

              <Button
                variant="primary"
                size="sm"
                onClick={onOpenEnquire}
                className="text-xs uppercase tracking-wider font-bold shadow-md shadow-[#b90124]/30"
              >
                Enquire Now
              </Button>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                variant="primary"
                size="sm"
                onClick={onOpenEnquire}
                className="text-xs px-3.5 py-2 font-bold"
              >
                Enquire
              </Button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-[8999] bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#c09d59] mb-2 px-2">
                Navigation
              </div>

              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-xl text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Footer Helpline & Apply */}
            <div className="pt-6 border-t border-slate-800 space-y-4">
              <a
                href={`tel:${TIS_INFO.helpline}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-[#c09d59]"
              >
                <Phone className="w-4 h-4" /> Admissions Helpline: {TIS_INFO.helpline}
              </a>

              <Button
                variant="gold"
                size="lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquire();
                }}
                className="w-full font-bold uppercase tracking-wider"
              >
                Apply / Enquire Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
