import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarCheck, FaCheckCircle } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Academic Background</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card"
              style={{
                padding: '2.25rem',
                borderRadius: '1.25rem',
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(23, 32, 51, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.09)'
              }}
            >
              {/* Subtle Ambient Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }}
              />

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
                
                {/* Icon Container */}
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(129, 140, 248, 0.1))',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#818CF8',
                    flexShrink: 0,
                    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.2)'
                  }}
                >
                  <FaGraduationCap size={30} />
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: '260px' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#F8FAFC', marginBottom: '0.35rem' }}>
                        {item.degree}
                      </h3>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#818CF8', fontWeight: '600', fontSize: '1rem' }}>
                        <FaUniversity size={15} />
                        <span>{item.institution}</span>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.4rem 0.9rem',
                        borderRadius: '9999px',
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        color: '#34D399',
                        fontSize: '0.85rem',
                        fontWeight: '600'
                      }}
                    >
                      <FaCalendarCheck size={13} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem', marginTop: '1.25rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {item.highlights.map((point, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#94A3B8', fontSize: '0.92rem' }}>
                          <FaCheckCircle size={14} style={{ color: '#6366F1', marginTop: '3px', flexShrink: 0 }} />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
