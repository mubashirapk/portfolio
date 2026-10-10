import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Layers, 
  X, 
  ArrowRight, 
  Sparkles, 
  BarChart2, 
  FileSpreadsheet, 
  Terminal, 
  Info 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects({ projectsData }) {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);

  const projects = projectsData || [];

  const handleLinkClick = (url, name) => {
    if (url && url.trim() !== '') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setAlertMessage({
        title: `${name} Link Pending`,
        desc: 'This project repository link can be configured anytime via the "Edit Portfolio" admin interface. No dummy link is used.'
      });
      setTimeout(() => setAlertMessage(null), 5000);
    }
  };

  return (
    <section id="projects" className="section section-alt" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Practical Implementation</span>
          </div>
          <h2 className="section-title">Projects & Practical Experience</h2>
          <p className="section-subtitle">
            Exploring real-world datasets and applying data analysis techniques to discover meaningful patterns and insights.
          </p>
        </div>

        {/* Informative Alert Toast */}
        {alertMessage && (
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
                {alertMessage.title}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                {alertMessage.desc}
              </div>
            </div>
            <button 
              onClick={() => setAlertMessage(null)}
              style={{ color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Projects Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {projects.map((proj, idx) => {
            const isComingSoon = proj.status === 'Coming Soon';

            return (
              <div 
                key={proj.id || idx}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'var(--bg-card)',
                  position: 'relative',
                  border: isComingSoon ? '1.5px dashed var(--border-color)' : '1px solid var(--border-color)',
                  opacity: isComingSoon ? 0.92 : 1,
                }}
              >
                {/* Project Card Header Banner */}
                <div 
                  style={{
                    padding: '1.75rem 1.75rem 1rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: isComingSoon ? 'var(--accent-amber-light)' : 'var(--accent-blue-light)',
                        color: isComingSoon ? 'var(--accent-amber)' : 'var(--accent-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {proj.tools.includes('Excel') || proj.tools.includes('Microsoft Excel') ? (
                        <FileSpreadsheet size={20} />
                      ) : proj.tools.includes('Python') ? (
                        <Terminal size={20} />
                      ) : (
                        <BarChart2 size={20} />
                      )}
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {proj.category || 'Data Analytics'}
                      </span>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                        Practical Exploration
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  {isComingSoon ? (
                    <span className="badge badge-amber">
                      <Clock size={12} />
                      <span>Coming Soon</span>
                    </span>
                  ) : (
                    <span className="badge badge-emerald">
                      <CheckCircle2 size={12} />
                      <span>{proj.status || 'Completed'}</span>
                    </span>
                  )}
                </div>

                {/* Project Body */}
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  
                  {/* Title */}
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.85rem', lineHeight: 1.35 }}>
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    {proj.description}
                  </p>

                  {/* Tools Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
                    {proj.tools.map((tool, tIdx) => (
                      <span 
                        key={tIdx}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: 'var(--bg-secondary)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Key Activities Highlight */}
                  {proj.keyActivities && proj.keyActivities.length > 0 && (
                    <div style={{ marginTop: 'auto', marginBottom: '1.5rem' }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.65rem' }}>
                        Key Highlights:
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                        {proj.keyActivities.slice(0, 3).map((act, aIdx) => (
                          <li key={aIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                            <CheckCircle2 size={15} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '3px' }} />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.65rem',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    <button
                      onClick={() => setActiveModalProject(proj)}
                      className="btn btn-secondary btn-sm"
                      style={{ flex: 1 }}
                    >
                      <span>View Details</span>
                      <ArrowRight size={14} />
                    </button>

                    {!isComingSoon && (
                      <button
                        onClick={() => handleLinkClick(proj.githubUrl, `${proj.title} GitHub`)}
                        className="btn btn-secondary btn-sm"
                        style={{ gap: '0.4rem' }}
                        title="Open GitHub Repository"
                      >
                        <GithubIcon size={15} />
                        <span>Code</span>
                      </button>
                    )}

                    {proj.liveUrl && !isComingSoon && (
                      <button
                        onClick={() => handleLinkClick(proj.liveUrl, `${proj.title} Live`)}
                        className="btn btn-primary btn-sm"
                        style={{ gap: '0.4rem' }}
                      >
                        <ExternalLink size={15} />
                        <span>Live</span>
                      </button>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Modal Window */}
        {activeModalProject && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.65)',
              backdropFilter: 'blur(8px)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            onClick={() => setActiveModalProject(null)}
          >
            <div
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-xl)',
                width: '100%',
                maxWidth: '680px',
                maxHeight: '88vh',
                overflowY: 'auto',
                boxShadow: 'var(--shadow-hover)',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div 
                style={{
                  padding: '1.75rem 2rem',
                  borderBottom: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'sticky',
                  top: 0,
                  backgroundColor: 'var(--bg-card)',
                  zIndex: 2,
                }}
              >
                <div>
                  <span className="badge badge-blue" style={{ marginBottom: '0.35rem' }}>
                    {activeModalProject.category}
                  </span>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {activeModalProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="btn btn-secondary btn-icon"
                  style={{ width: '36px', height: '36px', borderRadius: '50%' }}
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div style={{ padding: '2rem' }}>
                
                {/* Description */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    Project Overview
                  </h4>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Tools */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    Tools & Technologies
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {activeModalProject.tools.map((tool, idx) => (
                      <span key={idx} className="badge badge-cyan" style={{ fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Activities */}
                {activeModalProject.keyActivities && (
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                      Detailed Key Activities & Methodology
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {activeModalProject.keyActivities.map((act, idx) => (
                        <div 
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            backgroundColor: 'var(--bg-secondary)',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-color)',
                          }}
                        >
                          <CheckCircle2 size={17} style={{ color: 'var(--accent-emerald)', flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                            {act}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Links inside modal */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                  <button
                    onClick={() => handleLinkClick(activeModalProject.githubUrl, 'GitHub')}
                    className="btn btn-secondary"
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                  </button>
                  {activeModalProject.liveUrl && (
                    <button
                      onClick={() => handleLinkClick(activeModalProject.liveUrl, 'Live')}
                      className="btn btn-primary"
                    >
                      <ExternalLink size={16} />
                      <span>Live Project</span>
                    </button>
                  )}
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="btn btn-secondary"
                    style={{ marginLeft: 'auto' }}
                  >
                    Close
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
