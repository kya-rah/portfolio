import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Awesometodos",
      description: "A responsive web application built with React and modern CSS",
      image: "/images/Project1.png",
      tags: ["React", "Express", "Node.js", "MongoDB"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Iskor",
      description: "An interactive dashboard with real-time data visualization",
      image: "/images/Project2.png",
      tags: ["React", "Express", "Node.js", "MongoDB"],
      liveLink: "#",
      codeLink: "#"
    },
    
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn">View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
