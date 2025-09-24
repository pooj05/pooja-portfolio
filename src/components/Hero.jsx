// Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <motion.section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <motion.h1 className="text-5xl font-bold mb-4" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>Hi, I'm Pooja Kansari</motion.h1>
      <motion.p className="text-xl mb-8" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        Full Stack Developer | React | Node.js | ML Developer
      </motion.p>
      <motion.img 
        src="/src/assets/pooja.jpg" 
        alt="Pooja Kansari" 
        className="w-64 h-64 object-cover shadow-xl border-4 border-white rounded-full" 
        initial={{ scale: 0, rotate: -15, opacity: 0 }} 
        animate={{ scale: 1, rotate: 0, opacity: 1 }} 
        transition={{ duration: 1, delay: 1 }} 
        whileHover={{ scale: 1.05, rotate: 2 }} 
      />
    </motion.section>
  );
};
export default Hero;