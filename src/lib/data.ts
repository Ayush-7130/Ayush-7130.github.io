// ============================================================
// Central data file — edit YOUR info here, components consume it.
// ============================================================

export const siteConfig = {
  name: "Ayush Kumar",
  title: "Ayush Kumar — Software Developer",
  description:
    "Full-stack software developer specializing in MERN stack, with project-based experience building performant web applications.",
  url: "https://ayush-7130.github.io",
  socials: {
    linkedin: "https://www.linkedin.com/in/ayush--kumar--/",
    github: "https://github.com/Ayush-7130",
    facebook:
      "https://www.facebook.com/profile.php?id=100072741618248",
    instagram: "https://www.instagram.com/ayush__reigns/",
    email: "Ayushkr7130@gmail.com",
    whatsapp: "+91 8875231058",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroData = {
  badge: "Welcome to my Portfolio",
  greeting: "Hi! I'm",
  name: "Ayush Kumar",
  roles: ["SDE-1", "Full Stack Engineer"] as const,
  bio: "Associate Software Developer at Sapiens, building scalable internal products using React, Node.js, and Next.js. I focus on performance, clean architecture, and delivering production-ready features.",
  resumeUrl: "/Resume.pdf",
};

export const aboutData = {
  paragraphs: [
    "I'm an Associate Software Developer at Sapiens, working on internal product applications where I build scalable, maintainable features across both frontend and backend. My work involves designing responsive UIs, optimizing APIs, and collaborating in agile teams to deliver high-quality software.",
    "I specialize in full-stack development with the MERN and Next.js ecosystem, focusing on clean architecture, performance, and user experience. I enjoy solving real-world problems and owning features end-to-end.",
"Previously, I interned at IIT Bhubaneswar, building an AI/ML-based animal health monitoring system and working on geospatial analysis. I’ve solved 1100+ DSA problems and explore system design and advanced web experiences.",
],
  highlights: [
    { label: "Current Role", value: "SDE @ Sapiens" },
    { label: "Stack", value: "React · Next.js · Node.js · TypeScript" },
    { label: "Achievements", value: "1100+ DSA · Top 5% Adobe Hackathon" },
  ],
};

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  tech: string[];
}

export const experienceData: Experience[] = [
  {
    title: "Associate Software Developer",
    company: "Sapiens",
    duration: "Jun 2025 – Present",
    location: "Bengaluru, India",
    description: [
      "Developing scalable internal product applications using React.js and Node.js.",
      "Building responsive UI components and improving overall user experience.",
      "Collaborating in agile teams to deliver production-ready features.",
      "Optimizing APIs for better performance and reliability.",
    ],
    tech: ["React.js", "Node.js", "TypeScript", "Next.js", "Git"],
  },
  {
    title: "Software Developer Intern",
    company: "AHRC, IIT Bhubaneswar",
    duration: "May 2024 – Aug 2024",
    location: "Bhubaneswar, India",
    description: [
      "Worked on an AI/ML-based system for animal health monitoring.",
      "Performed basic geospatial data analysis.",
    ],
    tech: ["Python", "Machine Learning"],
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: "Tech Stack",
    skills: [
      { name: "C++" },
      { name: "C" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "MySQL" },
    ],
  },
  {
    title: "CS Core",
    skills: [
      { name: "DBMS" },
      { name: "Operating Systems" },
      { name: "Computer Networks" },
      { name: "OOP (C++)" },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  github: string;
  live?: string;
  tags: string[];
}

export const projectsData: Project[] = [
  {
    title: "Spend-GW Tracker",
    description:
      "Production-ready multi-group expense tracker built with Next.js 15 & MongoDB. Features smart expense splitting, JWT auth with MFA, real-time analytics, CSV export, and a 90+ Lighthouse score.",
    github: "https://github.com/Ayush-7130/Spend-GW-Tracker",
    live: "https://spend-gw-tracker.vercel.app",
    tags: ["Next.js", "MongoDB", "TypeScript", "Bootstrap"],
  },
  {
    title: "iNotePad",
    description:
      "A full-stack note-taking web app where users can create accounts, authenticate, and manage personal notes securely.",
    github: "https://github.com/Ayush-7130/iNotePad",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "NewsApp",
    description:
      "A fully functional news aggregator that fetches trending articles from a live API with a responsive React-based frontend.",
    github: "https://github.com/Ayush-7130/NewsApp",
    tags: ["React", "REST API", "Bootstrap"],
  },
  {
    title: "File Compressor",
    description:
      "Implements file compression & decompression using the Huffman coding algorithm for efficient lossless data compression.",
    github: "https://github.com/Ayush-7130/File-Compressor",
    tags: ["C++", "Algorithms", "Data Structures"],
  },
  {
    title: "SIMD Processor",
    description:
      "Custom 32-bit DRAM-integrated SIMD processor designed to enhance sequential instruction execution and minimize latency.",
    github: "https://github.com/Ayush-7130/SIMD-Processor",
    tags: ["Verilog", "Computer Architecture"],
  },
  {
    title: "Chat App",
    description:
      "Encrypted chat application providing end-to-end security using the RC4 cipher algorithm through a CLI interface.",
    github: "https://github.com/Ayush-7130/Chat-App",
    tags: ["Python", "Cryptography", "Sockets"],
  },
];

export const contactData = {
  emailjsServiceId: "service_mq6ssq2",
  emailjsTemplateId: "template_f111ky8",
  emailjsPublicKey: "wydV_a_tiPQDLbw8g",
};
