import './Home.css';
import { motion as Motion } from 'framer-motion';
import { FiArrowDownRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const skills = ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'PostgreSQL'];

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="section-shell home-layout">
        <div className="home-content">
          <Motion.p className="hero-eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <span /> Available for backend engineering opportunities
          </Motion.p>
          <Motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}>
            Parth Lad<span className="hero-dot">.</span>
          </Motion.h1>
          <Motion.h2 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            Software Developer building <em>reliable backend systems.</em>
          </Motion.h2>
          <Motion.p className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.23 }}>
            I develop secure, scalable services with Java and Spring Boot, turning complex enterprise workflows into clear APIs and dependable software.
          </Motion.p>
          <Motion.div className="hero-skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.32 }}>
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </Motion.div>
          <Motion.div className="home-buttons" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <a href="/Parth_Lad_Java_Developer_Resume.pdf" download className="button button-primary">Resume <FiArrowDownRight /></a>
            <a href="#contact" className="button button-secondary">Contact <FiMail /></a>
            <a href="https://www.linkedin.com/in/parth-lad153" target="_blank" rel="noopener noreferrer" className="button button-icon" aria-label="Visit Parth Lad on LinkedIn"><FiLinkedin /></a>
            <a href="https://github.com/Parthlad1" target="_blank" rel="noopener noreferrer" className="button button-icon" aria-label="Visit Parth Lad on GitHub"><FiGithub /></a>
          </Motion.div>
        </div>
        <Motion.div className="hero-portrait-wrap" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.18 }}>
          <div className="portrait-orbit orbit-a" /><div className="portrait-orbit orbit-b" />
          <img className="home-img" src="/images/Profile.jpg" alt="Parth Lad" loading="eager" />
          <div className="hero-status"><span /> Building enterprise-ready software</div>
        </Motion.div>
      </div>
    </section>
  );
}

export default Home;
