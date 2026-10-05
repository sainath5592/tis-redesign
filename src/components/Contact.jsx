'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Printer, CheckCircle, Send, Globe } from 'lucide-react';
import { TIS_INFO } from '@/lib/constants';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    mobile: '',
    grade: '',
    state: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Connect with Tula's International School"
          highlight="Dehradun Campus"
          subtitle="Our admissions desk and counselor office are open 7 days a week to assist prospective parents and students."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          {/* Left Side - Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="right">
              <div className="p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
                <h3 className="text-2xl font-bold text-white">Campus Contact Details</h3>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c09d59]/10 border border-[#c09d59]/30 flex items-center justify-center text-[#c09d59] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Campus Address</h4>
                      <p className="mt-0.5 leading-relaxed text-slate-400">
                        {TIS_INFO.address}
                      </p>
                      <a
                        href={TIS_INFO.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#c09d59] hover:underline mt-1 font-semibold"
                      >
                        <Globe className="w-3.5 h-3.5" /> View on Google Maps →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c09d59]/10 border border-[#c09d59]/30 flex items-center justify-center text-[#c09d59] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Admissions Helpline</h4>
                      <p className="mt-0.5 text-slate-400">
                        <a href={`tel:${TIS_INFO.helpline}`} className="hover:text-white font-semibold text-[#c09d59]">
                          {TIS_INFO.helpline}
                        </a>
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Landline: <a href="tel:0135-2699444">0135-2699444</a>, <a href="tel:0135-2699666">0135-2699666</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c09d59]/10 border border-[#c09d59]/30 flex items-center justify-center text-[#c09d59] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email Address</h4>
                      <p className="mt-0.5 text-slate-400">
                        <a href={`mailto:${TIS_INFO.email}`} className="hover:text-white">
                          {TIS_INFO.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-900">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Affiliation & Governance
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Affiliated to CBSE, New Delhi • Managed by {TIS_INFO.trust}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side - Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <Reveal direction="left">
              <div className="p-8 rounded-3xl bg-slate-950/90 border border-slate-800">
                <h3 className="text-2xl font-bold text-white mb-2">Send an Admission Enquiry</h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  Fill out the form below to receive prospectus details, fee structure, and counselor callback.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                          Parent's Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#c09d59] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="email@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#c09d59] text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          placeholder="10-digit mobile number"
                          value={formState.mobile}
                          onChange={(e) => setFormState({ ...formState, mobile: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#c09d59] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                          Grade / Class Seeking *
                        </label>
                        <select
                          required
                          value={formState.grade}
                          onChange={(e) => setFormState({ ...formState, grade: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#c09d59] text-sm"
                        >
                          <option value="">Select Grade</option>
                          <option value="Class IV">Class IV</option>
                          <option value="Class V">Class V</option>
                          <option value="Class VI">Class VI</option>
                          <option value="Class VII">Class VII</option>
                          <option value="Class VIII">Class VIII</option>
                          <option value="Class IX">Class IX</option>
                          <option value="Class X">Class X</option>
                          <option value="Class XI Science">Class XI (Science)</option>
                          <option value="Class XI Commerce">Class XI (Commerce)</option>
                          <option value="Class XI Humanities">Class XI (Humanities)</option>
                          <option value="Class XII">Class XII</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                        Queries or Specific Requirements
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Mention any specific queries regarding hostel, sports, or fee structure..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#c09d59] text-sm"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={Send}
                      className="w-full font-bold uppercase tracking-wider text-sm py-3.5"
                    >
                      Submit Official Enquiry
                    </Button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4">
                    <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h4 className="text-xl font-bold text-white">Enquiry Received!</h4>
                    <p className="text-sm text-slate-300">
                      Our admissions counselor will call you back at <strong className="text-[#c09d59]">{formState.mobile}</strong> within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#c09d59] hover:underline pt-2 font-semibold"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
