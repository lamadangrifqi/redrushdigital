import { useState, useEffect } from 'react';
import { BRAND, getWaLink } from '../data/content';
import { MessageCircle, Menu, X, ArrowUpRight, Sparkles, Sun, Moon, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export const Navbar = ({ onOpenDemo }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Kenapa Web?', href: '#kenapa' },
    { name: 'Pilihan Biaya', href: '#paket', badge: 'Mulai 299K' },
    { name: 'Cara Pesan', href: '#proses' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'FAQ', href: '#faq' },
  ];

  const mobileNavLinks = [
    { name: 'Beranda', href: '#hero-section' },
    { name: 'Kenapa Web?', href: '#kenapa' },
    { name: 'Pilihan Biaya', href: '#paket', badge: 'Mulai 299K' },
    { name: 'Cara Pesan', href: '#proses' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Testimoni Klien', href: '#testimoni' },
    { name: 'FAQ & Garansi', href: '#faq' },
  ];

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#1A1D29]/95 backdrop-blur-md border-b-4 border-[#9D50FF] shadow-lg dark:shadow-2xl dark:shadow-black/60 py-2.5 sm:py-3'
          : 'bg-white/90 dark:bg-[#1A1D29]/80 backdrop-blur-sm border-b-2 border-[#9D50FF]/60 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#9D50FF] rounded-lg p-1"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#2D3FE7] transform -skew-x-12 flex items-center justify-center font-black text-lg sm:text-xl text-white shadow-[2px_2px_0px_#9D50FF] group-hover:bg-[#9D50FF] transition-all shrink-0">
              <span className="transform skew-x-12">R</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-xl font-black tracking-tight italic uppercase text-slate-900 dark:text-white transition-colors">
                  RedRush <span className="text-[#9D50FF]">Digital</span>
                </span>
                <span className="inline-flex text-[9px] font-mono font-black uppercase bg-[#2D3FE7] text-white px-1.5 py-0.5 rounded">
                  ID
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Website UMKM & Usaha Jasa
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Visible on lg and up) */}
          <nav id="desktop-navigation" aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-2.5 xl:px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg text-slate-700 dark:text-slate-200 hover:text-[#2D3FE7] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#0F111A] transition-all duration-200 whitespace-nowrap inline-flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#2D3FE7]"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] font-mono font-black bg-[#2D3FE7] text-white px-1.5 py-0.5 rounded shadow-[1px_1px_0px_#9D50FF] whitespace-nowrap inline-block shrink-0">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action: Theme Toggle & WhatsApp CTA button (Desktop >= lg) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Quick Link to Concept Form */}
            <a
              id="navbar-form-link-desktop"
              href="#rancang-konsep"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-[#0F111A] border-2 border-[#2D3FE7] text-slate-900 dark:text-white font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_#9D50FF] hover:border-[#9D50FF] transition-all active:scale-95 whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-[#9D50FF] shrink-0" />
              <span>Form Konsep</span>
            </a>

            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-desktop"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Ganti ke Light Mode' : 'Ganti ke Dark Mode'}
              title={theme === 'dark' ? 'Aktifkan Mode Terang (Light)' : 'Aktifkan Mode Gelap (Dark)'}
              className="flex items-center justify-center p-2 rounded-xl bg-slate-100 dark:bg-[#0F111A] border-2 border-[#2D3FE7] text-slate-800 dark:text-slate-100 shadow-[2px_2px_0px_#9D50FF] hover:border-[#9D50FF] transition-all active:scale-95 cursor-pointer shrink-0"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 fill-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[#9D50FF] fill-[#9D50FF]" />
              )}
            </button>

            {/* WhatsApp CTA button */}
            <a
              id="navbar-wa-cta-desktop"
              href={getWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2D3FE7] hover:bg-[#9D50FF] text-white font-black px-4 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-[3px_3px_0px_#9D50FF] hover:shadow-[2px_2px_0px_#2D3FE7] whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white shrink-0" />
              <span>Konsultasi WA</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Button */}
          <div className="flex lg:hidden items-center gap-1.5">
            {/* Mobile Theme Toggle */}
            <button
              id="theme-toggle-mobile"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Ganti ke Light Mode' : 'Ganti ke Dark Mode'}
              className="p-2 rounded-lg bg-slate-100 dark:bg-[#0F111A] border-2 border-[#2D3FE7] text-slate-800 dark:text-slate-100 shadow-[2px_2px_0px_#9D50FF] active:scale-95"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 fill-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[#9D50FF] fill-[#9D50FF]" />
              )}
            </button>

            <a
              id="navbar-wa-cta-mobile-mini"
              href={getWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat WhatsApp"
              className="p-2 rounded-lg bg-[#2D3FE7] text-white shadow-[2px_2px_0px_#9D50FF] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>

            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-[#1A1D29] text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border-2 border-[#2D3FE7] focus:outline-none focus:ring-2 focus:ring-[#9D50FF]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#9D50FF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-white dark:bg-[#1A1D29] border-b-4 border-[#9D50FF] px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 px-3 pt-1 pb-2 border-b border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
            <span>Menu Navigasi</span>
            <span className="text-[#9D50FF] flex items-center gap-1 font-bold">
              <Sparkles className="w-3 h-3" /> UMKM & Jasa Indonesia
            </span>
          </div>
          {mobileNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-[#2D3FE7] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#0F111A] transition-colors"
            >
              <span>{link.name}</span>
              {link.badge ? (
                <span className="text-[10px] font-mono font-black bg-[#9D50FF] text-white px-2 py-0.5 rounded shadow-[2px_2px_0px_#2D3FE7] whitespace-nowrap">
                  {link.badge}
                </span>
              ) : (
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              )}
            </a>
          ))}

          <div className="pt-3 space-y-2">
            <a
              id="mobile-drawer-form-button"
              href="#rancang-konsep"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-white dark:bg-[#0F111A] text-slate-900 dark:text-white border-2 border-[#2D3FE7] font-black px-4 py-3 rounded-xl shadow-[3px_3px_0px_#9D50FF] text-sm uppercase tracking-wider active:scale-95"
            >
              <FileText className="w-4 h-4 text-[#9D50FF]" />
              <span>Isi Form Konsep Website</span>
            </a>

            <a
              id="mobile-drawer-wa-button"
              href={getWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#2D3FE7] hover:bg-[#9D50FF] text-white font-black px-4 py-3 rounded-xl shadow-[4px_4px_0px_#9D50FF] text-sm uppercase tracking-wider active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Konsultasi via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
