import { PROCESS_STEPS, getWaLink } from '../data/content';
import { MessageSquare, LayoutTemplate, RefreshCw, Rocket, ArrowRight } from 'lucide-react';

export const Process = () => {
  const stepIcons = [
    <MessageSquare className="w-5 h-5 text-[#9D50FF]" />,
    <LayoutTemplate className="w-5 h-5 text-[#2D3FE7]" />,
    <RefreshCw className="w-5 h-5 text-[#9D50FF]" />,
    <Rocket className="w-5 h-5 text-[#2D3FE7]" />,
  ];

  return (
    <section id="proses" className="py-20 bg-[#F8F9FD] dark:bg-[#0F111A] relative border-t-4 border-[#2D3FE7] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white dark:bg-[#1A1D29] border-2 border-[#9D50FF] text-[#9D50FF] text-xs font-mono font-black tracking-wider uppercase mb-3 shadow-[2px_2px_0px_#2D3FE7]">
            <span>Alur Pengerjaan Kilat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black italic uppercase text-slate-900 dark:text-white tracking-tight mb-4">
            Proses Kerja Sederhana,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D3FE7] via-[#9D50FF] to-[#2D3FE7]">
              Tanpa Bikin Kamu Pusing
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
            Kamu cukup siapkan info produk & kontak usahamu, biarkan kami yang urus seluruh aspek teknisnya sampai live di internet.
          </p>
        </div>

        {/* 4 Steps Sequential Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-14">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              id={`process-step-${step.number}`}
              className="bg-white dark:bg-[#1A1D29] border-2 border-[#2D3FE7] hover:border-[#9D50FF] rounded-2xl p-6 flex flex-col justify-between relative group transition-all duration-200 hover:-translate-y-1 shadow-[4px_4px_0px_#9D50FF]"
            >
              {/* Step Sequence Badge & Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#0F111A] border-2 border-[#2D3FE7] flex items-center justify-center shadow-inner">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-mono text-2xl font-black text-[#9D50FF] group-hover:text-[#2D3FE7] dark:group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                </div>

                <div className="inline-block text-[10px] font-mono font-black uppercase tracking-wider text-[#2D3FE7] bg-[#2D3FE7]/10 px-2 py-0.5 rounded mb-3 border border-[#2D3FE7]/30">
                  {step.durationTag}
                </div>

                <h3 className="text-xl font-black italic uppercase text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Arrow for desktop sequence */}
              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="w-7 h-7 rounded-full bg-[#2D3FE7] border-2 border-[#9D50FF] flex items-center justify-center text-white shadow-md">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="text-center">
          <a
            id="process-start-wa-btn"
            href={getWaLink('Halo RedRush! Saya mau mulai konsultasi langkah pertama untuk pembuatan landing page usaha saya.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2D3FE7] to-[#9D50FF] hover:from-[#2D3FE7]/90 hover:to-[#9D50FF]/90 text-white font-black px-7 py-4 rounded-xl shadow-[4px_4px_0px_#0F111A] dark:shadow-[4px_4px_0px_#FFFFFF] text-xs uppercase tracking-wider transition-all active:scale-95 border-2 border-slate-900 dark:border-white"
          >
            <span>Mulai Langkah 01 via WhatsApp Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
