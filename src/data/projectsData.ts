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
    description: 'Periode: Jun 2025 – Jul 2025\n\nMembangun web portal berbasis forum untuk mahasiswa menggunakan framework Django. Sistem ini memungkinkan pengguna untuk registrasi, login, membuat thread diskusi, dan mencari topik forum. Admin dapat mengelola registrasi pengguna dan memantau aktivitas forum melalui dashboard terpisah. Project menerapkan prinsip MVC, template HTML modular, dan struktur peran user/admin untuk mendukung platform komunitas akademik yang interaktif.',
    features: [
      'Forum diskusi dengan 6+ kategori akademik',
      'Pembuatan thread dan diskusi terstruktur',
      'Dashboard statistik komunitas real-time',
      'Sistem pencarian diskusi',
      'Profil pengguna dengan status online',
      'UI modern dengan gradient design',
    ],
    techStack: ['Django', 'Python', 'Object-Oriented Programming (OOP)'],
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
    description: 'Periode: Jun 2025 – Jul 2025\n\nMengembangkan sistem e-commerce berbasis web menggunakan CodeIgniter 4 (CI4) dan MySQL sebagai bagian dari project-based learning. Sistem ini mencakup dashboard terpisah untuk user dan admin, manajemen produk, autentikasi pelanggan (login/register), pemrosesan pesanan, fitur keranjang belanja, dan verifikasi email. Project menekankan struktur kode yang bersih, desain halaman modular, dan antarmuka yang ramah pengguna baik untuk pelanggan maupun administrator.',
    features: [
      'Katalog produk dengan kategori dan filter',
      'Keranjang belanja interaktif',
      'Checkout flow multi-step',
      'Detail transaksi dan invoice',
      'Sistem pembayaran terintegrasi',
      'Manajemen stok produk real-time',
    ],
    techStack: ['CodeIgniter 4', 'PHP', 'MySQL', 'Project Manager'],
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
    description: 'Periode: Nov 2024 – Jan 2025\n\nProject website kedua untuk tugas kuliah semester 4 — membuat website toko gadget responsif menggunakan PHP Native dan Midtrans Payment Gateway API.',
    features: [
      'Katalog gadget dengan spesifikasi lengkap',
      'Halaman detail produk yang informatif',
      'Kategori populer dengan visual menarik',
      'Keranjang belanja interaktif',
      'Pencarian gadget cerdas',
      'Desain modern dengan hero banner dinamis',
    ],
    techStack: ['PHP Native', 'Midtrans Payment Gateway API'],
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
    title: 'Alif Beta',
    category: 'Mobile App',
    problem: 'Anak-anak dan pemula kesulitan belajar membaca huruf hijaiyah dan Iqro secara mandiri tanpa bimbingan langsung dari guru ngaji.',
    solution: 'Mengembangkan aplikasi mobile edukatif dengan pendekatan gamifikasi yang memungkinkan pengguna belajar huruf hijaiyah, mengerjakan quiz, dan membaca Iqro secara interaktif.',
    background: 'Aplikasi Alif Beta dikembangkan sebagai media pembelajaran Iqro digital untuk anak-anak dan pemula. Dengan karakter maskot yang friendly dan desain colorful, aplikasi ini membuat proses belajar membaca huruf hijaiyah menjadi menyenangkan. Terdapat fitur belajar huruf hijaiyah, quiz interaktif, dan modul Iqro bertahap yang membantu pengguna belajar secara mandiri.',
    description: 'Periode: Okt 2025 – Des 2025\n\nAlif Beta adalah aplikasi mobile learning berbasis Android yang dirancang untuk membantu pemula, khususnya anak-anak, belajar huruf Hijaiyah (Arab) dan bacaan dasar Al-Qur\'an melalui metode Iqro\' secara interaktif dan menyenangkan.\n\nAplikasi ini dikembangkan sebagai project akhir semester (UAS) untuk mata kuliah Mobile Programming. Tujuan project ini adalah menggabungkan teknologi mobile dengan konten edukatif untuk menciptakan alat belajar Al-Qur\'an yang sederhana dan efektif.',
    features: [
      'Modul belajar huruf Hijaiyah interaktif',
      'Level belajar Iqro\' terstruktur (1–6)',
      'Sistem kuis untuk menguji pemahaman pengguna',
      'Sistem autentikasi pengguna (login dan registrasi)',
      'Pelacakan progres belajar',
      'Antarmuka sederhana dan ramah anak',
    ],
    techStack: ['Kotlin (Android Development)', 'Supabase (Backend & Database)', 'Android Studio'],
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
    slug: 'brain-adventure',
    title: 'Brain Adventure',
    category: 'Game',
    problem: 'Anak-anak seringkali merasa bosan dengan metode belajar matematika konvensional sehingga motivasi belajar menurun.',
    solution: 'Mengembangkan game edukasi 2D platformer yang mengintegrasikan quiz matematika ke dalam gameplay, sehingga anak-anak belajar sambil bermain secara interaktif dan menyenangkan.',
    background: 'Brain Adventure adalah game edukasi 2D platformer yang dirancang untuk membuat proses belajar matematika menjadi lebih menyenangkan. Pemain mengendalikan karakter yang menjelajahi berbagai level, menghadapi musuh, dan menjawab quiz matematika dari NPC. Dengan visual pixel art yang menarik dan gameplay side-scrolling yang adiktif, game ini berhasil menggabungkan elemen edukasi dan hiburan secara harmonis.',
    description: 'Mengembangkan "Brain Adventure," sebuah media pembelajaran interaktif inovatif dalam genre Adventure-Educational yang ditujukan untuk siswa sekolah dasar. Game ini dirancang sebagai solusi instruksional yang menggabungkan elemen petualangan imersif dengan tantangan kognitif untuk merangsang berpikir kritis dan kecepatan pemecahan masalah. Project ini memadukan hiburan digital dengan tujuan akademik yang jelas, berfokus pada penguatan kompetensi STEM (Science, Technology, Engineering, Mathematics) dan literasi.',
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
  }
];
