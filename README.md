# RedRush Media Digital

Website layanan pembuatan landing page UMKM dan usaha jasa. React 19, TypeScript, Vite, Tailwind CSS 4, Motion, dan Lucide.

## Menjalankan

Gunakan Node.js 22 atau lebih baru.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

Deploy folder `dist` ke hosting statis setelah build. Tidak memerlukan Gemini, Express, database, atau API key. Tidak ada deployment otomatis dari proyek ini.

## Mengubah konten

Konten utama berada di `src/data/content.ts`; komponen berada di `src/components`. Harga metadata dan JSON-LD dihasilkan oleh plugin Vite dari `PRICING_PACKAGES`, sehingga mengikuti harga paket. Jangan membuka `index.html` langsung; gunakan Vite atau hasil build.

## Sebelum promosi

- Konfirmasi nomor WhatsApp, jam layanan, dan izin menampilkan proyek klien.
- Ganti contoh testimoni dengan ulasan yang benar-benar diterima beserta izin publikasinya.
- Tetapkan batas produk, revisi Growth, dan durasi yang realistis. Saat ini penawaran bisnis asli dipertahankan.
- Jelaskan biaya perpanjangan domain tahun kedua, dukungan setelah garansi, dan kepemilikan domain/source code.
- Konfirmasi harga coret adalah harga yang pernah benar-benar ditawarkan.
- Setelah domain final tersedia, tambahkan canonical URL dan OG image milik brand dengan URL absolut.

## Perbaikan versi ini

Harga SEO mengikuti paket 299/499/999 ribu, statistik tanpa sumber diganti penjelasan manfaat, klaim paling laris dihapus dari data paket, simulasi ulasan diberi label sejak awal, Instagram placeholder disembunyikan, hover audio dinonaktifkan, favicon ditambahkan, preferensi reduced motion dihormati, dan dependency generator yang tidak dipakai dihapus.
