const values = [
  { label: 'Quality Focused', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
  { label: 'Continuous Growth', icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></> },
  { label: 'Client First', icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></> },
  { label: 'On-Time Delivery', icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></> },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap fade-in">
            <svg viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#DCEEFF,#c7e1ff)' }}>
              <rect x="60" y="250" width="400" height="120" rx="8" fill="#0F4C81" />
              <rect x="60" y="240" width="400" height="20" rx="4" fill="#1a6db5" />
              <rect x="90" y="180" width="80" height="65" rx="8" fill="#1a6db5" />
              <circle cx="130" cy="210" r="22" fill="#0F4C81" />
              <circle cx="130" cy="210" r="14" fill="#3B82F6" />
              <circle cx="130" cy="210" r="6" fill="#bfdbfe" />
              <rect x="200" y="160" width="120" height="85" rx="6" fill="#0a3560" />
              <rect x="208" y="168" width="104" height="65" rx="3" fill="#1e3a5f" />
              <line x1="252" y1="245" x2="252" y2="258" stroke="#1a6db5" strokeWidth="4" />
              <rect x="238" y="258" width="28" height="6" rx="3" fill="#1a6db5" />
              <line x1="218" y1="185" x2="302" y2="185" stroke="#3B82F6" strokeWidth="1.5" opacity="0.7" />
              <line x1="218" y1="195" x2="280" y2="195" stroke="#3B82F6" strokeWidth="1.5" opacity="0.5" />
              <polyline points="218,220 235,210 248,218 262,205 275,212 290,200 302,208" fill="none" stroke="#3B82F6" strokeWidth="2" />
              <rect x="350" y="195" width="80" height="50" rx="5" fill="#1a6db5" />
              <rect x="358" y="188" width="8" height="40" rx="4" fill="#93c5fd" />
              <rect x="373" y="183" width="8" height="45" rx="4" fill="#60a5fa" />
              <rect x="388" y="188" width="8" height="38" rx="4" fill="#3B82F6" />
              <rect x="403" y="185" width="8" height="42" rx="4" fill="#bfdbfe" />
              <circle cx="155" cy="100" r="26" fill="#1a6db5" />
              <rect x="128" y="125" width="54" height="80" rx="10" fill="#1a6db5" />
              <rect x="165" y="140" width="32" height="42" rx="3" fill="white" opacity="0.9" />
              <rect x="170" y="133" width="22" height="8" rx="2" fill="#0F4C81" />
            </svg>
            <div className="about-accent-box">
              <strong>12+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>

          <div className="about-text fade-in">
            <span className="section-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              About Surgident Supplies
            </span>
            <h2 className="section-title">Your Reliable Partner in Healthcare Procurement</h2>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '16px' }}>
              We specializes in manufacturing high-grade disinfectants, sanitizers, and antiseptics, including surgical spirit, bleach, and handwash. Through strategic partnerships, we deliver premium healthcare solutions at competitive prices—a commitment to quality and efficiency reflected in our 95% client retention rate.
            </p>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '28px' }}>
              We are just a call away for the reliable distribution and delivery of surgical consumables, medical equipment, laboratory reagents, diagnostics, dental supplies, and hospital furniture. 
            </p>
            <div className="about-values">
              {values.map((v) => (
                <div className="value-chip" key={v.label}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    {v.icon}
                  </svg>
                  {v.label}
                </div>
              ))}
            </div>
            <div style={{ marginTop: '32px' }}>
              <a href="#contact" className="btn btn-primary">
                Learn More About Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
