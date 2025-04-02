import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="profile-picture">
          <img src="/images/profile.jpg" alt="Your Name" />
        </div>
        <h1>Hi, I'm <span className="highlight">Noemi Keara Asok</span></h1>
        <p className="title">Frontend Developer</p>
        <p className="description">I create beautiful and functional web experiences</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
