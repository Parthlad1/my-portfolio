import './About.css';
import { motion as Motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <Motion.div className="about-container" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} viewport={{ once: true }}>

        <Motion.h2 className="about-title" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}>
          About Me
        </Motion.h2>

        <Motion.p className="about-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          I am <strong>Parth Lad</strong>, a <span className="highlight">Software Developer</span> focused on <strong>Java, Spring Boot, Spring Security, REST APIs, and PostgreSQL</strong>. I enjoy building backend systems that are secure, maintainable, and ready for enterprise-scale workflows.
        </Motion.p>

        <Motion.p className="about-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
          Currently, I work as a <strong>Jr. Associate Technology at AUMLabs</strong>, contributing to enterprise application development through backend logic, API handling, data processing, and responsive application features. I work in Agile environments and collaborate across teams to design, debug, and improve production-ready web applications.
        </Motion.p>

        <Motion.p className="about-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
          My backend foundation includes designing RESTful APIs, working with relational data models, applying authentication and authorization concepts, and connecting application services with databases such as PostgreSQL and MySQL. I also bring experience with React.js, automation workflows, testing, and API integration.
        </Motion.p>

        <Motion.p className="about-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}>
          Previously, I worked as an <strong>RPA Developer Intern at AutomationEdge</strong>, where I built automation workflows for healthcare and BFSI domains, including portal automation and reliability improvements. That experience strengthened my ability to analyze business processes and translate them into dependable software solutions.
        </Motion.p>

        <Motion.h3 className="about-subtitle" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }} viewport={{ once: true }}>
          Open To
        </Motion.h3>

        <Motion.p className="about-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }} viewport={{ once: true }}>
          Java Developer, Spring Boot Developer, Backend Developer, or Software Developer roles where I can contribute to secure REST APIs, enterprise applications, and database-driven backend systems.
        </Motion.p>
      </Motion.div>
    </section>
  );
}

export default About;
