import { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS, getWaLink } from '../data/content';
import { PortfolioItem } from '../types';
import { 
  Utensils, 
  Sparkles, 
  Wrench, 
  Eye, 
  MapPin, 
  Check, 
  MessageCircle,
  X,
  Smartphone,
  Monitor,
  Star,
  ExternalLink,
  Globe
} from 'lucide-react';
import { playSubtleHoverChime } from '../utils/sound';

interface PortfolioProps {
  selectedItem?: string | null;
  onCloseDetail?: () => void;
}

export const Portfolio = ({ selectedItem, onCloseDetail }: PortfolioProps) => {
  const [activeFilter, setActiveFilter] = useState<string>('semua');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const [previewDevice, setPreviewDevice] = useState<'mobile' | 'desktop'>('mobile');
  const [selectedVariant, setSelectedVariant] = useState<string>('standar');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'semua') return PORTFOLIO_ITEMS;
    if (activeFilter === 'live') return PORTFOLIO_ITEMS.filter(item => item.isLiveClient || item.liveUrl);
    if (activeFilter === 'konsep') return PORTFOLIO_ITEMS.filter(item => !item.isLiveClient && !item.liveUrl);
    return PORTFOLIO_ITEMS.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase());
  }, [activeFilter]);

  const liveCount = PORTFOLIO_ITEMS.filter(i => i.isLiveClient || i.liveUrl).length;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Kuliner':
        return <Utensils className="w-3.5 h-3.5 text-[#9D50FF]" />;
      case 'Kerajinan':
        return <Sparkles className="w-3.5 h-3.5 text-[#2D3FE7]" />;
      case 'Jasa':
        return <Wrench className="w-3.5 h-3.5 text-[#9D50FF]" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#2D3FE7]" />;
    }
  };

  const openPreview = (item: PortfolioItem) => {
    setActiveModalItem(item);
    setSelectedVariant('standar');
  };

  return (
    <section id="portofolio" className="py-20 bg-[#F8F9FD] dark:bg-[#0F111A] relative border-t-4 border-[#9D50FF] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white dark:bg-[#1A1D29] border-2 border-[#2D3FE7] text-[#2D3FE7] text-xs font-mono font-black tracking-wider uppercase mb-3 shadow-[2px_2px_0px_#9D50FF]">
            <span>Karya Nyata & Galeri Portofolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black italic uppercase text-slate-900 dark:text-white tracking-tight mb-4">
            Portofolio Website{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D3FE7] via-[#9D50FF] to-[#2D3FE7]">
              Klien & Inspirasi Desain
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
            Kombinasi website klien yang sudah aktif (Live) dan konsep etalase modern yang siap disesuaikan dengan produk atau layanan bisnismu.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveFilter('semua')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'semua'
                ? 'bg-[#2D3FE7] text-white shadow-[3px_3px_0px_#9D50FF] scale-105'
                : 'bg-white dark:bg-[#1A1D29] text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-[#2D3FE7]'
            }`}
          >
            Semua ({PORTFOLIO_ITEMS.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('live')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'live'
                ? 'bg-emerald-600 text-white shadow-[3px_3px_0px_#065f46] scale-105'
                : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border border-emerald-400 dark:border-emerald-700 hover:bg-emerald-100'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Klien Live ({liveCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('Kuliner')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'Kuliner'
                ? 'bg-[#2D3FE7] text-white shadow-[3px_3px_0px_#9D50FF] scale-105'
                : 'bg-white dark:bg-[#1A1D29] text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-[#2D3FE7]'
            }`}
          >
            Kuliner
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('Jasa')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'Jasa'
                ? 'bg-[#2D3FE7] text-white shadow-[3px_3px_0px_#9D50FF] scale-105'
                : 'bg-white dark:bg-[#1A1D29] text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-[#2D3FE7]'
            }`}
          >
            Jasa & Fashion
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('Kerajinan')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'Kerajinan'
                ? 'bg-[#2D3FE7] text-white shadow-[3px_3px_0px_#9D50FF] scale-105'
                : 'bg-white dark:bg-[#1A1D29] text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-[#2D3FE7]'
            }`}
          >
            Kerajinan & Kriya
          </button>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredItems.map((item) => {
            const isLive = Boolean(item.isLiveClient || item.liveUrl);

            return (
              <div
                key={item.id}
                id={`portfolio-card-${item.id}`}
                className={`bg-white dark:bg-[#1A1D29] rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group ${
                  isLive
                    ? 'border-2 border-emerald-500 dark:border-emerald-500 shadow-[6px_6px_0px_#059669]'
                    : 'border-2 border-[#2D3FE7] hover:border-[#9D50FF] shadow-[6px_6px_0px_#2D3FE7]'
                }`}
              >
                {/* Card Top Preview Box */}
                <div>
                  <div className={`p-6 border-b-2 relative ${
                    isLive 
                      ? 'bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/20 dark:to-[#0F111A] border-emerald-200 dark:border-emerald-900/50'
                      : 'bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#1A1D29] dark:to-[#0F111A] border-slate-200 dark:border-slate-800'
                  }`}>
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      {isLive ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-black uppercase bg-emerald-600 text-white shadow-[2px_2px_0px_#065f46]">
                          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                          <Globe className="w-3.5 h-3.5" />
                          <span>Klien Nyata (Live Web)</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-black uppercase bg-[#2D3FE7]/10 dark:bg-[#2D3FE7]/20 text-[#2D3FE7] dark:text-[#9D50FF] border border-[#2D3FE7]/30 dark:border-[#9D50FF]/40 shadow-[1px_1px_0px_#2D3FE7]">
                          {getCategoryIcon(item.category)}
                          <span>Konsep Desain: {item.category}</span>
                        </span>
                      )}

                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1 font-bold">
                        <MapPin className="w-3.5 h-3.5 text-[#9D50FF]" />
                        {item.location}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black italic uppercase text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-[#2D3FE7] dark:group-hover:text-[#9D50FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium line-clamp-2">
                      {item.tagline}
                    </p>

                    {/* Preview Box Detail */}
                    <div className="mt-4 bg-white dark:bg-[#0F111A] border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-xs space-y-1.5 shadow-sm">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                        <span className="font-bold text-slate-900 dark:text-white truncate max-w-[170px]">{item.mockupData.headline}</span>
                        <span className="text-amber-500 flex items-center gap-0.5 font-bold">
                          <Star className="w-3 h-3 fill-amber-500" /> {item.mockupData.rating}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#2D3FE7] dark:text-[#9D50FF] font-mono font-black">
                        {item.mockupData.priceSample}
                      </div>
                    </div>
                  </div>

                  {/* Card Body & Features */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                      <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-black">
                        Fitur Unggulan Halaman:
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        {item.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-6 pt-0 space-y-2.5">
                  {item.liveUrl ? (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3 px-4 rounded-xl text-xs uppercase tracking-wider border-2 border-emerald-700 transition-all shadow-[3px_3px_0px_#065f46] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                      <span>Kunjungi Website Live ↗</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      id={`portfolio-preview-btn-${item.id}`}
                      onClick={() => openPreview(item)}
                      onMouseEnter={playSubtleHoverChime}
                      className="w-full flex items-center justify-center gap-2 bg-[#2D3FE7]/10 hover:bg-[#2D3FE7]/20 text-[#2D3FE7] dark:text-[#9D50FF] font-black py-3 px-4 rounded-xl text-xs uppercase tracking-wider border-2 border-[#2D3FE7] dark:border-[#9D50FF] transition-all cursor-pointer shadow-[2px_2px_0px_#2D3FE7]"
                    >
                      <Eye className="w-4 h-4 text-[#9D50FF]" />
                      <span>Lihat Pratinjau Desain</span>
                    </button>
                  )}

                  <a
                    id={`portfolio-order-btn-${item.id}`}
                    href={getWaLink(`Halo RedRush! Saya tertarik membuat website landing page seperti ${item.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#2D3FE7] dark:bg-white/10 dark:hover:bg-[#9D50FF] text-white font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors border border-slate-700/30"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Pesan Website Serupa via WA</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note About Future Work / Customization */}
        <div className="text-center max-w-xl mx-auto">
          <div className="bg-white dark:bg-[#1A1D29] border-2 border-[#2D3FE7] rounded-2xl py-3 px-5 inline-flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 shadow-[3px_3px_0px_#9D50FF]">
            <Sparkles className="w-4 h-4 text-[#9D50FF] shrink-0" />
            <span>
              <strong>Punya Usaha Lain di Palu?</strong> Desain, foto produk, katalog harga, dan nomor WA akan disesuaikan 100% dengan bisnismu.
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Modal for Design Concepts */}
      {activeModalItem && (
        <div
          id="portfolio-detail-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            id="portfolio-detail-modal-content"
            className="bg-white dark:bg-[#1A1D29] border-4 border-[#9D50FF] rounded-3xl max-w-3xl w-full p-5 sm:p-7 shadow-[8px_8px_0px_#2D3FE7] space-y-5 relative max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header & Device Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-black uppercase mb-1.5 bg-[#2D3FE7] text-white shadow-[2px_2px_0px_#9D50FF]">
                  {activeModalItem.category} • Pratinjau Konsep
                </span>
                <h3 className="text-xl sm:text-2xl font-black italic uppercase text-slate-900 dark:text-white">
                  {activeModalItem.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {/* Device View Toggle */}
                <div className="bg-slate-100 dark:bg-[#0F111A] border border-slate-300 dark:border-slate-700 p-1 rounded-xl flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setPreviewDevice('mobile')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      previewDevice === 'mobile'
                        ? 'bg-[#2D3FE7] text-white shadow'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>HP</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewDevice('desktop')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      previewDevice === 'desktop'
                        ? 'bg-[#2D3FE7] text-white shadow'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Laptop</span>
                  </button>
                </div>

                <button
                  type="button"
                  id="close-portfolio-modal-button"
                  onClick={() => setActiveModalItem(null)}
                  aria-label="Tutup jendela modal"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-[#0F111A] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border-2 border-[#2D3FE7] cursor-pointer"
                >
                  <X className="w-5 h-5 text-[#9D50FF]" />
                </button>
              </div>
            </div>

            {/* Interactive Simulated Web View */}
            <div className={`mx-auto transition-all ${previewDevice === 'mobile' ? 'max-w-md' : 'max-w-full'}`}>
              <div className="bg-slate-900 text-white rounded-t-2xl px-4 py-2.5 flex items-center justify-between text-xs font-mono border-2 border-b-0 border-slate-900">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="bg-slate-800 px-3 py-0.5 rounded-md text-[11px] text-slate-300 truncate max-w-[200px]">
                  {activeModalItem.liveUrl ? activeModalItem.liveUrl.replace(/\/$/, '') : `https://${activeModalItem.id}.my.id`}
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">🔒 SSL AKTIF</span>
              </div>

              <div className="bg-slate-50 dark:bg-[#0F111A] border-2 border-slate-900 dark:border-slate-700 rounded-b-2xl p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black italic uppercase text-[#2D3FE7] dark:text-[#9D50FF]">
                    {activeModalItem.title}
                  </span>
                  <span className="text-amber-500 flex items-center gap-1 text-xs font-bold bg-amber-500/10 px-2 py-0.5 rounded-md">
                    <Star className="w-3.5 h-3.5 fill-amber-500" /> {activeModalItem.mockupData.rating} ({activeModalItem.mockupData.reviewCount})
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-base sm:text-lg font-black italic uppercase text-slate-900 dark:text-white leading-snug">
                    {activeModalItem.mockupData.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    {activeModalItem.mockupData.subheadline}
                  </p>
                </div>

                {/* Interactive Variant Chooser Simulation */}
                <div className="bg-white dark:bg-[#1A1D29] border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 space-y-2.5">
                  <div className="text-[11px] font-mono uppercase font-bold text-slate-500 dark:text-slate-400">
                    Pilih Varian Produk / Layanan:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['standar', 'hemat', 'jumbo'].map((variant) => (
                      <button
                        key={variant}
                        type="button"
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                          selectedVariant === variant
                            ? 'bg-[#2D3FE7] text-white shadow-[2px_2px_0px_#9D50FF]'
                            : 'bg-slate-100 dark:bg-[#0F111A] text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                      >
                        Varian {variant} {variant === 'standar' ? '(Terlaris)' : ''}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Key Benefits List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium bg-slate-100/70 dark:bg-[#1A1D29]/50 p-3 rounded-xl">
                  {activeModalItem.mockupData.keyPoints.map((pt, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#9D50FF] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Simulated Order Button */}
                <a
                  href={getWaLink(`Halo RedRush! Saya baru mencoba simulasi demo ${activeModalItem.title} dan ingin pesan website seperti ini.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#2D3FE7] hover:bg-[#9D50FF] text-white font-black py-3 px-4 rounded-xl text-xs uppercase tracking-wider shadow-[3px_3px_0px_#0F111A] border border-slate-900 transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{activeModalItem.mockupData.ctaText}</span>
                </a>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                id="modal-order-wa-button"
                href={getWaLink(`Halo RedRush! Saya ingin memesan website seperti konsep ${activeModalItem.title} (${activeModalItem.category})`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#2D3FE7] hover:bg-[#9D50FF] text-white font-black py-3.5 px-5 rounded-xl shadow-[4px_4px_0px_#0F111A] dark:shadow-[4px_4px_0px_#FFFFFF] border-2 border-slate-900 dark:border-white transition-all active:scale-95 text-xs uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Pesan Konsep Ini via WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-3.5 rounded-xl bg-slate-100 dark:bg-[#0F111A] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-bold text-xs uppercase tracking-wider border border-slate-300 dark:border-slate-700 cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
