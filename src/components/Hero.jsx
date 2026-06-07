import { useEffect, useRef } from 'react';

const STATS = [
  { number: '500+', label: 'PRODUCTS' },
  { number: '12+',  label: 'YEARS'    },
  { number: '300+', label: 'CLIENTS'  },
  { number: '24/7', label: 'SUPPORT'  },
];

const CATEGORIES = [
  { emoji: '🔬', label: 'Laboratory' },
  { emoji: '🩺', label: 'Diagnostic' },
  { emoji: '🦷', label: 'Dental'     },
  { emoji: '🏥', label: 'Surgical'   },
  { emoji: '🛏️', label: 'Furniture'  },
  { emoji: '💊', label: 'Consumables'},
];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * 1200,
      y: Math.random() * 900,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      o: Math.random() * 0.45 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100,160,255,${p.o})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

      <div className="container hero-container">

        {/* ── TEXT BLOCK ── */}
        <div className="hero-content">
          <h1 className="hero-title">
            Your Trusted<br />
            Source for<br />
            Premium<br />
            <span className="hero-title-accent">Medical Products</span>
          </h1>

          <p className="hero-desc">
            Surgident Limited is a manufacture and distributor of high quality
            medical equipment. Based in Nairobi, Kenya we partner with premier
            manufacturers to supply, reliable diagnostic, lab and dental
            solutions across the region.
          </p>

          {/* Full-width stacked buttons */}
          <div className="hero-actions">
            <a href="#categories" className="btn hero-btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
              </svg>
              Browse Catalogue
            </a>
            <a href="#contact" className="btn hero-btn-ghost">
              Get a Quote
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ── VISUAL CARD ── */}
        <div className="hero-visual">
          <div className="hero-visual-card">

            {/* Globe watermark */}
            <div className="hvc-globe" aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80"  stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
                <ellipse cx="100" cy="100" rx="40" ry="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
                <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
                <ellipse cx="100" cy="100" rx="80" ry="28" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5"/>
              </svg>
            </div>

            {/* Blue cross button top-right */}
            <div className="hvc-cross">
              <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                <rect x="18" y="4"  width="12" height="40" rx="3" fill="white" fillOpacity="0.95"/>
                <rect x="4"  y="18" width="40" height="12" rx="3" fill="white" fillOpacity="0.95"/>
              </svg>
            </div>

            {/* 2-col category grid */}
            <div className="hvc-categories">
              {CATEGORIES.map((c) => (
                <div className="hvc-cat-chip" key={c.label}>
                  <span className="hvc-cat-icon">{c.emoji}</span>
                  <span className="hvc-cat-label">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── STATS 2×2 GRID ── */}
        <div className="hero-stats-grid">
          {STATS.map((s) => (
            <div className="hero-stat-card" key={s.label}>
              <span className="hero-stat-icon">{s.icon}</span>
              <span className="hero-stat-num">{s.number}</span>
              <span className="hero-stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
