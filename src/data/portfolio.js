// ============================================================
//  PORTFOLIO DATA — Edit everything about yourself right here
// ============================================================

export const personal = {
  name:         'Prathiksha P Mallya',
  firstName:    'Prathiksha',
  lastName:     'P Mallya',
  initials:     'PM',
  title:        'AI & Machine Learning Graduate',
  subtitle:     'Java Full Stack Developer | AI/ML Engineer',
  tagline:      'Artificial Intelligence and Machine Learning graduate with hands-on experience in Java Full Stack Development, Computer Vision, Deep Learning, and AI-powered web applications.',
  location:     'Karnataka, India',
  email:        'artsonu26@gmail.com',
  phone:        '+91 7338682609',
  github:       'https://github.com/prathzeee26/Prathiksha-P-Mallya-Portfolioo.git',
  linkedin:     'https://www.linkedin.com/in/prathiksha-p-mallyya-145a04306',
  resumeUrl:    '/Prathiksha P Mallya resume.pdf',
  profilePhoto: '/profile.jpg',
  available:    true,
}

// Short lines that cycle in the typewriter in the Hero
export const roles = [
  'AI & Machine Learning Graduate',
  'Java Full Stack Developer',
  'AI/ML Engineer',
  'Computer Vision Specialist',
  'Problem Solver',
]

// One-line tagline shown under the typewriter
export const tagline = 'Building Intelligent AI Solutions & Full Stack Applications'

export const subheading = 'Artificial Intelligence and Machine Learning graduate with hands-on experience in Java Full Stack Development, Computer Vision, Deep Learning, and AI-powered web applications.'

// About section bio
export const bio = {
  p1: "I am Prathiksha P Mallya, a passionate Artificial Intelligence and Machine Learning graduate with a strong foundation in software development, computer vision, deep learning, and Java Full Stack technologies.",
  p2: "I enjoy building practical applications that combine AI intelligence with user-friendly web experiences. My experience includes developing machine learning models, integrating databases, building CRUD-based web applications, and working with modern development tools and frameworks.",
  p3: "I am seeking opportunities where I can contribute to innovative software and AI-driven products while continuously expanding my technical expertise."
}

export const personalQuote = '"I combine the power of Artificial Intelligence with robust Full Stack architectures to deliver meaningful, industry-ready solutions."'

// Education details
export const educationList = [
  {
    degree: 'B.E. in Artificial Intelligence & Machine Learning',
    institution: 'Adichunchanagiri Institute of Technology, Chikkamagalur',
    duration: '2022 – 2026',
    score: 'CGPA: 8.01',
    details: 'Focused on Deep Learning, Computer Vision, NLP, Software Engineering, and Database Systems. Active core committee member for department events.'
  },
  {
    degree: 'Pre-University Course (PUC)',
    institution: 'Poornaprajna PU College, Udupi',
    duration: '2020 – 2022',
    score: 'Percentage: 83.8% (503/600)',
    details: 'Specialized in PCMB (Physics, Chemistry, Mathematics, Biology).'
  }
]

// ── SKILLS ─────────────────────────────────────────────────
export const skillGroups = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'C++', 'R Language']
  },
  {
    category: 'AI & Data Science',
    skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Data Science', 'Data Visualization']
  },
  {
    category: 'Libraries & Frameworks',
    skills: ['TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Streamlit']
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB']
  },
  {
    category: 'Tools',
    skills: ['GitHub', 'VS Code', 'Jupyter Notebook', 'Kaggle']
  }
]

// ── PROJECTS ───────────────────────────────────────────────
export const projects = [
  {
    id:          'fashnavi',
    label:       'Featured Project · AI & Fashion',
    title:       'FASHNAVI',
    subtitle:    'AI-Powered Fashion Recommendation System',
    description: `An intelligent fashion recommendation web application that suggests personalized outfits based on:
• Face shape
• Body shape
• Skin tone
• Weather conditions`,
    highlights: [
      'CNN-based image classification for shape and skin tone detection',
      'Personalized outfit recommendations tailored to user characteristics',
      'Harmonious color suggestions matching the user\'s profile',
      'Rich product descriptions and real-time pricing insights',
      'Interactive and intuitive image upload interface for end-users',
    ],
    tech:        ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Streamlit', 'HTML', 'CSS'],
    githubUrl:   'https://github.com/prathzeee26',
    liveUrl:     '', // Add live demo URL when available
    accentColor: '#D4AF37', // Primary Accent: Gold
    icon:        '👗',
    image:       '/fashnavi_preview.jpg'
  }
]

// ── EXPERIENCE / INTERNSHIP ────────────────────────────────
export const experiences = [
  {
    role:        'Java Full Stack Intern',
    company:     'X-workz ODC, Bangalore',
    duration:    '4 Months',
    responsibilities: [
      'Developed Java Full Stack enterprise web applications adhering to clean coding standards.',
      'Designed and implemented CRUD-based modules using Spring MVC and Hibernate framework.',
      'Built stable MySQL database schemas and integrated them using Hibernate/JPA ORM.',
      'Followed MVC architecture and industry best practices to ensure modular, readable code.',
      'Utilized Maven for dependency management and Apache Tomcat for local web server deployment.',
    ],
    tech:        ['Java', 'Spring MVC', 'Hibernate', 'MySQL', 'JSP', 'Maven', 'Tomcat']
  }
]

// ── ACHIEVEMENTS ───────────────────────────────────────────
export const achievements = [
  {
    title:       '🏆 1st Place – Visualize It',
    subtitle:    'State-Level Data Visualization Event',
    institution: 'Adichunchanagiri Institute of Technology',
    description: 'Secured first place in the state-level data visualization event by designing interactive, insights-rich dashboards translating complex datasets into actionable items.'
  },
  {
    title:       '💡 Project Presentation – FASHNAVI',
    subtitle:    'Presented at Code Quest 2025',
    institution: 'Technical Symposium',
    description: 'Presented FASHNAVI, the AI-powered fashion recommendation engine, demonstrating CNN models and database integrations to a panel of industry experts.'
  },
  {
    title:       '🤝 Core Committee Member – AIgnite 2.0',
    subtitle:    'National Level Technical Event',
    institution: 'Department of AI & ML',
    description: 'Led planning and operations for technical competitions, coordinating with sponsors, judges, and 200+ participants from colleges across India.'
  },
  {
    title:       '🎭 VTU Youth Festival Representative',
    subtitle:    'Represented College for 4 Consecutive Years',
    institution: 'Visvesvaraya Technological University (VTU) (2023–2026)',
    description: 'Selected to represent the college for 4 consecutive years, showcasing team collaboration, creativity, and leadership at state-wide university fests.'
  }
]

// ── CERTIFICATIONS ─────────────────────────────────────────
export const certifications = [
  {
    title: 'Graphical and Statistical Analysis using R-Language',
    issuer: 'Authorized Certification Board',
    description: 'Acquired skills in data modeling, statistical distributions, and plotting advanced visualizations (ggplot2) using R.'
  },
  {
    title: 'IoT and Its Applications Workshop',
    issuer: 'Adichunchanagiri Institute of Technology',
    description: 'Hands-on training in sensor interfacing, microcontroller programming (Arduino/ESP8266), and HTTP communication protocols.'
  },
  {
    title: 'BYTE-BRAWL State-Level Hackathon',
    issuer: 'Hackathon Organizer',
    description: 'Participated and built software prototypes under a tight 24-hour deadline, demonstrating agile problem solving.'
  }
]

// ── STATS (shown in Hero) ──────────────────────────────────
export const stats = [
  { value: '8.01',  label: 'CGPA VTU' },
  { value: '4 Mon', label: 'Internship'   },
  { value: '1st',   label: 'State Winner' },
  { value: '4 Yrs', label: 'VTU Youth Fest' },
]
