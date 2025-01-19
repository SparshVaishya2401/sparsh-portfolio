import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { motion } from "framer-motion";

const Landing = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`font-sans min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navbar */}
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      {/* Header */}
      <main id="home" className="pt-24">
        <Header />
      </main>

      {/* Landing Section with Animated Background */}
      <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-green-500">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-50 z-0"></div>

        {/* Content inside Landing Section */}
        <div className="relative z-10 text-center px-6 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Hello, I'm Sparsh Vaishya
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-lg md:text-2xl text-white mb-6"
          >
            Aspiring Developer with Expertise in MERN Stack & Software Development
          </motion.p>
          <motion.a
            href="#about"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors border border-red-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            aria-label="Explore more about Sparsh Vaishya's portfolio"
          >
            Explore More
          </motion.a>
        </div>
      </div>

      {/* Additional Landing Content */}
      <section
        id="about"
        className="text-center py-20 bg-gray-50 dark:bg-gray-800 dark:text-white border border-red-500"
      >
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg mt-4">
          Explore my skills, projects, and achievements.
        </p>
      </section>
    </div>
  );
};

export default Landing;
