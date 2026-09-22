'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, translations } from '@/lib/translations';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface MakkahPackagesProps {
  locale: Locale;
}

export function MakkahPackages({ locale }: MakkahPackagesProps) {
  const t = translations[locale];
  const isAr = locale === 'ar';

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden shadow-2xl bg-gradient-to-r from-[#6e0037] via-[#8c0047] to-[#b20163] text-white border border-rose-950/20 group">
        {/* Background Visual Asset Layer (Holy Kaaba & Prophet's Mosque) */}
        <div
          className={`absolute inset-y-0 ${
            isAr ? 'left-0' : 'right-0'
          } w-full lg:w-[64%] h-full overflow-hidden`}
        >
          <Image
            src="/images/test-261.png"
            alt="Holy Kaaba and Prophet's Mosque"
            fill
            className={`object-cover ${
              isAr ? 'object-left -scale-x-100' : 'object-right'
            } select-none opacity-90 group-hover:scale-[1.02] transition-transform duration-700`}
            priority
          />
          {/* Solid gradient covering the text side so only the holy sanctuary photo shines through */}
          <div
            className={`absolute inset-0 bg-gradient-to-${
              isAr ? 'l' : 'r'
            } from-[#6e0037] from-35% via-[#8c0047] via-55% to-transparent`}
          />
        </div>

        {/* Foreground Content Layer (Figma 1884:265, 1884:266, 1884:267) */}
        <div className="relative z-10 py-10 sm:py-12 lg:py-16 px-6 sm:px-10 lg:px-14 flex flex-col justify-center max-w-xl">
          <h2
            className={`text-2xl sm:text-4xl lg:text-[44px] font-black italic text-white leading-tight uppercase tracking-tight ${
              isAr ? 'font-sans' : 'font-[\'Montserrat\',sans-serif]'
            }`}
          >
            {t.makkahBanner.title}
          </h2>

          <p
            className={`text-xs sm:text-sm lg:text-base text-white/90 font-medium leading-relaxed max-w-md mt-3 ${
              isAr ? 'font-sans' : 'font-[\'Montserrat\',sans-serif]'
            }`}
          >
            {t.makkahBanner.subtitle}
          </p>

          <a
            href="#search-box"
            className="mt-6 inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#ffe26d] via-[#fdea9d] to-[#d9b747] text-[#1c1b1b] font-bold text-xs sm:text-sm lg:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all w-fit group/btn cursor-pointer"
            aria-label={t.makkahBanner.title}
          >
            <span>{t.makkahBanner.cta}</span>
            <div className="w-6 h-6 rounded-full bg-[#1c1b1b] text-[#ffe26d] flex items-center justify-center transition-transform group-hover/btn:translate-x-0.5 rtl:group-hover/btn:-translate-x-0.5">
              {isAr ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
