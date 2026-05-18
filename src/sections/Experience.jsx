import React from "react";
import { profile } from "../data/profile";

const Experience = () => (
  <section id="experience" className="w-full scroll-mt-24">
    <h2 className="section-heading">Experience</h2>
    <div className="relative border-l border-slate-700 ml-3 space-y-8">
      {profile.experience.map((job) => (
        <div key={`${job.company}-${job.period}`} className="relative pl-8">
          <span
            className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
              job.current
                ? "bg-blue-500 border-blue-400"
                : "bg-slate-900 border-slate-500"
            }`}
          />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold text-white">{job.role}</h3>
            <span className="text-sm text-slate-400">{job.period}</span>
          </div>
          <p className="text-blue-400 font-medium">{job.company}</p>
          {job.location && (
            <p className="text-sm text-slate-500 mt-0.5">{job.location}</p>
          )}
          {job.note && (
            <p className="text-sm text-slate-500 mt-1 italic">{job.note}</p>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
