import React, { useEffect, useRef } from 'react';

import './Experience.css';

function Experience() {
  const sectionRef = useRef(null);
  const experienceData = [
    {
      title: "Jr. Associate Technology",
      company: "AUMLabs",
      duration: "Nov 2025 - Present",
      points: [
        "Contributing to enterprise application development with backend logic, API handling, data processing, and responsive web features.",
        "Working with application modules that require secure data flow, maintainable service logic, and reliable integration between frontend and backend layers.",
        "Supporting REST API workflows, debugging application issues, and improving functionality across production-oriented web applications.",
        "Collaborating in an Agile environment with JIRA for task tracking, issue resolution, and iterative delivery."
      ]
    },
    {
      title: "RPA Developer Intern",
      company: "AutomationEdge",
      duration: "Apr 2025 - Sep 2025",
      points: [
        "Built automation workflows for healthcare and BFSI use cases, including real-time insurance eligibility and portal automation processes.",
        "Developed and tested automation flows that improved process reliability and reduced repetitive manual effort.",
        "Debugged workflows, validated Process Studio plugins, and collaborated with developers to improve stability and accuracy.",
        "Documented defects and supported quality improvements through testing, validation, and issue analysis."
      ]
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;

    const handleScroll = () => {
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const start = 0;
      const end = -rect.height;
      let progress = (start - rect.top) / (start - end);

      progress = Math.min(Math.max(progress, 0), 1);

      const speed = 1.3;
      const adjustedProgress = Math.min(progress * speed, 1);
      const maxHeight = section.offsetHeight - 330;
      const currentHeight = maxHeight * adjustedProgress;

      section.style.setProperty("--line-height", `${currentHeight}px`);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="section" ref={sectionRef}>
      <h2>Professional Experience</h2>

      {experienceData.map((exp, index) => (
        <div key={index} className="card">
          <h3>{exp.title}</h3>
          <h4>{exp.company}</h4>
          <span>{exp.duration}</span>
          <ul>
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
