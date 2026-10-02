import React from 'react';
import { INDUSTRIES_SERVED } from '../../data/industriesData';
import {
  Building2,
  Hospital,
  HeartHandshake,
  Stethoscope,
  Activity,
  FlaskConical,
  ShieldAlert,
  Scissors,
  GraduationCap,
  ChevronRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface IndustriesSectionProps {
  onSelectIndustry: (industryName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onSelectIndustry }) => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Hospital': return Hospital;
      case 'HeartHandshake': return HeartHandshake;
      case 'Stethoscope': return Stethoscope;
      case 'Activity': return Activity;
      case 'FlaskConical': return FlaskConical;
      case 'ShieldAlert': return ShieldAlert;
      case 'Scissors': return Scissors;
      case 'GraduationCap': return GraduationCap;
      default: return Hospital;
    }
  };

  return (
    <section id="industries" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-[#0A3871] text-xs font-bold border border-sky-200 mb-3">
            <Hospital className="w-4 h-4 text-[#0284c7]" />
            <span>HEALTHCARE SECTORS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1528] tracking-tight">
            Industries &amp; Facilities We Serve
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Tailored biomedical engineering support designed to meet the distinct workflow requirements of healthcare organizations.
          </p>
        </div>

        {/* 9 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_SERVED.map((ind) => {
            const Icon = getIndustryIcon(ind.icon);
            return (
              <div
                key={ind.id}
                className="group bg-white rounded-3xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A3871] to-[#0284c7] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-[#0A3871] transition-colors leading-snug">
                        {ind.name}
                      </h3>
                    </div>
                  </div>

                  {/* Tagline */}
                  <div className="text-xs font-semibold text-[#0284c7] mb-3">
                    {ind.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {ind.description}
                  </p>

                  {/* Equipment Focus Tags */}
                  <div className="mb-4">
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">
                      Key Equipment Covered:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.equipmentFocus.map((eq, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200/60"
                        >
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Typical Service Needs */}
                  <div className="mb-6 pt-3 border-t border-slate-100 space-y-1">
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                      Recommended Solutions:
                    </div>
                    {ind.serviceNeeds.slice(0, 2).map((need, i) => (
                      <div key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{need}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <button
                  onClick={() => onSelectIndustry(ind.name)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#0A3871] text-slate-800 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Support for {ind.name}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
