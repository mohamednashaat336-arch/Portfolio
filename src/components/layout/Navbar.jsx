import React, { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../../data/portfolioData';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const nextThemeLabel = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header-inner">
        <a
          href="#"
          className="site-logo"
          aria-label="Mohamed Nashaat - Return to top"
        >
          <div>
            <div
              className="site-logo-name"
            >
              {personalInfo.name}
            </div>
            <div
              className="site-logo-role"
            >
              Frontend Developer
            </div>
          </div>
        </a>

        <nav
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="desktop-cta">
            <a
              href={personalInfo.cvPath}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <span>Resume</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={nextThemeLabel}
            title={nextThemeLabel}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="mobile-menu"
        >
          <div className="mobile-menu-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-menu-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mobile-menu-actions">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-accent mobile-menu-cta"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
