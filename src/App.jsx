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
    title: "Programming",
    icon: <Code className="w-6 h-6" />,
    skills: ["C/C++", "Python", "MATLAB scripting", "LaTeX", "Git"],
  },
  {
    title: "Modelling & Simulation",
    icon: <CircuitBoard className="w-6 h-6" />,
    skills: ["MATLAB", "Simulink", "COMSOL Multiphysics", "Proteus", "AutoCAD Electrical"],
  },
  {
    title: "Power Systems & Control",
    icon: <Zap className="w-6 h-6" />,
    skills: ["Power System Analysis", "Power Electronics", "Control Systems", "Grid-connected PV", "Switchgear & Protection"],
  },
  {
    title: "Data & Machine Learning",
    icon: <TrendingUp className="w-6 h-6" />,
    skills: ["NumPy", "Pandas", "scikit-learn", "statsmodels", "SARIMA", "Matplotlib"],
  },
  {
    title: "Instrumentation & Hardware",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["Arduino", "Sensor calibration", "Serial data acquisition", "Field measurements", "PCB design"],
  },
  {
    title: "Professional & Research",
    icon: <Users className="w-6 h-6" />,
    skills: ["Technical communication", "Project coordination", "Analytical thinking", "Problem solving", "Documentation"],
  },
];

const researchInterests = [
  "Renewable-energy integration",
  "Power-system monitoring",
  "Digital twins",
  "Data-driven forecasting",
  "Grid modernization",
  "Power electronics and control",
];

const education = [
  {
    title: "Bachelor of Engineering (BE), Electrical Engineering",
    institution: "Institute of Engineering, Pulchowk Campus",
    subtitle: "Tribhuvan University, Lalitpur, Nepal",
    dates: "Apr 2022 – Jul 2026",
    details: [
      "Aggregate: 84.72% — Distinction (institutional scale; 80%+ is the Distinction threshold).",
      "Undergraduate thesis: Digital Twin for Real-Time Monitoring and Short-Term Forecasting of a Grid-Connected Photovoltaic System; advisor: Faculty Supervisor.",
      "Selected coursework: Power System Analysis I & II, Power Electronics, Control Systems, Switchgear & Protection, Instrumentation I & II, Power Plant Equipment, Utilization of Electrical Energy, Engineering Mathematics I–IV, Computer Programming.",
    ],
  },
  {
    title: "Higher Secondary (Grade 11–12), Science",
    institution: "SOS Hermann Gmeiner School, Gandaki",
    subtitle: "GPA: 3.64 / 4.00",
    dates: "2019 – 2021",
    details: [],
  },
];

const researchExperience = [
  {
    title: "Deadbeat Predictive Current Control with SVPWM and LCL Filtering for Grid-Connected Voltage-Source Converters",
    institution: "Department of Electrical Engineering, Pulchowk Campus",
    dates: "2026",
    points: [
      "Developed and analyzed a deadbeat predictive current controller with space-vector PWM (SVPWM) for a three-phase grid-connected voltage-source converter, replacing single-vector FCS-MPC to achieve fixed 10 kHz switching operation.",
      "Derived the continuous- and discrete-time dq-frame converter model and implemented a detuned deadbeat control law with capacitor-current-feedback active damping for an LCL-filtered grid interface.",
      "Designed and evaluated a 5 kW, 400 V, 50 Hz grid-connected VSC in MATLAB/Simulink, including L/LCL filter comparison, resonance analysis, harmonic-spectrum evaluation, THD/TDD analysis, and P–Q dynamic response.",
      "Demonstrated reduction in broadband current THD from 12.8% with baseline FCS-MPC + L filtering to 3.9% with the proposed deadbeat-SVPWM + LCL active-damping configuration under matched 10 kHz average switching frequency.",
      "Investigated LCL resonance, digital-delay effects in capacitor-current active damping, and deadbeat-controller de-tuning as practical stability considerations in predictive current control.",
      "Methods and tools: MATLAB, Simulink, predictive control, dq-frame modeling, SVPWM, LCL filter design, active damping, harmonic analysis.",
    ],
  },
  {
    title: "Digital Twin for Real-Time Monitoring & Short-Term Forecasting of a Grid-Connected PV System",
    institution: "Undergraduate thesis, Department of Electrical Engineering, Pulchowk Campus",
    dates: "2025 – 2026",
    points: [
      "Developed a physics-based MATLAB/Simulink digital twin of a grid-connected PV system (335 W module, boost converter, P&O MPPT, single-phase inverter) and validated it against field measurements, achieving R² = 0.918 on measured DC power.",
      "Designed and calibrated a low-cost LDR-based pyranometer (R² = 0.974 against a reference instrument), reducing irradiance RMSE by roughly 3× relative to satellite-derived data for site-specific validation.",
      "Built a SARIMA(1, 1, 1)(1, 1, 1)24 pipeline for day-ahead irradiance and temperature forecasting (R² = 0.921 and 0.964), producing end-to-end power forecasts within 0.5% daily energy error.",
      "Coupled Arduino-based data acquisition to the Simulink model over serial communication, enabling live closed-loop digital-twin operation and real-time power prediction.",
      "Characterized asymmetric error behavior across irradiance bands, isolating low-irradiance bias as the dominant residual and identifying targeted sensor and model refinements.",
      "Methods and tools: MATLAB, Simulink, Arduino, Python, SARIMA time-series modelling, sensor calibration, field measurement campaign.",
    ],
  },
];

const professionalExperience = [
  {
    title: "Electrical Engineer (Remote, MEP)",
    institution: "DeltaQ Engineering",
    dates: "May 2026 – Present",
    points: [
      "Perform electrical load calculations and system analysis for residential, multi-family, and commercial buildings, and prepare design documentation to applicable US codes and standards (NEC).",
      "Produce technical drawings, specifications, and coordination layouts in AutoCAD with senior engineers, and evaluate electrical equipment selections against project and code requirements.",
    ],
  },
];

const initiatives = [
  {
    title: "Smart Fertigation System",
    dates: "2023",
    description: "Built an Arduino-based monitoring and control system (DHT-11, soil moisture sensors) that automates irrigation with prototype fertilisation control to improve water and nutrient efficiency.",
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
                Electrical Engineering Undergraduate
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl">
                Pratik Adhikari
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Final-year electrical engineering student focused on renewable-energy systems, power-system monitoring, digital twins, and data-driven forecasting for grid modernization.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" /> Lalitpur, Nepal</div>
                <div className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" /> IOE, Pulchowk Campus</div>
                <div className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-blue-600 dark:text-blue-400" /> Available for opportunities</div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:adhikaripratik2003@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                  <Mail className="h-4 w-4" /> Email Me
                </a>
                <a href="/pratik-adhikari-cv.txt" download className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-medium text-blue-700 transition hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30">
                  <Download className="h-4 w-4" /> Download CV
                </a>
                <a href="https://www.linkedin.com/in/pratik-adhikari-54b8b6202/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400">
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
                  I am a dedicated electrical engineering student with a strong foundation in renewable-energy systems, power electronics, control systems, and simulation-driven analysis. My work bridges theory and engineering practice, with a focus on building robust models and practical solutions for modern power systems.
                </p>
                <p>
                  Through research and project work, I have developed hands-on experience in MATLAB/Simulink modeling, digital twins, instrumentation, and time-series analysis. I enjoy solving complex engineering problems through rigorous analysis, collaborative work, and evidence-based design.
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
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Renewable energy integration, digital twins, and forecasting for grid modernization.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                  <div className="mb-3 inline-flex rounded-xl bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"><Settings className="h-5 w-5" /></div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Technical Profile</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">MATLAB/Simulink, power electronics, instrumentation, field measurements, and control design.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                  <div className="mb-3 inline-flex rounded-xl bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"><Network className="h-5 w-5" /></div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Systems Thinking</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Interest in grid-connected systems, power quality, and monitoring of dynamic electrical infrastructure.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                  <div className="mb-3 inline-flex rounded-xl bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"><BrainCircuit className="h-5 w-5" /></div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Data-Driven mindset</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Applying forecasting and machine learning for resilient, smarter energy systems and monitoring.</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">Technical Projects</h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {initiatives.map((item) => (
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
                  <span className="inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">Prototype</span>
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
                <p className="mt-2 text-base font-medium text-slate-800 dark:text-slate-200">adhikaripratik2003@gmail.com</p>
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
              <a href="https://www.linkedin.com/in/pratik-adhikari-54b8b6202/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400">
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
