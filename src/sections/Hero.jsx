
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section
    id="hero"
    className="relative text-center w-full h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url("/banner.jpg")' }}
  >
    <div className="bg-black bg-opacity-60 absolute inset-0"></div>
    <div className="relative z-10 text-center">
      <motion.img
        src="/profile.jpg"
        alt="Profile"
        className="w-64 h-64 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-bold text-white flex justify-center items-center gap-2"
      >
        Hi, I'm Prabir
        <motion.span
          role="img"
          aria-label="waving hand"
          className="inline-block origin-bottom-right"
          animate={{
            rotate: [0, 20, -10, 20, -5, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          👋
        </motion.span>
      </motion.h2>
      <p className="text-lg mt-4 text-gray-200">
        Full-Stack Developer | AWS Certified architect | Tech Enthusiast
      </p>
    </div>
  </section>
);

export default Hero;
