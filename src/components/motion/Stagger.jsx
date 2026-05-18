import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, viewport } from "../../utils/motion";

const Stagger = ({
  children,
  className = "",
  stagger = 0.1,
  delayChildren = 0.05,
  as: Component = motion.div,
}) => (
  <Component
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={staggerContainer(stagger, delayChildren)}
  >
    {children}
  </Component>
);

export default Stagger;
