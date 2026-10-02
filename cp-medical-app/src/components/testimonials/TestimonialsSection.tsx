import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import {
  MessageSquare,
  ShieldCheck,
  Star,
  Building2,
  CheckCircle2,
  Sparkles,
  Send,
  Lock
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [hospitalName, setHospitalName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hospitalName || !doctorName || !feedback) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-bold mb-2">
            <MessageSquare className="w-3.5 h-3.5 text-[#0A3871]" />
            <span>HOSPITAL CLIENT FEEDBACK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] tracking-tight">
            Client Reviews &amp; Institutional Trust
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            We value genuine relationships with medical superintendents, biomedical department heads, and doctors.
          </p>
        </div>

        {/* Transparent Quality Assurance Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm text-center max-w-2xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0A3871] flex items-center justify-center mx-auto border border-sky-100">
            <ShieldCheck className="w-6 h-6 text-[#0284c7]" />
          </div>

          <h3 className="text-lg font-bold text-slate-900">
            100% Genuine Clinical Partnerships
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            At CP Medical System+, we uphold ethical biomedical service practices. Verified hospital ratings and client testimonials are added directly from verified service reports.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
            >
              {showReviewForm ? 'Close Feedback Form' : 'Submit Healthcare Facility Feedback'}
            </button>
          </div>

          {/* Feedback Submission Modal / Form */}
          {showReviewForm && (
            <div className="pt-4 border-t border-slate-100 text-left animate-in fade-in duration-200">
              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold text-center">
                  Thank you! Your verified feedback has been submitted for verification.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">
                        Hospital / Clinic Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Life Care Hospital"
                        value={hospitalName}
                        onChange={(e) => setHospitalName(e.target.value)}
                        className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">
                        Doctor / In-Charge Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. A. K. Verma"
                        value={doctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                        className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Service Experience / Comments
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Share your experience regarding our equipment repair, PPM, or technical support..."
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 bg-[#0A3871] text-white text-xs font-bold rounded-lg hover:bg-[#07254c] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Verified Testimonial</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
