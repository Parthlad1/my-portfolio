import './Home.css';
import { motion as Motion } from 'framer-motion';

function Home() {
  return (
    <section id="home" className="home-section">
      {/* Profile Image */}
      <Motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1 }}>
        <img className="home-img" src="/images/Profile.jpg" alt="Profile" loading="eager"/>
      </Motion.div>

      <div className="home-content">
        {/* Heading */}
        <Motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }} >
          Hi, I'm <span>Parth Lad</span>
        </Motion.h1>

        {/* Subheading */}
        <Motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }} >
          Software Developer | Java | Spring Boot | Backend Development
        </Motion.h2>

        {/* Paragraph */}
        <Motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }} >
          I build secure, scalable backend systems with Java, Spring Boot, Spring Security,
          REST APIs, and PostgreSQL. I enjoy designing reliable application logic, clean APIs,
          and enterprise-ready services that solve real business problems.
        </Motion.p>

        {/* Buttons */}
        <Motion.div className="home-buttons" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }} >

          <Motion.a href="/Parth_Lad_Java_Developer_Resume.pdf" download
            className="home-btn" whileHover={{ scale: 1.1, backgroundColor: "#008fcc" }}>
            Download Resume
          </Motion.a>

          <Motion.a href="#projects" className="home-btn"
            whileHover={{ scale: 1.1, backgroundColor: "#008fcc" }} >
            View Projects
          </Motion.a>

          <Motion.a href="#contact" className="home-btn"
            whileHover={{ scale: 1.1, backgroundColor: "#008fcc" }} >
            Contact Me
          </Motion.a>

          <Motion.a href="https://github.com/Parthlad1" target="_blank" rel="noopener noreferrer"
            className="home-btn" whileHover={{ scale: 1.1, backgroundColor: "#008fcc" }}>
            GitHub
          </Motion.a>
        </Motion.div>
      </div>
    </section>
  );
}

export default Home;
