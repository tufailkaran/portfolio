import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../../data/content';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const visible = showAll ? filtered : filtered.slice(0, 6);
  const categoryLabel = (key) =>
    projectCategories.find((c) => c.key === key)?.label ?? key;

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <span className="section-subtitle">Portfolio</span>
        <h2 className="section-title">Enterprise Case Studies</h2>
        <p className="section-intro">
          A selection of production systems built across eCommerce, warehouse
          operations, and full-stack platforms.
        </p>

        <div className="project-filters" role="tablist" aria-label="Filter projects by category">
          {projectCategories.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={filter === cat.key}
              className={`filter-btn ${filter === cat.key ? 'filter-active' : ''}`}
              onClick={() => {
                setFilter(cat.key);
                setShowAll(false);
              }}
            >
              {cat.label}
              <span className="filter-count">
                {cat.key === 'all'
                  ? projects.length
                  : projects.filter((p) => p.category === cat.key).length}
              </span>
            </button>
          ))}
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className={`project-card glass-card ${project.featured ? 'project-featured' : ''}`}
              >
                <div className="project-image-box">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-overlay" />
                  <div className="project-icon-tag" aria-hidden="true">{project.icon}</div>
                  {project.featured && <span className="featured-badge">★ Featured</span>}
                  <span className="project-category-tag">{categoryLabel(project.category)}</span>
                </div>

                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  {project.highlights && (
                    <ul className="project-highlights">
                      {project.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}

                  <div className="project-tech-stack">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length > 6 && (
          <div className="projects-more">
            <button className="btn-secondary" onClick={() => setShowAll((s) => !s)}>
              {showAll ? 'Show Less' : `Show All ${filtered.length} Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
