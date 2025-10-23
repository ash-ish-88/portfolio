import React from 'react'

export default function Navbar(){
  return (
    <header className="py-6">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-2">
        <div className="font-bold text-lg text-primary">AK</div>
        <nav className="hidden md:flex gap-6 items-center text-sm text-muted">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#skills" className="hover:text-primary">Skills</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <div className="md:hidden"> {/* mobile menu button could be added */}
          <button className="p-2 rounded bg-card">Menu</button>
        </div>
      </div>
    </header>
  )
}