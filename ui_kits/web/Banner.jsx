// COZY-COOL — Banner Component (v2)
// Full-width CTA banner with real imagery option + dark mode support

const Banner = ({ onNavigate, darkMode }) => {
  const [hovBtn, setHovBtn] = React.useState(false);

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <img
        src="../../assets/images/underwater-green.png"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,40,71,0.82)' }}></div>
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 1200, margin: '0 auto', padding: '64px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48,
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 12, lineHeight: 1.15, letterSpacing: '-0.01em' }}>
            Ready to get started?
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: 520 }}>
            Join thousands of people who've found the perfect balance of cozy and cool. No pressure, just good design :)
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
          <button
            style={{
              background: hovBtn ? '#e08936' : '#F2994A', color: '#fff',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
              padding: '13px 32px', borderRadius: 4, border: 'none', cursor: 'pointer',
              transition: 'transform 300ms cubic-bezier(0.34,1.56,0.64,1), background 150ms',
              transform: hovBtn ? 'scale(1.04)' : 'scale(1)',
            }}
            onMouseEnter={() => setHovBtn(true)}
            onMouseLeave={() => setHovBtn(false)}
            onClick={() => onNavigate('contact')}
          >
            Get in touch
          </button>
          <button
            style={{
              background: 'transparent', color: 'rgba(255,255,255,0.85)',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
              padding: '13px 28px', borderRadius: 4,
              border: '1.5px solid rgba(255,255,255,0.35)', cursor: 'pointer',
              transition: 'border-color 150ms, background 150ms',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.7)'; e.currentTarget.style.background='rgba(255,255,255,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.35)'; e.currentTarget.style.background='transparent'; }}
            onClick={() => onNavigate('explore')}
          >
            Browse first
          </button>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Banner });
