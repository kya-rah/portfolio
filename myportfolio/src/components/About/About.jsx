import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a passionate frontend developer with a keen eye for creating engaging and responsive web applications. 
              With a strong foundation in modern web technologies, I strive to build user-friendly interfaces that leave 
              a lasting impression.
            </p>
            <p>
              My journey in web development started with a curiosity for creating beautiful user experiences, 
              and has evolved into a professional pursuit of excellence in frontend development.
            </p>
          </div>
          <div className="skills-list">
            <h3>My Skills</h3>
            <ul>
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Responsive Design</li>
              <li>Version Control (Git)</li>
              <li>UI/UX Principles</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
