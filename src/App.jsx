import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IntroAvatarOverlay, {
  shouldShowIntro,
} from "./components/IntroAvatarOverlay";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

function App() {
  const [showIntro, setShowIntro] = useState(shouldShowIntro);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      {showIntro && (
        <IntroAvatarOverlay onClose={() => setShowIntro(false)} />
      )}

      <Header />
      <Hero />
      <main className="w-full space-y-20 px-4 py-12 sm:px-6 lg:px-10 xl:px-14 lg:py-14">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
