'use client';

import React, { useState, useEffect } from 'react';
import { Locale, translations } from '@/lib/translations';
import { Lock, CheckCircle2, AlertCircle } from 'lucide-react';

interface SeatMapPreviewProps {
  locale: Locale;
}

interface SelectedSeat {
  id: string;
  fare: number;
}

export function SeatMapPreview({ locale }: SeatMapPreviewProps) {
  const t = translations[locale];
  const [selectedSeats, setSelectedSeats] = useState<SelectedSeat[]>([{ id: '1C', fare: 165 }]);
  const [secondsLeft, setSecondsLeft] = useState(582); // 9m 42s

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = () => {
    const mins = Math.floor(secondsLeft / 60)
      .toString()
      .padStart(2, '0');
    const secs = (secondsLeft % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const toggleSeat = (seatId: string, fare: number) => {
    const existing = selectedSeats.find((s) => s.id === seatId);
    if (existing) {
      setSelectedSeats(selectedSeats.filter((s) => s.id !== seatId));
    } else {
      if (selectedSeats.length >= 4) {
        alert(locale === 'ar' ? 'الحد الأقصى لحجز المقاعد هو 4 مقاعد' : 'Max 4 seats allowed per booking.');
        return;
      }
      setSelectedSeats([...selectedSeats, { id: seatId, fare }]);
    }
  };

  const isSelected = (id: string) => selectedSeats.some((s) => s.id === id);

  const baseFare = selectedSeats.reduce((acc, s) => acc + s.fare, 0);
  const vat = baseFare * 0.15;
  const total = baseFare + vat;

  return (
    <section id="seat-preview" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
              {t.seatMap.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">{t.seatMap.title}</h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">{t.seatMap.description}</p>
          </div>

          {/* Seat Legend */}
          <div className="flex items-center gap-4 text-xs font-bold text-slate-600 flex-wrap bg-white px-4 py-2.5 rounded-2xl border border-slate-200">
            <span className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-slate-200 border border-slate-300" />
              <span>{t.seatMap.avail}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-emerald-600" />
              <span>{t.seatMap.selected}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-slate-400" />
              <span>{t.seatMap.occupied}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-pink-400" />
              <span>{t.seatMap.ladies}</span>
            </span>
          </div>
        </div>

        {/* Seat Map & Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bus Interior Visual (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">
                  VIP
                </span>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">Mercedes-Benz Travego 2+1 Executive</h4>
                  <p className="text-xs text-slate-400">SAPTCO Premium Express (Trip #SP-904)</p>
                </div>
              </div>
              <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold">
                <button className="px-3 py-1 rounded-lg bg-white text-emerald-700 shadow-xs">Lower Deck</button>
                <button className="px-3 py-1 rounded-lg text-slate-500 hover:text-slate-900">Upper Deck</button>
              </div>
            </div>

            {/* Cabin Layout */}
            <div className="relative bg-slate-50 rounded-2xl p-6 border-2 border-dashed border-slate-200">
              {/* Front Cabin Windshield */}
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-400">{t.seatMap.busFront}</span>
                <span className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-xs">🚌</span>
              </div>

              {/* Rows */}
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleSeat('1A', 140)}
                      className={`w-12 h-12 rounded-xl border flex flex-col items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                        isSelected('1A')
                          ? 'bg-emerald-600 text-white border-emerald-700 shadow-md shadow-emerald-600/30'
                          : 'bg-slate-200 hover:bg-emerald-100 border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>1A</span>
                      <span className="text-[9px] font-normal">140</span>
                    </button>
                    <button
                      onClick={() => toggleSeat('1B', 140)}
                      className={`w-12 h-12 rounded-xl border flex flex-col items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                        isSelected('1B')
                          ? 'bg-emerald-600 text-white border-emerald-700 shadow-md shadow-emerald-600/30'
                          : 'bg-slate-200 hover:bg-emerald-100 border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>1B</span>
                      <span className="text-[9px] font-normal">140</span>
                    </button>
                  </div>
                  <div className="text-xs font-bold text-slate-300 tracking-widest uppercase">AISLE</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleSeat('1C', 165)}
                      className={`w-12 h-12 rounded-xl border flex flex-col items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                        isSelected('1C')
                          ? 'bg-emerald-600 text-white border-emerald-700 shadow-md shadow-emerald-600/30'
                          : 'bg-slate-200 hover:bg-emerald-100 border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>1C</span>
                      <span className="text-[9px] font-normal">VIP</span>
                    </button>
                  </div>
                </div>

                {/* Row 2 (Sold) */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-xl bg-slate-400 text-white border border-slate-500 flex flex-col items-center justify-center text-xs font-bold opacity-75">
                      <span>2A</span>
                      <span className="text-[9px]">SOLD</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-slate-400 text-white border border-slate-500 flex flex-col items-center justify-center text-xs font-bold opacity-75">
                      <span>2B</span>
                      <span className="text-[9px]">SOLD</span>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-slate-300 tracking-widest uppercase">AISLE</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleSeat('2C', 165)}
                      className={`w-12 h-12 rounded-xl border flex flex-col items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                        isSelected('2C')
                          ? 'bg-emerald-600 text-white border-emerald-700 shadow-md shadow-emerald-600/30'
                          : 'bg-slate-200 hover:bg-emerald-100 border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>2C</span>
                      <span className="text-[9px] font-normal">165</span>
                    </button>
                  </div>
                </div>

                {/* Row 3 (Ladies Section) */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleSeat('3A', 140)}
                      className={`w-12 h-12 rounded-xl border flex flex-col items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                        isSelected('3A')
                          ? 'bg-emerald-600 text-white border-emerald-700'
                          : 'bg-pink-100 hover:bg-pink-200 border-pink-300 text-pink-700'
                      }`}
                    >
                      <span>3A</span>
                      <span className="text-[9px]">♀ LADY</span>
                    </button>
                    <button
                      onClick={() => toggleSeat('3B', 140)}
                      className={`w-12 h-12 rounded-xl border flex flex-col items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                        isSelected('3B')
                          ? 'bg-emerald-600 text-white border-emerald-700'
                          : 'bg-pink-100 hover:bg-pink-200 border-pink-300 text-pink-700'
                      }`}
                    >
                      <span>3B</span>
                      <span className="text-[9px]">♀ LADY</span>
                    </button>
                  </div>
                  <div className="text-xs font-bold text-slate-300 tracking-widest uppercase">AISLE</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleSeat('3C', 165)}
                      className={`w-12 h-12 rounded-xl border flex flex-col items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                        isSelected('3C')
                          ? 'bg-emerald-600 text-white border-emerald-700'
                          : 'bg-slate-200 hover:bg-emerald-100 border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>3C</span>
                      <span className="text-[9px] font-normal">165</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Rear amenities */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400 font-bold">
                <span>🚽 Restroom Equipped</span>
                <span>Emergency Exit 🚪</span>
              </div>
            </div>
          </div>

          {/* Real-Time Reservation Card (Span 5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h4 className="font-extrabold text-base text-slate-900">{t.seatMap.cartTitle}</h4>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                <Lock className="w-3.5 h-3.5" />
                <span>
                  Lock: <strong>{formatTimer()}</strong>
                </span>
              </div>
            </div>

            {/* Trip Details */}
            <div className="py-4 border-b border-slate-100 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">{t.seatMap.selectedRoute}</span>
                <span className="font-bold text-slate-900">Riyadh ➔ Jeddah</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">{t.seatMap.departureTime}</span>
                <span className="font-bold text-slate-900">Fri, 25 Sep · 08:30 AM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">{t.seatMap.operator}</span>
                <span className="font-bold text-emerald-700">SAPTCO VIP Express</span>
              </div>
            </div>

            {/* Selected Seats Badges */}
            <div className="py-4 border-b border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                {t.seatMap.selectedSeats}
              </label>
              <div className="flex flex-wrap gap-2">
                {selectedSeats.length === 0 ? (
                  <span className="text-xs text-slate-400 italic">No seats selected.</span>
                ) : (
                  selectedSeats.map((s) => (
                    <span
                      key={s.id}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200"
                    >
                      Seat {s.id} ({s.fare} SAR)
                    </span>
                  ))
                )}
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="py-4 border-b border-slate-100 space-y-2">
              <div className="flex justify-between text-sm text-slate-600">
                <span>{t.seatMap.baseFare}</span>
                <span className="font-bold text-slate-800">{baseFare.toFixed(2)} SAR</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                <span>{t.seatMap.vat}</span>
                <span className="font-bold text-slate-800">{vat.toFixed(2)} SAR</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-100">
                <span>{t.seatMap.total}</span>
                <span className="text-emerald-700 text-lg">{total.toFixed(2)} SAR</span>
              </div>
            </div>

            {/* Checkout Action */}
            <div className="mt-6 space-y-3">
              <button
                onClick={() => alert('Proceeding to instant payment gateway...')}
                disabled={selectedSeats.length === 0}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 text-sm transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>{t.seatMap.btnCheckout}</span>
              </button>
              <p className="text-[11px] text-center text-slate-400">{t.seatMap.lockPill}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
