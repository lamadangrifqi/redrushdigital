import { useState, useEffect } from 'react';
import { getWaLink } from '../data/content';
import { MessageCircle, X } from 'lucide-react';
import { playSubtleHoverChime } from '../utils/sound';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isClickedAnimation, setIsClickedAnimation] = useState(false);
  const [clickCount, setClickCount] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('redrush_wa_floating_clicks');
      return saved ? parseInt(saved, 10) || 0 : 0;
    } catch {
      return 0;
    }
  });

  const fullMessage = 'Halo! Mau konsultasi website untuk UMKM atau jasa usahamu? Klik tombol di bawah ya! 🚀';

  const handleButtonClick = () => {
    // Trigger visual feedback ping animation
    setIsClickedAnimation(true);
    setTimeout(() => {
      setIsClickedAnimation(false);
    }, 600);

    setClickCount((prev) => {
      const nextCount = prev + 1;
      try {
        localStorage.setItem('redrush_wa_floating_clicks', nextCount.toString());
      } catch {
        // Safe fallback if localStorage is unavailable
      }
      
      // Analytics console log
      console.log(
        `%c[Analytics] Floating WhatsApp Button Clicked 🚀%c\nTotal Clicks: ${nextCount}\nTimestamp: ${new Date().toISOString()}`,
        'color: #9D50FF; font-weight: bold; font-size: 12px;',
        'color: #2D3FE7; font-size: 11px;'
      );
      
      return nextCount;
    });
  };

  // Automatically show tooltip after 1.5s
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 1500);
    return () => clearTimeout(showTimer);
  }, []);

  // Typing effect when tooltip becomes visible
  useEffect(() => {
    if (!showTooltip) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullMessage.length) {
        setTypedText(fullMessage.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 28);

    return () => clearInterval(typingInterval);
  }, [showTooltip]);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2"
    >
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="bg-white dark:bg-[#1A1D29] border-2 border-[#2D3FE7] text-slate-900 dark:text-white rounded-2xl p-3.5 shadow-[4px_4px_0px_#9D50FF] max-w-[270px] animate-in fade-in slide-in-from-bottom-2 duration-300 relative transition-colors">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            aria-label="Tutup pesan bantuan WhatsApp"
            className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-md cursor-pointer transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#2D3FE7] dark:text-[#9D50FF] font-black mb-1">
            <span className="w-2 h-2 rounded-full bg-[#2D3FE7] dark:bg-[#9D50FF] animate-ping" />
            <span>Admin RedRush Online</span>
          </div>

          <p className="text-xs text-slate-700 dark:text-slate-200 font-medium leading-relaxed pr-4 min-h-[48px]">
            <span>{typedText}</span>
            {!isTypingComplete && (
              <span className="inline-block w-1.5 h-3.5 bg-[#9D50FF] ml-0.5 align-middle animate-pulse" />
            )}
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={getWaLink('Halo RedRush Media Digital! Saya ingin konsultasi pembuatan website landing page untuk usaha saya.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp RedRush Media Digital"
        onClick={handleButtonClick}
        onMouseEnter={playSubtleHoverChime}
        onFocus={playSubtleHoverChime}
        className={`group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2D3FE7] hover:bg-[#9D50FF] text-white shadow-[4px_4px_0px_#0F111A] dark:shadow-[4px_4px_0px_#FFFFFF] border-2 border-slate-900 dark:border-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#9D50FF] ${
          isClickedAnimation ? 'scale-90 ring-4 ring-[#9D50FF]' : 'hover:scale-105 active:scale-95'
        }`}
      >
        {/* Click Ping Ripple Effect */}
        {isClickedAnimation && (
          <span className="absolute inset-0 rounded-full bg-[#9D50FF]/50 animate-ping pointer-events-none" />
        )}

        {/* Inner Icon */}
        <MessageCircle className={`w-7 h-7 sm:w-8 sm:h-8 fill-white text-white drop-shadow-md transition-transform duration-200 ${
          isClickedAnimation ? 'scale-90' : 'group-hover:scale-110'
        }`} />

        {/* Online Status Dot Badge */}
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#9D50FF] border-2 border-white flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        </span>
      </a>
    </div>
  );
};
