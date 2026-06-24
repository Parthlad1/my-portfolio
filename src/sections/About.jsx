import './About.css';
import { motion as Motion } from 'framer-motion';

function About() {
  return (
    <section className="about" id="about">
      <div className="section-shell about-layout">
        <Motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
          <p className="section-kicker">01 / About</p><h2 className="section-heading">Backend work with clarity, security, and purpose.</h2>
        </Motion.div>
        <Motion.div className="about-copy" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: 0.08 }}>
          <p>I am a Java-focused Software Developer at <strong>AUMLabs</strong>, contributing to enterprise applications where robust service logic, secure data flow, and dependable integrations matter.</p>
          <p>My core toolkit is <strong>Java, Spring Boot, Spring Security, REST APIs, and PostgreSQL</strong>. I enjoy turning business requirements into maintainable backend services that teams can build on with confidence.</p>
          <div className="about-principles"><span>Enterprise applications</span><span>Secure API design</span><span>Database-driven systems</span></div>
        </Motion.div>
      </div>
    </section>
  );
}

export default About;
