// Certificates.jsx
import { motion } from "framer-motion";
import { FaCertificate, FaPython, FaCode, FaRobot, FaLaptopCode } from "react-icons/fa";

const Certificates = () => {
  const certificates = [
    {
      title: "Full Stack Development Course",
      provider: "Completed in June 2025",
      icon: <FaLaptopCode className="text-blue-600 dark:text-blue-400 text-3xl" />,
    },
    {
      title: "Python with Machine Learning",
      provider: "Completed in July 2025",
      icon: <FaPython className="text-yellow-500 dark:text-yellow-400 text-3xl" />,
    },
    {
      title: "AI-ML Virtual Internship",
      provider: "AICTE & Google Developer | June 2024",
      icon: <FaRobot className="text-green-500 dark:text-green-400 text-3xl" />,
    },
    {
      title: "Postman API Fundamentals",
      provider: "Certified by Postman",
      icon: <FaCode className="text-orange-500 dark:text-orange-400 text-3xl" />,
    },
    {
      title: "Generative AI Certificate",
      provider: "Certified by [Platform]",
      icon: <FaCertificate className="text-purple-600 dark:text-purple-400 text-3xl" />,
    },
  ];

  return (
    <motion.section
      id="certificates"
      className="py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">
        Certificates
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0">{cert.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{cert.provider}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certificates;
