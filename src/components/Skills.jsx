import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  FileSpreadsheet, 
  BarChart3, 
  Sparkles, 
  CheckCircle2, 
  Grid
} from 'lucide-react';
import DynamicIcon from './DynamicIcon';

export default function Skills({ skillsData }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = skillsData || [];
  
  // Flatten or filter
  const displayedCategories = selectedCategory === 'ALL'
    ? categories
    : categories.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="section section-alt" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Code2 size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Core analytical tools, query languages, data-shaping libraries, and visualization techniques I actively utilize.
          </p>

          {/* Category Filter Pills */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '1.75rem',
            }}
          >
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`btn btn-sm ${selectedCategory === 'ALL' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ borderRadius: 'var(--radius-full)' }}
            >
              All Categories ({categories.reduce((acc, cat) => acc + cat.items.length, 0)})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id || cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`btn btn-sm ${selectedCategory === cat.category ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Categories and Skill Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {displayedCategories.map((catGroup, groupIdx) => {
            const categoryIcons = {
              "Programming and Libraries": Code2,
              "Database and Querying": Database,
              "Microsoft Excel": FileSpreadsheet,
              "Data Analysis and Visualization": BarChart3,
            };
            const CatIcon = categoryIcons[catGroup.category] || Code2;

            return (
              <div key={catGroup.id || groupIdx}>
                
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--accent-blue-light)',
                      color: 'var(--accent-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <CatIcon size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {catGroup.category}
                    </h3>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {catGroup.items.length} Core Competencies
                    </div>
                  </div>
                </div>

                {/* Skill Cards Grid */}
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                    gap: '1.25rem',
                  }}
                >
                  {catGroup.items.map((skill) => (
                    <div 
                      key={skill.id || skill.name}
                      className="card"
                      style={{
                        padding: '1.5rem',
                        backgroundColor: 'var(--bg-card)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        {/* Top row: Icon + Check badge */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                          <div 
                            style={{
                              width: '42px',
                              height: '42px',
                              borderRadius: '10px',
                              backgroundColor: 'var(--bg-secondary)',
                              color: 'var(--accent-blue)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              border: '1px solid var(--border-color)',
                            }}
                          >
                            <DynamicIcon name={skill.icon} size={22} />
                          </div>
                          <span 
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              color: 'var(--accent-emerald)',
                              backgroundColor: 'var(--accent-emerald-light)',
                              padding: '0.2rem 0.55rem',
                              borderRadius: 'var(--radius-full)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.25rem'
                            }}
                          >
                            <CheckCircle2 size={12} />
                            <span>Practical</span>
                          </span>
                        </div>

                        {/* Skill Name */}
                        <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                          {skill.name}
                        </h4>

                        {/* Skill Description */}
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                          {skill.desc}
                        </p>
                      </div>

                      {/* Card Footer Tag */}
                      <div 
                        style={{
                          marginTop: '1.25rem',
                          paddingTop: '0.75rem',
                          borderTop: '1px solid var(--border-subtle)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                          Applied in Projects
                        </span>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-blue)' }} />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
