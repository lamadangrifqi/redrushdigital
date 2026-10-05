import { BRAND, getWaLink } from '../data/content';
import { MapPin, Phone, Clock, ArrowUpRight, FileText } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="bg-slate-900 dark:bg-[#0F111A] border-t-4 border-[#2D3FE7] text-slate-400 text-sm py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#2D3FE7] border-2 border-white shadow-[2px_2px_0px_#9D50FF] flex items-center justify-center font-black text-sm text-white">
                <span>RR</span>
              </div>
              <div>
                <span className="font-black italic uppercase text-lg text-white block leading-tight">
                  {BRAND.name}
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  {BRAND.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-medium leading-relaxed">
              Membantu pelaku UMKM dan penyedia jasa di Palu serta seluruh Indonesia memiliki website landing page profesional, cepat, dan siap terima pesanan dengan harga terjangkau.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-200 font-bold">
              <MapPin className="w-4 h-4 text-[#9D50FF] shrink-0" />
              <span>{BRAND.location}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-black text-white tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#hero-section" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#kenapa" className="hover:text-white transition-colors">
                  Kenapa Perlu Website?
                </a>
              </li>
              <li>
                <a href="#paket" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Paket Harga</span>
                  <span className="text-[10px] text-[#9D50FF] font-mono font-black">(Mulai 299rb)</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ & Garansi Pembayaran
                </a>
              </li>
              <li>
                <a href="#rancang-konsep" className="text-[#9D50FF] hover:text-white transition-colors flex items-center gap-1 font-bold">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Rancang Konsep (Form WA)</span>
                </a>
              </li>
              <li>
                <a href="#proses" className="hover:text-white transition-colors">
                  Proses Pengerjaan
                </a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-white transition-colors">
                  Contoh Portofolio
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-white transition-colors">
                  Testimoni UMKM & Jasa
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Packages Quick Access */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-black text-white tracking-wider">
              Pilihan Website
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a 
                  href={getWaLink('Halo RedRush! Saya mau tanya Starter (.vercel / .netlify - Rp299rb)')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center justify-between group"
                >
                  <span>Starter (Rp299.000)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#9D50FF]" />
                </a>
              </li>
              <li>
                <a 
                  href={getWaLink('Halo RedRush! Saya mau tanya Bisnis (.my.id - Rp499rb)')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center justify-between group"
                >
                  <span className="text-[#9D50FF] font-black">Bisnis (Rp499.000) ★</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#9D50FF]" />
                </a>
              </li>
              <li>
                <a 
                  href={getWaLink('Halo RedRush! Saya mau tanya Growth (.com - Rp999rb)')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center justify-between group"
                >
                  <span>Growth (Rp999.000)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#9D50FF]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-black text-white tracking-wider">
              Hubungi Kami
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                id="footer-wa-link"
                href={getWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#9D50FF] hover:text-white font-bold"
              >
                <Phone className="w-4 h-4 text-[#2D3FE7]" />
                <span>WhatsApp: {BRAND.phone}</span>
              </a>


              <div className="flex items-center gap-2 text-slate-300 text-[11px] pt-1 font-mono">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{BRAND.serviceHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Badges Strip */}
        <div className="py-6 my-6 border-y border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300 font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Menerima Pembayaran Aman:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['Bank BNI', 'Jenius', 'ShopeePay', 'QRIS', 'DANA', 'GoPay'].map((pay, i) => (
              <span key={i} className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200 font-mono font-bold text-[11px]">
                {pay}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>
            &copy; {currentYear} <strong className="text-white">{BRAND.name}</strong>. Hak Cipta Dilindungi. Palu & Seluruh Indonesia.
          </p>
          <div className="flex items-center gap-1">
            <span>Didedikasikan untuk kemajuan UMKM & Usaha Jasa Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
