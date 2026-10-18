// ====== Ganti nomor WhatsApp di sini (format internasional tanpa +) ======
export const WA_NUMBER = '628xxxxxxxxxx';

export const waLink = (text = 'Halo PortEra, saya ingin konsultasi pembuatan portfolio.') =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const navLinks = [
  { label: 'Contoh Portfolio', href: '#portfolio' },
  { label: 'Kenapa Kami', href: '#kenapa' },
  { label: 'Paket', href: '#paket' },
  { label: 'Cara Order', href: '#cara-order' },
  { label: 'FAQ', href: '#faq' },
];

export const stats = [
  { value: '20+', label: 'portfolio selesai' },
  { value: '98%', label: 'client puas' },
  { value: '3-7 Hari', label: 'pengerjaan kilat' },
];

export const portfolios = {
  deck: [
    {
      slide: 'Slide 01/10',
      badge: 'UI',
      badgeTone: 'blue',
      title: 'Fintech Wallet Onboarding',
      desc: 'Studi kasus komprehensif mulai dari user pain point, kawat desain, hingga prototype interaktif.',
      metaLeft: 'Problem Framing',
      metaRight: 'STAR Method',
      metaTone: 'blue',
      name: 'Portfolio UI/UX',
      summary: 'Rancangan visual berstandar industri dengan struktur studi kasus yang disukai oleh lead designer unicorn.',
    },
    {
      slide: 'Slide 04/10',
      badge: 'AI',
      badgeTone: 'green',
      title: 'Churn Prediction Architecture',
      desc: 'Eksplorasi model machine learning, visualisasi kurva ROC, dan metrik akurasi teruji.',
      metaLeft: 'Model Pipeline',
      metaRight: 'Python • XGBoost',
      metaTone: 'green',
      name: 'Portfolio Data & AI',
      summary: 'Menyajikan data teknis dan algoritma komputasi secara elegan tanpa kehilangan kedalaman analisis akademis.',
    },
    {
      slide: 'Slide 02/10',
      badge: 'MBB',
      badgeTone: 'blue',
      title: 'Market Sizing & Expansion',
      desc: 'Kerangka kerja MECE, valuasi TAM/SAM/SOM, dan strategi go-to-market korporasi.',
      metaLeft: 'Strategic Deck',
      metaRight: 'MBB Standard',
      metaTone: 'blue',
      name: 'Portfolio Bisnis',
      summary: 'Format deck berstandar konsultan top tier dengan struktur argumen logis dan visualisasi matriks terarah.',
    },
  ],
  web: [
    {
      slide: 'Homepage',
      badge: 'UX',
      badgeTone: 'blue',
      title: 'Personal Design Showcase',
      desc: 'Landing page personal dengan galeri case study, animasi halus, dan CTA kontak yang jelas.',
      metaLeft: 'Responsive',
      metaRight: 'React • Vite',
      metaTone: 'blue',
      name: 'Website Designer',
      summary: 'Website personal branding yang menonjolkan proses desain dan hasil akhir dalam satu alur cerita.',
    },
    {
      slide: 'Projects',
      badge: 'DEV',
      badgeTone: 'green',
      title: 'Engineer Project Hub',
      desc: 'Daftar proyek dengan tech stack, tautan GitHub, demo live, dan ringkasan dampak.',
      metaLeft: 'Dev Portfolio',
      metaRight: 'Next.js • Tailwind',
      metaTone: 'green',
      name: 'Website Developer',
      summary: 'Menampilkan kemampuan teknis secara rapi sehingga recruiter langsung paham kontribusimu.',
    },
    {
      slide: 'About',
      badge: 'BIZ',
      badgeTone: 'blue',
      title: 'Consulting Profile',
      desc: 'Profil profesional dengan highlight pengalaman organisasi, lomba, dan riset bisnis.',
      metaLeft: 'One Page',
      metaRight: 'Custom Domain',
      metaTone: 'blue',
      name: 'Website Bisnis',
      summary: 'Halaman ringkas berkesan korporat, siap ditautkan di CV dan profil LinkedIn.',
    },
  ],
};

export const features = [
  {
    icon: 'tools',
    title: 'Desain Profesional',
    desc: 'Tata letak korporat modern dengan hierarki visual terarah, tipografi bersih, dan palet warna standar industri.',
    tag: 'Enterprise Grade',
  },
  {
    icon: 'book',
    title: 'Storytelling yang Kuat',
    desc: 'Penyusunan narasi STAR (Situation, Task, Action, Result) yang menonjolkan dampak dan kontribusi nyata kamu.',
    tag: 'STAR Methodology',
  },
  {
    icon: 'refresh',
    title: 'Revisi Sampai Puas',
    desc: 'Jaminan penyesuaian detail konten, copy, dan visual hingga portfolio benar-benar selaras dengan karakter profilmu.',
    tag: 'Quality Assurance',
  },
  {
    icon: 'gauge',
    title: 'Proses Cepat dan Jelas',
    desc: 'Estimasi waktu terukur (3-7 hari kerja) dengan alur komunikasi WhatsApp yang responsif dan transparan.',
    tag: '3-7 Days SLA',
  },
];

export const plans = [
  {
    eyebrow: 'Format Dokumen',
    name: 'Pitch Deck Portfolio',
    desc: 'Solusi ringkas dan efektif untuk presentasi magang & beasiswa akademik.',
    price: 'Rp100.000',
    unit: '/ proyek',
    items: [
      'Up to 10 slide terstruktur',
      'Layout profesional standar industri',
      '1x revisi menyeluruh',
      'File PPTX (editable) + PDF High-Res',
      'Pengerjaan 2–3 hari kerja',
    ],
  },
  {
    eyebrow: 'Online Presence',
    name: 'Website Portfolio',
    desc: 'Portfolio digital interaktif yang siap diakses recruiter kapan saja secara global.',
    price: 'Rp200.000',
    unit: '/ website',
    featured: true,
    items: [
      '1 halaman responsif (Desktop & Mobile)',
      'Desain custom sesuai personal branding',
      '2x sesi revisi detail',
      'Siap dipublish & hosting siap pakai',
      'Link personal siap taruh di CV & LinkedIn',
    ],
  },
  {
    eyebrow: 'Solusi Lengkap',
    name: 'Bundle Deck + Website',
    desc: 'Paket lengkap all-in-one untuk persiapan karir tingkat profesional tanpa cela.',
    price: 'Rp250.000',
    unit: '/ paket',
    tag: 'Paling Hemat',
    items: [
      'Semua isi paket Deck dan Website',
      'Desain konsisten (Unified Branding)',
      '2x sesi revisi lengkap',
      'Prioritas antrian pengerjaan',
      'Bonus panduan update berkala mandiri',
    ],
  },
];

export const steps = [
  { title: 'Pilih paket', desc: 'Tentukan paket pitch deck, website, atau bundle sesuai kebutuhanmu.' },
  { title: 'Chat kami di WhatsApp', desc: 'Klik tombol pemesanan untuk langsung terhubung dengan tim PortEra.' },
  { title: 'Kirim materi dan brief', desc: 'Kirimkan CV, draft tulisan, link proyek, atau materi pendukung yang kamu miliki.' },
  { title: 'Terima portfolio-mu', desc: 'Review draf pertama, ajukan revisi, dan terima hasil final siap pakai.' },
];

export const testimonials = [
  {
    quote:
      'Desain pitch deck dari PortEra benar-benar mengubah cara saya mempresentasikan project coding dan UI/UX. Sangat terstruktur, rapi, dan terbukti membantu saya hingga diterima di Apple Developer Academy!',
    initials: 'AP',
    name: 'Arya Pratama',
    role: 'Teknik Informatika, Universitas Indonesia',
  },
  {
    quote:
      'Website portfolionya sangat bersih, responsif di HP, dan recruiter magang tech unicorn langsung notice saat sesi interview. Harganya sangat ramah kantong mahasiswa dengan hasil level korporat!',
    initials: 'NA',
    name: 'Nabila Azzahra',
    role: 'Desain Komunikasi Visual, ITB',
  },
  {
    quote:
      'Sebelumnya bingung merangkum 5 proyek riset dan konsultasi bisnis dalam format singkat. PortEra menyusun narasinya dengan tajam sehingga lolos seleksi magang BUMN prestisius.',
    initials: 'DW',
    name: 'Dimas Wicaksono',
    role: 'Manajemen Bisnis, Universitas Gadjah Mada',
  },
];

export const faqs = [
  {
    q: 'Berapa lama estimasi pengerjaan portfolio?',
    a: 'Pitch deck biasanya selesai dalam 2–3 hari kerja, website 4–7 hari kerja, dan bundle sekitar 5–7 hari kerja setelah materi lengkap kami terima.',
  },
  {
    q: 'Apa saja yang perlu saya siapkan sebelum order?',
    a: 'Siapkan CV terbaru, daftar proyek atau pengalaman yang ingin ditampilkan, foto/screenshot hasil karya, serta link pendukung (GitHub, Behance, Drive). Kalau belum lengkap, tim kami akan membantu merapikannya.',
  },
  {
    q: 'Berapa kali jumlah revisi yang saya dapatkan?',
    a: 'Paket Pitch Deck mendapat 1x revisi menyeluruh, sedangkan paket Website dan Bundle mendapat 2x sesi revisi detail.',
  },
  {
    q: 'Format file apa saja yang akan saya terima?',
    a: 'Pitch deck dikirim dalam format PPTX (editable) dan PDF high-res. Website dikirim berupa link live yang sudah dipublish beserta source code-nya.',
  },
  {
    q: 'Metode pembayaran apa saja yang didukung?',
    a: 'Kami menerima transfer bank, e-wallet (GoPay, OVO, DANA, ShopeePay), dan QRIS. Pembayaran bisa DP 50% di awal dan pelunasan saat hasil final.',
  },
];
