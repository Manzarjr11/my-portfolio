import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaSketch,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiAdobeillustrator, SiAdobeindesign, SiAdobelightroom, SiAdobephotoshop, SiCanva, SiCanvas, SiHtml5, SiMongodb } from "react-icons/si";
import { DiJavascript, DiLaravel, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
import { GrAdobeCreativeCloud } from "react-icons/gr";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Momina Yousaf",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate Graphic Designer with over 5 years of hands-on experience with professional Website development. Proven ability to work in a fast paced environment, leading and collaborating with cross-functional teams. Delivered 8 applications that met business objectives and user needs.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Seven Layer",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    link: "https://sevenlayer.com/",
  },
  {
    id: 2,
    name: "News/Media Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    link: "https://unherd.com/",
  },
  {
    id: 3,
    name: "Logo on website",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    link: "https://www.wishd.com/",
  },
  {
    id: 4,
    name: "Logo on website",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    link: "https://www.khaadi.com/",
  },
  {
    id: 5,
    name: "Logo on website",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    link: "https://www.wishd.com/",
  },
  {
    id: 6,
    name: "Logo on website",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    link: "https://gloriajeanscoffees.com.pk/?utm_source=google&utm_medium=organic&utm_campaign=Google%20My%20Business&utm_content=Johar%20Town&utm_term=plcid_11500602356458466869",
  },
];

export const BIO = [
  "Momina Yousaf graduated with a Bachelor's degree in Computer Science from a prestigious university in Pakistan in 2022. Following her undergraduate studies, she pursued a Master's degree in Computer Network Administration and Management at the University of Portsmouth in the UK.",
  "With over 5 years of experience as a graphic designer, UI/UX designer, and web developer, Momina has cultivated a diverse skill set that positions her as a multi-talented professional in the tech industry.",
  "Throughout her career, she has worked on a variety of projects that showcase her expertise in graphic design, web development, and user experience.",
  "Momina is proficient in HTML, CSS, JavaScript, and PHP, and has experience with modern frameworks such as Bootstrap and Tailwind CSS. Her technical skills extend to database management using MySQL and SSMS, and she is well-versed in version control with GitHub.",
  "In addition to her technical prowess, Momina excels in design, creating captivating visuals and user-friendly interfaces. Her portfolio includes work in branding and identity design, print design, social media graphics, and promotional materials. ",
];

export const SKILLS = [
  {
    icon: <SiAdobeillustrator className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Adobe Illustrator",
    experience: "4+ years",
  },
  {
    icon: <SiAdobephotoshop className="text-4xl text-white lg:text-5xl" />,
    name: "Adobe Photoshop",
    experience: "4+ year",
  },
  {
    icon: <FiFigma className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Figma",
    experience: "5+ years",
  },
  {
    icon: <DiJavascript className="text-4xl text-red-600 lg:text-5xl" />,
    name: "JavaScript",
    experience: "6+ year",
  },
  {
    icon: <SiHtml5 className="text-4xl text-green-600 lg:text-5xl" />,
    name: "HTML5",
    experience: "6+ years",
  },
  {
    icon: <DiLaravel className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PHP Laravel",
    experience: "5 year",
  },
  {
    icon: <SiAdobelightroom className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Adobe Lightroom",
    experience: "5 year",
  },
  {
    icon: <SiCanva className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Canva",
    experience: "4.5 year",
  },
  {
    icon: <GrAdobeCreativeCloud className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Adobe Creative Cloud",
    experience: "2.5 year",
  },
  {
    icon: <FaSketch className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Sketch",
    experience: "2+ year",
  },
  {
    icon: <SiAdobeindesign className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Adobe Indesign",
    experience: "2+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Graphic Designer| UI/UX Designer",
    company: "HiQ Solutions USA",
    duration: "January 2019- September 2024",
    description:
      "•Developed creative concepts and designed engaging visuals for our website, social media platforms, and online marketplaces, ensuring high-quality and visually appealing content.",
  },
  {
    title: "Web Developer /Project Management",
    company: "Techlogix Pakistan",
    duration: "anuary 2021- January 2022",
    description:
      "Developed dynamic and static websites using HTML, PHP, CSS, Bootstrap, and JavaScript, with MySQL as the database on XAMPP server. Created an admin portal via PHPMyAdmin for managing and updating activities efficiently. ",
  },
  {
    
    title: "Frontend Web Developer",
    company: "Gloria Tech Solutions",
    duration: "June 2018- March 2020",
    description:
      "Built dynamic and static websites programmed by HTML, PHP, CSS, Bootstrap and JavaScript using database MySQL on XAMPP server and creating PHPAdmin for admin portal for engage and updating activitie",
  },
];

export const EDUCATION = [
  {
    degree: "BSc in Computer Science",
    institution: "Lahore Garrison University",
    duration: "September 2018 to October 2022",
    
     
  },
  {
    degree: "MSc. In Computer Network Administration and Management",
    institution: "University of Portsmouth",
    duration: "January 2023 to June 2024",
    
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
