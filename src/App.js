import React, { useState,useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/globals.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showHeader, setShowHeader] = useState(false); // State to control header visibility

  // Create refs for each section
  const refs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    education: useRef(null),
    projects: useRef(null),
    certifications: useRef(null),
    achievements: useRef(null),
    contact: useRef(null),
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

   // Scroll to the section when a link is clicked
   const handleNavClick = (sectionId) => {
    if (refs[sectionId]?.current) {
      refs[sectionId].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePortfolioClick = () => {
    setShowHeader((prevState) => !prevState); // Toggle Header visibility
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`font-sans min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navbar */}
      <Navbar
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        onPortfolioClick={handlePortfolioClick} // Pass the click handler
        onNavClick={handleNavClick} // Pass the click handler
      />

      {/* Main Content */}
      <main className="pt-16">
        {/* Header Section */}
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Header />
          </motion.div>
        )}

        {/* About Section */}
        <motion.section
          id="about"
          className={`py-12 ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-900"
          } text-center`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className={`py-12 ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-900"
          } text-center`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Skills />
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="education"
          className={`py-12 ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-900"
          } text-center`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Experience />
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className={`py-12 ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-900"
          } text-center`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Projects />
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          className={`py-12 ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-900"
          } text-center`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Certifications />
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          id="achievements"
          className={`py-12 ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-900"
          } text-center`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Achievements />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className={`py-12 ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-900"
          } text-center`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.section>
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default App;
