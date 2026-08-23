/**
 * Personal Portfolio Data for Gowreesh Thamilmani
 * Centralized data file to easily edit profile information, social links, skills, projects, and contact info.
 */

export const personalInfo = {
  name: "Gowreesh Thamilmani",
  title: "B.Tech Information Technology Student",
  degree: "Bachelor of Technology in Information Technology",
  tagline: "AI & MLOps Enthusiast | Software Developer | Hackathon Participant",
  location: "Salem, Tamil Nadu, India",
  
  // Hero text
  heroHeadline: "Hi, I'm Gowreesh.",
  heroSubtitle: "B.Tech Information Technology Student",
  heroBio: "I'm interested in Artificial Intelligence, MLOps, software development, and exploring technology through projects and practical learning.",
  
  // Profile photo path
  profilePhoto: "/profile.jpg",
  
  // Quick status pill
  availabilityStatus: "Open for AI & Software Internships",

  // Social & Contact Info
  socials: {
    github: "https://github.com/Gowreesh248",
    linkedin: "https://www.linkedin.com/in/gowreesh-thamilmani-8b257b321",
    email: "gowreeshbt@gmail.com",
  }
};

export const aboutMe = {
  introduction: `I am a dedicated B.Tech Information Technology student with a strong passion for Artificial Intelligence, MLOps, and modern software development. My journey in technology is driven by curiosity, continuous learning, and a desire to build practical solutions that address real-world challenges.`,
  highlights: [
    {
      title: "AI & Computer Vision",
      description: "Hands-on experience building object detection and computer vision prototypes using Python, YOLOv8, and OpenCV."
    },
    {
      title: "MLOps & Engineering",
      description: "Actively expanding knowledge in machine learning operations, deployment pipelines, and cloud computing principles."
    },
    {
      title: "Hackathons & Innovation",
      description: "Passionate participant in competitive hackathons, transforming innovative concepts into tangible prototypes under pressure."
    },
    {
      title: "Problem Solving",
      description: "Focused on strengthening core Data Structures & Algorithms (DSA) foundations and clean software design."
    }
  ]
};

export const skillCategories = [
  {
    category: "Programming Languages",
    iconName: "Code",
    skills: ["C", "Python", "Java", "JavaScript"]
  },
  {
    category: "Development",
    iconName: "Globe",
    skills: ["HTML", "CSS", "Node.js"]
  },
  {
    category: "AI & Computer Vision",
    iconName: "Cpu",
    skills: ["YOLOv8", "OpenCV", "Machine Learning Fundamentals"]
  },
  {
    category: "Tools & Environment",
    iconName: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "Streamlit"]
  },
  {
    category: "Currently Learning",
    iconName: "Sparkles",
    highlight: opacity => true,
    skills: ["MLOps", "Data Structures & Algorithms", "Cloud / DevOps Fundamentals"]
  }
];

export const projectsData = [
  {
    id: "zerowaste-twin",
    title: "ZeroWaste Twin",
    tagline: "Food Waste Digital Twin Concept",
    status: "Concept",
    statusType: "concept", // concept, prototype, development, completed
    description: "A data-driven digital twin concept focused on leveraging real-time analytics and digital twin principles to model food supply chain dynamics, analyze waste hotspots, and enable actionable reduction strategies.",
    technologies: ["Digital Twin Principles", "Data Analytics", "Python", "Streamlit Concept"],
    githubUrl: "https://github.com/Gowreesh248",
    demoUrl: "#",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200"
  },
  {
    id: "forgesight-ppe",
    title: "PPE Compliance Detection (ForgeSight)",
    tagline: "AI Workplace Safety Monitoring Prototype",
    status: "Prototype",
    statusType: "prototype",
    description: "An intelligent AI computer vision prototype developed with Python, YOLOv8, and OpenCV to monitor workplace live camera feeds and automatically detect compliance with Personal Protective Equipment (helmets, vests, safety gear).",
    technologies: ["Python", "YOLOv8", "OpenCV", "Computer Vision", "Object Detection"],
    githubUrl: "https://github.com/Gowreesh248",
    demoUrl: "#",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200"
  },
  {
    id: "civicon-ai",
    title: "CivicON AI",
    tagline: "Citizen Issue Reporting & Prioritization Platform",
    status: "Concept",
    statusType: "concept",
    description: "A civic technology platform concept designed to help citizens easily report urban and public infrastructure issues, leverage community voting for priority resolution, and improve transparency between citizens and local authorities.",
    technologies: ["AI Platform", "Full-Stack Web Concept", "Civic Tech", "Node.js"],
    githubUrl: "https://github.com/Gowreesh248",
    demoUrl: "#",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200"
  }
];

export const achievementsData = [
  {
    id: "coimbatore-hackathon",
    title: "Coimbatore Innovation Hackathon 2026",
    role: "Grand Finale Participant",
    category: "Hackathon Finale",
    date: "2026",
    description: "Selected as a Grand Finale participant in a prestigious regional hackathon, designing and presenting innovative solution prototypes to industry mentors and evaluation panels.",
    iconName: "Trophy"
  },
  {
    id: "msme-hackathon",
    title: "MSME Idea Hackathon",
    role: "Initial Round Selected Idea",
    category: "Project Recognition",
    date: "2026",
    description: "Proposed the 'ZeroWaste Twin' concept focused on digital twin-driven food waste reduction, successfully qualifying through the competitive initial selection round.",
    iconName: "Award"
  }
];

export const interestsData = [
  {
    title: "Artificial Intelligence",
    description: "Exploring machine learning algorithms, deep learning architectures, and intelligent system designs.",
    iconName: "BrainCircuit",
    color: "from-teal-500 to-emerald-500"
  },
  {
    title: "MLOps & Cloud",
    description: "Learning practices to build, test, deploy, and maintain machine learning models reliably in production.",
    iconName: "CloudCog",
    color: "from-blue-500 to-sky-500"
  },
  {
    title: "Software Development",
    description: "Crafting clean, responsive web interfaces, robust backend services, and scalable modular code.",
    iconName: "Code2",
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "Problem Solving & DSA",
    description: "Strengthening logic, algorithmic thinking, data structures, and computational optimization.",
    iconName: "Cpu",
    color: "from-cyan-500 to-teal-600"
  },
  {
    title: "Hackathons",
    description: "Collaborating with like-minded innovators to pitch ideas, tackle intense coding challenges, and build under timelines.",
    iconName: "Zap",
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Space & Science",
    description: "Fascinated by space exploration technology, astronomy, physics breakthroughs, and futuristic science.",
    iconName: "Rocket",
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Filmmaking",
    description: "Enjoying visual storytelling, cinema aesthetics, creative video editing, and narrative framing.",
    iconName: "Film",
    color: "from-rose-500 to-pink-500"
  }
];
