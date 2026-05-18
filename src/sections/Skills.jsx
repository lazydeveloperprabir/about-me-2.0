import React from "react";
import { profile } from "../data/profile";

const Skills = () => (
  <section id="skills" className="w-full scroll-mt-24">
    <h2 className="section-heading">Skills</h2>
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {profile.skillCategories.map((category) => (
        <div
          key={category.name}
          className="rounded-xl border border-slate-700/80 bg-slate-800/30 p-5"
        >
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
            {category.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-slate-700/60 px-3 py-1.5 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
