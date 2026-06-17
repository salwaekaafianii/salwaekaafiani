import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  FaGithub, FaLinkedinIn, FaInstagram, FaUniversity, FaArrowRight, FaDownload, FaCoffee, FaMoon
} from 'react-icons/fa';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import profileImg from '../assets/profil.jpg';
import SmartCityImg from '../assets/BahariGo.png';
import Invofest2025 from '../assets/Invofest2025.png';
import HMPTI from '../assets/HMPTI.png';
import PPM from '../assets/PPM.png';
import Artikel from '../assets/Artikel.png';
import AI from '../assets/AI.png';
import WEBPPM from '../assets/WEBPPM.png';
import CAPSTONE from '../assets/CAPSTONE.png';
import Sertif from '../assets/Sertif.png';
import KOTOBA from '../assets/KOTOBA.png';

// --- ANIMATION COUNTER ---
const Counter = ({ from, to, duration = 1.8 }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (inView) {
      count.set(from);
      const controls = animate(count, to, { duration: duration, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, count, from, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

// --- ANIMASI DI DALAM KOTAK TERMINAL FOTO ---
const CodeMatrixOverlay = () => {
  const snippets = [
    "const [user] = useState('Salwa');",
    "salwa.status = 'Coding...';",
    "import { SalwaUI } from 'salwa';",
    "git commit -m 'feat: profile'",
    "sys.compile_successful = true",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.12] font-mono text-[9px] text-stone-900 p-3 leading-none select-none z-10">
      {snippets.map((text, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
          animate={{
            opacity: [0.4, 0.9, 0.4],
            x: i % 2 === 0 ? [0, 10, 0] : [0, -10, 0]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
          className="my-1.5 whitespace-nowrap tracking-tight font-bold"
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};

// --- BAR MASKOT ROBOT CHIBI IMUT - FLAT CLEAN ---
const FixedBottomRobotMonitor = ({ themeColor }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-stone-900/95 backdrop-blur-md border-t border-stone-800/40 shadow-none px-4 py-2">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">

        <div className="flex items-center gap-2.5 font-mono text-[11px] text-stone-300">
          <div className="flex gap-1 bg-stone-950 p-1.5 rounded-lg border border-stone-800/50">
            <motion.span animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
              <FaCoffee className="text-amber-500" size={12} />
            </motion.span>
            <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}>
              <FaMoon className="text-indigo-400" size={12} />
            </motion.span>
          </div>
          <div className="leading-tight">
            <span className="text-stone-500 text-[9px] block font-bold tracking-wider">SYS_NOTE:</span>
            <span className="text-stone-200">Jangan begadang terus, <strong style={{ color: themeColor }}>rehat dulu</strong> ya!</span>
          </div>
        </div>

        <div className="w-full md:w-48 h-8 bg-stone-950/40 rounded-lg relative overflow-hidden border border-stone-800/40 flex items-center">
          <motion.div
            animate={{ x: [-35, 165] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="flex items-center gap-1 absolute left-0"
          >
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.circle cx="16" cy="5" r="2" fill={themeColor} animate={{ y: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.5 }} />
              <line x1="16" y1="5" x2="16" y2="9" stroke={themeColor} strokeWidth="1.5" />
              <motion.rect x="7" y="9" width="18" height="13" rx="6" fill="#f5f5f4" stroke="#e7e5e4" strokeWidth="0.5" animate={{ y: [0, 0.5, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} />
              <motion.circle cx="12" cy="15" r="2" fill={themeColor} animate={{ scaleY: [1, 0.1, 1] }} transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 2 }} />
              <motion.circle cx="20" cy="15" r="2" fill={themeColor} animate={{ scaleY: [1, 0.1, 1] }} transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 2 }} />
              <circle cx="9" cy="17" r="1" fill="#f43f5e" opacity="0.6" />
              <circle cx="23" cy="17" r="1" fill="#f43f5e" opacity="0.6" />
              <rect x="10" y="22" width="12" height="5" rx="2" fill="#e7e5e4" />
              <motion.ellipse cx="13" cy="28" rx="1.5" ry="1" fill="#a8a29e" animate={{ ry: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 0.2 }} />
              <motion.ellipse cx="19" cy="28" rx="1.5" ry="1" fill="#a8a29e" animate={{ ry: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 0.2 }} />
            </svg>
            <span className="text-[8px] font-mono text-stone-400 bg-stone-900 px-1 py-0.5 rounded border border-stone-800/80 tracking-tighter whitespace-nowrap">
              hello u! •ᴗ•
            </span>
          </motion.div>
        </div>

        <div className="hidden lg:flex flex-col items-end font-mono text-[9px] text-stone-500">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>READY_TO_COLLABORATE</span>
          </div>
        </div>

      </div>
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const LandingPage = () => {
  const [accentTheme, setAccentTheme] = useState('rose');
  const [activeTab, setActiveTab] = useState('Proyek');

  const themeClasses = {
    rose: { hex: '#e11d48', text: 'text-rose-600', border: 'hover:border-rose-300', bg: 'bg-rose-600', fill: 'from-rose-600 via-rose-50 to-amber-500', badge: 'bg-rose-50/60 text-rose-700 border-rose-100/80', shadow: 'shadow-rose-500/10' },
    violet: { hex: '#7c3aed', text: 'text-violet-600', border: 'hover:border-violet-300', bg: 'bg-violet-600', fill: 'from-violet-600 via-purple-50 to-pink-500', badge: 'bg-violet-50/60 text-violet-700 border-violet-100/80', shadow: 'shadow-violet-500/10' },
    emerald: { hex: '#059669', text: 'text-emerald-600', border: 'hover:border-emerald-300', bg: 'bg-emerald-600', fill: 'from-emerald-600 via-emerald-50 to-cyan-500', badge: 'bg-emerald-50/60 text-emerald-700 border-emerald-100/80', shadow: 'shadow-emerald-500/10' }
  };

  const current = themeClasses[accentTheme];

  const portfolioData = {
    Proyek: [
      { title: "Deteksi Rambu Lalu Lintas - YOLOv8n", desc: "Aplikasi web yang dapat mendeteksi dan mengenali rambu lalu lintas secara langsung (real-time).", image: AI, tech: ["Python", "Flask", "YOLOv8n"], link: "https://github.com/salwaekaafianii/DeteksiRambuLaluLintas-AI.git" },
      { title: "Web Company Profil Mas Bro Resto & Cafe", desc: "Website profil untuk membantu digitalisasi UMKM. Berfungsi untuk memperluas jangkauan promosi digital, menyatukan informasi bisnis, dan membuat usaha terlihat lebih terpercaya.", image: WEBPPM, tech: ["PHP", "Laravel", "MySQL"], link: "https://github.com/adambyt3/restocafe-masbro.git" },
      { title: "Teman Tukang: Backend & Dasbor Admin", desc: "Proyek kolaborasi sistem pemesanan jasa tukang. Berperan mengembangkan sistem bagian belakang (backend) dan halaman admin.", image: CAPSTONE, tech: ["Python", "Flask", "MySQL", "MobilNetV2"], link: "https://github.com/adambyt3/web-teman-tukang.git" },
      { title: "Kotoba: Aplikasi Pembelajaran Bahasa Jepang Interaktif", desc: "Proyek kolaborasi Capstone berupa aplikasi belajar bahasa Jepang interaktif. Pengguna bisa mengenal kosakata lewat kamera (deteksi objek), berlatih menulis huruf di kanvas digital, serta melatih pelafalan menggunakan fitur pengenalan suara.", image: KOTOBA, tech: ["Flutter", "MongoDB", "React.js", "Express.js", "YOLOv8"], link: "https://github.com/Interactive-Japanese-Learning-App" },],
    Desain: [
      { title: "UI/UX: Smart City Tegal (BahariGo)", desc: "Membuat rancangan desain aplikasi digital terintegrasi untuk mempermudah layanan publik dan informasi bagi warga Kota Tegal. Karya ini diajukan untuk Kompetisi Technoday UNNES 2025.", image: SmartCityImg, tech: ["Figma"], link: "https://www.figma.com/design/hrwDxbeOyhykOxJTrSuSIl/BahariGo?node-id=0-1&p=f" },
      { title: "Visual Kit: INVOFEST 2025", desc: "Membuat aset promosi lengkap untuk festival IT tingkat nasional, mulai dari pamflet digital untuk media sosial, banner cetak, hingga desain merchandise acara.", image: Invofest2025, tech: ["Canva", "Creative Direction"], link: "#" },
      { title: "Identitas Visual: HIMAPRODI TI", desc: "Membuat dan menyusun identitas visual organisasi selama dua periode kepengurusan, termasuk desain media publikasi berkala, kartu identitas (ID Card), dan lanyard.", image: HMPTI, tech: ["Branding", "Canva"], link: "#" }
    ],
    Publikasi: [
      { title: "Strategi Promosi Digital UMKM Produk Lokal", desc: "Publikasi ilmiah hasil proyek pengabdian masyarakat yang menganalisis efektivitas penggunaan website profil dalam memperkuat branding usaha kecil di era digital.", image: PPM, tech: ["Jurnal", "Riset"], link: "https://ejournal.gws-tech.id/index.php/jacs/article/view/66" },
      { title: "Media Sosial & Kesadaran Politik Gen-Z", desc: "Publikasi artikel analisis mengenai bagaimana platform media sosial menjadi sarana strategis dalam membangun edukasi dan kesadaran politik bagi generasi muda.", image: Artikel, tech: ["Kompasiana", "Artikel"], link: "https://www.kompasiana.com/salwaekaafiani0551" }
    ],
    Sertifikasi: [
      { title: "Sertifikasi Multimedia KKNI Level II", desc: "Sertifikasi resmi berskala nasional dari BNSP yang memvalidasi keahlian dan standarisasi dalam pembuatan aset digital kreatif serta multimedia.", image: Sertif, tech: ["BNSP", "Multimedia"], link: "#" }
    ]
  };

  return (
    // 1. Ubah bg-stone-50 jadi bg-white
    <div className="min-h-screen bg-white relative overflow-x-hidden [background-image:linear-gradient(to_right,#f5f5f4_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f4_1px,transparent_1px)] [background-size:40px_40px]">
      {/* BACKGROUND GRADIENT LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* 2. Kamu bisa hapus div ini jika ingin benar-benar putih bersih */}
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-rose-100/30 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[500px] h-[400px] bg-indigo-100/30 rounded-full blur-[120px]" />

        {/* 3. Efek Grain/Noise - ubah opacity-0 biar hilang */}
        <div className="absolute inset-0 opacity-0"></div>
      </div>

      {/* MAIN CONTAINER (Tambahkan relative z-10) */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 space-y-17 relative z-10"
      >

        {/* ================= HERO & PROFILE LAYER ================= */}
        <div id="tentang" className="grid grid-cols-1 lg:grid-cols-12 gap-6 scroll-mt-24">

          {/* HERO BANNER */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-8 bg-white border border-stone-200/50 p-6 sm:p-8 rounded-3xl flex flex-col justify-center min-h-[360px] transition-all hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)]">
            <div className="space-y-4">
              <div>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${current.badge} tracking-wide`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${current.bg} animate-pulse`} />
                  Mahasiswa Teknik Informatika
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-950 leading-tight">
                Hai, Saya <br />
                <span className="text-rose-500 pb-1 block">
                  Salwa Eka Afiani
                </span>
              </h1>

              <div className="text-lg sm:text-xl text-stone-800 font-semibold">
                Fokus Pengembangan{' '}
                <span className={`${current.text} font-bold underline decoration-2 decoration-stone-100 underline-offset-4`}>
                  <TypeAnimation
                    sequence={['Web Development', 2500]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </div>

              <p className="text-stone-500 text-sm leading-relaxed max-w-xl font-normal">
                Saya membangun antarmuka yang bersih, intuitif, dan berfokus pada pengalaman pengguna yang nyaman serta modern.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-stone-100 mt-8">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-5 py-3 bg-stone-950 hover:bg-stone-800 text-white font-medium rounded-xl text-xs tracking-wider flex items-center gap-2 transition-all shadow-sm ${current.shadow}`}
              >
                JELAJAHI PORTOFOLIO
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                  <FaArrowRight className="text-[9px]" />
                </motion.div>
              </motion.a>

              <div className="flex items-center gap-2">
                {[
                  { icon: <FaGithub size={17} />, url: "https://github.com/salwaekaafianii" },
                  { icon: <FaLinkedinIn size={17} />, url: "https://www.linkedin.com" },
                  { icon: <FaInstagram size={17} />, url: "https://www.instagram.com/salwaekaaf/" }
                ].map((soc, i) => (
                  <motion.a
                    key={i} href={soc.url} target="_blank" rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-stone-50 border border-stone-200/40 text-stone-500 hover:text-stone-950 hover:bg-white hover:shadow-sm transition-all"
                  >
                    {soc.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SIDE PROFILE BOX - TERMINAL CARD */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-4 bg-white border border-stone-200/50 p-6 rounded-3xl flex flex-col justify-between transition-all hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)]"
          >
            {/* Foto dengan warna asli */}
            <div className="w-full bg-stone-100 rounded-2xl border border-stone-200 shadow-sm overflow-hidden mb-6 relative">
              <div className="relative p-6 flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  // Ubah w-32 h-32 jadi w-full dan hapus h-32 agar tingginya menyesuaikan foto
                  className="w-full rounded-2xl overflow-hidden border-4 border-white shadow-xl z-20"
                >
                  <img
                    src={profileImg}
                    alt="Salwa Eka"
                    // object-cover (potong agar penuh) ganti jadi object-contain (menampilkan seluruh foto)
                    className="w-full h-auto object-contain transition-all duration-700"
                  />
                </motion.div>
              </div>
            </div>

            {/* Keterangan & Minat dalam kalimat */}
            <div className="space-y-4 flex-grow">
              <h3 className="text-[10px] font-bold text-stone-400 tracking-[0.2em] uppercase">Tentang Saya</h3>
              <p className="text-stone-600 text-sm leading-relaxed text-justify">
                Mahasiswa D4 Teknik Informatika di Universitas Harkat Negeri dengan latar belakang SMK Multimedia. Saya berfokus pada pengembangan antarmuka pengguna, pembuatan website, serta pengembangan aplikasi mobile yang mengutamakan kenyamanan pengguna.
              </p>
            </div>

            {/* Tombol */}
            <motion.a
              href="https://drive.google.com/file/d/14jZDkURDTA9cfLoHYbDyeo0pABEASezA/view?usp=sharing"
              whileTap={{ scale: 0.99 }}
              className="w-full text-center flex items-center justify-center gap-2 mt-6 py-3 bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-200/60 rounded-xl font-medium text-xs tracking-wider transition-all"
            >
              <FaDownload className="text-[10px]" /> Unduh Curriculum Vitae
            </motion.a>
          </motion.div>

        </div>

        {/* ================= STATS & ANIMATED TECH STACK (KEAHLIAN) ================= */}
        <motion.div
          id="keahlian"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 scroll-mt-24 w-full"
        >
          {/* STATS BAR: Full width, pepet kanan kiri */}
          {/* STATS BAR: Responsive untuk Mobile & Desktop */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-12 flex justify-center w-full px-4"
          >
            <div className="bg-stone-900 px-6 sm:px-12 md:px-24 py-8 rounded-3xl grid grid-cols-3 gap-4 sm:gap-12 md:gap-20 shadow-xl w-full max-w-4xl">
              {[
                { label: "Pengalaman", value: 2, suffix: "thn+" },
                { label: "Projek", value: 3, suffix: "proj+" },
                { label: "Kreativitas", value: 100, suffix: "%" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <span className="text-[8px] sm:text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-1 sm:mb-2">
                    {stat.label}
                  </span>
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                      <Counter from={0} to={stat.value} />
                    </span>
                    <span className={`text-[10px] sm:text-xs font-bold ${current.text.replace('text-', 'text-')}`}>
                      {stat.suffix}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          {/* SKILLS GRID: Mengikuti lebar yang sama */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Frontend", items: ["HTML", "CSS", "JS", "TS", "React.js", "Tailwind", "Flutter"] },
              { title: "Backend", items: ["Python", "Node.js", "Express.js", "PHP", "Laravel", "MySQL"] },
              { title: "Creative Studio", items: ["Figma UI/UX", "CorelDRAW", "Canva Pro", "Photoshop"] }
            ].map((group, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                // 1. Ubah p-8 menjadi p-6 agar lebih padat
                className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-stone-200"
              >
                <div className="flex items-center gap-4 mb-4"> {/* 2. mb-6 jadi mb-4 */}
                  <div className={`w-1.5 h-6 rounded-full ${current.bg}`} /> {/* 3. h-8 jadi h-6 */}
                  <h4 className="text-sm font-bold text-stone-950 uppercase tracking-[0.2em]">{group.title}</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((t, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.1, rotate: [0, -1, 1, 0] }}
                      // 4. px-4 py-2 jadi px-3 py-1.5 agar lebih ringkas
                      className="px-3 py-1.5 bg-stone-50 hover:bg-stone-100 text-stone-700 rounded-lg text-[11px] font-semibold cursor-pointer border border-stone-200/60 transition-colors"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* ================= ORGANIZATIONAL TIMELINE ================= */}
        <motion.div variants={itemVariants} className="bg-white border border-stone-200/50 p-6 sm:p-8 rounded-3xl space-y-6 mb-2">
          <h2 className="text-xl font-bold text-stone-950 tracking-tight">Pengalaman Organisasi</h2>
          <div className="border-t border-stone-100 pt-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 bg-stone-50 rounded-xl ${current.text} border border-stone-100 shadow-sm`}>
                <FaUniversity size={16} />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-950 leading-tight">Himpunan Mahasiswa Program Studi Teknik Informatika</h3>
                <p className="text-xs text-stone-400 font-semibold mt-0.5">Divisi Kominfo</p>
              </div>
            </div>

            <div className="relative pl-5 space-y-6 border-l border-stone-200/60 ml-4">
              {[
                { title: "Koordinator Kominfo", period: "2025 - 2026", desc: "Memimpin penyusunan strategi konten kreatif yang selaras dengan tujuan organisasi dan tren terkini. Bertanggung jawab dalam mengawasi alur kerja digital, menjaga konsistensi identitas visual (branding) di berbagai platform, serta mengelola dokumentasi strategis untuk meningkatkan keterlibatan audiens secara signifikan." },
                { title: "Staf Divisi Kominfo", period: "2024 - 2025", desc: "Berkontribusi aktif dalam pengembangan konten kreatif melalui perancangan desain grafis berkualitas tinggi menggunakan Canva dan penyuntingan video profesional dengan CapCut. Mengelola publikasi digital harian serta melakukan dokumentasi kegiatan untuk memperkuat citra dan eksistensi organisasi." }
              ].map((role, idx) => (
                <div key={idx} className="relative pl-4 space-y-1">
                  {/* ANIMASI BULATAN */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.3, duration: 0.5 }}
                    className={`absolute -left-[24px] top-1.5 w-2 h-2 rounded-full ring-4 ring-white ${idx === 0 ? current.bg : 'bg-stone-300'}`}
                  />

                  <div className="flex items-center gap-3">
                    <h4 className="font-bold text-sm text-stone-800">{role.title}</h4>
                    <span className="text-[11px] font-medium text-stone-400">{role.period}</span>
                  </div>
                  <p className="text-stone-500 text-xs leading-relaxed text-justify max-w-4xl">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= GALLERY PORTFOLIO SECTION ================= */}
        <motion.div id="portfolio" variants={itemVariants} className="space-y-8 pt-12 scroll-mt-24">

          {/* HEADER & FILTER TAB */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 border-b border-stone-200/50 pb-6">
            <div>
              <h2 className="text-2xl font-bold text-stone-950 tracking-tight">Galeri Portofolio</h2>
              <p className="text-sm text-stone-500 mt-1">Kumpulan karya dan proyek kreatif saya</p>
            </div>

            <div className="flex flex-wrap gap-1 bg-stone-100/80 p-1 rounded-xl border border-stone-200/40 w-fit">
              {['Proyek', 'Desain', 'Publikasi', 'Sertifikasi'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 relative"
                >
                  <span className={`relative z-10 transition-colors duration-200 ${activeTab === tab ? 'text-stone-950' : 'text-stone-600'}`}>
                    {tab}
                  </span>
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-white rounded-lg shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* GRID PORTFOLIO */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="contents"
              >
                {portfolioData[activeTab]?.map((item, index) => (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    layout
                    whileHover={{ y: -6 }}
                    className="bg-white border border-stone-200/50 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)]"
                  >
                    {/* IMAGE CONTAINER */}
                    <div className="aspect-[16/10] w-full overflow-hidden bg-stone-100 relative">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="space-y-2 mb-6">
                        <h3 className="text-sm font-bold text-stone-950 leading-snug group-hover:text-rose-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-stone-500 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      {/* TECH STACK & FOOTER */}
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {item.tech.map((t, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-bold bg-stone-100 text-stone-600 border border-stone-200/50">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="pt-3 border-t border-stone-100">
                          {item.link && item.link !== "#" ? (
                            <a href={item.link} target="_blank" rel="noreferrer" className="text-[11px] font-bold text-stone-950 flex items-center gap-1 hover:gap-2 transition-all">
                              Lihat Proyek →
                            </a>
                          ) : (
                            <span className="text-[10px] text-stone-400 italic font-medium">Arsip Internal</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </motion.main>

      {/* ================= STICKY FIXED MONITORS ================= */}
      <FixedBottomRobotMonitor themeColor={current.hex} />

    </div>
  );
};

export default LandingPage;