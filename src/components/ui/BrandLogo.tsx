import React from 'react';
import Image from 'next/image';

interface BrandLogoProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 36,
  className = '',
  priority = true,
}) => {
  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white dark:bg-zinc-900 shadow-xs ring-1 ring-zinc-200/60 dark:ring-zinc-800 transition-transform duration-200 group-hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.png"
        alt="ToolNest – A Product by ProDevOpz"
        width={size * 2}
        height={size * 2}
        priority={priority}
        className="h-full w-full object-contain rounded-xl p-0.5"
      />
    </div>
  );
};
