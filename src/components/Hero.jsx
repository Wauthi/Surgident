export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            {/* <div className="hero-badge">
              <div className="hero-badge-dot" />
              <span>Kenya's Trusted Medical Supplier</span>
            </div> */}
            <h1 className="hero-title">
              Your Trusted Source for Premium<br />
              <em>Medical Supplies</em> &amp;<br /> Equipment
            </h1>
            <p className="hero-desc">
              Surgident Limited is a leading manufacturer and distributor of high-quality medical equipment, surgical consumables, and advanced hospital furniture. Based in Nairobi, Kenya, we partner with premier global manufacturers to supply reliable diagnostic, laboratory, and dental solutions across the region.
            </p>
            <div className="hero-actions">
              <a href="#categories" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="7" height="7" /><rect x="15" y="3" width="7" height="7" /><rect x="15" y="16" width="7" height="7" /><rect x="2" y="16" width="7" height="7" />
                </svg>
                View Products
              </a>
              <a href="#contact" className="btn btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                Contact Us
              </a>
            </div>
            <div className="hero-stats">
              {[
                { number: '500+', label: 'Products' },
                { number: '12+', label: 'Years Experience' },
                { number: '300+', label: 'Clients Served' },
                { number: '24/7', label: 'Support' },
              ].map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-img-wrap">
              <div className="hero-illustration">
                <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                  <rect width="480" height="360" fill="#DCEEFF" />
                  <rect x="40" y="60" width="400" height="8" rx="3" fill="#b5d5f5" />
                  <rect x="40" y="160" width="280" height="8" rx="3" fill="#b5d5f5" />
                  <ellipse cx="100" cy="120" rx="22" ry="8" fill="#93c5fd" />
                  <rect x="88" y="72" width="24" height="50" rx="4" fill="none" stroke="#3B82F6" strokeWidth="2.5" />
                  <ellipse cx="100" cy="72" rx="12" ry="5" fill="#bfdbfe" />
                  <path d="M88 100 Q80 120 72 128 Q65 135 78 140 Q90 144 100 144 Q110 144 122 140 Q135 135 128 128 Q120 120 112 100Z" fill="#93c5fd" opacity="0.7" />
                  <rect x="148" y="68" width="20" height="54" rx="3" fill="none" stroke="#0F4C81" strokeWidth="2.5" />
                  <ellipse cx="158" cy="68" rx="10" ry="4" fill="#bfdbfe" />
                  <path d="M148 100 Q142 118 136 126 Q130 133 142 138 Q151 141 158 141 Q165 141 174 138 Q186 133 180 126 Q174 118 168 100Z" fill="#60a5fa" opacity="0.6" />
                  <rect x="200" y="45" width="110" height="18" rx="4" fill="#1e6db5" />
                  <line x1="215" y1="63" x2="215" y2="130" stroke="#3B82F6" strokeWidth="3.5" strokeLinecap="round" />
                  <ellipse cx="215" cy="130" rx="7" ry="4" fill="#60a5fa" />
                  <line x1="240" y1="63" x2="240" y2="115" stroke="#0F4C81" strokeWidth="3.5" strokeLinecap="round" />
                  <ellipse cx="240" cy="115" rx="7" ry="4" fill="#1e40af" />
                  <line x1="265" y1="63" x2="265" y2="125" stroke="#3B82F6" strokeWidth="3.5" strokeLinecap="round" />
                  <ellipse cx="265" cy="125" rx="7" ry="4" fill="#93c5fd" />
                  <line x1="290" y1="63" x2="290" y2="118" stroke="#1e6db5" strokeWidth="3.5" strokeLinecap="round" />
                  <ellipse cx="290" cy="118" rx="7" ry="4" fill="#3B82F6" />
                  <rect x="340" y="20" width="55" height="45" rx="5" fill="#0F4C81" />
                  <text x="367" y="47" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">MEDI</text>
                  <rect x="350" y="170" width="75" height="50" rx="5" fill="#1a6db5" />
                  <ellipse cx="130" cy="290" rx="30" ry="8" fill="#1a6db5" />
                  <rect x="123" y="240" width="14" height="52" rx="3" fill="#0F4C81" />
                  <rect x="107" y="240" width="46" height="12" rx="3" fill="#1a6db5" />
                  <circle cx="148" cy="246" r="10" fill="none" stroke="#3B82F6" strokeWidth="2.5" />
                  <circle cx="148" cy="246" r="6" fill="#dbeafe" />
                  <rect x="230" y="230" width="90" height="14" rx="7" fill="#bfdbfe" stroke="#3B82F6" strokeWidth="1.5" />
                  <rect x="244" y="234" width="40" height="6" rx="3" fill="#60a5fa" />
                  <rect x="318" y="234" width="18" height="6" rx="1" fill="#0F4C81" />
                  <circle cx="400" cy="260" r="30" fill="#0F4C81" />
                  <rect x="394" y="244" width="12" height="32" rx="3" fill="white" />
                  <rect x="384" y="254" width="32" height="12" rx="3" fill="white" />
                </svg>
              </div>
            </div>
            {/*
            <div className="hero-card-float card-1">
              <div className="float-icon green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="float-text">
                <strong>ISO Quality Assured</strong>
                <span>All products verified</span>
              </div>
            </div>

            <div className="hero-card-float card-2">
              <div className="float-icon blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <div className="float-text">
                <strong>Fast Delivery</strong>
                <span>Nationwide coverage</span>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
