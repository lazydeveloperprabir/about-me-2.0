import React from "react";
import { FaQuoteLeft, FaLinkedinIn } from "react-icons/fa";
import { profile } from "../data/profile";

const Testimonials = () => (
  <section id="testimonials" className="w-full scroll-mt-24">
    <h2 className="section-heading text-center">Testimonials</h2>
    <p className="mb-10 text-center text-slate-400">
      What colleagues say about working together.
    </p>

    <div className="w-full">
      {profile.testimonials.map((item, index) => (
          <article
            key={`${item.author}-${index}`}
            className="relative rounded-xl border border-slate-700/80 bg-slate-800/30 p-6 md:p-8"
            data-aos="fade-up"
          >
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
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-600 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
                  aria-label={`${item.author} on LinkedIn`}
                >
                  <FaLinkedinIn />
                </a>
              )}
            </footer>
          </article>
      ))}
    </div>
  </section>
);

export default Testimonials;
