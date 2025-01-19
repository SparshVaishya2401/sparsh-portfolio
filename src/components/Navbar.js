import React, { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ toggleDarkMode, darkMode, onPortfolioClick }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Certifications", id: "certifications" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact", id: "contact" },
  ];

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (id === "home") {
      onPortfolioClick(); // Additional behavior for "Home"
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white py-4 z-50 shadow-xl rounded-b-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className="text-lg font-bold text-white hover:text-gray-200 transition-all duration-300">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl">👨‍💻</span> {/* Optional: Add an emoji or icon for the logo */}
            <span>My Portfolio</span>
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleNavbar}
          className="text-2xl md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isNavbarVisible ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isNavbarVisible ? "block" : "hidden"
          } md:flex md:space-x-8 absolute md:static top-16 left-0 md:bg-transparent dark:md:bg-transparent w-full md:w-auto text-center md:text-left transition-all duration-300 ease-in-out shadow-lg md:shadow-none rounded-lg bg-orange-400  dark:bg-gray-900`}
        >
          {navLinks.map((link) => (
            <li key={link.id} className="py-3 md:py-0">
              <a
                href={`#${link.id}`}
                className={`block md:inline text-lg font-medium ${
                  darkMode
                    ? "text-white hover:text-indigo-400 dark:hover:text-indigo-300"
                    : "text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                } transition duration-300`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                  setIsNavbarVisible(false); // Close navbar after click
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full p-2 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <FaSun className="text-yellow-500 text-xl" />
          ) : (
            <FaMoon className="text-gray-900 text-xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
