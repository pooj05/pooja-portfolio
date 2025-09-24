import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiExpress,
  SiCplusplus,
  SiMysql,
  SiEjs,
  SiTensorflow,
  SiCloudinary,
  SiJsonwebtokens,
  SiPassport,
  SiChartdotjs,
} from "react-icons/si";

const Skills = () => {
  const [hovered, setHovered] = useState(null);

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
    { name: "EJS", icon: <SiEjs className="text-red-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "Machine Learning", icon: <SiTensorflow className="text-orange-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
    { name: "DSA in C++", icon: <SiCplusplus className="text-blue-700" /> },
    { name: "MySQL", icon: <SiMysql className="text-sky-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" /> },
    { name: "Cloudinary", icon: <SiCloudinary className="text-blue-500" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-yellow-500" /> },
    { name: "Passport.js", icon: <SiPassport className="text-blue-700" /> },
    { name: "Chart.js", icon: <SiChartdotjs className="text-indigo-500" /> },
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="flex flex-col items-center justify-center p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-all cursor-pointer"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p
              className={`text-lg font-semibold transition-colors ${
                hovered === index
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
