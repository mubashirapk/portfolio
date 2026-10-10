import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  BarChart2, 
  Heart,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Footer({ profile, contact, onOpenAdmin }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '3.5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
      }}
    >
      <div className="container">
        
        {/* Main Footer Row */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {/* Brand & Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div 
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)'
              }}
            >
              <BarChart2 size={22} />
            </div>
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                {profile.name || 'Mubashira PK'}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
                {profile.title || 'Aspiring Data Analyst'}
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic', maxWidth: '380px' }}>
            "{profile.tagline || 'Turning Raw Data Into Meaningful Insights.'}"
          </div>

          {/* Social Icons & Back to top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {contact?.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-icon"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            )}

            {contact?.github && contact.github.trim() !== '' && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-icon"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
            )}

            {contact?.email && (
              <a
                href={`mailto:${contact.email}`}
                className="btn btn-secondary btn-icon"
                title="Send Email"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            )}

            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-icon"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Quick Admin Link */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '2rem',
            fontSize: '0.84rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            &copy; {currentYear} <strong>{profile.name || 'Mubashira PK'}</strong>. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span>BCA 5th Semester • Data Analytics Portfolio</span>
            
            <button
              onClick={onOpenAdmin}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '0.2rem 0.5rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)'
              }}
              title="Admin CMS Settings"
            >
              <ShieldCheck size={13} />
              <span>Admin Mode</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
