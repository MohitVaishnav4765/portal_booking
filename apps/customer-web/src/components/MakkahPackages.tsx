'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, translations } from '@/lib/translations';
import { ArrowRight } from 'lucide-react';

interface MakkahPackagesProps {
  locale: Locale;
}

export function MakkahPackages({ locale }: MakkahPackagesProps) {
  const t = translations[locale];

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-gradient-to-r from-[#6e0037] via-[#8c0047] to-[#b20163] text-white border border-rose-950/20 group">
        {/* Background Visual Asset (Makkah & Madinah Sanctuary composition) */}
        <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[400px]">
          <Image
            src={locale === 'ar' ? '/images/banner-makkah-ar.png' : '/images/banner-makkah.png'}
            alt={t.makkahBanner.title}
            fill
            className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 select-none"
          />

          {/* Interactive Clickable Overlay */}
          <a
            href="#search-box"
            className="absolute inset-0 z-10 cursor-pointer"
            aria-label="Discover Makkah and Madinah Packages"
          />
        </div>
      </div>
    </section>
  );
}
