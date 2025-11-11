import { FaReact, FaJava, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaDatabase,FaPython, FaAws } from "react-icons/fa";
import { SiExpress, SiMysql, SiMongodb, SiJavascript, SiPostman } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import './Skills.css';

function Skills() {
const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress />, color: "#000000" },
    { name: "Python", icon: <FaPython />, color: "#FFD43B" },
    { name: "Java", icon: <FaJava />, color: "#cc0000" },
  ];

  const databaseSkills = [
    { name: "MySQL", icon: <SiMysql />, color: "#F29111" },
    { name: "PostgreSQL", icon: <BiLogoPostgresql />, color: "#00A4D4" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  ];

  const toolsSkills = [
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    { name: "Git & GitHub", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  ];

  const renderSkills = (skillsArray) => (
    <div className="skills-container">
      {skillsArray.map((skill, index) => (
        <div key={index} className="skill-card">
          <div className="skill-icon" style={{color : skill.color}}>{skill.icon}</div>
          <h3 className="skill-name">{skill.name}</h3>
        </div>
      ))}
    </div>
  );

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-category">
        <h3 className="category-title">Frontend</h3>
        {renderSkills(frontendSkills)}
      </div>

      <div className="skills-category">
        <h3 className="category-title">Backend</h3>
        {renderSkills(backendSkills)}
      </div>

      <div className="skills-category">
        <h3 className="category-title">Databases</h3>
        {renderSkills(databaseSkills)}
      </div>

      <div className="skills-category">
        <h3 className="category-title">Tools / Cloud</h3>
        {renderSkills(toolsSkills)}
      </div>
    </section>
  );
}

export default Skills;
