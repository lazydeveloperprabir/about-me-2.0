import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import ProjectCard from "../components/ProjectCard";
import { profile } from "../data/profile";
import AnimatedSection from "../components/motion/AnimatedSection";
import AnimatedHeading from "../components/motion/AnimatedHeading";
import FadeItem from "../components/motion/FadeItem";
import { fadeUpVariants, viewport } from "../utils/motion";

const Projects = () => (
  <AnimatedSection id="projects" className="w-full scroll-mt-24 py-4">
    <AnimatedHeading className="section-heading text-center">
      Selected Work
    </AnimatedHeading>
    <motion.p
      className="mb-10 text-center text-slate-400"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUpVariants}
    >
      Enterprise platforms and systems delivered across retail, healthcare,
      aerospace, and more.
    </motion.p>
    <FadeItem variant="scale" independent>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={600}
        loop
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        className="pb-12"
      >
        {profile.projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <div className="rounded-xl border border-slate-700/80 bg-slate-800/40 p-5 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/5 sm:p-6">
              <ProjectCard {...project} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </FadeItem>
  </AnimatedSection>
);

export default Projects;
