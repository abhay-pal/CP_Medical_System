import React from 'react';
import {
  Wrench,
  Settings,
  ShieldCheck,
  Calendar,
  Target,
  Headphones,
  ArrowRight
} from 'lucide-react';

interface QuickServiceStripProps {
  onSelectService: (serviceCategory: string) => void;
}

export const QuickServiceStrip: React.FC<QuickServiceStripProps> = ({ onSelectService }) => {
  const quickItems = [
    {
      id: 'service',
      title: 'Service',
      subtitle: 'Hospital Equipment Care',
      icon: Settings,
      color: 'bg-blue-500 text-white',
      hoverBorder: 'hover:border-blue-400',
    },
    {
      id: 'repairing',
      title: 'Repairing',
      subtitle: 'Component-Level Fixes',
      icon: Wrench,
      color: 'bg-sky-600 text-white',
      hoverBorder: 'hover:border-sky-400',
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      subtitle: 'Scheduled PPM Audits',
      icon: ShieldCheck,
      color: 'bg-indigo-600 text-white',
      hoverBorder: 'hover:border-indigo-400',
    },
    {
      id: 'amc-cmc',
      title: 'AMC / CMC',
      subtitle: 'Annual Contracts',
      icon: Calendar,
      color: 'bg-teal-600 text-white',
      hoverBorder: 'hover:border-teal-400',
    },
    {
      id: 'calibration',
      title: 'Calibration',
      subtitle: 'Parameter Testing',
      icon: Target,
      color: 'bg-rose-600 text-white',
      hoverBorder: 'hover:border-rose-400',
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      subtitle: '24×7 Biomedical Desk',
      icon: Headphones,
      color: 'bg-amber-600 text-white',
      hoverBorder: 'hover:border-amber-400',
    },
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-4 sm:p-6 backdrop-blur-md">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {quickItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSelectService(item.id)}
                className={`group flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-slate-50 hover:bg-sky-50/60 border border-slate-200/60 ${item.hoverBorder} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md cursor-pointer`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-2.5 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-extrabold text-slate-800 text-sm group-hover:text-[#0A3871] transition-colors">
                  {item.title}
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5 line-clamp-1">
                  {item.subtitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
