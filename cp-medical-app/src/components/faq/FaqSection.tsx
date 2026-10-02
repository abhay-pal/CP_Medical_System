import React, { useState, useMemo } from 'react';
import { FAQS_LIST } from '../../data/faqData';
import { FAQItem } from '../../types';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Sparkles,
  Phone,
  MessageCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface FaqSectionProps {
  onRequestService: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onRequestService }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Repair & Services', 'AMC / CMC', 'Calibration', 'Spare Parts & On-Site', 'General'];

  const filteredFaqs = useMemo(() => {
    return FAQS_LIST.filter((faq) => {
      const matchesCategory =
        selectedCategory === 'All' || faq.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0A3871] text-xs font-bold border border-blue-200 mb-3">
            <HelpCircle className="w-4 h-4 text-[#0284c7]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight">
            Have Questions About Our Services?
          </h2>

          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Find clear answers regarding hospital equipment repair, on-site response, maintenance contracts, calibration, and spare parts.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-8 space-y-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search FAQ questions (e.g. AMC, On-site, Calibration, Ventilator)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A3871] text-xs font-medium"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === c
                    ? 'bg-[#0A3871] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-sky-50/50 border-sky-300 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#0A3871] text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-sky-100/60 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-xs text-slate-500">
              No matching questions found for "{searchQuery}". Feel free to reach out directly!
            </div>
          )}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              Still have a specific biomedical query?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Call founder Er. Vikul Pal or text us on WhatsApp directly for prompt technical guidance.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.contact.phone}`}
              className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#0A3871]" />
              <span>Call: {COMPANY_INFO.contact.phone}</span>
            </a>
            <button
              onClick={onRequestService}
              className="px-4 py-2 rounded-xl bg-[#0A3871] text-white text-xs font-bold hover:bg-[#07254c] transition-colors cursor-pointer"
            >
              Raise Request
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
