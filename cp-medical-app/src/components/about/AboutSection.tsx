import React from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { Logo } from '../common/Logo';
import { EcgLine } from '../common/EcgLine';
import {
  ShieldCheck,
  HeartPulse,
  FileCheck,
  Cpu,
  Zap,
  Users,
  Target,
  Compass,
  Award,
  CheckCircle2,
  Building,
  UserCheck
} from 'lucide-react';

interface AboutSectionProps {
  onRequestService: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onRequestService }) => {
  const valuesIcons: Record<string, React.ElementType> = {
    ShieldCheck: ShieldCheck,
    HeartPulse: HeartPulse,
    FileCheck: FileCheck,
    Cpu: Cpu,
    Zap: Zap,
    Users: Users,
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0A3871] text-xs font-bold border border-blue-200 mb-3">
            <Building className="w-4 h-4 text-[#0284c7]" />
            <span>ABOUT CP MEDICAL SYSTEM+</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1528] tracking-tight">
            Dedicated Biomedical Engineering Care
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            {COMPANY_INFO.supportingLine}
          </p>
        </div>

        {/* Company Overview & Founder Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left: Detailed Overview (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs space-y-4">
              <h3 className="text-2xl font-extrabold text-slate-900">
                Our Commitment to Healthcare Continuity
              </h3>
              
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>CP Medical System+</strong> provides professional medical equipment servicing, repairing, preventive maintenance (PPM), calibration, installation and technical support. We support healthcare facilities by helping them maintain reliable and properly functioning biomedical equipment.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Our service approach focuses on technical quality, timely response, proper documentation and long-term customer relationships. Whether resolving sudden emergency alarms in Intensive Care Units or performing routine maintenance in Operation Theatres, our engineering team adheres to stringent healthcare device standards.
              </p>

              <div className="pt-3 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Standardized Engineering Checklists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Doorstep On-Site Hospital Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Traceable Calibration Test Records</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Reliable Spares Sourcing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Founder Profile Box (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#0A3871] via-[#0F4C81] to-[#07254c] text-white rounded-3xl p-7 border-2 border-sky-400/30 shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#0A3871] flex items-center justify-center font-bold shadow-md">
                  <UserCheck className="w-6 h-6 text-[#0A3871]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-sky-300 font-bold">
                    Biomedical Leadership
                  </span>
                  <h4 className="text-xl font-black text-white">
                    {COMPANY_INFO.founder.name}
                  </h4>
                  <div className="text-xs text-sky-200">{COMPANY_INFO.founder.title}</div>
                </div>
              </div>

              <p className="text-xs text-sky-100 leading-relaxed mb-6">
                Under the technical leadership of <strong>Er. Vikul Pal</strong>, CP Medical System+ has been established to deliver hospital-grade biomedical maintenance, transparent fault isolation, and emergency technical assistance to healthcare institutions across Western Uttar Pradesh.
              </p>

              <div className="space-y-2 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white">
                <div className="flex items-center justify-between">
                  <span className="text-sky-300">Headquarters:</span>
                  <span className="font-semibold text-right">{COMPANY_INFO.contact.city}, {COMPANY_INFO.contact.state}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sky-300">Engineering Helpline:</span>
                  <span className="font-bold text-amber-300">{COMPANY_INFO.contact.phoneFormatted}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Goal, Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Our Goal */}
          <div className="bg-sky-50/70 rounded-3xl p-7 border border-sky-200/80 shadow-2xs space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-[#0A3871] text-white flex items-center justify-center shadow-md">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Our Goal</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {COMPANY_INFO.goalMissionVision.goal}
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-emerald-50/70 rounded-3xl p-7 border border-emerald-200/80 shadow-2xs space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Our Mission</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {COMPANY_INFO.goalMissionVision.mission}
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-indigo-50/70 rounded-3xl p-7 border border-indigo-200/80 shadow-2xs space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Our Vision</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {COMPANY_INFO.goalMissionVision.vision}
            </p>
          </div>
        </div>

        {/* Core Values 6 Grid */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              GUIDING PRINCIPLES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Our Core Biomedical Values
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              Every service visit, component replacement, and calibration test is governed by our commitment to patient safety and engineering excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.goalMissionVision.values.map((val, idx) => {
              const Icon = valuesIcons[val.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2 hover:border-sky-500/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-sm text-white">{val.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
