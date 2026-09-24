import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { socials } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      // Simulate network request
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Trigger celebration confetti effect
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (err) {
          // ignore confetti fallback
        }

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1000);
    }
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', marginTop: '0.75rem' }}>
            I'm always interested in learning, building projects and exploring new opportunities.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3rem', alignItems: 'start' }} className="contact-grid">
          
          {/* Left: Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#F8FAFC', marginBottom: '1.25rem' }}>
              Contact Details
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              
              {/* Email Card */}
              <div
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  background: 'rgba(23, 32, 51, 0.7)'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(99, 102, 241, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#818CF8',
                    flexShrink: 0
                  }}
                >
                  <FaEnvelope size={20} />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Email Me
                  </span>
                  <p style={{ fontSize: '0.98rem', fontWeight: '600', color: '#F8FAFC', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    {socials.email}
                  </p>
                </div>
              </div>

              {/* GitHub Card */}
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="glass-card"
                  style={{
                    padding: '1.25rem',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    background: 'rgba(23, 32, 51, 0.7)',
                    transition: 'transform 0.25s ease'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F8FAFC',
                      flexShrink: 0
                    }}
                  >
                    <FaGithub size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      GitHub
                    </span>
                    <p style={{ fontSize: '0.98rem', fontWeight: '600', color: '#F8FAFC' }}>
                      Explore Repositories
                    </p>
                  </div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="glass-card"
                  style={{
                    padding: '1.25rem',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    background: 'rgba(23, 32, 51, 0.7)'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(10, 102, 194, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0A66C2',
                      flexShrink: 0
                    }}
                  >
                    <FaLinkedin size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      LinkedIn
                    </span>
                    <p style={{ fontSize: '0.98rem', fontWeight: '600', color: '#F8FAFC' }}>
                      Connect Professionally
                    </p>
                  </div>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="glass-card"
                  style={{
                    padding: '1.25rem',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    background: 'rgba(23, 32, 51, 0.7)'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(228, 64, 95, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#E4405F',
                      flexShrink: 0
                    }}
                  >
                    <FaInstagram size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Instagram
                    </span>
                    <p style={{ fontSize: '0.98rem', fontWeight: '600', color: '#F8FAFC' }}>
                      Follow Updates
                    </p>
                  </div>
                </div>
              </a>

            </div>
          </motion.div>

          {/* Right: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{
              padding: '2.25rem',
              borderRadius: '1.5rem',
              background: 'rgba(23, 32, 51, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '2.5rem 1rem' }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10B981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto'
                  }}
                >
                  <FaCheckCircle size={36} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#F8FAFC', marginBottom: '0.5rem' }}>
                  Thank You!
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Your message has been validated and sent successfully. Himanshu will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-outline btn-sm"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#F8FAFC', marginBottom: '1.5rem' }}>
                  Send a Message
                </h3>

                {/* Name Field */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: '#CBD5E1', marginBottom: '0.4rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '0.75rem',
                      background: '#0F172A',
                      border: errors.name ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#F8FAFC',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      fontFamily: 'inherit'
                    }}
                  />
                  {errors.name && (
                    <span style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <FaExclamationCircle size={12} /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: '#CBD5E1', marginBottom: '0.4rem' }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '0.75rem',
                      background: '#0F172A',
                      border: errors.email ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#F8FAFC',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      fontFamily: 'inherit'
                    }}
                  />
                  {errors.email && (
                    <span style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <FaExclamationCircle size={12} /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject Field */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="subject" style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: '#CBD5E1', marginBottom: '0.4rem' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Internship Opportunity"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '0.75rem',
                      background: '#0F172A',
                      border: errors.subject ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#F8FAFC',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      fontFamily: 'inherit'
                    }}
                  />
                  {errors.subject && (
                    <span style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <FaExclamationCircle size={12} /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: '#CBD5E1', marginBottom: '0.4rem' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '0.75rem',
                      background: '#0F172A',
                      border: errors.message ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#F8FAFC',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease',
                      fontFamily: 'inherit'
                    }}
                  />
                  {errors.message && (
                    <span style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <FaExclamationCircle size={12} /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
