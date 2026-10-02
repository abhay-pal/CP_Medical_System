import React, { useState } from 'react';
import { AMC_CMC_COMPARISON, CONTRACT_BENEFITS } from '../../data/amcCmcData';
import { COMPANY_INFO } from '../../data/companyData';
import {
  ShieldCheck,
  Calendar,
  CheckCircle2,
  XCircle,
  HelpCircle,
  FileText,
  Calculator,
  Send,
  Sparkles,
  Clock,
  Phone,
  Building2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AmcCmcSectionProps {
  onDirectEnquiry: (data: { contractType: string; equipmentCount: string; notes: string }) => void;
}

export const AmcCmcSection: React.FC<AmcCmcSectionProps> = ({ onDirectEnquiry }) => {
  const [contractType, setContractType] = useState<'AMC' | 'CMC'>('CMC');
  const [hospitalName, setHospitalName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [equipmentCount, setEquipmentCount] = useState('5-15');
  const [equipmentDetails, setEquipmentDetails] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [proposalId, setProposalId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hospitalName || !phone || !contactPerson) {
      alert('Please fill in Hospital Name, Contact Person and Phone Number.');
      return;
    }

    const uniqueId = `CPMS-AMC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setProposalId(uniqueId);
    setSubmitted(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });

    onDirectEnquiry({
      contractType,
      equipmentCount,
      notes: `Hospital: ${hospitalName}, Contact: ${contactPerson}, Phone: ${phone}, City: ${city}, Equipment: ${equipmentDetails}, Msg: ${message}`
    });
  };

  return (
    <section id="amc-cmc" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold border border-teal-200 mb-3">
            <Calendar className="w-4 h-4 text-teal-600" />
            <span>LONG-TERM ASSET PROTECTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1528] tracking-tight">
            AMC &amp; CMC Maintenance Contracts
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Ensure uninterrupted clinical operations, fixed annual budgeting, and zero unexpected downtime with our hospital-grade maintenance agreements.
          </p>
        </div>

        {/* Simple Plain-English Explanation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* AMC Card */}
          <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-sm hover:shadow-lg hover:border-teal-400 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3.5 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-extrabold border border-teal-200">
                Annual Maintenance Contract
              </span>
              <span className="text-2xl font-black text-teal-700">AMC</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Preventive &amp; Labour-Free Service Care
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              AMC covers all scheduled periodic preventive maintenance (PPM) visits, routine safety tests, and unlimited breakdown emergency visits with <strong>100% free engineering labour</strong>. Any replacement spare parts required are charged transparently at discounted rates.
            </p>

            <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Quarterly Planned Preventive Maintenance (PPM) visits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Unlimited breakdown troubleshooting calls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Zero engineer labour charges on all repair visits</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <HelpCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Spare parts supplied at preferential discounted pricing</span>
              </div>
            </div>
          </div>

          {/* CMC Card */}
          <div className="bg-gradient-to-br from-[#0A3871] to-[#07254c] text-white rounded-3xl p-8 border-2 border-sky-400/40 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-400/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center justify-between mb-4 relative z-10">
              <span className="px-3.5 py-1 rounded-full bg-sky-400/20 text-sky-200 text-xs font-extrabold border border-sky-300/30">
                Comprehensive Maintenance Contract
              </span>
              <span className="text-2xl font-black text-amber-300">CMC</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 relative z-10">
              All-Inclusive Total Asset Coverage (Labour + Spares)
            </h3>
            <p className="text-sm text-sky-100 leading-relaxed mb-6 relative z-10">
              The ultimate peace-of-mind agreement for critical hospital departments. CMC covers scheduled PPM, unlimited emergency breakdowns, free engineering labour, <strong>PLUS 100% replacement coverage for internal electronic boards, power supplies, motors, and functional components</strong>.
            </p>

            <div className="space-y-2.5 pt-4 border-t border-blue-800 text-xs text-sky-100 relative z-10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Scheduled PPM visits + safety calibration checks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Priority VIP breakdown dispatch (Fastest Response)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Free Labour + Free functional spare parts &amp; PCBs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Annual biomedical calibration certificates included</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Feature Comparison Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-16 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Contract Scope &amp; Feature Comparison
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Transparent side-by-side comparison between AMC and CMC maintenance agreements.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold">
              <span>Standard 1-Year / Multi-Year Terms</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase font-extrabold text-slate-500">
                  <th className="py-3 px-4">Service Feature</th>
                  <th className="py-3 px-4 text-center bg-teal-50/60 rounded-t-xl text-teal-800">
                    AMC (Annual)
                  </th>
                  <th className="py-3 px-4 text-center bg-blue-50/80 rounded-t-xl text-[#0A3871]">
                    CMC (Comprehensive)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {AMC_CMC_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-800">
                      <div>{row.feature}</div>
                      <div className="text-[11px] text-slate-400 font-normal mt-0.5">
                        {row.description}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center bg-teal-50/30 text-teal-900 font-bold">
                      {typeof row.amc === 'string' ? row.amc : row.amc ? 'Included' : 'Not Included'}
                    </td>
                    <td className="py-3.5 px-4 text-center bg-blue-50/40 text-[#0A3871] font-bold">
                      {typeof row.cmc === 'string' ? row.cmc : row.cmc ? 'Included' : 'Not Included'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Contract Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {CONTRACT_BENEFITS.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-2"
            >
              <div className="w-9 h-9 rounded-xl bg-sky-100 text-[#0A3871] flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <h4 className="text-sm font-bold text-slate-900">{b.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive AMC / CMC Proposal Request Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-sky-100 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-center mb-8">
              <span className="px-3 py-1 rounded-full bg-sky-100 text-[#0A3871] text-xs font-bold border border-sky-200">
                Custom Proposal Request
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Request an AMC / CMC Proposal for Your Facility
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Tell us about your hospital asset inventory. Our biomedical team will prepare a structured quotation.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-emerald-950">
                    Proposal Request Received Successfully!
                  </h4>
                  <p className="text-xs text-emerald-800 mt-1">
                    Your unique AMC/CMC proposal tracking reference is:
                  </p>
                  <div className="text-lg font-mono font-bold text-[#0A3871] bg-white px-4 py-2 rounded-xl border border-emerald-300 inline-block mt-2">
                    {proposalId}
                  </div>
                </div>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Founder <strong>Er. Vikul Pal</strong> and our biomedical contracts specialist will review your equipment count and reach out on <strong>{phone}</strong> with a detailed proposal.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-xl bg-[#0A3871] text-white text-xs font-bold hover:bg-[#07254c] cursor-pointer"
                >
                  Submit Another Proposal Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Contract Choice Tabs */}
                <div className="flex rounded-2xl bg-slate-100 p-1.5 max-w-md mx-auto mb-6">
                  <button
                    type="button"
                    onClick={() => setContractType('CMC')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      contractType === 'CMC'
                        ? 'bg-[#0A3871] text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    CMC (Comprehensive + Spares)
                  </button>
                  <button
                    type="button"
                    onClick={() => setContractType('AMC')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      contractType === 'AMC'
                        ? 'bg-teal-700 text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    AMC (Annual Maintenance)
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Hospital / Clinic / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. City Multi-Speciality Hospital"
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Contact Person &amp; Designation *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Sharma / Medical Superintendent"
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 7417846881"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. admin@hospital.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muzaffarnagar / Meerut / Saharanpur"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Estimated Number of Equipment
                    </label>
                    <select
                      value={equipmentCount}
                      onChange={(e) => setEquipmentCount(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    >
                      <option value="1-4">1 to 4 Machines (Targeted Contract)</option>
                      <option value="5-15">5 to 15 Machines (Departmental)</option>
                      <option value="16-50">16 to 50 Machines (Small/Medium Hospital)</option>
                      <option value="50+">50+ Machines (Full Hospital Fleet)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Equipment List / Key Machine Types (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. 4 Patient Monitors, 2 Ventilators, 1 Cautery Machine, 1 Semi-Auto Analyzer..."
                    value={equipmentDetails}
                    onChange={(e) => setEquipmentDetails(e.target.value)}
                    className="w-full text-xs px-3.5 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#0A3871] to-[#0284c7] hover:from-[#07254c] hover:to-[#0369a1] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Official {contractType} Proposal</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
