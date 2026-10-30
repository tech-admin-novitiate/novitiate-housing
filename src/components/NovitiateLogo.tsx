import React from 'react';

interface NovitiateLogoProps {
  variant?: 'full' | 'mark' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'dark' | 'light';
  className?: string;
}

export const NovitiateLogo: React.FC<NovitiateLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  theme = 'dark',
  className = ''
}) => {
  // Height sizing for the official SVG image
  // Size md is calibrated for Header, Footer, AdminLoginGate
  const heightClass =
    size === 'sm' ? 'h-9 sm:h-10' :
    size === 'lg' ? 'h-20 sm:h-24' :
    size === 'xl' ? 'h-28 sm:h-32' :
    'h-12 sm:h-14';

  // Standalone vector mark if specifically requested
  if (variant === 'mark') {
    const markPixelSize = size === 'sm' ? 28 : size === 'lg' ? 44 : 36;
    return (
      <div className={`inline-flex items-center shrink-0 ${className}`}>
        <svg
          width={markPixelSize}
          height={markPixelSize}
          viewBox="8700 2200 3600 3650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          {/* Connector 'N' line */}
          <polyline
            points="9065.4,5447.95 9065.4,2578.83 11934.53,5447.95 11934.53,2578.83"
            stroke="#9F9F9F"
            strokeWidth="110"
            strokeMiterlimit="2.61"
          />
          {/* 9 Circles with official brand colors */}
          {/* Row 3 */}
          <circle cx="9065.41" cy="5447.92" r="358.65" fill="#8889A8" />
          <circle cx="10500" cy="5447.92" r="358.65" fill="#9F9F9F" />
          <circle cx="11934.55" cy="5447.92" r="358.65" fill="#8EB36D" />
          {/* Row 2 */}
          <circle cx="9065.41" cy="4013.36" r="358.65" fill="#89AFE0" />
          <circle cx="10500" cy="4013.36" r="358.65" fill="#FF3A42" />
          <circle cx="11934.55" cy="4013.36" r="358.65" fill="#93D7E4" />
          {/* Row 1 */}
          <circle cx="9065.41" cy="2578.8" r="358.65" fill="#FDAB2B" />
          <circle cx="10500" cy="2578.8" r="358.65" fill="#9F9F9F" />
          <circle cx="11934.55" cy="2578.8" r="358.65" fill="#8889A8" />
        </svg>
      </div>
    );
  }

  // Primary rendering using the new provided image asset
  return (
    <div className={`inline-flex items-center shrink-0 ${className}`}>
      <img
        src="/assets/aistudio/Novitiate_Housing_cccd08f4.svg"
        alt="Novitiate Housing Pvt. Ltd. - House of New Beginning"
        className={`${heightClass} w-auto object-contain shrink-0`}
      />
    </div>
  );
};
