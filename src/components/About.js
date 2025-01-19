import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [darkMode] = useState(false); // Initially light mode (false)

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* About Section */}
      <section
        id="about"
        className={`py-16 px-4 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 dark:text-gray-100`}
      >
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-7xl mx-auto space-y-12 md:space-y-0 md:space-x-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white tracking-tight">
              About Me
            </h2>
            <p className="text-lg sm:text-xl mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello! I'm{" "}
              <span className="text-indigo-600 font-bold">Sparsh Vaishya</span>,
              an aspiring developer passionate about creating efficient and
              user-friendly software. With a strong foundation in the{" "}
              <span className="font-semibold text-blue-500">MERN stack</span>{" "}
              and experience in various technologies, I am dedicated to
              building innovative solutions and continuously learning new
              skills.
            </p>
            <p className="text-lg sm:text-xl mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Whether it's developing dynamic web applications or exploring new
              technologies, I aim to deliver impactful results and grow as a
              developer.
            </p>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              src="/aboutus.jpg"
              alt="Decorative Graphic"
              className="w-full max-w-sm mx-auto md:mx-0"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
