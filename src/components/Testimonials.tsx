import { TESTIMONIALS, CHAT_TESTIMONIALS } from '../data/content';
import { Star, Quote, CheckCircle2, Store, MessageSquare, CheckCheck } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="testimoni" className="py-20 bg-[#F8F9FD] dark:bg-[#0F111A] relative border-t-4 border-[#2D3FE7] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white dark:bg-[#1A1D29] border-2 border-[#9D50FF] text-[#9D50FF] text-xs font-mono font-black tracking-wider uppercase mb-3 shadow-[2px_2px_0px_#2D3FE7]">
            <span>Contoh Tampilan Ulasan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black italic uppercase text-slate-900 dark:text-white tracking-tight mb-4">
            Contoh Bagian{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D3FE7] via-[#9D50FF] to-[#2D3FE7]">
              Testimoni di Website Anda
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
            Seluruh kutipan dan percakapan di bagian ini adalah contoh tampilan, bukan bukti ulasan pelanggan RedRush.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              id={`testimonial-card-${testi.id}`}
              className="bg-white dark:bg-[#1A1D29] border-2 border-[#2D3FE7] hover:border-[#9D50FF] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[4px_4px_0px_#9D50FF] transition-all duration-200 hover:-translate-y-1 relative"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#9D50FF]/40" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base font-medium leading-relaxed italic mb-6">
                  &ldquo;{testi.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2D3FE7] border-2 border-[#9D50FF] flex items-center justify-center font-black text-white text-xs shadow-md">
                  {testi.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <div className="text-sm font-black italic uppercase text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{testi.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9D50FF]" />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
                    <Store className="w-3.5 h-3.5 text-[#2D3FE7]" />
                    <span>{testi.businessName}</span>
                    <span>• {testi.city}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Chat Screenshots Social Proof Section */}
        <div className="mb-10 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-black text-[#2D3FE7] dark:text-[#9D50FF] uppercase tracking-wider">
              <MessageSquare className="w-4 h-4" />
              <span>Simulasi Percakapan — Bukan Tangkapan Layar</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CHAT_TESTIMONIALS.map((chat) => (
              <div
                key={chat.id}
                className="bg-white dark:bg-[#1A1D29] border-2 border-[#2D3FE7] rounded-3xl overflow-hidden shadow-[6px_6px_0px_#9D50FF]"
              >
                {/* Chat App Header */}
                <div className="bg-[#2D3FE7] text-white px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-white/20 border border-white flex items-center justify-center text-xs font-bold">
                      {chat.sender[0]}
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-tight flex items-center gap-1">
                        <span>{chat.sender}</span>
                        <CheckCircle2 className="w-3 h-3 text-[#9D50FF]" />
                      </div>
                      <div className="text-[10px] text-white/80 font-mono">Online</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-black/20 px-2 py-0.5 rounded text-white/90">
                    WhatsApp Chat
                  </span>
                </div>

                {/* Chat Bubbles Container */}
                <div className="p-4 sm:p-5 bg-slate-100 dark:bg-[#0F111A] space-y-3 min-h-[190px] flex flex-col justify-end">
                  {chat.messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm ${
                          msg.isMe
                            ? 'bg-[#2D3FE7] text-white rounded-tr-none'
                            : 'bg-white dark:bg-[#1A1D29] text-slate-800 dark:text-slate-100 rounded-tl-none border border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <div
                          className={`text-[9px] font-mono mt-1 flex items-center gap-1 justify-end ${
                            msg.isMe ? 'text-white/70' : 'text-slate-400'
                          }`}
                        >
                          <span>{msg.time}</span>
                          {msg.isMe && <CheckCheck className="w-3 h-3 text-[#9D50FF]" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clear Notice Marker as Required by Prompt */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#1A1D29] border border-slate-300 dark:border-[#2D3FE7]/40 text-slate-600 dark:text-slate-400 text-xs font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#9D50FF]" />
            <span>Kutipan ulasan & simulasi chat di atas merupakan <strong>simulasi</strong> untuk visualisasi halaman web.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
