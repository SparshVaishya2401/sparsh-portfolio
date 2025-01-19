import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 text-white text-center dark:text-gray-100">
      <div className="mb-4">
        <p className="text-sm">&copy; 2025 Sparsh Vaishya. All Rights Reserved.</p>
      </div>
      {/* Social Media Links */}
      <div className="flex justify-center space-x-4">
        {/* GitHub */}
        <a
          href="https://github.com/SparshVaishya2401"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors"
          aria-label="Visit my GitHub profile"
        >
          <FaGithub className="text-2xl" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sparsh-vaishya/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors"
          aria-label="Visit my LinkedIn profile"
        >
          <FaLinkedin className="text-2xl" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/sparsh_vaish241/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition-colors"
          aria-label="Visit my Instagram profile"
        >
          <FaInstagram className="text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
