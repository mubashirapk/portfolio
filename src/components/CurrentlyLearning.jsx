import React from 'react';
import { 
  Compass, 
  BarChart4, 
  Sigma, 
  Cpu, 
  Palette, 
  Sparkles,
  ArrowUpRight,
  Clock
} from 'lucide-react';
import DynamicIcon from './DynamicIcon';

export default function CurrentlyLearning({ learningData }) {
  const items = learningData || [];

  return (
    <section id="learning" className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Compass size={14} />
            <span>Growth & Development</span>
          </div>
          <h2 className="section-title">Currently Learning</h2>
          <p className="section-subtitle">
            Expanding analytical horizons with modern business intelligence platforms, mathematical foundations, and advanced visual communication.
          </p>
        </div>

        {/* Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {items.map((item, index) => {
            const colors = [
              { border: 'var(--accent-blue)', bg: 'var(--accent-blue-light)', text: 'var(--accent-blue)' },
              { border: 'var(--accent-cyan)', bg: 'var(--accent-cyan-light)', text: 'var(--accent-cyan)' },
              { border: 'var(--accent-violet)', bg: 'var(--accent-violet-light)', text: 'var(--accent-violet)' },
              { border: 'var(--accent-amber)', bg: 'var(--accent-amber-light)', text: 'var(--accent-amber)' },
            ];
            const colorTheme = colors[index % colors.length];

            return (
              <div 
                key={item.id || index}
                className="card"
                style={{
                  padding: '1.75rem',
                  backgroundColor: 'var(--bg-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                <div>
                  {/* Top Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div 
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        backgroundColor: colorTheme.bg,
                        color: colorTheme.text,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <DynamicIcon name={item.icon} size={22} />
                    </div>

                    <span 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: colorTheme.text,
                        backgroundColor: colorTheme.bg,
                        padding: '0.3rem 0.65rem',
                        borderRadius: 'var(--radius-full)'
                      }}
                    >
                      <Clock size={12} />
                      <span>{item.tag || 'In Progress'}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>

                {/* Subtle progress-inspired indicator */}
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Active Study Path</span>
                    <span style={{ fontSize: '0.75rem', color: colorTheme.text, fontWeight: 700 }}>Continuous</span>
                  </div>
                  <div style={{ height: '4px', backgroundColor: 'var(--bg-secondary)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div 
                      style={{
                        height: '100%',
                        width: '65%',
                        backgroundColor: colorTheme.text,
                        borderRadius: '2px'
                      }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
