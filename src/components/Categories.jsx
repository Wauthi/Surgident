const categories = [
  {
    title: 'Medical Consumables',
    desc: 'Essential single-use healthcare items for clinical and surgical use.',
    tags: ['Gloves', 'Syringes', 'Face Masks', 'Cotton Wool'],
    icon: <path d="M18 3a3 3 0 00-3 3v12a3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V6a3 3 0 003-3 3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12a3 3 0 003-3 3 3 0 00-3-3z" />,
  },
  {
    title: 'Laboratory Chemicals',
    desc: 'High-purity chemicals and reagents for research and diagnostic labs.',
    tags: ['Reagents', 'Solvents', 'Testing Chemicals'],
    icon: <><path d="M10 2v7.31l-3.21 3.21A1 1 0 006.5 13.5h11a1 1 0 00-.29-.98L14 9.31V2" /><line x1="10" y1="2" x2="14" y2="2" /><path d="M6.5 13.5L5 22h14l-1.5-8.5" /></>,
  },
  {
    title: 'Disinfectants & Sanitizers',
    desc: 'Professional-grade disinfection products for clinical environments.',
    tags: ['Surgical Spirit', 'H₂O₂', 'Surface Disinfectants'],
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
  },
  {
    title: 'Medical Equipment',
    desc: 'Diagnostic and monitoring equipment for healthcare professionals.',
    tags: ['Thermometers', 'Diagnostic Tools', 'BP Monitors'],
    icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
  },
];

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="section-header center fade-in">
          <span className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="7" height="7" /><rect x="15" y="3" width="7" height="7" /><rect x="15" y="16" width="7" height="7" /><rect x="2" y="16" width="7" height="7" />
            </svg>
            Product Categories
          </span>
          <h2 className="section-title">What We Supply</h2>
          <p className="section-subtitle">A comprehensive range of medical and laboratory products to meet every healthcare need.</p>
        </div>
        <div className="categories-grid">
          {categories.map((cat) => (
            <div className="cat-card fade-in" key={cat.title}>
              <div className="cat-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {cat.icon}
                </svg>
              </div>
              <div className="cat-title">{cat.title}</div>
              <p className="cat-desc">{cat.desc}</p>
              <div className="cat-items">
                {cat.tags.map((tag) => <span className="cat-tag" key={tag}>{tag}</span>)}
              </div>
              <a href="#contact" className="btn btn-ghost">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
