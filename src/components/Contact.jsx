import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <h2 className="text-3xl font-semibold text-center text-cyan-400">Send me a message</h2>
      <p className="text-center text-gray-400 mt-2 max-w-2xl mx-auto">
        I'm always interested in new opportunities and exciting projects. Whether you have
        a question or just want to say hi, feel free to reach out!
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Left side — Form */}
        <div className="bg-[#0b0f13] border border-white/6 p-6 rounded-xl shadow-lg">
          <form className="space-y-5" action="https://formspree.io/f/xkgqlabj" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm text-gray-300">Name</label>
                <input type="text" name="name" required className="p-3 rounded bg-[#0b1c26] border border-cyan-500/40 text-white placeholder-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-300">Email</label>
                <input
                  type="email" name="email" required  className="p-3 rounded  bg-[#0b1c26] border border-cyan-500/40 text-white placeholder-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-300">Message</label>
              <textarea
                 name="message"
      required className="p-3 rounded  bg-[#0b1c26] border border-cyan-500/40 text-white placeholder-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
                rows="5"
                placeholder="Tell me about your project or just say hello..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded transition-all"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>

        {/* Right side — Contact Info + Connect */}
        <div className="space-y-6">
          <div className="bg-[#0b0f13] border border-white/6 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Contact Information</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <Mail className="text-cyan-400" size={18} />
                <span>ashishkkcse46@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-cyan-400" size={18} />
                <span>+91 6207550464</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-cyan-400" size={18} />
                <span>Noida</span>
              </li>
            </ul>
          </div>

          {/* Connect card */}
          <div className="bg-[#0b0f13] border border-white/6 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Connect with me</h3>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/ash-ish-88"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 text-sm text-white hover:bg-white/3 transition"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ashish-kumar-2c88/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 text-sm text-white hover:bg-white/3 transition"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                LinkedIn
              </a>

              <a
                href="mailto:ashishkkcse46@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 text-sm text-white hover:bg-white/3 transition"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
