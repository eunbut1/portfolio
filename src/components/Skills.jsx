import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap,
  FaNodeJs, FaJava, FaGitAlt, FaGithub, FaTerminal, FaLaptopCode
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMongodb, SiCplusplus,
  SiPostman, SiThunderbird, SiVite
} from 'react-icons/si';
import { TbApi, TbBrandVscode } from 'react-icons/tb';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaJsSquare: FaJsSquare,
  FaReact: FaReact,
  SiTailwindcss: SiTailwindcss,
  FaBootstrap: FaBootstrap,
  FaNodeJs: FaNodeJs,
  SiExpress: SiExpress,
  TbApi: TbApi,
  SiMongodb: SiMongodb,
  SiCplusplus: SiCplusplus,
  FaJava: FaJava,
  FaGitAlt: FaGitAlt,
  FaGithub: FaGithub,
  TbBrandVscode: TbBrandVscode,
  SiPostman: SiPostman,
  SiThunderbird: SiThunderbird,
  SiVite: SiVite,
};

export default function Skills() {
  const { skills } = portfolioData;

  const renderIcon = (iconName, color) => {
    const IconComponent = iconMap[iconName] || FaLaptopCode;
    return <IconComponent size={28} style={{ color: color || '#818CF8' }} />;
  };

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Technical Expertise</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
        </div>

        {/* Skills Categories Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card"
              style={{
                padding: '1.75rem',
                borderRadius: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '0.85rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div
                  style={{
                    width: '10px',
                    height: '22px',
                    borderRadius: '4px',
                    background: 'linear-gradient(180deg, #6366F1, #818CF8)'
                  }}
                />
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#F8FAFC' }}>
                  {category.category}
                </h3>
              </div>

              {/* Skill Cards Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1rem' }}>
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name + skillIndex}
                    whileHover={{ scale: 1.05, y: -4, borderColor: skill.color || '#6366F1' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    style={{
                      background: 'rgba(17, 24, 39, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      borderRadius: '0.85rem',
                      padding: '1rem 0.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      textAlign: 'center',
                      cursor: 'default'
                    }}
                  >
                    <div
                      style={{
                        padding: '0.5rem',
                        borderRadius: '0.5rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {renderIcon(skill.iconName, skill.color)}
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#E2E8F0' }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
