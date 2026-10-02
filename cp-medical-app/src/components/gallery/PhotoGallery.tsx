import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../../data/galleryData';
import { GalleryItem } from '../../types';
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  ShieldCheck,
  Eye
} from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Engineer at Work',
    'Equipment Repair',
    'Calibration',
    'Equipment Testing',
    'Preventive Maintenance',
    'On-Site Service',
    'Workshop',
    'Spare Parts'
  ];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0A3871] text-xs font-bold border border-blue-200 mb-3">
            <Camera className="w-4 h-4 text-[#0284c7]" />
            <span>FIELD OPERATIONS &amp; WORKSHOP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1528] tracking-tight">
            Biomedical Service Photo Gallery
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Real snapshots from hospital ICU diagnostics, operation theatre servicing, calibration testing, and our precision electronics repair workbench.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0A3871] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Image Box */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                  {item.category}
                </div>

                {/* Hover overlay icon */}
                <div className="absolute inset-0 bg-[#0A3871]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#0A3871] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Caption Box */}
              <div className="p-5">
                <h4 className="font-extrabold text-base text-slate-900 group-hover:text-[#0A3871] transition-colors mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Smooth Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col">
            <div className="relative max-h-[70vh] flex items-center justify-center bg-black/60 p-2">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-400/30 mb-1 inline-block">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>

              <div className="text-xs text-slate-400 whitespace-nowrap">
                {lightboxIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
