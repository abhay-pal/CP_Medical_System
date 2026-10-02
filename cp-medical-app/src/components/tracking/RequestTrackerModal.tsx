import React, { useState } from 'react';
import { ServiceRequest } from '../../types';
import {
  X,
  Search,
  CheckCircle2,
  Clock,
  Wrench,
  ShieldCheck,
  AlertCircle,
  FileCheck2,
  User,
  Phone,
  Calendar
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface RequestTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  requests: ServiceRequest[];
  defaultSearchId?: string;
  onRequestService: () => void;
}

export const RequestTrackerModal: React.FC<RequestTrackerModalProps> = ({
  isOpen,
  onClose,
  requests,
  defaultSearchId = '',
  onRequestService,
}) => {
  const [searchId, setSearchId] = useState(defaultSearchId);
  const [searched, setSearched] = useState(false);
  const [foundRequest, setFoundRequest] = useState<ServiceRequest | null>(null);

  React.useEffect(() => {
    if (defaultSearchId) {
      setSearchId(defaultSearchId);
      handleSearchWithId(defaultSearchId);
    }
  }, [defaultSearchId]);

  if (!isOpen) return null;

  const handleSearchWithId = (idToSearch: string) => {
    const clean = idToSearch.trim().toUpperCase();
    const match = requests.find(r => r.id.toUpperCase() === clean);
    setFoundRequest(match || null);
    setSearched(true);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchId) return;
    handleSearchWithId(searchId);
  };

  const workflowSteps = [
    { key: 'New', label: '1. Request Received', desc: 'Logged into biomedical ticketing queue' },
    { key: 'Assigned', label: '2. Engineer Assigned', desc: 'Biomedical specialist assigned with parts' },
    { key: 'In Progress', label: '3. Diagnostic & Repair', desc: 'On-site troubleshooting & board servicing' },
    { key: 'Completed', label: '4. Testing & Sign-off', desc: 'Safety testing & service report clearance' },
  ];

  const getStepStatus = (stepKey: string, currentStatus: string) => {
    const order = ['New', 'Assigned', 'In Progress', 'Completed'];
    const currentIndex = order.indexOf(currentStatus);
    const stepIndex = order.indexOf(stepKey);
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'current';
    return 'pending';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#0A3871] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-400/20 text-sky-200 text-xs font-bold mb-2">
            <Search className="w-3.5 h-3.5" />
            <span>Real-Time Service Tracker</span>
          </div>

          <h3 className="text-2xl font-extrabold text-white">
            Track Biomedical Service Ticket
          </h3>
          <p className="text-sky-100 text-xs mt-1">
            Enter your unique CPMS tracking code (e.g. CPMS-2026-00124) to monitor diagnostic and repair status.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Search Input Box */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Enter Enquiry ID (e.g. CPMS-2026-XXXXX)"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] text-xs font-mono font-bold uppercase"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#0A3871] text-white text-xs font-bold rounded-xl hover:bg-[#07254c] transition-colors cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Quick Demo ID helper if user hasn't created one yet */}
          {requests.length > 0 && !foundRequest && !searched && (
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 text-xs text-slate-600">
              <span className="font-bold text-[#0A3871]">Recent Active Requests: </span>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {requests.slice(0, 3).map((r) => (
                  <button
                    key={r.id}
                    onClick={() => {
                      setSearchId(r.id);
                      handleSearchWithId(r.id);
                    }}
                    className="px-2 py-0.5 rounded bg-white border border-sky-200 text-[#0A3871] font-mono text-[11px] font-bold hover:bg-sky-100 cursor-pointer"
                  >
                    {r.id} ({r.equipmentName})
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result View */}
          {searched && (
            <div>
              {foundRequest ? (
                <div className="space-y-6 animate-in fade-in duration-300">
                  {/* Status Banner */}
                  <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Tracking Reference:
                      </div>
                      <div className="text-lg font-mono font-black text-[#0A3871]">
                        {foundRequest.id}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-600 font-semibold">Current Status:</span>
                      <span className="px-3 py-1 rounded-full bg-[#0A3871] text-white text-xs font-bold">
                        {foundRequest.status}
                      </span>
                    </div>
                  </div>

                  {/* 4-Step Visual Progress Bar */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold text-slate-700">
                      Service Lifecycle Status:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                      {workflowSteps.map((step) => {
                        const status = getStepStatus(step.key, foundRequest.status);
                        return (
                          <div
                            key={step.key}
                            className={`p-3 rounded-xl border text-xs ${
                              status === 'completed'
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                                : status === 'current'
                                ? 'bg-sky-50 border-[#0A3871] ring-1 ring-[#0A3871] text-[#0A3871] font-bold'
                                : 'bg-slate-50 border-slate-200 text-slate-400'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span>{step.label}</span>
                              {status === 'completed' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                              {status === 'current' && <Clock className="w-3.5 h-3.5 text-[#0A3871] animate-spin" />}
                            </div>
                            <div className="text-[10px] font-normal leading-tight opacity-80">
                              {step.desc}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Equipment & Ticket Details */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                      <div><strong>Hospital/Facility:</strong> {foundRequest.organizationName}</div>
                      <div><strong>Contact:</strong> {foundRequest.fullName} ({foundRequest.phone})</div>
                      <div><strong>Equipment:</strong> {foundRequest.equipmentName}</div>
                      <div><strong>Service Type:</strong> {foundRequest.serviceType}</div>
                      <div><strong>Urgency:</strong> <span className="font-bold text-red-600">{foundRequest.urgency}</span></div>
                      <div><strong>Location:</strong> {foundRequest.city}</div>
                    </div>
                    <div className="pt-2 border-t border-slate-200 text-slate-600">
                      <strong>Reported Issue:</strong> {foundRequest.problemDescription}
                    </div>
                  </div>

                  {/* Direct Contact Hotline */}
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between text-xs">
                    <span className="text-amber-900 font-medium">
                      Need immediate updates on this ticket?
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phone}`}
                      className="font-bold text-[#0A3871] hover:underline flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                  <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-slate-800">
                    No active record found for "{searchId}"
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 mb-4">
                    Please double-check your CPMS reference ID or contact our desk directly.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onRequestService();
                    }}
                    className="px-4 py-2 bg-[#0A3871] text-white text-xs font-bold rounded-xl hover:bg-[#07254c] cursor-pointer"
                  >
                    Raise a New Service Request
                  </button>
                </div>
              )}
            </div>
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
