'use client';

import React, { useState, useEffect } from 'react';
import { Locale } from '@/lib/translations';
import { Navbar } from '@/components/Navbar';
import { HeroSearch } from '@/components/HeroSearch';
import { PlacesWeCover } from '@/components/PlacesWeCover';
import { MakkahPackages } from '@/components/MakkahPackages';
import { TopReasons } from '@/components/TopReasons';
import { TicketCalloutBanner } from '@/components/TicketCalloutBanner';
import { OperatorPartnerBanner } from '@/components/OperatorPartnerBanner';
import { SeatMapPreview } from '@/components/SeatMapPreview';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>('en');
  const [showSeatMap, setShowSeatMap] = useState(false);
  const [searchParams, setSearchParams] = useState({ from: 'Riyadh', to: 'Jeddah' });

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'ar' || urlLang === 'en') {
        setLocale(urlLang);
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  const handleSearch = (from: string, to: string) => {
    setSearchParams({ from, to });
    setShowSeatMap(true);
    setTimeout(() => {
      const el = document.getElementById('seat-preview');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f8] selection:bg-[#b20163] selection:text-white">
      {/* 1. Header / Navbar (Frame 3364 / 1574:3058) */}
      <Navbar locale={locale} onToggleLocale={toggleLocale} />

      <main className="flex-1">
        {/* 2. Hero Section & 8-Tab Search Box (Figma Frame 3439 + Overlay 1574:3352) */}
        <HeroSearch locale={locale} onSearch={handleSearch} />

        {/* 3. PLACES WE COVER (Figma Frame 3438 / 1574:3102) */}
        <PlacesWeCover
          locale={locale}
          onSelectPlace={(city) => handleSearch(locale === 'ar' ? 'الرياض' : 'Riyadh', city)}
        />

        {/* 4. MAKKAH & MADINAH PACKAGES (Figma Group 8 / 1884:259) */}
        <MakkahPackages locale={locale} />

        {/* 5. TOP REASONS TO BOOK TICKETS WITH BUS ARABIA (Figma Frame 3410 / 1574:3197) */}
        <TopReasons locale={locale} />

        {/* Optional Interactive Seat Map Drawer/Preview (Triggered upon Search or Selection) */}
        {showSeatMap && (
          <div id="seat-preview" className="my-8 animate-fadeIn">
            <SeatMapPreview locale={locale} />
          </div>
        )}

        {/* 6. YOUR TICKET AWAITS - Slanted Callout Banner (Figma Footer Banner / 1574:3258) */}
        <TicketCalloutBanner locale={locale} />

        {/* 7. ARE YOU A BUS OPERATOR Banner (Figma Frame 7 / 1574:3250) */}
        <OperatorPartnerBanner locale={locale} />
      </main>

      {/* 8. Footer with Floating Card & 9 Payments (Figma Footer / 2035:1798) */}
      <Footer locale={locale} />
    </div>
  );
}
