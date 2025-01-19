import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Subject Matter Expert (Computer Science)",
      company: "Chegg India",
      duration: "April 2024 - July 2024",
      location: "Remote",
      description:
        "Provided detailed solutions to computer science questions and earned incentives for achieving targets within a specified timeframe.",
    },
    {
      title: "MERN Stack Developer Trainee",
      company: "4Achievers",
      duration: "September 2024 - Present",
      location: "WFO",
      description:
        "Designed and developed web applications using MongoDB, Express.js, React, and Node.js. Assisted in writing clean, testable code, conducting code reviews, and automating testing processes.",
    },
  ];

  return (
    <section
      className="py-16 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100"
      id="experience"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto px-6"
      >
        <h2 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 text-center mb-12">
          Professional Experience
        </h2>
        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2"
              whileHover={{ scale: 1.02 }}
            >
              {/* Left Section: Timeline or Duration */}
              <div className="flex-shrink-0 text-center md:text-left">
                <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                  {experience.duration}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {experience.location}
                </p>
              </div>

              {/* Right Section: Details */}
              <div>
                <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                  {experience.title}
                </h3>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  {experience.company}
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
