import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Project 1',
    description: 'A modern web application built with React and Node.js',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/project1',
    live: 'https://project1.com',
    image: '/project1.jpg',
  },
  {
    title: 'Project 2',
    description: 'A mobile-responsive e-commerce platform',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com',
    image: '/project2.jpg',
  },
  {
    title: 'Project 3',
    description: 'A real-time chat application with WebSocket',
    tech: ['React', 'Socket.io', 'Express', 'Redis'],
    github: 'https://github.com/yourusername/project3',
    live: 'https://project3.com',
    image: '/project3.jpg',
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <section className="section">
        <div className="container">
          <h1 className="text-4xl font-bold mb-12 text-center">Featured Projects</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects; 