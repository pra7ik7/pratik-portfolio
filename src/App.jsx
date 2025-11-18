import React, { useState, useEffect } from "react";
import {
  Github, Linkedin, Mail, MapPin, Calendar, GraduationCap,
  Code, Cpu, Zap, Users, MessageSquare, Trophy,
  Gamepad2, Tv2, Dumbbell
} from "lucide-react";
import { motion } from "framer-motion";

const App = () => {
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
    { title: "Technical Skills", icon: <Code className="w-6 h-6" />, skills: ["C, C++", "MATLAB", "AutoCAD", "Proteus", "MS Office"] },
    { title: "Soft Skills", icon: <Users className="w-6 h-6" />, skills: ["Communication", "Teamwork", "Leadership"] }
  ];

  const projects = [
    { title: "Project 1", description: "Description placeholder", tags: ["Electrical", "Engineering"] },
    { title: "Project 2", description: "Description placeholder", tags: ["Renewable Energy"] },
    { title: "Project 3", description: "Description placeholder", tags: ["Control Systems"] }
  ];

  const hobbies = [
    { icon: <Trophy className="w-6 h-6" />, name: "Achievements" },
    { icon: <Tv2 className="w-6 h-6" />, name: "Watching Football" },
    { icon: <Gamepad2 className="w-6 h-6" />, name: "Gaming" },
    { icon: <Dumbbell className="w-6 h-6" />, name: "Gym" },
    { icon: <Zap className="w-6 h-6" />, name: "Cricket" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-2xl font-bold text-gray-800">
            Pratik Adhikari
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#hobbies" className="text-gray-600 hover:text-blue-600 transition-colors">Hobbies</a>
          </motion.div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Pratik <span className="text-blue-600">Adhikari</span></h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              Electrical Engineering student passionate about renewable energy, control systems, and modern technology.
            </p>
            <div className="flex items-center text-gray-500 mb-4"><MapPin className="w-5 h-5 mr-2" />Lalitpur, Kathmandu</div>
            <div className="flex space-x-4">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://github.com/pra7ik7" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                <Github className="w-5 h-5 mr-2" />GitHub
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/pratik-adhikari-54b8b6202/" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5 mr-2" />LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" animate={isVisible.about ? "visible" : "hidden"} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" animate={isVisible.about ? "visible" : "hidden"} className="text-gray-600 text-lg md:text-xl leading-relaxed">
            I am a 4th-year Electrical Engineering student at Pulchowk Engineering Campus, focusing on practical skills and modern advancements in electrical engineering.
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" animate={isVisible.skills ? "visible" : "hidden"} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, i) => (
              <motion.div key={i} variants={containerVariants} initial="hidden" animate={isVisible.skills ? "visible" : "hidden"} transition={{ delay: i * 0.2 }} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6"><div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">{category.icon}</div><h3 className="text-xl font-semibold text-gray-900">{category.title}</h3></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{category.skills.map((s, j) => <div key={j} className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm font-medium">{s}</div>)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" animate={isVisible.projects ? "visible" : "hidden"} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects & Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div key={i} variants={containerVariants} initial="hidden" animate={isVisible.projects ? "visible" : "hidden"} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }} className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">{p.tags.map((t, j) => <span key={j} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">{t}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section id="hobbies" className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" animate={isVisible.hobbies ? "visible" : "hidden"} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hobbies & Interests</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {hobbies.map((h, i) => (
              <motion.div key={i} variants={containerVariants} initial="hidden" animate={isVisible.hobbies ? "visible" : "hidden"} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.05, rotate: 2 }} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center text-white hover:bg-opacity-30 transition-all duration-300">
                <div className="flex justify-center mb-3"><div className="p-3 bg-white bg-opacity-20 rounded-full">{h.icon}</div></div>
                <p className="font-medium text-sm">{h.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Pratik Adhikari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
