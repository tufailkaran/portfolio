import { motion } from 'framer-motion';
import { skills } from '../../data/content';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <span className="section-subtitle">Expertise</span>
        <h2 className="section-title">Technical Proficiency</h2>
        
        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(34, 211, 238, 0.5)' }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="skill-badge"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
