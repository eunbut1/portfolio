import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaRocket, FaBookReader, FaUserCheck } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const cardIcons = [
    <FaGraduationCap key="1" size={24} style={{ color: '#818CF8' }} />,
    <FaLaptopCode key="2" size={24} style={{ color: '#38BDF8' }} />,
    <FaRocket key="3" size={24} style={{ color: '#F472B6' }} />,
    <FaBookReader key="4" size={24} style={{ color: '#34D399' }} />
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3.5rem', alignItems: 'center' }} className="about-grid">
          
          {/* Left: Professional Profile Image Placeholder & Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
              
              {/* Outer Glowing Decorative Border */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '1.75rem',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.5), rgba(168,85,247,0.2), rgba(56,189,248,0.4))',
                  filter: 'blur(15px)',
                  zIndex: 0
                }}
              />

              {/* Profile Box */}
              <div
                className="glass-card"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '1.5rem',
                  padding: '2.5rem 1.75rem',
                  textAlign: 'center',
                  background: 'rgba(23, 32, 51, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}
              >
                {/* SVG Avatar Placeholder Visual */}
                <div
                  style={{
                    width: '130px',
                    height: '130px',
                    margin: '0 auto 1.5rem auto',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1E293B, #0F172A)',
                    border: '3px solid #6366F1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                    position: 'relative'
                  }}
                >
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#818CF8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '5px',
                      right: '5px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: '#10B981',
                      border: '3px solid #1E293B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF'
                    }}
                    title="Active Developer"
                  >
                    <FaUserCheck size={10} />
                  </div>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#F8FAFC', marginBottom: '0.25rem' }}>
                  {personal.name}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#818CF8', fontWeight: '600', marginBottom: '1.25rem' }}>
                  Aspiring Full-Stack Developer
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                  <span className="tech-pill">React.js</span>
                  <span className="tech-pill">Node.js</span>
                  <span className="tech-pill">MongoDB</span>
                  <span className="tech-pill">Express</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content & Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: '2rem' }}>
              {personal.aboutParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    color: '#94A3B8',
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    marginBottom: '1.25rem'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Small Info Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.25rem'
              }}
              className="info-cards-grid"
            >
              {personal.infoCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, borderColor: '#6366F1' }}
                  className="glass-card"
                  style={{
                    padding: '1.25rem',
                    borderRadius: '0.85rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    background: 'rgba(23, 32, 51, 0.6)'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {cardIcons[idx] || <span>{card.icon}</span>}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: '700', color: '#F8FAFC', marginBottom: '0.2rem' }}>
                      {card.title}
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: '#94A3B8', fontWeight: '500' }}>
                      {card.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 500px) {
          .info-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
