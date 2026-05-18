import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Hero = () => (
  <section
    id="hero"
    className="relative flex min-h-screen items-center justify-center scroll-mt-24 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url("/banner.jpg")' }}
  >
    <div className="absolute inset-0 bg-slate-950/75" />
    <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
      <motion.img
        src="/profile.jpg"
        alt={profile.name}
        className="mx-auto mb-8 h-48 w-48 rounded-full border-4 border-slate-700 object-cover shadow-2xl ring-2 ring-blue-500/30 md:h-56 md:w-56"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-400"
      >
        {profile.title}
      </motion.p>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="text-4xl font-bold tracking-tight text-white md:text-5xl"
      >
        {profile.name}
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mt-4 text-lg leading-relaxed text-slate-300 md:text-xl"
      >
        {profile.tagline}
      </motion.p>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="mt-3 flex items-center justify-center gap-1.5 text-sm text-slate-400"
      >
        <HiOutlineLocationMarker className="text-blue-400" />
        {profile.location}
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <a href="#contact" className="btn-primary">
          Get in Touch
        </a>
        <a
          href="/resume.pdf"
          download
          className="btn-secondary"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
