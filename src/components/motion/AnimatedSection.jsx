import React from "react";
import { motion } from "framer-motion";
import { sectionVariants, viewport } from "../../utils/motion";

const AnimatedSection = ({ id, className = "", children }) => (
  <motion.section
    id={id}
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={sectionVariants}
  >
    {children}
  </motion.section>
);

export default AnimatedSection;
