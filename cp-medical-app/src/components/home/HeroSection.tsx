import React from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { EcgLine } from '../common/EcgLine';
import {
  Wrench,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
  ChevronRight,
  Activity,
  Cpu
} from 'lucide-react';

interface HeroSectionProps {
  onRequestService: () => void;
  onExploreEquipment: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestService,
  onExploreEquipment,
  onExploreServices,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-sky-50/40 to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background Subtle Medical/ECG Line Art */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[800px] h-[300px] -rotate-6">
          <EcgLine height={80} color="#93c5fd" animated={true} />
        </div>
        <div className="absolute -bottom-10 right-10 w-[600px] h-[200px] rotate-3 opacity-30">
          <EcgLine height={60} color="#38bdf8" animated={true} />
        </div>
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 border border-sky-300/60 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0A3871] animate-ping"></span>
              <span className="text-xs sm:text-sm font-bold text-[#0A3871] tracking-wide">
                Professional Biomedical Equipment Support
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#0B1528] tracking-tight leading-[1.15]">
              Medical Equipment{' '}
              <span className="bg-gradient-to-r from-[#0A3871] via-[#0284c7] to-[#0A3871] bg-clip-text text-transparent">
                Service &amp; Repair
              </span>{' '}
              You Can Rely On
            </h1>

            {/* Tagline Accent */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base font-semibold text-[#DC2626]">
              <Activity className="w-4 h-4 shrink-0 text-red-500 animate-pulse" />
              <span>{COMPANY_INFO.tagline}</span>
            </div>

            {/* Hero Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Professional repair, preventive maintenance (PPM), calibration, installation and technical support for medical equipment used in hospitals, clinics, laboratories, ICUs and operation theatres.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onRequestService}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#0A3871] to-[#0284c7] hover:from-[#07254c] hover:to-[#0369a1] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Wrench className="w-5 h-5" />
                <span>Request Service</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-[#0A3871] font-bold text-base border-2 border-slate-200 hover:border-[#0A3871]/40 shadow-sm transition-all"
              >
                <Phone className="w-5 h-5 text-emerald-600" />
                <span>Call: {COMPANY_INFO.contact.phoneFormatted}</span>
              </a>
            </div>

            {/* 4 Trust Indicators Grid */}
            <div className="pt-4 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                {[
                  { text: 'Skilled Biomedical Engineers', icon: Cpu },
                  { text: 'On-Site Hospital Support', icon: ShieldCheck },
                  { text: 'Genuine Spare Parts', icon: CheckCircle2 },
                  { text: 'AMC / CMC Available', icon: Clock },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-xl bg-white/70 border border-slate-200/60 shadow-2xs backdrop-blur-xs"
                    >
                      <div className="w-6 h-6 rounded-lg bg-sky-100 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-[#0A3871]" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800 leading-tight">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Founder Credit note */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 pt-1">
              <span>Biomedical Leadership:</span>
              <span className="font-bold text-slate-800">{COMPANY_INFO.founder.name}</span>
              <span className="text-slate-300">|</span>
              <span>Janakpuri, Muzaffarnagar</span>
            </div>
          </div>

          {/* Right Hero Image Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="images/hero_biomedical_engineer.jpg"
                  alt="Biomedical Engineer Servicing Hospital Equipment"
                  className="w-full h-[380px] sm:h-[440px] lg:h-[480px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/70 to-transparent p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-sky-300 font-bold">
                        Hospital-Grade Standards
                      </div>
                      <div className="text-base font-bold">
                        Biomedical Testing &amp; Diagnostic Calibration
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shrink-0">
                      <ShieldCheck className="w-6 h-6 text-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top-Left Uptime */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-in fade-in zoom-in duration-500">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                  <Activity className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-500">Response Speed</div>
                  <div className="text-sm font-bold text-slate-900">Priority On-Site Support</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom-Right Certification / All Under One Roof */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#0A3871] text-white rounded-2xl p-3.5 shadow-2xl border border-sky-400/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0284c7] text-white flex items-center justify-center shadow-md">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-sky-200 font-medium">Multi-Equipment</div>
                  <div className="text-sm font-bold text-white">Under One Roof</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
