import React, { useState } from 'react';
import { ServiceRequest } from '../../types';
import { COMPANY_INFO } from '../../data/companyData';
import {
  Wrench,
  CheckCircle2,
  AlertCircle,
  FileText,
  Upload,
  Calendar,
  Phone,
  Clock,
  Sparkles,
  Copy,
  Printer,
  ChevronRight,
  ShieldCheck,
  Building,
  User,
  MapPin,
  Image as ImageIcon
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ServiceRequestFormProps {
  initialService?: string;
  initialEquipment?: string;
  initialCategory?: string;
  onSaveRequest: (request: ServiceRequest) => void;
  onTrackId: (id: string) => void;
}

export const ServiceRequestForm: React.FC<ServiceRequestFormProps> = ({
  initialService = '',
  initialEquipment = '',
  initialCategory = '',
  onSaveRequest,
  onTrackId,
}) => {
  const [fullName, setFullName] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [serviceType, setServiceType] = useState(initialService || 'Breakdown Repair');
  const [equipmentCategory, setEquipmentCategory] = useState(initialCategory || 'ICU & Critical Care');
  const [equipmentName, setEquipmentName] = useState(initialEquipment || '');
  const [brand, setBrand] = useState('');
  const [modelNumber, setModelNumber] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [urgency, setUrgency] = useState<'Normal' | 'Priority' | 'Urgent'>('Priority');
  const [preferredDate, setPreferredDate] = useState('');
  const [multipleEquipment, setMultipleEquipment] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  
  const [submittedRequest, setSubmittedRequest] = useState<ServiceRequest | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync if initial props change
  React.useEffect(() => {
    if (initialService) setServiceType(initialService);
  }, [initialService]);

  React.useEffect(() => {
    if (initialEquipment) setEquipmentName(initialEquipment);
  }, [initialEquipment]);

  React.useEffect(() => {
    if (initialCategory) setEquipmentCategory(initialCategory);
  }, [initialCategory]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFiles(prev => [...prev, file.name]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !organizationName || !phone || !city || !equipmentName || !problemDescription) {
      alert('Please fill all mandatory fields marked with (*)');
      return;
    }

    // Generate unique ID in exact format specified: CPMS-2026-XXXXX
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const newId = `CPMS-2026-${randomNum}`;

    const newRequest: ServiceRequest = {
      id: newId,
      createdAt: new Date().toISOString(),
      fullName,
      organizationName,
      phone,
      whatsapp: whatsapp || phone,
      email,
      city,
      address,
      serviceType,
      equipmentCategory,
      equipmentName,
      brand,
      modelNumber,
      serialNumber,
      problemDescription,
      urgency,
      preferredDate,
      multipleEquipment,
      status: 'New',
    };

    onSaveRequest(newRequest);
    setSubmittedRequest(newRequest);
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
  };

  const copyTicketId = () => {
    if (!submittedRequest) return;
    navigator.clipboard.writeText(submittedRequest.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const printReceipt = () => {
    window.print();
  };

  const resetForm = () => {
    setSubmittedRequest(null);
    setFullName('');
    setOrganizationName('');
    setPhone('');
    setWhatsapp('');
    setEmail('');
    setCity('');
    setAddress('');
    setEquipmentName('');
    setBrand('');
    setModelNumber('');
    setSerialNumber('');
    setProblemDescription('');
    setMultipleEquipment(false);
    setUploadedFiles([]);
  };

  return (
    <section id="enquiry" className="py-20 bg-slate-100/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0A3871] text-xs font-bold border border-blue-200 mb-3">
            <Wrench className="w-4 h-4 text-[#0284c7]" />
            <span>ONLINE SERVICE DESK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1528] tracking-tight">
            Request Medical Equipment Service
          </h2>

          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Submit your equipment repair or maintenance request. A qualified biomedical engineer will review your issue and schedule an on-site visit.
          </p>
        </div>

        {/* Confirmation Screen on Successful Submission */}
        {submittedRequest ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-emerald-400 shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="text-center max-w-2xl mx-auto space-y-5">
              <div className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold border border-emerald-300">
                  Request Confirmed
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Thank you. Your service request has been received.
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Our biomedical engineering team will contact you shortly on <strong>{submittedRequest.phone}</strong>.
                </p>
              </div>

              {/* Unique ID Highlight Box */}
              <div className="p-6 rounded-2xl bg-sky-50 border-2 border-sky-200 text-center space-y-2">
                <div className="text-xs uppercase tracking-wider font-extrabold text-[#0A3871]">
                  Official Enquiry Reference ID
                </div>
                <div className="text-3xl font-mono font-black text-[#0A3871] tracking-wider">
                  {submittedRequest.id}
                </div>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={copyTicketId}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold border border-slate-300 shadow-2xs transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Reference ID'}</span>
                  </button>
                  <button
                    onClick={printReceipt}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold border border-slate-300 shadow-2xs transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Receipt</span>
                  </button>
                </div>
              </div>

              {/* Summary Details */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left text-xs space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                  <div><strong>Healthcare Facility:</strong> {submittedRequest.organizationName}</div>
                  <div><strong>Contact Person:</strong> {submittedRequest.fullName}</div>
                  <div><strong>Equipment Name:</strong> {submittedRequest.equipmentName}</div>
                  <div><strong>Service Required:</strong> {submittedRequest.serviceType}</div>
                  <div><strong>Urgency Level:</strong> <span className="font-bold text-red-600">{submittedRequest.urgency}</span></div>
                  <div><strong>Location:</strong> {submittedRequest.city}</div>
                </div>
                <div className="pt-2 border-t border-slate-200 text-slate-600">
                  <strong>Issue Description:</strong> {submittedRequest.problemDescription}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => onTrackId(submittedRequest.id)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0A3871] text-white text-xs font-bold hover:bg-[#07254c] transition-all cursor-pointer shadow-md"
                >
                  Track Request Status in Real-Time
                </button>
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-300 transition-all cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>

            </div>
          </div>
        ) : (
          /* Form Screen */
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Hospital & Contact Information */}
              <div>
                <h3 className="text-base font-extrabold text-[#0A3871] pb-2 border-b border-slate-200 flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#0284c7]" />
                  <span>1. Healthcare Facility &amp; Contact Details</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma / Mr. Vikas"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Hospital / Clinic / Lab Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Multi-Speciality Hospital"
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Phone Number *
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
                      WhatsApp Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 7417846881"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. biomedical@hospital.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      City / District *
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
                </div>

                <div className="mt-4">
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Full Hospital Address / Department Location (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2nd Floor ICU Ward, Near Main Gate, Meerut Road"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                  />
                </div>
              </div>

              {/* Step 2: Service & Equipment Information */}
              <div className="pt-4">
                <h3 className="text-base font-extrabold text-[#0A3871] pb-2 border-b border-slate-200 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#0284c7]" />
                  <span>2. Service Type &amp; Equipment Specifications</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Service Required *
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    >
                      <option value="Breakdown Repair">Breakdown Repair (Emergency)</option>
                      <option value="Preventive Maintenance (PM)">Preventive Maintenance (PPM)</option>
                      <option value="Corrective Maintenance">Corrective Maintenance</option>
                      <option value="Installation & Commissioning">Installation &amp; Commissioning</option>
                      <option value="Calibration & Performance Testing">Calibration &amp; Performance Testing</option>
                      <option value="AMC Proposal">Annual Maintenance Contract (AMC)</option>
                      <option value="CMC Proposal">Comprehensive Contract (CMC)</option>
                      <option value="Spare Parts Replacement">Spare Parts Replacement</option>
                      <option value="Equipment Safety Inspection">Equipment Safety Inspection</option>
                      <option value="Other Technical Support">Other Technical Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Equipment Category *
                    </label>
                    <select
                      value={equipmentCategory}
                      onChange={(e) => setEquipmentCategory(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    >
                      <option value="ICU & Critical Care">ICU &amp; Critical Care</option>
                      <option value="OT Equipment">OT Equipment (Operation Theatre)</option>
                      <option value="Laboratory & Pathology">Laboratory &amp; Pathology</option>
                      <option value="Diagnostic Equipment">Diagnostic Equipment</option>
                      <option value="Sterilization Equipment">Sterilization &amp; CSSD</option>
                      <option value="Other Biomedical Equipment">Other Biomedical Equipment</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Equipment / Machine Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Patient Monitor / Ventilator / ECG"
                      value={equipmentName}
                      onChange={(e) => setEquipmentName(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Brand / Manufacturer (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Philips, Mindray, BPL, GE, Schiller..."
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Model Number (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. IntelliVue MX450 / BeneView T5"
                      value={modelNumber}
                      onChange={(e) => setModelNumber(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Serial Number (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. SN-883492"
                      value={serialNumber}
                      onChange={(e) => setSerialNumber(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Issue Description & Urgency */}
              <div className="pt-4">
                <h3 className="text-base font-extrabold text-[#0A3871] pb-2 border-b border-slate-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#0284c7]" />
                  <span>3. Problem Symptoms &amp; Urgency Level</span>
                </h3>

                <div className="space-y-4 mt-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Problem Description / Error Code / Symptoms *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Please describe the machine behavior, error messages on screen, unusual noise, power trip, or calibration drift..."
                      value={problemDescription}
                      onChange={(e) => setProblemDescription(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    ></textarea>
                  </div>

                  {/* Urgency Selector */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Service Urgency Level:
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { level: 'Normal', desc: 'Routine / Non-emergency', color: 'hover:border-slate-400' },
                        { level: 'Priority', desc: 'Required within 24 Hours', color: 'hover:border-amber-400' },
                        { level: 'Urgent', desc: 'Critical ICU/OT breakdown', color: 'hover:border-red-400' },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.level}
                          onClick={() => setUrgency(item.level as any)}
                          className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                            urgency === item.level
                              ? item.level === 'Urgent'
                                ? 'bg-red-50 border-red-500 ring-2 ring-red-400/20 text-red-900 font-bold'
                                : 'bg-sky-50 border-[#0A3871] ring-2 ring-[#0A3871]/20 text-[#0A3871] font-bold'
                              : `bg-slate-50 border-slate-200 text-slate-700 ${item.color}`
                          }`}
                        >
                          <div className="text-xs font-extrabold flex items-center justify-between">
                            <span>{item.level}</span>
                            {urgency === item.level && (
                              <span className="w-2 h-2 rounded-full bg-current"></span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-500 font-normal mt-0.5">
                            {item.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Date & Upload */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Preferred Engineer Visit Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Upload Equipment / Error Photo (Optional)
                      </label>
                      <div className="flex items-center gap-2">
                        <label className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-semibold cursor-pointer transition-colors">
                          <Upload className="w-4 h-4 text-[#0284c7]" />
                          <span>Choose Photo / Report</span>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                      {uploadedFiles.length > 0 && (
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {uploadedFiles.map((f, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200 flex items-center gap-1">
                              <ImageIcon className="w-3 h-3 text-emerald-600" />
                              {f}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Multiple Equipment Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={multipleEquipment}
                        onChange={(e) => setMultipleEquipment(e.target.checked)}
                        className="w-4 h-4 rounded text-[#0A3871] focus:ring-[#0A3871] border-slate-300"
                      />
                      <span className="text-xs font-bold text-slate-800">
                        I have multiple medical equipment requiring service / PPM inspection
                      </span>
                    </label>
                  </div>

                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-200">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#0A3871] via-[#0F4C81] to-[#0284c7] hover:from-[#07254c] hover:to-[#0369a1] text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Wrench className="w-5 h-5" />
                  <span>Submit Service Request</span>
                </button>
                <div className="text-center text-[11px] text-slate-500 mt-2">
                  🔒 Your information is confidential and will only be used by CP Medical System+ engineering team.
                </div>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};
