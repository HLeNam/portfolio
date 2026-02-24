import {
  Briefcase,
  Coffee,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaDocker,
  FaFigma,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiSocketdotio,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbBrandReactNative } from "react-icons/tb";

export const stats = [{ label: "Projects Completed", value: "4+" }];

export const highlights = [
  { icon: MapPin, text: "Based in Ho Chi Minh City, Vietnam" },
  { icon: Briefcase, text: "Open for internship" },
  { icon: GraduationCap, text: "Software Engineering Student" },
  { icon: Coffee, text: "Powered by coffee & curiosity" },
];

export const userReviewData = [
  {
    id: 1,
    name: "John Doe",
    profession: "Real Estate Agent",
    userImage: "/images/u1.jpg",
    review:
      "A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame",
  },
  {
    id: 2,
    name: "Mike Smith",
    profession: "Business Owner",
    userImage: "/images/u2.jpg",
    review:
      "Great selection of properties and seamless process. Highly recommended for anyone looking to invest.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    profession: "Web developer",
    userImage: "/images/u3.jpg",
    review:
      "The website helped me find my dream home quickly and hassle-free. Exceptional service!",
  },
  {
    id: 4,
    name: "Emily Clark",
    profession: "Interior Designer",
    userImage: "/images/u4.jpg",
    review:
      "Fantastic range of properties with clear details. The best platform for home and design inspiration!",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hoanglenam0905@gmail.com",
    href: "mailto:hoanglenam0905@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+84 34 620 6019",
    href: "tel:+84346206019",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ho Chi Minh City, Vietnam",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/HLeNam", label: "GitHub" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/nam-ho%C3%A0ng-l%C3%AA-22815532b/",
    label: "LinkedIn",
  },
];

export const experiences = [
  {
    type: "education",
    title: "Bachelor of Software Engineering",
    company: "University of Science Ho Chi Minh City",
    period: "2022 - present",
    description:
      "Strong foundation in algorithms, data structures, and software engineering principles.",
    technologies: ["Web Development", "DSA", "OOP", "Database Management"],
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com/HLeNam", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/nam-ho%C3%A0ng-l%C3%AA-22815532b/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:hoanglenam0905@gmail.com", label: "Email" },
];

export const projects = [
  {
    title: "Crypto Market - Real-time Cryptocurrency Market Analysis Platform",
    description:
      "A real-time cryptocurrency market analysis platform built on a Microservices architecture, featuring live price streaming from Binance, technical indicator analysis, AI-powered insights, and interactive candlestick charting.",
    image:
      "https://res.cloudinary.com/di7fmdhw6/image/upload/v1771940421/Crypto_cszlbp.jpg",
    techStack: ["React", "TypeScript", "Socket.io", "NestJS", "PostgreSQL"],
    demoUrl: "https://youtu.be/c2D7xB67i14",
    githubUrl: "https://github.com/Nagnie/Crypto-Market-Analysis-System",
  },
  {
    title: "AI Short Video",
    description:
      "A TikTok-style AI-powered short video platform with social interactions, OAuth authentication, and admin/user dashboards, built with Next.js 15.",
    image:
      "https://res.cloudinary.com/di7fmdhw6/image/upload/v1771940305/AiShortVideo_b7krkl.jpg",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
    ],
    demoUrl: "https://youtu.be/mLaDWI0t9Wo",
    githubUrl: "https://github.com/luricisme/Website_Frontend_AIShortVideo",
  },
  {
    title: "Cosmetic Web Store",
    description:
      "A full-stack e-commerce platform for browsing, searching, and purchasing cosmetics online, built with React 19, NestJS, PostgreSQL, and integrated with payment gateways.",
    image:
      "https://res.cloudinary.com/di7fmdhw6/image/upload/v1771940116/NauCosmetic_wuly2r.jpg",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
    ],
    demoUrl: "https://naucosmetic.com",
  },
  {
    title: "Booking Hotel",
    description:
      "A full-stack hotel booking platform (React + NestJS + PostgreSQL) where guests can search and book hotels, hoteliers can manage listings and reservations, and admins can oversee the entire system.",
    image:
      "https://res.cloudinary.com/di7fmdhw6/image/upload/v1771940013/BookingHotel_hvd66q.png",
    techStack: [
      "React",
      "Redux",
      "Bootstrap",
      "i18next",
      "NestJS",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/HLeNam/Hotel-Booking",
  },
  {
    title: "Gmail Kanban Manager",
    description:
      "A full-stack web-based email client built with React and NestJS that integrates with Gmail via Google OAuth, allowing users to read, compose, and manage their emails through a custom interface.",
    image:
      "https://res.cloudinary.com/di7fmdhw6/image/upload/v1771939783/GmailKanban_de9voi.jpg",
    techStack: ["React", "TypeScript", "TanStack Query", "Tailwind CSS"],
    demoUrl: "https://youtu.be/dQeGqWU1z5c",
    githubUrl: "https://github.com/Nagnie/Gmail-Kanban-Manager",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#000000",
        darkColor: "#ffffff",
      },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
      {
        name: "Express",
        icon: SiExpress,
        color: "#000000",
        darkColor: "#ffffff",
      },
      {
        name: "NestJS",
        icon: SiNestjs,
        color: "#E02347",
      },
      {
        name: "Java Spring Boot",
        icon: SiSpringboot,
        color: "#47A248",
      },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#47A248",
      },
      { name: "REST APIs", icon: TbApi, color: "#FF6C37" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: FaGit, color: "#F05032" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#FF6C37" },
    ],
  },
];
