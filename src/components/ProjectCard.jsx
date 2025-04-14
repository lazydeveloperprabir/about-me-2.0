import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, desc, tech, demo, roles }) => {
  return (

    <div className="bg-white rounded-xl shadow-md p-6" data-aos="fade-up">
    <div className="rounded-xl shadow-md p-6">
      <h3 className="text-2xl font-semibold mb-2" style={{ color: "cornflowerblue" }}>{title}</h3>
      <p className="text-gray-700 mb-3">{desc}</p>

      <div className="mb-3">
        <span className="font-semibold" style={{ color: "cornflowerblue" }}>Tech Stack:</span>
        <ul className="flex flex-wrap gap-2 mt-1">
          {tech.map((t, i) => (
            <li key={i} className="bg-gray-500 text-sm px-2 py-1 rounded">
              {t}
            </li>
          ))}
        </ul>
      </div>

      {roles && (
        <div className="mb-3">
          <span className="font-semibold" style={{ color: "cornflowerblue" }}>Roles & Responsibilities:</span>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-1 space-y-1">
            {roles.map((role, i) => (
              <li key={i}>{role}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default ProjectCard;
