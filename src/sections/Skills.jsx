import { FaReact, FaJava, FaGitAlt, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiSpringsecurity, SiHibernate, SiMysql, SiMongodb, SiJavascript, SiPostman, SiApachemaven, SiGradle, SiJira } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { MdApi } from "react-icons/md";
import { motion as Motion } from "framer-motion";
import './Skills.css';

function Skills() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 }
    })
  };

  const backendSkills = [
    { name: "Java", icon: <FaJava />, color: "#cc0000" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
    { name: "Spring Security", icon: <SiSpringsecurity />, color: "#6DB33F" },
    { name: "Spring Data JPA", icon: <SiSpringboot />, color: "#6DB33F" },
    { name: "Hibernate", icon: <SiHibernate />, color: "#59666C" },
    { name: "REST APIs", icon: <MdApi />, color: "#00A4D4" },
  ];

  const databaseSkills = [
    { name: "PostgreSQL", icon: <BiLogoPostgresql />, color: "#00A4D4" },
    { name: "MySQL", icon: <SiMysql />, color: "#F29111" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  ];

  const frontendSkills = [
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  ];

  const toolsSkills = [
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub />, color: "#181717" },
    { name: "Maven", icon: <SiApachemaven />, color: "#C71A36" },
    { name: "Gradle", icon: <SiGradle />, color: "#02303A" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "JIRA", icon: <SiJira />, color: "#0052CC" },
  ];

const renderSkills = (skillsArray, trackClass) => (
  <Motion.div className="skills-container" initial="hidden" whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}>
    
    <div className={`skills-track ${trackClass}`}>
      {[...skillsArray, ...skillsArray,...skillsArray,...skillsArray].map((skill, index) => (
        <Motion.div key={index} className="skill-wrapper" variants={cardVariants} custom={index}>
          <div className="skill-card">
            <div className="skill-icon" style={{ color: skill.color }}> {skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        </Motion.div>
      ))}
    </div>

  </Motion.div>
);


  return (
    <section className="skills-section" id="skills">

      {/* Section Title */}
      <Motion.h2 className="section-title" variants={fadeUp} initial="hidden" whileInView="visible"
        transition={{ duration: 0.4 }} viewport={{ once: true }}>
        Skills
      </Motion.h2>

      {/* Categories */}
      <div className="skills-category">
        <Motion.h3 className="category-title" variants={fadeUp} initial="hidden" whileInView="visible"
          transition={{ duration: 0.4 }} viewport={{ once: true }}>
          Backend
        </Motion.h3>
        {renderSkills(backendSkills, "track-backend")}
      </div>

      <div className="skills-category">
        <Motion.h3 className="category-title" variants={fadeUp} initial="hidden" whileInView="visible"
          transition={{ duration: 0.4 }} viewport={{ once: true }}>
          Database
        </Motion.h3>
        {renderSkills(databaseSkills, "track-database")}
      </div>

      <div className="skills-category">
        <Motion.h3 className="category-title" variants={fadeUp} initial="hidden" whileInView="visible"
          transition={{ duration: 0.4 }} viewport={{ once: true }}>
          Frontend
        </Motion.h3>
        {renderSkills(frontendSkills, "track-frontend")}
      </div>

      <div className="skills-category">
        <Motion.h3 className="category-title" variants={fadeUp} initial="hidden" whileInView="visible"
          transition={{ duration: 0.4 }} viewport={{ once: true }}>
          Tools
        </Motion.h3>
        {renderSkills(toolsSkills, "track-tools")}
      </div>

    </section>
  );
}

export default Skills;
