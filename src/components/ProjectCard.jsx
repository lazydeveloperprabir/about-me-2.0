import React from "react";
const ProjectCard = ({ title, desc, tech, demo }) => (
  <div className="bg-gray-800 p-4 rounded-xl shadow-md">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-sm text-gray-400 my-2">{desc}</p>
    <div className="flex flex-wrap gap-2 mb-3">
      {tech.map(t => (
        <span key={t} className="bg-blue-600 text-white px-2 py-1 text-xs rounded">{t}</span>
      ))}
    </div>
    <a href={demo} target="_blank" className="text-blue-400 text-sm underline">View Project</a>
  </div>
);

export default ProjectCard;