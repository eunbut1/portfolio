import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight, FaCode, FaServer, FaTerminal, FaNodeJs } from 'react-icons/fa';
import { SiReact, SiMongodb, SiExpress } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, socials } = portfolioData;

  const handleScroll = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section" style={{ paddingTop: '8.5rem', paddingBottom: '5rem', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Background Glows */}
      <div className="bg-glow-indigo animate-pulse-subtle" style={{ top: '10%', left: '-10%' }} />
      <div className="bg-glow-purple animate-pulse-subtle" style={{ bottom: '10%', right: '-10%' }} />

      {/* Floating Circles */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: 'rgba(99, 102, 241, 0.4)',
          boxShadow: '0 0 15px rgba(99, 102, 241, 0.8)',
          pointerEvents: 'none'
        }}
        className="animate-float"
      />
      <div
        style={{
          position: 'absolute',
          bottom: '25%',
          left: '8%',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'rgba(129, 140, 248, 0.5)',
          boxShadow: '0 0 10px rgba(129, 140, 248, 0.6)',
          pointerEvents: 'none'
        }}
        className="animate-float"
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                background: 'rgba(99, 102, 241, 0.12)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                color: '#818CF8',
                fontSize: '0.85rem',
                fontWeight: '600',
                marginBottom: '1.25rem'
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }}></span>
              Available for Internships & Projects
            </motion.div>

            {/* Small Greeting */}
            <h3 style={{ fontSize: '1.25rem', color: '#94A3B8', fontWeight: '500', marginBottom: '0.25rem' }}>
              {personal.greeting}
            </h3>

            {/* Main Name */}
            <h1 style={{ fontSize: 'clamp(2.75rem, 6vw, 4.25rem)', fontWeight: '800', lineHeight: 1.1, marginBottom: '0.75rem' }}>
              <span className="gradient-text">{personal.name}</span>
            </h1>

            {/* Sub-heading */}
            <h2 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: '#818CF8', fontWeight: '600', marginBottom: '1.25rem' }}>
              {personal.role}
            </h2>

            {/* Description */}
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '560px', marginBottom: '2rem' }}>
              {personal.heroDescription}
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2.5rem' }}>
              <button
                onClick={() => handleScroll('#projects')}
                className="btn btn-primary"
              >
                <span>View My Projects</span>
                <FaArrowRight size={14} />
              </button>
              
              <button
                onClick={() => handleScroll('#contact')}
                className="btn btn-outline"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span style={{ color: '#64748B', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Follow Me
              </span>
              <div style={{ width: '30px', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#F8FAFC',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#6366F1';
                    e.currentTarget.style.borderColor = '#6366F1';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#F8FAFC',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0A66C2';
                    e.currentTarget.style.borderColor = '#0A66C2';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#F8FAFC',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#E4405F';
                    e.currentTarget.style.borderColor = '#E4405F';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Card Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            {/* Floating Tech Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: '-15px',
                left: '-15px',
                zIndex: 10,
                background: 'rgba(23, 32, 51, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(97, 218, 251, 0.3)',
                borderRadius: '0.75rem',
                padding: '0.5rem 0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                color: '#61DAFB',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}
            >
              <SiReact size={18} />
              <span>React.js</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              style={{
                position: 'absolute',
                bottom: '-15px',
                right: '-10px',
                zIndex: 10,
                background: 'rgba(23, 32, 51, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(71, 162, 72, 0.3)',
                borderRadius: '0.75rem',
                padding: '0.5rem 0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                color: '#47A248',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}
            >
              <SiMongodb size={18} />
              <span>MongoDB</span>
            </motion.div>

            {/* Code Window Container */}
            <div
              className="glass-card"
              style={{
                borderRadius: '1.25rem',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: '#0F172A'
              }}
            >
              {/* Terminal Header */}
              <div
                style={{
                  background: '#1E293B',
                  padding: '0.75rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }}></div>
                </div>
                <div style={{ color: '#94A3B8', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <FaTerminal size={11} />
                  <span>Developer.jsx</span>
                </div>
                <div style={{ width: '30px' }}></div>
              </div>

              {/* Code Snippet Content */}
              <div style={{ padding: '1.25rem 1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: '1.7', overflowX: 'auto' }}>
                <div style={{ color: '#64748B' }}>// Developer Profile Definition</div>
                <div>
                  <span style={{ color: '#F472B6' }}>const </span>
                  <span style={{ color: '#38BDF8' }}>developer </span>
                  <span style={{ color: '#F8FAFC' }}>= </span>
                  <span style={{ color: '#F8FAFC' }}>&#123;</span>
                </div>
                
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94A3B8' }}>name: </span>
                  <span style={{ color: '#A5F3FC' }}>&quot;Himanshu&quot;</span>,
                </div>

                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94A3B8' }}>status: </span>
                  <span style={{ color: '#A5F3FC' }}>&quot;Computer Science Student&quot;</span>,
                </div>

                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94A3B8' }}>techStack: </span>
                  <span style={{ color: '#F8FAFC' }}>[</span>
                </div>

                <div style={{ paddingLeft: '2.5rem', color: '#FDE047' }}>
                  &quot;React&quot;<span style={{ color: '#F8FAFC' }}>, </span>
                  &quot;Node.js&quot;<span style={{ color: '#F8FAFC' }}>, </span>
                  &quot;Express&quot;<span style={{ color: '#F8FAFC' }}>, </span>
                  &quot;MongoDB&quot;
                </div>

                <div style={{ paddingLeft: '1.25rem', color: '#F8FAFC' }}>
                  ],
                </div>

                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94A3B8' }}>passion: </span>
                  <span style={{ color: '#A5F3FC' }}>&quot;Building scalable web apps&quot;</span>,
                </div>

                <div style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#94A3B8' }}>location: </span>
                  <span style={{ color: '#A5F3FC' }}>&quot;India&quot;</span>
                </div>

                <div>
                  <span style={{ color: '#F8FAFC' }}>&#125;;</span>
                </div>

                <div style={{ marginTop: '0.75rem', color: '#64748B' }}>// Executing solution...</div>
                <div style={{ color: '#34D399', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>&gt; developer.buildAwesomeProjects();</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
