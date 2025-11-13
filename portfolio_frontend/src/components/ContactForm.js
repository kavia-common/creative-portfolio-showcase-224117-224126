import React, { useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * ContactForm renders a contact form with validation. It does not submit to a backend,
 * but includes placeholders and configuration to integrate later using apiBase.
 *
 * @param {Object} props
 * @param {string} props.apiBase - Base URL for API (from env), defaulting handled in App.
 */
function ContactForm({ apiBase }) {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Name is required.';
    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!values.message.trim()) nextErrors.message = 'Please include a message.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus({ type: 'error', message: 'Please fix the errors above.' });
      return;
    }
    // Placeholder submission pattern (no real request)
    // Future integration: POST `${apiBase}/contact` with body values
    setStatus({ type: 'success', message: 'Thanks! Your message is ready to send (demo mode).' });
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="h2">Contact</h2>
        <p className="muted" style={{ marginBottom: 16 }}>
          Have an idea or project? Let’s connect. (Demo mode: no message is sent.)
        </p>
        <form onSubmit={onSubmit} className="surface" style={{ padding: 20, maxWidth: 720 }}>
          <div style={{ display: 'grid', gap: 14 }}>
            <div>
              <label className="label" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="input"
                placeholder="Your name"
                value={values.name}
                onChange={onChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                required
              />
              {errors.name && <div id="name-error" className="help-text" role="alert">{errors.name}</div>}
            </div>
            <div>
              <label className="label" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="input"
                placeholder="you@example.com"
                value={values.email}
                onChange={onChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                required
              />
              {errors.email && <div id="email-error" className="help-text" role="alert">{errors.email}</div>}
            </div>
            <div>
              <label className="label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="input"
                placeholder="Tell me about your project..."
                value={values.message}
                onChange={onChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                required
              />
              {errors.message && <div id="message-error" className="help-text" role="alert">{errors.message}</div>}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 16, alignItems: 'center' }}>
            <button type="submit" className="btn" aria-label="Send message">Send Message</button>
            <span className="help-text" aria-live="polite">
              {status.message && (
                <span
                  style={{ color: status.type === 'success' ? 'var(--color-success)' : 'var(--color-error)', fontWeight: 700 }}
                >
                  {status.message}
                </span>
              )}
            </span>
          </div>
          <p className="help-text" style={{ marginTop: 10 }}>
            API base configured: <code>{apiBase}</code>
          </p>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
