import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  GraduationCap,
  Code,
  Cpu,
  Zap,
  Users,
  Book,
  Dumbbell,
  Laptop,
  Sun,
  Moon,
  ExternalLink,
  Download,
  Award,
  Briefcase,
  ChevronRight,
  Send,
  BrainCircuit,
  Settings,
  Network
} from "lucide-react";
import { motion } from "framer-motion";
import MyPhoto from './assets/me.jpg';
import emailjs from "emailjs-com";

const sendEmail = (e) => {
  e.preventDefault();
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = 'Sending...';
  submitBtn.disabled = true;

  emailjs.sendForm(
    "service_5y9i0vr",
    "template_94rfhyl",
    e.target,
    "wOPsz7_5Cpo85PiiV"
  ).then(
    () => {
      submitBtn.innerHTML = 'Message Sent!';
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
      e.target.reset();
    },
    () => {
      submitBtn.innerHTML = 'Failed - Try Again';
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    }
  );
};



const App = () => {
  const [theme, setTheme] = useState(() => {
  try {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (saved === "dark" || saved === "light") return saved;
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  } catch (e) {
    // ignore localStorage errors
  }
  return "light";
});

const toggleTheme = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));

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
  } catch (e) {
    // ignore
  }
}, [theme]);

const [isVisible, setIsVisible] = useState({});

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const skillCategories = [
    { 
      title: "Technical Skills", 
      icon: <Code className="w-6 h-6" />, 
      skills: ["C/C++", "MATLAB/Simulink", "AutoCAD", "Proteus", "MS Office Suite", "Circuit Design"] 
    },
    { 
      title: "Professional Skills", 
      icon: <Users className="w-6 h-6" />, 
      skills: ["Technical Communication", "Team Collaboration", "Project Leadership", "Analytical Thinking", "Time Management", "Adaptability"] 
    },
    { 
      title: "Domain Expertise", 
      icon: <Book className="w-6 h-6" />, 
      skills: ["Power Systems", "Control Systems", "Renewable Energy", "Power Electronics", "Signal Processing", "Embedded Systems"] 
    }
  ];

  const projects = [
    { 
      title: "Digital Twin Model of a Photovoltaic System", 
      description: "Designed and implemented a comprehensive MATLAB/Simulink-based digital twin for a grid-connected PV system, enabling real-time performance analysis under varying irradiance and temperature conditions.", 
      tags: ["Photovoltaic Systems", "Digital Twin", "MATLAB/Simulink", "Power Systems"],
      status: "Ongoing"
    },
    { 
      title: "Smart Fertigation System", 
      description: "Engineered an automated irrigation and fertilization system utilizing Arduino microcontrollers and environmental sensors for precision agriculture applications.", 
      tags: ["Arduino", "IoT", "Automation", "Embedded Systems"],
      status: "Completed"
    },
  ];

  const interests = [
    { icon: <BrainCircuit className="w-6 h-6" />, name: "ML Applications" },
    { icon: <Zap className="w-6 h-6" />, name: "Renewable Energy" },
    { icon: <Settings className="w-6 h-6" />, name: "Control Systems" },
    { icon: <Book className="w-6 h-6" />, name: "Research" },
    { icon: <Network className="w-6 h-6" />, name: "Power Networks" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold text-gray-800 dark:text-white tracking-tight"
          >
            Pratik Adhikari
          </motion.div>

          <div className="flex items-center space-x-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm font-medium">About</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm font-medium">Skills</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm font-medium">Projects</a>
              <a href="#interests" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm font-medium">Interests</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm font-medium">Contact</a>
            </motion.div>

            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 text-sm tracking-wide uppercase">Electrical Engineering Student</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Pratik Adhikari
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Final-year Electrical Engineering student at Pulchowk Engineering Campus, specializing in renewable energy systems, power electronics, and control systems, with strong interest in simulation-based analysis and practical engineering applications.

            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8 text-sm">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-2 text-blue-600" />Lalitpur, Nepal
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <GraduationCap className="w-4 h-4 mr-2 text-blue-600" />IOE Pulchowk Campus
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Briefcase className="w-4 h-4 mr-2 text-blue-600" />Available for Opportunities
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <motion.a 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                href="#contact" 
                className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center text-sm font-medium shadow-sm"
              >
                <Mail className="w-4 h-4 mr-2" />Get in Touch
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                href="https://github.com/pra7ik7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-2.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-200 flex items-center text-sm font-medium"
              >
                <Github className="w-4 h-4 mr-2" />GitHub
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                href="https://www.linkedin.com/in/pratik-adhikari-54b8b6202/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-2.5 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 flex items-center text-sm font-medium"
              >
                <Linkedin className="w-4 h-4 mr-2" />LinkedIn
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} 
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-64 md:w-72 lg:w-80">
              {/* Subtle decorative accent */}
              <div className="absolute -inset-1 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl opacity-10"></div>
              {/* Image container */}
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <img src={MyPhoto} alt="Pratik Adhikari" className="w-full aspect-[3/4] object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

{/* About Section */}
<section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible.about ? "visible" : "hidden"}
      className="text-center mb-12"
    >
      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wide uppercase mb-2">Background</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        About Me
      </h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </motion.div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible.about ? "visible" : "hidden"}
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      <div>
        <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
          I am a dedicated Electrical Engineering student with a strong foundation in renewable energy systems, power electronics, and control systems. Currently in my final year at Pulchowk Engineering Campus (Institute of Engineering, Tribhuvan University), I am focused on developing practical solutions to real-world engineering challenges.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          My academic journey has provided me with both theoretical knowledge and hands-on experience, enabling me to approach complex problems with analytical rigor. I excel in collaborative environments and am driven by challenges that expand my technical capabilities.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">Renewable Energy</span>
          <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">Machine Learning</span>
          <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">Power Electronics</span>
          <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">Control Systems</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
          <div className="text-blue-600 dark:text-blue-400 mb-3"><Cpu className="w-7 h-7" /></div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1 text-sm">Technical Expertise</h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">MATLAB/Simulink, AutoCAD, circuit simulation</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
          <div className="text-blue-600 dark:text-blue-400 mb-3"><Zap className="w-7 h-7" /></div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1 text-sm">Research Focus</h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">Sustainable energy solutions & digital twins</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
          <div className="text-blue-600 dark:text-blue-400 mb-3"><Users className="w-7 h-7" /></div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1 text-sm">Collaboration</h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">Strong teamwork and leadership abilities</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
          <div className="text-blue-600 dark:text-blue-400 mb-3"><Book className="w-7 h-7" /></div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1 text-sm">Continuous Learning</h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">Committed to professional development</p>
        </div>
      </div>
    </motion.div>
  </div>
</section>


{/* Skills Section */}
<section id="skills" className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible.skills ? "visible" : "hidden"}
      className="text-center mb-12"
    >
      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wide uppercase mb-2">Capabilities</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Skills & Expertise
      </h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category, i) => (
        <motion.div
          key={i}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible.skills ? "visible" : "hidden"}
          transition={{ delay: i * 0.15 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center mb-5">
            <div className="p-2.5 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
              {category.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {category.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {category.skills.map((s, j) => (
              <span
                key={j}
                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 text-xs font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* Projects Section */}
<section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible.projects ? "visible" : "hidden"}
      className="text-center mb-12"
    >
      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wide uppercase mb-2">Portfolio</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Projects
      </h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible.projects ? "visible" : "hidden"}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
              {p.title}
            </h3>
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
              p.status === 'Completed' 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
            }`}>
              {p.status}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{p.description}</p>

          <div className="flex flex-wrap gap-2">
            {p.tags.map((t, j) => (
              <span
                key={j}
                className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    <div className="text-center mt-10">
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href="https://github.com/pra7ik7"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 inline-flex items-center text-sm font-medium"
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        View More on GitHub
      </motion.a>
    </div>
  </div>
</section>


{/* Professional Interests Section */}
<section id="interests" className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible.interests ? "visible" : "hidden"}
      className="text-center mb-12"
    >
      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wide uppercase mb-2">Focus Areas</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Professional Interests
      </h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {interests.map((item, i) => (
        <motion.div
          key={i}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible.interests ? "visible" : "hidden"}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -3 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-5 text-center border border-gray-100 dark:border-gray-700 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200"
        >
          <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
            {item.icon}
          </div>
          <p className="font-medium text-sm text-gray-800 dark:text-gray-200">{item.name}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


{/* Contact Section */}
<section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible.contact ? "visible" : "hidden"}
      className="text-center mb-12"
    >
      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wide uppercase mb-2">Connect</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Get In Touch
      </h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
      <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
        I'm always open to discussing new opportunities, collaborations, or answering questions about my work.
      </p>
    </motion.div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible.contact ? "visible" : "hidden"}
      className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
    >
      {/* Contact Info */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-5">
          Contact Information
        </h3>

        <div className="space-y-4">
          <a href="mailto:pratikadhikari61@gmail.com" className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="ml-4">
              <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
              <p className="text-sm text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">pratikadhikari61@gmail.com</p>
            </div>
          </a>

          <div className="flex items-center p-3 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="ml-4">
              <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
              <p className="text-sm text-gray-800 dark:text-gray-200">Lalitpur, Nepal</p>
            </div>
          </div>

          <div className="flex items-center p-3 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="ml-4">
              <p className="text-xs text-gray-500 dark:text-gray-400">Availability</p>
              <p className="text-sm text-gray-800 dark:text-gray-200">Open to opportunities</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Connect on social</p>
          <div className="flex gap-3">
            <a href="https://github.com/pra7ik7" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/pratik-adhikari-54b8b6202/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-5">
          Send a Message
        </h3>
        <form onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-xs font-medium mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-xs font-medium mb-1.5">
              Your Email
            </label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-xs font-medium mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              required
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              rows="4"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center text-sm font-medium"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  </div>
</section>


{/* Footer */}
<footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Pratik Adhikari. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">About</a>
        <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors">Projects</a>
        <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default App;
