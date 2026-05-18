import React from "react";
import { motion } from "framer-motion";
import { headingVariants, viewport } from "../../utils/motion";

const AnimatedHeading = ({ children, className = "section-heading" }) => (
  <motion.h2
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={headingVariants}
  >
    {children}
  </motion.h2>
);

export default AnimatedHeading;
