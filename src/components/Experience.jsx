// // Experience.jsx
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaBriefcase } from 'react-icons/fa';

// const Experience = () => {
//   const [open, setOpen] = useState(null);
//   const experiences = [
//     { title: 'Full Stack Developer', company: 'Tech Solutions', year: '2024 - Present', details: 'Developed scalable web applications using React, Node.js, and AWS. Implemented REST APIs and improved application performance.' },
//     { title: 'Frontend Developer Intern', company: 'Web Innovators', year: '2023 - 2024', details: 'Worked on responsive web designs, optimized UI performance, and collaborated with backend teams to integrate APIs.' }
//   ];

//   return (
//     <motion.section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-900" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//       <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">Experience</h2>
//       <div className="max-w-5xl mx-auto space-y-6">
//         {experiences.map((exp, index) => (
//           <motion.div key={exp.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
//             <button onClick={() => setOpen(open === index ? null : index)} className="w-full text-left text-2xl font-semibold text-blue-600 dark:text-blue-400 flex justify-between items-center">
//               <FaBriefcase className="mr-2" /> {exp.title} <span>{open === index ? '-' : '+'}</span>
//             </button>
//             <AnimatePresence>
//               {open === index && (
//                 <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-4 text-gray-700 dark:text-gray-300">
//                   <p><strong>Company:</strong> {exp.company}</p>
//                   <p><strong>Year:</strong> {exp.year}</p>
//                   <p>{exp.details}</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Experience;
// Experience.jsx
import { motion } from "framer-motion";
import { FaGoogle, FaRobot } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "AI-ML Virtual Internship",
      company: "AICTE - Google",
      duration: "April 2024 - May 2024",
      project: "Object Detection Project",
      icon: <FaGoogle className="text-red-500 text-4xl" />,
      details:
        "Worked on AI/ML concepts with a focus on computer vision. Built an object detection project using modern ML libraries and techniques.",
    },
  ];

  return (
    <motion.section
      id="experience"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
        Experience
      </h2>

      <div className="max-w-5xl mx-auto relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300 dark:bg-blue-700 rounded"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`mb-12 flex items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
            initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-1/2"></div>
            <div className="relative w-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
              <div className="absolute -left-6 top-6 bg-blue-600 dark:bg-blue-500 p-3 rounded-full text-white">
                {exp.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.company} | {exp.duration}
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                <FaRobot className="inline mr-2 text-green-500" />
                <strong>Project:</strong> {exp.project}
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{exp.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
