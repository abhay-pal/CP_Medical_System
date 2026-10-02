import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Send,
  Navigation,
  CheckCircle2,
  Building,
  User,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onRequestService: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRequestService }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      alert('Please fill Name, Phone, and Message.');
      return;
    }
    setSent(true);
    confetti({ particleCount: 60, spread: 50, origin: { y: 0.8 } });
  };

  const getDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Janakpuri, Muzaffarnagar, Uttar Pradesh 251001'
  )}`;

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent(
    `Hello Er. Vikul Pal (CP Medical System+),\nI want to get in touch regarding biomedical equipment service.`
  )}`;

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0A3871] text-xs font-bold border border-blue-200 mb-3">
            <MapPin className="w-4 h-4 text-[#0284c7]" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1528] tracking-tight">
            Contact CP Medical System+
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Need equipment servicing, emergency breakdown support, or an AMC/CMC contract consultation? Our engineering team is here to assist you.
          </p>
        </div>

        {/* 2 Column Layout: Left Contact Info Cards & Map, Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (5 cols): Official Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Card */}
            <div className="bg-gradient-to-br from-[#0A3871] to-[#07254c] text-white rounded-3xl p-7 border border-blue-900 shadow-xl space-y-6">
              <div>
                <span className="text-[11px] font-bold text-sky-300 uppercase tracking-wider">
                  Biomedical Service Center
                </span>
                <h3 className="text-2xl font-black text-white mt-0.5">
                  CP MEDICAL SYSTEM+
                </h3>
                <div className="text-xs text-sky-200 mt-1">
                  Founder: <strong className="text-white">{COMPANY_INFO.founder.name}</strong> ({COMPANY_INFO.founder.title})
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-blue-800 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-red-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sky-300 text-xs font-semibold">Service Workshop Address:</div>
                    <div className="text-white font-medium mt-0.5 leading-relaxed">
                      {COMPANY_INFO.contact.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sky-300 text-xs font-semibold">Direct Engineering Line:</div>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phone}`}
                      className="text-lg font-bold text-amber-300 hover:text-amber-200"
                    >
                      {COMPANY_INFO.contact.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sky-300 text-xs font-semibold">Working Hours:</div>
                    <div className="text-slate-200 text-xs mt-0.5 leading-relaxed">
                      {COMPANY_INFO.contact.businessHours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs border border-white/20 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={getDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-sky-200 font-semibold text-xs border border-white/10 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions (Google Maps)</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed / Interactive Location Map */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>Janakpuri, Muzaffarnagar Map Location</span>
                </span>
                <span className="text-slate-500 text-[11px]">Pin: 251001</span>
              </div>
              <div className="h-56 w-full relative">
                <iframe
                  title="CP Medical System Location Map"
                  src="https://maps.google.com/maps?q=Janakpuri%20Muzaffarnagar%20Uttar%20Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
              <div className="mb-6">
                <span className="px-3 py-1 rounded-full bg-sky-100 text-[#0A3871] text-xs font-bold border border-sky-200">
                  Quick Inquiry
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Have a question or request? Fill out the quick form below and we will get back to you immediately.
                </p>
              </div>

              {sent ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto">
                    Thank you <strong>{name}</strong>. Founder Er. Vikul Pal and our biomedical technical team will contact you shortly on <strong>{phone}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setMessage('');
                    }}
                    className="px-5 py-2 rounded-xl bg-[#0A3871] text-white text-xs font-bold hover:bg-[#07254c] cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Verma / Hospital In-Charge"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. doctor@hospital.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Inquiry Subject
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Urgent Breakdown Repair">Urgent Breakdown Repair</option>
                        <option value="Preventive Maintenance Schedule">Preventive Maintenance Schedule</option>
                        <option value="AMC / CMC Contract Quotation">AMC / CMC Contract Quotation</option>
                        <option value="Calibration & Testing Service">Calibration &amp; Testing Service</option>
                        <option value="Spare Parts Availability">Spare Parts Availability</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Your Message / Machine Query *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please let us know how we can assist you..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] bg-white font-medium"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#0A3871] to-[#0284c7] hover:from-[#07254c] hover:to-[#0369a1] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message to CP Medical System+</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
