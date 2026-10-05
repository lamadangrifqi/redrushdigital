import { PricingPackage, PortfolioItem, TestimonialItem, ProcessStep, WhyReason, ConceptFormData, FAQItem, PaymentMethod, AddOnItem } from '../types';

export const BRAND = {
  name: 'RedRush Media Digital',
  shortName: 'RedRush',
  tagline: 'Jasa Pembuatan Website Landing Page UMKM & Usaha Jasa',
  location: 'Palu, Sulawesi Tengah & Melayani Seluruh Indonesia',
  phone: '081346386824',
  whatsappNumber: '6281346386824',
  whatsappUrl: 'https://wa.me/6281346386824',
  instagram: '@redrush.digital',
  instagramUrl: 'https://instagram.com/redrush.digital',
  serviceHours: 'Setiap Hari 08.00 - 21.00 WITA',
};

export const getWaLink = (customText?: string) => {
  const defaultText = 'Halo RedRush Media Digital! Saya tertarik konsultasi pembuatan website landing page untuk usaha UMKM / Jasa saya.';
  const message = customText ? customText : defaultText;
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Generates a clean, well-structured WhatsApp message draft from the concept form submission
 */
export const generateWaConceptDraft = (data: ConceptFormData): string => {
  const featuresList = data.desiredFeatures.length > 0
    ? data.desiredFeatures.map((f) => `  • ${f}`).join('\n')
    : '  • Belum memilih / ingin konsultasi rekomendasi terbaik';

  return `*DRAFT KONSEP WEBSITE — REDRUSH MEDIA DIGITAL*
----------------------------------------
Halo Tim RedRush! Saya ingin mengajukan brief & konsep website untuk usaha saya:

👤 *Nama Klien / Kontak:* ${data.clientName || '-'}
📱 *Nomor WhatsApp:* ${data.clientPhone || '-'}
🏪 *Nama Usaha / Brand:* ${data.businessName || '-'}
📂 *Kategori & Sektor:* ${data.businessCategory || '-'} (${data.businessType === 'usaha-jasa' ? 'Usaha Jasa/Layanan' : data.businessType === 'umkm-produk' ? 'UMKM Produk Fisik' : 'Produk & Jasa'})
📍 *Kota / Domisili Usaha:* ${data.city || 'Indonesia'}

📦 *Pilihan Paket:* ${data.selectedPackage || 'Bisnis (Rp499.000) ★ Pilihan UMKM'}
🎨 *Nuansa / Selera Desain:* ${data.designVibe || 'Modern & Profesional'}

⚡ *Fitur / Modul yang Diinginkan:*
${featuresList}

📝 *Catatan Tambahan & Kebutuhan Khusus:*
${data.notes ? data.notes : 'Mohon dibantu arahkan konsep visual dan alur pesanan terbaik via WA.'}

----------------------------------------
Mohon konfirmasi ketersediaan slot pengerjaan dan langkah selanjutnya ya, terima kasih!`;
};

export const WHY_REASONS: WhyReason[] = [
  {
    id: 'kredibilitas',
    iconName: 'ShieldCheck',
    title: 'Terlihat Kredibel & Buka 24 Jam Nonstop',
    tagline: 'Medsos bisa tenggelam, website jadi kantor & etalase resmi yang selalu siap melayani.',
    description: 'Calon pelanggan zaman sekarang selalu mencari bukti bahwa usaha kamu beneran nyata dan terpercaya. Punya website dengan domain sendiri bikin bisnis UMKM & Jasa langsung dipercaya dan naik kelas dibanding kompetitor.',
    statsHighlight: 'Profil Usaha Lebih Profesional',
    solutionDiff: {
      withoutWeb: 'Cuma link medsos berantakan, pelanggan ragu apakah usaha masih aktif atau penipuan.',
      withWeb: 'Punya alamat web resmi, katalog produk/layanan rapi, dan profil bisnis terverifikasi 24 jam.',
    }
  },
  {
    id: 'closing-cepat',
    iconName: 'Zap',
    title: 'Pelanggan Langsung Klik WhatsApp Tanpa Ribet DM',
    tagline: 'Pangkas proses tanya-tanya berulang lewat info layanan & harga yang langsung jelas.',
    description: 'Berapa banyak calon pembeli yang kabur karena kelamaan nunggu balasan DM? Di landing page, detail produk, layanan jasa, dan daftar harga sudah jelas — mereka klik tombol WA tinggal kirim format order atau booking jadwal.',
    statsHighlight: 'Langsung Terhubung ke WhatsApp',
    solutionDiff: {
      withoutWeb: 'Tanya "Harga berapa kak?" di DM berhari-hari, akhirnya batal beli atau pindah jasa lain.',
      withWeb: 'Pelanggan langsung lihat foto portofolio & harga, klik WA dengan pesan template siap bayar.',
    }
  },
  {
    id: 'google-search',
    iconName: 'SearchCheck',
    title: 'Mudah Dicari di Google & Google Maps Saat Butuh',
    tagline: 'Jangkau orang-orang yang memang sedang aktif mencari produk & jasa usahamu di internet.',
    description: 'Saat calon klien mengetik "kuliner enak terdekat", "jasa cleaning service", atau "bengkel & treatment sepatu" di Google, websitemu punya peluang tampil di halaman pencarian dan terhubung ke Google Maps bisnismu.',
    statsHighlight: 'Jangkau Pasar Organik',
    solutionDiff: {
      withoutWeb: 'Tidak terdaftar di mesin pencari, hanya berharap pada algoritma medsos yang naik-turun.',
      withWeb: 'Website terindeks di Google & terintegrasi titik lokasi Google Maps usaha untuk jangkau pelanggan baru.',
    }
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'Rp299.000',
    originalPrice: 'Rp450.000',
    numericPrice: 299000,
    domainBadge: 'Subdomain Vercel / Netlify',
    tagline: 'Etalase link bio cepat & hemat untuk usaha perintis agar langsung punya website resmi siap jualan.',
    duration: 'Selesai 2–3 hari',
    revision: '1x revisi teks & foto',
    features: [
      'Alamat web cepat: namabisnis.vercel.app atau .netlify.app (Bebas biaya perpanjangan tahunan)',
      'Etalase 6 foto menu / produk unggulan lengkap dengan harga',
      '1 Tombol utama "Chat / Pesan Langsung ke WhatsApp"',
      'Informasi profil usaha, alamat lengkap & jam buka toko',
      'Tampilan responsif & ringan di semua jenis smartphone',
      'Layanan terima beres: cukup kirim foto & nomor WA, 2–3 hari langsung tayang',
      '1x revisi penyesuaian foto & teks'
    ],
    waMessage: 'Halo RedRush Media Digital! Saya ingin pesan Starter (Rp299.000) dengan subdomain Vercel/Netlify untuk pembuatan website usaha saya. Boleh bantu jelaskan alur selanjutnya?',
    accentColor: 'border-slate-800'
  },
  {
    id: 'bisnis',
    name: 'Bisnis',
    price: 'Rp499.000',
    originalPrice: 'Rp750.000',
    numericPrice: 499000,
    domainBadge: 'Domain Resmi .my.id',
    badge: 'PILIHAN UNTUK UMKM',
    isPopular: true,
    tagline: 'Katalog lengkap & peta lokasi untuk rumah makan, toko offline, penjahit, dan penyedia jasa.',
    duration: 'Selesai 3–4 hari',
    revision: '2x revisi bebas',
    features: [
      'Domain resmi kustom .my.id gratis 1 tahun (contoh: namatoko.my.id)',
      'Katalog luas hingga 12 produk / layanan jasa (dengan label Best Seller / Promo)',
      'Tombol WhatsApp otomatis di tiap produk (klik produk langsung muncul format order di WA)',
      'Peta Google Maps interaktif langsung di web (pelanggan mudah cari rute toko)',
      'Bagian ulasan pelanggan & testimoni bintang 5 untuk meningkatkan kepercayaan',
      'Skema nyaman: Cukup DP mulai 30% (Rp149.700), pengerjaan jalan & domain langsung diamankan',
      'Dibantu susun kata-kata promosi memikat & perapian foto produk oleh tim RedRush',
      '2x revisi bebas & garansi bantuan teknis 30 hari'
    ],
    waMessage: 'Halo RedRush Media Digital! Saya mau pesan Bisnis (Rp499.000) dengan domain resmi .my.id. Saya ingin konsultasi konsep website untuk usaha saya.',
    accentColor: 'border-rose-500'
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 'Rp999.000',
    originalPrice: 'Rp1.500.000',
    numericPrice: 999000,
    domainBadge: 'Domain Global .com',
    badge: 'BRAND PRO & TOKO LENGKAP',
    tagline: 'Toko digital terlengkap untuk brand mapan, distro, klinik, grosir, dan usaha skala besar.',
    duration: 'Selesai 1–2 hari (Prioritas)',
    revision: 'Bebas revisi sampai puas',
    features: [
      'Domain internasional resmi .com gratis 1 tahun (contoh: namatoko.com)',
      'Katalog jumbo (20+ produk) lengkap dengan tab filter kategori menu',
      'Fitur pilih varian & hitung total harga otomatis sebelum dikirim rapi ke WhatsApp',
      'Galeri foto portofolio / video interaktif (bisa klik zoom layar penuh)',
      'File Desain QR Code Digital kustom ke link web / menu untuk dipajang di kasir',
      'Pengerjaan prioritas kilat: selesai dalam 1–2 hari kerja',
      'Gratis 3x bantuan update menu/harga promo baru selama 1 tahun',
      'Bebas revisi sampai puas & pendampingan konsultasi promosi'
    ],
    waMessage: 'Halo RedRush Media Digital! Saya ingin pesan Growth (Rp999.000) dengan domain .com dan fitur hitung pesanan otomatis untuk ekspansi bisnis saya.',
    accentColor: 'border-violet-500'
  }
];

export const ADD_ON_SERVICES: AddOnItem[] = [
  {
    id: 'addon-akrilik-qr',
    name: 'Stand Akrilik QR Review Google / Menu (Cetak Fisik)',
    price: '+Rp75.000',
    numericPrice: 75000,
    badge: 'FAVORIT KASIR & KAFE',
    isPopular: true,
    unit: 'per 1 standee akrilik',
    iconName: 'QrCode',
    description: 'Stand akrilik bening tebal ukuran meja kasir + cetak stiker vinil tahan air dengan QR Code langsung menuju Google Review bintang 5 atau link web tokomu. Siap pajang di meja kasir/meja kafe.'
  },
  {
    id: 'addon-desain-qr',
    name: 'File Desain QR Code Google Review Siap Cetak (Digital Saja)',
    price: '+Rp35.000',
    numericPrice: 35000,
    unit: 'file PDF & PNG resolusi tinggi',
    iconName: 'FileImage',
    description: 'File desain grafis kustom memuat logo bisnismu + QR direct link ulasan Google Maps bintang 5. Bebas kamu bawa dan cetak sendiri di percetakan terdekat.'
  },
  {
    id: 'addon-gmaps-setup',
    name: 'Setup & Optimasi Profil Google Bisnis (Google Maps)',
    price: '+Rp99.000',
    numericPrice: 99000,
    unit: 'sekali bayar',
    iconName: 'MapPin',
    description: 'Bantu klaim, verifikasi, set jam buka, upload foto gerai, dan sambungkan link websitemu langsung di Google Maps agar mudah ditemukan pencari lokal.'
  },
  {
    id: 'addon-menu-update',
    name: 'Jasa Tambah / Update Menu & Produk Baru',
    price: '+Rp35.000',
    numericPrice: 35000,
    unit: 'per batch update (s.d 5 produk)',
    iconName: 'RefreshCw',
    description: 'Layanan santai kapan pun bisnismu merilis varian rasa atau menu promo baru: cukup kirim foto & harga via WhatsApp, tim RedRush yang perbarui websitemu.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Brief & Konsultasi',
    description: 'Isi formulir konsep atau chat kami langsung via WhatsApp untuk menentukan konsep, fitur, dan paket yang sesuai usahamu.',
    durationTag: 'Isi Form / Chat WA'
  },
  {
    number: '02',
    title: 'Perancangan Draf',
    description: 'Tim RedRush langsung merancang tampilan website yang menarik, 100% responsif di HP, dan fokus pada konversi pesanan.',
    durationTag: '1–2 Hari Kerja'
  },
  {
    number: '03',
    title: 'Review & Revisi',
    description: 'Kamu cek draf website secara live dan kami lakukan penyempurnaan detail konten serta foto hingga sesuai harapan.',
    durationTag: 'Sesuai Kuota Paket'
  },
  {
    number: '04',
    title: 'Live & Siap Jualan',
    description: 'Website resmi langsung aktif di domain pilihanmu, siap disebar di bio media sosial & langsung terima order serta booking pelanggan.',
    durationTag: 'Siap Terima Order 24/7'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'as-taylor-palu',
    title: 'LKP AS Taylor — Penjahit & Sewa Jas/Gaun Palu',
    category: 'Jasa',
    isLiveClient: true,
    location: 'Talise, Mantikulore, Kota Palu',
    tagline: 'Landing page penjahit busana pesta, seragam dinas/keluarga, dan persewaan jas pria & gaun mewah.',
    description: 'Website resmi lengkap dengan katalog busana jahit custom, galeri persewaan jas formal wisuda/nikah, simulasi booking fitting via WhatsApp, dan integrasi titik lokasi Google Maps Talise.',
    features: ['Katalog Jahit & Sewa Jas/Gaun', 'Form Booking Fitting via WA', 'Petunjuk Titik Google Maps', 'Rating Bintang 5.0'],
    liveUrl: 'https://astailor.vercel.app/',
    previewTheme: {
      bg: 'from-rose-950/40 via-slate-900 to-slate-950',
      accent: '#E11D48',
      badgeBg: 'bg-rose-500/10 text-rose-400 border-rose-500/30'
    },
    mockupData: {
      headline: 'Jahit Busana Pas Badan & Persewaan Jas/Gaun Mewah Kota Palu',
      subheadline: 'Solusi tampil memukau untuk wisuda, pesta pernikahan, dinas, dan acara formal di Jl. Sisingamangaraja Talise Palu.',
      ctaText: 'Konsultasi Fitting Busana via WhatsApp',
      rating: '5.0/5.0',
      reviewCount: '150+ Jahitan & Sewa Selesai',
      priceSample: 'Jahit Mulai Rp 120.000 / Sewa Rp 150.000',
      keyPoints: ['Fitting teliti hingga 100% pas di badan', 'Koleksi jas & gaun bersih, rapi & wangi', 'Bisa bawa bahan kain sendiri', 'Lokasi workshop strategis di Talise']
    }
  },
  {
    id: 'kuliner-umkm',
    title: 'Dapur Sambal Roa & Bawang Goreng Super',
    category: 'Kuliner',
    isLiveClient: false,
    location: 'Palu & Pengiriman Nasional',
    tagline: 'Landing page oleh-oleh khas & F&B dengan tombol order WhatsApp langsung terisi varian rasa.',
    description: 'Website etalase kuliner khas yang menampilkan foto produk renyah, ulasan pembeli, daftar harga varian kemasan, dan direct order WhatsApp.',
    features: ['Menu Varian Interaktif', 'Hitung Estimasi Ongkir', 'Direct WA Order', 'Titik Google Maps Toko'],
    previewTheme: {
      bg: 'from-amber-950/40 via-slate-900 to-slate-950',
      accent: '#F59E0B',
      badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30'
    },
    mockupData: {
      headline: 'Bawang Goreng Palu Asli 100% Renyah Tanpa Campuran',
      subheadline: 'Oleh-oleh nomor satu dikirim langsung dari rumah produksi dengan kemasan segel aluminium aman ke seluruh kota di Indonesia.',
      ctaText: 'Pesan Varian Toples (Rp45rb) via WA',
      rating: '4.9/5.0',
      reviewCount: '1.200+ Toples Terjual',
      priceSample: 'Mulai Rp 35.000 / pouch',
      keyPoints: ['Bahan baku segar pilihan asli', 'Minyak higienis tanpa pengawet', 'Bisa kirim se-Indonesia', 'Garansi aman & renyah sampai tujuan']
    }
  },
  {
    id: 'jasa-service',
    title: 'Klinik Cuci Sepatu & Deep Clean Sneaker Care',
    category: 'Jasa',
    isLiveClient: false,
    location: 'Layanan Antar-Jemput & On-Site',
    tagline: 'Landing page booking jasa treatment sepatu, helm, sofa, dan tas dengan sistem reservasi praktis.',
    description: 'Halaman penawaran jasa layanan cepat dengan tabel harga transparan, portofolio before-after pembersihan, dan tombol pick-up otomatis.',
    features: ['Slider Before / After', 'Pilihan Layanan Cepat', 'Tombol Antar-Jemput WA', 'Estimasi Waktu Pengerjaan'],
    previewTheme: {
      bg: 'from-blue-950/40 via-slate-900 to-slate-950',
      accent: '#3B82F6',
      badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30'
    },
    mockupData: {
      headline: 'Sepatu Kotor Jadi Bersih Seperti Baru Tanpa Rusak Bahan',
      subheadline: 'Jasa deep cleaning sepatu & apparel express. Melayani antar-jemput dengan deterjen dan peralatan standar profesional.',
      ctaText: 'Booking Antar-Jemput via WA',
      rating: '4.8/5.0',
      reviewCount: '800+ Pasang Sepatu Selesai',
      priceSample: 'Paket Treatment Rp 35.000',
      keyPoints: ['Bahan pembersih standar premium', 'Teknik anti-yellowing & unyellowing', 'Layanan kilat 24 jam selesai', 'Garansi wangi & bersih maksimal']
    }
  },
  {
    id: 'kerajinan-kriya',
    title: 'Souvenir Kayu Eboni & Tenun Sutra Lestari',
    category: 'Kerajinan',
    isLiveClient: false,
    location: 'Sulawesi Tengah & Pasar Nasional',
    tagline: 'Showcase kriya kayu ukir asli dan kain tenun tradisional nusantara dengan sertifikat keaslian.',
    description: 'Katalog online elegan dengan galeri visual detail serat kayu dan motif tenun, dilengkapi sertifikat keaslian dan formulir custom ukiran untuk cinderamata instansi.',
    features: ['Galeri Zoom Resolusi Tinggi', 'Katalog Custom Ukir', 'Sertifikat Keaslian Info', 'Link Konsultasi Kurasi'],
    previewTheme: {
      bg: 'from-emerald-950/40 via-slate-900 to-slate-950',
      accent: '#10B981',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
    },
    mockupData: {
      headline: 'Karya Otentik Kerajinan Kayu Hitam & Tenun Tradisional',
      subheadline: 'Warisan kerajinan tangan bernilai tinggi dari pengrajin lokal untuk cinderamata resmi kantor, plakat instansi, dan koleksi.',
      ctaText: 'Lihat Katalog & Pesan Cinderamata',
      rating: '5.0/5.0',
      reviewCount: '450+ Pesanan Instansi & Kolektor',
      priceSample: 'Mulai Rp 120.000',
      keyPoints: ['100% Bahan legal terkurasi', 'Ditenun tangan benang sutra', 'Bisa grafir nama / logo instansi', 'Kemasan boks batik eksklusif']
    }
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Ibu Hj. Asmiwati',
    businessName: 'LKP AS Taylor (Penjahit & Persewaan Jas/Gaun)',
    businessType: 'Jasa Fashion & Sewa Busana',
    city: 'Talise, Palu',
    quote: 'Alhamdulillah website kami (astailor.vercel.app) bikin usaha jahit dan sewa jas di Talise makin dipercaya mahasiswa wisuda dan instansi. Pelanggan tinggal lihat katalog model di web lalu langsung booking fitting via WhatsApp. Praktis sekali!',
    rating: 5,
    isPlaceholderNotice: false
  },
  {
    id: 'testi-2',
    name: 'Pak Hendra Saputra',
    businessName: 'Dapur Roa & Bawang Super',
    businessType: 'Kuliner & Oleh-Oleh Khas',
    city: 'Palu & Pengiriman Nasional',
    quote: 'Dulu repot banget tiap hari balas chat tanya harga dan varian toples. Sejak dibuatkan landing page oleh RedRush, pembeli dari luar kota tinggal klik link di bio, baca ulasan, dan langsung order dengan format WA yang rapi.',
    rating: 5,
    isPlaceholderNotice: true
  },
  {
    id: 'testi-3',
    name: 'Fikri Rahman',
    businessName: 'Celebes Sneaker Care & Apparel',
    businessType: 'Jasa Perawatan & Cuci Sepatu',
    city: 'Palu, Sulawesi Tengah',
    quote: 'Pengerjaannya cepat banget, 4 hari sudah live domainnya. Tampilan tombol booking antar-jemput sangat responsif di HP pelanggan. Tim RedRush sangat ramah dan paham kebutuhan promosi UMKM lokal!',
    rating: 5,
    isPlaceholderNotice: true
  }
];

export const TARGET_CATEGORIES = [
  { label: 'Kuliner & F&B (Kafe, Resto, Katering, Oleh-Oleh, Snack)', type: 'umkm-produk' },
  { label: 'Jasa Pembersihan & Perawatan (Cuci Sepatu, Laundry, Cleaning Service)', type: 'usaha-jasa' },
  { label: 'Kecantikan, Barbershop & Salon (Skincare, Klinik Estetika, Spa)', type: 'keduanya' },
  { label: 'Fashion & Retail (Pakaian, Hijab, Sepatu, Aksesoris)', type: 'umkm-produk' },
  { label: 'Bengkel, Otomotif & Rental (Servis Kendaraan, Cuci Mobil, Rental Mobil)', type: 'usaha-jasa' },
  { label: 'Fotografi, Video, EO & Wedding Organizer', type: 'usaha-jasa' },
  { label: 'Kerajinan, Kriya, Souvenir & Percetakan', type: 'umkm-produk' },
  { label: 'Konstruksi, Interior, Tukang & Properti', type: 'usaha-jasa' },
  { label: 'Pendidikan, Kursus, Bimbingan Belajar & Konsultan', type: 'usaha-jasa' },
  { label: 'Kesehatan, Herbal, Apotek & Dokter Praktik', type: 'keduanya' },
  { label: 'Lainnya (Custom Sesuai Usahamu)', type: 'keduanya' }
];

export const AVAILABLE_FEATURES = [
  'Tombol Direct Order WhatsApp (Format Pesan Otomatis)',
  'Tampilan Mobile-Friendly Super Ringan & Cepat',
  'Katalog Produk / Daftar Layanan Jasa & Menu Interaktif',
  'Integrasi Titik Google Maps & Alamat Lokasi Usaha',
  'Stand Akrilik QR Review Google / Menu di Meja Kasir (+Rp75rb)',
  'File Desain QR Code Google Review Siap Cetak (+Rp35rb)',
  'Formulir Booking Jadwal / Reservasi / Antar-Jemput',
  'Galeri Foto Portofolio / Foto Produk Resolusi Tinggi',
  'Bagian Ulasan, Rating & Testimoni Pelanggan',
  'Banner Promo / Diskon / Kupon Spesial',
  'Integrasi Akun Media Sosial (Instagram, TikTok, FB)',
  'SEO Google Dasar (Mudah Dicari di Pencarian)',
  'Setup Profil Bisnis Google Maps (+Rp99rb)'
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  { name: 'Bank BNI', category: 'Bank Transfer', iconCode: 'BNI' },
  { name: 'Jenius (Bank BTPN)', category: 'Bank Transfer', iconCode: 'JENIUS' },
  { name: 'ShopeePay', category: 'QRIS & E-Wallet', iconCode: 'SHOPEEPAY' },
  { name: 'QRIS (Semua Bank & E-Wallet)', category: 'QRIS & E-Wallet', iconCode: 'QRIS' },
  { name: 'DANA', category: 'QRIS & E-Wallet', iconCode: 'DANA' },
  { name: 'GoPay', category: 'QRIS & E-Wallet', iconCode: 'GOPAY' }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'harga',
    question: 'Berapa biaya perpanjangan domain & hosting di tahun kedua dan seterusnya?',
    answer: 'Sangat terjangkau dan 100% transparan! Untuk Starter (subdomain .vercel.app atau .netlify.app) Rp0 alias GRATIS tanpa biaya tahunan selamanya. Untuk Bisnis (.my.id), perpanjangan hanya Rp150.000 per TAHUN. Untuk Growth (.com), perpanjangan domain global hanya Rp250.000 per TAHUN. Biaya hosting server tetap kami tanggung, bebas biaya tersembunyi!'
  },
  {
    id: 'faq-2',
    category: 'garansi',
    question: 'Bagaimana sistem pembayaran? Apakah harus bayar lunas langsung di depan?',
    answer: 'Tidak perlu lunas langsung! Kami menerapkan skema ramah UMKM: Cukup DP mulai 30% di awal saat brief disepakati, pengerjaan langsung jalan dan domain resmi prioritas (.my.id) langsung diaktifkan. Sisa pelunasan dibayarkan SETELAH website selesai di-preview dan kamu sudah 100% puas.'
  },
  {
    id: 'faq-3',
    category: 'garansi',
    question: 'Apakah ada garansi jika hasil draf belum sesuai selera saya?',
    answer: 'Pasti ada! Setiap pilihan sudah mencakup kuota revisi untuk menyesuaikan foto produk, katalog jasa, skema warna, teks promosi, dan nomor WhatsApp. Selain itu, kami memberikan Garansi Bantuan Bebas Masalah Teknis selama 30 hari penuh setelah website tayang.'
  },
  {
    id: 'faq-4',
    category: 'proses',
    question: 'Berapa lama proses pembuatan website sampai bisa digunakan jualan?',
    answer: 'Untuk Starter selesai dalam 2–3 hari kerja. Bisnis selesai dalam 3–4 hari kerja. Growth selesai kilat dalam 1–2 hari kerja (Prioritas). Waktu dihitung setelah materi dasar (nama usaha, foto produk/jasa, dan nomor WhatsApp) kami terima.'
  },
  {
    id: 'faq-5',
    category: 'proses',
    question: 'Bagaimana jika saya belum punya foto produk bagus atau tidak bisa merangkai kata promosi?',
    answer: 'Tenang saja! Kamu cukup kirimkan foto apa adanya dari smartphone. Tim RedRush akan bantu edit, crop rapi, dan optimasi resolusinya. Di Bisnis dan Growth, kami juga membantu menuliskan kata-kata promosi memikat pembeli secara gratis.'
  },
  {
    id: 'faq-6',
    category: 'teknis',
    question: 'Apakah websitenya 100% milik saya dan bisa dibuka di semua jenis HP?',
    answer: 'Ya, 100% milik kamu seutuhnya! Website dirancang menggunakan standar responsif modern (Mobile-First) sehingga otomatis menyesuaikan ukuran layar iPhone, Android, tablet, hingga laptop dengan kecepatan muat super gesit.'
  }
];

export const CHAT_TESTIMONIALS = [
  {
    id: 'chat-1',
    sender: 'LKP AS Taylor (Talise)',
    time: '10:42',
    messages: [
      { text: 'Mas, alhamdulillah web astailor.vercel.app udah kami pasang di bio Instagram & Google Maps.', isMe: false, time: '10:40' },
      { text: 'Wah mantap bu! Bagaimana respon calon pelanggan jahit & sewanya?', isMe: true, time: '10:41' },
      { text: 'Bagus banget mas, mahasiswa wisuda & rombongan dinas langsung kirim format booking fitting rapi via WA. Gak ribet tanya-tanya dari nol lagi 🙏✨', isMe: false, time: '10:42' }
    ]
  },
  {
    id: 'chat-2',
    sender: 'Dapur Roa Super (Palu)',
    time: '14:18',
    messages: [
      { text: 'Bang, landing page Bisnisnya mantap pol! Pembeli dari luar kota bilang keliatan resmi & meyakinkan.', isMe: false, time: '14:15' },
      { text: 'Alhamdulillah, tombol pesan via WA dan petanya aman ya bang?', isMe: true, time: '14:16' },
      { text: 'Lancar jaya! Tiap ada pesanan masuk formatnya sudah otomatis lengkap alamat & varian toples. Makasih banyak ya tim RedRush! 🚀🔥', isMe: false, time: '14:18' }
    ]
  }
];
