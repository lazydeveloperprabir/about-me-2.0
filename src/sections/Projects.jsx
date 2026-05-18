import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProjectCard from "../components/ProjectCard";
import { profile } from "../data/profile";

const Projects = () => (
  <section id="projects" className="scroll-mt-24 py-4" data-aos="fade-in">
    <div className="mx-auto max-w-6xl">
      <h2 className="section-heading text-center">Selected Work</h2>
      <p className="mb-10 text-center text-slate-400">
        Enterprise platforms and systems delivered across retail, healthcare, aerospace, and more.
      </p>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        modules={[Navigation, Pagination, Autoplay]}
        className="pb-12"
      >
        {profile.projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <div className="mx-4 rounded-xl border border-slate-700/80 bg-slate-800/40 p-6 md:mx-12 lg:mx-16">
              <ProjectCard {...project} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Projects;
