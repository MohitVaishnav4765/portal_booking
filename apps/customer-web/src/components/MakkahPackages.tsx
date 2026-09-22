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
      <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden shadow-2xl bg-[#a90060] text-white border border-rose-950/20 group min-h-[360px] sm:min-h-[420px] lg:min-h-[490px]">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/test-261.png"
            alt="Holy Kaaba and Prophet's Mosque"
            fill
            className={`
          object-cover
          ${isAr ? "object-left -scale-x-100" : "object-right"}
          select-none
          group-hover:scale-[1.02]
          transition-transform
          duration-700
        `}
            priority
          />

          {/* Strong Magenta Overlay */}
          <div
            className={`
          absolute inset-0
          bg-gradient-to-${isAr ? "l" : "r"}
          from-[#a90060]
          via-[#a90060]/95
          via-40%
          to-transparent
          to-70%
        `}
          />

          {/* Extra soft overlay for better text visibility */}
          <div
            className={`
          absolute inset-0
          bg-gradient-to-${isAr ? "l" : "r"}
          from-[#8f0053]/80
          via-transparent
          to-transparent
        `}
          />
        </div>

        {/* Content */}
        <div
          className={`
        relative z-10
        py-10 sm:py-12 lg:py-16
        px-6 sm:px-10 lg:px-14
        flex flex-col justify-center
        min-h-[360px] sm:min-h-[420px] lg:min-h-[490px]
        max-w-[580px]
        ${isAr ? "ml-auto text-right items-end" : "text-left items-start"}
      `}
        >

          {/* Title */}
          <h2
            className={`
          uppercase
          font-black
          italic
          leading-[0.92]
          tracking-tight
          text-[38px]
          sm:text-[52px]
          lg:text-[64px]
          xl:text-[68px]
          ${isAr ? "font-sans" : "font-['Montserrat',sans-serif]"}
        `}
          >
            <span className="block text-[#ffe76a]">
              {t.makkahBanner.title}
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className={`
          mt-5
          text-sm
          sm:text-base
          lg:text-lg
          text-white
          font-medium
          leading-snug
          max-w-[440px]
          ${isAr ? "font-sans" : "font-['Montserrat',sans-serif]"}
        `}
          >
            {t.makkahBanner.subtitle}
          </p>

          {/* CTA */}
          <a
            href="#search-box"
            className="
          mt-6
          inline-flex
          items-center
          gap-3
          px-5
          sm:px-6
          lg:px-7
          py-3
          sm:py-3.5
          rounded-full
          bg-gradient-to-r
          from-[#ffe76a]
          via-[#ffe98a]
          to-[#d9b747]
          text-[#181818]
          font-bold
          text-sm
          sm:text-base
          shadow-lg
          hover:shadow-xl
          hover:scale-105
          transition-all
          w-fit
          group/btn
          cursor-pointer
        "
            aria-label={t.makkahBanner.title}
          >
            <span>{t.makkahBanner.cta}</span>

            <div
              className="
            w-7
            h-7
            rounded-full
            bg-[#1c1b1b]
            text-[#ffe76a]
            flex
            items-center
            justify-center
            transition-transform
            group-hover/btn:translate-x-1
            rtl:group-hover/btn:-translate-x-1
          "
            >
              {isAr ? (
                <ArrowLeft className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
