// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaGraduationCap } from 'react-icons/fa';


// const Education = () => {
// const [open, setOpen] = useState(null);
// const degrees = [
// { degree: 'B.Tech in Computer Science', university: 'XYZ University', year: '2025', details: 'Focused on web development, cloud computing, and DevOps practices.' }
// ];


// return (
// <motion.section id="education" className="py-16 px-4 bg-gray-50 dark:bg-gray-900" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
// <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">Education</h2>
// <div className="max-w-5xl mx-auto space-y-6">
// {degrees.map((d, index) => (
// <motion.div key={d.degree} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
// <button onClick={() => setOpen(open === index ? null : index)} className="w-full text-left text-2xl font-semibold text-blue-600 dark:text-blue-400 flex justify-between items-center">
// <FaGraduationCap className="mr-2" /> {d.degree} <span>{open === index ? '-' : '+'}</span>
// </button>
// <AnimatePresence>
// {open === index && (
// <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-4 text-gray-700 dark:text-gray-300">
// <p>{d.university} | {d.year}</p>
// <p>{d.details}</p>
// </motion.div>
// )}
// </AnimatePresence>
// </motion.div>
// ))}
// </div>
// </motion.section>
// );
// };
// export default Education;
// Education.jsx
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      university: "Shri Shankaracharya Technical Campus",
      year: "Pre-final Year (Expected 2026)",
      details:
        "As a pre-final year B.Tech student specializing in AI & ML, I am passionate about solving real-world problems using technology. My expertise spans full stack development, machine learning with Python, and advanced data structures in C++.",
      icon: <FaGraduationCap className="text-blue-600 dark:text-blue-400 text-4xl" />,
    },
      {
      degree: "CBSE 12th",
      university: "Krishna Public  International School",
      year: "PCM-2021",
      details:
        "I studied at Krishna Public International School, where I pursued the PCM stream and secured 90.02%. Along with my academics, I actively participated in extracurricular activities that helped me develop leadership and problem-solving skills.",
      icon: <FaGraduationCap className="text-blue-600 dark:text-blue-400 text-4xl" />,
    },
  ];

  return (
    <motion.section
      id="education"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
        Education
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 flex items-start gap-6 hover:shadow-2xl transition duration-300"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0">{edu.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {edu.university} | {edu.year}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {edu.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
