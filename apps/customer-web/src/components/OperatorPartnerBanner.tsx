'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, translations } from '@/lib/translations';

interface OperatorPartnerBannerProps {
  locale: Locale;
}

export function OperatorPartnerBanner({ locale }: OperatorPartnerBannerProps) {
  const t = translations[locale];
  const isAr = locale === 'ar';

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-rose-950/20 group cursor-pointer bg-gradient-to-r from-[#6e0037] via-[#8c0047] to-[#b20163]">
        {/* Banner Graphic Asset from Frame 7 (Figma 1574:3250) */}
        <div className="relative w-full h-[180px] sm:h-[220px] lg:h-[240px]">
          <Image
            src={isAr ? '/images/banner-operator-ar.png' : '/images/banner-operator.png'}
            alt={t.operatorBanner.title}
            fill
            className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-500 select-none"
          />

          {/* Interactive Clickable Overlay */}
          <a
            href="#operator-signup"
            className="absolute inset-0 z-10"
            aria-label="Bus Operator Registration"
          />
        </div>
      </div>
    </section>
  );
}
