import { FaReact, FaJava, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaDatabase, FaPython, FaAws } from "react-icons/fa";
import { SiExpress, SiMysql, SiMongodb, SiJavascript, SiPostman } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
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
  <motion.div className="skills-container" initial="hidden" whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}>
    {skillsArray.map((skill, index) => (
      <motion.div key={index} className="skill-wrapper" variants={cardVariants} custom={index}>
        <div className="skill-card">
          <div className="skill-icon" style={{ color: skill.color }}> {skill.icon}</div>
          <h3 className="skill-name">{skill.name}</h3>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

  return (
    <section className="skills-section" id="skills">

      {/* Section Title */}
      <motion.h2 
        className="section-title"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* Categories */}
      <div className="skills-category">
        <motion.h3 
          className="category-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Frontend
        </motion.h3>
        {renderSkills(frontendSkills)}
      </div>

      <div className="skills-category">
        <motion.h3 
          className="category-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Backend
        </motion.h3>
        {renderSkills(backendSkills)}
      </div>

      <div className="skills-category">
        <motion.h3 
          className="category-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Databases
        </motion.h3>
        {renderSkills(databaseSkills)}
      </div>

      <div className="skills-category">
        <motion.h3 
          className="category-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Tools / Cloud
        </motion.h3>
        {renderSkills(toolsSkills)}
      </div>

    </section>
  );
}

export default Skills;
