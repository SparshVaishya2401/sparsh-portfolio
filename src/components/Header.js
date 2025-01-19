import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

const Header = ({ darkMode }) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=18ts74bO6OvlQz3po0PmzPJdR93kmIW1m";

  const openSlider = () => setIsSliderOpen(true);
  const closeSlider = () => setIsSliderOpen(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 dark:from-gray-700 dark:to-gray-800 text-gray-100 py-20 fixed w-full top-10 shadow-md z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Name and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
            Sparsh Vaishya
          </h1>
          <p className="text-lg md:text-xl mt-1 text-gray-200">
            Software Developer | MERN Stack Enthusiast | Problem Solver
          </p>
        </motion.div>

        {/* Open Slider Button */}
        <motion.button
          onClick={openSlider}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Open Links
        </motion.button>
      </div>

      {/* Full-Screen Slider with Links */}
      {isSliderOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20"
          onClick={closeSlider}
        >
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5 }}
            className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 w-full h-screen p-10 rounded-lg shadow-lg flex flex-col items-center space-y-6`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside slider
          >
            <h2 className="text-2xl font-bold">Connect with Me</h2>
            <div className="flex flex-col space-y-4">
              {/* GitHub */}
              <motion.a
                href="https://github.com/SparshVaishya2401"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-xl font-medium text-blue-600 hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/sparsh-vaishya-bb3a58285/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-xl font-medium text-blue-600 hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:sparshvaish2001@gmail.com"
                className="flex items-center space-x-1 text-xl font-medium text-blue-600 hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope className="text-xl" />
                <span>Email</span>
              </motion.a>

              {/* Resume */}
              <motion.a
                href={resumeUrl}
                download="Sparsh_Vaishya_Resume.pdf"
                className="flex items-center space-x-1 text-xl font-medium text-blue-600 hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaDownload className="text-xl" />
                <span>Resume</span>
              </motion.a>
            </div>

            {/* Close Slider Button */}
            <motion.button
              onClick={closeSlider}
              className="mt-4 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
          </motion.div>
        </div>
      )}
    </header>
  );
};

export default Header;
