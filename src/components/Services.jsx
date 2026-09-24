import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaDatabase, FaPalette, FaCheckCircle } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  FaLaptopCode: FaLaptopCode,
  FaServer: FaServer,
  FaDatabase: FaDatabase,
  FaPalette: FaPalette
};

export default function Services() {
  const { services } = portfolioData;

  return (
    <section id="services" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Services & Expertise</span>
          <h2 className="section-title">What I Do</h2>
        </div>

        {/* Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FaLaptopCode;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, borderColor: '#6366F1' }}
                className="glass-card"
                style={{
                  padding: '2rem 1.5rem',
                  borderRadius: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  background: 'rgba(23, 32, 51, 0.75)'
                }}
              >
                {/* Service Icon */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'rgba(99, 102, 241, 0.12)',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#818CF8',
                    marginBottom: '1.5rem',
                    boxShadow: '0 8px 20px rgba(99, 102, 241, 0.15)'
                  }}
                >
                  <IconComponent size={26} />
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#F8FAFC', marginBottom: '0.75rem' }}>
                  {service.title}
                </h3>

                <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {service.description}
                </p>

                {/* Service Highlights */}
                {service.highlights && (
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {service.highlights.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#CBD5E1' }}>
                        <FaCheckCircle size={12} style={{ color: '#10B981' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
