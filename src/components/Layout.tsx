import React, { useState, useEffect } from 'react';
import { Hero } from './Hero';
import { Credentials } from './Credentials';
import { Experience } from './Experience';
import { Education } from './Education';
import { Skills } from './Skills';
import { Contact } from './Contact';
import { Footer } from './Footer';

const navItems = [
  { href: '#credentials', num: '01', label: 'Credentials', shortLabel: 'Credentials' },
  { href: '#experience', num: '02', label: 'Experience', shortLabel: 'Experience' },
  { href: '#education', num: '03', label: 'Education', shortLabel: 'Education' },
  { href: '#skills', num: '04', label: 'Competencies', shortLabel: 'Skills' },
  { href: '#contact', num: '05', label: 'Contact', shortLabel: 'Contact' },
];

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="wrap header-inner">
          {/* Brand Wordmark */}
          <a href="#hero" className="wordmark" onClick={closeMenu}>
            <span className="wordmark-name">Sravani Samavedam</span>
            <span className="wordmark-cma">CMA</span>
          </a>

          {/* Desktop Navigation (>= 1024px) */}
          <nav className="hidden lg:flex nav-links" aria-label="Desktop Navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                <span className="nav-num">{item.num} /</span> {item.label}
              </a>
            ))}
          </nav>

          {/* Tablet Navigation (768px - 1023px) */}
          <nav className="hidden md:flex lg:hidden nav-links-tablet" aria-label="Tablet Navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.shortLabel}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="header-actions">
            <a
              href="/CMA_SravaniSamavedam_Resume.pdf"
              download="CMA_SravaniSamavedam_Resume.pdf"
              className="btn-header-resume"
            >
              <span className="hidden sm:inline">Resume PDF</span>
              <span className="sm:hidden">Resume</span>
              <span className="btn-arrow">↗</span>
            </a>

            {/* Mobile Hamburger Toggle Button (< 768px) */}
            <button
              type="button"
              className={`hamburger-btn md:hidden ${mobileMenuOpen ? 'is-active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer Overlay & Panel (< 768px) */}
        {mobileMenuOpen && (
          <div
            className="mobile-menu-overlay md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        <div
          id="mobile-navigation"
          className={`mobile-menu-drawer md:hidden ${mobileMenuOpen ? 'is-open' : ''}`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <span className="mobile-menu-eyebrow">NAVIGATION DIRECTORY</span>
              <span className="mobile-menu-status">ICMAI QUALIFIED</span>
            </div>

            <nav className="mobile-nav-list" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  <span className="mobile-nav-num">{item.num}</span>
                  <span className="mobile-nav-title">{item.label}</span>
                  <span className="mobile-nav-arrow">→</span>
                </a>
              ))}
            </nav>

            <div className="mobile-menu-footer">
              <a
                href="/CMA_SravaniSamavedam_Resume.pdf"
                download="CMA_SravaniSamavedam_Resume.pdf"
                className="btn-primary w-full justify-center"
                onClick={closeMenu}
              >
                Download Official Resume (PDF) ↘
              </a>

              <div className="mobile-contact-strip">
                <a href="mailto:sravanisamavedam18@gmail.com" className="mobile-email">
                  sravanisamavedam18@gmail.com
                </a>
                <span className="mobile-loc">Vijayawada, AP</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <Hero />
        <Credentials />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
