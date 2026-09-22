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
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
            <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#d8b93c] to-[#d8b93c] relative flex items-center justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d8b93c] -mr-0.5" />
            </div>
            <h2
              className="text-xl sm:text-3xl lg:text-[34px] font-black italic tracking-tight text-[#b20163] uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t.topReasons.title}
            </h2>
            <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#d8b93c] to-[#d8b93c] relative flex items-center justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d8b93c] -ml-0.5" />
            </div>
          </div>
        </div>

        {/* 6 Feature Cards in 3x2 Grid matching Frame 3681 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.topReasons.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 group"
            >
              {/* Left Column: 3D Icon & Magenta Title */}
              <div className="flex flex-col items-center text-center shrink-0 sm:w-28">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 mb-2 group-hover:scale-105 transition-transform duration-300">
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
              <div className="flex-1 text-center sm:text-left rtl:sm:text-right pt-1">
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
