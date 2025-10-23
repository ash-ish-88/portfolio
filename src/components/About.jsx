import React from "react";
import { Code, Database, Server, Layers } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-12 lg:px-20 bg-background text-foreground">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        <p className="mt-4 text-muted max-w-2xl mx-auto text-base md:text-lg">
          I'm a passionate developer focused on creating elegant and high-performance web apps.
          I enjoy combining clean code with creative design to bring ideas to life.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* My Journey */}
        <div className="md:col-span-2 lg:col-span-1 bg-card p-6 rounded-xl shadow-md border border-border">
          <h3 className="text-lg font-semibold text-primary mb-2">My Journey</h3>
          <p className="text-sm text-muted leading-relaxed">
            I began exploring software development out of curiosity about how digital tools work.
            That spark turned into a love for crafting great user experiences with clear, effective code.
            I focus on the MERN stack (MongoDB, Express.js, React, Node.js), with a keen interest in backend
            development and system design. I’m also learning Java to grow my skills and build even stronger applications.
          </p>
        </div>

        {/* Frontend Development */}
        <div className="bg-card p-6 rounded-xl shadow-md border border-border">
          <div className="flex items-center gap-3 mb-3">
            <Code className="text-primary" size={22} />
            <h3 className="font-semibold">Frontend Development</h3>
          </div>
          <p className="text-sm text-muted">
I specialize in building responsive, interactive, and visually engaging user interfaces using React and Tailwind CSS. My focus is on creating clean, reusable components and implementing modern front-end practices that enhance performance and accessibility. I strive to deliver seamless user experiences across all devices, combining design precision with efficient, maintainable code that brings ideas to life in a dynamic and scalable way.
          </p>
        </div>

        {/* Backend Development */}
        <div className="bg-card p-6 rounded-xl shadow-md border border-border">
          <div className="flex items-center gap-3 mb-3">
            <Server className="text-primary" size={22} />
            <h3 className="font-semibold">Backend Development</h3>
          </div>
          <p className="text-sm text-muted">
 design and develop robust, scalable server-side applications using Node.js and Express.js. My focus is on building efficient APIs, managing databases, and ensuring secure, optimized backend systems. I integrate cloud-based solutions to enhance scalability, reliability, and performance, enabling seamless communication between the client and server for modern web applications.
          </p>
        </div>

        {/* Database Design */}
        <div className="bg-card p-6 rounded-xl shadow-md border border-border">
          <div className="flex items-center gap-3 mb-3">
            <Database className="text-primary" size={22} />
            <h3 className="font-semibold">Database Design</h3>
          </div>
          <p className="text-sm text-muted">
            Designing efficient database schemas and optimizing queries for both SQL and NoSQL databases.
          </p>
        </div>

        {/* Full Stack Integration */}
        <div className="bg-card p-6 rounded-xl shadow-md border border-border">
          <div className="flex items-center gap-3 mb-3">
            <Layers className="text-primary" size={22} />
            <h3 className="font-semibold">Full Stack Integration</h3>
          </div>
          <p className="text-sm text-muted">
            Seamlessly connecting frontend and backend systems with RESTful APIs and real-time features.
          </p>
        </div>
      </div>
    </section>
  );
}
