import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaCodeBranch, FaStethoscope, FaShoppingCart, FaPlane } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const projectIcons = {
  'medical-setu': FaStethoscope,
  'ecommerce-backend': FaShoppingCart,
  'wandervista-travels': FaPlane
};

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full-Stack', 'Backend', 'CMS & Design'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Portfolio Showcase</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: '600',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.25s ease',
                background: filter === cat ? '#6366F1' : 'rgba(255, 255, 255, 0.04)',
                color: filter === cat ? '#FFFFFF' : '#94A3B8',
                boxShadow: filter === cat ? '0 4px 15px rgba(99, 102, 241, 0.35)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
          {filteredProjects.map((project, index) => {
            const IconComp = projectIcons[project.id] || FaFolder;

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card"
                style={{
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  background: 'rgba(23, 32, 51, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Project Mock Visual Container */}
                <div
                  style={{
                    height: '190px',
                    position: 'relative',
                    background: `linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.9))`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.25rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    overflow: 'hidden'
                  }}
                >
                  {/* Subtle Background Glow */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `radial-gradient(circle at top right, ${project.accentColor || '#6366F1'}25, transparent 70%)`,
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Top Bar inside image area */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748B' }}>
                      <FaCodeBranch size={13} />
                      <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>{project.category}</span>
                    </div>

                    <span
                      style={{
                        padding: '0.25rem 0.6rem',
                        borderRadius: '0.35rem',
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: project.accentColor || '#818CF8'
                      }}
                    >
                      Featured
                    </span>
                  </div>

                  {/* Center Visual Icon & Banner */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 1 }}>
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '14px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: project.accentColor || '#818CF8',
                        boxShadow: `0 8px 20px rgba(0, 0, 0, 0.3)`
                      }}
                    >
                      <IconComp size={26} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#F8FAFC' }}>
                        {project.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Project Details Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    {/* Description */}
                    <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      {project.description}
                    </p>

                    {/* Technologies Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Buttons */}
                  <div style={{ display: 'flex', gap: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1.25rem' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      style={{ flex: 1 }}
                      onClick={(e) => {
                        if (project.githubUrl === 'YOUR_GITHUB_LINK') {
                          e.preventDefault();
                          alert(`GitHub repository link placeholder: ${project.githubUrl}`);
                        }
                      }}
                    >
                      <FaGithub size={15} />
                      <span>GitHub</span>
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      style={{ flex: 1 }}
                      onClick={(e) => {
                        if (project.liveUrl === 'YOUR_LIVE_DEMO_LINK') {
                          e.preventDefault();
                          alert(`Live Demo link placeholder: ${project.liveUrl}`);
                        }
                      }}
                    >
                      <FaExternalLinkAlt size={13} />
                      <span>Live Demo</span>
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
