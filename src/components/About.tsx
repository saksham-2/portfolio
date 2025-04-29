
import { motion } from "framer-motion";
import { BookOpen, Award, Users, Code } from "lucide-react";

const About = () => {
  const info = [
    {
      title: "Education",
      description: "B.Tech in Computer Science & Engineering",
      detail: "Medi-Caps University, Indore (2022-2026)",
      icon: <BookOpen className="w-6 h-6 text-portfolio-primary" />,
    },
    {
      title: "Problems Solved",
      description: "Data Structures & Algorithms",
      detail: "GeeksforGeeks",
      icon: <Code className="w-6 h-6 text-portfolio-primary" />,
    },
    {
      title: "Coursework",
      description: "CS Fundamentals",
      detail: "DSA, OS, Networks, DBMS, Software Engineering",
      icon: <Award className="w-6 h-6 text-portfolio-primary" />,
    },
    {
      title: "Skills & Strengths",
      description: "Full-Stack Development",
      detail: "MERN Stack, PostgreSQL, TypeScript",
      icon: <Users className="w-6 h-6 text-portfolio-primary" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-portfolio-primary">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn more about my background, education, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-portfolio-secondary">
              Hi, I'm Saksham Tomar
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
  I'm a passionate full-stack developer who enjoys turning real-world problems into elegant, high-performing web applications. 
  I specialize in the MERN stack and modern web technologies, with a strong focus on building smooth, secure, and scalable user experiences.
</p>

<p className="text-gray-600 dark:text-gray-300 mb-4">
  Currently pursuing my B.Tech in Computer Science & Engineering at Medi-Caps University, Indore, I'm actively enhancing my technical foundation through 
  coursework in Data Structures & Algorithms, Operating Systems, Computer Networks, Software Engineering, and DBMS.
</p>

<p className="text-gray-600 dark:text-gray-300 mb-4">
  My core strengths include full-stack development using the MERN stack and PostgreSQL, type-safe coding with TypeScript, efficient state management using Recoil and Redux Toolkit, 
  and crafting responsive, intuitive UIs with modern frontend tools.
</p>

<p className="text-gray-600 dark:text-gray-300 mb-6">
  I'm also expanding my expertise in cutting-edge technologies including Next.js for server-side rendering, cloud computing platforms like AWS and Firebase, 
  and DevOps practices such as CI/CD pipelines and containerization. I'm continuously evolving as a developer and staying up-to-date with the latest trends in web development.
</p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-portfolio-primary text-white font-medium rounded-md hover:bg-portfolio-secondary transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 border border-portfolio-primary text-portfolio-primary font-medium rounded-md hover:bg-portfolio-primary hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See My Work
              </motion.a>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {info.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-xl font-semibold mb-2 text-portfolio-secondary">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {item.description}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
