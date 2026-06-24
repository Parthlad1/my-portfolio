import { motion as Motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import './Project.css';

const projects = [
  { title: 'Object Factory & Code Generation Platform', description: 'An enterprise development platform for generating reusable application objects and reducing repetitive setup across backend modules.', technologies: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'Maven'], type: 'Professional Project', mark: '01' },
  { title: 'Authentication Service (TTC Platform)', description: 'A security-focused backend service designed around protected user access, API security, and role-based application workflows.', technologies: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'PostgreSQL'], type: 'Professional Project', mark: '02' },
  { title: 'Ohioans Medicaid Portal Automation', description: 'A healthcare workflow automation initiative supporting reliable eligibility-related portal operations while reducing manual effort.', technologies: ['AutomationEdge', 'Process Studio', 'Healthcare', 'Testing'], type: 'Professional Project', mark: '03' },
  { title: 'Portfolio Website', description: 'The responsive portfolio you are viewing, designed to communicate backend engineering focus, professional experience, and project work clearly.', technologies: ['React', 'Vite', 'Framer Motion', 'CSS'], type: 'Personal Project', mark: '04', sourceUrl: 'https://github.com/Parthlad1' },
];

function Project() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-shell">
        <Motion.div className="projects-heading" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div><p className="section-kicker">04 / Selected work</p><h2 className="section-heading">Projects built to solve useful problems.</h2></div><p>From enterprise platforms to process automation, each project reflects an attention to resilient systems and practical outcomes.</p>
        </Motion.div>
        <div className="projects-grid">{projects.map((project, index) => <Motion.article key={project.title} className="project-card" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.45, delay: index * 0.07 }}>
          <div className="project-topline"><span className="project-number">{project.mark}</span><span className="project-type">{project.type}</span></div><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          <div className="project-actions"><a href="#contact">Discuss project <FiArrowUpRight /></a>{project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label="View Parth Lad's GitHub profile"><FiGithub /> Source</a>}</div>
        </Motion.article>)}</div>
      </div>
    </section>
  );
}

export default Project;
