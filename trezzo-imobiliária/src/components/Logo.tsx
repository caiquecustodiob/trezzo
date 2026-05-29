/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'symbol' | 'horizontal-white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = '', variant = 'full', size = 'md' }: LogoProps) {
  // Dimensions based on size preset
  const dimensions = {
    sm: variant === 'symbol' ? 'h-8 w-8' : 'h-10',
    md: variant === 'symbol' ? 'h-12 w-12' : 'h-14',
    lg: variant === 'symbol' ? 'h-16 w-16' : 'h-20',
    xl: variant === 'symbol' ? 'h-24 w-24' : 'h-28',
  }[size];

  // Colors based on Trezzo's visual brand (updated for Elegant Dark):
  const goldColor = '#C5A059'; // Luxurious Gold from theme
  const matteGoldColor = '#A6894A'; // Matte gold fosco from theme
  const charcoalColor = '#FFFFFF'; // White text contrast on dark background

  // Custom vector path of the Trezzo 't' symbol:
  // It features a clean modern lower-case 't' with an elegant sharp wedge/arrow-like cutout in its crossbar right side.
  // We model this path perfectly so it looks crisp and identical at any scale!
  const renderTSymbolPath = (fillColor: string) => (
    <path
      d="M38 52 C38 62, 45 66, 58 66 C65 66, 73 63, 76 60 L76 72 C71 75, 62 77, 52 77 C32 77, 24 68, 24 49 L24 38 L14 38 L14 31 C14 31, 24 31, 24 24 L24 16 C24 12, 30 8, 38 8 C38 8, 38 24, 38 31 L54 31 L38 43 L38 52 Z"
      fill={fillColor}
      stroke={fillColor}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  );

  if (variant === 'symbol') {
    return (
      <div className={`relative flex items-center justify-center shrink-0 ${dimensions} ${className}`}>
        {/* Rounded square with Trezzo golden-yellow background */}
        <svg
          viewBox="0 0 90 90"
          className="w-full h-full drop-shadow-sm rounded-2xl"
          style={{ backgroundColor: goldColor }}
        >
          {/* Central letter 't' in charcoal grey */}
          <g transform="translate(4, 3) scale(0.9)">
            {renderTSymbolPath(charcoalColor)}
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'horizontal-white') {
    return (
      <div className={`flex flex-col items-center select-none ${dimensions} ${className}`}>
        <div className="flex items-center gap-1.5">
          {/* Logo 't' symbol */}
          <svg viewBox="0 0 90 90" className="h-9 w-9 shrink-0">
            <rect width="90" height="90" rx="20" fill={goldColor} />
            <g transform="translate(4, 3) scale(0.9)">
              {renderTSymbolPath(charcoalColor)}
            </g>
          </svg>
          
          {/* Text: trezzo */}
          <span className="text-[34px] font-[800] leading-none tracking-tight flex items-baseline">
            <span className="text-white">tre</span>
            <span className="text-[#C5A059]">zz</span>
            <span className="text-white">o</span>
          </span>
        </div>
        {/* imobiliária */}
        <span className="text-[10px] font-light leading-none tracking-[0.45em] text-[#C5A059] uppercase -mt-0.5 ml-10">
          imobiliária
        </span>
      </div>
    );
  }

  // Variant "full" (Horizontal lockup with white/grey transparent background or adaptable theme, matches Image 2)
  return (
    <div className={`flex flex-col items-center select-none ${dimensions} ${className}`}>
      <div className="flex items-center gap-1.5">
        {/* Leftmost letter 't' as stylized icon */}
        <svg viewBox="0 0 90 90" className="h-9 w-9 shrink-0">
          <ellipse cx="45" cy="45" rx="42" ry="42" fill="rgba(255,255,255,0.03)" className="stroke-white/10 stroke-1" />
          <g transform="translate(1, -2) scale(0.98)">
            {renderTSymbolPath(goldColor)}
          </g>
        </svg>
        
        {/* Distinctive Font Wordmark: tre & o are white, zz is luxury gold (#C5A059) */}
        <span className="text-[34px] font-[800] leading-none tracking-tight flex items-baseline">
          <span className="text-white">tre</span>
          <span className="text-[#C5A059]">zz</span>
          <span className="text-white">o</span>
        </span>
      </div>
      
      {/* imobiliária - thin, tracked out, elegant gold */}
      <span className="text-[10px] font-[300] leading-none tracking-[0.45em] text-[#A6894A] uppercase -mt-0.5 ml-10">
        imobiliária
      </span>
    </div>
  );
}
