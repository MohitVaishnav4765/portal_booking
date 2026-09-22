'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, translations } from '@/lib/translations';

interface NavbarProps {
  locale: Locale;
  onToggleLocale: () => void;
}

export function Navbar({ locale, onToggleLocale }: NavbarProps) {
  const t = translations[locale];
  const isAr = locale === 'ar';

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-rose-100/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Brand Logo matching Frame 3681 (1574:3062) */}
          <a href="#" className="flex items-center gap-2 group flex-shrink-0">
            <div className="relative h-12 w-40 sm:w-48">
              <Image
                src="/images/logo.png"
                alt="Bus Arabia Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Navigation Links (1574:3063) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-[13px] font-['Montserrat',sans-serif] font-medium text-[#554149]">
            <a href="#about" className="hover:text-[#b20163] transition-colors">
              {t.nav.aboutUs}
            </a>
            <a
              href="#operators"
              className="text-[#b20163] font-semibold border-b-2 border-[#b20163] pb-1"
            >
              {t.nav.ourBusOperators}
            </a>
            <a href="#faq" className="hover:text-[#b20163] transition-colors">
              {t.nav.faq}
            </a>
            <a href="#contact" className="hover:text-[#b20163] transition-colors">
              {t.nav.contactUs}
            </a>
          </nav>

          {/* Right Action Controls matching Frame 3681 (1574:3072) */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Language Selector matching Figma 1574:3073 */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-['Montserrat',sans-serif] font-bold text-[#554149] hidden md:inline">
                {isAr ? 'Select Language:' : 'Select Language:'}
              </span>
              <button
                onClick={onToggleLocale}
                type="button"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-rose-50/70 text-xs font-semibold text-[#554149] cursor-pointer shadow-xs transition-all"
                title="Toggle Language"
              >
                {/* Saudi Flag badge (1574:3078) */}
                <span className="w-5 h-3.5 bg-[#137a08] rounded-[2px] inline-flex items-center justify-center text-[9px] text-white font-bold leading-none shadow-xs">
                  🇸🇦
                </span>
                <span className="font-['Montserrat',sans-serif] font-semibold text-xs text-[#554149]">
                  {isAr ? 'English' : 'العربية'}
                </span>
              </button>
              <span className="text-[11px] font-['Montserrat',sans-serif] font-bold text-[#554149] hidden md:inline">
                {isAr ? 'اختر اللغة:' : 'اختر اللغة:'}
              </span>
            </div>

            {/* Gold Book Now CTA Button matching Frame 3681 (1574:3088) */}
            <a
              href="#search-box"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-['Inter',sans-serif] font-semibold text-[#1c1b1b] bg-gradient-to-r from-[#ffe26d] via-[#fdea9d] to-[#d9b747] hover:brightness-105 rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.08)] hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              {t.nav.bookNow}
            </a>

            {/* Sign in / Sign up button matching Figma 1574:3090 */}
            <a
              href="#login"
              className="inline-flex items-center justify-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-['Inter',sans-serif] font-semibold text-[#b20163] hover:text-[#8c0047] hover:bg-rose-50/60 rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              {t.nav.signInSignUp}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

