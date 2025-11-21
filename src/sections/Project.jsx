import React, { useEffect } from "react";
import "./Project.css";

function Project() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "My personal portfolio website built with React and CSS. This is where I showcase my projects, skills, and experience.",
      image: "/images/Portfolio.JPG",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js"],
      liveUrl: "https://parthlad.vercel.app/",
      repoUrl: "https://github.com/Parthlad1/my-portfolio"
    },
    {
      id: 2,
      title: "Netflix Data Analysis",
      description: "A data analysis project exploring Netflix viewing trends and patterns using Python and data visualization tools.",
      image: "/images/Netflix Dashboard.png",
      technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Tableau"],
      liveUrl: "https://lnkd.in/esSqr6Ya",
      repoUrl: "https://github.com/Parthlad1/netflix-data-analysis"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech">{project.technologies.join(", ")}</p>
            <div className="project-links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Code</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
