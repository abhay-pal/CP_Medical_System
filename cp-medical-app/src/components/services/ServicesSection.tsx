import React, { useState } from 'react';
import { SERVICES_LIST } from '../../data/servicesData';
import { ServiceItem } from '../../types';
import { ServiceDetailModal } from './ServiceDetailModal';
import {
  Wrench,
  Settings,
  Hammer,
  Cpu,
  Target,
  FileText,
  Headphones,
  Layers,
  Truck,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface ServicesSectionProps {
  onRequestService: (prefillService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return Wrench;
      case 'Settings': return Settings;
      case 'Hammer': return Hammer;
      case 'Cpu': return Cpu;
      case 'Target': return Target;
      case 'FileText': return FileText;
      case 'Headphones': return Headphones;
      case 'Layers': return Layers;
      case 'Truck': return Truck;
      case 'ShieldCheck': return ShieldCheck;
      default: return Wrench;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-[#0A3871] text-xs font-bold border border-sky-200 mb-3">
            <Sparkles className="w-4 h-4 text-[#0284c7]" />
            <span>OUR SERVICES &amp; SOLUTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1528] tracking-tight">
            Complete Medical Equipment Support{' '}
            <span className="bg-gradient-to-r from-[#0A3871] via-[#0284c7] to-[#0A3871] bg-clip-text text-transparent">
              Under One Roof
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            From emergency ICU breakdown repairs and routine PPM to high-precision calibration and electrical safety audits, we provide comprehensive biomedical technical solutions.
          </p>
        </div>

        {/* 10 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service, index) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 overflow-hidden"
              >
                {/* Popular Badge */}
                {service.isPopular && (
                  <span className="absolute top-5 right-5 px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-bold border border-sky-200">
                    High Demand
                  </span>
                )}

                <div>
                  {/* Service Number & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A3871] to-[#0284c7] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-sky-200 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#0A3871] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {service.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="line-clamp-1">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A3871] hover:text-[#0284c7] transition-colors cursor-pointer group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onRequestService(service.name)}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-[#0A3871] text-slate-800 hover:text-white text-xs font-bold transition-all shadow-2xs cursor-pointer"
                  >
                    Book Service
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 hidden sm:flex">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Need a customized service package for your hospital or diagnostic lab?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                We design tailored Preventive Maintenance and AMC/CMC programs tailored to your equipment count.
              </p>
            </div>
          </div>

          <button
            onClick={() => onRequestService()}
            className="w-full md:w-auto px-6 py-3 rounded-2xl bg-[#0A3871] hover:bg-[#07254c] text-white font-bold text-sm shadow-md transition-all shrink-0 cursor-pointer"
          >
            Request Custom Proposal
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestService={(name) => {
          setSelectedService(null);
          onRequestService(name);
        }}
      />
    </section>
  );
};
