import React from 'react';

/**
 * PUBLIC_INTERFACE
 * SkillsCloud shows a list of skill badges in a responsive wrap layout.
 */
function SkillsCloud() {
  const skills = [
    'React', 'TypeScript', 'Accessibility', 'CSS Animations',
    'Node.js', 'Design Systems', 'Performance', 'Testing',
    'WebSockets', 'PWAs', 'CI/CD', 'UX Writing',
  ];

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container surface hover-pop" style={{ padding: 24 }}>
        <h2 id="skills-title" className="h2">Skills</h2>
        <p className="muted" style={{ marginBottom: 16 }}>
          Tools and specialties that power my work.
        </p>
        <div aria-label="Skill tags" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {skills.map((s) => (
            <span key={s} className="badge" aria-label={`Skill ${s}`}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsCloud;
