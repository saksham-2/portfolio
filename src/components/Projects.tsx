
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  liveLink?: string;
  githubLink?: string;
  features: string[];
}

const projectsData: ProjectProps[] = [
  {
    title: "Chat App",
    description: "A real-time chat application supporting users with WebSocket. Features modern UI and real-time message sending.",
    techStack: ["React", "Node.js", "Express.js", "WebSocket", "MongoDB", "JWT", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/saksham-2/blood-donation.git",
    features: [
      "Simple login and chatting system",
      "Real-time message sending",
      "Modern and clean UI",
      "Optimized WebSocket implementation with 40% reduced latency"
    ]
  },
  {
    title: "To-Do App",
    description: "A comprehensive task management application with authentication, task management, and notification features.",
    techStack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/saksham-2/web-taskmanager.git",
    features: [
      "Login/signup authentication",
      "Add, edit, delete todos",
      "Set due dates",
      "Local notifications using Firebase",
      "Responsive dashboard"
    ]
  },
  {
    title: "Quiz System",
    description: "A full-stack quiz platform allowing users to create, take, and share quizzes with an intuitive interface.",
    techStack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT", "Redux Toolkit", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/saksham-2/Quiz-App.git",
    features: [
      "Authentication flow",
      "Create quizzes with questions",
      "Generate and share quiz codes",
      "View quiz results and scores",
      "35% faster response time through optimized queries"
    ]
  },
  {
    title: "Blood Donation App",
    description: "A comprehensive blood donation management application with donor search capabilities and user profiles.",
    techStack: ["React", "TypeScript", "Recoil", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/saksham-2/blood-donation.git",
    features: [
      "User registration/login",
      "Search donors by blood group",
      "Manage donor profiles",
      "TypeScript-based robust architecture",
      "Clean and responsive UI"
    ]
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-portfolio-primary">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the real-world applications I've built using modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="p-6 bg-white dark:bg-gray-800 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-portfolio-secondary mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4 flex-grow">
                  <h4 className="font-semibold text-portfolio-primary mb-2">Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-portfolio-primary mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="badge bg-portfolio-primary/10 text-portfolio-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-auto">
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-portfolio-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={18} className="mr-1" />
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-portfolio-primary hover:text-portfolio-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
