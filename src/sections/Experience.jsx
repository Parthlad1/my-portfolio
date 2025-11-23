import React, { useEffect, useRef } from 'react';

import './Experience.css';

function Experience() {
  const sectionRef = useRef(null);
    const experienceData = [
  {
    title: "Jr. Associate Technology",
    company: "AUMLabs",
    duration: "Nov 2025 – Present",
    points: [
      "Working on the Vedbhoomi Web Application using React.js (frontend) and ASP.NET (C#) (backend).",
      "Developing UI components, forms, and responsive pages.",
      "Supporting backend development: API handling, data processing, and logic implementation.",
      "Managing file assets using AWS S3 (uploading, retrieving, organizing).",
      "Working in an Agile environment with JIRA for task tracking and issue resolution.",
      "Debugging UI and backend issues to enhance overall web application functionality."
    ]
  },
  {
    title: "RPA Developer Intern",
    company: "AutomationEdge",
    duration: "Apr 2025 – Sep 2025",
    points: [
      "Worked on a live healthcare automation project used for real-time insurance eligibility checks.",
      "Developed 5+ automation workflows for BFSI & Healthcare use cases.",
      "Debugged workflows and collaborated with developers to improve reliability.",
      "Tested and validated Process Studio plugins for accuracy, reliability, and performance.",
      "Reported defects and collaborated with the team to enhance plugin stability."
    ]
  }
];
// 🔥 Use useEffect to run observer after component mounts
useEffect(() => {
  const section = sectionRef.current;

  const handleScroll = () => {
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // ⭐ Start when section reaches the top of the viewport
    const start = 0;

    // ⭐ End when the entire section scrolls out of view
    const end = -rect.height;

    // ⭐ Calculate progress (0 → 1)
    let progress = (start - rect.top) / (start - end);

    // Clamp between 0–1
    progress = Math.min(Math.max(progress, 0), 1);

    // ⭐ Add speed control (optional)
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
        <h2>Work Experience</h2>

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
    )
}

export default Experience;