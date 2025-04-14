import ProjectCard from "../components/ProjectCard";
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Billing App",
      desc: "Microservice-based billing system with user, inventory, and sales services.",
      tech: ["Go", "React", "MongoDB"],
      demo: "https://github.com/lazydeveloperprabir/ebilling",
    },
  ];

  return (
    <section id="projects" className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
};

export default Projects;