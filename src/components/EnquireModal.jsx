'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, PhoneCall, ShieldCheck, Send } from 'lucide-react';
import { Button } from './ui/Button';

export const EnquireModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    mobile: '',
    otp: '',
    selectedClass: '',
    state: '',
    agreed: false,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSendOtp = () => {
    if (formData.mobile.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = () => {
    if (formData.otp.length === 4 || formData.otp.length === 6) {
      setOtpVerified(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      parentName: '',
      email: '',
      mobile: '',
      otp: '',
      selectedClass: '',
      state: '',
      agreed: false,
    });
    setOtpSent(false);
    setOtpVerified(false);
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99990] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-xl bg-[#0f172a] border border-[#c09d59]/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 z-[99995] text-left text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b90124]/20 border border-[#b90124]/40 text-[#ff4d6d] text-xs font-semibold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" /> Admissions Helpline 2025-26
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Enquire for Admissions
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Connect with Tula's International School counselors in Dehradun.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[#c09d59] focus:ring-1 focus:ring-[#c09d59] text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[#c09d59] focus:ring-1 focus:ring-[#c09d59] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                      Mobile Number *
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="9837983791"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-[#c09d59] focus:ring-1 focus:ring-[#c09d59] text-sm"
                      />
                      {!otpVerified && (
                        <button
                          type="button"
                          onClick={handleSendOtp}
                          disabled={formData.mobile.length < 10}
                          className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-800 border border-slate-700 text-[#c09d59] hover:bg-slate-700 disabled:opacity-40 whitespace-nowrap"
                        >
                          {otpSent ? 'Resend' : 'Send OTP'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* OTP verification block */}
                {otpSent && !otpVerified && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-3 rounded-xl bg-[#c09d59]/10 border border-[#c09d59]/30 flex items-center justify-between gap-3"
                  >
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="Enter 4-digit OTP"
                      value={formData.otp}
                      onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      className="px-4 py-1.5 bg-[#c09d59] text-slate-950 rounded-lg font-semibold text-xs hover:bg-[#d4af37]"
                    >
                      Verify OTP
                    </button>
                  </motion.div>
                )}

                {otpVerified && (
                  <div className="text-xs text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> Mobile number verified successfully!
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                      Seeking Admission For *
                    </label>
                    <select
                      required
                      value={formData.selectedClass}
                      onChange={(e) => setFormData({ ...formData, selectedClass: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white focus:outline-none focus:border-[#c09d59] focus:ring-1 focus:ring-[#c09d59] text-sm"
                    >
                      <option value="">Select Grade / Class</option>
                      <option value="Class IV">Class IV</option>
                      <option value="Class V">Class V</option>
                      <option value="Class VI">Class VI</option>
                      <option value="Class VII">Class VII</option>
                      <option value="Class VIII">Class VIII</option>
                      <option value="Class IX">Class IX</option>
                      <option value="Class X">Class X</option>
                      <option value="Class XI (Science)">Class XI (Science)</option>
                      <option value="Class XI (Commerce)">Class XI (Commerce)</option>
                      <option value="Class XI (Humanities)">Class XI (Humanities)</option>
                      <option value="Class XII">Class XII</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                      State / Region *
                    </label>
                    <select
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white focus:outline-none focus:border-[#c09d59] focus:ring-1 focus:ring-[#c09d59] text-sm"
                    >
                      <option value="">Select State</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="International/NRI">International / NRI</option>
                      <option value="Other">Other State</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="modalConsent"
                    required
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-slate-700 text-[#b90124] focus:ring-[#b90124] bg-slate-900"
                  />
                  <label htmlFor="modalConsent" className="text-xs text-slate-400 leading-tight">
                    I agree to receive admission updates, fee structure prospectus, and counseling calls from Tula's International School, Dehradun.
                  </label>
                </div>

                <div className="pt-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Send}
                    className="w-full py-3.5 text-base rounded-xl font-bold"
                  >
                    Submit Admissions Enquiry
                  </Button>
                </div>
              </form>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-[#c09d59]" /> Direct Helpline: +91-9837983791
                </span>
                <span>CBSE Co-Ed Boarding School</span>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-bold text-white">Thank You for Enquiring!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                We have received your enquiry for <strong className="text-[#c09d59]">{formData.selectedClass}</strong>. Our TIS admissions desk will contact you at <strong className="text-white">{formData.mobile}</strong> shortly.
              </p>

              <div className="pt-4">
                <Button variant="gold" size="md" onClick={resetForm}>
                  Close & Explore Website
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
