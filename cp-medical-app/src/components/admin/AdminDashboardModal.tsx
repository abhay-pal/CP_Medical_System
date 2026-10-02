import React, { useState } from 'react';
import { ServiceRequest } from '../../types';
import {
  X,
  LayoutDashboard,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertTriangle,
  UserCheck,
  Download,
  Trash2,
  RefreshCw,
  Layers,
  Wrench,
  Building,
  Phone,
  Eye,
  Plus
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  requests: ServiceRequest[];
  onUpdateRequestStatus: (id: string, newStatus: ServiceRequest['status'], engineer?: string) => void;
  onDeleteRequest: (id: string) => void;
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose,
  requests,
  onUpdateRequestStatus,
  onDeleteRequest,
}) => {
  const [activeTab, setActiveTab] = useState<'requests' | 'stats' | 'engineers'>('requests');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(null);

  if (!isOpen) return null;

  const filteredRequests = requests.filter((r) => {
    const matchesStatus = statusFilter === 'all' || r.status === statusFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      r.id.toLowerCase().includes(q) ||
      r.organizationName.toLowerCase().includes(q) ||
      r.fullName.toLowerCase().includes(q) ||
      r.equipmentName.toLowerCase().includes(q) ||
      r.city.toLowerCase().includes(q) ||
      r.phone.includes(q);
    return matchesStatus && matchesSearch;
  });

  const exportCSV = () => {
    const headers = ['ID,Date,Hospital,Contact,Phone,City,Service,Equipment,Urgency,Status,Engineer\n'];
    const rows = requests.map(r =>
      `"${r.id}","${r.createdAt}","${r.organizationName}","${r.fullName}","${r.phone}","${r.city}","${r.serviceType}","${r.equipmentName}","${r.urgency}","${r.status}","${r.assignedEngineer || 'Unassigned'}"\n`
    );
    const blob = new Blob([...headers, ...rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CPMS_Service_Requests_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  const newCount = requests.filter(r => r.status === 'New').length;
  const inProgressCount = requests.filter(r => r.status === 'In Progress').length;
  const completedCount = requests.filter(r => r.status === 'Completed').length;
  const urgentCount = requests.filter(r => r.urgency === 'Urgent').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden h-[90vh] flex flex-col">
        
        {/* Top Header */}
        <div className="bg-[#0A3871] text-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-blue-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/20 text-sky-300 flex items-center justify-center border border-sky-400/30">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-white">
                  CP Medical Service Management Portal
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 text-[10px] font-bold border border-emerald-400/30">
                  Live Admin
                </span>
              </div>
              <p className="text-xs text-sky-200 mt-0.5">
                Biomedical Ticketing, On-Site Engineer Dispatch &amp; Workflow System
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportCSV}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="bg-slate-100 p-4 border-b border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <div className="text-slate-500 font-semibold">New Unassigned</div>
            <div className="text-xl font-bold text-[#0A3871]">{newCount}</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <div className="text-slate-500 font-semibold">In Progress / Field</div>
            <div className="text-xl font-bold text-sky-600">{inProgressCount}</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <div className="text-slate-500 font-semibold">Completed &amp; Signed</div>
            <div className="text-xl font-bold text-emerald-600">{completedCount}</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <div className="text-slate-500 font-semibold">Critical / Urgent</div>
            <div className="text-xl font-bold text-red-600">{urgentCount}</div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search hospital, ID, equipment, phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0A3871]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto text-xs font-bold">
            {['all', 'New', 'Assigned', 'In Progress', 'Completed'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  statusFilter === st
                    ? 'bg-[#0A3871] text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {st === 'all' ? 'All Tickets' : st}
              </button>
            ))}
          </div>
        </div>

        {/* Requests Table */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase text-[10px] font-bold bg-slate-50">
                  <th className="py-2.5 px-3">Ticket ID</th>
                  <th className="py-2.5 px-3">Hospital / Facility</th>
                  <th className="py-2.5 px-3">Equipment</th>
                  <th className="py-2.5 px-3">Service</th>
                  <th className="py-2.5 px-3">Urgency</th>
                  <th className="py-2.5 px-3">Assigned To</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-sky-50/50 transition-colors">
                    <td className="py-3 px-3 font-mono font-bold text-[#0A3871]">
                      {req.id}
                    </td>
                    <td className="py-3 px-3">
                      <div className="font-bold text-slate-900">{req.organizationName}</div>
                      <div className="text-[11px] text-slate-500">{req.fullName} • {req.city}</div>
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-800">
                      {req.equipmentName}
                    </td>
                    <td className="py-3 px-3 text-slate-600">
                      {req.serviceType}
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                          req.urgency === 'Urgent'
                            ? 'bg-red-100 text-red-800'
                            : req.urgency === 'Priority'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {req.urgency}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-700">
                      {req.assignedEngineer || (
                        <span className="text-slate-400 italic">Unassigned</span>
                      )}
                    </td>
                    <td className="py-3 px-3">
                      <select
                        value={req.status}
                        onChange={(e) =>
                          onUpdateRequestStatus(req.id, e.target.value as any, req.assignedEngineer || 'Er. Vikul Pal')
                        }
                        className={`text-[11px] font-bold px-2 py-1 rounded-lg border focus:outline-none ${
                          req.status === 'Completed'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                            : req.status === 'In Progress'
                            ? 'bg-sky-50 text-[#0A3871] border-sky-300'
                            : req.status === 'Assigned'
                            ? 'bg-indigo-50 text-indigo-800 border-indigo-300'
                            : 'bg-amber-50 text-amber-800 border-amber-300'
                        }`}
                      >
                        <option value="New">New Request</option>
                        <option value="Assigned">Assigned</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => setSelectedRequest(req)}
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
                          title="View Details"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onDeleteRequest(req.id)}
                          className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600"
                          title="Delete Request"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detail Inspection Modal for selected ticket */}
        {selectedRequest && (
          <div className="absolute inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="font-mono font-bold text-base text-[#0A3871]">
                  Ticket #{selectedRequest.id}
                </div>
                <button
                  onClick={() => setSelectedRequest(null)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-xs space-y-2 text-slate-700">
                <div><strong>Facility:</strong> {selectedRequest.organizationName}</div>
                <div><strong>Contact:</strong> {selectedRequest.fullName} ({selectedRequest.phone})</div>
                <div><strong>Address/City:</strong> {selectedRequest.address || 'N/A'}, {selectedRequest.city}</div>
                <div><strong>Equipment:</strong> {selectedRequest.equipmentName} ({selectedRequest.equipmentCategory})</div>
                <div><strong>Brand / Model:</strong> {selectedRequest.brand || 'N/A'} / {selectedRequest.modelNumber || 'N/A'}</div>
                <div><strong>Serial No:</strong> {selectedRequest.serialNumber || 'N/A'}</div>
                <div><strong>Service:</strong> {selectedRequest.serviceType}</div>
                <div><strong>Reported Problem:</strong> {selectedRequest.problemDescription}</div>
                <div><strong>Urgency:</strong> {selectedRequest.urgency}</div>
                <div><strong>Created At:</strong> {new Date(selectedRequest.createdAt).toLocaleString()}</div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
                <button
                  onClick={() => {
                    onUpdateRequestStatus(selectedRequest.id, 'In Progress', 'Er. Vikul Pal');
                    setSelectedRequest(null);
                  }}
                  className="px-4 py-2 bg-[#0A3871] text-white text-xs font-bold rounded-xl"
                >
                  Assign to Er. Vikul Pal
                </button>
                <button
                  onClick={() => setSelectedRequest(null)}
                  className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-bold rounded-xl"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>CP Medical System+ Biomedical Operations Console</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold cursor-pointer"
          >
            Close Portal
          </button>
        </div>

      </div>
    </div>
  );
};
