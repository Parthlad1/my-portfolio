import './Home.css';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section id="home" className="home-section">
      {/* Profile Image */}
      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1 }}>
        <img className="home-img" src="/images/Profile.jpg" alt="Profile" loading="eager"/>
      </motion.div>

      <div className="home-content">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Hi, I'm <span>Parth Lad</span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Full Stack Developer | Automation Enthusiast | Tech Explorer
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I create scalable, data-driven, and user-friendly web applications using React.js, Node.js,
          and Express.js. Passionate about blending frontend creativity with backend precision, I love
          building tools that simplify work and make technology more intuitive.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="home-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <motion.a
            href="#projects"
            className="home-btn"
            whileHover={{ scale: 1.1, backgroundColor: "#008fcc" }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="/ParthLad_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="home-btn"
            whileHover={{ scale: 1.1, backgroundColor: "#008fcc" }}
          >
            View Resume
          </motion.a>
          <motion.a
            href="#contact"
            className="home-btn"
            whileHover={{ scale: 1.1, backgroundColor: "#008fcc" }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href="https://github.com/Parthlad1"
            target="_blank"
            rel="noopener noreferrer"
            className="home-btn"
            whileHover={{ scale: 1.1, backgroundColor: "#008fcc" }}
          >
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
