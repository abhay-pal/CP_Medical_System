import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [equipment, setEquipment] = useState('');
  const [service, setService] = useState('Breakdown Repair');
  const [hospital, setHospital] = useState('');

  const handleSend = () => {
    const text = `Hello CP Medical System+,\nI need assistance with medical equipment.\n\n*Equipment:* ${equipment || 'Medical Device'}\n*Service Required:* ${service}\n*Hospital/Location:* ${hospital || 'Local Hospital'}\n\nPlease contact me for urgent technical support.`;
    const url = `https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const directQuickUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent(
    `Hello CP Medical System+,\nI need assistance with medical equipment service/repair.\n\nEquipment:\nService Required:\nLocation:\nIssue:\nPlease contact me.`
  )}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          <div className="bg-[#0A3871] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">CP Medical WhatsApp Desk</h4>
                <p className="text-[11px] text-sky-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Biomedical Engineer Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-3 bg-slate-50/50">
            <p className="text-xs text-slate-600">
              Send us your equipment fault details directly. Founder Er. Vikul Pal and our biomedical engineering team will reply promptly.
            </p>

            <div>
              <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                Equipment / Machine Name
              </label>
              <input
                type="text"
                placeholder="e.g. Ventilator, Patient Monitor, ECG..."
                value={equipment}
                onChange={(e) => setEquipment(e.target.value)}
                className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871]"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                Service Type Required
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871]"
              >
                <option value="Breakdown Repair">Breakdown Repair (Emergency)</option>
                <option value="Preventive Maintenance (PM)">Preventive Maintenance (PM)</option>
                <option value="Calibration & Testing">Calibration & Testing</option>
                <option value="AMC / CMC Contract">AMC / CMC Contract</option>
                <option value="Spare Parts Inquiry">Spare Parts Replacement</option>
                <option value="Installation">Installation & Setup</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                Hospital / Clinic / City
              </label>
              <input
                type="text"
                placeholder="e.g. Anand Hospital, Muzaffarnagar"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
                className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871]"
              />
            </div>

            <button
              onClick={handleSend}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Launch WhatsApp Chat</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-white"
        aria-label="Chat on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="font-bold text-sm hidden sm:inline">WhatsApp Us</span>
      </button>
    </div>
  );
};
