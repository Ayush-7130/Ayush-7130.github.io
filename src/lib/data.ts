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

export const heroData = {
  greeting: "Hi! I'm",
  name: "Ayush Kumar",
  roles: ["Software Developer", "Full Stack Web Dev"],
  bio: "Passionate about software development with project-based experience in full-stack web development, focusing on the MERN stack. I build performant, user-friendly applications and continuously seek to grow as a developer.",
};

export const aboutData = {
  paragraphs: [
    "I'm a software developer focused on building production-ready, full-stack web applications. I recently shipped Spend-GW-Tracker — a multi-group expense tracking platform built with Next.js 15, MongoDB, TypeScript, and Bootstrap 5, featuring JWT authentication, real-time analytics, smart expense splitting, and a 90+ Lighthouse score.",
    "My primary stack is the MERN ecosystem, and I enjoy solving problems across the entire stack — from schema design and API architecture to responsive UI and performance optimisation. I'm also active in competitive programming and enjoy exploring system design and 3D graphics on the web.",
  ],
  highlights: [
    { label: "Focus", value: "Full-Stack Web Development" },
    { label: "Stack", value: "MERN · Next.js · Tailwind" },
    { label: "Interests", value: "System Design · 3D Web · DSA" },
  ],
};

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

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
