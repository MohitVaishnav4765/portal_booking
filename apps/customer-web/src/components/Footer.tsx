'use client';

import React from 'react';
import Image from 'next/image';
import { Locale, translations } from '@/lib/translations';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const t = translations[locale];
  const isAr = locale === 'ar';

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.587 1.771.884 2.802.884 3.181 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.771-5.774-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.073-1.802-.411-1.393-.578-2.298-1.988-2.368-2.081-.07-.094-.564-.75-.564-1.433 0-.683.356-1.02.482-1.161.127-.141.277-.176.37-.176.094 0 .188.002.27.006.086.004.202-.033.315.241.118.286.402.98.437 1.052.035.071.059.154.012.248-.047.094-.071.153-.141.235-.071.082-.148.183-.211.246-.071.07-.145.147-.062.289.082.141.367.606.788.981.542.483.999.633 1.141.704.141.07.224.059.306-.035.082-.094.353-.412.447-.553.094-.141.188-.118.318-.071.129.047.823.388.964.459.141.07.235.106.27.165.035.059.035.342-.109.747z" />
        </svg>
      ),
      href: '#whatsapp',
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      href: '#instagram',
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      href: '#youtube',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: '#linkedin',
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
      href: '#facebook',
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
      href: '#twitter',
    },
  ];

  return (
    <footer
      className="
    relative
    mt-auto
    overflow-hidden
    bg-gradient-to-br
    from-[#a90062]
    via-[#d00072]
    to-[#ff1687]
    pt-8
    sm:pt-10
    pb-8
    px-4
    sm:px-6
  "
    >
      {/* =====================================================
      MAIN WHITE FOOTER CARD
  ====================================================== */}
      <div
        className="
      relative
      mx-auto
      w-full
      max-w-[905px]
      min-h-[330px]
      rounded-[30px]
      bg-[#fffdfc]
      px-7
      py-8
      sm:px-8
      sm:py-9
    "
      >
        <div
          className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-[1.15fr_0.75fr_0.95fr_1.15fr]
        gap-x-8
        gap-y-8
        h-full
      "
        >

          {/* =================================================
          COLUMN 1 — LOGO + SOCIAL
      ================================================== */}
          <div className="flex flex-col items-start">

            {/* Logo */}
            <div className="relative w-[215px] h-[70px]">
              <Image
                src="/images/logo.png"
                alt="Bus Arabia"
                fill
                className="object-contain object-left"
              />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="
                w-[29px]
                h-[29px]
                rounded-full
                bg-[#ffe47b]
                text-[#171717]
                flex
                items-center
                justify-center
                hover:bg-[#f5d65c]
                hover:scale-105
                transition-all
              "
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>


          {/* =================================================
          COLUMN 2 — COMPANY
      ================================================== */}
          <div>
            <h4
              className="
            text-[16px]
            font-extrabold
            text-[#171717]
            mb-3
          "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {t.footer.company}
            </h4>

            <ul
              className="
            space-y-2.5
            text-[14px]
            leading-[1.25]
            font-medium
            text-[#5c5056]
          "
            >
              <li>
                <a
                  href="#about"
                  className="hover:text-[#b20163] transition-colors"
                >
                  {t.footer.aboutUs}
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-[#b20163] transition-colors"
                >
                  {t.footer.contactUs}
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="hover:text-[#b20163] transition-colors"
                >
                  {t.footer.faq}
                </a>
              </li>

              <li>
                <a
                  href="#operators"
                  className="hover:text-[#b20163] transition-colors"
                >
                  {t.footer.ourBusOperators}
                </a>
              </li>
            </ul>
          </div>


          {/* =================================================
          COLUMN 3 — INFORMATION
      ================================================== */}
          <div>
            <h4
              className="
            text-[16px]
            font-extrabold
            text-[#171717]
            mb-3
          "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {t.footer.information}
            </h4>

            <ul
              className="
            space-y-2.5
            text-[14px]
            leading-[1.15]
            font-medium
            text-[#5c5056]
          "
            >
              <li>
                <a
                  href="#privacy"
                  className="hover:text-[#b20163] transition-colors"
                >
                  {t.footer.privacyPolicy}
                </a>
              </li>

              <li>
                <a
                  href="#terms"
                  className="hover:text-[#b20163] transition-colors"
                >
                  {t.footer.termsOfService}
                </a>
              </li>

              <li>
                <a
                  href="#cancellation"
                  className="hover:text-[#b20163] transition-colors"
                >
                  {t.footer.cancellationPolicy}
                </a>
              </li>

              <li>
                <a
                  href="#cookies"
                  className="hover:text-[#b20163] transition-colors"
                >
                  {t.footer.cookiePolicy}
                </a>
              </li>
            </ul>
          </div>


          {/* =================================================
          COLUMN 4 — PAYMENTS
      ================================================== */}
          <div className="flex flex-col items-start">

            {/* Payment Asset */}
            <div
              className="
            relative
            w-full
            max-w-[225px]
            h-[220px]
          "
            >
              <Image
                src="/images/payments-grid.png"
                alt="We Accept Visa, Mada, STC Pay, Mastercard, American Express, Google Pay, Samsung Pay, Apple Pay, Union Pay"
                fill
                className="object-contain object-left-top"
              />
            </div>

            {/* Operator Login */}
            <a
              href="#operator-portal"
              className="
            -mt-2
            inline-flex
            items-center
            justify-center
            gap-1.5
            w-fit
            px-3
            py-1.5
            rounded-full
            bg-gradient-to-r
            from-[#ffe26d]
            via-[#fdea9d]
            to-[#d9b747]
            text-[#171717]
            text-[9px]
            sm:text-[10px]
            font-bold
            shadow-sm
            hover:brightness-105
            transition-all
          "
            >
              <span>
                {t.footer.operatorLogin}
              </span>

              <span
                className="
              flex
              items-center
              justify-center
              w-[17px]
              h-[17px]
              rounded-full
              bg-[#171717]
              text-white
            "
              >
                <ArrowRight className="w-[9px] h-[9px]" />
              </span>
            </a>
          </div>

        </div>
      </div>


      {/* =====================================================
      COPYRIGHT
  ====================================================== */}
      <div
        className="
      mx-auto
      max-w-[905px]
      pt-7
      sm:pt-8
      text-center
      text-white
    "
      >
        <p
          className="
        text-[12px]
        sm:text-[13px]
        font-medium
        tracking-wide
      "
        >
          {t.footer.copyright}
        </p>

        <p
          className="
        mt-5
        text-[12px]
        sm:text-[13px]
        font-medium
        tracking-wide
        text-white
      "
        >
          {t.footer.unifiedNumber}
        </p>
      </div>
    </footer>
  );
}
