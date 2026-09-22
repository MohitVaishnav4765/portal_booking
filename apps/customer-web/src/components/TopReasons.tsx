'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, translations } from '@/lib/translations';

interface TopReasonsProps {
  locale: Locale;
}

export function TopReasons({ locale }: TopReasonsProps) {
  const t = translations[locale];

  const icons = [
    '/images/icon-mobile.png',
    '/images/icon-discount.png',
    '/images/icon-calendar.png',
    '/images/icon-headphones.png',
    '/images/icon-security.png',
    '/images/icon-globe.png',
  ];

  return (
    <section className="py-16 bg-[#fcf9f8] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Ornamental Gold Lines matching Frame 3681 */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 lg:gap-7">

          {/* Left Line */}
          <div className="flex-1 max-w-[280px] flex items-center justify-end">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#d8b93c] to-[#d8b93c]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#d8b93c] shrink-0" />
          </div>

          {/* Title */}
          <h3
            className="
        text-[36px]
        sm:text-[20px]
        lg:text-[40px]
        xl:text-[32px]
        font-black
        italic
        uppercase
        tracking-tight
        leading-none
        text-[#b20163]
            text-transparent
bg-gradient-to-b
    from-[#ff1493]
    via-[#d90075]
    to-[#990052]
    bg-clip-text
      "
            style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}
          >
            {t.topReasons.title}
          </h3>

          {/* Right Line */}
          <div className="flex-1 max-w-[280px] flex items-center justify-start">
            <span className="w-3.5 h-3.5 rounded-full bg-[#d8b93c] shrink-0" />
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-[#d8b93c] to-[#d8b93c]" />
          </div>
        </div>
        {/* 6 Feature Cards in 3x2 Grid matching Frame 3681 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.topReasons.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-row items-center sm:items-start gap-4 sm:gap-5 group"
            >
              {/* Left Column: Large Icon & Magenta Title */}
              <div className="flex flex-col items-center text-center shrink-0 w-[42%] sm:w-40">
                <div className="relative w-32 h-40 sm:w-36 sm:h-44 mb-2 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={icons[idx]}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h4
                  className="text-sm font-black text-[#b20163] leading-tight text-center"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {card.title}
                </h4>
              </div>

              {/* Right Column: Detailed Benefit Description */}
              <div className="flex-1 text-left rtl:text-right pt-1">
                <p
                  className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
