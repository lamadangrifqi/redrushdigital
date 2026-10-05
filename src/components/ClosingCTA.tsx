import { getWaLink } from '../data/content';
import { MessageCircle, Zap, ShieldCheck, ArrowRight, FileText } from 'lucide-react';
import { playSubtleHoverChime } from '../utils/sound';

export const ClosingCTA = () => {
  return (
    <section id="cta-penutup" className="py-20 bg-[#F8F9FD] dark:bg-[#0F111A] relative overflow-hidden border-t-4 border-[#9D50FF] transition-colors duration-200">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[#2D3FE7]/10 dark:bg-[#2D3FE7]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-3xl bg-white dark:bg-[#1A1D29] border-4 border-[#2D3FE7] p-6 sm:p-12 lg:p-16 text-center shadow-[10px_10px_0px_#9D50FF] relative overflow-hidden transition-colors">
          {/* Top Kinetic Accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#2D3FE7] via-[#9D50FF] to-[#2D3FE7]" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-[#0F111A] border-2 border-[#9D50FF] text-[#9D50FF] text-xs font-mono font-black tracking-wider uppercase mb-6 shadow-[2px_2px_0px_#2D3FE7]">
            <Zap className="w-3.5 h-3.5 fill-[#9D50FF]" />
            <span>Mulai Langkah Pertama Hari Ini</span>
          </div>

          {/* Closing Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black italic uppercase text-slate-900 dark:text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
            Siap Bikin Usaha Kamu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D3FE7] via-[#9D50FF] to-[#2D3FE7]">
              Lebih Dikenal & Banjir Pesanan?
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Gak perlu tunda lagi. Susun konsep websitemu lewat formulir instan atau langsung konsultasi via WhatsApp dengan tim RedRush Media Digital. 
            Mulai dari <span className="text-slate-900 dark:text-white font-black">Rp299.000</span> (terima beres), website usahamu sudah bisa tayang minggu ini!
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-8">
            <a
              id="closing-giant-wa-cta"
              href={getWaLink('Halo RedRush Media Digital! Saya mau langsung konsultasi dan pesan website untuk usaha UMKM / Jasa saya.')}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playSubtleHoverChime}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 bg-[#2D3FE7] hover:bg-[#9D50FF] text-white font-black text-sm sm:text-base py-4 sm:py-5 px-6 rounded-2xl shadow-[6px_6px_0px_#0F111A] dark:shadow-[6px_6px_0px_#FFFFFF] border-2 border-slate-900 dark:border-white transition-all duration-200 active:scale-95 uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-[#9D50FF]"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white shrink-0" />
              <span>Chat WhatsApp</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </a>

            <a
              id="closing-form-cta"
              href="#rancang-konsep"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white dark:bg-[#0F111A] hover:bg-slate-100 dark:hover:bg-[#1A1D29] text-slate-900 dark:text-white font-black text-sm sm:text-base py-4 sm:py-5 px-6 rounded-2xl shadow-[4px_4px_0px_#9D50FF] border-2 border-[#9D50FF] transition-all duration-200 active:scale-95 uppercase tracking-wider"
            >
              <FileText className="w-5 h-5 text-[#9D50FF] shrink-0" />
              <span>Form Konsep</span>
            </a>
          </div>

          {/* Micro assurances */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono font-bold text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#9D50FF]" />
              Konsultasi 100% Gratis
            </span>
            <span>•</span>
            <span className="text-slate-900 dark:text-white">Respon Cepat via WhatsApp</span>
            <span>•</span>
            <span>Melayani Seluruh Indonesia</span>
          </div>
        </div>
      </div>
    </section>
  );
};
