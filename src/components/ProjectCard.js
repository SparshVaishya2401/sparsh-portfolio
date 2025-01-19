import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      name: "Personal Portfolio Website",
      description:
        "A responsive portfolio website built using React and Tailwind CSS. It showcases my skills, projects, and experience with a user-friendly interface.",
      link: "https://github.com/SparshVaishya2401/portfolio",
    },
    {
      name: "E-commerce Dashboard",
      description:
        "MERNstack used: React.js for UI, Node.js/Express.js for backend, MongoDB for storage. It provides functionalities for user authentication, category management, product management, and more, enabling users to efficiently manage their online store.",
      link: "https://github.com/SparshVaishya2401/e-commerce-dashboard",
    },
    {
      name: "Netflix Clone",
      description:
        "A web-based application which allows users to interact in real time. Teaches component-based architecture, state management, responsive design, and deployment for interaction.",
      link: "https://github.com/SparshVaishya2401/netflix-clone",
    },
    {
      name: "Quiz Website",
      description:
        "Facilitates user logins to play an online test with live score updates. Learn front-end development (HTML, CSS), interactivity and dynamic content (JavaScript), and data storage and retrieval (Firebase).",
      link: "https://github.com/SparshVaishya2401/quiz-website",
    },
  ];

  return (
    <section
      className="py-12 bg-white text-center dark:bg-gray-900 dark:text-gray-100"
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Projects
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out dark:bg-gray-800 dark:text-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 * index }} // Staggered delay for animation
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                {project.name}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-4 inline-block hover:underline"
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
