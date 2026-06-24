import React, { useEffect } from "react";
import "./Project.css";

function Project() {
  const projects = [
    {
      id: 1,
      title: "Object Factory & Code Generation Platform",
      description: "Enterprise development platform for generating reusable application objects, reducing repetitive setup work, and improving consistency across backend modules.",
      technologies: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "Maven"],
    },
    {
      id: 2,
      title: "Authentication Service (TTC Platform)",
      description: "Authentication-focused backend service for secure user access, API protection, and role-based application workflows within the TTC platform.",
      technologies: ["Java", "Spring Boot", "Spring Security", "REST APIs", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Ohioans Medicaid Portal Automation",
      description: "Healthcare automation workflow for Medicaid portal processes, designed to improve reliability, reduce manual effort, and support eligibility-related operations.",
      technologies: ["AutomationEdge", "Process Studio", "Healthcare Automation", "Testing", "Workflow Debugging"],
    },
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
      <h2>Professional Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {project.image && (
              <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
            )}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech">{project.technologies.join(", ")}</p>
            {(project.liveUrl || project.repoUrl) && (
              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Code</a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
