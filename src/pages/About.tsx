const About = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Express', 'Django', 'REST APIs'],
    },
    {
      category: 'DevOps & Tools',
      items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
    },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-4">
            I'm a passionate Full Stack Developer with a strong focus on creating efficient,
            scalable, and user-friendly applications. With expertise in both frontend and
            backend technologies, I strive to deliver high-quality solutions that meet
            modern web standards.
          </p>
          <p className="text-lg">
            My journey in software development began with a curiosity for technology and
            a desire to solve real-world problems. I'm constantly learning and adapting
            to new technologies to stay at the forefront of web development.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Software Developer</h3>
            <p className="text-gray-300">Company Name • 2020 - Present</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                Developed and maintained web applications using React and Node.js
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                Implemented RESTful APIs and database solutions
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                Collaborated with cross-functional teams to deliver high-quality software
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 