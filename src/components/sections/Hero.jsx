import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../../lib/animation';
import { personalInfo } from '../../data/portfolioData';
import heroPortraitImg from '../../assets/mohamed-nashaat-hero.webp';
import { ArrowDown, Download, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroPortraitRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const portraitStartX = isMobile ? 40 : 100;

      tl.from('.hero-meta', {
        opacity: 0,
        y: 20,
        duration: 0.7,
      })
      .from('.hero-headline', {
        opacity: 0,
        y: 30,
        duration: 0.85,
      }, '-=0.45')
      .from('.hero-role-tag', {
        opacity: 0,
        y: 18,
        duration: 0.6,
      }, '-=0.5')
      .from('.hero-desc', {
        opacity: 0,
        y: 20,
        duration: 0.65,
      }, '-=0.45')
      .from('.hero-actions', {
        opacity: 0,
        y: 18,
        duration: 0.55,
      }, '-=0.35')
      .from(heroPortraitRef.current, {
        opacity: 0,
        x: portraitStartX,
        duration: 1.05,
        ease: 'power3.out',
      }, '-=0.6');

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom 20%',
        scrub: 0.6,
        onUpdate: (self) => {
          const p = self.progress;
          if (heroContentRef.current) {
            gsap.set(heroContentRef.current, {
              y: -p * 40,
              opacity: Math.max(0, 1 - p * 1.4),
            });
          }
          if (heroPortraitRef.current) {
            gsap.set(heroPortraitRef.current, {
              x: p * 40,
              opacity: Math.max(0, 1 - p * 1.4),
            });
          }
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero"
    >
      <div className="editorial-grid-bg" />

      <div
        className="hero-glow-top"
      />
      <div
        className="hero-glow-bottom"
      />

      <div className="container hero-container">
        <div
          className="hero-grid"
        >
          <div ref={heroContentRef} className="hero-content">
            <div
              className="hero-meta"
            >
              <div
                className="hero-location"
              >
                <MapPin size={13} color="var(--accent-secondary)" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <h1
              className="hero-headline"
            >
              {personalInfo.name}
            </h1>

            <div
              className="hero-role-tag"
            >
              <div
                className="hero-role-line"
              />
              <span
                className="hero-role-text"
              >
                {personalInfo.role}
              </span>
            </div>

            <p
              className="hero-desc"
            >
              {personalInfo.intro}
            </p>

            <div
              className="hero-actions"
            >
              <a href="#work" className="btn btn-primary">
                <span>View my work</span>
                <ArrowDown size={15} />
              </a>

              <a
                href={personalInfo.cvPath}
                download="Mohamed-Nashaat-CV.pdf"
                className="btn btn-secondary"
                title="Download CV (PDF)"
              >
                <span>Download CV</span>
                <Download size={15} />
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary hero-icon-btn"
                title="GitHub Profile"
                aria-label="Mohamed Nashaat on GitHub"
              >
                <GithubIcon size={17} />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary hero-icon-btn"
                title="LinkedIn Profile"
                aria-label="Mohamed Nashaat on LinkedIn"
              >
                <LinkedinIcon size={17} />
              </a>
            </div>
          </div>

          <div ref={heroPortraitRef} className="hero-portrait-col">
            <div
              className="hero-portrait-wrapper"
            >
              <img
                src={heroPortraitImg}
                alt="Mohamed Nashaat - Frontend Developer"
                loading="eager"
                className="hero-portrait-img"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
