import React from 'react';
import { personalInfo, navLinks } from '../../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import './Footer.css';

const CURRENT_YEAR = 2026;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="site-footer"
    >
      <div className="container">
        <div
          className="footer-top"
        >
          <div className="footer-brand">
            <div
              className="footer-brand-row"
            >
              <span
                className="footer-brand-name"
              >
                {personalInfo.displayName}
              </span>
            </div>
            <p className="footer-about">
              Frontend developer from Cairo. I build React apps and I'm learning Node.js.
            </p>
          </div>

          <div>
            <div
              className="footer-heading"
            >
              Navigation
            </div>
            <div className="footer-nav">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-link footer-nav-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div
              className="footer-heading"
            >
              Connect
            </div>
            <div className="footer-social">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="footer-link footer-social-link"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="footer-link footer-social-link"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm footer-top-btn"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div
          className="footer-bottom"
        >
          <div>
            © {CURRENT_YEAR} Mohamed Nashaat. All rights reserved.
          </div>
          <div>
            Cairo, Egypt
          </div>
        </div>
      </div>
    </footer>
  );
}
