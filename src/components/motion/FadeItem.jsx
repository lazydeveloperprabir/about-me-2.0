import React from "react";
import { motion } from "framer-motion";
import {
  fadeUpVariants,
  fadeInVariants,
  slideLeftVariants,
  slideRightVariants,
  scaleInVariants,
  viewport,
} from "../../utils/motion";

const variantMap = {
  up: fadeUpVariants,
  in: fadeInVariants,
  left: slideLeftVariants,
  right: slideRightVariants,
  scale: scaleInVariants,
};

const FadeItem = ({
  children,
  className = "",
  variant = "up",
  as: Component = motion.div,
  independent = false,
}) => {
  const variants = variantMap[variant] || fadeUpVariants;

  if (independent) {
    return (
      <Component
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={variants}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  );
};

export default FadeItem;
