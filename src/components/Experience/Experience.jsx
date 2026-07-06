import { motion } from 'framer-motion';
import { experience, education, certifications } from '../../data/content';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <span className="section-subtitle">Career</span>
        <h2 className="section-title">Professional Journey</h2>

        <div className="experience-layout">
          <div className="timeline">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.role}-${job.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="timeline-item"
              >
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-card glass-card">
                  <span className="timeline-period">{job.period}</span>
                  <h3 className="timeline-role">{job.role}</h3>
                  <p className="timeline-company">
                    {job.company} <span className="timeline-location">· {job.location}</span>
                  </p>
                  <ul className="timeline-points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <aside className="experience-aside">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aside-card glass-card"
            >
              <h3 className="aside-title">🎓 Education</h3>
              <p className="edu-degree">{education.degree}</p>
              <p className="edu-school">{education.school}</p>
              <p className="edu-period">{education.period}</p>
              <p className="edu-note">{education.note}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aside-card glass-card"
            >
              <h3 className="aside-title">📜 Certifications</h3>
              <ul className="cert-list">
                {certifications.map((cert) => (
                  <li key={cert.title}>
                    <span className="cert-title">{cert.title}</span>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Experience;
