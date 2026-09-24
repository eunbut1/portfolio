export const portfolioData = {
  personal: {
    name: "Himanshu",
    greeting: "Hello, I'm",
    role: "Full-Stack Developer & Computer Science Student",
    heroDescription: "I build modern, responsive and user-focused web applications using technologies like React, Node.js, Express and MongoDB.",
    aboutParagraphs: [
      "I am a B.Tech Computer Science student with a strong interest in web development and software development.",
      "I enjoy building practical projects and learning new technologies. My current focus is on frontend development with React and backend development using Node.js, Express and MongoDB.",
      "I am continuously improving my problem-solving skills and learning technologies that help me build complete web applications."
    ],
    infoCards: [
      {
        icon: "🎓",
        title: "B.Tech CSE",
        subtitle: "Geeta University"
      },
      {
        icon: "💻",
        title: "Full-Stack Development",
        subtitle: "MERN Stack Specialist"
      },
      {
        icon: "🚀",
        title: "Project Based Learning",
        subtitle: "Hands-on Applications"
      },
      {
        icon: "📚",
        title: "Continuous Learner",
        subtitle: "Tech & Problem Solving"
      }
    ]
  },
  
  socials: {
    github: "https://github.com/YOUR_GITHUB_USERNAME",
    linkedin: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
    instagram: "https://instagram.com/YOUR_INSTAGRAM_USERNAME",
    email: "YOUR_EMAIL@example.com"
  },

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "HTML", iconName: "FaHtml5", color: "#E34F26" },
        { name: "CSS", iconName: "FaCss3Alt", color: "#1572B6" },
        { name: "JavaScript", iconName: "FaJsSquare", color: "#F7DF1E" },
        { name: "React", iconName: "FaReact", color: "#61DAFB" },
        { name: "Tailwind CSS", iconName: "SiTailwindcss", color: "#06B6D4" },
        { name: "Bootstrap", iconName: "FaBootstrap", color: "#7952B3" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", iconName: "FaNodeJs", color: "#339933" },
        { name: "Express.js", iconName: "SiExpress", color: "#F8FAFC" },
        { name: "REST APIs", iconName: "TbApi", color: "#6366F1" }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", iconName: "SiMongodb", color: "#47A248" },
        { name: "MongoDB Atlas", iconName: "SiMongodb", color: "#13AA52" },
        { name: "Mongoose", iconName: "SiMongodb", color: "#880000" }
      ]
    },
    {
      category: "Programming",
      items: [
        { name: "C++", iconName: "SiCplusplus", color: "#00599C" },
        { name: "Java", iconName: "FaJava", color: "#5382A1" },
        { name: "JavaScript", iconName: "FaJsSquare", color: "#F7DF1E" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", iconName: "FaGitAlt", color: "#F05032" },
        { name: "GitHub", iconName: "FaGithub", color: "#FFFFFF" },
        { name: "VS Code", iconName: "TbBrandVscode", color: "#007ACC" },
        { name: "Postman", iconName: "SiPostman", color: "#FF6C37" },
        { name: "Thunder Client", iconName: "SiThunderbird", color: "#7B61FF" },
        { name: "Vite", iconName: "SiVite", color: "#646CFF" }
      ]
    }
  ],

  projects: [
    {
      id: "medical-setu",
      title: "Medical Setu",
      description: "A full-stack web application designed to provide useful healthcare-related functionality with a React frontend and Node.js backend.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "YOUR_GITHUB_LINK",
      liveUrl: "YOUR_LIVE_DEMO_LINK",
      category: "Full-Stack",
      featured: true,
      gradient: "from-blue-600/20 to-indigo-600/20",
      accentColor: "#6366F1"
    },
    {
      id: "ecommerce-backend",
      title: "E-Commerce Backend",
      description: "A REST API based backend for managing products, searching products and performing CRUD operations.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      githubUrl: "YOUR_GITHUB_LINK",
      liveUrl: "YOUR_LIVE_DEMO_LINK",
      category: "Backend",
      featured: true,
      gradient: "from-emerald-600/20 to-teal-600/20",
      accentColor: "#10B981"
    },
    {
      id: "wandervista-travels",
      title: "WanderVista Travels",
      description: "A modern travel and tourism website created to showcase destinations, tour packages, galleries and booking functionality.",
      technologies: ["WordPress", "Elementor", "CSS"],
      githubUrl: "YOUR_GITHUB_LINK",
      liveUrl: "YOUR_LIVE_DEMO_LINK",
      category: "CMS & Design",
      featured: true,
      gradient: "from-amber-600/20 to-orange-600/20",
      accentColor: "#F59E0B"
    }
  ],

  services: [
    {
      id: 1,
      title: "Web Development",
      description: "Building responsive, fast and modern websites using clean code practices and top industry standards.",
      icon: "FaLaptopCode",
      highlights: ["Responsive Layouts", "Modern UI Design", "Performance Optimization"]
    },
    {
      id: 2,
      title: "Full-Stack Development",
      description: "Creating complete applications using React, Node.js, Express and MongoDB with seamless frontend-backend integration.",
      icon: "FaServer",
      highlights: ["MERN Stack", "CRUD Architecture", "State Management"]
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Building REST APIs, authentication routines, and scalable database-driven application backends.",
      icon: "FaDatabase",
      highlights: ["RESTful APIs", "MongoDB Schemas", "Server Logic"]
    },
    {
      id: 4,
      title: "UI Development",
      description: "Creating clean, interactive, and responsive user interfaces with accessible and mobile-first design.",
      icon: "FaPalette",
      highlights: ["Component Design", "Smooth Animations", "Cross-Browser Compatibility"]
    }
  ],

  experience: [
    {
      role: "Digital Marketing Intern",
      company: "TalentGro Global",
      period: "Internship",
      type: "Internship",
      location: "Remote / On-Site",
      skills: [
        "Digital marketing",
        "Social media strategy",
        "SEO analysis",
        "Brand marketing strategy",
        "Content creation",
        "Canva design",
        "AI tools",
        "WordPress",
        "Website analysis"
      ],
      description: "Executed comprehensive digital marketing campaigns, performed SEO website analysis, created brand assets using Canva and AI tools, and managed WordPress content optimization to drive digital engagement."
    }
  ],

  education: [
    {
      degree: "B.Tech — Computer Science & Engineering",
      institution: "Geeta University",
      period: "Expected Graduation: 2028",
      year: "2024 - 2028",
      highlights: [
        "Core Focus: Data Structures & Algorithms, Object-Oriented Programming (C++/Java)",
        "Web Engineering & Software Development Concepts",
        "Active Member of Technical & Developer Communities"
      ]
    }
  ]
};
