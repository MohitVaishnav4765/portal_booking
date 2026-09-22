'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Locale, translations } from '@/lib/translations';
import {
  Bus,
  Moon,
  Compass,
  Package,
  Car,
  MapPin,
  Calendar,
  Users,
  ArrowLeftRight,
  ArrowRight,
} from 'lucide-react';

interface HeroSearchProps {
  locale: Locale;
  onSearch: (from: string, to: string) => void;
}

export function HeroSearch({ locale, onSearch }: HeroSearchProps) {
  const t = translations[locale];
  const [activeTab, setActiveTab] = useState('busTicket');
  const [fromCity, setFromCity] = useState(locale === 'ar' ? 'الرياض' : 'Riyadh');
  const [toCity, setToCity] = useState(locale === 'ar' ? 'جدة' : 'Jeddah');
  const [date, setDate] = useState('2026-09-25');
  const [passengers, setPassengers] = useState(1);

  const tabs = [
    { key: 'busTicket', label: t.services.busTicket, icon: <Bus className="w-3.5 h-3.5" /> },
    { key: 'umrah', label: t.services.umrah, icon: <Moon className="w-3.5 h-3.5" /> },
    { key: 'madinahZiyarah', label: t.services.madinahZiyarah, icon: <Compass className="w-3.5 h-3.5" /> },
    { key: 'umrahMadinah', label: t.services.umrahMadinah, icon: <Moon className="w-3.5 h-3.5" /> },
    { key: 'cargoService', label: t.services.cargoService, icon: <Package className="w-3.5 h-3.5" /> },
    { key: 'hajj', label: t.services.hajj, icon: <Moon className="w-3.5 h-3.5" /> },
    { key: 'tourism', label: t.services.tourism, icon: <Compass className="w-3.5 h-3.5" /> },
    { key: 'busRental', label: t.services.busRental, icon: <Car className="w-3.5 h-3.5" /> },
  ];

  const cities = locale === 'ar'
    ? ['الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام', 'عمان', 'دبي', 'صنعاء']
    : ['Riyadh', 'Jeddah', 'Makkah', 'Madinah', 'Dammam', 'Amman', 'Dubai', 'Sanaa'];

  const handleSwap = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(fromCity, toCity);
  };

  return (
    <section className="relative w-full overflow-hidden pb-16">
      {/* Background Graphic Asset (Clean Coach Bus on Highway from Frame 3681) */}
      <div className="relative w-full h-[580px] sm:h-[660px] lg:h-[760px] overflow-hidden">
        <Image
          src={locale === 'ar' ? '/images/hero-bg-ar.png' : '/images/hero-bus-clean.png'}
          alt="Bus Arabia Luxury Bus Fleet"
          fill
          priority
          className="object-cover object-top sm:object-center select-none pointer-events-none"
        />

        {/* Soft bottom white gradient to blend smoothly into page */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fcf9f8] via-[#fcf9f8]/60 to-transparent pointer-events-none" />

        {/* Live Semantic Typography Overlay from Frame 3681 */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-32">
          <div className="max-w-xl text-left rtl:text-right">
            {/* Tagline 1 & 2 */}
            <h2
              className="text-3xl sm:text-2xl lg:text-[34px] font-black uppercase tracking-tight text-slate-900 leading-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t.hero.tagline1} {t.hero.tagline2}
            </h2>

            {/* BIG SAVINGS GUARANTEED! */}
            <h1
              className="text-4xl sm:text-6xl lg:text-[76px] font-black italic uppercase tracking-[-1.5px] leading-[0.9] my-2 sm:my-3"
              style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}
            >
              {/* <span className="text-[#b20163] drop-shadow-sm">{t.hero.bigSavings}</span>{' '} */}
              <span className="  bg-gradient-to-b
    from-[#ff1493]
    via-[#d90075]
    to-[#990052]
    bg-clip-text
    text-transparent
    drop-shadow-sm">{t.hero.bigSavings}</span>{' '}
              {/* <span className="text-[#d8b93c] drop-shadow-sm">{t.hero.guaranteed}</span> */}
              {/* <span className="text-[#d8b93c] drop-shadow-sm">{t.hero.guaranteed}</span> */}
              <span className="    bg-gradient-to-b
    from-[#FFF6B0]
    via-[#FFE06A]
    to-[#D4A900]
    bg-clip-text
    text-transparent
    drop-shadow-sm">{t.hero.guaranteed}</span>
            </h1>

            {/* Subheadings */}
            {/* <p className="text-base sm:text-xl font-bold text-slate-900 drop-shadow-xs">
              {t.hero.subheading1}
            </p> */}
            <p
              className="text-base sm:text-xl font-bold text-black tracking-tight leading-tight drop-shadow-sm"
              style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontWeight: 700,
              }}
            >
              {t.hero.subheading1}
            </p>
            {/* <p className="text-sm sm:text-lg font-bold text-slate-900 mt-1 drop-shadow-xs">
              {t.hero.subheading2}
            </p> */}
            <p
              className="text-sm sm:text-lg font-black text-[#111111] mt-1 tracking-[-0.3px] leading-tight"
              style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontWeight: 900,
              }}
            >
              {t.hero.subheading2}
            </p>
            {/* <p className="text-sm sm:text-base font-extrabold text-[#b20163] mt-2 drop-shadow-xs">
              {t.hero.saveBig}
            </p> */}
            <p
              className="text-sm sm:text-base font-extrabold mt-2 tracking-tight leading-tight"
              style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontWeight: 800,
                background: "linear-gradient(to bottom, #ff1493 0%, #d90075 55%, #990052 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t.hero.saveBig}
            </p>
          </div>
        </div>
      </div>

      {/* Search Widget Container (Figma Overlay+Border+OverlayBlur 1574:3352) */}
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-5 -mt-16 sm:-mt-20 lg:-mt-24 z-20">
        <div
          id="search-box"
          className="bg-white rounded-[22px] shadow-[0_10px_25px_rgba(0,0,0,0.16)] px-4 sm:px-6 lg:px-7 py-4 sm:py-5 text-slate-900 border border-white"
        >
          {/* Service Tabs */}
          <div
            className="
    flex items-center gap-1.5 sm:gap-3
    overflow-x-auto
    pb-3
    border-b border-[#f1e5eb]
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
  "
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`
              flex items-center gap-1.5
              px-4 sm:px-5
              py-2
              rounded-full
              text-xs sm:text-sm
              font-bold
              whitespace-nowrap
              transition-all
              cursor-pointer
              ${isActive
                      ? "bg-gradient-to-r from-[#b20163] to-[#f20b82] text-white shadow-md shadow-[#b20163]/25"
                      : "text-[#20202a] hover:text-[#b20163]"
                    }
            `}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Form Title */}
          <h3
            className="text-sm sm:text-base font-extrabold text-[#20202a] mt-5 mb-4 uppercase"
            style={{
              fontFamily: "'Barlow Semi Condensed', sans-serif",
            }}
          >
            {t.search.title}
          </h3>

          {/* Search Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.35fr_55px_1.35fr_1fr_0.85fr_0.95fr] gap-3 items-end"
          >
            {/* FROM */}
            <div>
              <label
                className="block text-xs font-bold text-[#7d174f] mb-1.5 uppercase"
                style={{
                  fontFamily: "'Barlow Semi Condensed', sans-serif",
                }}
              >
                {t.search.from}
              </label>

              <div className="h-[48px] flex items-center bg-white border-2 border-[#ebcad9] rounded-xl px-3 transition-all hover:border-[#dca5bd] focus-within:border-[#b20163]">
                <MapPin className="w-4 h-4 text-[#8f7d84] shrink-0 mr-2" />

                <select
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-[#81737a] focus:outline-none cursor-pointer appearance-none"
                >
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <svg
                  className="w-3.5 h-3.5 text-[#8f7d84] pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* SWAP */}
            <div className="hidden lg:flex justify-center items-end pb-1">
              <button
                type="button"
                onClick={handleSwap}
                className="w-[40px] h-[40px] rounded-full bg-white border-2 border-[#f0b4d0] flex items-center justify-center text-[#8b1550] hover:bg-[#fff5fa] hover:border-[#b20163] transition-all cursor-pointer"
                title="Swap Cities"
              >
                <ArrowLeftRight className="w-4 h-4" />
              </button>
            </div>

            {/* TO */}
            <div>
              <label
                className="block text-xs font-bold text-[#7d174f] mb-1.5 uppercase"
                style={{
                  fontFamily: "'Barlow Semi Condensed', sans-serif",
                }}
              >
                {t.search.to}
              </label>

              <div className="h-[48px] flex items-center bg-white border-2 border-[#ebcad9] rounded-xl px-3 transition-all hover:border-[#dca5bd] focus-within:border-[#b20163]">
                <MapPin className="w-4 h-4 text-[#8f7d84] shrink-0 mr-2" />

                <select
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-[#81737a] focus:outline-none cursor-pointer appearance-none"
                >
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <svg
                  className="w-3.5 h-3.5 text-[#8f7d84] pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* DATE */}
            <div>
              <label
                className="block text-xs font-bold text-[#7d174f] mb-1.5 uppercase"
                style={{
                  fontFamily: "'Barlow Semi Condensed', sans-serif",
                }}
              >
                {t.search.date}
              </label>

              <div className="h-[48px] flex items-center bg-white border-2 border-[#ebcad9] rounded-xl px-3 transition-all hover:border-[#dca5bd] focus-within:border-[#b20163]">
                <Calendar className="w-4 h-4 text-[#8f7d84] shrink-0 mr-2" />

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-[#81737a] focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* PASSENGERS */}
            <div>
              <label
                className="block text-xs font-bold text-[#7d174f] mb-1.5 uppercase"
                style={{
                  fontFamily: "'Barlow Semi Condensed', sans-serif",
                }}
              >
                {t.search.passengers}
              </label>

              <div className="h-[48px] flex items-center bg-white border-2 border-[#ebcad9] rounded-xl px-3 transition-all hover:border-[#dca5bd] focus-within:border-[#b20163]">
                <Users className="w-4 h-4 text-[#8f7d84] shrink-0 mr-2" />

                <select
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="w-full bg-transparent text-sm font-medium text-[#81737a] focus:outline-none cursor-pointer appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>

                <svg
                  className="w-3.5 h-3.5 text-[#8f7d84] pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* SEARCH BUTTON */}
            <div>
              <button
                type="submit"
                className="
            w-full
            h-[48px]
            bg-gradient-to-r
            from-[#ffe26d]
            via-[#ffdf63]
            to-[#d9b747]
            hover:brightness-105
            text-[#17171d]
            font-extrabold
            text-sm sm:text-base
            rounded-xl
            shadow-md
            transition-all
            flex
            items-center
            justify-center
            gap-2
            cursor-pointer
          "
                style={{
                  fontFamily: "'Barlow Semi Condensed', sans-serif",
                }}
              >
                <span>{t.search.btnSearch}</span>

                <span className="w-6 h-6 rounded-full  flex items-center justify-center">
                  <ArrowRight className="w-4.5 h-4.5 txt-[#17171d]" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
