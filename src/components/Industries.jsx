const industries = [
  {
    title: 'Hospitals',
    desc: 'Full-range supply for public and private hospitals — from wards to operating theatres and ICUs.',
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
  },
  {
    title: 'Clinics',
    desc: 'Reliable supply of everyday consumables and diagnostic tools for outpatient and specialist clinics.',
    icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
  },
  {
    title: 'Laboratories',
    desc: 'Chemicals, reagents, glassware, and consumables for diagnostic, research, and analytical labs.',
    icon: <><path d="M10 2v7.31l-3.21 3.21A1 1 0 006.5 13.5h11a1 1 0 00-.29-.98L14 9.31V2" /><line x1="10" y1="2" x2="14" y2="2" /></>,
  },
  {
    title: 'Pharmacies',
    desc: 'Wholesale supply of healthcare consumables and pharmaceutical packaging materials for retail pharmacies.',
    icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    title: 'Educational Institutions',
    desc: 'Medical and science schools supplied with laboratory chemicals, anatomy models, and training consumables.',
    icon: <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>,
  },
  {
    title: 'NGOs & Health Programmes',
    desc: 'Scalable procurement support for non-governmental organisations running field health programmes across East Africa.',
    icon: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></>,
  },
];

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <div className="section-header center fade-in">
          <span className="section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Industries We Serve
          </span>
          <h2 className="section-title">Who We Supply</h2>
          <p className="section-subtitle">From public hospitals to NGOs, we serve the full spectrum of healthcare and research institutions.</p>
        </div>
        <div className="industries-grid">
          {industries.map((ind) => (
            <div className="industry-card fade-in" key={ind.title}>
              <div className="industry-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {ind.icon}
                </svg>
              </div>
              <div className="industry-title">{ind.title}</div>
              <p className="industry-desc">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
