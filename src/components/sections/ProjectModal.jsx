import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);
  const modalBodyRef = useRef(null);

  const views = project?.views || [];
  const highlights = project?.keyHighlights || [];
  const techStack = project?.techStack || [];
  const activeView = views[activeViewIndex] || views[0];

  // Lock background scrolling, reset internal scroll, and handle keyboard events
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Reset internal modal scroll position to top
    if (modalBodyRef.current) {
      modalBodyRef.current.scrollTop = 0;
    }

    // Focus close button on open
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight' && views.length > 1) {
        setActiveViewIndex((prev) => (prev + 1) % views.length);
      } else if (e.key === 'ArrowLeft' && views.length > 1) {
        setActiveViewIndex((prev) => (prev - 1 + views.length) % views.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, views.length]);

  if (!isOpen || !project) return null;

  const handlePrevView = () => {
    setActiveViewIndex((prev) => (prev - 1 + views.length) % views.length);
  };

  const handleNextView = () => {
    setActiveViewIndex((prev) => (prev + 1) % views.length);
  };

  const modalContent = (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="project-modal-dialog card-elevated"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="project-modal-header">
          <div className="project-modal-header-info">
            <h2 id="project-modal-title" className="project-modal-title">
              {project.title}
            </h2>
            {project.tagline && (
              <p className="project-modal-tagline">{project.tagline}</p>
            )}
          </div>

          <div className="project-modal-header-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-accent btn-sm modal-action-btn"
              >
                <span>Live Demo</span>
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-sm modal-action-btn"
              >
                <GithubIcon size={14} aria-hidden="true" />
                <span>Source Code</span>
              </a>
            )}
            <button
              ref={closeButtonRef}
              type="button"
              className="project-modal-close-btn"
              onClick={onClose}
              aria-label="Close project details modal"
              title="Close (Esc)"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div ref={modalBodyRef} className="project-modal-body">
          {/* Project Overview */}
          <section className="project-modal-section">
            <h3 className="project-modal-section-title">Overview</h3>
            <p className="project-modal-overview-text">{project.description}</p>
          </section>

          {/* Full Set of Project Screenshots (All 4) */}
          {views.length > 0 && (
            <section className="project-modal-section">
              <div className="project-modal-gallery-header">
                <h3 className="project-modal-section-title">Project Screenshots</h3>
                <span className="project-modal-gallery-counter">
                  {activeViewIndex + 1} of {views.length}
                </span>
              </div>

              <div className="project-gallery-viewport">
                <div className="project-gallery-active-frame">
                  {activeView && (
                    <img
                      src={activeView.image}
                      alt={`${project.title} - ${activeView.title}`}
                      className="project-gallery-active-img"
                    />
                  )}

                  {views.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="project-gallery-nav-btn project-gallery-prev"
                        onClick={handlePrevView}
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft size={22} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="project-gallery-nav-btn project-gallery-next"
                        onClick={handleNextView}
                        aria-label="Next screenshot"
                      >
                        <ChevronRight size={22} aria-hidden="true" />
                      </button>
                    </>
                  )}
                </div>

                {activeView && (
                  <div className="project-gallery-caption">
                    <span className="project-gallery-caption-title">
                      {activeView.title}
                    </span>
                    {activeView.description && (
                      <span className="project-gallery-caption-desc">
                        {activeView.description}
                      </span>
                    )}
                  </div>
                )}

                {/* Thumbnails of all 4 screenshots */}
                <div
                  className="project-gallery-thumbs"
                  role="tablist"
                  aria-label="Project screenshots list"
                >
                  {views.map((view, idx) => (
                    <button
                      key={view.id || idx}
                      type="button"
                      role="tab"
                      aria-selected={activeViewIndex === idx}
                      onClick={() => setActiveViewIndex(idx)}
                      className={`project-gallery-thumb${activeViewIndex === idx ? ' is-active' : ''}`}
                    >
                      <span className="project-gallery-thumb-index">0{idx + 1}</span>
                      <span className="project-gallery-thumb-label">{view.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Key Features */}
          {highlights.length > 0 && (
            <section className="project-modal-section">
              <h3 className="project-modal-section-title">Key Features</h3>
              <div className="project-modal-features-grid">
                {highlights.map((highlight) => (
                  <div key={highlight.title} className="project-modal-feature-card">
                    <h4 className="project-modal-feature-name">{highlight.title}</h4>
                    <p className="project-modal-feature-detail">{highlight.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technologies Used */}
          {techStack.length > 0 && (
            <section className="project-modal-section">
              <h3 className="project-modal-section-title">Technologies Used</h3>
              <div className="project-modal-tech-list">
                {techStack.map((tech) => (
                  <span key={tech} className="badge badge-cyan">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Modal Footer Links */}
          <div className="project-modal-footer">
            <div className="project-modal-footer-links">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-accent modal-footer-btn"
                >
                  <span>Open Live Demo</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary modal-footer-btn"
                >
                  <GithubIcon size={15} aria-hidden="true" />
                  <span>View Source on GitHub</span>
                </a>
              )}
            </div>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
