import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'header';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showTagline = true,
}) => {
  // We use the authentic CP Medical System+ logo image and provide a crisp layout
  const isDark = variant === 'dark';

  const logoHeight = {
    sm: 'h-8 md:h-9',
    md: 'h-10 md:h-12',
    lg: 'h-14 md:h-16',
    xl: 'h-16 md:h-20',
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Logo Image */}
      <div className="relative flex items-center">
        <img
          src="images/logo_raw.png"
          alt="CP MEDICAL SYSTEM+"
          className={`${logoHeight} object-contain rounded-md bg-white p-1 shadow-xs border border-slate-200/60`}
          onError={(e) => {
            // Fallback rendering in case of any loading quirk
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Structured Text Branding with precise styling */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center tracking-tight leading-none">
          <span className={`font-extrabold text-lg md:text-xl ${isDark ? 'text-white' : 'text-[#0A3871]'}`}>
            CP&nbsp;
          </span>
          <span className="font-extrabold text-lg md:text-xl text-[#DC2626]">
            MEDICAL
          </span>
        </div>
        <div className="flex items-center gap-1 leading-none mt-0.5">
          <span className={`font-bold text-xs md:text-sm tracking-wider ${isDark ? 'text-sky-300' : 'text-[#0A3871]'}`}>
            SYSTEM
          </span>
          <span className="font-extrabold text-xs md:text-sm text-[#DC2626]">
            +
          </span>
        </div>
        {showTagline && (
          <div className="flex items-center gap-1 text-[9px] md:text-[10px] tracking-tight font-medium text-slate-500 mt-0.5">
            <span>Service</span>
            <span className="text-slate-300">|</span>
            <span>Repairing</span>
            <span className="text-slate-300">|</span>
            <span>Maintenance</span>
          </div>
        )}
      </div>
    </div>
  );
};
