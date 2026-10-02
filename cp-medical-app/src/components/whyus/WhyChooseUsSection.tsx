import React from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import {
  Cpu,
  Layers,
  Zap,
  Calendar,
  FileCheck2,
  Headphones,
  CheckCircle,
  Building,
  Award,
  ShieldCheck
} from 'lucide-react';

interface WhyChooseUsSectionProps {
  onRequestService: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onRequestService }) => {
  const facilityCards = [
    {
      title: 'Skilled & Experienced Biomedical Engineers',
      description: 'Handled by qualified biomedical specialists trained in medical electronics, firmware diagnostics, and electrical safety.',
      icon: Cpu,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      iconBg: 'bg-blue-600 text-white',
    },
    {
      title: 'Genuine Spare Parts Availability',
      description: 'Ready access to OEM and grade-A electronic PCBs, transducers, oxygen cells, solenoid valves, and vital consumable accessories.',
      icon: Layers,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      iconBg: 'bg-indigo-600 text-white',
    },
    {
      title: 'Quick Response & On-Site Support',
      description: 'Doorstep biomedical service directly inside hospital wards, ICUs, and laboratories to eliminate transit delays and machine damage.',
      icon: Zap,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-600 text-white',
    },
    {
      title: 'AMC / CMC Facility for Long Term Care',
      description: 'Structured annual maintenance agreements delivering guaranteed periodic PPM, safety audits, and unlimited breakdown visits.',
      icon: Calendar,
      color: 'bg-teal-50 text-teal-700 border-teal-200',
      iconBg: 'bg-teal-600 text-white',
    },
    {
      title: 'Proper Documentation & Service Reports',
      description: 'Standardized test sheets, parameter logs, and digital reports ready for hospital NABH, NABL, and ISO accreditation audits.',
      icon: FileCheck2,
      color: 'bg-rose-50 text-rose-700 border-rose-200',
      iconBg: 'bg-rose-600 text-white',
    },
    {
      title: '24×7 Technical Assistance (As Per Requirement)',
      description: 'Dedicated on-call engineering helpline for critical ICU/OT device emergency alarms and rapid on-site escalation.',
      icon: Headphones,
      color: 'bg-amber-50 text-amber-700 border-amber-200',
      iconBg: 'bg-amber-600 text-white',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-sky-300 text-xs font-bold border border-blue-400/30 mb-3">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>OUR FACILITIES &amp; CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Healthcare Facilities Choose{' '}
            <span className="text-[#38bdf8]">CP MEDICAL SYSTEM+</span>
          </h2>
          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            We bridge the gap between expensive OEM replacement costs and substandard local repairs by providing certified biomedical engineering standards.
          </p>
        </div>

        {/* 6 Core Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {facilityCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 rounded-3xl p-7 border border-slate-700/80 hover:border-sky-500/50 hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${card.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                    Facility #{idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div className="bg-gradient-to-r from-blue-900/70 via-indigo-900/60 to-blue-900/70 rounded-3xl p-8 border border-blue-500/30 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {COMPANY_INFO.stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-sky-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Prompt */}
        <div className="text-center mt-12">
          <button
            onClick={onRequestService}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#0284c7] to-[#0A3871] hover:from-[#0369a1] hover:to-[#07254c] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <span>Partner With CP Medical System+</span>
            <CheckCircle className="w-5 h-5 text-emerald-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
