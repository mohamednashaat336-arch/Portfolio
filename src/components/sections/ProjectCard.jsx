import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export default function ProjectCard({ project, index, onOpenDetails }) {
  const handleCardClick = (e) => {
    if (e.target.closest('a') || e.target.closest('button')) {
      return;
    }
    onOpenDetails(project);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (e.target !== e.currentTarget) return;
      e.preventDefault();
      onOpenDetails(project);
    }
  };

  return (
    <div className={`project-card-wrapper project-card-wrapper-${index}`}>
      <article
        className="project-card card-elevated"
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${project.title}`}
      >
        <div className="project-card-header">
          <h3 className="project-card-title">{project.title}</h3>

          <div
            className="project-card-actions"
            onClick={(e) => e.stopPropagation()}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-accent btn-sm project-btn"
                aria-label={`Open live demo for ${project.title}`}
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
                className="btn btn-secondary btn-sm project-btn"
                aria-label={`View source code for ${project.title}`}
              >
                <GithubIcon size={14} aria-hidden="true" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        <div className="project-card-media">
          <div className="project-card-media-inner">
            <img
              src={project.mainImage}
              alt={`${project.title} preview`}
              loading="lazy"
              className="project-card-img"
            />
          </div>
        </div>
      </article>
    </div>
  );
}
