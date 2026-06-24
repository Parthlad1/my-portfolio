import { FaReact, FaJava, FaGitAlt, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiSpringboot, SiSpringsecurity, SiHibernate, SiMysql, SiMongodb, SiJavascript, SiPostman, SiApachemaven, SiGradle, SiJira } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { MdApi } from 'react-icons/md';
import { motion as Motion } from 'framer-motion';
import { createElement } from 'react';
import './Skills.css';

const groups = [
  { title: 'Backend', index: '01', skills: [{ name: 'Java', icon: FaJava }, { name: 'Spring Boot', icon: SiSpringboot }, { name: 'Spring Security', icon: SiSpringsecurity }, { name: 'Spring Data JPA', icon: SiSpringboot }, { name: 'Hibernate', icon: SiHibernate }, { name: 'REST APIs', icon: MdApi }] },
  { title: 'Database', index: '02', skills: [{ name: 'PostgreSQL', icon: BiLogoPostgresql }, { name: 'MySQL', icon: SiMysql }, { name: 'MongoDB', icon: SiMongodb }] },
  { title: 'Frontend', index: '03', skills: [{ name: 'React.js', icon: FaReact }, { name: 'HTML', icon: FaHtml5 }, { name: 'CSS', icon: FaCss3Alt }, { name: 'JavaScript', icon: SiJavascript }] },
  { title: 'Tools', index: '04', skills: [{ name: 'Git', icon: FaGitAlt }, { name: 'GitHub', icon: FaGithub }, { name: 'Maven', icon: SiApachemaven }, { name: 'Gradle', icon: SiGradle }, { name: 'Postman', icon: SiPostman }, { name: 'JIRA', icon: SiJira }] },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-shell">
        <Motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <p className="section-kicker">02 / Toolkit</p><h2 className="section-heading">The tools behind the build.</h2><p className="section-intro">A practical, backend-first stack for building reliable systems and collaborating effectively across the product lifecycle.</p>
        </Motion.div>
        <div className="skills-grid">
          {groups.map((group, index) => <Motion.article className="skill-group" key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.06 }}>
            <div className="skill-group-header"><span>{group.index}</span><h3>{group.title}</h3></div>
            <div className="skill-list">{group.skills.map(({ name, icon }) => <div className="skill-badge" key={name}>{createElement(icon, { 'aria-hidden': true })}<span>{name}</span></div>)}</div>
          </Motion.article>)}
        </div>
      </div>
    </section>
  );
}

export default Skills;
