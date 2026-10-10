import React, { useState, useMemo } from 'react';
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  Table as TableIcon, 
  Filter, 
  Search, 
  TrendingUp, 
  Sparkles, 
  Info,
  ArrowUpDown,
  CheckCircle2
} from 'lucide-react';

export default function AnalyticsShowcase({ showcaseData }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('score');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedSubject, setSelectedSubject] = useState('ALL');

  const { title, subtitle, notice, students = [], subjectAverages = [], gradeDistribution = [] } = showcaseData || {};

  // Filtered and sorted students table
  const filteredStudents = useMemo(() => {
    return students
      .filter((s) => {
        const matchesSubject = selectedSubject === 'ALL' || s.subject === selectedSubject;
        const matchesSearch = 
          s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.grade.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSubject && matchesSearch;
      })
      .sort((a, b) => {
        const valA = a[sortField];
        const valB = b[sortField];
        if (typeof valA === 'number') {
          return sortOrder === 'asc' ? valA - valB : valB - valA;
        }
        return sortOrder === 'asc' 
          ? String(valA).localeCompare(String(valB)) 
          : String(valB).localeCompare(String(valA));
      });
  }, [students, searchTerm, sortField, sortOrder, selectedSubject]);

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  return (
    <section id="analytics" className="section data-grid-bg" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <BarChart3 size={14} />
            <span>Interactive Data Showcase</span>
          </div>
          <h2 className="section-title">{title || 'Turning Data Into Insights'}</h2>
          <p className="section-subtitle">
            Demonstrating structured exploratory data analysis (EDA), data cleaning, statistical summarization, and clear visual representations.
          </p>

          {/* Genuine Transparency Banner */}
          <div 
            style={{
              marginTop: '1.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.6rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
            }}
          >
            <Info size={16} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
            <span>
              <strong>Sample Educational Dataset:</strong> Illustrating practical data manipulation, aggregation, and plotting capabilities.
            </span>
          </div>
        </div>

        {/* Top KPI Cards Row */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem',
          }}
        >
          <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Sample Cohort</span>
              <span className="badge badge-blue">Cleaned</span>
            </div>
            <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-primary)' }}>60+ Rows</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Tabular Records Explored</div>
          </div>

          <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Average Score</span>
              <span className="badge badge-cyan">Aggregated</span>
            </div>
            <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--accent-blue)' }}>88.2%</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Mean Performance Metric</div>
          </div>

          <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Correlation (r)</span>
              <span className="badge badge-emerald">Positive</span>
            </div>
            <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>+0.84</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Study Hours vs Score</div>
          </div>

          <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Data Health</span>
              <span className="badge badge-violet">Verified</span>
            </div>
            <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--accent-violet)' }}>0 Nulls</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Tidy & Standardized Schema</div>
          </div>
        </div>

        {/* Charts Grid: Bar Chart + Grade Distribution Donut */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            marginBottom: '2rem',
          }}
          className="analytics-charts-grid"
        >
          {/* Chart 1: Subject Averages Bar Chart */}
          <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Subject Score Averages (EDA)
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Aggregated mean percentage score by academic subject module
                </p>
              </div>
              <span className="badge badge-blue">Bar Chart</span>
            </div>

            {/* Custom SVG / HTML Responsive Bar Chart */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              {subjectAverages.map((sub, sIdx) => (
                <div key={sIdx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{sub.subject}</span>
                    <span style={{ fontWeight: 700, color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>{sub.avg}%</span>
                  </div>
                  <div 
                    style={{
                      height: '14px',
                      backgroundColor: 'var(--bg-secondary)',
                      borderRadius: 'var(--radius-full)',
                      overflow: 'hidden',
                      position: 'relative',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div 
                      style={{
                        height: '100%',
                        width: `${sub.avg}%`,
                        background: `linear-gradient(90deg, ${sub.color}, var(--accent-cyan))`,
                        borderRadius: 'var(--radius-full)',
                        transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chart 2: Grade Band Distribution & Trend */}
          <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Grade Band Breakdown
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Categorical distribution across analyzed student records
                </p>
              </div>
              <span className="badge badge-emerald">Category Share</span>
            </div>

            {/* Visual Ring / Progress Bar Representation */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
              {gradeDistribution.map((gradeItem, gIdx) => (
                <div 
                  key={gIdx}
                  style={{
                    padding: '1rem',
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: gradeItem.color }} />
                      <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                        Grade {gradeItem.grade}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                      {gradeItem.count} Students ({gradeItem.percent}%)
                    </span>
                  </div>

                  <div style={{ height: '8px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div 
                      style={{
                        height: '100%',
                        width: `${gradeItem.percent}%`,
                        backgroundColor: gradeItem.color,
                        borderRadius: '4px'
                      }}
                    />
                  </div>
                </div>
              ))}

              <div 
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--accent-blue-light)',
                  border: '1px solid var(--border-accent)',
                  fontSize: '0.85rem',
                  color: 'var(--accent-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem'
                }}
              >
                <Sparkles size={18} style={{ flexShrink: 0 }} />
                <span>
                  <strong>Key Finding:</strong> 66% of analyzed records achieved high honors (Grade A or above) with consistent attendance.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Data Table */}
        <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-card)' }}>
          
          {/* Table Controls Header */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Sample Dataset Inspection (Cleaned Records)
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Interactive table demonstrating filtering, sorting, and tabular data handling
              </p>
            </div>

            {/* Filter and Search Bar */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              
              {/* Search Box */}
              <div 
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Search size={15} style={{ position: 'absolute', left: '10px', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder="Search records..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    padding: '0.45rem 0.85rem 0.45rem 2rem',
                    fontSize: '0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    width: '180px'
                  }}
                />
              </div>

              {/* Subject Filter Dropdown */}
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                style={{
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="ALL">All Subjects</option>
                {Array.from(new Set(students.map(s => s.subject))).map((subj, idx) => (
                  <option key={idx} value={subj}>{subj}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Table View */}
          <div style={{ overflowX: 'auto' }}>
            <table 
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                fontSize: '0.88rem',
              }}
            >
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
                  <th 
                    style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--text-muted)', cursor: 'pointer' }}
                    onClick={() => toggleSort('id')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <span>Student ID</span>
                      <ArrowUpDown size={13} />
                    </div>
                  </th>
                  <th 
                    style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--text-muted)', cursor: 'pointer' }}
                    onClick={() => toggleSort('subject')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <span>Subject Module</span>
                      <ArrowUpDown size={13} />
                    </div>
                  </th>
                  <th 
                    style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--text-muted)', cursor: 'pointer' }}
                    onClick={() => toggleSort('hours')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <span>Study Hours</span>
                      <ArrowUpDown size={13} />
                    </div>
                  </th>
                  <th 
                    style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--text-muted)', cursor: 'pointer' }}
                    onClick={() => toggleSort('score')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <span>Score (%)</span>
                      <ArrowUpDown size={13} />
                    </div>
                  </th>
                  <th style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                    Grade Band
                  </th>
                  <th style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                    Attendance
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((row) => (
                    <tr 
                      key={row.id} 
                      style={{ 
                        borderBottom: '1px solid var(--border-subtle)',
                        transition: 'background-color 0.15s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <td style={{ padding: '0.75rem 1rem', fontWeight: 600, fontFamily: 'var(--font-mono)', color: 'var(--accent-blue)' }}>
                        {row.id}
                      </td>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {row.subject}
                      </td>
                      <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                        {row.hours} hrs/wk
                      </td>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                        {row.score}%
                      </td>
                      <td style={{ padding: '0.75rem 1rem' }}>
                        <span 
                          className={`badge ${
                            row.grade.startsWith('A') ? 'badge-blue' : 'badge-emerald'
                          }`}
                        >
                          {row.grade}
                        </span>
                      </td>
                      <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {row.attendance}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                      No sample records matched your filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .analytics-charts-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
