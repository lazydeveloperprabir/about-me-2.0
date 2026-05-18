import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { profile } from "../data/profile";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Work", id: "projects" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md"
    >
      <nav className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-10 xl:px-14">
        <a
          href="#hero"
          className="text-lg font-semibold tracking-tight text-white transition-colors duration-200 hover:text-blue-400"
        >
          {profile.name.split(" ")[0]}
          <span className="text-blue-400">.</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {navItems.map(({ label, id }, i) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.35 }}
            >
              <a
                href={`#${id}`}
                className="nav-link text-sm font-medium text-slate-300"
              >
                {label}
              </a>
            </motion.li>
          ))}
        </ul>

        <button
          type="button"
          className="text-2xl text-slate-300 transition-transform duration-200 hover:scale-110 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-800 px-4 md:hidden"
          >
            {navItems.map(({ label, id }, i) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
              >
                <a
                  href={`#${id}`}
                  className="block py-2 text-slate-300 transition-colors duration-200 hover:text-blue-400"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
