import React, { useState, useEffect, useRef } from 'react';
import { gsap } from '../../lib/animation';
import { personalInfo } from '../../data/portfolioData';
import SectionHeader from '../common/SectionHeader';
import { MapPin, Mail, ArrowUpRight, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import './Contact.css';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

const EMPTY_FORM = { name: '', email: '', message: '', _gotcha: '' };

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState(EMPTY_FORM);
  const sectionRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const headerEl = sectionRef.current?.querySelector('.contact-header-reveal');
      const panelCards = sectionRef.current?.querySelectorAll('.contact-panel-card');

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

      if (panelCards && panelCards.length > 0) {
        tl.fromTo(
          panelCards,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, stagger: 0.16, duration: 1.0, ease: 'power2.out' },
          headerEl ? '-=0.55' : 0
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
    if (!name || !email || !message) return;

    if (formData._gotcha) {
      setStatus('sent');
      return;
    }

    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      setStatus(response.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setFormData(EMPTY_FORM);
  };

  const isDone = status === 'sent' || status === 'mailto';

  return (
    <section ref={sectionRef} id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-header-reveal">
          <SectionHeader
            title="Say hello"
            subtitle="I'm open to junior frontend roles and freelance projects. Write to me anytime."
          />
        </div>

        <div className="contact-grid">
          <div className="contact-panel-card card-elevated contact-panel">
            <h3 className="contact-panel-title">Contact details</h3>
            <p className="contact-panel-text">
              Have a role, a project, or a question? Email me, or message me on LinkedIn or GitHub.
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon-box">
                  <Mail size={16} color="var(--accent-secondary)" />
                </div>
                <div className="contact-item-body">
                  <div className="contact-label">Email</div>
                  <div className="contact-email-row">
                    <a href={`mailto:${personalInfo.email}`} className="contact-link">
                      {personalInfo.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="btn btn-secondary btn-sm contact-copy-btn"
                      title="Copy email address"
                      aria-label="Copy email address"
                    >
                      {copied ? <Check size={11} color="var(--live-text)" /> : <Copy size={11} />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <LinkedinIcon size={16} color="var(--accent-secondary)" />
                </div>
                <div>
                  <div className="contact-label">LinkedIn</div>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link contact-link-external"
                  >
                    <span>linkedin.com/in/mohamed-nashaat---</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <GithubIcon size={16} color="var(--accent-secondary)" />
                </div>
                <div>
                  <div className="contact-label">GitHub</div>
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link contact-link-external"
                  >
                    <span>github.com/mohamednashaat336-arch</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <MapPin size={16} color="var(--accent-secondary)" />
                </div>
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-value">{personalInfo.location} (UTC+2)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-panel-card card-elevated contact-panel">
            <h3 className="contact-panel-title contact-panel-title-sm">Send a message</h3>
            <p className="contact-panel-subtext">Write a few lines and I'll get back to you.</p>

            {isDone ? (
              <div className="contact-success" role="status">
                <div className="contact-success-icon">
                  <Check size={20} color="var(--accent-primary)" />
                </div>
                <h4 className="contact-success-title">
                  {status === 'sent' ? 'Thank you for reaching out!' : 'Almost there!'}
                </h4>
                <p className="contact-success-text">
                  {status === 'sent'
                    ? `Your message has been sent. You can also contact Mohamed directly at ${personalInfo.email}.`
                    : `Your email app should have opened with your message ready to send. If it didn't, write to ${personalInfo.email} directly.`}
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn btn-secondary btn-sm contact-success-btn"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div>
                  <label htmlFor="contact-name" className="contact-field-label">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange('name')}
                    placeholder="Your name"
                    className="contact-field"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="contact-field-label">
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange('email')}
                    placeholder="name@example.com"
                    className="contact-field"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="contact-field-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange('message')}
                    placeholder="What would you like to talk about?"
                    className="contact-field contact-field-textarea"
                  />
                </div>

                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange('_gotcha')}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="contact-honeypot"
                />

                {status === 'error' && (
                  <p className="contact-error" role="alert">
                    Something went wrong while sending. Please try again, or email {personalInfo.email}{' '}
                    directly.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-accent contact-submit"
                  disabled={status === 'sending'}
                >
                  <span>{status === 'sending' ? 'Sending…' : 'Send message'}</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
