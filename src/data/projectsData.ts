export interface ProjectData {
  slug: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  background: string;
  description: string;
  features: string[];
  techStack: string[];
  images: string[];
  imageType?: 'landscape' | 'portrait'; // for flexible image display
  link?: string;
  github?: string;
}

export const projectsData: ProjectData[] = [
  {
    slug: 'agora-talk',
    title: 'AgoraTalk',
    category: 'Web App',
    problem: 'Mahasiswa Indonesia kesulitan menemukan platform diskusi akademik yang terstruktur dan fokus. Forum umum terlalu ramai dan tidak relevan dengan kebutuhan akademik.',
    solution: 'Membangun platform forum diskusi khusus mahasiswa dengan kategori akademik terstruktur, fitur thread dan statistik komunitas yang membantu mahasiswa berdiskusi secara produktif.',
    background: 'AgoraTalk lahir dari kebutuhan mahasiswa akan ruang diskusi digital yang aman dan akademis. Di tengah maraknya media sosial umum, mahasiswa membutuhkan platform khusus untuk berbagi pengetahuan, berdiskusi akademik, dan membangun komunitas yang solid. Platform ini dirancang agar mahasiswa dapat berdiskusi seputar tugas, beasiswa, lomba, hingga topik ekonomi dan teknologi.',
    description: 'Platform diskusi akademik untuk mahasiswa Indonesia dengan fitur forum terkategori, pembuatan thread, dashboard statistik komunitas, dan sistem notifikasi. Didesain dengan UI modern berwarna ungu-gradien yang profesional dan mudah digunakan.',
    features: [
      'Forum diskusi dengan 6+ kategori akademik',
      'Pembuatan thread dan diskusi terstruktur',
      'Dashboard statistik komunitas real-time',
      'Sistem pencarian diskusi',
      'Profil pengguna dengan status online',
      'UI modern dengan gradient design',
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    images: [
      '/projects/AGORA_TALK/1.HOME.png',
      '/projects/AGORA_TALK/2.THREAD.png',
      '/projects/AGORA_TALK/3.NEW_THREAD.png',
      '/projects/AGORA_TALK/4.DASHBOARD.png',
    ],
    imageType: 'landscape',
    github: 'https://github.com/ArizalFiqri',
  },
  {
    slug: 'dagangin-mart',
    title: 'Dagangin Mart',
    category: 'Web App',
    problem: 'Pelaku UMKM membutuhkan platform e-commerce yang mudah digunakan untuk menjual produk fashion dan aksesoris secara online tanpa proses yang rumit.',
    solution: 'Mengembangkan marketplace e-commerce lengkap dengan katalog produk, keranjang belanja, checkout flow, dan manajemen transaksi yang user-friendly.',
    background: 'Dagangin Mart dikembangkan sebagai solusi e-commerce untuk UMKM yang menjual produk fashion seperti perhiasan, tas, dan aksesoris. Platform ini mengedepankan kemudahan penggunaan bagi penjual maupun pembeli, dengan fitur pencarian produk, kategori, dan sistem pembayaran yang terstruktur. Desain menggunakan tema Natal/musiman yang menarik untuk meningkatkan engagement pelanggan.',
    description: 'Marketplace e-commerce full-featured untuk produk fashion dan aksesoris UMKM. Dilengkapi katalog produk dengan filter kategori, keranjang belanja, checkout flow, detail transaksi, dan sistem pembayaran terintegrasi. UI responsif dengan tema seasonal yang menarik.',
    features: [
      'Katalog produk dengan kategori dan filter',
      'Keranjang belanja interaktif',
      'Checkout flow multi-step',
      'Detail transaksi dan invoice',
      'Sistem pembayaran terintegrasi',
      'Manajemen stok produk real-time',
    ],
    techStack: ['CodeIgniter', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    images: [
      '/projects/DAGANGIN_MART/1.HOME.png',
      '/projects/DAGANGIN_MART/2.PRODUK.png',
      '/projects/DAGANGIN_MART/3.CART.png',
      '/projects/DAGANGIN_MART/4.CHECKOUT.png',
      '/projects/DAGANGIN_MART/5.DETAIL_TRANSAKSI.png',
      '/projects/DAGANGIN_MART/6.PAYMENT.png',
    ],
    imageType: 'landscape',
    github: 'https://github.com/ArizalFiqri',
  },
  {
    slug: 'techzone-store',
    title: 'TechZone Store',
    category: 'Web App',
    problem: 'Konsumen kesulitan membandingkan dan membeli gadget terbaru secara online dengan informasi spesifikasi yang jelas dan pengalaman belanja yang modern.',
    solution: 'Membangun toko gadget online dengan katalog produk detail, spesifikasi lengkap, dan keranjang belanja dengan UI modern dan intuitif.',
    background: 'TechZone Store merupakan proyek e-commerce yang berfokus pada penjualan gadget dan perangkat teknologi. Platform ini dirancang dengan desain yang bold dan modern menggunakan tipografi besar serta visual yang eye-catching. Setiap produk dilengkapi dengan spesifikasi detail untuk membantu konsumen dalam membuat keputusan pembelian yang tepat.',
    description: 'Toko gadget online modern dengan desain bold dan visual yang memukau. Menampilkan katalog smartphone dan tablet dari berbagai merek dengan spesifikasi detail, kategori populer, dan keranjang belanja. Dibangun dengan fokus pada pengalaman pengguna yang premium.',
    features: [
      'Katalog gadget dengan spesifikasi lengkap',
      'Halaman detail produk yang informatif',
      'Kategori populer dengan visual menarik',
      'Keranjang belanja interaktif',
      'Pencarian gadget cerdas',
      'Desain modern dengan hero banner dinamis',
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    images: [
      '/projects/TECHZONE_STORE/1.HOME.png',
      '/projects/TECHZONE_STORE/2.PRODUK.png',
      '/projects/TECHZONE_STORE/3.DETAIL_PRODUK.png',
      '/projects/TECHZONE_STORE/4.CART.png',
    ],
    imageType: 'landscape',
    github: 'https://github.com/ArizalFiqri',
  },
  {
    slug: 'aplikasi-iqro-mobile',
    title: 'Alif Beta — Aplikasi Iqro',
    category: 'Mobile App',
    problem: 'Anak-anak dan pemula kesulitan belajar membaca huruf hijaiyah dan Iqro secara mandiri tanpa bimbingan langsung dari guru ngaji.',
    solution: 'Mengembangkan aplikasi mobile edukatif dengan pendekatan gamifikasi yang memungkinkan pengguna belajar huruf hijaiyah, mengerjakan quiz, dan membaca Iqro secara interaktif.',
    background: 'Aplikasi Alif Beta dikembangkan sebagai media pembelajaran Iqro digital untuk anak-anak dan pemula. Dengan karakter maskot yang friendly dan desain colorful, aplikasi ini membuat proses belajar membaca huruf hijaiyah menjadi menyenangkan. Terdapat fitur belajar huruf hijaiyah, quiz interaktif, dan modul Iqro bertahap yang membantu pengguna belajar secara mandiri.',
    description: 'Aplikasi mobile edukatif untuk belajar membaca huruf hijaiyah dan Iqro dengan pendekatan gamifikasi. Dilengkapi karakter maskot lucu, menu interaktif, pembelajaran huruf hijaiyah, quiz, dan modul Iqro bertahap. Desain colorful dan child-friendly.',
    features: [
      'Pembelajaran huruf hijaiyah interaktif',
      'Quiz hijaiyah dengan berbagai level',
      'Modul Iqro bertahap (Iqro 1-6)',
      'Karakter maskot Alif Beta yang friendly',
      'Mode tamu dan sistem akun',
      'Desain UI child-friendly dan colorful',
    ],
    techStack: ['Kotlin', 'Android SDK', 'Firebase', 'XML Layout'],
    images: [
      '/projects/APLIKASI_IQRO_MOBILE/1.MAIN_MENU.png',
      '/projects/APLIKASI_IQRO_MOBILE/2.SECOND_MENU.png',
      '/projects/APLIKASI_IQRO_MOBILE/3.READ_HIJAIYAH.png',
      '/projects/APLIKASI_IQRO_MOBILE/4.SELECT_QUIZ.png',
      '/projects/APLIKASI_IQRO_MOBILE/5.QUIZ.png',
      '/projects/APLIKASI_IQRO_MOBILE/6.SELECT_IQRO.png',
      '/projects/APLIKASI_IQRO_MOBILE/7.IQRO.png',
    ],
    imageType: 'portrait',
    github: 'https://github.com/ArizalFiqri',
  },
  {
    slug: 'web-campus-freelance-spot',
    title: 'SkillHub Campus',
    category: 'Web App',
    problem: 'Mahasiswa yang memiliki skill freelance kesulitan menemukan klien di lingkungan kampus, sementara mahasiswa lain kesulitan mencari jasa freelancer terpercaya.',
    solution: 'Membangun platform freelance khusus kampus yang menghubungkan mahasiswa pencari jasa dengan mahasiswa freelancer, lengkap dengan sistem pencarian pekerjaan dan dashboard.',
    background: 'SkillHub Campus merupakan platform freelance yang dirancang khusus untuk ekosistem kampus. Platform ini menjembatani mahasiswa yang memiliki keahlian (seperti desain grafis, programming, penulisan) dengan mahasiswa atau dosen yang membutuhkan jasa mereka. Dengan desain dark theme yang modern dan profesional, platform ini memberikan pengalaman yang premium bagi penggunanya.',
    description: 'Platform freelance khusus kampus dengan desain dark theme modern. Menghubungkan 1000+ freelancer aktif dengan pencari jasa, dilengkapi fitur pencarian pekerjaan, daftar freelancer, dashboard personal, dan sistem kategori skill yang komprehensif.',
    features: [
      'Daftar freelancer dengan profil lengkap',
      'Pencarian pekerjaan berdasarkan kategori',
      'Dashboard freelancer personal',
      'Sistem pengelolaan pekerjaan',
      '50+ kategori skill tersedia',
      'Desain dark theme premium dan modern',
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    images: [
      '/projects/WEB_CAMPUS_FREELANCE_SPOT/1.HOME.png',
      '/projects/WEB_CAMPUS_FREELANCE_SPOT/2.DAFTAR_FREELANCER.png',
      '/projects/WEB_CAMPUS_FREELANCE_SPOT/3.CARI_PERKERJAAN.png',
      '/projects/WEB_CAMPUS_FREELANCE_SPOT/4.PEKERJAAN_SAYA.jpg',
      '/projects/WEB_CAMPUS_FREELANCE_SPOT/5.DASHBOARD_FREELANCER.png',
    ],
    imageType: 'landscape',
    github: 'https://github.com/ArizalFiqri',
  },
  {
    slug: 'brain-adventure',
    title: 'Brain Adventure',
    category: 'Game',
    problem: 'Anak-anak seringkali merasa bosan dengan metode belajar matematika konvensional sehingga motivasi belajar menurun.',
    solution: 'Mengembangkan game edukasi 2D platformer yang mengintegrasikan quiz matematika ke dalam gameplay, sehingga anak-anak belajar sambil bermain secara interaktif dan menyenangkan.',
    background: 'Brain Adventure adalah game edukasi 2D platformer yang dirancang untuk membuat proses belajar matematika menjadi lebih menyenangkan. Pemain mengendalikan karakter yang menjelajahi berbagai level, menghadapi musuh, dan menjawab quiz matematika dari NPC. Dengan visual pixel art yang menarik dan gameplay side-scrolling yang adiktif, game ini berhasil menggabungkan elemen edukasi dan hiburan secara harmonis.',
    description: 'Game edukasi 2D platformer dengan pixel art style. Pemain menjelajahi dunia, melawan musuh, dan menjawab quiz matematika dari NPC. Dilengkapi sistem level, karakter, dan pencapaian yang membuat belajar menjadi menyenangkan.',
    features: [
      'Gameplay platformer 2D side-scrolling',
      'Quiz matematika interaktif dari NPC',
      'Sistem skor dan nyawa',
      'Multiple level dengan tingkat kesulitan bertahap',
      'Pemilihan karakter',
      'Sistem pencapaian (achievements)',
    ],
    techStack: ['Godot Engine', 'GDScript', 'Pixel Art', 'Tiled'],
    images: [
      '/projects/BRAIN_ADVANTURE/1.MAIN_MENU.png',
      '/projects/BRAIN_ADVANTURE/2.GAMEPLAY.png',
      '/projects/BRAIN_ADVANTURE/3.QUIZ_FROM_NPC.png',
    ],
    imageType: 'landscape',
    github: 'https://github.com/ArizalFiqri',
  },
];
