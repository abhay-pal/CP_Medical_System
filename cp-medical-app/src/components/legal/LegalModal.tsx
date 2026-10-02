import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0A3871] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-300" />
            <h3 className="text-lg font-bold">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1">
          {type === 'privacy' ? (
            <>
              <h4 className="font-bold text-slate-900 text-base">CP Medical System+ Privacy Policy</h4>
              <p>
                At CP Medical System+, founder Er. Vikul Pal and our biomedical engineering team respect the privacy and security of medical facilities, doctors, and healthcare institutions requesting our services.
              </p>
              <h5 className="font-bold text-slate-900">1. Information We Collect</h5>
              <p>
                We collect information provided directly by healthcare clients when requesting medical equipment repair, preventive maintenance, calibration, or AMC/CMC quotes. This includes hospital name, contact person name, telephone number, email, equipment details, error descriptions, and uploaded photographs.
              </p>
              <h5 className="font-bold text-slate-900">2. How We Use Information</h5>
              <p>
                The information is used strictly to diagnose equipment issues, dispatch biomedical engineers, issue service reports, process spare parts procurement, and manage maintenance contracts. We do not sell, rent, or trade client information to any third parties.
              </p>
              <h5 className="font-bold text-slate-900">3. Contact Us</h5>
              <p>
                For any privacy questions, contact CP Medical System+, H.N. 737, Janakpuri, Muzaffarnagar, Uttar Pradesh. Phone: {COMPANY_INFO.contact.phone}.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-bold text-slate-900 text-base">CP Medical System+ Terms of Biomedical Service</h4>
              <p>
                These terms govern the medical equipment service, repair, calibration, maintenance, and AMC/CMC contracts provided by CP Medical System+.
              </p>
              <h5 className="font-bold text-slate-900">1. Service Assessment &amp; Approvals</h5>
              <p>
                All repair and spare parts replacement interventions are preceded by a diagnostic evaluation. Work requiring major board replacement or high-value components will only proceed after written/verbal consent from the authorized hospital in-charge.
              </p>
              <h5 className="font-bold text-slate-900">2. Safety &amp; Post-Service Testing</h5>
              <p>
                Repaired medical devices undergo simulated load testing and electrical safety analysis before release. Hospitals are provided an official biomedical service report with engineer sign-off.
              </p>
              <h5 className="font-bold text-slate-900">3. AMC / CMC Contracts</h5>
              <p>
                Maintenance contracts follow the defined schedule in the individual proposal document. Comprehensive (CMC) terms include covered spare parts as specified in the agreed contract.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
