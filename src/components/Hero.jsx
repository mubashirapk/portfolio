import React, { useRef } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Sparkles, 
  Upload, 
  Trash2, 
  Camera,
  Database,
  Terminal,
  FileSpreadsheet,
  TrendingUp,
  Download
} from 'lucide-react';

export default function Hero({ profile, onUpdateProfileImage, onRemoveProfileImage }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file (PNG, JPG, WebP).');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        onUpdateProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="section data-grid-bg" 
      style={{ 
        paddingTop: '4.5rem', 
        paddingBottom: '5rem',
        borderBottom: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative ambient blur spheres */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(2, 132, 199, 0.03) 60%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          
          {/* Left Column: Text & CTAs */}
          <div>
            
            {/* Status Badge */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.4rem 0.95rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '1.5rem',
              }}
            >
              <div 
                style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-emerald)',
                }}
                className="animate-pulse-dot"
              />
              <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                {profile.statusLabel || 'Exploring Data | Learning Every Day'}
              </span>
            </div>

            {/* Candidate Name & Title */}
            <div style={{ marginBottom: '1.25rem' }}>
              <h1 
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  marginBottom: '0.5rem',
                }}
              >
                {profile.name || 'Mubashira PK'}
              </h1>
              <div 
                style={{
                  fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                {profile.title || 'Aspiring Data Analyst'}
              </div>
            </div>

            {/* Headline */}
            <h2 
              style={{
                fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.35,
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              "{profile.headline || 'Turning Data Into Meaningful Insights.'}"
            </h2>

            {/* Description */}
            <p 
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '620px',
                marginBottom: '2.25rem',
              }}
            >
              {profile.heroDescription || 
                'I am an aspiring Data Analyst passionate about working with data, discovering patterns, and transforming raw information into meaningful insights using Python, SQL, and Excel.'}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
                style={{ fontSize: '1rem', padding: '0.85rem 1.85rem' }}
              >
                <span>Explore My Projects</span>
                <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary"
                style={{ fontSize: '1rem', padding: '0.85rem 1.75rem' }}
              >
                <Mail size={18} />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Quick Skills Badges */}
            <div 
              style={{ 
                marginTop: '2.5rem', 
                paddingTop: '2rem', 
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.65rem'
              }}
            >
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginRight: '0.35rem' }}>
                Core Focus:
              </span>
              <span className="badge badge-blue">
                <Terminal size={12} /> Python & Pandas
              </span>
              <span className="badge badge-cyan">
                <Database size={12} /> SQL Queries
              </span>
              <span className="badge badge-emerald">
                <FileSpreadsheet size={12} /> Excel & Power Query
              </span>
              <span className="badge badge-violet">
                <TrendingUp size={12} /> EDA & Visualization
              </span>
            </div>

          </div>

          {/* Right Column: Profile Picture with Data Analytics Frame */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
              
              {/* Outer Glow Ring */}
              <div 
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '32px',
                  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.25), rgba(2, 132, 199, 0.15), rgba(124, 58, 237, 0.2))',
                  filter: 'blur(16px)',
                  zIndex: 0,
                }}
              />

              {/* Main Card Container */}
              <div 
                className="card-static"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '28px',
                  padding: '1rem',
                  backgroundColor: 'var(--bg-card)',
                  border: '1.5px solid var(--border-color)',
                  boxShadow: 'var(--shadow-hover)',
                  overflow: 'hidden'
                }}
              >
                
                {/* Image or Initials Display */}
                <div 
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '4 / 5',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    backgroundColor: 'var(--bg-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className="profile-image-container"
                >
                  {profile.profileImage ? (
                    <img 
                      src={profile.profileImage} 
                      alt={`Professional profile of ${profile.name}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  ) : (
                    <div 
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #1E293B, #0F172A)',
                        color: '#FFFFFF',
                        gap: '0.75rem'
                      }}
                    >
                      <div 
                        style={{
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '2.5rem',
                          fontWeight: 800,
                          letterSpacing: '0.05em',
                          boxShadow: '0 8px 24px rgba(37, 99, 235, 0.4)'
                        }}
                      >
                        {profile.initials || 'MP'}
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 500 }}>
                        {profile.name}
                      </div>
                    </div>
                  )}

                  {/* Quick Photo Action Overlay (Hover / Click) */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      display: 'flex',
                      gap: '0.4rem',
                      zIndex: 2,
                    }}
                  >
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileChange} 
                      accept="image/png, image/jpeg, image/webp" 
                      style={{ display: 'none' }} 
                    />
                    
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="btn btn-secondary btn-sm"
                      style={{
                        backgroundColor: 'var(--bg-glass)',
                        backdropFilter: 'blur(8px)',
                        padding: '0.45rem 0.75rem',
                        fontSize: '0.78rem',
                        gap: '0.35rem',
                        boxShadow: 'var(--shadow-md)',
                        borderRadius: 'var(--radius-full)'
                      }}
                      title="Upload or change profile picture"
                    >
                      <Camera size={13} />
                      <span>Change</span>
                    </button>

                    {profile.profileImage && (
                      <button
                        onClick={onRemoveProfileImage}
                        className="btn btn-secondary btn-icon"
                        style={{
                          backgroundColor: 'var(--bg-glass)',
                          backdropFilter: 'blur(8px)',
                          width: '32px',
                          height: '32px',
                          boxShadow: 'var(--shadow-md)',
                          borderRadius: '50%',
                          color: '#EF4444'
                        }}
                        title="Remove profile image and use initials"
                      >
                        <Trash2 size={13} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Profile Meta Footer Inside Card */}
                <div 
                  style={{ 
                    paddingTop: '1rem',
                    paddingLeft: '0.5rem',
                    paddingRight: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                      {profile.name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      BCA 5th Semester • Data Analytics
                    </div>
                  </div>
                  <div 
                    style={{
                      padding: '0.35rem 0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--accent-blue-light)',
                      color: 'var(--accent-blue)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <Sparkles size={12} />
                    <span>Active</span>
                  </div>
                </div>

              </div>

              {/* Floating Data Pill (Top Left) */}
              <div 
                className="card-static"
                style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-20px',
                  zIndex: 3,
                  padding: '0.6rem 0.95rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  boxShadow: 'var(--shadow-md)',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--accent-blue-light)',
                    color: 'var(--accent-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <TrendingUp size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Analytical Focus</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>Data Insights</div>
                </div>
              </div>

              {/* Floating Data Pill (Bottom Right) */}
              <div 
                className="card-static"
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  right: '-18px',
                  zIndex: 3,
                  padding: '0.6rem 0.95rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  boxShadow: 'var(--shadow-md)',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--accent-emerald-light)',
                    color: 'var(--accent-emerald)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Database size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Tools</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>Python & SQL</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
