import React from "react";
import { profile } from "../data/profile";
import AnimatedSection from "../components/motion/AnimatedSection";
import AnimatedHeading from "../components/motion/AnimatedHeading";
import Stagger from "../components/motion/Stagger";
import FadeItem from "../components/motion/FadeItem";

const Experience = () => (
  <AnimatedSection id="experience" className="w-full scroll-mt-24">
    <AnimatedHeading>Experience</AnimatedHeading>
    <Stagger
      className="relative ml-3 space-y-8 border-l border-slate-700"
      stagger={0.12}
    >
      {profile.experience.map((job) => (
        <FadeItem key={`${job.company}-${job.period}`} variant="left">
          <div className="relative pl-8">
            <span
              className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 transition-colors duration-300 ${
                job.current
                  ? "bg-blue-500 border-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                  : "bg-slate-900 border-slate-500"
              }`}
            />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">{job.role}</h3>
              <span className="text-sm text-slate-400">{job.period}</span>
            </div>
            <p className="font-medium text-blue-400">{job.company}</p>
            {job.location && (
              <p className="mt-0.5 text-sm text-slate-500">{job.location}</p>
            )}
            {job.note && (
              <p className="mt-1 text-sm italic text-slate-500">{job.note}</p>
            )}
          </div>
        </FadeItem>
      ))}
    </Stagger>
  </AnimatedSection>
);

export default Experience;
