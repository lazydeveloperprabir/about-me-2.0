// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section
    id="about"
    className="max-w-5xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10"
  >
    <motion.img
      src="/about.jpg"
      alt="About Me"
      className="w-64 h-64 object-cover rounded-xl shadow-lg"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    />
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-left"
    >
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-300 text-lg leading-relaxed">
      I am an Innovative and accomplished Engineering leader with 13 years of diverse experience in software Development 
      lifecycle as an Architect and Java Full Stack Developer. Specialized in crafting cutting-edge solutions in Distributed 
      Systems and Event-Driven Architecture, with a focus on leveraging AWS for scalable and secure applications. Proficient in 
      building efficient Microservices architectures using Java and Node.js, complemented by a deep 
      understanding of Data Structures & Algorithms. A proven leader with a track record of providing technical guidance, 
      conducting architecture reviews, code reviews and implementing solutions that enhance project efficiency and quality. 
      Skilled in integrating new technologies, optimizing workflows, and reducing manual processes. Recognized for reducing IT expenses, 
      improving cybersecurity, and implementing Agile methodologies resulting in 30% reduction in project delivery time.
      </p>
      <a
        href="/resume.pdf"
        download
        className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </motion.div>
  </section>
);

export default About;