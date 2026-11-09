import React, { useEffect, useRef } from 'react';
import { gsap } from '../../lib/animation';
import { skills, learningNow, projects } from '../../data/portfolioData';
import SectionHeader from '../common/SectionHeader';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import './Skills.css';

export default function Skills() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const showUsedIn = projects.length > 1;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const headerEl = sectionRef.current?.querySelector('.skills-header-reveal');
      const cards = cardRefs.current.filter(Boolean);

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

      const fromVars = [
        { opacity: 0, x: -50 },
        { opacity: 0, y: 50 },
        { opacity: 0, x: 50 },
      ];
      const toVars = [
        { opacity: 1, x: 0 },
        { opacity: 1, y: 0 },
        { opacity: 1, x: 0 },
      ];

      cards.forEach((card, i) => {
        tl.fromTo(
          card,
          fromVars[i % 3],
          { ...toVars[i % 3], duration: 0.95, ease: 'power2.out' },
          i === 0 ? '-=0.55' : '<+=0.15'
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} id="skills" className="section skills-section">
      <div className="container">
        <div className="skills-header-reveal">
          <SectionHeader
            title="What I use"
            subtitle="The languages, libraries, and tools I've used in my projects."
          />
        </div>

        <div className="skills-grid">
          {skills.map((category, idx) => (
            <div
              key={category.category}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="skill-category-card card-elevated"
            >
              <h3 className="skill-category-title">{category.category}</h3>
              <p className="skill-category-desc">{category.description}</p>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-badge-item">
                    <span className="skill-name">{skill.name}</span>
                    {showUsedIn && <span className="skill-used-in">{skill.usedIn.join(', ')}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {learningNow.length > 0 && (
          <p className="skills-learning">
            <span className="skills-learning-label">Learning now</span>
            {learningNow.join(', ')}
          </p>
        )}
      </div>
    </section>
  );
}
