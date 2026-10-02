import React from 'react';
import { EquipmentProduct } from '../../types';
import {
  X,
  AlertTriangle,
  Wrench,
  Target,
  ShieldCheck,
  Clock,
  Layers,
  ChevronRight,
  Phone,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface EquipmentDetailModalProps {
  product: EquipmentProduct | null;
  onClose: () => void;
  onRequestService: (equipmentName: string, category: string) => void;
}

export const EquipmentDetailModal: React.FC<EquipmentDetailModalProps> = ({
  product,
  onClose,
  onRequestService,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0A3871] via-[#0F4C81] to-[#0284c7] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-0.5 rounded-full bg-sky-400/20 text-sky-200 text-xs font-bold border border-sky-300/30">
              {product.category}
            </span>
            <span
              className={`px-3 py-0.5 rounded-full text-xs font-bold ${
                product.criticality === 'Critical'
                  ? 'bg-red-500/30 text-red-200 border border-red-400/40'
                  : 'bg-amber-500/30 text-amber-200 border border-amber-400/40'
              }`}
            >
              Priority: {product.criticality} Care
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {product.name}
          </h3>
          <p className="text-sky-100 text-xs sm:text-sm mt-1 max-w-2xl">
            {product.overview}
          </p>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Top Quick Status Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-medium text-emerald-800">Repair Support</div>
                <div className="text-xs font-bold text-emerald-950">Component &amp; Board Level</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-medium text-sky-800">Calibration Support</div>
                <div className="text-xs font-bold text-sky-950">
                  {product.calibrationAvailability ? 'Certified Calibration Available' : 'Inspection on Request'}
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-medium text-indigo-800">Contract Option</div>
                <div className="text-xs font-bold text-indigo-950">AMC &amp; CMC Eligible</div>
              </div>
            </div>
          </div>

          {/* Typical Issues & Faults Diagnosed */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
              <span>Typical Issues &amp; Symptoms Diagnosed</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.typicalIssues.map((issue, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs text-amber-950 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></span>
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Available for this machine */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-[#0A3871]" />
              <span>Available Biomedical Engineering Services</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.servicesAvailable.map((srv, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-sky-50/60 border border-sky-100 text-xs text-slate-800 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preventive Maintenance & Calibration Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0A3871]">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>Recommended PPM Schedule:</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {product.preventiveMaintenance}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0A3871]">
                <Target className="w-4 h-4 text-rose-600" />
                <span>Calibration &amp; Testing Scope:</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {product.calibrationDetails}
              </p>
            </div>
          </div>

          {/* Spares Availability */}
          <div className="p-4 rounded-2xl bg-slate-100/80 border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>Spare Parts &amp; Accessories Status:</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {product.sparePartsAvailability}
            </p>
          </div>

          {/* Pricing Note */}
          <div className="text-[11px] text-slate-500 bg-sky-50/60 p-3 rounded-xl border border-sky-100 italic text-center">
            * Note: Medical equipment service rates are strictly enquiry-based following transparent initial engineering inspection and diagnostic fault isolation. No misleading fixed charges.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`tel:${COMPANY_INFO.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-700 hover:text-[#0A3871] py-2 px-3"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>Speak with Biomedical Engineer: {COMPANY_INFO.contact.phone}</span>
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
                onRequestService(product.name, product.category);
                onClose();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0A3871] to-[#0284c7] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Request Service for {product.name}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
