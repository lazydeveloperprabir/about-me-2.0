import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import AnimatedSection from "../components/motion/AnimatedSection";
import AnimatedHeading from "../components/motion/AnimatedHeading";
import Stagger from "../components/motion/Stagger";
import FadeItem from "../components/motion/FadeItem";
import { slideLeftVariants, slideRightVariants, viewport } from "../utils/motion";

const About = () => (
  <AnimatedSection id="about" className="w-full scroll-mt-24">
    <AnimatedHeading>About</AnimatedHeading>
    <div className="flex flex-col items-start gap-12 md:flex-row">
      <motion.img
          src="/about.jpg"
          alt={profile.name}
          className="h-72 w-full max-w-xs shrink-0 rounded-2xl object-cover shadow-xl ring-1 ring-slate-700 md:w-72"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideLeftVariants}
        />
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideRightVariants}
        >
          <Stagger className="space-y-4" stagger={0.12}>
            {profile.about.map((paragraph, i) => (
              <FadeItem key={i}>
                <p className="text-lg leading-relaxed text-slate-300">{paragraph}</p>
              </FadeItem>
            ))}
          </Stagger>

          <Stagger className="mt-8 grid gap-4 sm:grid-cols-3" stagger={0.1}>
            {profile.expertise.map((area) => (
              <FadeItem key={area.title} variant="scale">
                <div className="h-full rounded-xl border border-slate-700/80 bg-slate-800/40 p-4 transition-colors duration-300 hover:border-blue-500/40 hover:bg-slate-800/60">
                  <h3 className="mb-2 text-sm font-semibold text-blue-400">
                    {area.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {area.description}
                  </p>
                </div>
              </FadeItem>
            ))}
          </Stagger>

          <Stagger className="mt-8 flex flex-wrap gap-6 border-t border-slate-700/80 pt-8" stagger={0.15}>
            <FadeItem>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Education
                </p>
                <p className="mt-1 font-medium text-white">{profile.education.degree}</p>
                <p className="text-sm text-slate-400">{profile.education.field}</p>
                <p className="text-sm text-slate-500">
                  {profile.education.school} · {profile.education.period}
                </p>
              </div>
            </FadeItem>
            <FadeItem>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Certifications
                </p>
                <ul className="mt-1 space-y-1">
                  {profile.certifications.map((cert) => (
                    <li key={cert.name} className="text-sm text-slate-300">
                      {cert.name}
                      <span className="text-slate-500"> — {cert.issuer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeItem>
          </Stagger>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default About;
