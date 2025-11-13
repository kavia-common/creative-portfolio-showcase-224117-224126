import React from 'react';

/**
 * PUBLIC_INTERFACE
 * ProjectsGrid displays six sample project cards with placeholders.
 */
function ProjectsGrid() {
  const projects = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    description:
      'Playful interface with animated gradients and accessible components. Built with React.',
    tags: ['React', 'Design', i % 2 ? 'Animation' : 'Accessibility'],
    link: '#',
  }));

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title" className="h2">Projects</h2>
        <p className="muted" style={{ marginBottom: 16 }}>
          Selected pieces showcasing creativity, performance, and joyful UX.
        </p>
        <div
          role="list"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 18,
          }}
        >
          {projects.map((p) => (
            <article
              key={p.id}
              role="listitem"
              className="surface hover-pop"
              style={{ padding: 18, display: 'flex', flexDirection: 'column', minHeight: 220 }}
            >
              <div
                aria-hidden="true"
                style={{
                  height: 120,
                  borderRadius: 14,
                  background:
                    'linear-gradient(135deg, rgba(236,72,153,.25), rgba(139,92,246,.25))',
                  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.06)',
                  marginBottom: 12,
                }}
              />
              <h3 className="h3">{p.title}</h3>
              <p className="muted" style={{ margin: '6px 0 12px' }}>{p.description}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 'auto' }}>
                {p.tags.map((t) => (
                  <span className="badge" key={t}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop: 12 }}>
                <a className="btn" href={p.link} aria-label={`Open ${p.title}`}>
                  Preview
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>
        {`
          @media (max-width: 1024px) {
            #projects .container > div[role="list"] {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
          @media (max-width: 680px) {
            #projects .container > div[role="list"] {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </section>
  );
}

export default ProjectsGrid;
