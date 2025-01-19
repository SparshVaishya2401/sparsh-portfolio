import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = {
    Languages: ["C/C++", "JavaScript", "Java"],
    Backend: ["Node.js", "Express.js", "Firebase"],
    Frontend: ["React", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
    Databases: ["MySQL", "MongoDB"],
    DeveloperTools: ["Postman", "VS Code", "Git", "GitHub"],
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 sm:px-12"
      >
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800 dark:text-white">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-indigo-100 dark:hover:bg-indigo-600 transition-transform duration-300 ease-in-out"
                    whileHover={{ scale: 1.1 }}
                    aria-label={`Skill: ${skill}`} // Accessibility for screen readers
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
