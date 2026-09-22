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
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden shadow-2xl border border-rose-950/20 bg-gradient-to-r from-[#6e0037] via-[#8c0047] to-[#b20163] group">
        {/* Background Coaches Asset Layer (Figma 1574:3250) */}
        <div
          className={`absolute inset-y-0 ${
            isAr ? 'left-0' : 'right-0'
          } w-full lg:w-[62%] h-full overflow-hidden`}
        >
          <Image
            src="/images/operator-bus-only.png"
            alt="Bus Arabia Operators Fleet"
            fill
            className={`object-cover ${
              isAr ? 'object-left -scale-x-100' : 'object-right'
            } select-none opacity-85 group-hover:scale-[1.02] transition-transform duration-700`}
            priority
          />
          {/* Gradient blend so text is always 100% readable */}
          <div
            className={`absolute inset-0 bg-gradient-to-${
              isAr ? 'l' : 'r'
            } from-[#6e0037] from-35% via-[#8c0047] via-55% to-transparent`}
          />
        </div>

        {/* Foreground Content Layer (Text & Button) */}
        <div className="relative z-10 py-8 sm:py-10 lg:py-12 px-6 sm:px-10 lg:px-14 flex flex-col justify-center max-w-2xl">
          <h3
            className={`text-xl sm:text-2xl lg:text-[25px] font-black italic text-white leading-snug uppercase tracking-tight ${
              isAr ? 'font-sans' : 'font-[\'Montserrat\',sans-serif]'
            }`}
          >
            {t.operatorBanner.title}
          </h3>

          <p
            className={`text-xs sm:text-[13px] text-white/90 leading-relaxed max-w-lg mt-2.5 ${
              isAr ? 'font-sans' : 'font-[\'Inter\',sans-serif]'
            }`}
          >
            {t.operatorBanner.desc}
          </p>

          <a
            href="#operator-signup"
            className="mt-5 inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#ffe26d] via-[#fdea9d] to-[#d9b747] text-[#1c1b1b] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all w-fit group/btn cursor-pointer"
            aria-label={t.operatorBanner.title}
          >
            <span>{t.operatorBanner.btn}</span>
            <div className="w-5 h-5 rounded-full bg-[#1c1b1b] text-[#ffe26d] flex items-center justify-center transition-transform group-hover/btn:translate-x-0.5 rtl:group-hover/btn:-translate-x-0.5">
              {isAr ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

