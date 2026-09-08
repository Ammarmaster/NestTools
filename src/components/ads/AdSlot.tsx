'use client';

import React, { useState, useEffect } from 'react';
import { ADS_CONFIG, SponsorAd } from '@/lib/ads-config';
import { ExternalLink, Sparkles } from 'lucide-react';

interface AdSlotProps {
  slotId?: string;
  format?: 'banner' | 'rectangle' | 'leaderboard' | 'sidebar';
  className?: string;
  sponsorIndex?: number;
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export const AdSlot: React.FC<AdSlotProps> = ({
  slotId,
  format = 'banner',
  className = '',
  sponsorIndex = 0,
}) => {
  const [adSenseReady, setAdSenseReady] = useState(false);
  const sponsors = ADS_CONFIG.nativeSponsors;
  const sponsor: SponsorAd = sponsors[sponsorIndex % sponsors.length];

  useEffect(() => {
    if (ADS_CONFIG.adSenseClientId && typeof window !== 'undefined') {
      try {
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
          setAdSenseReady(true);
        }
      } catch {
        // Fallback to native sponsor
      }
    }
  }, []);

  if (!ADS_CONFIG.enabled) {
    return null;
  }

  // If Google AdSense is fully configured with Publisher ID
  if (ADS_CONFIG.adSenseClientId && adSenseReady) {
    return (
      <div className={`my-6 overflow-hidden text-center ${className}`}>
        <span className="block text-[10px] uppercase tracking-wider text-zinc-400 mb-1">Advertisement</span>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={ADS_CONFIG.adSenseClientId}
          data-ad-slot={slotId || '1234567890'}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Native Partner / Sponsor High-Converting Banner
  if (format === 'leaderboard' || format === 'banner') {
    return (
      <div className={`my-6 w-full ${className}`}>
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-linear-to-r from-zinc-50 via-indigo-50/30 to-zinc-50 p-4 transition-all hover:border-indigo-300 dark:border-zinc-800 dark:from-zinc-900/60 dark:via-indigo-950/20 dark:to-zinc-900/60 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-md bg-indigo-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  <Sparkles className="h-3 w-3" />
                  {sponsor.badge}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400">Sponsored</span>
              </div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                {sponsor.title}
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-xl">
                {sponsor.description}
              </p>
            </div>

            <a
              href={sponsor.targetUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-indigo-700 hover:shadow-md active:scale-95"
            >
              <span>{sponsor.ctaText}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Rectangle / Sidebar Format
  return (
    <div className={`my-6 ${className}`}>
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-linear-to-b from-zinc-50 to-indigo-50/30 p-5 transition-all hover:border-indigo-300 dark:border-zinc-800 dark:from-zinc-900/60 dark:to-indigo-950/20 shadow-2xs">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1 rounded-md bg-indigo-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Sparkles className="h-3 w-3" />
            {sponsor.badge}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-zinc-400">Sponsored</span>
        </div>

        <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          {sponsor.title}
        </h4>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
          {sponsor.description}
        </p>

        <a
          href={sponsor.targetUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-indigo-700 active:scale-95"
        >
          <span>{sponsor.ctaText}</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
};

export const TopAdSlot: React.FC<{ className?: string }> = ({ className }) => (
  <AdSlot format="leaderboard" sponsorIndex={0} className={`mx-auto mb-6 ${className || ''}`} />
);

export const ContentAdSlot: React.FC<{ className?: string }> = ({ className }) => (
  <AdSlot format="banner" sponsorIndex={1} className={`my-8 ${className || ''}`} />
);

export const BottomAdSlot: React.FC<{ className?: string }> = ({ className }) => (
  <AdSlot format="leaderboard" sponsorIndex={2} className={`mx-auto mt-10 ${className || ''}`} />
);

export const SidebarAdSlot: React.FC<{ className?: string }> = ({ className }) => (
  <AdSlot format="rectangle" sponsorIndex={3} className={`sticky top-24 ${className || ''}`} />
);
