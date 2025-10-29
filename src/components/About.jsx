import React from "react";
import { Code, Database, Server, Layers } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-12 lg:px-20 bg-background text-foreground">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          I'm a passionate developer focused on creating elegant and high-performance web apps.
          I enjoy combining clean code with creative design to bring ideas to life.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* My Journey */}
        <div
          className="md:col-span-2 lg:col-span-1 bg-gray-900/80 p-7 rounded-2xl 
                     border border-gray-800 hover:border-teal-500/40 hover:shadow-[0_0_20px_#14b8a6aa]
                     transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold text-teal-400 mb-2">My Journey</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            I began exploring software development out of curiosity about how digital tools work.
            That spark turned into a love for crafting user-centered applications using the MERN stack —
            MongoDB, Express, React, and Node.js. I’m also learning Java to expand my backend expertise
            and develop scalable systems that perform beautifully.
          </p>
        </div>

        {/* Frontend Development */}
         <div
          className="bg-gray-900/80 p-7 rounded-2xl border border-gray-800 
                     hover:border-teal-500/40 hover:shadow-[0_0_15px_#14b8a6aa] 
                     transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <Code className="text-teal-400 animate-pulse" size={22} />
            <h3 className="font-semibold text-lg">Frontend Development</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            I build interactive, responsive interfaces using React and Tailwind CSS.  
            My focus is on crafting reusable components and clean layouts that deliver  
            smooth, accessible experiences across all devices.
          </p>
        </div>

        {/* Backend Development */}
        <div
          className="bg-gray-900/80 p-7 rounded-2xl border border-gray-800 
                     hover:border-teal-500/40 hover:shadow-[0_0_15px_#14b8a6aa] 
                     transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <Server className="text-teal-400 animate-pulse" size={22} />
            <h3 className="font-semibold text-lg">Backend Development</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            I design and build fast, secure APIs using Node.js and Express.js —  
            integrating databases, authentication, and cloud solutions  
            for scalable web systems that perform under load.
          </p>
        </div>

        {/* Database Design */}
     <div
          className="bg-gray-900/80 p-7 rounded-2xl border border-gray-800 
                     hover:border-teal-500/40 hover:shadow-[0_0_15px_#14b8a6aa] 
                     transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <Database className="text-teal-400 animate-pulse" size={22} />
            <h3 className="font-semibold text-lg">Database Design</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            I structure efficient schemas and optimize queries  
            for SQL and NoSQL databases to ensure fast, reliable data flow.
          </p>
        </div>

        {/* Full Stack Integration */}
        <div
          className="bg-gray-900/80 p-7 rounded-2xl border border-gray-800 
                     hover:border-teal-500/40 hover:shadow-[0_0_15px_#14b8a6aa] 
                     transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <Layers className="text-teal-400 animate-pulse" size={22} />
            <h3 className="font-semibold text-lg">Full Stack Integration</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            I connect frontend and backend with REST APIs  
            and real-time systems for fully integrated, dynamic applications.
          </p>
        </div>
      </div>
    </section>
  );
}
