import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";

const skills = [
  "Full Stack Development",
  "Machine Learning with Python",
  "Advanced Data Structures & C++",
  "Java & Cross-Platform Development",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-gray-800 dark:text-white mb-8 text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-10 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
        >
          I am a pre-final year <strong>B.Tech student</strong> specializing in{" "}
          <strong>Artificial Intelligence & Machine Learning</strong> at{" "}
          <strong>Shri Shankaracharya Technical Campus</strong>, passionate about
          solving real-world problems through technology.
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Skills Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Skills & Expertise
            </h3>
            <ul className="space-y-2">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors duration-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Experience Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Experience
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              During my internship with <strong>AICTE & Google Developer</strong>, I
              built an <strong>end-to-end object detection application</strong> 
              using <strong>Android Studio</strong> and <strong>Flutter</strong>, 
              integrating real-time ML models for seamless object recognition.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              This experience strengthened my skills in <strong>Python</strong>, 
              <strong>Java</strong>, and <strong>cross-platform development</strong>.
            </p>
          </div>
        </motion.div>

        {/* Resume Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          {/* Download Resume */}
          <a
            href="/resume.pdf" // Replace with your resume path
            download
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
          >
            <FaDownload /> Download Resume
          </a>

          {/* View Resume */}
          <a
            href="/resume.pdf" // Replace with your resume path
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 font-medium"
          >
            <FaEye /> View Resume
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-center text-lg text-gray-700 dark:text-gray-300"
        >
          I thrive on <strong>learning new technologies</strong>, collaborating on <strong>innovative projects</strong>, 
          and building impactful solutions in <strong>AI</strong> and <strong>software development</strong>. 
          Let’s connect to discuss <strong>projects or exciting opportunities</strong>!
        </motion.p>
      </div>
    </section>
  );
};

export default About;
