import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

function Experience() {
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

  return (
    <section id="experience" className="section">
      <h2>Work Experience</h2>

      {experienceData.map((exp, index) => (
        <motion.div
          key={index}
          className="card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
            ease: "easeOut"
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="dot-animator"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.25 }}
            viewport={{ once: true }}
          />

          <h3>{exp.title}</h3>
          <h4>{exp.company}</h4>
          <span>{exp.duration}</span>

          <ul>
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </section>
  );
}

export default Experience;
