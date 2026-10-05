'use client';

import React from 'react';
import { GraduationCap, Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';
import { TIS_INFO, NAV_LINKS } from '@/lib/constants';

export const Footer = ({ onOpenEnquire }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#b90124] flex items-center justify-center text-white border border-[#c09d59]/40">
                <GraduationCap className="w-5 h-5 text-[#c09d59]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight">
                  TULA'S
                </span>
                <span className="text-xs font-semibold text-[#c09d59] uppercase tracking-widest">
                  International School
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Tula's International School is a premier CBSE-affiliated co-ed boarding school in Dehradun, combining the Modern Gurukul philosophy with 16+ Olympic sports disciplines and world-class residential facilities.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenEnquire}
                className="px-4 py-2 rounded-full bg-[#b90124] hover:bg-[#9e011f] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#b90124]/30"
              >
                Apply For Admissions 2025-26
              </button>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#c09d59] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Academics & Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Academic Streams
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>CBSE Primary (Classes IV - V)</li>
              <li>CBSE Middle (Classes VI - VIII)</li>
              <li>CBSE Secondary (Classes IX - X)</li>
              <li>Science Stream (PCM / PCB)</li>
              <li>Commerce Stream</li>
              <li>Humanities Stream</li>
              <li>JEE / NEET / CUET Guidance</li>
            </ul>
          </div>

          {/* Col 5: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Campus Helpline
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c09d59] shrink-0" />
                <a href={`tel:${TIS_INFO.helpline}`} className="hover:text-white font-bold text-[#c09d59]">
                  {TIS_INFO.helpline}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c09d59] shrink-0" />
                <a href={`mailto:${TIS_INFO.email}`} className="hover:text-white">
                  {TIS_INFO.email}
                </a>
              </p>
              <p className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#c09d59] shrink-0 mt-0.5" />
                <span>Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun - 248011</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Tula's International School. Managed by {TIS_INFO.trust}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-300">Mandatory Disclosure</a>
            <span>•</span>
            <a href="#terms" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#c09d59] hover:underline font-semibold"
            >
              Back to top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
