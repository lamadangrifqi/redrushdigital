import { WHY_REASONS, getWaLink } from '../data/content';
import { ShieldCheck, Zap, Search, ArrowRight, Check, X, Sparkles, FileText } from 'lucide-react';
import { playSubtleHoverChime } from '../utils/sound';

export const WhyWebsite = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#2D3FE7]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#9D50FF]" />;
      case 'SearchCheck':
        return <Search className="w-6 h-6 text-[#2D3FE7]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#9D50FF]" />;
    }
  };

  return (
    <section id="kenapa" className="py-20 bg-[#F8F9FD] dark:bg-[#0F111A] relative border-t-4 border-[#2D3FE7] transition-colors duration-200">
      {/* Background Vibrant Accent Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#2D3FE7]/10 dark:bg-[#2D3FE7]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#9D50FF]/10 dark:bg-[#9D50FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white dark:bg-[#1A1D29] border-2 border-[#9D50FF] text-[#9D50FF] text-xs font-mono font-black tracking-wider uppercase mb-3 shadow-[2px_2px_0px_#2D3FE7]">
            <span>Kenapa Perlu Website?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black italic uppercase text-slate-900 dark:text-white tracking-tight mb-4">
            Medsos Bagus untuk Promosi, Tapi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D3FE7] via-[#9D50FF] to-[#2D3FE7]">
              Website yang Bikin Closing & Booking Cepat
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
            Banyak UMKM dan penyedia jasa kehilangan pelanggan potensial karena chat DM berantakan atau profil terkesan meragukan. 
            Berikut 3 alasan utama kenapa websitemu jadi kunci omzet:
          </p>
        </div>

        {/* 3 Main Reasons Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {WHY_REASONS.map((reason, index) => (
            <div
              key={reason.id}
              id={`why-card-${reason.id}`}
              className="bg-white dark:bg-[#1A1D29] border-l-4 border-l-[#2D3FE7] border-y-2 border-r-2 border-slate-200 dark:border-transparent dark:border-l-4 hover:border-l-[#9D50FF] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-[4px_4px_0px_#2D3FE7] relative overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2D3FE7] via-[#9D50FF] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#0F111A] border-2 border-[#2D3FE7] flex items-center justify-center shadow-inner">
                    {getIcon(reason.iconName)}
                  </div>
                  <span className="font-mono text-2xl font-black text-[#9D50FF] group-hover:text-[#2D3FE7] dark:group-hover:text-white transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <div className="inline-block px-3 py-1 rounded text-[10px] font-mono font-black uppercase tracking-wider bg-[#2D3FE7]/10 dark:bg-[#2D3FE7]/20 text-[#2D3FE7] border border-[#2D3FE7]/40 mb-3">
                  {reason.statsHighlight}
                </div>

                <h3 className="text-xl font-black italic uppercase text-slate-900 dark:text-white mb-2 leading-snug">
                  {reason.title}
                </h3>

                <p className="text-sm font-bold text-[#9D50FF] mb-3">
                  {reason.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6">
                  {reason.description}
                </p>
              </div>

              {/* Before vs After Mini Box inside card */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300 bg-rose-50 dark:bg-[#0F111A] border border-rose-200 dark:border-rose-900/40 rounded-xl p-3">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-rose-600 dark:text-rose-400 block font-bold uppercase text-[10px]">Cuma Medsos:</strong>
                    <span>{reason.solutionDiff.withoutWeb}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-slate-900 dark:text-white bg-slate-50 dark:bg-[#0F111A] border-2 border-[#2D3FE7]/60 rounded-xl p-3 shadow-inner">
                  <Check className="w-4 h-4 text-[#9D50FF] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#9D50FF] block font-bold uppercase text-[10px]">Dengan Website RedRush:</strong>
                    <span>{reason.solutionDiff.withWeb}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Comparison Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#2D3FE7] via-[#9D50FF] to-[#2D3FE7] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[6px_6px_0px_#0F111A] dark:shadow-[6px_6px_0px_#FFFFFF] border-2 border-slate-900 dark:border-white">
          <div className="space-y-1 text-center md:text-left text-white">
            <div className="text-xs font-mono uppercase tracking-wider font-black text-blue-100">
              Siap Dongkrak Omzet Usaha & Jasa?
            </div>
            <h3 className="text-xl sm:text-2xl font-black italic uppercase">
              Jangan Biarkan Pelanggan Ragu & Pindah ke Kompetitor
            </h3>
            <p className="text-xs sm:text-sm text-blue-50 font-medium max-w-xl">
              Susun konsep websitemu lewat formulir instan atau langsung konsultasi via WhatsApp dengan tim RedRush.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              id="why-section-form-button"
              href="#rancang-konsep"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0F111A] hover:bg-slate-900 text-white font-black px-5 py-3.5 rounded-xl shadow-[3px_3px_0px_#FFFFFF] text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#9D50FF]" />
              <span>Isi Form Konsep</span>
            </a>

            <a
              id="why-section-wa-button"
              href={getWaLink('Halo RedRush! Saya mau tanya lebih lanjut tentang manfaat website untuk usaha saya.')}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playSubtleHoverChime}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#2D3FE7] hover:bg-slate-100 font-black px-6 py-3.5 rounded-xl shadow-[4px_4px_0px_#0F111A] text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
            >
              <span>Konsultasi WA</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
