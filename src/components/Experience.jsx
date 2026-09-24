import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaCheck } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Work History</span>
          <h2 className="section-title">Experience</h2>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative' }}>
          
          {/* Vertical Timeline Line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '28px',
              width: '2px',
              background: 'linear-gradient(180deg, #6366F1 0%, rgba(99, 102, 241, 0.2) 100%)',
              zIndex: 0
            }}
            className="timeline-line"
          />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ position: 'relative', zIndex: 1, paddingLeft: '4.5rem', marginBottom: '2.5rem' }}
              className="timeline-item"
            >
              {/* Timeline Icon Badge */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: '#172033',
                  border: '2px solid #6366F1',
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#818CF8'
                }}
                className="timeline-badge"
              >
                <FaBriefcase size={22} />
              </div>

              {/* Experience Card */}
              <div
                className="glass-card"
                style={{
                  padding: '2rem',
                  borderRadius: '1.25rem',
                  background: 'rgba(23, 32, 51, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.09)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#F8FAFC', marginBottom: '0.25rem' }}>
                      {exp.role}
                    </h3>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#818CF8', fontWeight: '600', fontSize: '0.95rem' }}>
                      <FaBuilding size={14} />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      background: 'rgba(99, 102, 241, 0.12)',
                      border: '1px solid rgba(99, 102, 241, 0.25)',
                      color: '#818CF8',
                      fontSize: '0.82rem',
                      fontWeight: '600'
                    }}
                  >
                    <FaCalendarAlt size={12} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  {exp.description}
                </p>

                {/* Key Responsibilities & Skills Covered */}
                <div>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: '700', color: '#CBD5E1', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.85rem' }}>
                    Key Areas & Skills Applied:
                  </h4>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '0.5rem',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          fontSize: '0.82rem',
                          color: '#E2E8F0',
                          fontWeight: '500'
                        }}
                      >
                        <FaCheck size={10} style={{ color: '#6366F1' }} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-line {
            left: 18px !important;
          }
          .timeline-badge {
            width: 38px !important;
            height: 38px !important;
            svg {
              font-size: 16px !important;
            }
          }
          .timeline-item {
            padding-left: 3.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
