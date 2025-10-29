import React from "react";
import { Star, Eye, Calendar, Code, Github } from "lucide-react";

const projects = [
  {
    title: "ExploreBnB",
    desc: "ExploreBnB is a MERN stack web app inspired by Airbnb where users can explore rental listings, view them on a map, and share reviews. It focuses on exploration only—no booking or payments. Users can create accounts, log in, and discover unique places with a clean, responsive design.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
    date: "Oct 23, 2025",
    link: "https://github.com/ash-ish-88/ExploreBnB",
    demo: "https://explorebnb-3.onrender.com/",
  },
  {
    title: "To Do List",
    desc: "This project allows users to add, remove, and manage their daily tasks in an organized way. It demonstrates DOM manipulation, event handling, and dynamic content updating using JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    date: "Jul 10, 2025",
    link: "https://github.com/ash-ish-88/to-do-list",
    demo: "https://ash-ish-88.github.io/to-do-list/",
  },
  {
    title: "Currency Converter",
    desc: "A currency converter web app that fetches real-time exchange rates using APIs. Built with HTML, CSS, and JavaScript, offering seamless currency switching and conversion.",
    tags: ["HTML", "CSS", "JavaScript"],
    date: "Nov 1, 2024",
    link: "https://github.com/ash-ish-88/Currency-converter",
    demo: "https://ash-ish-88.github.io/Currency-converter/",
  },
  {
    title: "Quiz App",
    desc: "An interactive quiz platform built using HTML, CSS, and JavaScript. Showcases event handling, DOM updates, and real-time score tracking with smooth animations.",
    tags: ["HTML", "CSS", "JavaScript"],
    date: "Oct 25, 2024",
    link: "https://github.com/ash-ish-88/Quiz-App",
    demo: "https://ash-ish-88.github.io/Quiz-App/",
  },
  {
    title: "Educational Web",
    desc: "A responsive educational website inspired by PW Skills, featuring modern design with TailwindCSS and interactive UI components.",
    tags: ["HTML", "TailwindCSS"],
    date: "Oct 15, 2024",
    link: "https://github.com/ash-ish-88/educational-website",
    demo: "https://ash-ish-88.github.io/educational-website/",
  },
];

const ProjectCard = ({ project }) => (
  <div
    className="relative group bg-gray-900/80 p-6 rounded-2xl border border-gray-800 
               shadow-md hover:border-teal-400/60 hover:shadow-[0_0_20px_#14b8a6aa] 
               transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
  >
    {/* Glow Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

    {/* Header */}
    <div className="flex justify-between items-start relative z-10">
      <h3 className="text-lg font-semibold text-gray-100">{project.title}</h3>
      <span className="text-xs text-teal-400 font-medium">• {project.tags[0]}</span>
    </div>

    {/* Description */}
    <p className="text-sm text-gray-400 mt-3 leading-relaxed relative z-10">
      {project.desc}
    </p>

    {/* Tags */}
    <div className="mt-4 flex flex-wrap gap-2 relative z-10">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 text-xs bg-gray-800/40 rounded-md border border-gray-700 
                     hover:border-teal-400 hover:text-teal-300 transition-all"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Metadata */}
    <div className="flex justify-between items-center text-xs text-gray-500 mt-4 relative z-10">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <Star size={12} className="text-yellow-400" /> 0
        </span>
        <span className="flex items-center gap-1">
          <Eye size={12} className="text-cyan-400" /> 0
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={12} className="text-gray-400" /> {project.date}
        </span>
      </div>
    </div>

    {/* Footer — Buttons */}
    <div className="mt-5 flex justify-between gap-3 relative z-10">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center border border-gray-700 rounded-md py-2 text-sm 
                     hover:bg-teal-400 hover:text-black font-medium transition"
        >
          View Demo
        </a>
      )}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex justify-center items-center gap-2 border border-gray-700 
                   rounded-md py-2 text-sm hover:bg-teal-400 hover:text-black font-medium transition"
      >
        <Github size={14} /> Code
      </a>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-12 lg:px-20 
                   text-gray-100 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 blur-3xl rounded-full"></div>

      <div className="text-center mb-14 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Here are some of my latest web development projects built with a focus on design, functionality, and performance.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="mt-16 flex justify-center relative z-10">
        <a
          href="https://github.com/ash-ish-88?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 border border-gray-700 rounded-md text-sm 
                     hover:bg-teal-400 hover:text-black font-medium transition"
        >
          <Github size={16} /> View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}
