import React from "react";
import { motion } from "framer-motion";

const Certifications = () => {
  const certifications = [
    "Database Management System (Infosys - Springboard)",
    "Python (Infosys - Springboard)",
    "React (Basic) (HackerRank)",
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="py-12 bg-white text-center dark:bg-gray-900 dark:text-gray-100"
      id="certifications"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-6">
          Certifications
        </h2>
        <ul className="mt-6 space-y-6">
          {certifications.map((cert, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg py-4 px-6 hover:scale-105 transform transition-transform duration-300 ease-in-out"
            >
              <p className="text-lg text-gray-800 dark:text-white">{cert}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Certifications;
