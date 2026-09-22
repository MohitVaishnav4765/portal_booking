'use client';

import React from 'react';
import Image from 'next/image';
import { Locale } from '@/lib/translations';
import { ArrowRight } from 'lucide-react';

interface TicketCalloutBannerProps {
  locale: Locale;
}

export function TicketCalloutBanner({ locale }: TicketCalloutBannerProps) {
  const isAr = locale === 'ar';

  return (
    <section className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-rose-900/10 group cursor-pointer bg-gradient-to-r from-[#b20163] via-[#c2006d] to-[#b20163]">
        {/* Banner Graphic Asset from Figma 1574:3258 */}
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image
            src={isAr ? '/images/footer-ticket-banner-ar.png' : '/images/footer-ticket-banner.png'}
            alt="Your ticket awaits - Book now and experience seamless travel!"
            fill
            className="object-cover object-center select-none"
            priority
          />

          {/* Interactive Button Overlay */}
          <a
            href="#search-box"
            className="absolute inset-0 z-10 flex items-center justify-end px-6 sm:px-12 pointer-events-auto"
            aria-label="Book Your Ticket Now"
          >
            {/* Hidden screen reader text */}
            <span className="sr-only">
              {isAr ? 'احجز تذكرتك الآن' : 'Book Your Ticket Now'}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
