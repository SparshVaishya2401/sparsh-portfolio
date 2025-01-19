import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      name: "E-commerce Dashboard",
      description:
        "Built with the MERN stack: React.js for UI, Node.js/Express.js for backend, and MongoDB for storage. It supports user authentication, category management, product management, and more, allowing efficient management of online stores.",
      link: "https://github.com/SparshVaishya2401",
    },
    {
      name: "MI website Clone",
      description:
        "A feature-rich clone of MI with a dynamic interface, showcasing modern UI/UX design, responsive layouts, and integration of state management techniques.",
      link: "https://sparshvaishya-mi-clone.netlify.app/",
    },
    {
      name: "Quiz Website",
      description:
        "An interactive quiz platform with user login, live scoring, and Firebase integration for real-time data storage and retrieval. Built for seamless front-end and back-end communication.",
      link: " https://sparshvaishya2401.github.io/Quiz_website/",
    },
  ];

  return (
    <section
      className="py-16 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100"
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 text-center mb-12">
          Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl p-8 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                {project.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium text-lg rounded-full shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-all"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
