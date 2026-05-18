import React from "react";
import { profile } from "../data/profile";

const Footer = () => (
  <footer className="mt-16 border-t border-slate-800 py-8 text-center text-sm text-slate-500">
    <p>
      &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
    </p>
    <p className="mt-1 text-slate-600">
      {profile.title} · {profile.location}
    </p>
  </footer>
);

export default Footer;
