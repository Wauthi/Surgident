import { useEffect, useRef } from 'react';

const STATS = [
  { number: '500+', label: 'Products' },
  { number: '12+', label: 'Years' },
  { number: '300+', label: 'Clients' },
  { number: '24/7', label: 'Support' },
];

// const TRUST_LOGOS = ['ISO 9001', 'CE Mark', 'WHO GMP', 'KEBS'];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Floating particles
    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * 1000,
      y: Math.random() * 1000,
      r: Math.random() * 2.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.15,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

      {/* Decorative cross pattern */}
      <div className="hero-cross-grid" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="cross-cell" />
        ))}
      </div>

      <div className="container hero-container">
        {/* Left column */}
        <div className="hero-content">
          {/* <div className="hero-badge">
            <span className="hero-badge-pulse" />
            <span>Kenya's #1 Medical Equipment Supplier</span>
          </div> */}

          <h1 className="hero-title">
            Your Trusted Source<br />
            for Premium<br />
            <span className="hero-title-accent">Medical</span>
          </h1>

          <p className="hero-desc">
            Surgident Limited is a manufacture and distributor of high quality medical equipment.
            Based in Nairobi, Kenya we partner with premier manufacturers to supply,
            reliable diagnostic, lab and dental solutions across the region.
          </p>

          <div className="hero-actions">
            <a href="#categories" className="btn btn-primary hero-btn-primary">
              <svg width="18" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
              </svg>
              Browse Catalogue
            </a>
            <a href="#contact" className="btn btn-ghost hero-btn-ghost">
              Get a Quote
              <svg width="20" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Stats row */}
          <div className="hero-stats">
            {STATS.map((s) => (
              <div className="hero-stat" key={s.label}>
                <span className="hero-stat-num">{s.number}</span>
                <span className="hero-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Certifications */}
          {/* <div className="hero-certs">
            <span className="hero-certs-label">Certified by</span>
            <div className="hero-certs-list">
              {TRUST_LOGOS.map((l) => (
                <span className="hero-cert-badge" key={l}>{l}</span>
              ))}
            </div>
          </div> */}
        </div>

        {/* Right column – visual panel */}
        <div className="hero-visual">
          <div className="hero-visual-card">
            {/* Medical cross icon */}
            <div className="hvc-cross">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="18" y="4" width="12" height="40" rx="4" fill="white" fillOpacity="0.9"/>
                <rect x="4" y="18" width="40" height="12" rx="4" fill="white" fillOpacity="0.9"/>
              </svg>
            </div>

            {/* Product category icons */}
            <div className="hvc-categories">
              {[
                { icon: '🔬', label: 'Laboratory' },
                { icon: '🩺', label: 'Diagnostic' },
                { icon: '🦷', label: 'Dental' },
                { icon: '🏥', label: 'Surgical' },
                { icon: '🛏️', label: 'Furniture' },
                { icon: '💊', label: 'Consumables' },
              ].map((cat) => (
                <div className="hvc-cat-chip" key={cat.label}>
                  <span className="hvc-cat-icon">{cat.icon}</span>
                  <span>{cat.label}</span>
                </div>
              ))}
            </div>

            {/* Floating info card */}
            {/* <div className="hvc-info-card hvc-card-top">
              <div className="hvc-info-dot" />
              <div>
                <strong>Fast Nationwide Delivery</strong>
                <span>Across Kenya & East Africa</span>
              </div>
            </div> */}

            {/* <div className="hvc-info-card hvc-card-bottom">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <div>
                <strong>ISO 9001 Certified Products</strong>
                <span>Quality you can trust</span>
              </div>
            </div> */}

            {/* Subtle globe/map decoration */}
            <div className="hvc-globe" aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
                <ellipse cx="100" cy="100" rx="40" ry="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
                <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"/>
                <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
                <ellipse cx="100" cy="100" rx="80" ry="30" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="hero-scroll-cue">
            <span>Scroll</span>
            <div className="hero-scroll-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
