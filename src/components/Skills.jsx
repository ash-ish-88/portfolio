import React from "react";
import { Code, Server, Wrench } from "lucide-react";

const SkillCard = ({ icon: Icon, title, items }) => (
  <div
    className="bg-gray-900/80 p-7 rounded-2xl border border-gray-800 shadow-md
               hover:border-teal-400/60 hover:shadow-[0_0_20px_#14b8a6aa] 
               transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
  >
    <div className="flex items-center gap-3 mb-4 text-teal-400">
      <Icon className="animate-pulse" size={24} />
      <h4 className="font-semibold text-lg text-gray-100">{title}</h4>
    </div>

    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="px-3 py-2 text-sm text-gray-300 bg-gray-800/50 rounded-md text-center 
                     border border-gray-700 hover:border-teal-400 hover:text-teal-300
                     transition-all duration-300 hover:-translate-y-1"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 md:px-12 lg:px-20 
                 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 
                 text-gray-100 overflow-hidden"
    >
      {/* glowing orb background */}
      <div className="absolute top-10 -right-10 w-72 h-72 bg-teal-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r text-white bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-gray-400 mt-3 text-base max-w-2xl mx-auto">
          A snapshot of the technologies and tools I use to design, develop, and deploy modern web applications.
        </p>
      </div>

      <div className="relative z-10 grid md:grid-cols-3 gap-8">
        <SkillCard
          icon={Code}
          title="Frontend"
          items={["React", "JavaScript", "HTML/CSS", "Tailwind CSS"]}
        />

        <SkillCard
          icon={Server}
          title="Backend"
          items={["Node.js", "Express.js", "MongoDB", "PostgreSQL"]}
        />

        <SkillCard
          icon={Wrench}
          title="Tools & More"
          items={["Git", "AWS", "Docker", "Postman", "REST APIs"]}
        />
      </div>
    </section>
  );
}
