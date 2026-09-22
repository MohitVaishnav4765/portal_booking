'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Locale, translations } from '@/lib/translations';

interface NavbarProps {
  locale: Locale;
  onToggleLocale: () => void;
}

export function Navbar({ locale, onToggleLocale }: NavbarProps) {
  const t = translations[locale];
  const isAr = locale === 'ar';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-rose-100/60'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Left Group: Brand Logo + Navigation Links */}
          <div className="flex items-center gap-7 lg:gap-9">
            <a href="#" className="flex items-center flex-shrink-0">
              <div className="relative h-11 w-36 sm:w-42">
                <Image
                  src="/images/logo.png"
                  alt="Bus Arabia Logo"
                  fill
                  className="object-contain object-left rtl:object-right"
                  priority
                />
              </div>
            </a>

            {/* Navigation Links (1574:3063) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs sm:text-[13px] font-['Montserrat',sans-serif] font-medium text-[#554149]">
              <a href="#about" className="hover:text-[#b20163] transition-colors whitespace-nowrap">
                {t.nav.aboutUs}
              </a>
              <a
                href="#operators"
                className="text-[#b20163] font-semibold relative py-1 whitespace-nowrap"
              >
                {t.nav.ourBusOperators}
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b20163] rounded-full" />
              </a>
              <a href="#faq" className="hover:text-[#b20163] transition-colors whitespace-nowrap">
                {t.nav.faq}
              </a>
              <a href="#contact" className="hover:text-[#b20163] transition-colors whitespace-nowrap">
                {t.nav.contactUs}
              </a>
            </nav>
          </div>

          {/* Right Action Controls matching Frame 3681 (1574:3072) */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 lg:gap-4 flex-shrink-0">
            {/* Language Selector matching Figma 1574:3073 */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[11px] font-['Montserrat',sans-serif] font-bold text-[#554149] hidden sm:inline">
                {isAr ? 'Select Language:' : 'Select Language:'}
              </span>
              <button
                onClick={onToggleLocale}
                type="button"
                className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full border border-slate-200/80 bg-white/95 hover:bg-white text-xs font-semibold text-[#554149] cursor-pointer shadow-xs transition-all"
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
              <span className="text-[11px] font-['Montserrat',sans-serif] font-bold text-[#554149] hidden sm:inline">
                {isAr ? 'اختر اللغة:' : 'اختر اللغة:'}
              </span>
            </div>

            {/* Gold Book Now CTA Button matching Frame 3681 (1574:3088) */}
            <a
              href="#search-box"
              className="inline-flex items-center justify-center px-5 sm:px-7 py-2.5 text-xs sm:text-sm font-['Inter',sans-serif] font-semibold text-[#1c1b1b] bg-gradient-to-r from-[#ffe26d] via-[#fdea9d] to-[#d9b747] hover:brightness-105 rounded-full shadow-[0_4px_4px_rgba(0,0,0,0.08)] hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              {t.nav.bookNow}
            </a>

            {/* Sign in / Sign up button matching Figma 1574:3090 */}
            <a
              href="#login"
              className="inline-flex items-center justify-center px-2 sm:px-3 py-2 text-xs sm:text-sm font-['Inter',sans-serif] font-semibold text-[#b20163] hover:text-[#8c0047] transition-all cursor-pointer whitespace-nowrap"
            >
              {t.nav.signInSignUp}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

