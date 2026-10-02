import React from 'react';
import { Logo } from '../common/Logo';
import { EcgLine } from '../common/EcgLine';
import { COMPANY_INFO } from '../../data/companyData';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ArrowUp,
  Heart
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onRequestService: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onRequestService,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071933] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Emergency CTA Strip inside Footer */}
        <div className="bg-gradient-to-r from-[#0A3871] via-[#0F4C81] to-[#0A3871] rounded-3xl p-6 md:p-8 mb-16 border border-blue-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none">
            <EcgLine height={160} color="#38bdf8" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
                Emergency Hospital Service Desk
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Medical Equipment Breakdown? Need Urgent Technical Support?
              </h3>
              <p className="text-sky-200 text-sm mt-1">
                Reach out immediately to our biomedical engineers. Direct hotline: <strong className="text-white">{COMPANY_INFO.contact.phoneFormatted}</strong>
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-base shadow-lg transition-all transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>Call: {COMPANY_INFO.contact.phone}</span>
              </a>
              <button
                onClick={onRequestService}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-all backdrop-blur-sm cursor-pointer"
              >
                <span>Request Urgent Support</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="bg-white/95 rounded-2xl p-2.5 inline-block shadow-md">
              <Logo size="md" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-xs text-slate-400">
              Professional biomedical engineering company dedicated to medical equipment repair, preventive maintenance, calibration, installation, and AMC/CMC support for healthcare institutions.
            </p>

            <div className="pt-2 border-t border-slate-800">
              <div className="text-xs text-sky-300 font-semibold">Founder:</div>
              <div className="text-sm font-bold text-white">{COMPANY_INFO.founder.name}</div>
              <div className="text-xs text-slate-400">{COMPANY_INFO.founder.title}</div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Standardized Biomedical Safety Protocols</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>Quick Links</span>
              <span className="w-8 h-0.5 bg-[#0284c7]"></span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About CP Medical System+' },
                { id: 'services', label: 'All Services (10)' },
                { id: 'equipment', label: 'Equipment We Service' },
                { id: 'amc-cmc', label: 'AMC & CMC Contracts' },
                { id: 'calibration', label: 'Calibration & Testing' },
                { id: 'spare-parts', label: 'Genuine Spare Parts' },
                { id: 'process', label: '8-Step Service Workflow' },
                { id: 'industries', label: 'Industries We Serve' },
                { id: 'gallery', label: 'Biomedical Photo Gallery' },
                { id: 'contact', label: 'Contact Us & Location' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1.5 text-slate-400 cursor-pointer text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>Our Services</span>
              <span className="w-8 h-0.5 bg-red-500"></span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                'Breakdown Repair',
                'Preventive Maintenance (PM)',
                'Corrective Maintenance',
                'Installation & Commissioning',
                'Calibration & Performance Testing',
                'Service Report & Documentation',
                'Technical Support (24×7)',
                'Spare Parts Replacement',
                'On-Site Hospital Service',
                'Equipment Safety Testing'
              ].map((serviceName, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1.5 text-slate-400 cursor-pointer text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>{serviceName}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>Contact Details</span>
              <span className="w-8 h-0.5 bg-emerald-500"></span>
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Registered Workshop & Office:</div>
                  <div className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                    {COMPANY_INFO.contact.address}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Direct Phone:</div>
                  <a
                    href={`tel:${COMPANY_INFO.contact.phone}`}
                    className="text-sky-300 font-bold hover:underline"
                  >
                    {COMPANY_INFO.contact.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Operational Timings:</div>
                  <div className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                    {COMPANY_INFO.contact.businessHours}
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <div className="text-xs font-semibold text-slate-300 mb-1.5">Areas Covered:</div>
                <div className="flex flex-wrap gap-1.5">
                  {['Muzaffarnagar', 'Meerut', 'Saharanpur', 'Shamli', 'Haridwar', 'Dehradun', 'Delhi NCR'].map((city, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-800/80 text-[11px] text-slate-300 border border-slate-700/60"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">CP MEDICAL SYSTEM+</strong>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
