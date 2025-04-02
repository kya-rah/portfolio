import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-brand">Portfolio</div>
      <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <a href="#home" className="nav-item">Home</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#skills" className="nav-item">Skills</a>
        <a href="#contact" className="nav-item">Contact</a>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar
