import React from "react";
const skills = ["JavaScript", "React", "Node.js", "Go", "Java", "MongoDB", "PostgreSQL", "Tailwind CSS"];

const Skills = () => (
  <section id="skills" className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-semibold mb-4">Skills</h2>
    <div className="flex flex-wrap gap-3">
      {skills.map(skill => (
        <span key={skill} className="bg-gray-700 px-4 py-2 rounded-lg text-sm">
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;