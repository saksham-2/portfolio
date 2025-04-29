
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg">
      <div className="container mx-auto px-4 py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-portfolio-accent mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Saksham Tomar
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
              Full-Stack Developer
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              I build beautiful, responsive web applications using modern technologies.
              Specialized in MERN stack and PostgreSQL with Prisma ORM.
            </p>
            
            <div className="flex space-x-4 mb-8">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-portfolio-dark rounded-full hover:bg-portfolio-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} className="text-white" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-portfolio-dark rounded-full hover:bg-portfolio-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} className="text-white" />
              </motion.a>
              <motion.a
                href="mailto:sakshtomar07@gmail.com"
                className="p-2 bg-portfolio-dark rounded-full hover:bg-portfolio-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} className="text-white" />
              </motion.a>
            </div>
            
            <div className="flex space-x-4">
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-portfolio-primary text-white font-medium rounded-md hover:bg-portfolio-secondary transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-portfolio-dark transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-portfolio-secondary/30 absolute top-0 left-0 animate-pulse"></div>
              <div className="w-80 h-80 rounded-full bg-portfolio-primary/20 absolute -top-4 -left-4"></div>
              <div className="w-64 h-64 rounded-full bg-portfolio-accent/30 absolute top-8 left-8"></div>
              <div className="z-10 relative">
                <div className="w-80 h-80 rounded-full bg-portfolio-dark border-4 border-portfolio-primary/50 overflow-hidden flex items-center justify-center">
                  <div className="text-7xl font-bold text-white opacity-80">ST</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <a href="#projects" className="text-white">
            <ChevronDown size={36} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
