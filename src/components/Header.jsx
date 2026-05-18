import React, { useState } from "react";
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
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <a
          href="#hero"
          className="text-lg font-semibold tracking-tight text-white"
        >
          {profile.name.split(" ")[0]}
          <span className="text-blue-400">.</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-2xl text-slate-300 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-slate-800 px-4 py-4 md:hidden">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block py-2 text-slate-300 hover:text-blue-400"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
