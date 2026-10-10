import React from 'react';
import { 
  User, 
  GraduationCap, 
  Calendar, 
  LineChart, 
  Binary, 
  CheckCircle, 
  Sparkles,
  Award,
  Layers
} from 'lucide-react';
import DynamicIcon from './DynamicIcon';

export default function About({ aboutData }) {
  const cards = aboutData?.cards || [];

  return (
    <section id="about" className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">{aboutData.heading || 'About Me'}</h2>
          <p className="section-subtitle">
            An enthusiastic aspiring Data Analyst committed to structured inquiry, rigorous data cleaning, and actionable insights.
          </p>
        </div>

        {/* Content Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          
          {/* Left Column: Descriptive Content */}
          <div 
            className="card"
            style={{
              padding: '2.5rem',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--accent-blue-light)',
                  color: 'var(--accent-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={18} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Analytical Mindset & Background
              </h3>
            </div>

            {aboutData.paragraphs && aboutData.paragraphs.map((para, index) => (
              <p 
                key={index} 
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)',
                  marginBottom: index === aboutData.paragraphs.length - 1 ? 0 : '1.5rem',
                }}
              >
                {para}
              </p>
            ))}

            {/* Core Values / Working Principles */}
            <div 
              style={{
                marginTop: '2rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid var(--border-color)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle size={17} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Pattern Discovery
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle size={17} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Data Integrity Focus
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle size={17} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Continuous Skill Building
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle size={17} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Actionable Insights
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Information Cards */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {cards.map((card, idx) => {
              const accentColors = [
                { bg: 'var(--accent-blue-light)', color: 'var(--accent-blue)' },
                { bg: 'var(--accent-cyan-light)', color: 'var(--accent-cyan)' },
                { bg: 'var(--accent-violet-light)', color: 'var(--accent-violet)' },
                { bg: 'var(--accent-emerald-light)', color: 'var(--accent-emerald)' }
              ];
              const themeStyle = accentColors[idx % accentColors.length];

              return (
                <div 
                  key={card.id || idx}
                  className="card"
                  style={{
                    padding: '1.75rem',
                    backgroundColor: 'var(--bg-card)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {card.label}
                    </span>
                    <div 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: themeStyle.bg,
                        color: themeStyle.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <DynamicIcon name={card.icon} size={20} />
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                      {card.value}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {card.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
