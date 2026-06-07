const reasons = [
  {
    title: 'Quality Assured Products',
    desc: 'Every product in our catalogue meets stringent quality standards. We source from verified manufacturers and conduct quality checks before distribution.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: 'Reliable Supply Chain',
    desc: 'Our well-managed logistics network ensures consistent availability and timely restocking so your facility operations are never disrupted.',
    icon: <><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>,
  },
  {
    title: 'Competitive Pricing',
    desc: 'We offer market-competitive pricing for bulk and institutional buyers, with flexible payment terms tailored for healthcare procurement budgets.',
    icon: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></>,
  },
  {
    title: 'Fast Delivery',
    desc: 'Same-day delivery within Nairobi and rapid dispatch to other regions. Urgent orders are prioritized to ensure critical supplies reach you on time.',
    icon: <path d="M5 12h14M12 5l7 7-7 7" />,
  },
  {
    title: 'Professional Support',
    desc: 'Our knowledgeable team assists with product selection, technical queries, and regulatory compliance to ensure you get exactly what you need.',
    icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></>,
  },
  {
    title: 'Customer Satisfaction',
    desc: 'We maintain long-term relationships with our clients through consistent quality, transparent communication, and a commitment to exceeding expectations.',
    icon: <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />,
  },
];

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="section-header center fade-in">
          <span className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Why Choose Us
          </span>
          <h2 className="section-title">The Surgident Advantage</h2>
          <p className="section-subtitle">We combine product quality with operational excellence to ensure your facility never runs short.</p>
        </div>
        <div className="why-grid">
          {reasons.map((r) => (
            <div className="why-card fade-in" key={r.title}>
              <div className="why-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {r.icon}
                </svg>
              </div>
              <div className="why-title">{r.title}</div>
              <p className="why-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
