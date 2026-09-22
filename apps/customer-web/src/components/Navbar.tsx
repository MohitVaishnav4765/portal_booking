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

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 sm:h-[68px] bg-white/95 backdrop-blur-md rounded-b-[24px] shadow-sm border-x border-b border-slate-200/70 px-4 sm:px-6 flex items-center justify-between transition-all">
          {/* Brand Logo in magenta badge matching Frame 3681 */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative h-10 w-36 sm:w-40">
              <Image
                src="/images/logo.png"
                alt="Bus Arabia Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-[13px] font-semibold text-slate-700">
            <a href="#about" className="hover:text-[#b20163] transition-colors">
              {t.nav.aboutUs}
            </a>
            <a
              href="#operators"
              className="text-[#b20163] font-bold border-b-2 border-[#b20163] pb-0.5"
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

          {/* Right Action Controls matching Frame 3681 */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Selector matching Figma 1574:3074 */}
            <button
              onClick={onToggleLocale}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50/80 hover:bg-slate-100 text-[11px] sm:text-xs font-medium text-slate-700 cursor-pointer transition-colors"
              title="Toggle Language"
            >
              <span className="text-[10px] text-slate-400 hidden sm:inline">
                {locale === 'en' ? 'Select Language:' : 'اختر اللغة:'}
              </span>
              {/* Saudi Flag badge */}
              <span className="w-4 h-3 bg-[#006C35] rounded-xs inline-flex items-center justify-center text-[8px] text-white font-bold leading-none">
                🇸🇦
              </span>
              <span className="font-bold text-[#b20163]">
                {locale === 'en' ? 'العربية' : 'English'}
              </span>
            </button>

            {/* Gold Book Now CTA Button matching Frame 3681 */}
            <a
              href="#search-box"
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2 text-xs font-bold text-slate-900 bg-gradient-to-r from-[#ffe26d] via-[#fdeab2] to-[#d9b747] hover:brightness-105 rounded-full shadow-xs transition-all cursor-pointer whitespace-nowrap"
            >
              {t.nav.bookNow}
            </a>

            {/* Sign in / Sign up link in magenta matching Figma 1574:3091 */}
            <a
              href="#login"
              className="hidden sm:inline-block text-xs font-bold text-[#b20163] hover:underline cursor-pointer whitespace-nowrap"
            >
              {t.nav.signInSignUp}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
