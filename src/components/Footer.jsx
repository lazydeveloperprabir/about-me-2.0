import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { fadeUpVariants, viewport } from "../utils/motion";

const Footer = () => (
  <motion.footer
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={fadeUpVariants}
    className="mt-16 border-t border-slate-800 py-8 text-center text-sm text-slate-500"
  >
    <p>
      &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
    </p>
    <p className="mt-1 text-slate-600">
      {profile.title} · {profile.location}
    </p>
  </motion.footer>
);

export default Footer;
