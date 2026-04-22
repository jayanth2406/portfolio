export const projects = [
  {
    id: 'polaris',
    title: 'Polaris',
    subtitle: 'AI Coding Agent',
    description:
      'A coding assistant that combines LLM APIs with a fast web interface. It supports persistent sessions, clean prompt workflows, and a practical developer experience focused on daily productivity.',
    tags: ['React', 'Node.js', 'LLM APIs', 'Full-Stack', 'Prompt Engineering'],
    github: 'https://github.com/jayanth2406/polaris',
    year: '2026',
    status: 'Live',
    icon: '⚡',
    accentColor: '#6366f1',
    gradient: 'from-blue-900/40 to-indigo-900/20',
  },
  {
    id: 'moviemate',
    title: 'MovieMate',
    subtitle: 'Conversational Movie AI',
    description:
      'A conversational movie discovery app that uses SentenceTransformers and FAISS for semantic search, blends metadata filters like genre and year, and keeps context across turns in a simple Gradio interface.',
    tags: ['Python', 'FAISS', 'RAG', 'SentenceTransformers', 'Gradio', 'SQLite', 'LLM'],
    github: 'https://github.com/jayanth2406/MovieMate-conversational-AI',
    year: '2026',
    status: 'Complete',
    icon: '🎬',
    accentColor: '#f43f5e',
    gradient: 'from-rose-900/40 to-orange-900/20',
  },
  {
    id: 'contagion',
    title: 'Digital Contagion Simulator',
    subtitle: 'Agent-Based Stress Propagation',
    description:
      'An agent-based Python simulation that studies how stress spreads in social networks, and tests intervention strategies to better understand emotional contagion in student environments.',
    tags: ['Python', 'Agent-Based Modeling', 'Network Analysis', 'Simulation'],
    github: 'https://github.com/amitverma-cf/sc-digital-contagion-simulator',
    year: '2025',
    status: 'Research',
    icon: '🧬',
    accentColor: '#10b981',
    gradient: 'from-emerald-900/40 to-teal-900/20',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'C / C++', 'JavaScript', 'TypeScript', 'Java'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'HTML / CSS', 'Figma'],
  },
  {
    category: 'Backend & Data',
    items: ['Node.js', 'Convex', 'REST APIs', 'SQLite', 'Git'],
  },
  {
    category: 'AI Engineering',
    items: ['LLM APIs', 'RAG Pipelines', 'Prompt Engineering', 'Vector Search'],
  },
]

export const social = {
  github: 'https://github.com/jayanth2406',
  linkedin: 'https://www.linkedin.com/in/jayanth-reddy-yerabolu-9980012a7/',
  email: 'jryerabolu@gmail.com',
}

export const personal = {
  name: 'Jayanth Reddy Yerabolu',
  rollNo: 'SE23UCSE080',
  university: 'Mahindra University, Hyderabad',
  degree: 'B.Tech Computer Science and Engineering',
  year: '3rd Year (2023 - Present)',
  cgpa: '9.49 / 10',
  location: 'Hyderabad, India',
  phone: '+91 8074622662',
  primaryEmail: 'jryerabolu@gmail.com',
  universityEmail: 'se23ucse080@mahindrauniversity.edu.in',
}

export const profileImagePath = `${import.meta.env.BASE_URL}img/jayanth.png`
