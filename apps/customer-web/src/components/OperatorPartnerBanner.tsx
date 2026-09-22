'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, translations } from '@/lib/translations';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface OperatorPartnerBannerProps {
  locale: Locale;
}

export function OperatorPartnerBanner({ locale }: OperatorPartnerBannerProps) {
  const t = translations[locale];
  const isAr = locale === 'ar';

  return (
    <section className="w-full py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        className="
      relative
      min-h-[230px] sm:min-h-[240px] lg:h-[240px]
      overflow-hidden
      rounded-[22px] sm:rounded-[24px]
      bg-gradient-to-r
      from-[#8a003f]
      via-[#a80058]
      to-[#b20163]
      group
    "
      >

        {/* =========================================
        BACKGROUND BUS IMAGE
    ========================================= */}
        <div
          className={`
        absolute inset-y-0
        w-full lg:w-[62%]
        ${isAr ? "left-0" : "right-0"}
      `}
        >
          <Image
            src="/images/operator-bus-only.png"
            alt="Bus Arabia Operators Fleet"
            fill
            priority
            className={`
          object-cover
          ${isAr
                ? "object-left -scale-x-100"
                : "object-right"
              }
          select-none
          transition-transform
          duration-700
          group-hover:scale-[1.015]
        `}
          />

          {/* =========================================
          MAGENTA → IMAGE BLEND
      ========================================= */}
          <div
            className={`
          absolute inset-0
          bg-gradient-to-${isAr ? "l" : "r"}
          from-[#8a003f]
          from-[5%]
          via-[#a80058]
          via-[38%]
          to-transparent
        `}
          />

          {/* Slight bottom blend */}
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/10 to-transparent" />
        </div>


        {/* =========================================
        CONTENT
    ========================================= */}
        <div
          className={`
        relative z-10
        h-full min-h-[230px] sm:min-h-[240px] lg:h-[240px]
        flex flex-col justify-center
        px-7 sm:px-9 lg:px-[30px]
        lg:max-w-[58%]
        ${isAr ? "lg:ml-auto lg:text-right" : "text-left"}
      `}
        >

          {/* TITLE */}
          <h3
            className={`
          text-[22px]
          sm:text-[26px]
          lg:text-[30px]
          font-black
          italic
          text-white
          uppercase
          leading-[1.15]
          tracking-tight
          max-w-[650px]
          ${isAr
                ? "font-sans"
                : "font-['Montserrat',sans-serif]"
              }
        `}
          >
            {t.operatorBanner.title}
          </h3>


          {/* DESCRIPTION */}
          <p
            className={`
          mt-4
          text-[12px]
          sm:text-[13px]
          lg:text-[14px]
          leading-[1.55]
          text-white/90
          max-w-[620px]
          ${isAr
                ? "font-sans"
                : "font-['Inter',sans-serif]"
              }
        `}
          >
            {t.operatorBanner.desc}
          </p>


          {/* CTA */}
          <a
            href="#operator-signup"
            className="
          mt-5
          inline-flex
          items-center
          justify-center
          gap-2.5
          w-fit
          px-5
          sm:px-6
          py-2.5
          rounded-full
          bg-gradient-to-r
          from-[#ffe26d]
          via-[#f5df8b]
          to-[#d9b747]
          text-[#171717]
          font-bold
          text-[12px]
          sm:text-[13px]
          shadow-md
          hover:shadow-lg
          hover:scale-[1.03]
          transition-all
          duration-200
          group/btn
        "
            aria-label={t.operatorBanner.btn}
          >
            <span>
              {t.operatorBanner.btn}
            </span>

            <span
              className="
            flex
            items-center
            justify-center
            w-[23px]
            h-[23px]
            rounded-full
            bg-[#171717]
            text-white
          "
            >
              {isAr ? (
                <ArrowLeft className="w-3 h-3" />
              ) : (
                <ArrowRight className="w-3 h-3" />
              )}
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}

