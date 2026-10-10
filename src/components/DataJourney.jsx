import React, { useState } from 'react';
import { 
  Database, 
  Filter, 
  Binary, 
  BarChart3, 
  Lightbulb, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  Layers,
  FileSpreadsheet,
  CheckCircle2
} from 'lucide-react';
import DynamicIcon from './DynamicIcon';

export default function DataJourney({ journeyData }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = journeyData[activeStepIndex] || journeyData[0];

  return (
    <section id="journey" className="section section-alt" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>Workflow & Methodology</span>
          </div>
          <h2 className="section-title">My Data Journey</h2>
          <p className="section-subtitle">
            How raw, unstructured datasets transform into structured information, clear visual representations, and actionable decision-making insights.
          </p>
        </div>

        {/* Pipeline Stepper Visualization */}
        <div 
          className="card"
          style={{
            padding: '2rem 1.5rem',
            marginBottom: '2rem',
            backgroundColor: 'var(--bg-card)',
            position: 'relative',
          }}
        >
          {/* Top Stage Tracker */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${journeyData.length}, minmax(0, 1fr))`,
              gap: '0.75rem',
              alignItems: 'center',
              position: 'relative',
            }}
            className="journey-steps-grid"
          >
            {journeyData.map((item, index) => {
              const isSelected = index === activeStepIndex;
              const isPassed = index < activeStepIndex;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(index)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '1rem 0.5rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: isSelected ? 'var(--accent-blue-light)' : 'transparent',
                    border: `1.5px solid ${isSelected ? 'var(--accent-blue)' : 'transparent'}`,
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    width: '100%',
                  }}
                  aria-label={`View stage ${item.step}: ${item.title}`}
                >
                  {/* Step Number & Node Icon */}
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: isSelected 
                        ? 'var(--accent-blue)' 
                        : isPassed 
                        ? 'var(--accent-cyan-light)' 
                        : 'var(--bg-secondary)',
                      color: isSelected 
                        ? '#FFFFFF' 
                        : isPassed 
                        ? 'var(--accent-cyan)' 
                        : 'var(--text-muted)',
                      border: `2px solid ${isSelected ? 'var(--accent-blue)' : isPassed ? 'var(--accent-cyan)' : 'var(--border-color)'}`,
                      marginBottom: '0.65rem',
                      boxShadow: isSelected ? '0 0 16px rgba(37, 99, 235, 0.4)' : 'none',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <DynamicIcon name={item.icon} size={20} />
                  </div>

                  {/* Step Title */}
                  <span 
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      color: isSelected ? 'var(--accent-blue)' : 'var(--text-primary)',
                      lineHeight: 1.25,
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.title}
                  </span>

                  <span 
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.2rem',
                    }}
                  >
                    Step 0{item.step}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Connected Flow Indicator Line (Desktop) */}
          <div 
            style={{
              marginTop: '1.25rem',
              height: '4px',
              backgroundColor: 'var(--bg-tertiary)',
              borderRadius: '2px',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="journey-line-track"
          >
            <div 
              style={{
                height: '100%',
                width: `${((activeStepIndex + 1) / journeyData.length) * 100}%`,
                background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-cyan))',
                borderRadius: '2px',
                transition: 'width 0.35s ease',
              }}
            />
          </div>
        </div>

        {/* Selected Step Detailed Breakdown Card */}
        {activeStep && (
          <div 
            className="card"
            style={{
              padding: '2.25rem',
              backgroundColor: 'var(--bg-card)',
              border: '1.5px solid var(--border-accent)',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem',
            }}
            className="journey-detail-grid"
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span className="badge badge-blue" style={{ fontSize: '0.82rem', padding: '0.35rem 0.75rem' }}>
                  Stage {activeStep.step} of {journeyData.length}
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {activeStep.shortDesc}
                </span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                {activeStep.title}
              </h3>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {activeStep.detail}
              </p>

              {/* Tools & Key Functions */}
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  Techniques & Tools Applied:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {activeStep.tools.map((tool, idx) => (
                    <span 
                      key={idx}
                      style={{
                        padding: '0.4rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)' }} />
                      <span>{tool}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Step Preview Box */}
            <div 
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Workflow Snippet</span>
                <span style={{ color: 'var(--accent-blue)', fontSize: '0.75rem', fontWeight: 700 }}>STAGE 0{activeStep.step}</span>
              </div>

              {activeStep.step === 1 && (
                <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <div style={{ color: 'var(--accent-blue)', fontWeight: 600 }}># 1. Ingest Raw Datasets</div>
                  <div>import pandas as pd</div>
                  <div>raw_data = pd.read_csv('student_records.csv')</div>
                  <div style={{ color: 'var(--text-muted)' }}># Columns identified: ID, Subject, Marks, Hours</div>
                </div>
              )}

              {activeStep.step === 2 && (
                <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <div style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}># 2. Clean, Filter & Deduplicate</div>
                  <div>cleaned_df = raw_data.dropna(subset=['Marks'])</div>
                  <div>cleaned_df['Marks'] = cleaned_df['Marks'].astype(float)</div>
                  <div style={{ color: 'var(--text-muted)' }}># Handled null values & standardized types</div>
                </div>
              )}

              {activeStep.step === 3 && (
                <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <div style={{ color: 'var(--accent-violet)', fontWeight: 600 }}># 3. Analyze & Group By Metrics</div>
                  <div>summary = cleaned_df.groupby('Subject')['Marks'].mean()</div>
                  <div>corr = cleaned_df['Hours'].corr(cleaned_df['Marks'])</div>
                  <div style={{ color: 'var(--text-muted)' }}># Positive correlation detected (+0.84)</div>
                </div>
              )}

              {activeStep.step === 4 && (
                <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <div style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}># 4. Matplotlib Visual Storytelling</div>
                  <div>plt.figure(figsize=(8, 4))</div>
                  <div>plt.bar(subjects, scores, color='#2563EB')</div>
                  <div>plt.title('Performance Distribution by Subject')</div>
                </div>
              )}

              {activeStep.step === 5 && (
                <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  <div style={{ color: 'var(--accent-amber)', fontWeight: 600 }}># 5. Extract Meaningful Insights</div>
                  <div>Key Finding: Regular study hours directly</div>
                  <div>correlate with high score bands (90%+).</div>
                  <div style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>Decision Impact: Focus revision on low-hour modules.</div>
                </div>
              )}

              {/* Step Navigation Buttons */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1.25rem' }}>
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                  className="btn btn-secondary btn-sm"
                  style={{ opacity: activeStepIndex === 0 ? 0.4 : 1, cursor: activeStepIndex === 0 ? 'not-allowed' : 'pointer' }}
                >
                  Previous
                </button>
                <button
                  disabled={activeStepIndex === journeyData.length - 1}
                  onClick={() => setActiveStepIndex(prev => Math.min(journeyData.length - 1, prev + 1))}
                  className="btn btn-primary btn-sm"
                  style={{ opacity: activeStepIndex === journeyData.length - 1 ? 0.4 : 1, cursor: activeStepIndex === journeyData.length - 1 ? 'not-allowed' : 'pointer' }}
                >
                  Next Stage
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 768px) {
          .journey-steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .journey-line-track {
            display: none !important;
          }
        }
        @media (min-width: 900px) {
          .journey-detail-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
