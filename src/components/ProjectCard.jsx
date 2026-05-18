import React from "react";

const ProjectCard = ({ title, company, desc, tech, roles }) => (
  <div data-aos="fade-up">
    <div className="mb-1 flex flex-wrap items-center gap-2">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {company && (
        <span className="rounded-full bg-blue-500/10 px-3 py-0.5 text-sm font-medium text-blue-400">
          {company}
        </span>
      )}
    </div>
    <p className="mb-4 text-slate-300">{desc}</p>

    <div className="mb-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Tech Stack
          </span>
          <ul className="mt-2 flex flex-wrap gap-2">
            {tech.map((t) => (
              <li
                key={t}
                className="rounded-md bg-slate-700/60 px-2.5 py-1 text-xs text-slate-200"
              >
                {t}
              </li>
            ))}
          </ul>
    </div>

    {roles && (
      <div>
        <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Key Contributions
        </span>
        <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm text-slate-400">
          {roles.map((role, i) => (
            <li key={i}>{role}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default ProjectCard;
