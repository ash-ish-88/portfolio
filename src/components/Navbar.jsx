import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-6 bg-background shadow-sm relative">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
        {/* Logo */}
        <div className="font-bold text-lg text-primary">AK</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm text-muted-foreground">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#skills" className="hover:text-primary">Skills</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="p-2 rounded bg-card border hover:bg-primary hover:text-white transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
 <div className="absolute right-4 mt-2 w-48 bg-zinc-900/95 backdrop-blur-md text-white border border-zinc-700 
                rounded-xl shadow-lg divide-y divide-zinc-700 md:hidden z-50">
    {["About","Skills","Projects","Contact"].map((link)=>(
      <a
        key={link}
        href={`#${link.toLowerCase()}`}
        onClick={()=>setIsOpen(false)}
        className="block py-3 text-center hover:bg-zinc-800  transition"
      >
        {link}
      </a>
    ))}
  </div>
)}

    </header>
  );
}
