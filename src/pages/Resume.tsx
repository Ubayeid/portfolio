import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'],
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest'],
  },
];

const experience = [
  {
    company: 'Company A',
    position: 'Senior Software Engineer',
    period: '2020 - Present',
    description: [
      'Led the development of a modern web application using React and Node.js',
      'Implemented CI/CD pipelines and automated testing',
      'Mentored junior developers and conducted code reviews',
    ],
  },
  {
    company: 'Company B',
    position: 'Software Engineer',
    period: '2018 - 2020',
    description: [
      'Developed and maintained multiple web applications',
      'Collaborated with cross-functional teams',
      'Optimized application performance and user experience',
    ],
  },
];

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <section className="section">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold">Resume</h1>
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary flex items-center space-x-2"
            >
              <FiDownload className="w-5 h-5" />
              <span>Download PDF</span>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Skills</h2>
              {skills.map((skill) => (
                <div key={skill.category} className="mb-8">
                  <h3 className="text-xl font-medium mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Experience</h2>
              {experience.map((exp) => (
                <div key={exp.company} className="mb-8">
                  <h3 className="text-xl font-medium">{exp.company}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.position} | {exp.period}
                  </p>
                  <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
                    {exp.description.map((item, index) => (
                      <li key={index} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Resume; 