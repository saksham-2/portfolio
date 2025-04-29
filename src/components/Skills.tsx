
import { motion } from "framer-motion";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    icon?: string;
    color?: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React.js", color: "#61DAFB" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Recoil", color: "#3578E5" },
      { name: "Framer Motion", color: "#FF4395" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", color: "#339933" },
      { name: "Express.js", color: "#000000" },
      { name: "MongoDB", color: "#47A248" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Prisma ORM", color: "#2D3748" },
      { name: "Firebase", color: "#FFCA28" },
    ],
  },
  {
    name: "Others",
    skills: [
      { name: "JWT", color: "#000000" },
      { name: "Bcrypt", color: "#6B4FBB" },
      { name: "Redux Toolkit", color: "#764ABC" },
      { name: "CI/CD", color: "#FF6B6B" },
      { name: "Git & GitHub", color: "#181717" },
      { name: "RESTful API", color: "#38BDF8" },
    ],
  },
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My Tech Stack
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            These are the technologies I specialize in for building modern, scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.name}
              </h3>

              <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariant}
                    className="tech-card hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div 
                      className="w-3 h-3 rounded-full mb-2"
                      style={{ backgroundColor: skill.color }}
                    />
                    <h4 className="text-white text-center font-medium">{skill.name}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Hosting & Deployment</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["Vercel", "Render", "Railway", "Cyclic", "MongoDB Atlas"].map(
              (platform, index) => (
                <motion.div
                  key={index}
                  className="tech-card px-6 py-3 hover:bg-portfolio-primary/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white font-medium">{platform}</span>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
