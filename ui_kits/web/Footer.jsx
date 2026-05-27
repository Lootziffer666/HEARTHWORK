// COZY-COOL — Footer Component (v2)
// Dark mode aware

const Footer = ({ onNavigate, darkMode }) => {
  const cols = [
    { heading: 'Explore', links: ['Home', 'Collection', 'Featured', 'New arrivals'] },
    { heading: 'Company', links: ['About us', 'Careers', 'Press', 'Partners'] },
    { heading: 'Support', links: ['Help center', 'Contact', 'Privacy policy', 'Terms of use'] },
  ];

  // Footer is always dark — it's a brand element
  const S = {
    footer: { background: '#071628', color: '#fff', padding: '56px 0 0' },
    inner: { maxWidth: 1200, margin: '0 auto', padding: '0 48px' },
    top: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 },
    logo: { fontFamily: "'Nunito', sans-serif", fontSize: 24, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 },
    logoAccent: { color: '#F2994A' },
    tagline: { fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 260, marginBottom: 24 },
    social: { display: 'flex', gap: 8 },
    socialBtn: {
      width: 32, height: 32, borderRadius: 4, background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.12)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'rgba(255,255,255,0.6)', cursor: 'pointer',
      transition: 'background 150ms, border-color 150ms',
    },
    colHeading: {
      fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700,
      color: '#F2994A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16,
    },
    bottom: {
      borderTop: '1px solid rgba(255,255,255,0.08)', padding: '20px 0',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    },
    bottomText: { fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.35)' },
  };

  return (
    <footer style={S.footer}>
      <div style={S.inner}>
        <div style={S.top}>
          <div>
            <div style={S.logo}>COZY<span style={S.logoAccent}>-</span>COOL</div>
            <div style={S.tagline}>
              Thoughtfully designed for people who want both comfort and style. Always. :)
            </div>
            <div style={S.social}>
              {[['globe','Website'],['send','Social'],['users','Community'],['play','Video']].map(([icon, label]) => (
                <button key={icon} title={label} style={S.socialBtn}
                  onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.14)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.22)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.12)'; }}>
                  <i data-lucide={icon} style={{ width: 14, height: 14 }}></i>
                </button>
              ))}
            </div>
          </div>
          {cols.map(col => (
            <div key={col.heading}>
              <div style={S.colHeading}>{col.heading}</div>
              {col.links.map(link => (
                <div key={link} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 10, cursor: 'pointer', transition: 'color 150ms' }}
                  onMouseEnter={e => e.target.style.color='#fff'}
                  onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.55)'}>
                  {link}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={S.bottom}>
          <span style={S.bottomText}>© 2026 COZY-COOL. All rights reserved.</span>
          <span style={S.bottomText}>Designed with care :)</span>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Footer });
