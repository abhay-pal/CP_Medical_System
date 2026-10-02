import React from 'react';
import { Phone, MessageCircle, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface MobileQuickBarProps {
  onRequestService: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onRequestService }) => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent(
    `Hello CP Medical System+,\nI need assistance with medical equipment service/repair.\n\nEquipment:\nService Required:\nLocation:\nIssue:\nPlease contact me.`
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-2 px-3 flex items-center justify-around gap-2 md:hidden">
      {/* Direct Call Button */}
      <a
        href={`tel:${COMPANY_INFO.contact.phone}`}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
      >
        <Phone className="w-4 h-4 text-[#0A3871]" />
        <span className="text-[11px] font-bold mt-0.5">Call Now</span>
      </a>

      {/* WhatsApp Chat Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/60 transition-colors"
      >
        <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
        <span className="text-[11px] font-bold mt-0.5">WhatsApp</span>
      </a>

      {/* Request Service / Enquiry Button */}
      <button
        onClick={onRequestService}
        className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#0A3871] to-[#0284c7] text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
      >
        <Wrench className="w-3.5 h-3.5" />
        <span>Request Service</span>
      </button>
    </div>
  );
};
