export interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string;
  category: string;
  summary: string;
  features: string[];
  deliverables: string[];
  workflow: { step: string; desc: string }[];
  targetAudience: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "survey-kebijakan-publik",
    title: "Survey Kebijakan Publik",
    shortDesc: "Riset opini masyarakat dan evaluasi kebijakan pemerintah berskala lokal maupun nasional.",
    category: "Pemerintahan & Kebijakan",
    summary:
      "Layanan survei komprehensif untuk mengukur persepsi, aspirasi, dan tingkat kepuasan masyarakat terhadap program pemerintah atau inisiatif publik. Menggunakan metodologi multistage random sampling yang ketat untuk menjamin representativitas data.",
    features: [
      "Metodologi sampling berstandar akademik (Multistage Random Sampling)",
      "Pengukuran Indeks Kepuasan Masyarakat (IKM) sesuai PermenPAN-RB",
      "Validasi responden berlapis melalui verifikasi GPS dan audio recording lapangan",
      "Analisis cross-tabulasi demografi, wilayah, dan segmentasi sosio-ekonomi",
    ],
    deliverables: [
      "Laporan Eksekutif & Policy Brief Rekomendasi Kebijakan",
      "Dataset mentah tervalidasi (SPSS / Excel / CSV)",
      "Dashboard analitik interaktif real-time",
      "Presentasi hasil kajian bersama analis senior",
    ],
    workflow: [
      { step: "Tahap 1: Desain Instrumen & Sampling", desc: "Penyusunan kuesioner terstandar dan penetapan kerangka sampel wilayah." },
      { step: "Tahap 2: Pengumpulan Data Lapangan (CAPI)", desc: "Enumerator terlatih turun ke lapangan dengan aplikasi CAPI ber-GPS." },
      { step: "Tahap 3: Quality Control & Audit", desc: "Spot-check 20% responden via call-back dan validasi anomali data otomatis." },
      { step: "Tahap 4: Analisis & Formulasi Rekomendasi", desc: "Pengolahan data statistik dan penyusunan rekomendasi taktis terarah." },
    ],
    targetAudience: [
      "Kementerian & Lembaga Negara",
      "Pemerintah Provinsi, Kabupaten, dan Kota",
      "Bappeda & Badan Riset Daerah (BRIDA)",
      "Lembaga Donor & NGO Publik",
    ],
  },
  {
    slug: "riset-elektoral-konsultasi-politik",
    title: "Riset Elektoral & KonsultasiPolitik",
    shortDesc: "Pemetaan kekuatan elektoral, perilaku pemilih, dan strategi pemenangan berbasis data presisi.",
    category: "Politik & Pemilu",
    summary:
      "Solusi intelijen elektoral lengkap untuk kandidat, partai politik, dan tim pemenangan. Mulai dari survei popularitas-akseptabilitas-elektabilitas, pemetaan swing & undecided voters, simulasi head-to-head, hingga sistem Quick Count & Exit Poll real-time berakurasi tinggi.",
    features: [
      "Tracking elektabilitas longitudinal berkala (trend analysis)",
      "Segmentasi pemilih (Generasi Z, Milenial, Swing Voters, Loyalis)",
      "Simulasi skenario pasangan calon dan efek endorsement figur kunci",
      "Sistem Quick Count TPS dengan protokol enkripsi dan verifikasi C1 plano",
    ],
    deliverables: [
      "Peta Pemenangan Wilayah (Kecamatan & TPS Prioritas)",
      "Buku Panduan Strategi Mikro-Targeting & Kampanye Darat",
      "Sistem Early Warning Isu Negatif & Serangan Black Campaign",
      "Akses War Room Real-Time Quick Count pada hari H pemilihan",
    ],
    workflow: [
      { step: "Tahap 1: Baseline Survey Elektoral", desc: "Pemetaan kekuatan awal kandidat dan identifikasi kantong suara potensial." },
      { step: "Tahap 2: Formulasi Peta Jalan Pemenangan", desc: "Penetapan narasi kampanye, pesan kunci, dan alokasi sumber daya wilayah." },
      { step: "Tahap 3: Monitoring & Tracking Berkala", desc: "Pengukuran efektivitas program kampanye dan respon terhadap isu dinamis." },
      { step: "Tahap 4: Pengawalan TPS & Quick Count", desc: "Pengerahan saksi/relawan terverifikasi untuk tabulasi suara cepat berkecepatan tinggi." },
    ],
    targetAudience: [
      "Calon Kepala Daerah (Gubernur, Bupati, Walikota)",
      "Calon Anggota Legislatif (DPR RI, DPD, DPRD)",
      "Dewan Pimpinan Partai Politik (DPP, DPD, DPC)",
      "Konsultan Politik & Tim Sukses Independen",
    ],
  },
  {
    slug: "infrastruktur-riset-olah-data-digital",
    title: "Infrastruktur Riset & OlahDataDigital",
    shortDesc: "Penyediaan sistem survei digital, data pipeline, dan analitik komputasi awan berkecepatan tinggi.",
    category: "Teknologi & Data",
    summary:
      "Penyediaan infrastruktur teknologi riset menyeluruh untuk institusi yang ingin melakukan survei mandiri dengan standar kelas dunia. Meliputi platform pembuatan kuesioner dinamis, sistem pengumpulan data offline, integrasi API, serta automated data cleansing pipeline.",
    features: [
      "Arsitektur server data terenkripsi (AES-256) dengan SLA uptime 99.9%",
      "Koleksi data multi-platform: Web Panel, Mobile Android (CAPI), dan CATI Telepon",
      "Automasi data cleaning, outlier detection, dan standarisasi format otomatis",
      "Penyimpanan data cloud berbasis ClickHouse & PostGIS berlatensi sub-detik",
    ],
    deliverables: [
      "Akses SaaS Dashboard Custom Domain lembaga riset Anda",
      "API Endpoint untuk integrasi sistem internal klien",
      "Database terstruktur siap olah (format SPSS, STATA, R, Python)",
      "Dokumentasi arsitektur data & panduan administrasi sistem",
    ],
    workflow: [
      { step: "Tahap 1: Penilaian Kebutuhan & Arsitektur", desc: "Menentukan spesifikasi kuota data, keamanan, dan integrasi sistem klien." },
      { step: "Tahap 2: Deployment & Konfigurasi Pipeline", desc: "Setup environment sistem, form builder, dan server database dedicated." },
      { step: "Tahap 3: Uji Beban & Keamanan", desc: "Stress-testing jutaan transaksi data dan audit kepatuhan perlindungan data." },
      { step: "Tahap 4: Serah Terima & Support 24/7", desc: "Pelatihan tim teknis internal serta pendampingan operasional berkala." },
    ],
    targetAudience: [
      "Lembaga Riset Swasta & Perguruan Tinggi",
      "Dinas Kominfo & Pusat Data Pemerintahan",
      "Korporasi yang Memiliki Tim Data Internal",
      "Organisasi Nirlaba Berskala Nasional",
    ],
  },
  {
    slug: "enumerator-tenaga-lapangan-profesional",
    title: "Enumerator & Tenaga Lapangan Profesional",
    shortDesc: "Penyediaan ribuan surveyor terlatih di 38 provinsi dengan jaminan integritas dan kepatuhan SOP.",
    category: "Operasional Lapangan",
    summary:
      "Jaringan ribuan tenaga lapangan, surveyor (enumerator), koordinator wilayah (Korwil), dan verifikator data yang tersebar dari Sabang sampai Merauke. Setiap tenaga lapangan telah melalui pelatihan metodologi, kode etik riset, dan pengoperasian aplikasi CAPI.",
    features: [
      "Database lebih dari 5.000+ enumerator tersertifikasi di 514 kabupaten/kota",
      "Koordinator lapangan (Korwil/Korda) berpengalaman dalam ratusan riset nasional",
      "Sistem pemantauan kehadiran berbasis GPS live & Face Verification anti-joki",
      "Standar Operasional Prosedur (SOP) wawancara mendalam yang ketat dan etis",
    ],
    deliverables: [
      "Laporan Log Aktivitas Lapangan & Bukti Geotagging Responden",
      "Dokumentasi foto dan rekaman audio wawancara (sesuai consent)",
      "Rekapitulasi performa dan tingkat respons rate per wilayah",
      "Laporan audit spot-check tim supervisi independen",
    ],
    workflow: [
      { step: "Tahap 1: Rekrutmen & Seleksi Wilayah", desc: "Penyaringan enumerator lokal yang menguasai bahasa dan adat daerah setempat." },
      { step: "Tahap 2: Training of Trainers (ToT)", desc: "Pembekalan mendalam kuesioner, simulasi wawancara, dan kode etik riset." },
      { step: "Tahap 3: Penetrasi Lapangan Terpantau", desc: "Pelaksanaan wawancara dengan tracking posisi real-time oleh server pusat." },
      { step: "Tahap 4: Verifikasi & Pembayaran Kinerja", desc: "Audit data sebelum data dinyatakan valid dan dimasukkan ke repositori." },
    ],
    targetAudience: [
      "Lembaga Survei yang Membutuhkan Kekuatan Lapangan",
      "Kementerian untuk Sensus dan Pendataan Khusus",
      "Perusahaan Riset Pasar Global (Market Research Agencies)",
      "Badan Usaha Milik Negara untuk Audit Kepuasan Pelanggan",
    ],
  },
  {
    slug: "portal-berita-online",
    title: "Portal Berita Online",
    shortDesc: "Pemberitaan berbasis data, infografis elektoral, dan rilis opini publik yang kredibel.",
    category: "Media & Jurnalisme Data",
    summary:
      "Pengelolaan publikasi dan penyajian konten jurnalisme presisi yang menyatukan fakta jurnalistik dengan temuan data riset empiris. Membantu publik dan pengambil kebijakan memahami isu-isu krusial melalui narasi yang jernih, visualisasi data interaktif, dan perspektif mendalam.",
    features: [
      "Penulisan artikel jurnalisme data berbasis hasil riset survei terkini",
      "Pembuatan infografis interaktif dan peta spasial siap semat (embed)",
      "Optimasi SEO berita agar mudah diakses publik dan dikutip media nasional",
      "Sistem peliputan dan rilis pers yang terhubung ke jaringan kantor berita",
    ],
    deliverables: [
      "Artikel berita mendalam (in-depth data reporting)",
      "Aset visual infografis beresolusi tinggi untuk media cetak & digital",
      "Paket rilis pers ke 50+ media massa nasional terverifikasi Dewan Pers",
      "Laporan impresi pembaca, jangkauan sosial, dan media coverage",
    ],
    workflow: [
      { step: "Tahap 1: Ekstraksi Data Kunci", desc: "Identifikasi angle berita paling menarik dan relevan dari hasil riset." },
      { step: "Tahap 2: Penulisan Narasi & Visualisasi", desc: "Penyusunan naskah jurnalisme data disertai pembuatan diagram infografis." },
      { step: "Tahap 3: Review Redaksional & Fakta", desc: "Pemeriksaan akurasi metodologis dan kepatuhan kode etik jurnalistik." },
      { step: "Tahap 4: Distribusi & Amplifikasi Media", desc: "Publikasi pada portal dan penyebaran rilis pers ke jejaring redaksi." },
    ],
    targetAudience: [
      "Lembaga Riset yang Ingin Menjangkau Publik Luas",
      "Hubungan Masyarakat (Humas) Kementerian & BUMN",
      "Tokoh Publik & Pemikir Strategis",
      "Portal Berita Partner & Media Sindikasi",
    ],
  },
  {
    slug: "konsultasi-riset-strategi-bisnis",
    title: "Konsultasi Riset & Strategi Bisnis",
    shortDesc: "Advis riset pasar, brand positioning, dan studi kelayakan ekspansi bisnis berbasis analitik.",
    category: "Bisnis & Korporasi",
    summary:
      "Pendampingan konsultasi strategis bagi para eksekutif perusahaan dalam mengambil keputusan investasi, peluncuran produk baru, dan penguatan posisi pasar. Menggabungkan analisis data makro ekonomi, riset perilaku konsumen, dan pemodelan proyeksi bisnis.",
    features: [
      "Studi Kelayakan Pasar (Market Feasibility Study) & Analisis Pesaing",
      "Pengukuran Brand Health Tracking & Net Promoter Score (NPS)",
      "Customer Persona Mapping & Analisis Elastisitas Harga Produk",
      "Workshop formulasi strategi bersama Board of Directors / C-Level",
    ],
    deliverables: [
      "Laporan Riset Strategis Komprehensif (Executive Deck)",
      "Matriks Posisi Pasar & Peta Persaingan Industri",
      "Rencana Aksi Bisnis 1-3 Tahun (Strategic Roadmap)",
      "Sesi Konsultasi & Mentoring Berkala Bersama Principal Consultant",
    ],
    workflow: [
      { step: "Tahap 1: Diagnosis Masalah & Tujuan", desc: "Membedah tantangan utama bisnis, target pertumbuhan, dan dinamika pasar." },
      { step: "Tahap 2: Riset Primer & Sekunder", desc: "Kombinasi survei konsumen, wawancara pakar industri, dan data benchmark." },
      { step: "Tahap 3: Sintesis & Skenario Bisnis", desc: "Merumuskan model proyeksi risiko serta peluang pangsa pasar baru." },
      { step: "Tahap 4: Presentasi & Pendampingan Implementasi", desc: "Penyampaian rekomendasi ke manajemen puncak dan monitoring adopsi." },
    ],
    targetAudience: [
      "Perusahaan FMCG, Ritel, & Perbankan",
      "Startup Scale-up & Perusahaan Teknologi",
      "Badan Usaha Milik Negara (BUMN) & Swasta Nasional",
      "Firma Ekuitas Swasta & Investor Modal Ventura",
    ],
  },
  {
    slug: "penerbitan-buku-karya-tulis-strategis",
    title: "Penerbitan Buku & Karya Tulis Strategis",
    shortDesc: "Pendampingan penulisan, kurasi, dan penerbitan buku ber-ISBN untuk tokoh, lembaga, dan akademisi.",
    category: "Penerbitan & Literasi",
    summary:
      "Layanan end-to-end penerbitan karya tulis strategis, memoar tokoh bangsa, buku monograf riset, serta rekam jejak kepemimpinan. Tim kami menangani riset dokumen, ghostwriting profesional, penyuntingan naskah, desain tata letak, hingga pengurusan legalitas ISBN dan distribusi nasional.",
    features: [
      "Tim Ghostwriter & Editor senior berpengalaman di bidang sosial-politik-bisnis",
      "Pengurusan legalitas resmi ISBN dari Perpustakaan Nasional RI",
      "Desain sampul eksklusif berstandar internasional dan tipografi premium",
      "Percetakan hardcover/softcover berkualitas museum serta format digital E-Book",
    ],
    deliverables: [
      "Buku fisik ber-ISBN siap edar (kuota cetak fleksibel)",
      "Master file digital (PDF Cetak, EPUB, dan Mockup Promosi)",
      "Paket peluncuran buku (Bedah Buku / Press Conference Kit)",
      "Pencatatan resmi di katalog Perpustakaan Nasional Republik Indonesia",
    ],
    workflow: [
      { step: "Tahap 1: Wawancara Mendalam & Kerangka Naskah", desc: "Penggalian gagasan utama, arsip dokumen, dan perumusan daftar isi buku." },
      { step: "Tahap 2: Proses Penulisan & Konfirmasi Bab", desc: "Penyusunan draf bab demi bab dengan review bertahap bersama narasumber." },
      { step: "Tahap 3: Penyuntingan, Desain & ISBN", desc: "Proofreading tata bahasa, layouting isi, desain cover, dan registrasi ISBN." },
      { step: "Tahap 4: Produksi Cetak & Distribusi", desc: "Pencetakan fisik bermutu tinggi dan pengiriman ke pemesan serta perpustakaan." },
    ],
    targetAudience: [
      "Tokoh Politik, Pemimpin Lembaga, & Pejabat Publik",
      "Profesor, Peneliti, & Guru Besar Perguruan Tinggi",
      "Korporasi yang Memperingati HUT / Transformasi Bisnis",
      "Yayasan & Organisasi Kebudayaan",
    ],
  },
  {
    slug: "penulisan-publikasi-artikel-opini-media-massa",
    title: "Penulisan & Publikasi Artikel Opini Media Massa",
    shortDesc: "Konstruksi artikel opini bernas dan penembusan kolom opini di surat kabar terkemuka nasional.",
    category: "Media Relations & Thought Leadership",
    summary:
      "Membantu pimpinan instansi dan pakar membangun thought leadership melalui gagasan tertulis yang dipublikasikan di rubrik opini media massa arus utama (Kompas, Koran Tempo, Media Indonesia, Bisnis Indonesia, Republika, dan portal nasional bereputasi).",
    features: [
      "Penajaman isu kontekstual yang sedang menjadi sorotan publik dan media",
      "Penyusunan naskah artikel berbobot 800 - 1.200 kata dengan gaya tulisan rubrikasi media sasaran",
      "Penyelarasan dengan data empiris dan kerangka regulasi terkini",
      "Jejaring relasi langsung dengan redaktur opini koran nasional terkemuka",
    ],
    deliverables: [
      "Naskah artikel opini yang telah terbit di media massa nasional sasaran",
      "Kliping resmi digital dan cetak untuk dokumentasi portofolio",
      "Amplifikasi naskah ke kanal media sosial dan media jejaring mitra",
      "Ringkasan respon publik dan kutipan dari pemangku kepentingan",
    ],
    workflow: [
      { step: "Tahap 1: Brainstorming Isu Hangat", desc: "Menentukan sudut pandang (angle) unik yang belum banyak diulas oleh pengamat lain." },
      { step: "Tahap 2: Draf Naskah Opini", desc: "Penyusunan argumen berbasis data dengan struktur yang memikat editor opini." },
      { step: "Tahap 3: Finalisasi & Pengajuan Redaksi", desc: "Penyelarasan redaksional akhir dan submit resmi ke redaksi media terpilih." },
      { step: "Tahap 4: Pengawalan Hingga Terbit", desc: "Koordinasi redaksional sampai tulisan tayang dan tersaji bagi publik luas." },
    ],
    targetAudience: [
      "Menteri, Kepala Lembaga, dan Kepala Daerah",
      "Rektor, Dekan, dan Akademisi Senior",
      "Direktur Utama & Pimpinan Korporasi",
      "Aktivis Kebijakan & Pengamat Publik",
    ],
  },
  {
    slug: "penulisan-penerbitan-artikel-opini-khusus",
    title: "Penulisan & Penerbitan Artikel Opini Khusus",
    shortDesc: "Penyusunan whitepaper, policy paper, dan esai kebijakan khusus untuk pengambil keputusan strategis.",
    category: "Penerbitan & Dokumen Strategis",
    summary:
      "Penyusunan naskah analisis mendalam (whitepaper, policy memo, atau artikel khusus) yang ditujukan untuk audiens terbatas dan pengambil keputusan tingkat tinggi (ring-1 eksekutif). Fokus pada kedalaman substansi, mitigasi risiko, dan implikasi jangka panjang suatu regulasi.",
    features: [
      "Kerangka penulisan berbasis Policy Brief dan Strategic Assessment",
      "Penyertaan data simulasi skenario fiskal, politik, dan dampak sosial",
      "Format penyajian ringkas, padat, dan langsung pada inti solusi eksekutif",
      "Penerbitan privat dengan jaminan kerahasiaan materi tingkat tinggi (NDA)",
    ],
    deliverables: [
      "Dokumen Policy Memo / Whitepaper Eksklusif (Format Cetak Eksklusif & PDF)",
      "Executive Summary 2 Halaman (One-Pager Briefing)",
      "Slide Paparan Presentasi untuk Audiensi Tingkat Tinggi",
      "Notulensi tanggapan dan matriks tindak lanjut rekomendasi",
    ],
    workflow: [
      { step: "Tahap 1: Briefing Rahasia & Batasan Isu", desc: "Penetapan tujuan dokumen dan sasaran pembuat kebijakan yang dituju." },
      { step: "Tahap 2: Pengumpulan Fakta & Analisis Risiko", desc: "Penyusunan data komparasi regulasi dan studi preseden kebijakan sejenis." },
      { step: "Tahap 3: Sintesis Naskah Kebijakan", desc: "Penulisan naskah yang mengedepankan solusi konkret tanpa bias politis." },
      { step: "Tahap 4: Produksi Dokumen Khusus", desc: "Pencetakan edisi terbatas dan penyerahan langsung ke pemohon riset." },
    ],
    targetAudience: [
      "Staf Khusus Menteri & Dewan Pertimbangan Presiden",
      "Sekretaris Daerah & Tim Ahli Gubernur/Bupati",
      "Komite Penasihat Kebijakan Publik",
      "Asosiasi Industri & Kamar Dagang (KADIN/APINDO)",
    ],
  },
  {
    slug: "jasa-penerbitan-pengelolaan-jurnal-ilmiah",
    title: "Jasa Penerbitan & Pengelolaan Jurnal Ilmiah",
    shortDesc: "Tata kelola Open Journal Systems (OJS), pendampingan akreditasi SINTA, dan pengindeksan internasional.",
    category: "Akademik & Jurnal Ilmiah",
    summary:
      "Dukungan profesional bagi universitas, pusat studi, dan lembaga riset dalam mengelola penerbitan berkala ilmiah. Mulai dari instalasi & kustomisasi platform OJS 3, pendampingan proses peer-review yang akuntabel, pengurusan DOI Crossref, hingga persiapan evaluasi akreditasi SINTA dan indeksasi global.",
    features: [
      "Setup, pemeliharaan server, dan kustomisasi antarmuka Open Journal Systems (OJS 3)",
      "Penerbitan nomor identifikasi digital DOI (Digital Object Identifier) resmi Crossref",
      "Review format naskah (layouting PDF, XML, HTML) sesuai standar akreditasi ARJUNA",
      "Pemeriksaan kemiripan naskah (plagiarisme) berlisensi resmi Turnitin / iThenticate",
    ],
    deliverables: [
      "Sistem Jurnal OJS 3 aktif dengan domain kustom institusi",
      "Nomor DOI aktif pada setiap artikel yang diterbitkan",
      "Laporan kesiapan akreditasi SINTA (Self-Assessment ARJUNA)",
      "Buku panduan editorial board, reviewer, dan petunjuk penulisan (Author Guidelines)",
    ],
    workflow: [
      { step: "Tahap 1: Audit & Setup OJS", desc: "Pemeriksaan tata kelola jurnal saat ini dan pembaruan sistem OJS terkini." },
      { step: "Tahap 2: Standarisasi Kebijakan Editorial", desc: "Penetapan etika publikasi, pedoman peer-review, dan petunjuk penulisan." },
      { step: "Tahap 3: Produksi Terbitan Berkala", desc: "Layouting naskah, pengecekan plagiasi, integrasi DOI, dan publikasi online." },
      { step: "Tahap 4: Pendampingan Akreditasi SINTA", desc: "Pemenuhan instrumen borang akreditasi Kemendiktisaintek hingga terakreditasi." },
    ],
    targetAudience: [
      "Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM)",
      "Program Studi & Fakultas di Perguruan Tinggi",
      "Pusat Riset Lembaga Pemerintah (BRIN/Balitbang)",
      "Asosiasi Profesi & Komunitas Ilmuwan",
    ],
  },
];
