import React, { useState, useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * Navbar component renders a sticky top navigation with links to sections.
 * Includes mobile menu toggle, proper aria attributes, and focus styles.
 */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 6);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className="navbar"
      role="banner"
      aria-label="Primary"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'saturate(140%) blur(8px)',
        background:
          'linear-gradient(180deg, rgba(255,255,255,.82), rgba(255,255,255,.72))',
        borderBottom: '1px solid rgba(0,0,0,.06)',
        boxShadow: elevated ? '0 6px 20px rgba(17,24,39,.08)' : 'none',
      }}
    >
      <nav className="container" aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', height: 72 }}>
        <a href="#about" className="brand" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} aria-label="Home">
          <span
            aria-hidden="true"
            style={{
              width: 28,
              height: 28,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #EC4899, #8B5CF6)',
              display: 'inline-block',
              marginRight: 10,
              boxShadow: '0 6px 16px rgba(236,72,153,.35)',
            }}
          />
          <strong style={{ color: '#111827', fontSize: 18 }}>Ocean Portfolio</strong>
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="btn secondary"
          style={{ marginLeft: 'auto', display: 'none' }}
        >
          ☰
        </button>

        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            marginLeft: 'auto',
            padding: 0,
          }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link"
                style={{
                  textDecoration: 'none',
                  color: '#374151',
                  fontWeight: 700,
                  padding: '10px 12px',
                  borderRadius: 10,
                }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu (progressive enhancement) */}
      <style>
        {`
        @media (max-width: 780px) {
          .navbar nav .btn.secondary { display: inline-flex; }
          .navbar nav ul { display: none !important; }
        }
        @media (max-width: 780px) {
          .mobile-menu { display: ${open ? 'block' : 'none'}; }
        }
        `}
      </style>

      <div className="mobile-menu surface" style={{ margin: '8px 16px', padding: 12, display: 'none' }} role="dialog" aria-modal="false">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{
              display: 'block',
              padding: '12px 10px',
              fontWeight: 700,
              color: '#374151',
              textDecoration: 'none',
              borderRadius: 10,
            }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
