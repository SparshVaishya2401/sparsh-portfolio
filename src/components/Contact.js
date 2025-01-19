import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // Import the EmailJS SDK

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", mobile: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Mobile number validation function
  const validateMobile = (mobile) => /^[0-9]{10}$/.test(mobile);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateMobile(formData.mobile)) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!formData.name || !formData.email || !formData.message || !formData.mobile) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_hd7oy7j",
        "template_600n6pl",
        e.target,
        "aBxH5-T7Mxn-pGURT"
      )
      .then(
        (result) => {
          setIsSubmitted(true);
          setErrorMessage("");
          setFormData({ name: "", email: "", message: "", mobile: "" });
        },
        (error) => {
          setErrorMessage("There was an error submitting the form. Please try again.");
        }
      );
  };

  return (
    <section
      className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-8">
          Contact Me
        </h2>
        {isSubmitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 p-4 rounded-md shadow-md text-center"
          >
            <p className="text-lg font-semibold">Thank you for your message! I'll get back to you soon.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            {errorMessage && (
              <p className="text-red-500 text-center mb-4">{errorMessage}</p>
            )}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
              <input
                type="number"
                name="mobile"
                placeholder="Your Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
              ></textarea>
            </motion.div>
            <button
              type="submit"
              className="w-96 py-3 text-lg font-semibold bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105 focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
