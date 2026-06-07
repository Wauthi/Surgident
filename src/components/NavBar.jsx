import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('#mobileMenu') && !e.target.closest('#hamburger')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#categories', label: 'Products' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#industries', label: 'Industries' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="container">
          <div className="nav-inner">
            <a href="#" className="logo">
              <div className="logo-icon">
                <img src="/assets/halflogo.png" alt="Half Logo" className='logo-img' />
              </div>
              <span className="logo-text">Surgident</span>
            </a>

            <div className="nav-links">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={activeSection === item.href.slice(1) ? 'active' : ''}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="nav-cta">
              <a href="tel:+254700000000" className="btn btn-outline" style={{ padding: '9px 18px', fontSize: '13px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.01 2.82 2 2 0 012 .66h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                Call Now
              </a>
              <a href="#contact" className="btn btn-primary" style={{ padding: '9px 20px', fontSize: '13px' }}>Get a Quote</a>
              <button className="hamburger" id="hamburger" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Get a Quote</a>
      </div>
    </>
  );
}
