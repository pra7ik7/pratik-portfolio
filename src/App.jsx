import React, { useState, useEffect } from "react";
import {
  Github, Linkedin, Mail, MapPin, Calendar, GraduationCap,
  Code, Cpu, Zap, Users, Book, Trophy, Tv2, Gamepad2, Dumbbell, Activity
} from "lucide-react";
import { motion } from "framer-motion";
import MyPhoto from './assets/me.jpg';
import emailjs from "emailjs-com";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_5y9i0vr",    // replace with your EmailJS Service ID
    "template_94rfhyl",   // replace with your EmailJS Template ID
    e.target,
    "wOPsz7_5Cpo85PiiV"     // replace with your EmailJS Public Key
  ).then(
    (result) => {
      alert("Message sent successfully!");
    },
    (error) => {
      alert("Failed to send message, try again.");
    }
  );

  e.target.reset();
};



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
    { title: "Technical Skills", icon: <Code className="w-6 h-6" />, skills: ["C/C++", "MATLAB", "AutoCAD", "Proteus", "MS Office", "Circuit Design"] },
    { title: "Soft Skills", icon: <Users className="w-6 h-6" />, skills: ["Communication", "Teamwork", "Leadership", "Problem Solving", "Time Management", "Adaptability"] },
    { title: "Academic Focus", icon: <Book className="w-6 h-6" />, skills: ["Power Systems", "Control Theory", "Renewable Energy", "Electronics", "Signal Processing", "Embedded Systems"] }
  ];

  const projects = [
    { title: "Renewable Energy System", description: "Designed and simulated a hybrid solar-wind energy system for rural electrification.", tags: ["Renewable Energy", "MATLAB", "Simulation"] },
    { title: "Motor Control System", description: "Developed a PID controller for precise motor speed regulation in industrial applications.", tags: ["Control Systems", "Embedded", "Automation"] },
    { title: "Smart Grid Analysis", description: "Research project analyzing the integration of renewable sources into traditional power grids.", tags: ["Power Systems", "Research", "Analysis"] }
  ];

  const hobbies = [
    { icon: <Trophy className="w-6 h-6" />, name: "Achievements" },
    { icon: <Tv2 className="w-6 h-6" />, name: "Football" },
    { icon: <Gamepad2 className="w-6 h-6" />, name: "Gaming" },
    { icon: <Dumbbell className="w-6 h-6" />, name: "Gym" },
    { icon: <Zap className="w-6 h-6" />, name: "Cricket" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-2xl font-bold text-gray-800">Pratik Adhikari</motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#hobbies" className="text-gray-600 hover:text-blue-600 transition-colors">Hobbies</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </motion.div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Pratik <span className="text-blue-600">Adhikari</span></h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">Electrical Engineering student passionate about renewable energy, control systems, and modern technology.</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-gray-500"><MapPin className="w-5 h-5 mr-2" />Lalitpur, Kathmandu</div>
              <div className="flex items-center text-gray-500"><Calendar className="w-5 h-5 mr-2" />4th Year Student</div>
              <div className="flex items-center text-gray-500"><GraduationCap className="w-5 h-5 mr-2" />Pulchowk Engineering Campus</div>
            </div>
            <div className="flex flex-wrap gap-4">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"><Mail className="w-5 h-5 mr-2" />Contact Me</motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://github.com/pra7ik7" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center"><Github className="w-5 h-5 mr-2" />GitHub</motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/pratik-adhikari-54b8b6202/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center"><Linkedin className="w-5 h-5 mr-2" />LinkedIn</motion.a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-2xl -rotate-3"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img src={MyPhoto} alt="Pratik Adhikari" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" animate={isVisible.about ? "visible" : "hidden"} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" animate={isVisible.about ? "visible" : "hidden"} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I am a passionate Electrical Engineering student with a strong interest in renewable energy systems, power electronics, and control systems. Currently in my final year at Pulchowk Engineering Campus, I'm constantly exploring new technologies and methodologies to solve real-world engineering challenges.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                My academic journey has equipped me with both theoretical knowledge and practical skills, allowing me to approach problems with a balanced perspective. I thrive in collaborative environments and enjoy taking on challenges that push my boundaries.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg">Renewable Energy</div>
                <div className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg">Control Systems</div>
                <div className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg">Power Electronics</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-blue-600 mb-2"><Cpu className="w-8 h-8" /></div>
                <h3 className="font-bold text-gray-800 mb-2">Technical Expertise</h3>
                <p className="text-gray-600 text-sm">Proficient in MATLAB, AutoCAD, and circuit simulation tools</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-blue-600 mb-2"><Zap className="w-8 h-8" /></div>
                <h3 className="font-bold text-gray-800 mb-2">Research Focus</h3>
                <p className="text-gray-600 text-sm">Special interest in sustainable energy solutions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-blue-600 mb-2"><Users className="w-8 h-8" /></div>
                <h3 className="font-bold text-gray-800 mb-2">Team Player</h3>
                <p className="text-gray-600 text-sm">Strong collaboration and leadership skills</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-blue-600 mb-2"><Book className="w-8 h-8" /></div>
                <h3 className="font-bold text-gray-800 mb-2">Continuous Learner</h3>
                <p className="text-gray-600 text-sm">Always expanding my knowledge base</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" animate={isVisible.skills ? "visible" : "hidden"} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, i) => (
              <motion.div key={i} variants={containerVariants} initial="hidden" animate={isVisible.skills ? "visible" : "hidden"} transition={{ delay: i * 0.2 }} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((s, j) => <div key={j} className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm font-medium">{s}</div>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" animate={isVisible.projects ? "visible" : "hidden"} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects & Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div key={i} variants={containerVariants} initial="hidden" animate={isVisible.projects ? "visible" : "hidden"} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-600 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">{p.tags.map((t, j) => <span key={j} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">{t}</span>)}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center">
              <Book className="w-5 h-5 mr-2" />View All Projects
            </motion.a>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-16 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" animate={isVisible.hobbies ? "visible" : "hidden"} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hobbies & Interests</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {hobbies.map((h, i) => (
              <motion.div key={i} variants={containerVariants} initial="hidden" animate={isVisible.hobbies ? "visible" : "hidden"} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.05, rotate: 2 }} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center text-white hover:bg-opacity-30 transition-all duration-300">
              <div className="p-3 bg-white bg-opacity-30 rounded-full text-white flex items-center justify-center">{h.icon}</div>
                <p className="font-medium text-sm">{h.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible.contact ? "visible" : "hidden"}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
    </motion.div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible.contact ? "visible" : "hidden"}
      className="grid md:grid-cols-2 gap-12"
    >
      {/* Contact Info */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <Mail className="w-5 h-5 text-blue-600 mt-1" />
            <p className="ml-3 text-sm text-gray-600">Email: pratikadhikari61@email.com</p>
          </div>
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-blue-600 mt-1" />
            <p className="ml-3 text-sm text-gray-600">Location: Lalitpur, Kathmandu, Nepal</p>
          </div>
          <div className="flex items-start">
            <Calendar className="w-5 h-5 text-blue-600 mt-1" />
            <p className="ml-3 text-sm text-gray-600">Availability: Any time, but with short message prior</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <form
          onSubmit={sendEmail}
          className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-md"
        >
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Pratik Adhikari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
