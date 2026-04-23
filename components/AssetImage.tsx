'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

type AssetImageProps = ImageProps & {
  fallbackLabel?: string;
};

/**
 * Shared image component with graceful fallback.
 * If a file is missing, we render a styled placeholder so layout and spacing stay intact.
 */
export default function AssetImage({ fallbackLabel = 'Image unavailable', alt, className, ...props }: AssetImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex h-full w-full items-center justify-center bg-slate-100 text-center text-xs font-semibold uppercase tracking-wide text-slate-500 ${className ?? ''}`}
      >
        <span className="rounded-full border border-slate-300 bg-white px-3 py-1">{fallbackLabel}</span>
      </div>
    );
  }

  return <Image {...props} alt={alt} className={className} onError={() => setHasError(true)} />;
}
