import React from 'react';
import './SectionHeader.css';

export default function SectionHeader({ title, subtitle, align = 'left' }) {
  return (
    <div className={`section-header${align === 'center' ? ' section-header--center' : ''}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
