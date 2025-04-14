// import React from "react";

// const Contact = () => (
//   <section
//     id="contact"
//     className="max-w-xl mx-auto text-center mt-20 p-6 backdrop-blur-md bg-white/20 dark:bg-white/10 rounded-xl border border-white/30 dark:border-white/20 shadow-lg"
//     data-aos="fade-up"
//   >
//     <h2 className="text-3xl font-semibold mb-4 text-[cornflowerblue]">Contact</h2>

//     <div className="flex justify-center items-center gap-8 mt-6">
//       <a
//         href="mailto:prabir.sain@gmail.com"
//         className="hover:scale-110 transition"
//         title="Email"
//       >
//         <img src="/email.png" alt="Email" className="w-8 h-8" />
//       </a>

//       <a
//         href="https://github.com/lazydeveloperprabir?tab=repositories"
//         target="_blank"
//         rel="noreferrer"
//         className="hover:scale-110 transition"
//         title="GitHub"
//       >
//         <img src="/github-500.png" alt="GitHub" className="w-8 h-8" />
//       </a>

//       <a
//         href="https://www.linkedin.com/in/prabir-padhy/"
//         target="_blank"
//         rel="noreferrer"
//         className="hover:scale-110 transition"
//         title="LinkedIn"
//       >
//         <img src="/linkedin-2.svg" alt="LinkedIn" className="w-8 h-8" />
//       </a>
//     </div>
//   </section>
// );

// export default Contact;

import React from "react";

const Contact = () => (
  <section
    id="contact"
    className="max-w-xl mx-auto text-center mt-20 p-6 backdrop-blur-md bg-white/20 dark:bg-white/10 rounded-xl border border-white/30 dark:border-white/20 shadow-lg"
    data-aos="zoom-in"
  >
    <h2 className="text-3xl font-semibold mb-4 text-[cornflowerblue]" data-aos="fade-down">
      Reach Me @
    </h2>

    <div className="flex justify-center items-center gap-8 mt-6">
      <a
        href="mailto:prabir.sain@gmail.com"
        className="hover:scale-110 transition"
        title="Email"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <img src="/email.png" alt="Email" className="w-8 h-8" />
      </a>

      <a
        href="https://github.com/lazydeveloperprabir?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 transition"
        title="GitHub"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img src="/github-500.png" alt="GitHub" className="w-8 h-8" />
      </a>

      <a
        href="https://www.linkedin.com/in/prabir-padhy/"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 transition"
        title="LinkedIn"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <img src="/linkedin-2.svg" alt="LinkedIn" className="w-8 h-8" />
      </a>
    </div>
  </section>
);

export default Contact;
