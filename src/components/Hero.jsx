import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-12">
      {/* Left Section */}
      <div className="md:col-span-2">
        <p className="text-teal-300 text-sm">Available for opportunities</p>

        <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
          Hi, I'm <span className="text-primary">Ashish Kumar</span>
        </h1>

        <p className="mt-4 text-lg">
          I build exceptional digital experiences with modern technologies. <br />
          Specializing in MERN stack, and Backend development to create <br />
          scalable, user-focused applications.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3 items-center">
          <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-black transition"
>
  <FaDownload /> View Resume
</a>

          <a
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-card hover:bg-primary/10 transition"
            href="#contact"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex gap-4 text-sm text-muted items-center">
          <span>Connect with me:</span>

          <a
            href="https://github.com/ash-ish-88"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary text-xl"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:ashishkkcse46@gmail.com"
            className="hover:text-primary text-xl"
            title="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/ashish-kumar-2c88/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary text-xl"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Right Section — Profile Image */}
  <div className="mx-auto w-52 h-60 card rounded-xl shadow-card flex items-center justify-center overflow-hidden">
  <img
    src="/src/components/profilepic4.jpeg"
    alt="Ashish Kumar"
    className="w-full h-full object-cover object-[center_35%] rounded-xl"
  />
</div>


    </section>
  );
}



