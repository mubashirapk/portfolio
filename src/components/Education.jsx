import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Building, 
  BookOpen, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export default function Education({ educationData }) {
  const educationList = educationData || [];

  return (
    <section id="education" className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal foundations in computer applications, programming paradigms, and database management systems.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {educationList.map((item, idx) => (
            <div 
              key={item.id || idx}
              className="card"
              style={{
                padding: '2.25rem',
                backgroundColor: 'var(--bg-card)',
                borderLeft: '4px solid var(--accent-blue)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
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
                    }}
                  >
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                      {item.degree}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.2rem' }}>
                      <Building size={14} />
                      <span>{item.institution}</span>
                    </div>
                  </div>
                </div>

                {/* Academic Status Badge */}
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--accent-cyan-light)',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    border: '1px solid rgba(2, 132, 199, 0.25)'
                  }}
                >
                  <Calendar size={13} />
                  <span>{item.academicStatus}</span>
                </div>
              </div>

              {/* Highlights / Academic description */}
              {item.highlights && (
                <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: '0.5rem' }}>
                  {item.highlights}
                </p>
              )}

              {/* Core Academic Topics */}
              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="badge badge-blue">Computer Applications</span>
                <span className="badge badge-cyan">DBMS (Database Systems)</span>
                <span className="badge badge-emerald">Programming Concepts</span>
                <span className="badge badge-violet">Analytical Methods</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
