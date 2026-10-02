import React, { useState, useMemo } from 'react';
import {
  EQUIPMENT_CATEGORIES,
  ALL_EQUIPMENT_PRODUCTS
} from '../../data/equipmentData';
import type { EquipmentProduct } from '../../types';
import { EquipmentDetailModal } from './EquipmentDetailModal';
import {
  Search,
  Wrench,
  ShieldCheck,
  Target,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ChevronRight,
  Eye
} from 'lucide-react';

interface EquipmentSectionProps {
  onRequestService: (prefillEquipment?: string, prefillCategory?: string) => void;
}

export const EquipmentSection: React.FC<EquipmentSectionProps> = ({ onRequestService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<EquipmentProduct | null>(null);

  // Filtered products based on category and search query
  const filteredProducts = useMemo(() => {
    return ALL_EQUIPMENT_PRODUCTS.filter((prod) => {
      const matchesCategory =
        selectedCategory === 'all' || prod.categoryId === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        prod.name.toLowerCase().includes(q) ||
        prod.category.toLowerCase().includes(q) ||
        prod.overview.toLowerCase().includes(q) ||
        prod.typicalIssues.some((issue) => issue.toLowerCase().includes(q)) ||
        prod.servicesAvailable.some((srv) => srv.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="equipment" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0A3871] text-xs font-bold border border-blue-200 mb-3">
            <ShieldCheck className="w-4 h-4 text-[#0284c7]" />
            <span>BIOMEDICAL ASSET COVERAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1528] tracking-tight">
            Equipment We Service &amp; Support
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            We provide specialized biomedical engineering service, calibration, and spare parts support for hospital-grade equipment across critical clinical departments.
          </p>
        </div>

        {/* 5 Visual Category Banners Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
          {EQUIPMENT_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(isSelected ? 'all' : cat.id);
                  setSearchQuery('');
                }}
                className={`group relative rounded-2xl p-2.5 text-left border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isSelected
                    ? 'border-[#0A3871] bg-sky-50 shadow-md ring-2 ring-[#0A3871]/20'
                    : 'border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-sky-300 hover:shadow-sm'
                }`}
              >
                <div className="h-24 sm:h-28 w-full rounded-xl overflow-hidden mb-2 bg-slate-100 relative group-hover:shadow-xs transition-all">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  <span className="absolute bottom-1.5 left-2 text-[10px] text-white font-bold bg-black/40 px-1.5 py-0.5 rounded backdrop-blur-xs">
                    {cat.products.length} Models
                  </span>
                </div>
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-[#0A3871] transition-colors leading-tight">
                    {cat.name}
                  </h4>
                  <span className="text-[10px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                    {cat.tagline}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Smart Search Bar & Filter Controls */}
        <div className="bg-slate-50 rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row items-center gap-4">
            
            {/* Search Input Box */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search your equipment (e.g., Ventilator, Patient Monitor, ECG, CBC Analyzer, Autoclave, OT Light)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0A3871] text-sm text-slate-800 placeholder-slate-400 shadow-2xs font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 px-2 py-1 rounded-md bg-slate-100 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Dropdown / Pills */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-[#0A3871] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                All Categories ({ALL_EQUIPMENT_PRODUCTS.length})
              </button>
              {EQUIPMENT_CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === c.id
                      ? 'bg-[#0A3871] text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

          </div>

          {/* Quick Search Tag Suggestions */}
          <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-slate-200/80 text-xs">
            <span className="text-slate-500 font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              Popular Searches:
            </span>
            {['Ventilator', 'Patient Monitor', 'ECG', 'Autoclave', 'Biochemistry Analyzer', 'Defibrillator', 'OT Table', 'Infusion Pump'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-2.5 py-1 rounded-lg bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0A3871] border border-slate-200/80 text-[11px] font-medium transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs sm:text-sm font-semibold text-slate-500">
            Showing <strong className="text-slate-900">{filteredProducts.length}</strong> equipment systems
            {selectedCategory !== 'all' && (
              <span> in <strong className="text-[#0A3871]">{EQUIPMENT_CATEGORIES.find(c => c.id === selectedCategory)?.name}</strong></span>
            )}
            {searchQuery && (
              <span> matching "<strong className="text-slate-900">{searchQuery}</strong>"</span>
            )}
          </div>

          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-sky-600 hover:text-sky-800 cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Products Grid with Realistic Product Imagery */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Product Image Banner */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  
                  {/* Category Pill & Priority Badge overlay */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold border border-white/20">
                      {product.category}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-md ${
                        product.criticality === 'Critical'
                          ? 'bg-red-500/90 text-white'
                          : 'bg-amber-500/90 text-white'
                      }`}
                    >
                      {product.criticality} Care
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 right-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-200 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-md">
                      <Eye className="w-3 h-3" />
                      View Scope
                    </span>
                  </div>
                </div>

                {/* Product Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Product Title */}
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1.5 group-hover:text-[#0A3871] transition-colors leading-snug">
                      {product.name}
                    </h3>

                    {/* Product Overview */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                      {product.overview}
                    </p>

                    {/* Common Fault Highlights */}
                    <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 mb-3 space-y-1">
                      <div className="text-[10px] font-bold text-slate-700 flex items-center gap-1">
                        <Wrench className="w-3 h-3 text-[#0A3871]" />
                        <span>Common Faults Handled:</span>
                      </div>
                      <ul className="space-y-0.5">
                        {product.typicalIssues.slice(0, 2).map((issue, idx) => (
                          <li key={idx} className="text-[11px] text-slate-600 flex items-start gap-1.5 line-clamp-1">
                            <span className="text-[#0284c7] font-bold">•</span>
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Capabilities Indicators */}
                    <div className="flex flex-wrap gap-1.5 text-[10px] font-semibold text-slate-600 mb-4">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Board Repair
                      </span>
                      {product.calibrationAvailability && (
                        <span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-800 border border-sky-200 flex items-center gap-1">
                          <Target className="w-3 h-3 text-sky-600" />
                          Calibration
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-800 border border-indigo-200 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-indigo-600" />
                        PPM Check
                      </span>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onRequestService(product.name, product.category)}
                      className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#0A3871] to-[#0284c7] hover:from-[#07254c] hover:to-[#0369a1] text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Wrench className="w-3.5 h-3.5" />
                      <span>Book Service</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
            <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No matching equipment found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-4">
              We service virtually all hospital and laboratory biomedical equipment even if not listed in this preview.
            </p>
            <button
              onClick={() => onRequestService(searchQuery || 'Custom Medical Device')}
              className="px-6 py-2.5 rounded-xl bg-[#0A3871] text-white text-xs font-bold shadow-md hover:bg-[#07254c] transition-all cursor-pointer"
            >
              Request Custom Equipment Service
            </button>
          </div>
        )}

      </div>

      {/* Equipment Detail Modal */}
      <EquipmentDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestService={(eqName, cat) => {
          setSelectedProduct(null);
          onRequestService(eqName, cat);
        }}
      />
    </section>
  );
};
