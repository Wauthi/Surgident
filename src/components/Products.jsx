const products = [
  {
    badge: 'Consumables',
    category: 'Medical Consumables',
    name: 'Surgical Spirit',
    desc: 'For rst aid and surgical application. Available in S/M/L/XL.',
    illustration: (
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#DCEEFF' }}>
        <rect x="70" y="40" width="180" height="100" rx="8" fill="#0F4C81" opacity="0.1" />
        <rect x="90" y="60" width="80" height="120" rx="5" fill="white" stroke="#3B82F6" strokeWidth="2" />
        <rect x="94" y="58" width="72" height="12" rx="3" fill="#0F4C81" />
        <rect x="98" y="80" width="64" height="3" rx="1.5" fill="#93c5fd" />
        <rect x="98" y="88" width="52" height="3" rx="1.5" fill="#93c5fd" />
        <rect x="98" y="96" width="58" height="3" rx="1.5" fill="#93c5fd" />
        <path d="M130 115 Q130 110 125 110 Q120 110 120 115 L120 135 Q120 140 125 140 L135 140 Q140 140 140 135 L140 115 Q140 110 135 110 Q130 110 130 115Z" fill="#3B82F6" opacity="0.8" />
        <circle cx="130" cy="108" r="5" fill="#1a6db5" />
        <rect x="190" y="75" width="55" height="80" rx="6" fill="#1a6db5" />
        <rect x="195" y="82" width="45" height="3" rx="1.5" fill="white" opacity="0.5" />
        <circle cx="217" cy="120" r="15" fill="#0F4C81" />
        <text x="217" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">+</text>
      </svg>
    ),
  },
  {
    badge: 'Consumables',
    category: 'Medical Consumables',
    name: 'Glutaraldehyde With Activator',
    desc: 'High level Disinfectant for thermostable and thermolabile instruments like endoscopes and lapascopes ,anesthesia and dental equipment. Available in 1ml, 2ml, 5ml, 10ml, and 20ml sizes.',
    illustration: (
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#eef6ff' }}>
        <circle cx="160" cy="90" r="55" fill="#DCEEFF" />
        <path d="M130 80 L110 80 Q105 80 105 85 L105 95 Q105 100 110 100 L130 100Z" fill="#3B82F6" />
        <rect x="130" y="85" width="80" height="10" rx="5" fill="#bfdbfe" stroke="#3B82F6" strokeWidth="1.5" />
        <rect x="140" y="87" width="40" height="6" rx="3" fill="#60a5fa" />
        <line x1="210" y1="90" x2="225" y2="90" stroke="#0F4C81" strokeWidth="2.5" />
        <circle cx="205" cy="90" r="4" fill="#0F4C81" />
        <circle cx="228" cy="90" r="5" fill="#0F4C81" />
        <text x="160" y="145" textAnchor="middle" fill="#0F4C81" fontSize="11" fontFamily="sans-serif" fontWeight="600" opacity="0.7">10mL | Sterile | Single Use</text>
      </svg>
    ),
  },
  {
    badge: 'Disinfectants',
    category: 'Disinfectants',
    name: 'Surgi bleach',
    desc: 'Sodium hypochlorite solution USP (3-4% and 4-6%) for disinfection of; hands bathrooms and highly contaminated places among other. Available in 500ml and 1L bottles.',
    illustration: (
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#f0f8ff' }}>
        <rect x="80" y="30" width="160" height="120" rx="10" fill="#DCEEFF" />
        <ellipse cx="160" cy="52" rx="32" ry="12" fill="#1a6db5" />
        <rect x="100" y="50" width="120" height="84" rx="6" fill="white" opacity="0.9" />
        <rect x="110" y="65" width="35" height="35" rx="4" fill="#3B82F6" opacity="0.2" />
        <text x="127" y="88" textAnchor="middle" fill="#3B82F6" fontSize="22" fontWeight="bold">H₂</text>
        <text x="127" y="101" textAnchor="middle" fill="#3B82F6" fontSize="10">O₂</text>
        <rect x="150" y="70" width="60" height="4" rx="2" fill="#bfdbfe" />
        <rect x="150" y="80" width="48" height="4" rx="2" fill="#bfdbfe" />
        <text x="160" y="125" textAnchor="middle" fill="#0F4C81" fontSize="9" fontFamily="sans-serif" opacity="0.6">3% w/v Solution — 500ml</text>
      </svg>
    ),
  },
  {
    badge: 'Equipment',
    category: 'Medical Equipment',
    name: 'Digital Blood Pressure Monitor',
    desc: 'Clinically validated automatic blood pressure monitor for accurate readings. Suitable for professional and home use.',
    illustration: (
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#DCEEFF' }}>
        <rect x="100" y="40" width="120" height="140" rx="10" fill="#0F4C81" />
        <rect x="108" y="48" width="104" height="84" rx="6" fill="#1e3a5f" />
        <polyline points="115,100 130,88 143,95 156,78 169,85 182,72 195,82 205,75" fill="none" stroke="#3B82F6" strokeWidth="2.5" />
        <rect x="108" y="138" width="104" height="28" rx="4" fill="#1a6db5" />
        <circle cx="160" cy="152" r="8" fill="#0F4C81" />
        <circle cx="160" cy="152" r="4" fill="#3B82F6" />
      </svg>
    ),
  },
  {
    badge: 'Equipment',
    category: 'Medical Equipment',
    name: 'Clinical Digital Thermometer',
    desc: 'Fast-read digital thermometer with high accuracy for clinical temperature measurement. Waterproof, with fever alarm alert.',
    illustration: (
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#f0f8ff' }}>
        <ellipse cx="160" cy="110" rx="50" ry="55" fill="#1a6db5" opacity="0.15" />
        <rect x="150" y="40" width="20" height="110" rx="10" fill="white" stroke="#3B82F6" strokeWidth="2.5" />
        <rect x="152" y="85" width="16" height="42" rx="8" fill="#ef4444" opacity="0.8" />
        <circle cx="160" cy="140" r="14" fill="white" stroke="#3B82F6" strokeWidth="2.5" />
        <circle cx="160" cy="140" r="9" fill="#ef4444" opacity="0.7" />
        <text x="160" y="168" textAnchor="middle" fill="#0F4C81" fontSize="10" fontFamily="sans-serif" fontWeight="600" opacity="0.7">Clinical Thermometer</text>
      </svg>
    ),
  },
  {
    badge: 'Consumables',
    category: 'Medical Consumables',
    name: 'Type IIR Surgical Face Masks',
    desc: 'Three-layer surgical masks with bacterial filtration efficiency ≥98%. Fluid resistant, hypoallergenic, and comfortable. Box of 50.',
    illustration: (
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', background: '#eef6ff' }}>
        <ellipse cx="160" cy="90" rx="75" ry="55" fill="#DCEEFF" stroke="#93c5fd" strokeWidth="1.5" />
        <path d="M85 80 Q160 110 235 80" fill="none" stroke="#60a5fa" strokeWidth="2" />
        <path d="M85 90 Q160 120 235 90" fill="none" stroke="#60a5fa" strokeWidth="2" />
        <path d="M85 100 Q160 130 235 100" fill="none" stroke="#60a5fa" strokeWidth="2" />
        <line x1="85" y1="70" x2="60" y2="55" stroke="#0F4C81" strokeWidth="2.5" />
        <line x1="85" y1="110" x2="60" y2="125" stroke="#0F4C81" strokeWidth="2.5" />
        <line x1="235" y1="70" x2="260" y2="55" stroke="#0F4C81" strokeWidth="2.5" />
        <line x1="235" y1="110" x2="260" y2="125" stroke="#0F4C81" strokeWidth="2.5" />
        <text x="160" y="160" textAnchor="middle" fill="#0F4C81" fontSize="10" fontFamily="sans-serif" fontWeight="600" opacity="0.7">Type IIR Surgical Mask — 50/Box</text>
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section className="products" id="products" style={{ background: 'white' }}>
      <div className="container">
        <div className="section-header center fade-in">
          <span className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Featured Products
          </span>
          <h2 className="section-title">Popular Items</h2>
          <p className="section-subtitle">Widely trusted products used by healthcare facilities across the region.</p>
        </div>

        <div className="products-grid">
          {products.map((p) => (
            <div className="product-card fade-in" key={p.name}>
              <div className="product-img">
                {p.illustration}
                <span className="product-badge">{p.badge}</span>
              </div>
              <div className="product-body">
                <div className="product-cat">{p.category}</div>
                <div className="product-name">{p.name}</div>
                <p className="product-desc">{p.desc}</p>
                <a href="#contact" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>View Details</a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <a href="#contact" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '15px' }}>
            Request Full Product Catalogue
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
