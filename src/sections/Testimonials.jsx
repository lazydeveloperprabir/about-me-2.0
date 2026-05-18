import React from "react";
import { FaQuoteLeft, FaLinkedinIn } from "react-icons/fa";
import { profile } from "../data/profile";
import AnimatedSection from "../components/motion/AnimatedSection";
import AnimatedHeading from "../components/motion/AnimatedHeading";
import Stagger from "../components/motion/Stagger";
import FadeItem from "../components/motion/FadeItem";
import { motion } from "framer-motion";
import { fadeUpVariants, viewport } from "../utils/motion";

const Testimonials = () => (
  <AnimatedSection id="testimonials" className="w-full scroll-mt-24">
    <AnimatedHeading className="section-heading text-center">
      Testimonials
    </AnimatedHeading>
    <motion.p
      className="mb-10 text-center text-slate-400"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUpVariants}
    >
      What colleagues say about working together.
    </motion.p>

    <Stagger className="w-full" stagger={0.15}>
      {profile.testimonials.map((item, index) => (
        <FadeItem key={`${item.author}-${index}`} variant="scale">
          <article className="relative rounded-xl border border-slate-700/80 bg-slate-800/30 p-6 transition-all duration-300 hover:border-blue-500/30 md:p-8">
            <FaQuoteLeft
              className="mb-4 text-2xl text-blue-500/40"
              aria-hidden
            />
            <blockquote className="text-base leading-relaxed text-slate-300">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <footer className="mt-6 flex items-center justify-between gap-4 border-t border-slate-700/60 pt-5">
              <div>
                <p className="font-semibold text-white">{item.author}</p>
                <p className="text-sm text-blue-400">{item.role}</p>
                {item.relationship && (
                  <p className="text-xs text-slate-500">{item.relationship}</p>
                )}
              </div>
              {item.linkedin && (
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-600 text-slate-400 transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:text-blue-400"
                  aria-label={`${item.author} on LinkedIn`}
                >
                  <FaLinkedinIn />
                </a>
              )}
            </footer>
          </article>
        </FadeItem>
      ))}
    </Stagger>
  </AnimatedSection>
);

export default Testimonials;
