import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // only animate once on scroll
      easing: 'ease-in-out',
    });
  }, []);
  
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <main className="space-y-24 px-4 md:px-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;