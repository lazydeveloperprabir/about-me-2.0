import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";

const About = () => (
  <section
    id="about"
    className="w-full scroll-mt-24"
  >
    <h2 className="section-heading">About</h2>
    <div className="flex flex-col items-start gap-12 md:flex-row">
      <motion.img
        src="/about.jpg"
        alt={profile.name}
        className="h-72 w-full max-w-xs shrink-0 rounded-2xl object-cover shadow-xl ring-1 ring-slate-700 md:w-72"
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        {profile.about.map((paragraph, i) => (
          <p key={i} className="mb-4 text-lg leading-relaxed text-slate-300">
            {paragraph}
          </p>
        ))}

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {profile.expertise.map((area) => (
                <div
                  key={area.title}
                  className="rounded-xl border border-slate-700/80 bg-slate-800/40 p-4"
                >
                  <h3 className="mb-2 text-sm font-semibold text-blue-400">
                    {area.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
        <div className="mt-8 flex flex-wrap gap-6 border-t border-slate-700/80 pt-8">
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
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
