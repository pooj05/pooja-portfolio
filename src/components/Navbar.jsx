// Navbar.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = ['hero', 'about', 'skills', 'education', 'experience', 'contact'];
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className="flex justify-between items-center py-4 px-8 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-900 dark:to-gray-800 shadow-lg fixed w-full z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={() => handleScroll('hero')}>Pooja Kansari</h1>
      <div className="hidden md:flex gap-6">
        {sections.map(sec => (
          <button key={sec} onClick={() => handleScroll(sec)} className="text-white hover:text-gray-200 transition capitalize">{sec}</button>
        ))}
        <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 rounded bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white font-bold">Menu</button>
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-600 dark:bg-gray-800 flex flex-col items-center py-4 gap-4 md:hidden">
          {sections.map(sec => (
            <button key={sec} onClick={() => handleScroll(sec)} className="text-white hover:text-gray-200 transition capitalize">{sec}</button>
          ))}
        </div>
      )}
    </motion.nav>
  );
};
export default Navbar;

