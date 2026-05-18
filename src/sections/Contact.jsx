import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { profile } from "../data/profile";
import AnimatedSection from "../components/motion/AnimatedSection";
import AnimatedHeading from "../components/motion/AnimatedHeading";
import Stagger from "../components/motion/Stagger";
import FadeItem from "../components/motion/FadeItem";
import { motion } from "framer-motion";
import { fadeUpVariants, viewport } from "../utils/motion";

const links = [
  { href: `mailto:${profile.email}`, label: "Email", icon: FaEnvelope },
  { href: profile.github, label: "GitHub", icon: FaGithub },
  { href: profile.linkedin, label: "LinkedIn", icon: FaLinkedinIn },
];

const Contact = () => (
  <AnimatedSection id="contact" className="w-full scroll-mt-24 text-center">
    <AnimatedHeading>Contact</AnimatedHeading>
    <motion.p
      className="mb-8 text-slate-400"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUpVariants}
    >
      Open to connecting on engineering leadership, architecture, and impactful
      technical collaborations.
    </motion.p>

    <Stagger className="flex justify-center gap-6" stagger={0.12}>
      {links.map(({ href, label, icon: Icon }) => (
        <FadeItem key={label} variant="scale">
          <a
            href={href}
            target={label === "Email" ? undefined : "_blank"}
            rel="noreferrer"
            title={label}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-600 bg-slate-800/60 text-2xl text-slate-300 transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
          >
            <Icon />
          </a>
        </FadeItem>
      ))}
    </Stagger>

    <FadeItem variant="in" independent>
      <p className="mt-6 text-sm text-slate-500">
        <a
          href={`mailto:${profile.email}`}
          className="text-blue-400 transition-colors duration-200 hover:underline"
        >
          {profile.email}
        </a>
      </p>
    </FadeItem>
  </AnimatedSection>
);

export default Contact;
