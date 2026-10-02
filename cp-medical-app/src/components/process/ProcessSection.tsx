import React, { useState } from 'react';
import { SERVICE_PROCESS_STEPS } from '../../data/processData';
import {
  FileText,
  PhoneCall,
  Search,
  MapPin,
  Wrench,
  ShieldCheck,
  FileCheck,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ProcessSectionProps {
  onRequestService: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onRequestService }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return FileText;
      case 'PhoneCall': return PhoneCall;
      case 'Search': return Search;
      case 'MapPin': return MapPin;
      case 'Wrench': return Wrench;
      case 'ShieldCheck': return ShieldCheck;
      case 'FileCheck': return FileCheck;
      case 'HeartHandshake': return HeartHandshake;
      default: return Wrench;
    }
  };

  return (
    <section id="process" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0A3871] text-xs font-bold border border-blue-200 mb-3">
            <Sparkles className="w-4 h-4 text-[#0284c7]" />
            <span>HOW SERVICE WORKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1528] tracking-tight">
            Our 8-Step Biomedical Service Workflow
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            From the moment an issue occurs to transparent diagnostic sign-off, every step follows strict healthcare engineering protocols.
          </p>
        </div>

        {/* 8-Step Interactive Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICE_PROCESS_STEPS.map((step, idx) => {
            const Icon = getStepIcon(step.icon);
            const isSelected = activeStepIndex === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative rounded-3xl p-6 transition-all duration-300 border flex flex-col justify-between cursor-pointer group hover:-translate-y-1 ${
                  isSelected
                    ? 'bg-gradient-to-br from-sky-50 via-white to-blue-50 border-[#0A3871] shadow-lg ring-2 ring-[#0A3871]/20'
                    : 'bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Step Number and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl font-black transition-colors ${
                      isSelected ? 'text-[#0A3871]' : 'text-slate-300 group-hover:text-sky-300'
                    }`}>
                      {step.number}
                    </span>
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[#0A3871] text-white shadow-md scale-110'
                        : 'bg-white text-slate-700 border border-slate-200 group-hover:bg-sky-100 group-hover:text-[#0A3871]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="font-extrabold text-base text-slate-900 mb-2 group-hover:text-[#0A3871] transition-colors">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Key Output Deliverable */}
                <div className="pt-3 border-t border-slate-200/70 text-[11px] font-semibold">
                  <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-0.5">
                    Deliverable:
                  </div>
                  <div className="text-[#0A3871] line-clamp-2">
                    {step.keyDeliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Spotlight Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0A3871] to-[#07254c] rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-sky-400/20 text-sky-200 text-xs font-bold border border-sky-300/30 mb-2 inline-block">
              Active Workflow Stage: Step {SERVICE_PROCESS_STEPS[activeStepIndex].number} of 08
            </span>
            <h3 className="text-2xl font-bold mt-1">
              {SERVICE_PROCESS_STEPS[activeStepIndex].title}
            </h3>
            <p className="text-sm text-sky-100 mt-2 leading-relaxed">
              {SERVICE_PROCESS_STEPS[activeStepIndex].description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs">
              <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-emerald-300 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{SERVICE_PROCESS_STEPS[activeStepIndex].keyDeliverable}</span>
              </span>
            </div>
          </div>

          <div className="mt-6 sm:mt-0 sm:absolute sm:right-8 sm:bottom-8">
            <button
              onClick={onRequestService}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Initiate Step 01: Raise Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
