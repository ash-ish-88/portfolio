import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f13] border-t border-white/10 pt-10 pb-6 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Column 1 - Info */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-400">Ashish Kumar</h3>
          <p className="mt-3 text-sm leading-relaxed">
            Full Stack Developer passionate about creating exceptional digital
            experiences with modern technologies.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/ash-ish-88"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-kumar-2c88/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:ashishkkcse46@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get In Touch</h3>
          <p className="text-sm">Open to new opportunities</p>
          <p className="text-sm">Available for freelance projects</p>
          <a
            href="mailto:ashishkkcse46@gmail.com"
            className="text-sm text-gray-300 hover:text-cyan-400 transition mt-2 block"
          >
            ashishkkcse46@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-white/10 pt-6 flex justify-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Ashish Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}
