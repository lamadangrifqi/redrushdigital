import { useState } from 'react';
import { getWaLink, PORTFOLIO_ITEMS } from '../data/content';
import { 
  MessageCircle, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  ShoppingBag,
  Store,
  Compass,
  FileText,
  Wrench
} from 'lucide-react';
import { playSubtleHoverChime } from '../utils/sound';

interface HeroProps {
  onSelectPortfolio?: (id: string) => void;
}

export const Hero = ({ onSelectPortfolio }: HeroProps) => {
  const [activeDemoIndex, setActiveDemoIndex] = useState(0);
  const activeDemo = PORTFOLIO_ITEMS[activeDemoIndex];

  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F8F9FD] dark:bg-[#0F111A] transition-colors duration-200"
    >
      {/* Dynamic Vibrant Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-40 overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#2D3FE7]/20 dark:bg-[#2D3FE7]/35 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-[28rem] h-[28rem] bg-[#9D50FF]/20 dark:bg-[#9D50FF]/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[32rem] h-64 bg-[#2D3FE7]/15 dark:bg-[#2D3FE7]/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#2D3FE7_1px,transparent_1px)] dark:bg-[radial-gradient(#9D50FF_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Location & Specialty Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white dark:bg-[#1A1D29] border-2 border-[#2D3FE7] shadow-[2px_2px_0px_#9D50FF] text-xs font-bold text-slate-800 dark:text-white transition-colors">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#9D50FF] animate-pulse" />
            <span className="font-mono text-[#2D3FE7] dark:text-[#9D50FF] font-black uppercase tracking-wider text-[11px]">
              REDRUSH MEDIA DIGITAL
            </span>
            <span className="text-slate-400 dark:text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-700 dark:text-slate-200 font-bold">
              <Store className="w-3.5 h-3.5 text-[#2D3FE7]" />
              Website UMKM & Usaha Jasa se-Indonesia
            </span>
          </div>
        </div>

        {/* Hero Headline & Subcopy */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight italic uppercase leading-[1.15] sm:leading-[1.1] mb-6">
            Bikin Usaha UMKM & Jasa{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#2D3FE7] via-[#9D50FF] to-[#2D3FE7]">
              Naik Kelas & Kebanjiran Order
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#9D50FF]/80"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 9C50 3 150 2 298 7"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            Lewat Landing Page
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto mb-8">
            Website profesional kilat, mobile-friendly, siap terima pesanan WhatsApp dan booking jasa mulai{' '}
            <span className="text-slate-900 dark:text-white font-black underline decoration-[#9D50FF] decoration-4 underline-offset-4">
              Rp299.000
            </span>
            . Melayani pelaku usaha di Kota Palu, Sulawesi, hingga seluruh pelosok Indonesia. Tanpa ribet coding!
          </p>

          {/* Tri-Action Responsive Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 sm:gap-4 max-w-xl mx-auto mb-8">
            {/* Primary: WhatsApp CTA */}
            <a
              id="hero-wa-primary-cta"
              href={getWaLink('Halo RedRush Media Digital! Saya mau konsultasi pembuatan website landing page untuk usaha UMKM / Jasa saya.')}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playSubtleHoverChime}
              className="flex-1 flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#2D3FE7] to-[#9D50FF] hover:from-[#2D3FE7]/90 hover:to-[#9D50FF]/90 text-white font-black px-6 py-3.5 sm:py-4 rounded-2xl shadow-[4px_4px_0px_#0F111A] dark:shadow-[4px_4px_0px_#FFFFFF] transition-all duration-200 active:scale-95 text-xs sm:text-sm uppercase tracking-wider border-2 border-slate-900 dark:border-white focus:outline-none focus:ring-2 focus:ring-[#2D3FE7]"
            >
              <MessageCircle className="w-5 h-5 fill-white shrink-0" />
              <span>Konsultasi WA</span>
            </a>

            {/* Secondary: Rancang Konsep Form */}
            <a
              id="hero-rancang-konsep-btn"
              href="#rancang-konsep"
              onMouseEnter={playSubtleHoverChime}
              className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-[#1A1D29] hover:bg-slate-100 dark:hover:bg-[#0F111A] text-slate-900 dark:text-white font-black px-6 py-3.5 sm:py-4 rounded-2xl border-2 border-[#9D50FF] shadow-[4px_4px_0px_#2D3FE7] transition-all duration-200 active:scale-95 text-xs sm:text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#9D50FF]"
            >
              <FileText className="w-4 h-4 text-[#9D50FF] shrink-0" />
              <span>Rancang Konsep</span>
            </a>

            {/* Tertiary: Lihat Paket */}
            <a
              id="hero-view-pricing-button"
              href="#paket"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-[#2D3FE7] dark:hover:text-white font-bold text-xs uppercase tracking-wider px-3 py-3 rounded-xl border border-slate-300 dark:border-slate-700 transition-colors"
            >
              <span>Paket Harga</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Key Selling Points Pill Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-slate-900 dark:text-white">
              <Zap className="w-4 h-4 text-[#9D50FF] fill-[#9D50FF] shrink-0" />
              Selesai Cepat 2–5 Hari
            </span>
            <span className="flex items-center gap-1.5 text-slate-900 dark:text-white">
              <Smartphone className="w-4 h-4 text-[#2D3FE7] shrink-0" />
              100% Pas di Layar HP
            </span>
            <span className="flex items-center gap-1.5 text-slate-900 dark:text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              Domain .my.id / .com Resmi
            </span>
            <span className="flex items-center gap-1.5 text-slate-900 dark:text-white">
              <TrendingUp className="w-4 h-4 text-[#9D50FF] shrink-0" />
              Direct WA Order & Booking
            </span>
          </div>
        </div>

        {/* Visual Element: Interactive UMKM & Service Device Preview */}
        <div id="hero-live-preview-container" className="mt-8 max-w-5xl mx-auto">
          {/* Category Switcher for Live Demo */}
          <div className="flex items-center justify-center gap-2 mb-4 overflow-x-auto pb-2 px-2 no-scrollbar">
            <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold mr-1 shrink-0 flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-[#9D50FF]" /> Contoh Desain Usaha:
            </span>
            {PORTFOLIO_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                id={`hero-demo-tab-${item.id}`}
                onClick={() => setActiveDemoIndex(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  activeDemoIndex === idx
                    ? 'bg-[#2D3FE7] text-white border-2 border-[#9D50FF] shadow-[2px_2px_0px_#9D50FF]'
                    : 'bg-white dark:bg-[#1A1D29] text-slate-700 dark:text-slate-300 hover:text-[#2D3FE7] dark:hover:text-white border-2 border-slate-200 dark:border-slate-800 shadow-sm'
                }`}
              >
                <span>{item.category === 'Kuliner' ? '🍜' : item.category === 'Jasa' ? '🧼' : '🪵'}</span>
                <span>{item.category}</span>
                <span className="hidden sm:inline opacity-70">({item.location.split('&')[0]})</span>
              </button>
            ))}
          </div>

          {/* Device Showcase Frame */}
          <div className="relative rounded-3xl bg-white dark:bg-[#1A1D29] border-4 border-[#2D3FE7] p-3 sm:p-5 shadow-[8px_8px_0px_#9D50FF] dark:shadow-2xl dark:shadow-black/80 overflow-hidden transition-colors">
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-100 dark:bg-[#0F111A] rounded-xl border border-slate-200 dark:border-slate-800 mb-3 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <div className="flex items-center gap-1 font-mono text-[11px] text-slate-500 dark:text-slate-400 bg-white dark:bg-[#1A1D29] px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 truncate max-w-[200px] sm:max-w-md">
                <span className="text-[#9D50FF] font-bold">https://</span>
                <span className="text-slate-900 dark:text-white font-bold">
                  {activeDemo.liveUrl ? activeDemo.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : `${activeDemo.id}.my.id`}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>ONLINE 24/7</span>
              </div>
            </div>

            {/* Simulated Mobile & Desktop Landing Page View */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center bg-slate-50 dark:bg-[#0F111A] rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800">
              {/* Left Column: Simulated Landing Page Hero */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-md bg-[#9D50FF]/15 text-[#9D50FF] border border-[#9D50FF]/40">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Preview Desain: {activeDemo.category} ({activeDemo.location})</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black italic uppercase text-slate-900 dark:text-white leading-snug">
                  {activeDemo.mockupData.headline}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {activeDemo.mockupData.subheadline}
                </p>

                {/* Key feature pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {activeDemo.mockupData.keyPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9D50FF] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Order Button Preview inside Landing Page */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={getWaLink(`Halo, saya tertarik pesan untuk contoh demo ${activeDemo.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#2D3FE7] hover:bg-[#9D50FF] text-white text-xs sm:text-sm font-black px-4 py-2.5 rounded-lg shadow-[2px_2px_0px_#0F111A] dark:shadow-[2px_2px_0px_#9D50FF] transition-all uppercase tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{activeDemo.mockupData.ctaText}</span>
                  </a>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="text-amber-500 font-bold">★ {activeDemo.mockupData.rating}</span>
                    <span>• {activeDemo.mockupData.reviewCount}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Simulated Mobile Frame on the side */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[260px] bg-white dark:bg-[#1A1D29] border-4 border-[#9D50FF] rounded-3xl p-3 shadow-[4px_4px_0px_#2D3FE7] relative">
                  <div className="w-16 h-3 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto mb-3" />
                  <div className="bg-slate-100 dark:bg-[#0F111A] rounded-2xl p-3 border border-slate-200 dark:border-slate-800 text-left space-y-2.5">
                    <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1.5">
                      <span className="font-bold text-slate-900 dark:text-white truncate">{activeDemo.title.split('&')[0]}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold shrink-0">Buka</span>
                    </div>
                    <div className="h-20 rounded-lg bg-gradient-to-tr from-[#2D3FE7]/20 to-[#9D50FF]/20 border border-[#2D3FE7]/40 flex items-center justify-center p-2 text-center">
                      {activeDemo.category === 'Jasa' ? (
                        <Wrench className="w-6 h-6 text-[#9D50FF] dark:text-white mb-1" />
                      ) : (
                        <ShoppingBag className="w-6 h-6 text-[#2D3FE7] dark:text-white mb-1" />
                      )}
                    </div>
                    <div className="text-xs font-black text-slate-900 dark:text-white truncate">
                      {activeDemo.mockupData.priceSample}
                    </div>
                    <div className="w-full py-2 rounded-lg bg-[#25D366] text-slate-950 font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 shadow-md">
                      <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                      <span>{activeDemo.category === 'Jasa' ? 'Booking via WA' : 'Order via WA'}</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-center font-mono font-bold text-slate-500 dark:text-slate-400 mt-2">
                    📱 Tampilan Super Ringan di HP
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar inside mockup with call to action */}
            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 px-2 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#9D50FF]" />
                <span>Desain responsif disesuaikan dengan identitas brand, produk & layanan jasa usahamu.</span>
              </div>
              {onSelectPortfolio && (
                <button
                  type="button"
                  onClick={() => onSelectPortfolio(activeDemo.id)}
                  className="text-[#2D3FE7] dark:text-[#9D50FF] hover:underline font-bold underline-offset-2 cursor-pointer"
                >
                  Buka Detail Portofolio &rarr;
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
