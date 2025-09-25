// Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
const Projects = () => {
  const projects = [
    {
      title: 'Wanderlust – Online Booking Platform',
      tech: 'MERN',
      description: 'Full-featured travel booking app with secure auth, image uploads, payment mock integration, and scalable REST APIs.',
      link: '#',
      image: 'src/assets/wanderlust.png'
    },
    {
      title: 'Trading Dashboard',
      tech: 'React + Node',
      description: 'Real-time charting with WebSockets, backend microservices, and deployment with Docker & AWS.',
      link: '#',
      image: 'src/assets/trade.png'
    },
    {
      title: 'Music and Movie Recommendation',
      tech: 'MERN',
      description: "A chill indie playlist paired with a heartwarming feel-good movie for the perfect cozy night.",
      link: '#',
      image: 'src/assets/music.png'
    },
    {
      title: 'Coffee Shop Website',
      tech: 'Html+CSS+Javascript+React.js',
      description: 'A warm and inviting coffee shop website that blends rich visuals, easy navigation, and the aroma of freshly brewed experiences',
      link: '#',
      image: 'src/assets/coffee.png'
    }
  ];

  return (
    <motion.section id="projects" className="py-16 px-4 bg-gray-100 dark:bg-gray-900" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.03 }}
          >
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{proj.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">Tech Stack: {proj.tech}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{proj.description}</p>
            <a href={proj.link} className="text-blue-500 dark:text-blue-300 font-semibold hover:underline">View Project</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;