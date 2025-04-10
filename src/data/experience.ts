export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'internship' | 'research' | 'full-time';
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'AI Research Intern',
    company: 'Tech Research Lab',
    location: 'San Francisco, CA',
    startDate: 'June 2023',
    endDate: 'August 2023',
    type: 'internship',
    description: 'Worked on cutting-edge AI research projects focusing on natural language processing and deep learning.',
    achievements: [
      'Developed and implemented novel transformer-based architectures for text classification',
      'Achieved state-of-the-art results on benchmark datasets',
      'Published research findings in top-tier AI conference',
      'Collaborated with senior researchers on model optimization'
    ],
    technologies: ['PyTorch', 'BERT', 'Transformers', 'NLP', 'Python']
  },
  {
    id: 'exp-2',
    role: 'Machine Learning Intern',
    company: 'AI Solutions Inc.',
    location: 'Remote',
    startDate: 'January 2023',
    endDate: 'May 2023',
    type: 'internship',
    description: 'Contributed to the development of machine learning models for real-world applications.',
    achievements: [
      'Built and deployed computer vision models for object detection',
      'Optimized model inference time by 40%',
      'Implemented automated data preprocessing pipelines',
      'Created comprehensive documentation and tutorials'
    ],
    technologies: ['TensorFlow', 'OpenCV', 'Python', 'Docker', 'AWS']
  },
  {
    id: 'exp-3',
    role: 'Research Assistant',
    company: 'University AI Lab',
    location: 'Boston, MA',
    startDate: 'September 2022',
    endDate: 'December 2022',
    type: 'research',
    description: 'Conducted research in deep learning and neural networks under faculty supervision.',
    achievements: [
      'Developed novel neural network architectures',
      'Published paper in IEEE conference',
      'Presented findings at AI symposium',
      'Mentored undergraduate students'
    ],
    technologies: ['PyTorch', 'Python', 'Jupyter', 'Git', 'LaTeX']
  }
]; 