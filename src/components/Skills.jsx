import React from "react";
import { Code, Server, Wrench } from "lucide-react"; // icons

const SkillCard = ({ icon: Icon, title, items }) => (
  <div className="bg-card p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-primary transition">
    <div className="flex items-center gap-2 text-primary mb-4">
      <Icon size={22} />
      <h4 className="font-semibold text-lg">{title}</h4>
    </div>
    <div className="grid grid-cols-2 gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="px-3 py-2 text-sm bg-muted/20 rounded-md text-center border border-gray-700 hover:border-primary transition"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 md:px-12 lg:px-20 bg-background text-foreground">
      <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>

      <div className="grid md:grid-cols-3 gap-8">
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
