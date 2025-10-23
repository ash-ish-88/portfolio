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
    desc: "This project allows users to add, remove, and manage their daily tasks in an organized way. It demonstrates DOM manipulation, event handling, and dynamic content updating using JavaScript. The design is clean and responsive, offering a smooth user experience on both desktop and mobile devices.",
    tags: ["HTML", "CSS", "JavaScript"],
    date: "Jul 10, 2025",
    link: "https://github.com/ash-ish-88/to-do-list",
    demo: "https://ash-ish-88.github.io/to-do-list/",
  },
  {
    title: "Currency Convertor",
    desc: "This is a currency converter web application that fetches real-time data for currency conversion rates using HTML, CSS, and JavaScript. The application allows users to convert currencies by selecting the source currency and the target currency, and it provides an interface to easily switch between the two selected values.",
    tags: ["HTML", "CSS", "JavaScript"],
    date: "Nov 1, 2024",
    link: "https://github.com/ash-ish-88/Currency-converter",
    demo: "https://ash-ish-88.github.io/Currency-converter/",
  },
  {
    title: "Quiz-App",
    desc: "A lightweight and interactive Quiz App built using HTML, CSS, and JavaScript. This project is perfect for beginners looking to understand DOM manipulation, event handling, and basic UI design without using any libraries or frameworks.",
    tags: ["HTML", "CSS", "JavaScript"],
    date: "Oct 25, 2024",
    link: "https://github.com/ash-ish-88/Quiz-App",
    demo: "https://ash-ish-88.github.io/Quiz-App/",
  },
  {
    title: "Educational-web",
    desc: "A fully responsive educational website built using HTML, CSS, and Tailwind CSS. This project features a modern layout inspired by learning platforms like PW Skills, including a navbar, hero section, student stats, product features, and footer.",
    tags: ["HTML", "TailwindCSS"],
    date: "Oct 15, 2024",
    link: "https://github.com/ash-ish-88/educational-website",
    demo: "https://ash-ish-88.github.io/educational-website/",
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-card p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-primary transition-all hover:shadow-primary/10">
    {/* Header */}
    <div className="flex justify-between items-start">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <span className="text-xs text-primary font-medium">• {project.tags[0]}</span>
    </div>

    {/* Description */}
    <p className="text-sm text-muted mt-2 leading-relaxed">{project.desc}</p>

    {/* Tags */}
    <div className="mt-4 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 text-xs bg-muted/20 rounded-md border border-gray-700"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Metadata */}
    <div className="flex justify-between items-center text-xs text-muted mt-4">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <Star size={12} /> 0
        </span>
        <span className="flex items-center gap-1">
          <Eye size={12} /> 0
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={12} /> {project.date}
        </span>
      </div>
    </div>

    {/* Footer — Buttons */}
    <div className="mt-5 flex justify-between gap-3">
      {/* View Demo Button */}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center border border-gray-700 rounded-md py-2 text-sm hover:bg-primary hover:text-black transition"
        >
          View
        </a>
      )}

      {/* Code Button with GitHub Icon */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex justify-center items-center gap-2 border border-gray-700 rounded-md py-2 text-sm hover:bg-primary hover:text-black transition"
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
      className="py-16 px-6 md:px-12 lg:px-20 bg-background text-foreground"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="text-muted mt-3 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in
          full-stack development, from concept to deployment.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/ash-ish-88?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 border border-gray-700 rounded-md text-sm hover:bg-primary hover:text-black transition"
        >
          <Github size={16} /> View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}
