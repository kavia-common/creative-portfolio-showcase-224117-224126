import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Footer renders site footer with links and copyright text.
 */
function Footer() {
  const year = new Date().getFullYear();
  const frontendUrl = process.env.REACT_APP_FRONTEND_URL || window.location.origin;

  return (
    <footer role="contentinfo" className="section" style={{ paddingTop: 32 }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="muted" style={{ marginBottom: 10 }}>
          © {year} Ocean Portfolio • <a href={frontendUrl} style={{ color: '#6d28d9', fontWeight: 700 }}>Visit</a>
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#about" className="badge" aria-label="About link">About</a>
          <a href="#projects" className="badge" aria-label="Projects link">Projects</a>
          <a href="#skills" className="badge" aria-label="Skills link">Skills</a>
          <a href="#contact" className="badge" aria-label="Contact link">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
