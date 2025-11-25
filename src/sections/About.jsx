import './About.css';
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">

      <motion.div className="about-container" initial={{ opacity: 0, y: 40 }} whileInView={{opacity:1, y:0}}
        transition={{ duration: 1 }} viewport={{ once: true }}>

        {/* Title Animation */}
        <motion.h2 className="about-title" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}>
          About Me
        </motion.h2>

        {/* Paragraph Animations */}
        <motion.p className="about-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          I’m <strong>Parth Lad</strong>, a <span className="highlight">Full Stack Developer</span> with hands-on experience in <strong>React.js, Node.js, Express.js, ASP.NET (C#), and AWS S3</strong>. I’ve built responsive web applications, integrated APIs, and managed cloud-based workflows, delivering scalable and user-friendly solutions.
        </motion.p>

        <motion.p className="about-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
          Currently, I work as a <strong>Jr. Associate Technology at AUMLabs</strong>, developing frontend UI components in React.js and backend logic in ASP.NET, while managing cloud file assets with AWS S3. I thrive in <strong>Agile environments</strong>, collaborating to design, debug, and optimize web applications.
        </motion.p>

        <motion.p className="about-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
          Previously, I gained experience as an <strong>RPA Developer Intern at AutomationEdge</strong>, building automation workflows for healthcare and BFSI domains, streamlining processes and improving reliability. I also have experience in <strong>software testing, API integration, and data analysis</strong>.
        </motion.p>

        <motion.p className="about-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}>
          My foundation spans <strong>frontend and backend development, cloud management, automation,</strong> and <strong>data analysis</strong>, enabling me to approach problems with both technical precision and creative solutions. I’m eager to contribute to projects that deliver meaningful, data-driven, and impactful solutions.
        </motion.p>

        {/* Subtitle Animation */}
        <motion.h3 className="about-subtitle" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }} viewport={{ once: true }}>
          Open To
        </motion.h3>

        <motion.p className="about-text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }} viewport={{ once: true }}>
          Frontend, Backend, or Full Stack Development roles where I can contribute to building responsive, scalable, and data-driven applications.
        </motion.p>

      </motion.div>

    </section>
  );
}

export default About;
