import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { experiences } from './data/experience';
import { projects } from './data/projects';
import { skills } from './data/skills';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

// Animation variants
const pageVariants = {
  initial: {
    opacity: 0,
    x: -20
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.5
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>

        <div className="min-h-screen bg-gray-900 text-white">
          {/* Navigation */}
          <motion.nav 
            className={`fixed top-0 left-0 w-full p-4 z-50 transition-colors duration-300 ${
              isScrolled ? 'bg-gray-800/90 backdrop-blur-sm' : 'bg-gray-800'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto flex justify-between items-center">
              <motion.h1 
                className="text-2xl font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                AI Portfolio
              </motion.h1>
              <div className="space-x-4">
                {['about', 'experience', 'projects', 'skills'].map((section) => (
                  <motion.button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`capitalize hover:text-blue-400 transition-colors ${
                      activeSection === section ? 'text-blue-400' : ''
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.nav>

          {/* Main Content */}
          <main className="container mx-auto px-4 pt-20">
            <AnimatePresence mode="wait">
              {/* About Section */}
              {activeSection === 'about' && (
                <motion.section
                  key="about"
                  className="py-12"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <motion.h2 
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    About Me
                  </motion.h2>
                  <motion.div 
                    className="bg-gray-800 p-8 rounded-lg shadow-lg"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Profile Summary */}
                      <motion.div 
                        className="md:col-span-2 space-y-6"
                        variants={itemVariants}
                      >
                        <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
                          I am a passionate AI/ML engineer with a strong foundation in deep learning, 
                          natural language processing, and computer vision. My journey in artificial 
                          intelligence began during my undergraduate studies, where I developed a keen 
                          interest in solving complex problems using machine learning techniques.
                        </motion.p>
                        <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
                          With experience in both research and industry settings, I've worked on 
                          cutting-edge AI projects ranging from natural language understanding to 
                          computer vision applications. I'm particularly interested in developing 
                          innovative solutions that bridge the gap between research and real-world 
                          applications.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                          <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
                          <ul className="space-y-2">
                            {[
                              'Developing scalable ML models for production environments',
                              'Exploring transformer architectures for NLP tasks',
                              'Implementing computer vision solutions for real-time applications',
                              'Contributing to open-source AI projects'
                            ].map((focus, index) => (
                              <motion.li
                                key={index}
                                className="flex items-center space-x-2"
                                variants={itemVariants}
                                whileHover={{ x: 10 }}
                              >
                                <span className="text-blue-400">▹</span>
                                <span>{focus}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </motion.div>

                      {/* Quick Facts */}
                      <motion.div 
                        className="space-y-6"
                        variants={itemVariants}
                      >
                        <motion.div variants={itemVariants}>
                          <h3 className="text-xl font-semibold mb-4">Education</h3>
                          <div className="space-y-2">
                            <p className="font-medium">B.S. Computer Science</p>
                            <p className="text-gray-400">AI Specialization</p>
                            <p className="text-gray-400">GPA: 3.8/4.0</p>
                          </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <h3 className="text-xl font-semibold mb-4">Research Interests</h3>
                          <div className="flex flex-wrap gap-2">
                            {[
                              'Natural Language Processing',
                              'Computer Vision',
                              'Deep Learning',
                              'Reinforcement Learning',
                              'Transfer Learning',
                              'Model Optimization'
                            ].map((interest, index) => (
                              <motion.span
                                key={index}
                                className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm"
                                whileHover={{ scale: 1.05 }}
                              >
                                {interest}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                          <div className="space-y-2">
                            {[
                              { name: 'Python', level: 'Expert' },
                              { name: 'PyTorch', level: 'Advanced' },
                              { name: 'TensorFlow', level: 'Advanced' },
                              { name: 'NLP', level: 'Advanced' },
                              { name: 'Computer Vision', level: 'Intermediate' }
                            ].map((skill, index) => (
                              <motion.div
                                key={index}
                                className="flex justify-between items-center"
                                variants={itemVariants}
                              >
                                <span>{skill.name}</span>
                                <span className="text-gray-400">{skill.level}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.section>
              )}

              {/* Experience Section */}
              {activeSection === 'experience' && (
                <motion.section
                  key="experience"
                  className="py-12"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <motion.h2 
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Experience
                  </motion.h2>
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={exp.id}
                        className="bg-gray-800 p-6 rounded-lg"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.02 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <motion.h3 className="text-xl font-semibold" variants={itemVariants}>
                              {exp.role}
                            </motion.h3>
                            <motion.p className="text-gray-400" variants={itemVariants}>
                              {exp.company}
                            </motion.p>
                          </div>
                          <div className="text-right">
                            <motion.p variants={itemVariants}>{exp.location}</motion.p>
                            <motion.p className="text-gray-400" variants={itemVariants}>
                              {exp.startDate} - {exp.endDate}
                            </motion.p>
                          </div>
                        </div>
                        <motion.p className="my-4" variants={itemVariants}>
                          {exp.description}
                        </motion.p>
                        <motion.div className="mb-4" variants={itemVariants}>
                          <h4 className="font-semibold mb-2">Key Achievements:</h4>
                          <ul className="list-disc list-inside">
                            {exp.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ x: 10 }}
                              >
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                        <motion.div className="flex flex-wrap gap-2" variants={itemVariants}>
                          {exp.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              className="bg-blue-500 px-3 py-1 rounded-full text-sm"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Projects Section */}
              {activeSection === 'projects' && (
                <motion.section
                  key="projects"
                  className="py-12"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <motion.h2 
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Projects
                  </motion.h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        className="bg-gray-800 rounded-lg overflow-hidden"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.02 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                          whileHover={{ scale: 1.05 }}
                        />
                        <div className="p-6">
                          <motion.h3 className="text-xl font-semibold mb-2" variants={itemVariants}>
                            {project.title}
                          </motion.h3>
                          <motion.p className="text-gray-400 mb-4" variants={itemVariants}>
                            {project.description}
                          </motion.p>
                          <motion.div className="mb-4" variants={itemVariants}>
                            <h4 className="font-semibold mb-2">Highlights:</h4>
                            <ul className="list-disc list-inside">
                              {project.highlights.map((highlight, idx) => (
                                <motion.li
                                  key={idx}
                                  variants={itemVariants}
                                  whileHover={{ x: 10 }}
                                >
                                  {highlight}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                          <motion.div className="flex flex-wrap gap-2 mb-4" variants={itemVariants}>
                            {project.technologies.map((tech) => (
                              <motion.span
                                key={tech}
                                className="bg-blue-500 px-3 py-1 rounded-full text-sm"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </motion.div>
                          <motion.div className="flex space-x-4" variants={itemVariants}>
                            {project.github && (
                              <motion.a
                                href={project.github}
                                className="text-blue-400 hover:text-blue-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                GitHub
                              </motion.a>
                            )}
                            {project.demo && (
                              <motion.a
                                href={project.demo}
                                className="text-blue-400 hover:text-blue-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                Demo
                              </motion.a>
                            )}
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Skills Section */}
              {activeSection === 'skills' && (
                <motion.section
                  key="skills"
                  className="py-12"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <motion.h2 
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Skills
                  </motion.h2>
                  <div className="space-y-8">
                    {skills.map((category, index) => (
                      <motion.div
                        key={category.category}
                        className="bg-gray-800 p-6 rounded-lg"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.02 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.h3 className="text-xl font-semibold mb-4" variants={itemVariants}>
                          {category.category}
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.items.map((skill) => (
                            <motion.div
                              key={skill.name}
                              className="flex justify-between items-center"
                              variants={itemVariants}
                              whileHover={{ x: 10 }}
                            >
                              <div>
                                <h4 className="font-semibold">{skill.name}</h4>
                                <p className="text-gray-400 text-sm">{skill.description}</p>
                              </div>
                              <div className="flex space-x-1">
                                {[...Array(4)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className={`w-3 h-3 rounded-full ${
                                      i <
                                      (skill.level === 'expert'
                                        ? 4
                                        : skill.level === 'advanced'
                                        ? 3
                                        : skill.level === 'intermediate'
                                        ? 2
                                        : 1)
                                      ? 'bg-blue-500'
                                      : 'bg-gray-600'
                                    }`}
                                    whileHover={{ scale: 1.2 }}
                                  />
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </main>

          {/* Footer */}
          <motion.footer 
            className="bg-gray-800 py-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="container mx-auto px-4 text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                © 2024 AI Portfolio. All rights reserved.
              </motion.p>
              <motion.div 
                className="mt-4 space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  href="https://github.com/yourusername"
                  className="text-blue-400 hover:text-blue-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  className="text-blue-400 hover:text-blue-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href="mailto:your.email@example.com"
                  className="text-blue-400 hover:text-blue-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Email
                </motion.a>
              </motion.div>
            </div>
          </motion.footer>
        </div>
      </div>
    </Router>
  );
}

export default App; 