import React from 'react';
import { Target, ArrowRight, Sparkles, Send } from 'lucide-react';

export default function CareerObjective({ careerGoal }) {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-color)', position: 'relative' }}>
      <div className="container">
        
        <div 
          className="card"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '3.5rem 2.5rem',
            textAlign: 'center',
            backgroundColor: 'var(--bg-card)',
            border: '1.5px solid var(--border-accent)',
            boxShadow: 'var(--shadow-hover)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative background glow */}
          <div 
            style={{
              position: 'absolute',
              top: '-30%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '400px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            
            {/* Badge */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.95rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--accent-blue-light)',
                color: 'var(--accent-blue)',
                fontSize: '0.82rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1.5rem',
              }}
            >
              <Target size={15} />
              <span>Career Vision</span>
            </div>

            {/* Heading */}
            <h2 
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              My Career Goal
            </h2>

            {/* Goal Text */}
            <p 
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                maxWidth: '750px',
                margin: '0 auto 2.25rem auto',
                fontWeight: 500,
              }}
            >
              "{careerGoal || 
                'To obtain an entry-level Data Analyst position where I can apply my knowledge of Python, SQL, Excel, and data analysis techniques to solve business problems, generate meaningful insights, and support informed decision-making while continuously improving my skills.'}"
            </p>

            {/* Action CTA */}
            <div>
              <button 
                onClick={scrollToContact}
                className="btn btn-primary"
                style={{ fontSize: '1rem', padding: '0.9rem 2.25rem', gap: '0.65rem' }}
              >
                <span>Contact Me</span>
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
