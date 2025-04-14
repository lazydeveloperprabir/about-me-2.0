import React from "react";
const Header = () => (
  <header className="sticky top-0 bg-gray-800 text-white z-50 shadow-md">
    <nav className="flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-bold">Prabir</h1>
      <ul className="flex gap-6">
        {["Hero", "About", "Skills", "Projects", "Contact"].map(section => (
          <li key={section}>
            <a href={`#${section.toLowerCase()}`} className="hover:text-blue-400">{section}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;