'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Locale, translations } from '@/lib/translations';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PlacesWeCoverProps {
  locale: Locale;
  onSelectPlace: (city: string) => void;
}

export function PlacesWeCover({ locale, onSelectPlace }: PlacesWeCoverProps) {
  const t = translations[locale];
  const [activeSlide, setActiveSlide] = useState(0);

  const isAr = locale === 'ar';

  const destinations = [
    {
      city: isAr ? 'جدة' : 'Jeddah',
      country: isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia',
      price: isAr ? 'ابتداءً من 45 ﷼' : 'From 45 SAR',
      image: '/images/pure-photo-jeddah.png',
    },
    {
      city: isAr ? 'المدينة المنورة' : 'Madinah',
      country: isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia',
      price: isAr ? 'ابتداءً من 45 ﷼' : 'From 45 SAR',
      image: '/images/pure-photo-madinah.png',
    },
    {
      city: isAr ? 'المدينة المنورة' : 'Madinah',
      country: isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia',
      price: isAr ? 'ابتداءً من 45 ﷼' : 'From 45 SAR',
      image: '/images/pure-photo-riyadh.png',
    },
    {
      city: isAr ? 'عمّان' : 'Amman',
      country: isAr ? 'الأردن' : 'Jordan',
      price: isAr ? 'ابتداءً من 45 ﷼' : 'From 45 SAR',
      image: '/images/pure-photo-amman.png',
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : destinations.length - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev < destinations.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header with Ornamental Gold Lines matching Frame 3681 */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
          <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#d8b93c] to-[#d8b93c] relative flex items-center justify-end">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d8b93c] -mr-0.5" />
          </div>
          <h2
            className="text-2xl sm:text-4xl lg:text-[42px] font-black italic tracking-tight text-[#b20163] uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t.places.title}
          </h2>
          <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#d8b93c] to-[#d8b93c] relative flex items-center justify-start">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d8b93c] -ml-0.5" />
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-lg mx-auto">
          {t.places.subtitle}
        </p>
      </div>

      {/* Cards Container with Navigation Buttons */}
      <div className="relative">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          type="button"
          className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#b20163] text-white flex items-center justify-center shadow-lg hover:bg-[#960153] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Previous Destination"
        >
          <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
        </button>

        {/* 4 Cards Grid from Frame 3681 (1875:1810) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {destinations.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectPlace(item.city)}
              className="group relative rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-100 bg-white flex flex-col"
            >
              {/* Layer 1: Top Floating Gold Badge (Figma Frame 3551 / 1884:206) */}
              <div
                className={`absolute top-4 ${
                  locale === 'ar' ? 'left-4' : 'right-4'
                } z-20 px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-[#ffe26d] via-[#fdea9d] to-[#d9b747] text-[#550036] font-['Inter',sans-serif] font-bold text-xs sm:text-[13px] shadow-md`}
              >
                {item.price}
              </div>

              {/* Layer 2: Raw Destination Image (Figma 1875:1812) */}
              <div className="relative h-[270px] sm:h-[300px] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={`${item.city} - ${item.country}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
                  priority
                />
              </div>

              {/* Layer 3: Bottom Magenta City Bar (Figma Container 1875:1813) */}
              <div className="bg-[#b20163] py-3 px-4 text-center rounded-b-[28px] flex flex-col items-center justify-center min-h-[72px] z-10 transition-colors group-hover:bg-[#9e0158]">
                <h3 className="text-white font-['Montserrat',sans-serif] font-bold text-xl sm:text-[22px] leading-tight tracking-wide">
                  {item.city}
                </h3>
                <p className="text-white/90 font-['Inter',sans-serif] font-medium text-xs sm:text-[13px] leading-tight mt-0.5">
                  {item.country}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          type="button"
          className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#b20163] text-white flex items-center justify-center shadow-lg hover:bg-[#960153] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Next Destination"
        >
          <ChevronRight className="w-5 h-5 rtl:rotate-180" />
        </button>
      </div>

      {/* Pagination Dots from Frame 3681 */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {[0, 1, 2, 3, 4, 5, 6].map((dot) => (
          <button
            key={dot}
            type="button"
            onClick={() => setActiveSlide(dot % destinations.length)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              activeSlide === dot % destinations.length
                ? 'w-6 bg-[#b20163]'
                : 'w-2 bg-slate-200 hover:bg-slate-300'
            }`}
            aria-label={`Go to slide ${dot + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
