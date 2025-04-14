import React from "react";
const Contact = () => (
  <section id="contact" className="max-w-xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-4">Contact</h2>
    <div className="mt-6 flex justify-center gap-6">
       <a href="mailto:prabir.sain@gmail.com" className="text-blue-400">
          <img src="/email.png" alt="GitHub" className="w-8 h-8 hover:scale-110 transition" />
        </a> 
      </div>
  </section>
);

export default Contact;