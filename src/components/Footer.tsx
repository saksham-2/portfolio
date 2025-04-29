
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 bg-portfolio-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold">
              Saksham<span className="text-portfolio-primary">.dev</span>
            </h2>
            <p className="mt-2 text-gray-400">Full-Stack Web Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <button
              onClick={scrollToTop}
              className="p-3 bg-portfolio-primary rounded-full hover:bg-portfolio-secondary transition-colors duration-300"
            >
              <ChevronUp size={24} />
            </button>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-400"
            >
              &copy; {new Date().getFullYear()} Saksham Tomar. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-6 mt-4 md:mt-0"
            >
              <a
                href="#home"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#projects"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
