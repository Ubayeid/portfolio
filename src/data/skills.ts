export interface Skill {
  category: string;
  items: {
    name: string;
    level: 'expert' | 'advanced' | 'intermediate' | 'beginner';
    description?: string;
  }[];
}

export const skills: Skill[] = [
  {
    category: 'Machine Learning',
    items: [
      {
        name: 'Deep Learning',
        level: 'advanced',
        description: 'Experience with CNN, RNN, Transformers, and custom architectures'
      },
      {
        name: 'Natural Language Processing',
        level: 'advanced',
        description: 'BERT, GPT, text classification, sentiment analysis'
      },
      {
        name: 'Computer Vision',
        level: 'intermediate',
        description: 'Image classification, object detection, segmentation'
      },
      {
        name: 'Reinforcement Learning',
        level: 'intermediate',
        description: 'Q-learning, policy gradients, DQN'
      }
    ]
  },
  {
    category: 'AI Frameworks',
    items: [
      {
        name: 'PyTorch',
        level: 'advanced',
        description: 'Model development, training, and deployment'
      },
      {
        name: 'TensorFlow',
        level: 'intermediate',
        description: 'Keras API, model serving'
      },
      {
        name: 'Scikit-learn',
        level: 'advanced',
        description: 'Traditional ML algorithms, preprocessing'
      },
      {
        name: 'Hugging Face',
        level: 'advanced',
        description: 'Transformers, model fine-tuning'
      }
    ]
  },
  {
    category: 'Programming Languages',
    items: [
      {
        name: 'Python',
        level: 'expert',
        description: 'Data science, ML, and backend development'
      },
      {
        name: 'R',
        level: 'intermediate',
        description: 'Statistical analysis, data visualization'
      },
      {
        name: 'SQL',
        level: 'advanced',
        description: 'Data querying, optimization'
      },
      {
        name: 'JavaScript/TypeScript',
        level: 'intermediate',
        description: 'Frontend development, visualization'
      }
    ]
  },
  {
    category: 'Tools & Technologies',
    items: [
      {
        name: 'Git',
        level: 'advanced',
        description: 'Version control, collaboration'
      },
      {
        name: 'Docker',
        level: 'intermediate',
        description: 'Containerization, deployment'
      },
      {
        name: 'AWS/GCP',
        level: 'intermediate',
        description: 'Cloud services, ML deployment'
      },
      {
        name: 'Jupyter',
        level: 'expert',
        description: 'Data analysis, prototyping'
      }
    ]
  }
]; 