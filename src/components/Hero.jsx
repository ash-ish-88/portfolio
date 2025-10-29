import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-3 gap-10 items-center py-20 px-6 
                        bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="md:col-span-2"
      >
        <p className="text-teal-400 text-sm uppercase tracking-wide">
          Available for opportunities
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent animate-pulse">
            Ashish Kumar
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          I build exceptional digital experiences with modern technologies. <br />
          Specializing in MERN stack and backend development to create <br />
          scalable, user-focused applications.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3 items-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-teal-500 text-teal-400 
                       hover:bg-teal-500 hover:text-black transition"
          >
            <FaDownload /> View Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex gap-5 text-sm text-gray-400 items-center">
          <span>Connect with me:</span>

          <a
            href="https://github.com/ash-ish-88"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 text-2xl transition transform hover:scale-125 hover:drop-shadow-[0_0_6px_#14b8a6]"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:ashishkkcse46@gmail.com"
            className="hover:text-teal-400 text-2xl transition transform hover:scale-125 hover:drop-shadow-[0_0_6px_#14b8a6]"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/ashish-kumar-2c88/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 text-2xl transition transform hover:scale-125 hover:drop-shadow-[0_0_6px_#14b8a6]"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>

      {/* Right Section — Profile Image */}
      <motion.div
  animate={{ opacity: 1, x: 0 }}
        className="mx-auto w-56 h-64 rounded-xl overflow-hidden border border-gray-700 
                   shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
      >
        <img
          src="/profilepic4.jpeg"
          alt="Ashish Kumar"
          className="w-full h-full object-cover object-[center_27%]"
        />
      </motion.div>
    </section>
  );
}
