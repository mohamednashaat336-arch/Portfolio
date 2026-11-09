import React, { useEffect, useRef } from 'react';
import { gsap } from '../../lib/animation';
import { aboutData } from '../../data/portfolioData';
import SectionHeader from '../common/SectionHeader';
import { Code2, Layout, Server } from 'lucide-react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import './About.css';

const POINT_ICONS = {
  code: Code2,
  layout: Layout,
  server: Server,
};

export default function About() {
  const sectionRef = useRef(null);
  const sideColRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const headerEl = sectionRef.current?.querySelector('.about-header-reveal');
      const staggerItems = sectionRef.current?.querySelectorAll('.about-stagger-item');
      const sideEl = sideColRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      if (headerEl) {
        tl.fromTo(
          headerEl,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }
        );
      }

      if (staggerItems && staggerItems.length > 0) {
        tl.fromTo(
          staggerItems,
          { opacity: 0, x: -45 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.14,
            duration: 0.95,
            ease: 'power2.out',
          },
          headerEl ? '-=0.55' : 0
        );
      }

      if (sideEl) {
        tl.fromTo(
          sideEl,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1.05,
            ease: 'power2.out',
          },
          headerEl ? '<+=0.1' : 0
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} id="about" className="section about-section">
      <div className="container">
        <div className="about-header-reveal">
          <SectionHeader title="Hi, I'm Mohamed" subtitle="A bit about me and what I'm working on." />
        </div>

        <div className="about-grid">
          <div className="about-content-col">
            <p className="about-stagger-item about-lead">{aboutData.paragraph1}</p>
            <p className="about-stagger-item about-text">{aboutData.paragraph2}</p>

            <div className="about-points">
              {aboutData.points.map((point) => {
                const Icon = POINT_ICONS[point.icon] || Code2;
                return (
                  <div key={point.title} className="about-stagger-item about-point">
                    <div className="about-point-icon">
                      <Icon size={16} color="var(--accent-primary)" />
                    </div>
                    <div>
                      <h4 className="about-point-title">{point.title}</h4>
                      <p className="about-point-text">{point.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div ref={sideColRef} className="about-side-col">
            <div className="about-facts card-elevated">
              <h3 className="about-facts-title">Quick facts</h3>
              <dl className="about-facts-list">
                {aboutData.facts.map((fact) => (
                  <div key={fact.label} className="about-fact">
                    <dt className="about-fact-label">{fact.label}</dt>
                    <dd className="about-fact-value">
                      {fact.value}
                      {fact.sub && <span className="about-fact-sub">{fact.sub}</span>}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
