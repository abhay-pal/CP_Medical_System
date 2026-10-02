import React from 'react';
import {
  Target,
  ShieldCheck,
  Activity,
  FileCheck2,
  CheckCircle2,
  AlertTriangle,
  Award,
  Zap,
  ArrowRight,
  ChevronRight,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface CalibrationSectionProps {
  onRequestCalibration: () => void;
}

export const CalibrationSection: React.FC<CalibrationSectionProps> = ({ onRequestCalibration }) => {
  const calibrationPillars = [
    {
      title: 'Performance Verification',
      desc: 'Simulating physiological waveforms and electrical loads to test real-world machine response before patient connection.',
      icon: Activity,
    },
    {
      title: 'Accuracy Testing',
      desc: 'Precision verification of delivered joules (Defibrillators), flow rates (Pumps), RF wattage (Cautery), and gas volumes (Ventilators).',
      icon: Target,
    },
    {
      title: 'Electrical Safety Inspection (ESA)',
      desc: 'Chassis and patient lead leakage current measurement to eliminate micro-shock hazards per biomedical standards.',
      icon: Zap,
    },
    {
      title: 'Traceable Documentation',
      desc: 'Itemized calibration test certificates with measured deviation values, pass/fail status, and next audit due dates.',
      icon: FileCheck2,
    },
  ];

  const parameterExamples = [
    {
      device: 'Defibrillator',
      parameters: 'Delivered Energy (Joules 10J–360J), Charge Time, Sync Delay (ms)',
      standard: '±4J or ±15% tolerance per IEC 60601-2-4',
    },
    {
      device: 'Ventilator / Anaesthesia',
      parameters: 'Tidal Volume (ml), FiO2 Oxygen %, PEEP & Peak Inspiratory Pressure',
      standard: 'Flow & Pressure accuracy within clinical tolerances',
    },
    {
      device: 'Syringe & Infusion Pump',
      parameters: 'Flow Delivery Rate (ml/hr), Occlusion Pressure (PSI/mmHg), Air Alarm',
      standard: 'Delivery rate within ±5% of set value',
    },
    {
      device: 'Electrosurgical Unit (ESU)',
      parameters: 'HF Power Output (Watts), Cut/Coag RF waveforms, REM Plate Trip',
      standard: 'RF output power verified across 100Ω–1000Ω loads',
    },
    {
      device: 'Multi-Para Monitor & ECG',
      parameters: '1mV Cal Pulse Amplitude, Heart Rate (BPM), NIBP Pressure Leakage',
      standard: 'Standardized waveform simulation & NIBP transducer check',
    },
  ];

  return (
    <section id="calibration" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold border border-rose-200 mb-3">
            <Target className="w-4 h-4 text-rose-600" />
            <span>PRECISION TESTING &amp; COMPLIANCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1528] tracking-tight">
            Reliable Calibration &amp; Performance Testing
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Medical equipment must deliver precise therapeutic energy and accurate diagnostic readings. Our biomedical calibration verifies safety and audit compliance.
          </p>
        </div>

        {/* Why Calibration Matters Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Column (7 cols): Calibration Explanation & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Why Medical Equipment Calibration Matters
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Over time, internal sensors, pressure transducers, resistors, and optical elements undergo drift due to temperature cycles, electrical aging, and mechanical wear. An uncalibrated defibrillator might deliver insufficient shock energy, while an uncalibrated ventilator can over-pressurize fragile lungs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Protects patient safety during critical care</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fulfills hospital NABH &amp; NABL audit standards</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Prevents misdiagnosis and medical errors</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Lowers hospital liability and legal risk</span>
                </div>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {calibrationPillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 hover:border-sky-300 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-sky-100 text-[#0A3871] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{p.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (5 cols): Photorealistic Calibration Image Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src="images/calibration_lab.jpg"
                alt="Biomedical Equipment Calibration Workstation"
                className="w-full h-[360px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent p-6 text-white">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
                  On-Site &amp; Lab Testing
                </span>
                <h4 className="text-lg font-bold">Biomedical Test Analyzers &amp; Simulators</h4>
                <p className="text-xs text-slate-300 mt-1">
                  We use calibrated reference instruments to test electrical parameters, flow rates, and output joules.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Parameters Tested Table / Breakdown */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
            Critical Parameters Tested &amp; Certified
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase text-[11px] font-bold">
                  <th className="py-2.5 px-3">Equipment Class</th>
                  <th className="py-2.5 px-3">Calibration Parameters Verified</th>
                  <th className="py-2.5 px-3">Clinical Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80">
                {parameterExamples.map((param, idx) => (
                  <tr key={idx} className="hover:bg-white/80 transition-colors">
                    <td className="py-3 px-3 font-bold text-[#0A3871]">
                      {param.device}
                    </td>
                    <td className="py-3 px-3 text-slate-700">
                      {param.parameters}
                    </td>
                    <td className="py-3 px-3 text-slate-500 text-xs">
                      {param.standard}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="bg-gradient-to-r from-[#0A3871] via-[#0F4C81] to-[#0A3871] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-bold">
              Schedule Calibration &amp; Electrical Safety Testing
            </h4>
            <p className="text-xs sm:text-sm text-sky-200 mt-1">
              On-site calibration visits scheduled at hospital convenience with minimal clinical disruption.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.contact.phone}`}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: {COMPANY_INFO.contact.phone}</span>
            </a>
            <button
              onClick={onRequestCalibration}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Target className="w-4 h-4" />
              <span>Request Calibration Visit</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
