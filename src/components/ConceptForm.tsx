import { useState, FormEvent } from 'react';
import { 
  BRAND, 
  TARGET_CATEGORIES, 
  AVAILABLE_FEATURES, 
  PRICING_PACKAGES, 
  generateWaConceptDraft 
} from '../data/content';
import { ConceptFormData } from '../types';
import { 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  Store, 
  Wrench, 
  Layers, 
  Palette, 
  CheckCircle2, 
  RefreshCw, 
  MessageSquare,
  HelpCircle,
  Smartphone
} from 'lucide-react';
import { playSubtleHoverChime } from '../utils/sound';

export const ConceptForm = () => {
  const [formData, setFormData] = useState<ConceptFormData>({
    clientName: '',
    clientPhone: '',
    businessName: '',
    businessCategory: TARGET_CATEGORIES[0].label,
    businessType: 'umkm-produk',
    city: 'Palu',
    selectedPackage: 'Bisnis (Rp499.000) ★ Paling Laris',
    desiredFeatures: [
      'Tombol Direct Order WhatsApp (Format Pesan Otomatis)',
      'Tampilan Mobile-Friendly Super Ringan & Cepat',
      'Katalog Produk / Daftar Layanan Jasa & Menu Interaktif',
      'Integrasi Titik Google Maps & Alamat Lokasi Usaha'
    ],
    designVibe: 'Modern, Berani & Vibrant (Eye-catching)',
    notes: ''
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleToggleFeature = (feature: string) => {
    setFormData((prev) => {
      const exists = prev.desiredFeatures.includes(feature);
      if (exists) {
        return { ...prev, desiredFeatures: prev.desiredFeatures.filter((f) => f !== feature) };
      } else {
        return { ...prev, desiredFeatures: [...prev.desiredFeatures, feature] };
      }
    });
  };

  const handleFillPreset = (preset: 'kuliner' | 'jasa') => {
    if (preset === 'kuliner') {
      setFormData({
        clientName: 'Budi Santoso',
        clientPhone: '081234567890',
        businessName: 'Dapur Sambal & Bawang Palu',
        businessCategory: 'Kuliner & F&B (Kafe, Resto, Katering, Oleh-Oleh, Snack)',
        businessType: 'umkm-produk',
        city: 'Palu',
        selectedPackage: 'Bisnis (Rp499.000) ★ Paling Laris',
        desiredFeatures: [
          'Tombol Direct Order WhatsApp (Format Pesan Otomatis)',
          'Tampilan Mobile-Friendly Super Ringan & Cepat',
          'Katalog Produk / Daftar Layanan Jasa & Menu Interaktif',
          'Integrasi Titik Google Maps & Alamat Lokasi Usaha',
          'Banner Promo / Diskon / Kupon Spesial',
          'Bagian Ulasan, Rating & Testimoni Pelanggan'
        ],
        designVibe: 'Modern, Berani & Vibrant (Eye-catching)',
        notes: 'Ingin ada pilihan menu 3 varian toples + perhitungan ongkir ke luar kota otomatis saat klik WhatsApp.'
      });
    } else {
      setFormData({
        clientName: 'Rian Pratama',
        clientPhone: '081987654321',
        businessName: 'Express Sneaker & Sofa Cleaning',
        businessCategory: 'Jasa Pembersihan & Perawatan (Cuci Sepatu, Laundry, Cleaning Service)',
        businessType: 'usaha-jasa',
        city: 'Palu / Nasional',
        selectedPackage: 'Bisnis (Rp499.000) ★ Paling Laris',
        desiredFeatures: [
          'Tombol Direct Order WhatsApp (Format Pesan Otomatis)',
          'Formulir Booking Jadwal / Reservasi / Antar-Jemput',
          'Tampilan Mobile-Friendly Super Ringan & Cepat',
          'Katalog Produk / Daftar Layanan Jasa & Menu Interaktif',
          'Galeri Foto Portofolio / Foto Produk Resolusi Tinggi',
          'Bagian Ulasan, Rating & Testimoni Pelanggan'
        ],
        designVibe: 'Minimalis, Bersih & Profesional',
        notes: 'Perlu galeri foto before-after cuci sepatu dan form booking antar-jemput langsung kirim data alamat ke WA.'
      });
    }
  };

  const draftMessage = generateWaConceptDraft(formData);

  const handleSubmitToWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    playSubtleHoverChime();

    const waUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(draftMessage)}`;
    
    // Open WhatsApp in new tab
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const handleCopyDraft = async () => {
    try {
      await navigator.clipboard.writeText(draftMessage);
      setCopied(true);
      playSubtleHoverChime();
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section 
      id="rancang-konsep" 
      className="py-20 bg-[#F8F9FD] dark:bg-[#0F111A] relative border-t-4 border-[#2D3FE7] transition-colors duration-200"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[#9D50FF]/10 dark:bg-[#9D50FF]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#1A1D29] border-2 border-[#9D50FF] text-[#9D50FF] text-xs font-mono font-black tracking-wider uppercase mb-3 shadow-[2px_2px_0px_#2D3FE7]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Formulir Rancang Konsep Instan</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black italic uppercase text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            Susun Draft Konsep Websitemu,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D3FE7] via-[#9D50FF] to-[#2D3FE7]">
              Kirim Langsung ke WhatsApp Kami
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            Khusus pemilik <strong>UMKM Produk Fisik & Usaha Jasa di Palu maupun seluruh Indonesia</strong>. 
            Pilih fitur & paket yang kamu butuhkan, sistem kami akan merangkumnya menjadi format pesan terstruktur siap kirim ke WhatsApp RedRush.
          </p>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-bold mr-1">
              Contoh Pengisian Cepat:
            </span>
            <button
              type="button"
              id="preset-umkm-kuliner-btn"
              onClick={() => handleFillPreset('kuliner')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#1A1D29] border-2 border-[#2D3FE7] text-slate-900 dark:text-white text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#9D50FF] hover:border-[#9D50FF] transition-all cursor-pointer active:scale-95"
            >
              <span>🍜 UMKM Kuliner / F&B</span>
            </button>
            <button
              type="button"
              id="preset-usaha-jasa-btn"
              onClick={() => handleFillPreset('jasa')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#1A1D29] border-2 border-[#9D50FF] text-slate-900 dark:text-white text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#2D3FE7] hover:border-[#2D3FE7] transition-all cursor-pointer active:scale-95"
            >
              <span>🧼 Usaha Jasa / Service</span>
            </button>
          </div>
        </div>

        {/* 2-Column Responsive Layout: Form on Left, Live WA Draft Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Controls (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1A1D29] rounded-3xl border-4 border-[#2D3FE7] p-5 sm:p-8 shadow-[8px_8px_0px_#9D50FF] space-y-6 transition-colors">
            <form onSubmit={handleSubmitToWhatsApp} className="space-y-6" id="concept-brief-form">
              {/* Step 1: Profil Kontak & Bisnis */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span className="w-6 h-6 rounded-lg bg-[#2D3FE7] text-white flex items-center justify-center font-mono font-black text-xs">
                    1
                  </span>
                  <h3 className="text-base sm:text-lg font-black italic uppercase text-slate-900 dark:text-white">
                    Data Kontak & Usaha
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nama Klien */}
                  <div>
                    <label htmlFor="input-client-name" className="block text-xs font-mono font-black uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                      Nama Kamu / Kontak *
                    </label>
                    <input
                      id="input-client-name"
                      type="text"
                      required
                      placeholder="cth. Kak Hendra / Rian"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0F111A] border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-medium focus:border-[#2D3FE7] dark:focus:border-[#9D50FF] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label htmlFor="input-client-phone" className="block text-xs font-mono font-black uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                      Nomor WhatsApp *
                    </label>
                    <input
                      id="input-client-phone"
                      type="tel"
                      required
                      placeholder="cth. 0812-xxxx-xxxx"
                      value={formData.clientPhone}
                      onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0F111A] border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-medium focus:border-[#2D3FE7] dark:focus:border-[#9D50FF] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nama Brand / Usaha */}
                  <div>
                    <label htmlFor="input-business-name" className="block text-xs font-mono font-black uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                      Nama Usaha / Brand *
                    </label>
                    <input
                      id="input-business-name"
                      type="text"
                      required
                      placeholder="cth. Warung Sambal Roa / Sneaker Clean"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0F111A] border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-medium focus:border-[#2D3FE7] dark:focus:border-[#9D50FF] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Kota Domisili */}
                  <div>
                    <label htmlFor="input-business-city" className="block text-xs font-mono font-black uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                      Kota / Domisili Usaha *
                    </label>
                    <input
                      id="input-business-city"
                      type="text"
                      required
                      placeholder="cth. Palu / Makassar / Jakarta / dll"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0F111A] border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-medium focus:border-[#2D3FE7] dark:focus:border-[#9D50FF] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Sektor / Jenis Bisnis: UMKM Produk vs Usaha Jasa */}
                <div>
                  <label className="block text-xs font-mono font-black uppercase text-slate-700 dark:text-slate-300 mb-2">
                    Tipe Model Usaha:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      id="type-umkm-produk-btn"
                      onClick={() => setFormData({ ...formData, businessType: 'umkm-produk' })}
                      className={`p-3 rounded-xl border-2 text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                        formData.businessType === 'umkm-produk'
                          ? 'border-[#2D3FE7] bg-[#2D3FE7]/10 dark:bg-[#2D3FE7]/20 text-[#2D3FE7] dark:text-white shadow-[2px_2px_0px_#9D50FF] font-black'
                          : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium'
                      }`}
                    >
                      <Store className="w-4 h-4 text-[#2D3FE7] shrink-0" />
                      <span className="text-xs">UMKM Produk Fisik</span>
                    </button>

                    <button
                      type="button"
                      id="type-usaha-jasa-btn"
                      onClick={() => setFormData({ ...formData, businessType: 'usaha-jasa' })}
                      className={`p-3 rounded-xl border-2 text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                        formData.businessType === 'usaha-jasa'
                          ? 'border-[#9D50FF] bg-[#9D50FF]/10 dark:bg-[#9D50FF]/20 text-[#9D50FF] dark:text-white shadow-[2px_2px_0px_#2D3FE7] font-black'
                          : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium'
                      }`}
                    >
                      <Wrench className="w-4 h-4 text-[#9D50FF] shrink-0" />
                      <span className="text-xs">Usaha Jasa & Service</span>
                    </button>

                    <button
                      type="button"
                      id="type-keduanya-btn"
                      onClick={() => setFormData({ ...formData, businessType: 'keduanya' })}
                      className={`p-3 rounded-xl border-2 text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                        formData.businessType === 'keduanya'
                          ? 'border-[#2D3FE7] bg-[#2D3FE7]/10 dark:bg-[#2D3FE7]/20 text-[#2D3FE7] dark:text-white shadow-[2px_2px_0px_#9D50FF] font-black'
                          : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium'
                      }`}
                    >
                      <Layers className="w-4 h-4 text-[#2D3FE7] shrink-0" />
                      <span className="text-xs">Produk + Jasa</span>
                    </button>
                  </div>
                </div>

                {/* Kategori Bisnis Dropdown */}
                <div>
                  <label htmlFor="select-business-category" className="block text-xs font-mono font-black uppercase text-slate-700 dark:text-slate-300 mb-1.5">
                    Bidang / Kategori Spesifik Usahamu:
                  </label>
                  <select
                    id="select-business-category"
                    value={formData.businessCategory}
                    onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0F111A] border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-medium focus:border-[#2D3FE7] dark:focus:border-[#9D50FF] focus:outline-none transition-colors cursor-pointer"
                  >
                    {TARGET_CATEGORIES.map((cat, i) => (
                      <option key={i} value={cat.label}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 2: Pilihan Paket / Jenis Website */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span className="w-6 h-6 rounded-lg bg-[#9D50FF] text-white flex items-center justify-center font-mono font-black text-xs">
                    2
                  </span>
                  <h3 className="text-base sm:text-lg font-black italic uppercase text-slate-900 dark:text-white">
                    Pilihan Pembuatan Website
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PRICING_PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      id={`form-package-select-${pkg.id}`}
                      onClick={() => setFormData({ ...formData, selectedPackage: `${pkg.name} (${pkg.price}) [${pkg.domainBadge || 'Web'}]${pkg.isPopular ? ' ★ Paling Laris' : ''}` })}
                      className={`p-3.5 rounded-2xl border-2 text-left flex flex-col justify-between transition-all cursor-pointer ${
                        formData.selectedPackage.includes(pkg.name)
                          ? 'border-[#2D3FE7] bg-white dark:bg-[#0F111A] shadow-[4px_4px_0px_#9D50FF]'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0F111A]/50 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="font-black italic uppercase text-sm text-slate-900 dark:text-white">
                            {pkg.name}
                          </span>
                          {pkg.isPopular && (
                            <span className="text-[9px] font-mono font-black bg-[#9D50FF] text-white px-1.5 py-0.5 rounded">
                              FAVORIT
                            </span>
                          )}
                        </div>
                        <div className="font-mono text-base font-black text-[#2D3FE7] dark:text-[#9D50FF]">
                          {pkg.price}
                        </div>
                        {pkg.domainBadge && (
                          <div className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400 mt-1">
                            {pkg.domainBadge}
                          </div>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-medium">
                        {pkg.duration}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Fitur & Modul yang Diinginkan */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#2D3FE7] text-white flex items-center justify-center font-mono font-black text-xs">
                      3
                    </span>
                    <h3 className="text-base sm:text-lg font-black italic uppercase text-slate-900 dark:text-white">
                      Fitur & Kebutuhan Websitemu
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-bold">
                    {formData.desiredFeatures.length} dipilih
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {AVAILABLE_FEATURES.map((feature, i) => {
                    const isChecked = formData.desiredFeatures.includes(feature);
                    return (
                      <button
                        key={i}
                        type="button"
                        id={`feature-checkbox-${i}`}
                        onClick={() => handleToggleFeature(feature)}
                        className={`p-3 rounded-xl border-2 text-left flex items-start gap-2.5 text-xs transition-all cursor-pointer ${
                          isChecked
                            ? 'border-[#2D3FE7] dark:border-[#9D50FF] bg-[#2D3FE7]/5 dark:bg-[#2D3FE7]/15 text-slate-900 dark:text-white font-bold shadow-[2px_2px_0px_#2D3FE7]'
                            : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-medium hover:border-slate-300'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-[#2D3FE7] text-white' : 'border border-slate-400'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Nuansa Desain & Catatan Tambahan */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span className="w-6 h-6 rounded-lg bg-[#9D50FF] text-white flex items-center justify-center font-mono font-black text-xs">
                    4
                  </span>
                  <h3 className="text-base sm:text-lg font-black italic uppercase text-slate-900 dark:text-white">
                    Nuansa & Catatan Khusus
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nuansa Desain */}
                  <div>
                    <label htmlFor="select-design-vibe" className="block text-xs font-mono font-black uppercase text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1">
                      <Palette className="w-3.5 h-3.5 text-[#9D50FF]" />
                      <span>Nuansa / Gaya Tampilan:</span>
                    </label>
                    <select
                      id="select-design-vibe"
                      value={formData.designVibe}
                      onChange={(e) => setFormData({ ...formData, designVibe: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0F111A] border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-medium focus:border-[#2D3FE7] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Modern, Berani & Vibrant (Eye-catching)">Modern, Berani & Vibrant (Eye-catching)</option>
                      <option value="Minimalis, Bersih & Profesional">Minimalis, Bersih & Profesional</option>
                      <option value="Elegan, Premium & Mewah">Elegan, Premium & Mewah</option>
                      <option value="Hangat, Natural & Khas Daerah / Kriya">Hangat, Natural & Khas Daerah / Kriya</option>
                      <option value="Ceria, Playful & Ramah Keluarga">Ceria, Playful & Ramah Keluarga</option>
                    </select>
                  </div>

                  {/* Catatan / Kebutuhan Khusus */}
                  <div>
                    <label htmlFor="input-notes" className="block text-xs font-mono font-black uppercase text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-[#2D3FE7]" />
                      <span>Catatan / Link Referensi (Opsional):</span>
                    </label>
                    <textarea
                      id="input-notes"
                      rows={2}
                      placeholder="cth. Ada 5 produk utama, foto menu siap kirim, mau warna tema biru & kuning."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0F111A] border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-medium focus:border-[#2D3FE7] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA Button on Mobile & Desktop */}
              <div className="pt-4">
                <button
                  type="submit"
                  id="submit-concept-form-btn"
                  onMouseEnter={playSubtleHoverChime}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#2D3FE7] to-[#9D50FF] hover:from-[#2D3FE7]/90 hover:to-[#9D50FF]/90 text-white font-black text-sm sm:text-base py-4 px-6 rounded-2xl shadow-[4px_4px_0px_#0F111A] dark:shadow-[4px_4px_0px_#FFFFFF] border-2 border-slate-900 dark:border-white transition-all duration-200 active:scale-95 uppercase tracking-wider cursor-pointer"
                >
                  <Send className="w-5 h-5 shrink-0" />
                  <span>Kirim Draft Konsep ke WhatsApp RedRush</span>
                </button>
                <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-2">
                  🔒 WhatsApp akan terbuka secara otomatis dengan draf pesan yang sudah terisi rapi.
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Live Draft Preview Box (5 cols on lg, sticky on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
            <div className="bg-white dark:bg-[#1A1D29] rounded-3xl border-4 border-[#9D50FF] p-5 sm:p-6 shadow-[8px_8px_0px_#2D3FE7] relative transition-colors">
              {/* Header Box */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs font-black uppercase text-slate-900 dark:text-white">
                    Preview Teks Draft WA
                  </span>
                </div>
                <button
                  type="button"
                  id="copy-draft-button"
                  onClick={handleCopyDraft}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#0F111A] border border-slate-300 dark:border-slate-700 hover:border-[#2D3FE7] text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
                  title="Salin teks draft"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#2D3FE7]" />
                      <span>Salin Teks</span>
                    </>
                  )}
                </button>
              </div>

              {/* Message Screen Simulation */}
              <div className="bg-slate-100 dark:bg-[#0F111A] rounded-2xl p-4 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed max-h-[380px] overflow-y-auto shadow-inner select-all">
                {draftMessage}
              </div>

              {/* Live Status Assurance */}
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#9D50FF] shrink-0" />
                  <span>Draf akan langsung ditinjau oleh Admin & Tim Desain</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <Smartphone className="w-4 h-4 text-[#2D3FE7] shrink-0" />
                  <span>Konsultasi santai, tanpa biaya sebelum deal pengerjaan</span>
                </div>
              </div>

              {/* Secondary Submit Trigger */}
              <button
                type="button"
                onClick={handleSubmitToWhatsApp}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-[#2D3FE7] hover:bg-[#9D50FF] text-white font-black py-3 rounded-xl text-xs uppercase tracking-wider shadow-[3px_3px_0px_#0F111A] dark:shadow-[3px_3px_0px_#FFFFFF] border border-slate-900 dark:border-white transition-all active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4 fill-white" />
                <span>Kirim Draft Sekarang via WhatsApp</span>
              </button>
            </div>

            {/* Micro FAQ Help Accordion Card */}
            <div className="bg-white dark:bg-[#1A1D29] rounded-2xl border-2 border-slate-200 dark:border-slate-800 p-4 text-xs text-slate-600 dark:text-slate-400 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                <HelpCircle className="w-4 h-4 text-[#9D50FF]" />
                <span>Bagaimana jika belum punya foto atau logo?</span>
              </div>
              <p className="leading-relaxed">
                Tenang! Tim RedRush siap bantu pilihkan ilustrasi dan foto stok relevan untuk usahamu, serta merapikan copywriting penawaran sampai siap jual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
