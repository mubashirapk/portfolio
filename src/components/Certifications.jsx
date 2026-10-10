import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  Building, 
  CheckCircle2, 
  FileCheck,
  Info,
  X
} from 'lucide-react';

export default function Certifications({ certificationsData }) {
  const [modalMessage, setModalMessage] = useState(null);

  const certList = certificationsData || [];

  const handleVerify = (url, name) => {
    if (url && url.trim() !== '') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setModalMessage({
        title: `${name} Verification Link`,
        text: 'The issuing organization verification link can be updated anytime through the "Edit Portfolio" admin interface. No fake verification URL is displayed.'
      });
      setTimeout(() => setModalMessage(null), 5000);
    }
  };

  return (
    <section id="certifications" className="section section-alt" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Professional Growth</span>
          </div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Targeted training validating foundational practical competency in analytical programming and data exploration.
          </p>
        </div>

        {/* Verification Alert Banner */}
        {modalMessage && (
          <div 
            style={{
              maxWidth: '600px',
              margin: '0 auto 2rem auto',
              backgroundColor: 'var(--accent-blue-light)',
              border: '1px solid var(--accent-blue)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'start',
              gap: '0.75rem',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <Info size={20} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--accent-blue)' }}>
                {modalMessage.title}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                {modalMessage.text}
              </div>
            </div>
            <button 
              onClick={() => setModalMessage(null)}
              style={{ color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Certifications Grid */}
        <div 
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {certList.map((cert, idx) => {
            const hasDetails = cert.issuer || cert.date || cert.verificationUrl;

            return (
              <div 
                key={cert.id || idx}
                className="card"
                style={{
                  padding: '2rem',
                  backgroundColor: 'var(--bg-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '3px solid var(--accent-emerald)',
                }}
              >
                <div>
                  {/* Top Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div 
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: 'var(--accent-emerald-light)',
                        color: 'var(--accent-emerald)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Award size={22} />
                    </div>

                    <span className="badge badge-emerald">
                      <CheckCircle2 size={12} />
                      <span>Certified</span>
                    </span>
                  </div>

                  {/* Certification Name */}
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.85rem', lineHeight: 1.35 }}>
                    {cert.name}
                  </h3>

                  {/* Optional Metadata Details if provided */}
                  {cert.issuer && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      <Building size={14} />
                      <span>Issued by: <strong>{cert.issuer}</strong></span>
                    </div>
                  )}

                  {cert.date && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                      <Calendar size={14} />
                      <span>Completed: {cert.date}</span>
                    </div>
                  )}

                  {!hasDetails && (
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                      Core coursework in Python data structures, analysis with Pandas, and data processing.
                    </p>
                  )}
                </div>

                {/* Bottom Verification Button */}
                <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    Verified Competency
                  </span>
                  
                  <button
                    onClick={() => handleVerify(cert.verificationUrl, cert.name)}
                    className="btn btn-secondary btn-sm"
                    style={{ gap: '0.4rem' }}
                  >
                    <span>Verification</span>
                    <ExternalLink size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
