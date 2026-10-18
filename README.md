# PortEra — Landing Page (React + Vite)

Landing page jasa pembuatan portfolio mahasiswa.

## Menjalankan

```bash
npm install
npm run dev      # buka http://localhost:5173
npm run build    # hasil produksi di folder dist/
```

## Mengubah konten

Semua teks, harga, testimoni, FAQ, dan **nomor WhatsApp** ada di `src/data.js`.
Ganti `WA_NUMBER` dengan nomor kamu (format `628xxxxxxxxxx`, tanpa `+`).

## Struktur

```
src/
├── App.jsx              # susunan section
├── data.js              # konten & konfigurasi
├── index.css            # seluruh styling
└── components/
    ├── Navbar.jsx       # sticky + menu mobile
    ├── Hero.jsx         # hero + mockup animasi
    ├── Stats.jsx
    ├── Portfolio.jsx    # tab Pitch Deck / Website
    ├── WhyUs.jsx
    ├── Pricing.jsx
    ├── Process.jsx
    ├── Testimonials.jsx
    ├── FAQ.jsx          # accordion
    ├── CTA.jsx
    ├── Footer.jsx
    ├── FloatingWA.jsx
    ├── SectionHeader.jsx
    ├── Logo.jsx
    └── Icons.jsx
```
