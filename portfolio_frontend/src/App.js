import React, { useMemo } from 'react';
import './App.css';
import './styles/utilities.css';
import './styles/theme.css';
import Navbar from './components/Navbar';
import HeroAbout from './components/HeroAbout';
import ProjectsGrid from './components/ProjectsGrid';
import SkillsCloud from './components/SkillsCloud';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

/**
 * Reads feature flags from environment variable REACT_APP_FEATURE_FLAGS (JSON)
 * and provides defaults. Never throws; falls back to safe defaults.
 */
function useFeatureFlags() {
  return useMemo(() => {
    const raw = process.env.REACT_APP_FEATURE_FLAGS || '{}';
    try {
      const parsed = JSON.parse(raw);
      return {
        enableContact: parsed.enableContact !== false, // default true
        showWaves: parsed.showWaves !== false, // default true
      };
    } catch {
      return {
        enableContact: true,
        showWaves: true,
      };
    }
  }, []);
}

// PUBLIC_INTERFACE
function App() {
  const flags = useFeatureFlags();

  // PUBLIC_INTERFACE
  const apiBase =
    process.env.REACT_APP_API_BASE ||
    process.env.REACT_APP_BACKEND_URL ||
    'http://localhost:4000';

  return (
    <div className={`App ocean-bg ${flags.showWaves ? 'with-waves' : ''}`}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" role="main" aria-label="Portfolio main content">
        <HeroAbout />
        <ProjectsGrid />
        <SkillsCloud />
        {flags.enableContact && <ContactForm apiBase={apiBase} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
