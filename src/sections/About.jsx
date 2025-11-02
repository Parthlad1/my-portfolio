import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title"> About Me</h2>
        <p className="about-text">
          I’m <strong>Parth Lad</strong>, a{" "}
          <span className="highlight">Computer Science postgraduate</span> and{" "}
          <span className="highlight">technology enthusiast</span> driven by the
          art of building <strong>scalable, efficient,</strong> and{" "}
          <strong>user-focused web applications</strong>.
        </p>

        <p className="about-text">
          With hands-on experience in <strong>Java</strong>,{" "}
          <strong>Python</strong>, <strong>SQL</strong>, and{" "}
          <strong>RPA automation</strong>, I’ve built and optimized automation
          workflows that streamlined processes, reduced manual effort, and
          improved reliability.
        </p>

        <p className="about-text">
          Currently, I’m expanding into{" "}
          <strong>Full Stack Development</strong>, mastering{" "}
          <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,
          and <strong>React.js</strong> to craft seamless front-end experiences
          connected with powerful back-end systems.
        </p>

        <p className="about-text">
          My foundation spans <strong>backend development</strong>,{" "}
          <strong>automation</strong>, and <strong>data analytics</strong>,
          helping me approach problems with both analytical precision and
          developer creativity. I love building tools that simplify work,
          visualize insights, and deliver measurable impact.
        </p>

        <h3 className="about-subtitle"> Core Skills</h3>
        <p className="about-text">
          Java • Python • React.js • SQL • HTML • CSS • JavaScript • RPA
          (AutomationEdge) • Data Analysis • Tableau • Git & GitHub
        </p>

        <h3 className="about-subtitle"> Currently Exploring</h3>
        <p className="about-text">
          React.js, Node.js, and API Integration for full-stack applications.
        </p>

        <h3 className="about-subtitle"> Open To</h3>
        <p className="about-text">
          Full Stack, Frontend, or Backend Development roles where I can
          contribute to building data-driven, scalable, and user-friendly
          solutions.
        </p>
      </div>
    </section>
  );
}

export default About;