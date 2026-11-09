import React, { useState, useEffect, useRef } from 'react';
import { gsap } from '../../lib/animation';
import { projects } from '../../data/portfolioData';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import './SelectedWork.css';

export default function SelectedWork() {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Section Header Reveal
      const headerEl = sectionRef.current?.querySelector('.work-header-reveal');
      if (headerEl) {
        gsap.fromTo(
          headerEl,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headerEl,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section ref={sectionRef} id="work" className="section work-section">
      <div className="container">
        <div className="work-header-reveal">
          <SectionHeader
            title="Things I've built"
            subtitle="Projects I've built with React. Open the live demo or read the code on GitHub."
          />
        </div>

        <div className="work-projects-stack">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || project.title}
              project={project}
              index={index}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        key={selectedProject?.id || 'none'}
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseDetails}
      />
    </section>
  );
}
