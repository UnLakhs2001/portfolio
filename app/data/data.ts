import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiOpenjdk,
  SiPostgresql,
} from "react-icons/si";

export const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "Omega Systems",
    period: "01/07/2024 – 30/09/2024",
    description:
      "Worked in a team environment on the development and maintenance of web applications.",
    points: [
      "Developed and maintained web application features using HTML, CSS, JavaScript, PHP, and WordPress.",
      "Collaborated with team members using Git-based workflows.",
      "Improved performance and stability by fixing bugs and supporting ongoing development tasks.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "Git"],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Water4You Project",
    period: "20/01/2025 - 22/05/2025",
    description:
      "Designed and developed a full-stack dashboard for customer management and automated SMS reminders.",
    points: [
      "Built role-based authentication for Admin and Worker access.",
      "Implemented customer management features including search, pagination, and CRUD operations.",
      "Integrated automated SMS reminders and notification logging.",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Twilio API"],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Java", icon: SiOpenjdk },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  images: string[];
  featured?: boolean;
  status?: "live" | "paused" | "restricted";
  projectNotes?: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    id: "water4you",
    title: "Water4You",
    description:
      "A full-stack web application for managing customers and sending automated SMS reminders for water filter replacements.",
    tech: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Twilio API",
      "Vercel",
    ],
    github: "https://github.com/UnLakhs/water4you-dashboard",
    images: [
      "/projects/water4you/screenshot-1.png",
      "/projects/water4you/screenshot-2.png",
      "/projects/water4you/screenshot-3.png",
      "/projects/water4you/screenshot-4.png",
    ],
    featured: true,
    status: "restricted",
    projectNotes:
      "This web app is only accessible to the business owner and their employees, as it contains sensitive customer information. I designed and implemented all features of this project.",
    features: [
      "Role-based authentication for owner and staff",
      "Customer dashboard with full CRUD functionality",
      "Automated SMS reminders using Twilio API",
      "Search and pagination for managing customer records",
      "Notification logging for sent messages",
    ],
  },
  {
    id: "cinegame-critic",
    title: "CineGame-Critic",
    description:
      "A full-stack web application for movie and game reviews, allowing users to create accounts, write reviews, add movies/games to their watchlist, and search for content.",
    tech: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "TMDB API",
      "Vercel",
    ],
    github: "https://github.com/WebDevTeam2/CGC",
    demo: "https://www.cinegame-critic.com/",
    images: [
      "/projects/cinegame/screenshot-1.png",
      "/projects/cinegame/screenshot-2.png",
      "/projects/cinegame/screenshot-3.png",
      "/projects/cinegame/screenshot-4.png",
      "/projects/cinegame/screenshot-5.png",
    ],
    featured: true,
    status: "live",
    projectNotes:
      "This project was built as part of a team, where I contributed to both frontend and backend development. I co-designed all features regarding user authentication and I designed and implemented all Movies features.",
    features: [
      "User authentication and account management",
      "Movie and game review system with ratings",
      "Watchlist for saving movies and games",
      "Search functionality for movies and games",
      "Integration with external APIs for dynamic content",
      "Movie Recommendations",
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Railway"],
    github: "https://github.com/UnLakhs/portfolio",
    images: [
      "/projects/portfolio/screenshot-1.png",
      "/projects/portfolio/screenshot-2.png",
      "/projects/portfolio/screenshot-3.png",
    ],
    featured: true,
    status: "live",
    demo: "https://portfolio-production-2878.up.railway.app/",
    projectNotes:
      "This is the website you are currently viewing. It was designed to present my work and skills in a clean and structured way.",
  },
];

export const education = [
  {
    degree: "BSc in Informatics",
    school: "University of Western Macedonia, Kastoria",
    period: "2020 – 2024",
    gpa: "7.84 / 10",
    details: [
      "Focused on software development and web technologies",
      "Completed projects involving full-stack web applications",
      "Participated in IEEEXtreme programming competition",
      "Thesis: Designed and developed CineGame-Critic, a full-stack web application for movie and game reviews",
    ],
  },
];
