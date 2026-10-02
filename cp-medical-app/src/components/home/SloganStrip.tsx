import React from 'react';
import { EcgLine } from '../common/EcgLine';
import { ShieldCheck, HeartPulse, Building2, CheckCircle2 } from 'lucide-react';

export const SloganStrip: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Preventive Care Today, Safer Tomorrow */}
          <div className="relative rounded-3xl p-6 bg-gradient-to-br from-sky-50 via-white to-blue-50 border border-sky-200/80 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0A3871] text-white flex items-center justify-center shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#0284c7]">
                  Clinical Philosophy
                </span>
                <h4 className="text-base font-extrabold text-[#0A3871] leading-tight">
                  PREVENTIVE CARE TODAY, SAFER TOMORROW
                </h4>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Scheduled biomedical maintenance averts sudden device breakdown, safeguarding patients during life-critical interventions.
            </p>

            <div className="pt-2 border-t border-sky-100 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-500">Continuous Monitoring</span>
              <div className="w-24">
                <EcgLine height={20} color="#0284c7" />
              </div>
            </div>
          </div>

          {/* Card 2: All Types of Medical Equipment Under One Roof */}
          <div className="relative rounded-3xl p-6 bg-gradient-to-br from-emerald-50 via-white to-teal-50 border border-emerald-200/80 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-700">
                  Full Hospital Support
                </span>
                <h4 className="text-base font-extrabold text-emerald-950 leading-tight">
                  All Types of Medical Equipment Service &amp; Repairing Under One Roof
                </h4>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Single-window biomedical engineering partner managing ICU, OT, Pathology Lab, Radiology, and CSSD equipment fleets.
            </p>

            <div className="pt-2 border-t border-emerald-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Multi-Vendor &amp; Multi-Department Expertise</span>
            </div>
          </div>

          {/* Card 3: Your Equipment — Our Responsibility */}
          <div className="relative rounded-3xl p-6 bg-gradient-to-br from-amber-50 via-white to-yellow-50 border border-amber-200/80 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-700">
                  Customer Commitment
                </span>
                <h4 className="text-lg font-black text-amber-950 tracking-tight leading-tight italic font-serif">
                  Your Equipment — Our Responsibility.
                </h4>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              We treat your medical equipment with rigorous engineering discipline so doctors and healthcare teams can concentrate 100% on patient recovery.
            </p>

            <div className="pt-2 border-t border-amber-100 flex items-center justify-between text-xs font-semibold text-slate-600">
              <span>Er. Vikul Pal</span>
              <span className="text-amber-700 font-bold">CP Medical System+</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
