import React, { useState, useEffect, useRef } from 'react';;
import profileImg from '../assets/salwa.png';
import SmartCityImg from '../assets/BahariGo.png';
import Invofest2025 from '../assets/Invofest2025.png';
import HMPTI from '../assets/HMPTI.png';
import PPM from '../assets/PPM.png';
import Artikel from '../assets/Artikel.png';
import AI from '../assets/AI.png';
import WEBPPM from '../assets/WEBPPM.png';
import CAPSTONE from '../assets/CAPSTONE.png';
import Sertif from '../assets/Sertif.png';
import HydroApp from '../assets/HydroApp.png';
import { TypeAnimation } from 'react-type-animation';
import {
  FaLaptopCode, FaGithub, FaLinkedinIn, FaInstagram, FaTiktok, FaServer,
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaLaravel, FaFigma, FaUniversity, FaJava, FaPhp
} from 'react-icons/fa';
import { MdStyle, MdPalette } from 'react-icons/md';
import { SiTailwindcss, SiCoreldraw, SiCanva, SiTypescript, SiFlutter, SiBootstrap, } from 'react-icons/si';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  useInView
} from 'framer-motion';

const Counter = ({ from, to, duration = 2 }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);

  const inView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (inView) {
      count.set(from);
      const controls = animate(count, to, { duration: duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, from, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const LandingPage = () => {
  const highlights = [
    {
      icon: <MdStyle size={70} />,
      title: 'UI/UX Design',
      desc: 'Designing visually stunning interfaces and intuitive user experiences.'
    },
    {
      icon: <FaLaptopCode size={70} />,
      title: 'Frontend Development',
      desc: 'Building interactive and responsive websites using modern technologies.'
    },
    {
      icon: <FaServer size={70} />,
      title: 'Backend Development',
      desc: 'Developing robust systems and scalable servers to power applications.'
    },
    {
      icon: <MdPalette size={70} />,
      title: 'Graphic Design',
      desc: 'Crafting compelling visual designs and high-quality multimedia content.'
    }
  ];

  const experiences = [
    {
      organization: "Informatics Engineering Student Association",
      division: "Kominfo Division",
      roles: [
        {
          title: "Coordinator of Kominfo",
          period: "2025 - 2026",
          desc: "Spearheading creative content strategies aligned with organizational goals and audience trends. Overseeing digital workflows, maintaining brand consistency across platforms, and managing high-impact documentation to drive audience engagement."
        },
        {
          title: "Staff of Kominfo",
          period: "2024 - 2025",
          desc: "Contributed to creative content development by producing high-quality graphic designs using Canva and professional video editing via CapCut. Handled routine digital publishing and event documentation to strengthen organizational branding."
        }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState('Projects');
  const portfolioData = {
    Projects: [
      {

        title: "Web-Based Traffic Sign Detection - YOLOv8n",
        desc: "A web application for real-time traffic sign recognition using the YOLOv8n model. Optimized for speed and efficiency, it utilizes a Flask backend to deliver fast and accurate object detection.",
        image: AI,
        tech: ["Python", "Flask", "YOLOv8n", "JavaScript", "HTML"],
        link: "https://github.com/salwaekaafianii/DeteksiRambuLaluLintas-AI.git"

      },
      {
        title: "Community Service Project: Mas Bro Resto & Cafe Web Profile",
        desc: "A community service initiative aimed at digitizing local culinary SMEs. This project involved developing a professional web profile to optimize digital promotion, centralize business information, and strengthen brand credibility.",
        image: WEBPPM,
        tech: ["PHP", "Laravel", "Tailwind CSS", "JavaScript", "MySQL"],
        link: "https://github.com/salwaekaafianii/ppmmasbro.git"
      },
      {
        title: "Teman Tukang: Backend & Admin Dashboard",
        desc: "A collaborative Capstone project where I served as the Backend & Web Admin Developer. I developed a Flask-based system featuring automated building damage detection, handyman recommendation, and an integrated order management system for local services.",
        image: CAPSTONE,
        tech: ["Python", "Flask", "MySQL", "HTML", "Bootstrap"],
        link: "https://github.com/salwaekaafianii/capstone.git"
      },
      {
        title: "Hydro Reminder - Java Desktop App",
        desc: "A Java-based desktop application designed to help users track their daily water intake. It features a secure login system, real-time hydration monitoring, and persistent data storage integrated with a MySQL database via JDBC.",
        image: HydroApp,
        tech: ["Java", "NetBeans IDE", "MySQL", "JDBC", "Java Swing"],
        link: "https://github.com/salwaekaafianii/HydroReminder-PEMKOM2.git"
      }
    ],
    Designs: [
      {
        title: "UI/UX Design: Smart City Kota Tegal",
        desc: "An integrated digital solution designed to enhance public services and information transparency for the citizens of Tegal. COMPETITION ENTRY: TECHNODAY UNNES 2025",
        image: SmartCityImg,
        tech: ["Figma", "Canva", "CapCut"],
        link: "https://www.figma.com/design/hrwDxbeOyhykOxJTrSuSIl/BahariGo?node-id=0-1&p=f",
      },
      {
        title: "Visual Branding & Promotion Kit: INVOFEST 2025",
        desc: "Designing comprehensive promotional assets including digital publication pamphlets, X-Banners, and event merchandise for a national-scale IT festival.  INVOFEST 2025",
        image: Invofest2025,
        tech: ["Canva"],
        link: "#",
      },
      {
        title: "Comprehensive Visual Identity: HIMAPRODI TI",
        desc: "Executing a complete visual identity system over two terms, including organizational structures, publication media, ID cards, and physical attributes such as Lanyards.  ORGANIZATIONAL PROJECT: HIMAPRODI TI 2024–2026",
        image: HMPTI,
        tech: ["Canva"],
        link: "#"
      }
    ],
    Publications: [
      {
        title: "Digital Promotion Strategy for MSMEs through Profile Websites : GWS TECH SOLUTION",
        desc: "A published community service research analyzing digital promotion strategies for MSMEs through profile website development to optimize branding in the digital era. PPM PROJECT · DEC 12, 2025",
        image: PPM,
        tech: ["Journal"],
        link: "https://ejournal.gws-tech.id/index.php/jacs/article/view/66"
      },
      {
        title: "The Role of Social Media in Enhancing Political Awareness Among Youth: Kompasiana",
        desc: "A published analytical article exploring the strategic role of social media platforms in increasing political awareness and active participation among the younger generation. ACADEMIC ARTICLE · JUN 21, 2024",
        image: Artikel,
        tech: ["Article"],
        link: "https://www.kompasiana.com/salwaekaafiani0551"
      }
    ],
    Certifications: [
      {
        title: "Level II KKNI Multimedia Competency : BNSP",
        desc: "Level II KKNI Multimedia Competency, providing official recognition of technical expertise in visual asset production and digital media standards. BNSP CERTIFICATION · FEB 2023 – 2026",
        image: Sertif,
        tech: ["BNSP"],
        link: "#"
      }]
  };
  return (
    <>
      <section className="py-6 md:py-19 flex items-center justify-center bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto  w-full px-8 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-rose-400 opacity-20 rounded-full blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-50 right-25 w-48 h-48 bg-rose-500 opacity-30 rounded-full blur-3xl"
            animate={{ x: [0, -35, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="md:w-1/2 text-left md:ml-10 lg:ml-20 relative z-10 mt-10 md:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1
              className="text-2xl sm:text-3xl md:text-4xl text-stone-800 mb-4 relative inline-block"
              style={{ fontFamily: 'satoshi-black' }}
            >
              <span className="absolute inset-0 bg-rose-400 opacity-20 blur-xl rounded-lg"></span>
              <span className="relative">Hi, I'm Salwa Eka Afiani</span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-stone-800 mb-3" style={{ fontFamily: 'satoshi-medium' }}>
              Aspiring
              <span className="ml-2 inline">
                <TypeAnimation
                  sequence={[
                    'Web Developer', 2000,
                    'UI/UX Designer', 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-rose-400 font-bold"
                />
              </span>
            </p>

            <p className="mt-2 text-base text-stone-700 italic" style={{ fontFamily: 'satoshi-medium' }}>
              Bringing potential to life through immersive digital experiences.
            </p>

            <a
              href="#portfolio"
              className="mt-4 inline-block text-rose-400 tracking-wide transition-all cursor-pointer outline-none focus:outline-none decoration-2 underline-offset-4"
              style={{ fontFamily: 'satoshi-bold' }}
            >
              View My Portfolio →
            </a>
            <div className="flex gap-4 mt-4 justify-start">
              <a href="https://github.com/salwaekaafianii" target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:text-rose-400 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/salwa-eka-afiani-24479129a/" target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:text-rose-400 transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://www.instagram.com/salwaekaaf/" target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:text-rose-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@seaailin" target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:text-rose-400 transition-colors">
                <FaTiktok size={20} />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center mt-20 md:mt-0 relative z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <div className="absolute top-10 w-20 h-20 bg-rose-600 blur-3xl opacity-80 rounded-lg scale-100 -translate-x-4"></div>
              <img
                src={profileImg}
                alt="salwa"

                className="relative w-57 md:w-66 h-auto object-cover drop-shadow-[5px_5px_5px_rgba(128,128,128,0.5)] rounded-lg md:ml-8"
              />
            </div>

          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative overflow-hidden bg-white py-16 px-6 md:px-12 lg:px-20">
        <motion.div
          className="absolute top-40 left-10 w-60 h-60 bg-rose-400 opacity-30 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-50 right-10 w-52 h-52 bg-rose-400 opacity-30 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl mb-4 text-stone-800" style={{ fontFamily: 'satoshi-black' }}>
            About Me
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base mb-8" style={{ fontFamily: 'satoshi-medium' }}>
            An <strong>Informatics Engineering student at Universitas Harkat Negeri</strong> with a strong foundation in <strong>Multimedia since vocational high school (SMK)</strong>.
            By blending years of graphic design experience with technical expertise in <strong>Web Development</strong>,
            I craft immersive digital experiences that align with the evolving tech industry.</p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="/path-to-your-cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-rose-400 text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-rose-500 hover:shadow-lg transition-all"
            >
              Download CV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </motion.div>
        </div>
        <div className="flex justify-center items-center gap-8 md:gap-20 mb-20 relative z-10 px-4">
          {[
            { label: "Years of Experience", value: 2, suffix: "+" },
            { label: "Projects", value: 3, suffix: "+" },
            { label: "Creativity", value: 100, suffix: "%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3
                className="text-2xl md:text-3xl font-extrabold text-rose-500 tracking-tight flex justify-center items-center w-[60px] md:w-[80px]" // Tambahkan w-[...] dan flex
                style={{ fontFamily: 'satoshi-black' }}
              >
                <Counter from={0} to={stat.value} />{stat.suffix}
              </h3>
              <p className="text-stone-400 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] mt-1 text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 px-4">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-rose-100 border border-rose-300 p-4 rounded-lg text-center 
                 hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all"
            >
              <div className="text-black mb-2 flex justify-center transform scale-75">
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-md font-bold text-gray-800" style={{ fontFamily: 'satoshi-bold' }}>
                {item.title}
              </h3>

              <p className="text-zinc-600 mt-1 text-[11px] sm:text-xs leading-tight">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="h-15 w-full bg-white"></div>

        {/* ORGANIZATION EXPERIENCE */}
        <section className="py-16 px-6 md:px-20 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl md:text-4xl mb-12 text-stone-800 text-center"
              style={{ fontFamily: 'satoshi-black' }}>
              Organization Experience
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-rose-50/30 border border-rose-100 p-6 md:p-8 rounded-3xl relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center">
                  <FaUniversity size={30} className="text-stone-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-800">{experiences[0].organization}</h3>
                  <p className="text-rose-500 font-semibold text-sm">{experiences[0].division}</p>
                </div>
              </div>
              <div className="space-y-8 relative">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: '90%' }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute left-[9px] top-2 w-0.5 bg-rose-200"
                ></motion.div>
                {experiences[0].roles.map((role, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                    className="relative pl-10" >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.4 + (idx * 0.1) }}
                      className={`absolute left-0 top-1 w-5 h-5 rounded-full border-[3px] border-white shadow-sm z-10 ${idx === 0 ? 'bg-rose-500' : 'bg-rose-300'
                        }`}
                    ></motion.div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                      <h4 className={`font-bold leading-tight ${idx === 0 ? 'text-stone-800 text-base md:text-lg' : 'text-stone-600 text-sm md:text-md'}`}>
                        {role.title}
                      </h4>
                      <span className="w-fit text-[9px] font-bold uppercase tracking-widest text-rose-400 bg-white border border-rose-100 px-3 py-1 rounded-full shadow-sm">
                        {role.period}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                      {role.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </section>

      {/*TECH STACK*/}
      <section className="relative overflow-hidden bg-white py-16 px-6 md:px-12 lg:px-20 -mt-15">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-rose-500 rounded-full blur-[70px]" // Blur dikurangi dari 90px ke 60px biar warna lebih padat
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl mb-4 text-stone-800" style={{ fontFamily: 'satoshi-black' }}>
            Tech Stack
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-sm sm:text-base px-4" style={{ fontFamily: 'satoshi-medium' }}>
            A collection of tech stacks I am continuously developing to explore the full potential of web development and design.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-5 gap-3 relative z-10 px-4">
          {[
            { icon: <FaHtml5 />, name: "HTML" },
            { icon: <FaCss3Alt />, name: "CSS" },
            { icon: <FaJs />, name: "JavaScript" },
            { icon: <SiTypescript />, name: "TypeScript" },
            { icon: <FaReact />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind" },
            { icon: <SiBootstrap />, name: "Bootstrap" },
            { icon: <FaPython />, name: "Python" },
            { icon: <FaJava />, name: "Java" },
            {
              icon: (
                <div
                  className="w-14 h-14 bg-stone-600 group-hover:bg-rose-400 group-active:bg-rose-500 transition-all duration-300"
                  style={{
                    maskImage: 'url(https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg)',
                    WebkitMaskImage: 'url(https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg)',
                    maskRepeat: 'no-repeat',
                    maskSize: 'contain',
                    maskPosition: 'center'
                  }}
                />
              ),
              name: "Flask"
            },
            { icon: <FaLaravel />, name: "Laravel" },
            { icon: <FaPhp />, name: "PHP" },
            { icon: <SiFlutter />, name: "Flutter" },
            { icon: <FaFigma />, name: "Figma" },
            {
              icon: (
                <div
                  className="w-14 h-14 bg-stone-600 group-hover:bg-rose-400 transition-colors duration-300"
                  style={{
                    maskImage: 'url(https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg)',
                    WebkitMaskImage: 'url(https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg)',
                    maskRepeat: 'no-repeat',
                    maskSize: 'contain',
                    maskPosition: 'center'
                  }}
                />
              ),
              name: "Photoshop"
            },
            { icon: <SiCoreldraw />, name: "CorelDRAW" },
            { icon: <SiCanva />, name: "Canva" },
          ].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -7, scale: 1.05 }}
              className="flex flex-col items-center text-center p-3 md:p-4 bg-white/40 backdrop-blur-md border border-stone-100 rounded-2xl hover:border-rose-300 hover:shadow-xl transition-all group cursor-default"
            >
              <div className="text-stone-700 text-5xl group-hover:text-rose-400 transition-all duration-300 mb-2 flex items-center justify-center h-16">
                {tech.icon}
              </div>
              <p className="text-[9px] font-bold text-stone-500 group-hover:text-stone-900 uppercase tracking-[0.15em] transition-colors leading-none mt-1">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section id="portfolio" className="relative overflow-hidden py-20 px-6 md:px-20 bg-white">
        <motion.div
          className="absolute top-35 left-10 w-72 h-72 bg-rose-400 opacity-25 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-70 right-10 w-48 h-48 bg-rose-400 opacity-25 rounded-full blur-3xl"
          animate={{ x: [0, -35, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[66%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-rose-400 rounded-full blur-[70px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-stone-800" style={{ fontFamily: 'satoshi-black' }}>
              Portfolio Showcase
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-sm sm:text-base px-4" style={{ fontFamily: 'satoshi-medium' }}>
              Turning ideas into reality through a series of projects focused on user experience and technical excellence.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Projects', 'Designs', 'Publications', 'Certifications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all border ${activeTab === tab
                  ? 'bg-rose-400 text-white shadow-lg scale-105 border-rose-400'
                  : 'bg-white border-stone-200 text-stone-400 hover:border-rose-300 hover:text-rose-400'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="contents"
              >
                {portfolioData[activeTab] && portfolioData[activeTab].map((item, index) => (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    layout
                    initial={{ opacity: 0, scale: 0.85, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    viewport={{ amount: 0.2 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    className="bg-white/60 backdrop-blur-md rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all flex flex-col group"
                  >
                    <div className="aspect-video overflow-hidden bg-stone-100">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-stone-800 mb-2 leading-tight group-hover:text-rose-500 transition-colors">{item.title}</h3>
                      <p className="text-stone-500 text-[11px] leading-relaxed mb-4 flex-grow">{item.desc}</p>
                      <div className="flex flex-wrap gap-1.5 mb-5 relative z-10">
                        {item.tech.map((t, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-rose-50 border border-rose-100 text-rose-400">{t}</span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-stone-50">
                        {item.link && item.link !== "#" ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-stone-800 text-xs font-bold hover:text-rose-500 transition-all flex items-center gap-1 group/link"
                          >
                            Lihat Karya
                            <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                          </a>
                        ) : (
                          <div />
                        )}
                        {item.isCompetition && (
                          <motion.div
                            initial={{ opacity: 0, x: 5 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-1.5 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-md"
                          >
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500"></span>
                            </span>

                            <span className="text-[8px] font-black uppercase tracking-tight text-rose-500">
                              {item.badgeText || "Special"}
                            </span>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

    </>
  );
}

export default LandingPage;
