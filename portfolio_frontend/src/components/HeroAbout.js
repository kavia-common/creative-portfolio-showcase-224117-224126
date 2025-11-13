import React from 'react';

/**
 * PUBLIC_INTERFACE
 * HeroAbout renders the introductory hero with about text and call-to-action.
 */
function HeroAbout() {
  return (
    <section id="about" className="section">
      <div className="container surface hover-pop" style={{ position: 'relative', overflow: 'hidden', padding: '36px 28px' }} aria-labelledby="about-title">
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: -40,
            top: -40,
            width: 220,
            height: 220,
            borderRadius: 24,
            background: 'conic-gradient(from 45deg, rgba(236,72,153,.25), rgba(139,92,246,.25), rgba(56,189,248,.25))',
            filter: 'blur(12px)',
          }}
        />
        <h1 id="about-title" className="h1" style={{ marginBottom: 12 }}>
          Hello, I’m{' '}
          <span style={{ backgroundImage: 'linear-gradient(90deg, #EC4899, #8B5CF6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            SPOORTHY
          </span>
          .
        </h1>
        <p className="muted" style={{ fontSize: 18, marginBottom: 18 }}>
          I craft playful, performant web experiences with modern React and a love for delightful details.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#projects" className="btn" aria-label="View projects">View Projects</a>
          <a href="#contact" className="btn secondary" aria-label="Get in touch">Get in touch</a>
        </div>
      </div>
    </section>
  );
}

export default HeroAbout;
