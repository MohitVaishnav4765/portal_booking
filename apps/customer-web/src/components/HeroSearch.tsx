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
      <div className="relative w-full h-[540px] sm:h-[620px] lg:h-[700px] overflow-hidden">
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
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-14 lg:pt-20">
          <div className="max-w-xl text-left rtl:text-right">
            {/* Tagline 1 & 2 */}
            <h2
              className="text-xl sm:text-2xl lg:text-[34px] font-black uppercase tracking-tight text-slate-900 leading-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t.hero.tagline1} {t.hero.tagline2}
            </h2>

            {/* BIG SAVINGS GUARANTEED! */}
            <h1
              className="text-4xl sm:text-6xl lg:text-[76px] font-black italic uppercase tracking-tight leading-none my-2 sm:my-3"
              style={{ fontFamily: "'Barlow Semi Condensed', sans-serif" }}
            >
              <span className="text-[#b20163] drop-shadow-sm">{t.hero.bigSavings}</span>{' '}
              <span className="text-[#d8b93c] drop-shadow-sm">{t.hero.guaranteed}</span>
            </h1>

            {/* Subheadings */}
            <p className="text-base sm:text-xl font-bold text-slate-900 drop-shadow-xs">
              {t.hero.subheading1}
            </p>
            <p className="text-sm sm:text-lg font-bold text-slate-900 mt-1 drop-shadow-xs">
              {t.hero.subheading2}
            </p>
            <p className="text-sm sm:text-base font-extrabold text-[#b20163] mt-2 drop-shadow-xs">
              {t.hero.saveBig}
            </p>
          </div>
        </div>
      </div>

      {/* Search Widget Container (Figma Overlay+Border+OverlayBlur 1574:3352) */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 -mt-24 sm:-mt-28 lg:-mt-32 z-20">
        <div
          id="search-box"
          className="bg-white rounded-3xl shadow-2xl p-5 sm:p-7 text-slate-900 border border-slate-100/80 transition-all backdrop-blur-md"
        >
          {/* Service Category Tabs (8 Tabs from Frame 3681) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-5 border-b border-slate-100 scrollbar-none">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#b20163] text-white shadow-sm shadow-[#b20163]/30'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Form Title */}
          <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-3 uppercase tracking-wider">
            {t.search.title}
          </h3>

          {/* Form Inputs Grid */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
            {/* From City */}
            <div className="lg:col-span-3">
              <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
                {t.search.from}
              </label>
              <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 hover:border-slate-300 focus-within:border-[#b20163] transition-colors">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 ltr:mr-2 rtl:ml-2" />
                <select
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-800 focus:outline-none cursor-pointer"
                >
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Swap Button */}
            <div className="hidden lg:flex lg:col-span-1 justify-center pt-5">
              <button
                type="button"
                onClick={handleSwap}
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 hover:text-[#b20163] transition-all shadow-xs cursor-pointer"
                title="Swap Cities"
              >
                <ArrowLeftRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* To City */}
            <div className="lg:col-span-3">
              <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
                {t.search.to}
              </label>
              <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 hover:border-slate-300 focus-within:border-[#b20163] transition-colors">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 ltr:mr-2 rtl:ml-2" />
                <select
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-800 focus:outline-none cursor-pointer"
                >
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Travel Date */}
            <div className="lg:col-span-2">
              <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
                {t.search.date}
              </label>
              <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 hover:border-slate-300 focus-within:border-[#b20163] transition-colors">
                <Calendar className="w-4 h-4 text-slate-400 shrink-0 ltr:mr-2 rtl:ml-2" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-800 focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Passengers */}
            <div className="lg:col-span-1">
              <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-wider">
                {t.search.passengers}
              </label>
              <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2.5 hover:border-slate-300 focus-within:border-[#b20163] transition-colors">
                <Users className="w-4 h-4 text-slate-400 shrink-0 ltr:mr-1 rtl:ml-1" />
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-800 focus:outline-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Gold Search Button matching Frame 3681 */}
            <div className="lg:col-span-2 pt-2 sm:pt-4 lg:pt-5">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ffe26d] via-[#fdeab2] to-[#d9b747] hover:brightness-105 text-slate-900 font-extrabold px-5 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span className="text-xs sm:text-sm uppercase tracking-wide">
                  {t.search.btnSearch}
                </span>
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
