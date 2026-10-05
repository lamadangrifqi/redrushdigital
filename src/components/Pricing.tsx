import { useState } from 'react';
import { PRICING_PACKAGES, ADD_ON_SERVICES, FAQS, PAYMENT_METHODS, getWaLink } from '../data/content';
import { 
  Check, 
  MessageCircle, 
  Clock, 
  RotateCcw, 
  Sparkles, 
  ShieldCheck, 
  FileText,
  ChevronDown,
  HelpCircle,
  CreditCard,
  CheckCircle2,
  Lock,
  Headphones,
  QrCode,
  FileImage,
  MapPin,
  RefreshCw,
  PlusCircle
} from 'lucide-react';
import { playSubtleHoverChime } from '../utils/sound';

export const Pricing = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="paket" className="py-20 bg-[#F8F9FD] dark:bg-[#0F111A] relative border-t-4 border-[#9D50FF] transition-colors duration-200">
      {/* Visual background lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[#2D3FE7]/10 dark:bg-[#2D3FE7]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white dark:bg-[#1A1D29] border-2 border-[#2D3FE7] text-[#2D3FE7] text-xs font-mono font-black tracking-wider uppercase mb-3 shadow-[2px_2px_0px_#9D50FF]">
            <span>Investasi Terjangkau UMKM & Jasa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black italic uppercase text-slate-900 dark:text-white tracking-tight mb-4">
            Pilihan Pembuatan Website{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D3FE7] via-[#9D50FF] to-[#2D3FE7]">
              Transparan & Terima Beres
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
            Mulai dari etalase link bio cepat hingga toko digital lengkap dengan domain kustom resmi. Biaya hosting server kami yang tanggung, langsung siap terima pesanan WhatsApp!
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;
            const waUrl = getWaLink(pkg.waMessage);

            return (
              <div
                key={pkg.id}
                id={`pricing-card-${pkg.id}`}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-200 ${
                  isPopular
                    ? 'bg-white dark:bg-[#1A1D29] border-4 border-[#9D50FF] shadow-[8px_8px_0px_#2D3FE7] lg:-translate-y-3 z-10'
                    : 'bg-white dark:bg-[#1A1D29] border-2 border-[#2D3FE7] hover:border-[#9D50FF] shadow-[4px_4px_0px_#9D50FF]'
                } p-6 sm:p-8`}
              >
                {/* Popular / Pro Badge */}
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#9D50FF] text-white font-mono text-xs font-black tracking-wider uppercase shadow-[3px_3px_0px_#2D3FE7] border-2 border-white whitespace-nowrap">
                      <Sparkles className="w-3.5 h-3.5" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Top Package Details */}
                <div>
                  {/* Package Title & Domain Badge */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-2xl font-black italic uppercase text-slate-900 dark:text-white">{pkg.name}</h3>
                      {pkg.domainBadge && (
                        <span className={`text-[11px] font-mono font-black px-2.5 py-1 rounded-lg border ${
                          pkg.id === 'growth' 
                            ? 'bg-[#2D3FE7] text-white border-[#9D50FF] shadow-[2px_2px_0px_#9D50FF]'
                            : pkg.id === 'bisnis'
                            ? 'bg-[#9D50FF]/15 text-[#9D50FF] dark:text-[#C084FC] border-[#9D50FF]'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                        }`}>
                          {pkg.domainBadge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-2 min-h-[36px] leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Exact Price with Promo Strike-through */}
                  <div className="py-4 my-2 border-y border-slate-200 dark:border-slate-800">
                    {pkg.originalPrice && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-slate-400 dark:text-slate-500 line-through">
                          {pkg.originalPrice}
                        </span>
                        <span className="text-[10px] font-mono font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400 px-1.5 py-0.5 rounded border border-rose-500/20">
                          PROMO KHUSUS
                        </span>
                      </div>
                    )}
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">/ terima beres</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-1">
                      {pkg.id === 'starter' ? 'Hosting gratis tanpa biaya perpanjangan tahunan' : 'Termasuk domain aktif 1 tahun & server cloud'}
                    </p>
                  </div>

                  {/* Duration & Revision Quick Badges */}
                  <div className="grid grid-cols-2 gap-2 my-4">
                    <div className="bg-slate-50 dark:bg-[#0F111A] border border-slate-200 dark:border-[#2D3FE7]/40 rounded-xl p-2.5 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#9D50FF] shrink-0" />
                      <div className="text-left">
                        <div className="text-[10px] uppercase font-mono font-bold text-slate-500 dark:text-slate-400">Pengerjaan</div>
                        <div className="text-xs font-black text-slate-900 dark:text-white">{pkg.duration.replace('Selesai ', '')}</div>
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-[#0F111A] border border-slate-200 dark:border-[#2D3FE7]/40 rounded-xl p-2.5 flex items-center gap-2">
                      <RotateCcw className="w-4 h-4 text-[#2D3FE7] shrink-0" />
                      <div className="text-left">
                        <div className="text-[10px] uppercase font-mono font-bold text-slate-500 dark:text-slate-400">Revisi</div>
                        <div className="text-xs font-black text-slate-900 dark:text-white">{pkg.revision}</div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Check List */}
                  <div className="space-y-3 my-6">
                    <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-black tracking-wider">
                      Fasilitas Nyata yang Didapat:
                    </div>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                        <div className="w-4 h-4 rounded bg-[#2D3FE7] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_#9D50FF]">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Buttons per Package */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                  <a
                    id={`pricing-wa-btn-${pkg.id}`}
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={playSubtleHoverChime}
                    className={`w-full flex items-center justify-center gap-2 font-black py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-[4px_4px_0px_#0F111A] dark:shadow-[4px_4px_0px_#FFFFFF] border-2 border-slate-900 dark:border-white ${
                      isPopular
                        ? 'bg-[#9D50FF] hover:bg-[#9D50FF]/90 text-white'
                        : 'bg-[#2D3FE7] hover:bg-[#2D3FE7]/90 text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Pilih {pkg.name} via WhatsApp</span>
                  </a>

                  <a
                    id={`pricing-form-btn-${pkg.id}`}
                    href="#rancang-konsep"
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-[#2D3FE7] dark:hover:text-white transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#9D50FF]" />
                    <span>Isi Form Konsep {pkg.name} &rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECTION: Add-On Services (Akrilik QR Review, Desain Cetak, Setup Maps, etc.) */}
        <div id="add-ons-section" className="mb-20 bg-white dark:bg-[#161926] border-2 border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#9D50FF]/10 text-[#9D50FF] font-mono text-[11px] font-black uppercase tracking-wider mb-2">
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Tambahan Opsional Sesuai Kebutuhan</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black italic uppercase text-slate-900 dark:text-white tracking-tight">
                Layanan Add-On & Kebutuhan Kasir / Toko
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1 max-w-2xl">
                Bisa kamu tambahkan ke paket website apa saja (Starter, Bisnis, atau Growth). Sangat praktis untuk mempercepat bintang 5 Google Maps dan memajang menu di meja kasir.
              </p>
            </div>
            <a
              href={getWaLink('Halo RedRush! Saya mau tanya add-on tambahan website (seperti stand akrilik QR Review Google / setup Maps)')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#0F111A] border-2 border-[#2D3FE7] text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider hover:border-[#9D50FF] transition-all shrink-0 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-[#2D3FE7] dark:text-[#9D50FF]" />
              <span>Tanya Add-On via WA</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ADD_ON_SERVICES.map((addon) => {
              const renderIcon = () => {
                switch (addon.iconName) {
                  case 'QrCode':
                    return <QrCode className="w-5 h-5 text-[#9D50FF]" />;
                  case 'FileImage':
                    return <FileImage className="w-5 h-5 text-[#2D3FE7] dark:text-[#9D50FF]" />;
                  case 'MapPin':
                    return <MapPin className="w-5 h-5 text-emerald-500" />;
                  case 'RefreshCw':
                    return <RefreshCw className="w-5 h-5 text-amber-500" />;
                  default:
                    return <Sparkles className="w-5 h-5 text-[#2D3FE7]" />;
                }
              };

              return (
                <div
                  key={addon.id}
                  className={`p-4 rounded-xl border-2 flex flex-col justify-between transition-all ${
                    addon.isPopular
                      ? 'bg-gradient-to-b from-[#9D50FF]/5 to-transparent border-[#9D50FF]/50 shadow-[2px_2px_0px_#9D50FF]'
                      : 'bg-slate-50 dark:bg-[#0F111A]/60 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="w-9 h-9 rounded-lg bg-white dark:bg-[#1A1D29] border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                        {renderIcon()}
                      </div>
                      {addon.badge && (
                        <span className="text-[9px] font-mono font-black bg-[#9D50FF] text-white px-2 py-0.5 rounded shadow-[1px_1px_0px_#2D3FE7] whitespace-nowrap">
                          {addon.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white leading-snug mb-1">
                      {addon.name}
                    </h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-3">
                      {addon.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-black text-slate-900 dark:text-white font-mono">
                        {addon.price}
                      </div>
                      <div className="text-[10px] text-slate-600 dark:text-slate-400 font-medium">
                        {addon.unit}
                      </div>
                    </div>
                    <a
                      href={`#rancang-konsep`}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2D3FE7] dark:text-[#9D50FF] hover:underline"
                    >
                      <span>Pilih di Form</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION: 3 Pillar Guarantees & Payment Scheme (Risk-Reversal) */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-black italic uppercase text-slate-900 dark:text-white tracking-tight">
              Garansi Keamanan & Skema Pembayaran Nyaman
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1">
              Kami pastikan proses pemesanan website transparan, aman, dan tanpa rasa cemas untuk seluruh pelaku usaha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: DP 30% Flexible Scheme */}
            <div className="bg-white dark:bg-[#1A1D29] border-2 border-[#2D3FE7] rounded-2xl p-6 shadow-[4px_4px_0px_#9D50FF] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#2D3FE7]/10 dark:bg-[#2D3FE7]/20 border border-[#2D3FE7] flex items-center justify-center text-[#2D3FE7] dark:text-[#9D50FF]">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="text-base font-black italic uppercase text-slate-900 dark:text-white">
                  Skema DP 30% & Domain Aktif
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Tidak perlu bayar lunas di depan. <strong>Cukup DP mulai 30%</strong> saat brief disepakati, pengerjaan langsung dimulai dan domain resmi (.my.id) langsung kami amankan. Sisa pelunasan dibayarkan setelah draf website selesai & kamu puas.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 text-xs text-[#2D3FE7] dark:text-[#9D50FF] font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Tanpa Beban Modal Berat</span>
              </div>
            </div>

            {/* Card 2: Revision Guarantee */}
            <div className="bg-white dark:bg-[#1A1D29] border-2 border-[#9D50FF] rounded-2xl p-6 shadow-[4px_4px_0px_#2D3FE7] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#9D50FF]/10 dark:bg-[#9D50FF]/20 border border-[#9D50FF] flex items-center justify-center text-[#9D50FF]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-base font-black italic uppercase text-slate-900 dark:text-white">
                  Garansi Revisi Hingga Pas
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Setiap draf diperiksa bersama. Kami pastikan foto produk, katalog jasa, skema warna, teks promosi, dan nomor WhatsApp terpasang sempurna sesuai keinginanmu.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 text-xs text-[#9D50FF] font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Dukungan Penuh Selera Klien</span>
              </div>
            </div>

            {/* Card 3: 30-Day Free Tech Support */}
            <div className="bg-white dark:bg-[#1A1D29] border-2 border-[#2D3FE7] rounded-2xl p-6 shadow-[4px_4px_0px_#9D50FF] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#2D3FE7]/10 dark:bg-[#2D3FE7]/20 border border-[#2D3FE7] flex items-center justify-center text-[#2D3FE7] dark:text-[#9D50FF]">
                  <Headphones className="w-6 h-6" />
                </div>
                <h4 className="text-base font-black italic uppercase text-slate-900 dark:text-white">
                  Support Teknis 30 Hari
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  Ada nomor WhatsApp yang mau diubah, ganti harga menu produk, atau ada pertanyaan teknis? Kami beri bantuan gratis selama 30 hari penuh setelah website tayang online.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 text-xs text-[#2D3FE7] dark:text-[#9D50FF] font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Bantuan Cepat via WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: Supported Payment Methods */}
        <div className="mb-16 bg-white dark:bg-[#1A1D29] border-2 border-[#2D3FE7] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#9D50FF]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono font-black text-[#2D3FE7] dark:text-[#9D50FF] uppercase">
                <CreditCard className="w-4 h-4" />
                <span>Metode Pembayaran Resmi</span>
              </div>
              <h4 className="text-lg font-black italic uppercase text-slate-900 dark:text-white">
                Transfer BNI, Jenius, ShopeePay & QRIS
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                Mendukung transfer rekening Bank BNI, Jenius (BTPN), ShopeePay, dan QRIS instan dari semua aplikasi perbankan & e-wallet.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-md">
              {PAYMENT_METHODS.map((pm, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-[#0F111A] border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-mono font-bold shadow-sm"
                >
                  {pm.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION: FAQ Accordion */}
        <div id="faq" className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#1A1D29] border border-[#2D3FE7] text-xs font-mono font-bold text-[#2D3FE7] dark:text-[#9D50FF] uppercase mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Pertanyaan yang Sering Diajukan (FAQ)</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black italic uppercase text-slate-900 dark:text-white tracking-tight">
              Segala Hal yang Perlu Kamu Ketahui
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className="bg-white dark:bg-[#1A1D29] border-2 border-[#2D3FE7] rounded-2xl overflow-hidden shadow-[4px_4px_0px_#9D50FF] transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-snug">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-xl bg-slate-100 dark:bg-[#0F111A] border border-slate-300 dark:border-[#2D3FE7] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#9D50FF] text-white border-white' : 'text-slate-600 dark:text-slate-300'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick WA Prompt for unlisted questions */}
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              Punya pertanyaan lain yang belum terjawab?{' '}
              <a
                href={getWaLink('Halo Tim RedRush! Saya mau tanya seputar pembuatan website untuk usaha saya.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D3FE7] dark:text-[#9D50FF] font-black underline hover:text-[#9D50FF]"
              >
                Tanya langsung via WhatsApp (Respon Cepat) &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
