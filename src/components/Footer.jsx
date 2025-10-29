import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-t border-gray-800 text-gray-400 overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-400/10 blur-3xl rounded-full"></div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 z-10">
        {/* Column 1 - Info */}
        <div>
          <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text">
            Ashish Kumar
          </h3>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Full Stack Developer passionate about building exceptional digital
            experiences with modern technologies.
          </p>
          <div className="flex gap-5 mt-5">
            <a
              href="https://github.com/ash-ish-88"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-kumar-2c88/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:ashishkkcse46@gmail.com"
              className="p-2 rounded-full bg-gray-800 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#about"
                className="hover:text-cyan-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-cyan-400 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100 mb-4">
            Get In Touch
          </h3>
          <p className="text-sm text-gray-400 mb-1">Open to new opportunities</p>
          <p className="text-sm text-gray-400 mb-3">Available for freelance projects</p>
          <a
            href="mailto:ashishkkcse46@gmail.com"
            className="inline-block text-sm text-cyan-400 hover:text-cyan-300 transition duration-300"
          >
            ashishkkcse46@gmail.com
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 relative z-10"></div>

      {/* Bottom Section */}
      <div className="relative text-center py-5 text-sm text-gray-500 z-10">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-medium">Ashish Kumar</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
