import React from "react";
import { profile } from "../data/profile";
import AnimatedSection from "../components/motion/AnimatedSection";
import AnimatedHeading from "../components/motion/AnimatedHeading";
import Stagger from "../components/motion/Stagger";
import FadeItem from "../components/motion/FadeItem";

const Skills = () => (
  <AnimatedSection id="skills" className="w-full scroll-mt-24">
    <AnimatedHeading>Skills</AnimatedHeading>
    <Stagger className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4" stagger={0.1}>
      {profile.skillCategories.map((category) => (
        <FadeItem key={category.name} variant="scale">
          <div className="h-full rounded-xl border border-slate-700/80 bg-slate-800/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-slate-700/60 px-3 py-1.5 text-sm text-slate-200 transition-colors duration-200 hover:bg-slate-600/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </FadeItem>
      ))}
    </Stagger>
  </AnimatedSection>
);

export default Skills;
