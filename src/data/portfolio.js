// ============================================================
//  PORTFOLIO DATA — Edit everything about yourself right here
//  No need to touch any component files.
// ============================================================

export const personal = {
  name:         'MEGHARAJ D N',
  initials:     'MJ',
  firstName:    'Megharaj',
  title:        'AI & Machine Learning Student',
  subtitle:     'Aspiring Software Engineer',
  location:     'Karnataka, India',
  email:        'megharajdngowda@gmail.com',         // ← change this
  phone:        '6362794860',                                // ← optional
  github:       'https://github.com/mjgowdru',  // ← change this
  linkedin:     'https://www.linkedin.com/in/megharaj-d-n-9a1a4a386/', // ← change this
  resumeUrl:    '/Megharaj_D_N_Resume.pdf',                     // place resume.pdf in /public
  profilePhoto: '/profile.jpg',                    // place your photo in /public
  available:    true,                              // toggle the green "available" badge
}

// Short lines that cycle in the typewriter in the Hero
export const roles = [
  'AI & ML Student',
  'Python Developer',
  'NLP Enthusiast',
  'Backend Engineer',
  'Problem Solver',
]

// One-line tagline shown under the typewriter
export const tagline =
  'Building intelligent systems with Python, NLP, and scalable backend technologies.'

// A short personal quote (shown in the About section)
export const personalQuote =
  '"I believe every real-world problem has a data-driven solution waiting to be found."'

// About section bio (split into two paragraphs)
export const bio = {
  p1: `I'm a B.E. student in my 6th semester at a VTU-affiliated college, pursuing Computer Science through a Lateral Entry (Diploma) pathway. I started with a diploma, fell in love with programming, and never looked back.`,
  p2: `My core interest is where artificial intelligence meets practical engineering. I've shipped real projects — a semantic plagiarism detector using Sentence-BERT and a blockchain-based certificate verification system — and I'm actively preparing for software engineering roles at product-based companies.`,
}

// Education details
export const education = {
  degree:     'B.E. Computer Science (Lateral Entry)',
  semester:   '7th Semester',
  university: 'VTU-Affiliated College',
  diploma:    'Diploma in Computer Science',
}

// ── SKILLS ─────────────────────────────────────────────────
// level: 0–100 (shown as an animated progress bar)
export const skillGroups = [
  {
    category: 'Programming & Databases',
    emoji: '',
    skills: [
      { name: 'Python',   level: 88 },
      { name: 'SQL',      level: 72 },
      { name: 'MongoDB',  level: 68 },
      { name: 'Java',     level: 60 },
    ],
  },
  {
    category: 'AI & Machine Learning',
    emoji: '',
    skills: [
      { name: 'Machine Learning',  level: 82 },
      { name: 'Deep Learning',     level: 70 },
      { name: 'NLP',               level: 80 },
      { name: 'Generative AI',     level: 65 },
      { name: 'Scikit-learn',      level: 78 },
      { name: 'PyTorch',           level: 62 },
      { name: 'Sentence-BERT',     level: 76 },
      { name: 'TF-IDF',            level: 74 },
    ],
  },
  {
    category: 'Web & Backend',
    emoji: '',
    skills: [
      { name: 'Flask',        level: 80 },
      { name: 'REST APIs',    level: 76 },
      { name: 'Django',        level: 65 },
      { name: 'Tailwind CSS', level: 70 },
    ],
  },
  {
    category: 'Tools & Ecosystem',
    emoji: '',
    skills: [
      { name: 'Git & GitHub',     level: 80 },
      { name: 'VS Code',          level: 90 },
      { name: 'Jupyter Notebook', level: 82 },
      { name: 'Streamlit',        level: 68 },
    ],
  },
]

// Extra tech shown as pills at the bottom of Skills section
export const extraTech = [
  'NumPy', 'Pandas', 'Solidity', 'Web3.py', 'Hardhat', 'Ganache', 'QR Code', 'NLTK',
]

// ── PROJECTS ───────────────────────────────────────────────
export const projects = [
  {
    id:          'plagiarism-detector',
    label:       'Featured Project · NLP',
    title:       'AI Plagiarism Detector',
    subtitle:    'Semantic Document Similarity Engine',
    description: `A semantic plagiarism detection system powered by Sentence-BERT embeddings.
Instead of keyword matching, it captures deep linguistic meaning through contextual
embeddings and computes cosine similarity across document pairs — delivering
explainable, threshold-based plagiarism reports.`,
    highlights: [
      'Sentence-BERT (SBERT) contextual embeddings for semantic understanding',
      'Cosine similarity matrix for accurate multi-document comparison',
      'Fully offline — no external API dependency required',
      'Threshold-based classification with human-readable reports',
      'Flask web interface for real-time document upload & analysis',
    ],
    tech:        ['Python', 'Flask', 'SBERT', 'Scikit-learn', 'NumPy', 'NLP'],
    githubUrl:   'https://github.com/mjgowdru',  // ← your repo link
    liveUrl:     '',                                // ← leave empty if no demo
    accentColor: '#F5C542',
    icon:        '🔍',
  },
  {
    id:          'blockchain-cert',
    label:       'Featured Project · Web3',
    title:       'Certificate Verification System',
    subtitle:    'Powered by Blockchain Technology',
    description: `A decentralized credential verification platform built on Ethereum smart
contracts. Institutions issue certificates stored on-chain; anyone can verify
authenticity via QR code scanning — eliminating forgery and manual verification.`,
    highlights: [
      'Solidity smart contracts deployed via Hardhat + Ganache local blockchain',
      'Web3.py integration for seamless Python ↔ blockchain communication',
      'Flask backend with MongoDB for off-chain metadata storage',
      'QR code generation for instant, shareable certificate verification',
      'Student photo verification for added identity assurance',
      'React + Tailwind CSS responsive front-end dashboard',
    ],
    tech:        ['Solidity', 'Flask', 'Web3.py', 'MongoDB', 'React', 'Tailwind CSS'],
    githubUrl:   'https://github.com/mjgowdru',  // ← your repo link
    liveUrl:     '',
    accentColor: '#63b3ed',
    icon:        '',
  },
]

// ── LEARNING JOURNEY ───────────────────────────────────────
// status: 'Active' | 'In Progress' | 'Upcoming' | 'Done'
export const journeyItems = [
  {
    phase:       'Phase 1 · Foundation',
    title:       'Data Structures & Algorithms',
    description: 'Building a strong CS foundation — arrays, linked lists, trees, graphs, dynamic programming, and complexity analysis. Solving problems consistently to build interview-readiness.',
    status:      'Active',
    tags:        ['LeetCode', 'Problem Solving', 'Time Complexity'],
  },
  {
    phase:       'Phase 2 · Language Depth',
    title:       'Java Fundamentals',
    description: 'Exploring OOP through Java — inheritance, polymorphism, collections, and design patterns to understand enterprise software architecture and product-company codebases.',
    status:      'In Progress',
    tags:        ['OOP', 'Java', 'Design Patterns'],
  },
  {
    phase:       'Phase 3 · Specialization',
    title:       'Machine Learning & NLP',
    description: 'Deep-diving into supervised & unsupervised learning, neural networks, transformer architectures, and NLP. Applied through real projects like the SBERT plagiarism detector.',
    status:      'Active',
    tags:        ['PyTorch', 'Transformers', 'SBERT', 'LLMs'],
  },
  {
    phase:       'Phase 4 · Application',
    title:       'Full-Stack Development',
    description: 'Connecting backend logic to polished frontends — Flask APIs, React components, MongoDB, and deployment pipelines. Building complete, production-grade applications.',
    status:      'Active',
    tags:        ['Flask', 'React', 'MongoDB', 'REST APIs'],
  },
  {
    phase:       'Phase 5 · Career Prep',
    title:       'Product-Based Company Preparation',
    description: 'Systematically preparing for SWE roles — system design, behavioral interviews, competitive programming, and mock sessions targeted at product-based companies.',
    status:      'Upcoming',
    tags:        ['System Design', 'CS Fundamentals', 'Interviews'],
  },
]

// ── EXPERIENCE / ACTIVITIES ────────────────────────────────
// status: 'Open' | 'Ongoing' | 'Upcoming' | 'Active' | 'Learning'
export const activities = [
  {
    category:    'Internships',
    title:       'Seeking Opportunities',
    description: 'Actively looking for internships in AI/ML engineering, backend development, and full-stack roles. I bring hands-on project experience with Python, Flask, NLP, and blockchain systems.',
    note:        'Available for Summer / Winter internships',
    status:      'Open',
  },
  {
    category:    'Academic Projects',
    title:       'University & Self-Initiated Projects',
    description: 'Beyond coursework, I independently conceptualize and build projects that solve real problems — from semantic plagiarism detection to decentralized certificate systems.',
    note:        '2 major projects completed · More in pipeline',
    status:      'Ongoing',
  },
  {
    category:    'Hackathons',
    title:       'Competitive Building',
    description: 'Interested in participating in hackathons to apply problem-solving under time constraints, collaborate cross-functionally, and prototype innovative AI-driven solutions.',
    note:        'Looking to participate in upcoming events',
    status:      'Upcoming',
  },
  {
    category:    'Technical Events',
    title:       'Community & Knowledge Sharing',
    description: 'Engaged in the college technical community through workshops, seminars, and tech talks. Interested in presenting topics around AI, ML, and software engineering.',
    note:        'Active in college technical clubs',
    status:      'Active',
  },
  {
    category:    'Achie',
    title:       '1st Place – “Visualize IT” | DIGITISE 2K25',
    description: 'Secured 1st place in the “Visualize IT” event at DIGITISE 2K25, the annual technical fest organized by the Department of Information Science & Engineering, Adichunchanagiri Institute of Technology, Chikkamagalur.This achievement reflects my ability to combine creativity, technical visualization, innovation, and problem-solving skills to present impactful technology-driven ideas. The event provided valuable experience in transforming concepts into clear and engaging visual solutions while working in a competitive technical environment.',
    note:        'Building toward first open-source contribution',
    status:      'Learning',
  },
]

// ── STATS (shown in Hero) ──────────────────────────────────
export const stats = [
  { value: '2+',  label: 'Major Projects' },
  { value: '10+', label: 'Technologies'   },
  { value: '7th', label: 'Semester (VTU)' },
]
