import React, { useState, useEffect } from 'react';
import { Logo } from '../common/Logo';
import { COMPANY_INFO } from '../../data/companyData';
import {
  Phone,
  Wrench,
  Menu,
  X,
  Search,
  FileCheck,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  ChevronDown,
  LayoutDashboard
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onRequestService: () => void;
  onOpenTracker: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onRequestService,
  onOpenTracker,
  onOpenAdmin,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'equipment', label: 'Equipment' },
    { id: 'amc-cmc', label: 'AMC / CMC' },
    { id: 'calibration', label: 'Calibration' },
    { id: 'spare-parts', label: 'Spare Parts' },
    { id: 'process', label: 'Our Process' },
    { id: 'industries', label: 'Industries' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <>
      {/* Top Notification / Emergency Hotline Bar */}
      <div className="bg-[#0A3871] text-white text-xs py-1.5 px-4 border-b border-blue-900/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sky-200 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              24×7 Biomedical Breakdown Support Available
            </span>
            <span className="text-slate-300 hidden lg:inline">
              📍 {COMPANY_INFO.contact.address}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTracker}
              className="text-sky-200 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Track Request</span>
            </button>
            <span className="text-blue-400">|</span>
            <button
              onClick={onOpenAdmin}
              className="text-sky-200 hover:text-white flex items-center gap-1 transition-colors cursor-pointer text-[11px]"
              title="Service Management System"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Admin Portal</span>
            </button>
            <span className="text-blue-400">|</span>
            <a
              href={`tel:${COMPANY_INFO.contact.phone}`}
              className="font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>Direct Hotline: {COMPANY_INFO.contact.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-md py-2.5 border-b border-slate-200/80'
            : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center text-left focus:outline-none group cursor-pointer"
          >
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-[#0A3871] bg-sky-50 shadow-xs font-bold'
                    : 'text-slate-700 hover:text-[#0A3871] hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Call Button */}
            <a
              href={`tel:${COMPANY_INFO.contact.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-bold text-[#0A3871] bg-sky-50 hover:bg-sky-100 border border-sky-200/70 transition-all shadow-xs group"
            >
              <Phone className="w-4 h-4 text-[#0A3871] group-hover:rotate-12 transition-transform" />
              <span className="hidden md:inline">Call Now:</span>
              <span>{COMPANY_INFO.contact.phone}</span>
            </a>

            {/* Request Service Prominent CTA */}
            <button
              onClick={onRequestService}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0A3871] to-[#0284c7] hover:from-[#07254c] hover:to-[#0369a1] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Wrench className="w-4 h-4" />
              <span>Request Service</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onRequestService}
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#0A3871] shadow-xs cursor-pointer"
            >
              Request Service
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/98 backdrop-blur-xl border-t border-slate-200 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-3 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
              <div className="p-3 bg-sky-50/80 rounded-xl mb-3 flex items-center justify-between border border-sky-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-xs font-bold text-[#0A3871]">Biomedical Desk: Active</span>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="text-xs font-bold text-red-600 flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                    activeSection === link.id
                      ? 'text-[#0A3871] bg-sky-100/70 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <span className="w-2 h-2 rounded-full bg-[#0A3871]"></span>
                  )}
                </button>
              ))}

              <div className="pt-4 border-t border-slate-200 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTracker();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4 text-slate-600" />
                  <span>Track Service Request (CPMS ID)</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 flex items-center justify-center gap-2 cursor-pointer border border-slate-200"
                >
                  <LayoutDashboard className="w-4 h-4 text-slate-500" />
                  <span>Admin Service Dashboard Preview</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRequestService();
                  }}
                  className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0A3871] to-[#0284c7] shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Request Medical Equipment Service</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
