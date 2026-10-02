import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import {
  Layers,
  Cpu,
  Activity,
  CheckCircle2,
  ShieldCheck,
  Search,
  Wrench,
  ChevronRight,
  PackageCheck,
  Phone
} from 'lucide-react';

interface SparePartsSectionProps {
  onRequestSpareParts: (partCategory?: string) => void;
}

export const SparePartsSection: React.FC<SparePartsSectionProps> = ({ onRequestSpareParts }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const partCategories = [
    {
      id: 'boards-power',
      name: 'Power Boards & Motherboards',
      icon: Cpu,
      description: 'Medical SMPS power supplies, CPU motherboards, parameter boards, inverter boards, and display driver modules.',
      items: ['Patient Monitor SMPS', 'Ventilator Power Boards', 'Cautery Generator MOSFETs', 'Defibrillator HV Boards', 'Display Scaler PCBs'],
    },
    {
      id: 'sensors-probes',
      name: 'Sensors, Probes & Cuffs',
      icon: Activity,
      description: 'Adult, pediatric, and neonatal monitoring sensors, optical probes, and blood pressure accessories.',
      items: ['SpO2 Reusable / Disposable Probes', 'NIBP Cuffs (All Sizes) & Hoses', 'O2 Oxygen Sensor Cells', 'Skin / Rectal Temp Probes', 'Ultrasonic Flow Sensors'],
    },
    {
      id: 'cables-leads',
      name: 'Patient Cables & Leads',
      icon: Layers,
      description: 'Shielded high-flex patient trunk cables, snap/clip leads, paddle cables, and surgical pencils.',
      items: ['10-Lead & 5-Lead ECG Cables', 'Defibrillator External Paddles', 'Monopolar & Bipolar Cautery Pencils', 'Patient Grounding Return Plates', 'Ultrasound Probe Strain Reliefs'],
    },
    {
      id: 'pneumatics-valves',
      name: 'Pneumatics & Solenoid Valves',
      icon: Wrench,
      description: 'Pneumatic valves, diaphragm pumps, suction motors, and breathing circuit connectors.',
      items: ['NIBP Miniature Air Pumps', 'Solenoid Air Valves (2-Way/3-Way)', 'Expiratory Diaphragm Valves', 'Suction Machine Diaphragms', 'Vacuum Regulators & Gauges'],
    },
    {
      id: 'heating-gaskets',
      name: 'Heating Elements & Gaskets',
      icon: PackageCheck,
      description: 'High-temperature industrial silicone gaskets, immersion heaters, and pressure relief components for autoclaves.',
      items: ['Autoclave Immersion Heaters (2kW-9kW)', 'High-Temp Silicone Lid Gaskets', 'Safety Relief Pop Valves (15-30 PSI)', 'Water Level Sensing Probes', 'Steam Solenoids'],
    },
    {
      id: 'optical-lamps',
      name: 'Optical Lamps & Lab Spares',
      icon: Search,
      description: 'High-precision optical components, halogen lamps, flowcells, and laboratory consumables.',
      items: ['Biochemistry Halogen Lamps (6V/10W, 12V/20W)', 'Quartz Flowcells & Tubing', 'Microscope Halogen / LED Bulbs', 'Centrifuge Motor Bearings & Brushes', 'Aperture Ruby Orifices'],
    },
  ];

  const displayedCategories = activeTab === 'all'
    ? partCategories
    : partCategories.filter(c => c.id === activeTab);

  return (
    <section id="spare-parts" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold border border-indigo-200 mb-3">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>GENUINE REPLACEMENT INVENTORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1528] tracking-tight">
            Biomedical Spare Parts &amp; Accessories
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            We source and supply tested OEM and high-grade biomedical replacement parts to restore faulty hospital equipment with dependable performance.
          </p>
        </div>

        {/* Hero Feature Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
                100% Quality &amp; Compatibility Tested
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Why Genuine Biomedical Spares Matter
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Using unverified electronic components or mismatched sensor resistances can cause erroneous vital sign readings or premature board burn-out. At CP Medical System+, every spare part undergoes strict resistance, impedance, and functional testing prior to installation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Exact OEM Pinout &amp; Voltage Compatibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Post-Replacement Stress &amp; Calibration Test</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Warranty on Replaced Functional Spares</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Transparent Itemized Billing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md group">
                <img
                  src="images/biomedical_pcb_repair.jpg"
                  alt="Biomedical PCB and Spare Parts Testing"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white">
                    Precision Electronic Repair &amp; Micro-Soldering Lab
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#0A3871] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            All Spare Categories
          </button>
          {partCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#0A3871] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 6 Spare Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-base text-slate-900 leading-snug">
                      {cat.name}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-6">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Popular Items:
                    </div>
                    {cat.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="text-xs text-slate-700 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onRequestSpareParts(cat.name)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#0A3871] text-slate-800 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Inquire for {cat.name}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Inquire Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-[#0A3871] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl font-bold">
              Looking for a rare or specific medical device component?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Send us the part number, equipment brand/model, or photograph on WhatsApp for instant stock and availability verification.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onRequestSpareParts('Custom Spare Part')}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              Submit Spare Part Request
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
