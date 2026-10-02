import React from 'react';
import { ServiceItem } from '../../types';
import {
  X,
  CheckCircle2,
  Clock,
  Cpu,
  ShieldCheck,
  Wrench,
  FileCheck,
  ChevronRight,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0A3871] to-[#0284c7] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-sky-200 text-xs font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Biomedical Service Scope</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {service.name}
          </h3>
          <p className="text-sky-100 text-sm mt-1 max-w-xl">
            {service.shortDesc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Service Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
              {service.fullDesc}
            </p>
          </div>

          {/* Scope of Work */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Standard Scope of Work
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.scopeOfWork.map((scope, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-sky-50/50 border border-sky-100 text-xs text-slate-800 font-medium"
                >
                  <Wrench className="w-4 h-4 text-[#0A3871] shrink-0 mt-0.5" />
                  <span>{scope}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Clinical & Hospital Benefits */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Key Hospital &amp; Clinical Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-slate-800 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Covered */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Common Equipment Handled
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.equipmentCovered.map((eq, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200"
                >
                  {eq}
                </span>
              ))}
            </div>
          </div>

          {/* Turnaround Badge */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Standard Turnaround: {service.turnaround}</span>
            </span>
            <span className="text-slate-600 font-medium">On-Site Dispatch Available</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`tel:${COMPANY_INFO.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-700 hover:text-[#0A3871] py-2 px-3"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>Speak to Engineer: {COMPANY_INFO.contact.phone}</span>
          </a>

          <div className="w-full sm:w-auto flex items-center gap-2">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onRequestService(service.name);
                onClose();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0A3871] to-[#0284c7] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Request This Service</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
