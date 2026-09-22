'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, translations } from '@/lib/translations';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface TicketCalloutBannerProps {
  locale: Locale;
}

export function TicketCalloutBanner({ locale }: TicketCalloutBannerProps) {
  const t = translations[locale];
  const isAr = locale === 'ar';

  return (
    <section className="w-full py-2 sm:py-3 px-0">
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#a90062] via-[#c5006d] to-[#ff1687]">

        <div className="flex items-center h-[150px] sm:h-[155px] lg:h-[160px]">

          {/* =========================
          LEFT — BUS IMAGE
      ========================== */}
          <div
            className={`
          relative h-full w-[30%] lg:w-[31%] flex-shrink-0 overflow-hidden
          ${isAr ? "lg:order-2" : "lg:order-1"}
        `}
          >
            <Image
              src="/images/ticket-bus-clean.png"
              alt="Luxury Coach Travel"
              fill
              className={`object-cover object-center ${isAr ? "-scale-x-100" : ""
                }`}
              priority
            />

            {/* Slanted Magenta Transition */}
            <div
              className={`
            absolute top-0 h-full w-[130px] z-10
            bg-gradient-to-r from-transparent via-[#b20163] to-[#b20163]
            ${isAr ? "left-[-1px]" : "right-[-1px]"}
          `}
              style={{
                clipPath: isAr
                  ? "polygon(55% 0, 100% 0, 100% 100%, 55% 100%, 0 50%)"
                  : "polygon(45% 0, 100% 0, 100% 100%, 45% 100%, 0 50%)",
              }}
            />
          </div>

          {/* =========================
          RIGHT — WHITE RIBBON
      ========================== */}
          <div
            className={`
          relative z-20
          h-[125px] sm:h-[130px] lg:h-[125px]
          w-[70%] lg:w-[69%]
          bg-white
          flex items-center
          px-6 sm:px-8 lg:px-12
          shadow-sm
          ${isAr
                ? "lg:order-1 rounded-r-[12px]"
                : "lg:order-2 rounded-l-[12px]"
              }
        `}
            style={{
              clipPath: isAr
                ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 25px 50%)"
                : "polygon(25px 0, 100% 0, 100% 100%, 25px 100%, 0 50%)",
            }}
          >

            <div
              className={`
            w-full flex items-center justify-between gap-6
            ${isAr ? "flex-row-reverse" : ""}
          `}
            >

              {/* =========================
              TEXT
          ========================== */}
              <div
                className={`
              flex flex-col justify-center
              ${isAr ? "text-right" : "text-left"}
            `}
              >
                <span
                  className={`
                text-[#b20163]
                font-black italic uppercase
                text-[15px] sm:text-[18px] lg:text-[21px]
                tracking-wide
                leading-tight
                ${isAr
                      ? "font-sans"
                      : "font-['Barlow_Semi_Condensed',sans-serif]"
                    }
              `}
                >
                  {t.ctaBanner.title1}
                </span>

                <span
                  className={`
                mt-1
                text-[#d4ad2d]
                font-black italic uppercase
                text-[20px] sm:text-[25px] lg:text-[30px]
                tracking-wide
                leading-tight
                ${isAr
                      ? "font-sans"
                      : "font-['Barlow_Semi_Condensed',sans-serif]"
                    }
              `}
                >
                  {t.ctaBanner.title2}
                </span>
              </div>

              {/* =========================
              CTA BUTTON
          ========================== */}
              <a
                href="#search-box"
                className="
              flex-shrink-0
              inline-flex items-center justify-center gap-2
              px-4 sm:px-5 lg:px-5
              py-2.5 sm:py-3
              rounded-[10px]
              bg-gradient-to-r
              from-[#ffe47b]
              via-[#f8dc69]
              to-[#dcb83f]
              text-[#171717]
              font-bold
              text-[12px] sm:text-[13px] lg:text-[14px]
              shadow-sm
              hover:shadow-md
              hover:scale-[1.02]
              transition-all duration-200
            "
                aria-label={t.ctaBanner.btn}
              >
                <span className="whitespace-nowrap">
                  {t.ctaBanner.btn}
                </span>

                <div
                  className="
                w-6 h-6
                rounded-full
                bg-[#171717]
                text-white
                flex items-center justify-center
                flex-shrink-0
              "
                >
                  {isAr ? (
                    <ArrowLeft className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

