import { motion } from 'framer-motion';
import { skillGroups } from '../../data/content';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <span className="section-subtitle">Expertise</span>
        <h2 className="section-title">Technical Proficiency</h2>
        <p className="section-intro">
          A full-stack toolkit built over six years of eCommerce and
          platform engineering.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="skill-group glass-card"
            >
              <div className="skill-group-header">
                <span className="skill-group-icon" aria-hidden="true">{group.icon}</span>
                <h3 className="skill-group-title">{group.title}</h3>
              </div>
              <div className="skill-group-badges">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
