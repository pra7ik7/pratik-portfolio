import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  GraduationCap,
  Code,
  Cpu,
  Zap,
  Users,
  Sun,
  Moon,
  Briefcase,
  BrainCircuit,
  Settings,
  Network,
  Award,
  BookOpen,
  TrendingUp,
  CircuitBoard,
  ArrowRight,
  Menu,
  X,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import MyPhoto from './assets/me.jpg';

const skillCategories = [
  {
    title: "Modelling & Simulation",
    icon: <CircuitBoard className="w-6 h-6" />,
    skills: ["MATLAB/Simulink", "COMSOL Multiphysics", "Proteus"],
  },
  {
    title: "Programming",
    icon: <Code className="w-6 h-6" />,
    skills: ["Python", "MATLAB", "C/C++", "JavaScript"],
  },
  {
    title: "Power Systems & Electrical Design",
    icon: <Zap className="w-6 h-6" />,
    skills: ["DIgSILENT PowerFactory (coursework)", "AutoCAD"],
  },
  {
    title: "Data & Machine Learning",
    icon: <TrendingUp className="w-6 h-6" />,
    skills: ["NumPy", "Pandas", "scikit-learn", "statsmodels", "Matplotlib"],
  },
  {
    title: "Instrumentation & Embedded Systems",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["Arduino", "Sensor calibration", "Serial data acquisition"],
  },
  {
    title: "Other",
    icon: <Settings className="w-6 h-6" />,
    skills: ["LaTeX", "Git", "Bluebeam Revu", "PCB design"],
  },
];

const researchInterests = [
  "Renewable energy integration",
  "Power system modeling and dynamics",
  "Distribution systems",
  "Power system monitoring",
  "Data-driven grid modernization",
];

const honors = [
  "Ranked 3rd in the graduating Electrical Engineering cohort, Institute of Engineering, Tribhuvan University (84.72% aggregate).",
  "Merit-based undergraduate scholarship, Institute of Engineering — awarded on the national engineering entrance examination (approx. 10,000 candidates), with a separate IOE Scholarship Stipend for all eight semesters.",
];

const education = [
  {
    title: "Bachelor of Engineering (BE), Electrical Engineering",
    institution: "Institute of Engineering, Pulchowk Campus",
    subtitle: "Tribhuvan University, Lalitpur, Nepal",
    dates: "Apr 2022 – Aug 2026",
    details: [
      "Aggregate: 84.72% — Distinction (institutional scale; 80% distinction threshold).",
      "Final-year project: Digital Twin for Real-Time Monitoring and Short-Term Forecasting of a Grid-Connected Photovoltaic System; supervisor: Asst. Prof. Deependra Neupane.",
      "Coursework: Power System Analysis I & II, Power Electronics, Engineering Mathematics, Control Systems, Switchgear & Protection, Instrumentation I & II, Utilization of Electrical Energy.",
    ],
  },
  {
    title: "Higher Secondary (Grade 11–12), Science",
    institution: "SOS Hermann Gmeiner Secondary School Gandaki",
    subtitle: "GPA: 3.64 / 4.00",
    dates: "2019 – 2021",
    details: [],
  },
];

const researchExperience = [
  {
    title: "Digital Twin for Real-Time Monitoring & Short-Term Forecasting of a Grid-Connected PV System",
    institution: "Final-year project (four-member team), Department of Electrical Engineering, Pulchowk Campus; supervisor: Asst. Prof. Deependra Neupane",
    dates: "2025 – 2026",
    points: [
      "Built and parameterised a MATLAB/Simulink model of a 335 W grid-connected PV system and evaluated it against 41 paired measurements collected on site over two days, obtaining 34.76 W RMSE (24.1% nRMSE, r = 0.918) when driven by on-site irradiance against 114.23 W RMSE (r = 0.703) when driven by satellite-derived irradiance, quantifying the benefit of site-specific measurement.",
      "Designed and calibrated a low-cost Arduino/LDR irradiance sensor against a co-located smartphone-based reference (power-law fit, R² = 0.974, n = 21), and used it with temperature sensing to drive the model from live serial input, demonstrating continuous sensor-to-simulation operation.",
      "Developed a SARIMA(1,1,1)×(1,1,1)₂₄ pipeline for day-ahead irradiance and temperature forecasting (R² = 0.921 and 0.964) and propagated the forecasts through the model, predicting next-day PV energy within 0.5% of the value obtained under measured driving conditions.",
      "Analysed irradiance-dependent residuals, attributing low-irradiance underprediction to sensor floor limitations and high-irradiance overprediction to unmodelled thermal and loss effects, and documented both as targets for instrument and model refinement.",
      "Methods and tools: MATLAB, Simulink, Arduino, Python, SARIMA time-series modelling, sensor calibration.",
    ],
  },
  {
    title: "Deadbeat Predictive Current Control with SVPWM and LCL Filtering for Grid-Connected Voltage-Source Converters",
    institution: "Ongoing research study, Department of Electrical Engineering, Pulchowk Campus",
    dates: "2026 – Present",
    points: [
      "Studying deadbeat predictive current control with space-vector PWM for a three-phase grid-connected VSC: discrete-time dq-frame modelling, fixed-frequency 10 kHz modulation, and capacitor-current-feedback active damping of an LCL grid interface.",
      "Developing MATLAB/Simulink simulations of a 5 kW, 400 V, 50 Hz system comparing L and LCL filtering through resonance, harmonic-spectrum, and P–Q dynamic-response analyses; preliminary results indicate markedly lower current THD for the deadbeat-SVPWM with LCL active-damping configuration at matched average switching frequency.",
      "Examining LCL resonance, digital-delay effects on active damping, and controller de-tuning as practical limits on closed-loop stability; the study is currently being extended toward a revised control formulation.",
    ],
  },
];

const professionalExperience = [
  {
    title: "Electrical Engineer (Remote, MEP)",
    institution: "DeltaQ Engineering — US-based MEP engineering consultancy",
    dates: "May 2026 – Present",
    points: [
      "Perform electrical load calculations and system analysis for residential, multi-family, commercial, and industrial projects, documenting in accordance with applicable US codes and standards.",
      "Produce technical single-line diagrams, specifications, and coordination layouts in AutoCAD, and evaluate electrical equipment selections against project and code requirements.",
    ],
  },
];

const academicProjects = [
  {
    title: "Power Plant Design",
    dates: "2026",
    tag: "Academic",
    description: "Designed a 16 MW run-of-river hydropower plant end-to-end: site selection, hydrological analysis, turbine selection, generator/transformer specification, neutral grounding, station supply, diesel-generator backup, and battery-bank sizing.",
  },
  {
    title: "Transmission & Distribution System Design",
    dates: "2026",
    tag: "Academic",
    description: "Designed a 132 kV, double-circuit transmission line for a 108 MW, 220 km corridor including voltage-level selection, tower geometry, insulation design, and conductor evaluations.",
  },
  {
    title: "Industrial Power Distribution & Illumination",
    dates: "2025",
    tag: "Academic",
    description: "Designed the electrical distribution system for a multi-storey commercial building in AutoCAD — lighting/power-socket layouts, SDB/FDB/MDB sizing, cable selection, protective-device coordination, and 250 kVA transformer / 330 A MCCB selection.",
  },
  {
    title: "Smart Fertigation System",
    dates: "2023",
    tag: "Prototype",
    description: "Built an Arduino-based monitoring and control system (DHT-11, soil moisture sensors) automating irrigation with prototype fertilisation control.",
  },
];

const extras = [
  {
    title: "Teaching, Mentoring & Outreach",
    icon: <BookOpen className="w-5 h-5" />,
    content: [
      {
        heading: "BloomED — STEM Content Creator (Volunteer)",
        dates: "Jun 2021 – Jan 2022",
        text: "Produced simplified learning material explaining technical and scientific concepts for underprivileged students, developing science-communication and teaching skills.",
      },
    ],
  },
  {
    title: "Professional Development",
    icon: <Award className="w-5 h-5" />,
    content: [
      "Supervised Machine Learning: Regression and Classification — DeepLearning.AI / Stanford, Coursera",
      "Supervised Learning with scikit-learn and Intermediate Python — DataCamp",
      "AutoCAD Electrical Essentials — SourceCAD",
    ],
  },
  {
    title: "Languages",
    icon: <Users className="w-5 h-5" />,
    content: [
      "Nepali (native)",
      "English (professional working proficiency)",
      "Hindi (conversational)",
    ],
  },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Honors", href: "#honors" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const App = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
      if (saved === "dark" || saved === "light") return saved;
      if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    } catch (error) {
      // ignore localStorage errors
    }
    return "light";
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (theme === "dark") {
      html.classList.add("dark");
      body.classList.add("dark");
      html.setAttribute("data-theme", "dark");
    } else {
      html.classList.remove("dark");
      body.classList.remove("dark");
      html.setAttribute("data-theme", "light");
    }

    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      // ignore
    }
  }, [theme]);

  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
            Pratik Adhikari
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">{item.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              {theme === "dark" ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition hover:bg-slate-200 md:hidden dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="top" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Electrical Engineer
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl">
                Pratik Adhikari
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Electrical engineering graduate of IOE, Pulchowk Campus, working on renewable energy integration, power system modeling and dynamics, distribution systems, power system monitoring, and data-driven grid modernization.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" /> Lalitpur, Nepal</div>
                <div className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" /> IOE, Pulchowk Campus</div>
                <div className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-blue-600 dark:text-blue-400" /> DeltaQ Engineering (Remote, MEP)</div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:adhikaripratik2003@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                  <Mail className="h-4 w-4" /> Email Me
                </a>
                <a href="Pratik_Adhikari_CV.pdf" download="Pratik_Adhikari_CV.pdf" className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-medium text-blue-700 transition hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30">
                  <Download className="h-4 w-4" /> Download CV
                </a>
                <a href="https://www.linkedin.com/in/pratik-adhikari17/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href="https://github.com/pra7ik7" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="absolute inset-3 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-200 opacity-70 blur-2xl dark:from-blue-900/40 dark:to-indigo-900/40" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-900">
                <img src={MyPhoto} alt="Pratik Adhikari" className="h-[440px] w-full rounded-xl object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="border-y border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible.about ? "visible" : "hidden"}
              className="mb-10 text-center"
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Profile</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">About Me</h2>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isVisible.about ? "visible" : "hidden"}
                className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300"
              >
                <p>
                  I am an electrical engineer with a strong foundation in renewable-energy systems, power electronics, control systems, and simulation-driven analysis. I completed my BE in Electrical Engineering at IOE, Pulchowk Campus in August 2026 with an 84.72% aggregate, ranking 3rd in my graduating cohort, and I currently work as a remote MEP electrical engineer with DeltaQ Engineering.
                </p>
                <p>
                  Through research and project work, I have developed hands-on experience in MATLAB/Simulink modelling, PV system digital twins, low-cost instrumentation and sensor calibration, and time-series forecasting. I enjoy solving complex engineering problems through rigorous analysis, collaborative work, and evidence-based design.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {researchInterests.map((interest) => (
                    <span key={interest} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      {interest}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isVisible.about ? "visible" : "hidden"}
                className="grid gap-4 sm:grid-cols-2"
              >
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                  <div className="mb-3 inline-flex rounded-xl bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"><Cpu className="h-5 w-5" /></div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Research Focus</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Renewable energy integration, power system modeling and dynamics, and data-driven grid modernization.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                  <div className="mb-3 inline-flex rounded-xl bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"><Settings className="h-5 w-5" /></div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Technical Profile</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">MATLAB/Simulink, power electronics, instrumentation and sensor calibration, and control design.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                  <div className="mb-3 inline-flex rounded-xl bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"><Network className="h-5 w-5" /></div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Systems Thinking</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Distribution systems, grid-connected converters, power quality, and power system monitoring.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                  <div className="mb-3 inline-flex rounded-xl bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"><BrainCircuit className="h-5 w-5" /></div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Data-Driven mindset</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Time-series forecasting and machine learning applied to renewable generation and system operation.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible.education ? "visible" : "hidden"}
            className="mb-10 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Academic Background</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">Education</h2>
          </motion.div>

          <div className="space-y-6">
            {education.map((item) => (
              <motion.article
                key={item.title}
                variants={containerVariants}
                initial="hidden"
                animate={isVisible.education ? "visible" : "hidden"}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <GraduationCap className="h-4 w-4" />
                      <span className="text-sm font-semibold uppercase tracking-[0.15em]">Education</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-base font-medium text-slate-700 dark:text-slate-200">{item.institution}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.subtitle}</p>
                  </div>
                  <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">{item.dates}</span>
                </div>

                {item.details.length > 0 && (
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        <section id="honors" className="border-t border-slate-200 py-20 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible.honors ? "visible" : "hidden"}
              className="mb-10 text-center"
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Recognition</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">Honors & Awards</h2>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2">
              {honors.map((honor) => (
                <motion.div
                  key={honor}
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible.honors ? "visible" : "hidden"}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"><Award className="h-5 w-5" /></div>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{honor}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-y border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible.experience ? "visible" : "hidden"}
              className="mb-10 text-center"
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Experience</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">Research & Professional Experience</h2>
            </motion.div>

            <div className="space-y-8">
              {researchExperience.map((item) => (
                <motion.article
                  key={item.title}
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible.experience ? "visible" : "hidden"}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950"
                >
                  <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                        <BookOpen className="h-4 w-4" />
                        <span className="text-sm font-semibold uppercase tracking-[0.15em]">Research</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                      <p className="mt-2 text-base font-medium text-slate-700 dark:text-slate-200">{item.institution}</p>
                    </div>
                    <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">{item.dates}</span>
                  </div>

                  <ul className="space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}

              {professionalExperience.map((item) => (
                <motion.article
                  key={item.title}
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible.experience ? "visible" : "hidden"}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950"
                >
                  <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                        <Briefcase className="h-4 w-4" />
                        <span className="text-sm font-semibold uppercase tracking-[0.15em]">Professional</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                      <p className="mt-2 text-base font-medium text-slate-700 dark:text-slate-200">{item.institution}</p>
                    </div>
                    <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">{item.dates}</span>
                  </div>

                  <ul className="space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible.projects ? "visible" : "hidden"}
            className="mb-10 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Selected Work</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">Academic & Technical Projects</h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {academicProjects.map((item) => (
              <motion.article
                key={item.title}
                variants={containerVariants}
                initial="hidden"
                animate={isVisible.projects ? "visible" : "hidden"}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">{item.dates}</p>
                  </div>
                  <span className="inline-flex shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">{item.tag}</span>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="border-y border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible.skills ? "visible" : "hidden"}
              className="mb-10 text-center"
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Capabilities</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">Skills & Tools</h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible.skills ? "visible" : "hidden"}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="inline-flex rounded-xl bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">{category.icon}</div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="additional" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible.additional ? "visible" : "hidden"}
            className="mb-10 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Additional</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">Development & Engagement</h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {extras.map((section) => (
              <motion.div
                key={section.title}
                variants={containerVariants}
                initial="hidden"
                animate={isVisible.additional ? "visible" : "hidden"}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">{section.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{section.title}</h3>
                </div>

                <ul className="space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {section.content.map((item) => (
                    <li key={typeof item === 'string' ? item : item.heading}>
                      {typeof item === 'string' ? (
                        <span>{item}</span>
                      ) : (
                        <div>
                          <p className="font-medium text-slate-800 dark:text-slate-100">{item.heading}</p>
                          <p className="text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">{item.dates}</p>
                          <p className="mt-1">{item.text}</p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible.contact ? "visible" : "hidden"}
              className="mb-10 text-center"
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Contact</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">Get In Touch</h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible.contact ? "visible" : "hidden"}
              className="grid gap-6 lg:grid-cols-3"
            >
              <a href="mailto:adhikaripratik2003@gmail.com" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-950">
                <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"><Mail className="h-5 w-5" /></div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Email</p>
                <p className="mt-2 break-all text-base font-medium text-slate-800 dark:text-slate-200">adhikaripratik2003@gmail.com</p>
                <p className="mt-1 break-all text-sm text-slate-500 dark:text-slate-400">078bel069.pratik@pcampus.edu.np</p>
              </a>

              <a href="tel:+9779824163232" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-950">
                <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"><Phone className="h-5 w-5" /></div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Phone</p>
                <p className="mt-2 text-base font-medium text-slate-800 dark:text-slate-200">+977-9824163232</p>
              </a>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"><MapPin className="h-5 w-5" /></div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Location</p>
                <p className="mt-2 text-base font-medium text-slate-800 dark:text-slate-200">Lalitpur, Nepal</p>
              </div>
            </motion.div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="https://www.linkedin.com/in/pratik-adhikari17/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com/pra7ik7" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="#top" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
                Back to top <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-900 py-8 text-slate-300 dark:border-slate-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm sm:px-6 lg:flex-row lg:px-8">
          <p>&copy; {new Date().getFullYear()} Pratik Adhikari. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
