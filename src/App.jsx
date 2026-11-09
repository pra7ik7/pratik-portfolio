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
    skills: ["MATLAB/Simulink (Simscape Electrical)", "DIgSILENT PowerFactory (coursework)", "COMSOL Multiphysics", "Proteus"],
  },
  {
    title: "Research Methods",
    icon: <BrainCircuit className="w-6 h-6" />,
    skills: ["Predictive current control", "SVPWM", "LCL filter design & damping", "Harmonic analysis (IEC 61000-4-7, IEEE 519)", "MPPT", "Time-series forecasting (SARIMA)", "Model verification"],
  },
  {
    title: "Programming & Data",
    icon: <Code className="w-6 h-6" />,
    skills: ["Python (NumPy, SciPy, pandas, statsmodels, scikit-learn, Matplotlib)", "MATLAB", "C/C++", "JavaScript"],
  },
  {
    title: "Hardware & Instrumentation",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["Arduino", "Sensor calibration", "Serial data acquisition", "PCB design"],
  },
  {
    title: "Electrical Design",
    icon: <Zap className="w-6 h-6" />,
    skills: ["AutoCAD", "Bluebeam Revu", "Load calculations", "Single-line diagrams"],
  },
  {
    title: "Tools",
    icon: <Settings className="w-6 h-6" />,
    skills: ["LaTeX", "Git"],
  },
];

const researchInterests = [
  "Power electronics & control",
  "Renewable-energy integration",
  "Grid-connected converters",
  "Power-system modeling & dynamics",
  "Distribution systems",
  "Digital twins",
  "Data-driven monitoring & forecasting",
];

const highlights = [
  { value: "84.72%", label: "B.E. aggregate, Distinction" },
  { value: "3rd", label: "in graduating EE cohort" },
  { value: "IELTS 8.0", label: "Academic, Nov 2026" },
  { value: "2", label: "research projects" },
];

const honors = [
  "Ranked 3rd in the graduating Electrical Engineering cohort, Institute of Engineering, Tribhuvan University (84.72% aggregate).",
  "Merit Scholarship, Institute of Engineering, Tribhuvan University (Apr 2022 – Aug 2026) — awarded on the national engineering entrance examination (approx. 10,000 candidates); also received the IOE Scholarship Stipend for all eight semesters.",
];

const education = [
  {
    title: "Bachelor of Engineering (BE), Electrical Engineering",
    institution: "Institute of Engineering, Pulchowk Campus",
    subtitle: "Tribhuvan University, Lalitpur, Nepal",
    dates: "Apr 2022 – Aug 2026",
    details: [
      "Aggregate: 84.72% — Distinction (institutional scale; 80% distinction threshold).",
      "Final-year project (B.E. thesis): Development of a Digital Twin for Real-Time Monitoring and Short-Term Forecasting of a Photovoltaic System. Supervisors: Dr. Basanta Kumar Gautam (Pulchowk Campus) and Er. Deependra Neupane (Electricity Regulatory Commission).",
      "Coursework: Power System Analysis I & II, Power Electronics, Control Systems, Digital Control System, Applied Photovoltaic Engineering, Switchgear & Protection, Instrumentation I & II, Engineering Mathematics.",
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
    title: "Digital Twin for Real-Time Monitoring and Short-Term Forecasting of a Grid-Connected PV System",
    institution: "Final-year project (four-member team), Department of Electrical Engineering, Pulchowk Campus. Supervisors: Dr. Basanta Kumar Gautam and Er. Deependra Neupane",
    dates: "Sep 2025 – May 2026",
    points: [
      "Built a converter-level MATLAB/Simulink twin of a 335 W grid-connected PV module (single-diode model, DC–DC stage with perturb-and-observe MPPT, single-phase inverter) and validated it against 41 field measurements on a clear and a partly cloudy day.",
      "Verified MPPT operation against the module's own P–V curve (99.9–100% tracking efficiency, 200–1000 W/m²). Against the 41 field readings the twin gives 24.2 W RMSE (r = 0.969) with on-site irradiance and 99.8 W (r = 0.69) with satellite-derived irradiance, showing the value of site-specific sensing. On the clear day, measured power was 87.6% of the twin's prediction, indicative of unmodelled losses.",
      "Designed and calibrated a low-cost Arduino/LDR irradiance sensor against a smartphone-based reference (power-law fit, R² = 0.974, n = 21) and used it to drive the twin from live serial data in a real-time demonstration.",
      "Developed a SARIMA(1,1,1)×(1,1,1)₂₄ day-ahead forecaster for irradiance and temperature and propagated it through the twin: on a held-out day, daily energy was within 0.8% of that obtained with measured weather, against 6.7% for a persistence baseline.",
    ],
    tags: ["MATLAB/Simulink", "MPPT", "Arduino", "SARIMA", "Sensor calibration"],
    links: [{ label: "Code & data on GitHub", href: "https://github.com/pra7ik7/pv-digital-twin-forecasting" }],
    images: [
      { src: "img/mppt_verification.png", alt: "MPPT tracking verification of the PV digital twin", caption: "MPPT tracking against the module's P–V curve" },
      { src: "img/field_validation.png", alt: "Measured and simulated PV power on two field days", caption: "Measured vs simulated power, two field days" },
      { src: "img/day_ahead_forecast.png", alt: "SARIMA day-ahead forecast of irradiance and twin power", caption: "Day-ahead irradiance and power forecast" },
    ],
  },
  {
    title: "Deadbeat Predictive Current Control and Passive Damping of an LCL-Filtered Grid-Connected Converter",
    institution: "Simulation study with Panas Bhattarai (Dept. of Electrical Engineering, Tribhuvan University), who provided guidance; I lead the modeling, simulation, analysis and writing",
    dates: "May 2026 – Present",
    points: [
      "Developed a stationary αβ-frame deadbeat predictive current controller for a 4.1 kW, 380 V two-level voltage-source converter with an LCL filter (2.478 kHz resonance): power commands map algebraically to current references, needing no Park transformation or synchronous-frame regulator. Simulated with 10 kHz SVPWM and one control period of computation delay.",
      "Determined how much passive damping the controller needs: the undamped converter does not operate (voltage limiter active at every step, power flow reverses), no deadbeat gain from 0.05 to 1 restores operation, and the minimum damping ratio lies between 0.034 and 0.057.",
      "Identified a damping range of 21–30 Ω per delta branch that operates under ±20% L₁, L₂, C tolerance and up to 5 mH added grid inductance, which the 10 Ω minimum does not. Worst harmonic-limit utilisation is 0.34–0.23 (IEC 61000-4-7 subgroups against IEEE 519-2022) at 0.15–0.21% dissipation, about 14 times the fundamental-frequency estimate.",
      "Earlier study (5 kW, 400 V, no computation delay): 60 Ω per branch removed 91.8% of the resonance-band current; subgroup TDD 3.0–4.9% across six operating points (at most 5.1% over ten robustness cases). Preceded by FCS-MPC and L versus LCL comparisons.",
    ],
    tags: ["Deadbeat control", "SVPWM", "LCL filter", "IEEE 519", "Simulation only"],
    links: [],
    images: [],
  },
];

const professionalExperience = [
  {
    title: "Electrical Engineer (Remote)",
    institution: "DeltaQ Engineering — US-based mechanical, electrical and plumbing (MEP) consultancy",
    dates: "May 2026 – Present",
    points: [
      "Perform electrical load calculations and system analysis for residential, multi-family, commercial and industrial projects in accordance with applicable US codes and standards.",
      "Prepare AutoCAD single-line diagrams, specifications and coordination layouts; check equipment selections.",
    ],
  },
];

const academicProjects = [
  {
    title: "16 MW Run-of-River Hydropower Plant Design",
    dates: "2026",
    tag: "Academic",
    description: "Hydrology, turbine, generator and transformer selection, grounding, station supply, backup sizing.",
  },
  {
    title: "132 kV Double-Circuit Transmission Line Design",
    dates: "2026",
    tag: "Academic",
    description: "108 MW over 220 km: voltage level, tower geometry, insulation design, conductor evaluation.",
  },
  {
    title: "Commercial Building Power Distribution & Illumination",
    dates: "2025",
    tag: "Academic",
    description: "AutoCAD layouts, board/cable sizing, protection coordination, 250 kVA transformer, 330 A MCCB.",
  },
  {
    title: "Smart Fertigation System",
    dates: "2023",
    tag: "Prototype",
    description: "Arduino irrigation control (DHT-11, soil-moisture sensors) with prototype fertilisation control.",
  },
];

const extras = [
  {
    title: "Outreach",
    icon: <BookOpen className="w-5 h-5" />,
    content: [
      {
        heading: "BloomED — STEM Content Creator (Volunteer)",
        dates: "Jun 2021 – Jan 2022",
        text: "Wrote simplified science and technology learning material for under-resourced students.",
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
    title: "Test Scores",
    icon: <GraduationCap className="w-5 h-5" />,
    content: [
      {
        heading: "IELTS Academic — Overall 8.0",
        dates: "1 Nov 2026",
        text: "Listening 9.0, Reading 9.0, Writing 7.0, Speaking 7.0.",
      },
    ],
  },
  {
    title: "Languages",
    icon: <Users className="w-5 h-5" />,
    content: [
      "Nepali (native)",
      "English (fluent)",
      "Hindi (conversational)",
    ],
  },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Honors", href: "#honors" },
  { label: "Research", href: "#experience" },
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
                Electrical Engineer · Prospective PhD Applicant
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl">
                Pratik Adhikari
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Electrical engineering graduate of IOE, Pulchowk Campus. My research interests are power-electronic converters and control for renewable-energy integration, power-system modeling, and digital twins and data-driven monitoring and forecasting of power systems.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" /> Lalitpur, Nepal</div>
                <div className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" /> IOE, Pulchowk Campus</div>
                <div className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-blue-600 dark:text-blue-400" /> DeltaQ Engineering (Remote, MEP)</div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:078bel069.pratik@pcampus.edu.np" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
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

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                    <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{item.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{item.label}</p>
                  </div>
                ))}
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
                  I completed my B.E. in Electrical Engineering at IOE, Pulchowk Campus in August 2026 with an 84.72% aggregate (Distinction), ranking 3rd in my graduating cohort. I am preparing to apply to PhD programs, with interests in power electronics and control for renewable-energy integration, power-system modeling and dynamics, and digital twins and data-driven monitoring of power systems.
                </p>
                <p>
                  My research so far has two parts: a MATLAB/Simulink digital twin of a grid-connected PV system, validated with field data and coupled to a low-cost Arduino irradiance sensor and a SARIMA day-ahead forecaster (final-year project); and a simulation study of deadbeat predictive current control and passive damping for an LCL-filtered grid-connected converter. Alongside, I work remotely as an electrical engineer for a US MEP consultancy.
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
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Power electronics and control for renewable-energy integration, power-system modeling and dynamics, and digital twins for monitoring and forecasting.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                  <div className="mb-3 inline-flex rounded-xl bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"><Settings className="h-5 w-5" /></div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Power Electronics & Control</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Predictive current control, SVPWM and LCL-filter damping for grid-connected converters, studied in MATLAB/Simulink.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                  <div className="mb-3 inline-flex rounded-xl bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"><Network className="h-5 w-5" /></div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Grid & Distribution Systems</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Power-system modeling and dynamics, and the operation of distribution systems with a growing share of inverter-based resources.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                  <div className="mb-3 inline-flex rounded-xl bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"><BrainCircuit className="h-5 w-5" /></div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Digital Twins & Forecasting</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">A PV digital twin with low-cost sensing and SARIMA day-ahead forecasting, verified against field measurements.</p>
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

                  {item.tags && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300">{tag}</span>
                      ))}
                    </div>
                  )}

                  {item.images && item.images.length > 0 && (
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                      {item.images.map((img) => (
                        <figure key={img.src} className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700">
                          <img src={img.src} alt={img.alt} loading="lazy" className="w-full bg-white object-contain" />
                          <figcaption className="px-3 py-2 text-xs text-slate-500 dark:bg-slate-900 dark:text-slate-400">{img.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  )}

                  {item.links && item.links.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {item.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400">
                          <Github className="h-4 w-4" /> {link.label}
                        </a>
                      ))}
                    </div>
                  )}
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

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
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
              <a href="mailto:078bel069.pratik@pcampus.edu.np" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-950">
                <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"><Mail className="h-5 w-5" /></div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Email</p>
                <p className="mt-2 break-all text-base font-medium text-slate-800 dark:text-slate-200">078bel069.pratik@pcampus.edu.np</p>
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
