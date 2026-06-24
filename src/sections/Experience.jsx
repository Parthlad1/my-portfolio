import { motion as Motion } from 'framer-motion';
import './Experience.css';

const experienceData = [
  { title: 'Jr. Associate Technology', company: 'AUMLabs', duration: 'Nov 2025 - Present', points: ['Contributing to enterprise application development through backend logic, API handling, and data processing.', 'Supporting secure service flows and reliable frontend-to-backend integration across production-oriented applications.', 'Working in an Agile environment with JIRA for iterative delivery, issue resolution, and collaboration.'] },
  { title: 'RPA Developer Intern', company: 'AutomationEdge', duration: 'Apr 2025 - Sep 2025', points: ['Built automation workflows for healthcare and BFSI processes, including eligibility and portal automation.', 'Tested and debugged workflow behavior to improve reliability and reduce repetitive manual effort.', 'Partnered with developers on validation, defect analysis, and quality improvements.'] },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-shell">
        <Motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}><p className="section-kicker">03 / Experience</p><h2 className="section-heading">Building in real-world environments.</h2></Motion.div>
        <div className="experience-timeline">{experienceData.map((experience, index) => <Motion.article className="experience-entry" key={experience.company} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.1 }}>
          <div className="timeline-point" /><div className="experience-meta"><span>{experience.duration}</span><h3>{experience.company}</h3></div><div className="experience-card"><h4>{experience.title}</h4><ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
        </Motion.article>)}</div>
      </div>
    </section>
  );
}

export default Experience;
