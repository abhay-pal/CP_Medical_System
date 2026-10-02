import React from 'react';

interface EcgLineProps {
  className?: string;
  color?: string;
  height?: number;
  animated?: boolean;
}

export const EcgLine: React.FC<EcgLineProps> = ({
  className = '',
  color = '#0284c7',
  height = 24,
  animated = true,
}) => {
  return (
    <div className={`inline-flex items-center overflow-hidden ${className}`} style={{ height: `${height}px` }}>
      <svg
        viewBox="0 0 300 40"
        className={`w-full h-full ${animated ? 'animate-ecg' : ''}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20 H50 L60 20 L70 5 L80 35 L90 12 L100 24 L110 20 H180 L190 20 L200 4 L210 36 L220 10 L230 25 L240 20 H300"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
