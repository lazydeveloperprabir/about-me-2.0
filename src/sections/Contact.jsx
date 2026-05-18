import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { profile } from "../data/profile";

const links = [
  {
    href: `mailto:${profile.email}`,
    label: "Email",
    icon: FaEnvelope,
  },
  {
    href: profile.github,
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: profile.linkedin,
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
];

const Contact = () => (
  <section
    id="contact"
    className="w-full scroll-mt-24 text-center"
    data-aos="fade-up"
  >
    <h2 className="section-heading">Contact</h2>
    <p className="mb-8 text-slate-400">
      Open to connecting on engineering leadership, architecture, and impactful
      technical collaborations.
    </p>

    <div className="flex justify-center gap-6">
      {links.map(({ href, label, icon: Icon }, i) => (
        <a
          key={label}
          href={href}
          target={label === "Email" ? undefined : "_blank"}
          rel="noreferrer"
          title={label}
          data-aos="fade-up"
          data-aos-delay={100 * (i + 1)}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-600 bg-slate-800/60 text-2xl text-slate-300 transition hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
        >
          <Icon />
        </a>
      ))}
    </div>

    <p className="mt-6 text-sm text-slate-500">
      <a
        href={`mailto:${profile.email}`}
        className="text-blue-400 hover:underline"
      >
        {profile.email}
      </a>
    </p>
  </section>
);

export default Contact;
