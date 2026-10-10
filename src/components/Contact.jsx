import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare, 
  Sparkles, 
  MapPin 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import ContactForm from './ContactForm';

export default function Contact({ contactData, profileName }) {
  const [copiedType, setCopiedType] = useState(null);

  const { phone, email, linkedin, github, location } = contactData || {};

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="section section-alt" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            I am interested in learning, collaborating on data-related projects, and exploring entry-level opportunities in Data Analytics.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          
          {/* Left Column: Direct Contact Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Email Card */}
            {email && (
              <div 
                className="card"
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--accent-blue-light)',
                      color: 'var(--accent-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Email Address
                    </div>
                    <a 
                      href={`mailto:${email}`}
                      style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', wordBreak: 'break-all' }}
                      className="hover-link"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button
                    onClick={() => copyToClipboard(email, 'email')}
                    className="btn btn-secondary btn-icon"
                    style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)' }}
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email"
                  >
                    {copiedType === 'email' ? <Check size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={16} />}
                  </button>
                  <a
                    href={`mailto:${email}`}
                    className="btn btn-secondary btn-icon"
                    style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)' }}
                    title="Open Email Client"
                    aria-label="Send Email"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            )}

            {/* Phone Card */}
            {phone && (
              <div 
                className="card"
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--accent-cyan-light)',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Phone / Mobile
                    </div>
                    <a 
                      href={`tel:${phone}`}
                      style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}
                    >
                      +91 {phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button
                    onClick={() => copyToClipboard(phone, 'phone')}
                    className="btn btn-secondary btn-icon"
                    style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)' }}
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    {copiedType === 'phone' ? <Check size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={16} />}
                  </button>
                  <a
                    href={`tel:${phone}`}
                    className="btn btn-secondary btn-icon"
                    style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)' }}
                    title="Call directly"
                    aria-label="Call Phone"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            )}

            {/* LinkedIn Card */}
            {linkedin && (
              <div 
                className="card"
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#EBF4FF',
                      color: '#0A66C2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <LinkedinIcon size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Professional Network
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      LinkedIn Profile
                    </div>
                  </div>
                </div>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ gap: '0.4rem' }}
                >
                  <span>Connect</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            )}

            {/* GitHub Card */}
            <div 
              className="card"
              style={{
                padding: '1.5rem',
                backgroundColor: 'var(--bg-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-color)',
                    flexShrink: 0
                  }}
                >
                  <GithubIcon size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Code Repositories
                  </div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {github && github.trim() !== '' ? 'GitHub Profile' : 'Available upon configuration'}
                  </div>
                </div>
              </div>

              {github && github.trim() !== '' ? (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ gap: '0.4rem' }}
                >
                  <span>View</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <span className="badge badge-amber" style={{ fontSize: '0.75rem' }}>
                  Configurable
                </span>
              )}
            </div>

            {/* Location Pill */}
            {location && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.88rem', paddingLeft: '0.5rem' }}>
                <MapPin size={16} style={{ color: 'var(--accent-blue)' }} />
                <span>Based in {location} • Open to Remote & On-Site Opportunities</span>
              </div>
            )}

          </div>

          {/* Right Column: Contact Form */}
          <div>
            <ContactForm recipientEmail={email} />
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
