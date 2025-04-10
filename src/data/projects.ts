export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  category: 'ai' | 'ml' | 'internship' | 'research';
  date: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 'ai-internship-1',
    title: 'AI Research Intern',
    description: 'Developed and implemented deep learning models for natural language processing tasks, achieving 95% accuracy in sentiment analysis.',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'NLP', 'BERT', 'Transformers'],
    image: '/images/projects/ai-internship.jpg',
    category: 'internship',
    date: 'Summer 2023',
    highlights: [
      'Built and trained BERT-based models for sentiment analysis',
      'Implemented data preprocessing pipelines for text data',
      'Achieved 95% accuracy on sentiment classification tasks',
      'Collaborated with research team on model optimization'
    ]
  },
  {
    id: 'ml-project-1',
    title: 'Computer Vision for Medical Imaging',
    description: 'Developed a deep learning model for medical image classification using convolutional neural networks.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Medical Imaging'],
    image: '/images/projects/medical-cv.jpg',
    category: 'ml',
    date: 'Spring 2023',
    highlights: [
      'Implemented CNN architecture for medical image classification',
      'Achieved 92% accuracy in disease detection',
      'Optimized model performance for real-time inference',
      'Published research paper in IEEE conference'
    ]
  },
  {
    id: 'ai-project-1',
    title: 'Natural Language Processing System',
    description: 'Built an end-to-end NLP system for text classification and entity recognition.',
    technologies: ['Python', 'PyTorch', 'NLP', 'BERT', 'FastAPI'],
    image: '/images/projects/nlp-system.jpg',
    category: 'ai',
    date: 'Fall 2022',
    highlights: [
      'Developed custom BERT-based model architecture',
      'Implemented REST API for model deployment',
      'Achieved state-of-the-art results on benchmark datasets',
      'Optimized inference time by 40%'
    ]
  }
]; 