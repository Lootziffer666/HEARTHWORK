// COZY-COOL — Nav Component (v2)
// Light mode default, dark mode toggle

const Nav = ({ currentPage, onNavigate, darkMode, onToggleDark }) => {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const links = ['Home', 'Explore', 'About', 'Contact'];

  const S = {
    wrapper: {
      position: 'sticky', top: 0, zIndex: 100,
      background: '#0D2847',
      boxShadow: '0 2px 12px rgba(13,40,71,0.25)',
    },
    inner: {
      maxWidth: 1200, margin: '0 auto', padding: '0 48px',
      display: 'flex', alignItems: 'center', height: 64, gap: 28,
    },
    logo: {
      fontFamily: "'Nunito', sans-serif", fontWeight: 900,
      fontSize: 22, color: '#fff', letterSpacing: '-0.02em',
      cursor: 'pointer', flexShrink: 0, userSelect: 'none',
    },
    logoAccent: { color: '#F2994A' },
    links: { display: 'flex', gap: 2, flex: 1 },
    link: {
      padding: '6px 14px', borderRadius: 4,
      fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
      color: 'rgba(255,255,255,0.7)', cursor: 'pointer',
      transition: 'color 150ms, background 150ms',
      border: 'none', background: 'none',
    },
    linkActive: { color: '#fff', background: 'rgba(255,255,255,0.1)' },
    right: { display: 'flex', alignItems: 'center', gap: 6 },
    searchInput: {
      background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: 4, padding: '6px 12px', color: '#fff', fontSize: 13,
      fontFamily: "'DM Sans', sans-serif", outline: 'none',
      width: searchOpen ? 160 : 0, overflow: 'hidden',
      transition: 'width 200ms cubic-bezier(0.4,0,0.2,1)',
      opacity: searchOpen ? 1 : 0,
    },
    iconBtn: {
      width: 34, height: 34, display: 'flex', alignItems: 'center',
      justifyContent: 'center', borderRadius: 4, cursor: 'pointer',
      color: 'rgba(255,255,255,0.7)', background: 'none', border: 'none',
      transition: 'background 150ms, color 150ms',
    },
    darkToggle: {
      width: 34, height: 34, display: 'flex', alignItems: 'center',
      justifyContent: 'center', borderRadius: 4, cursor: 'pointer',
      background: darkMode ? 'rgba(242,153,74,0.2)' : 'rgba(255,255,255,0.08)',
      border: darkMode ? '1px solid rgba(242,153,74,0.4)' : '1px solid rgba(255,255,255,0.15)',
      color: darkMode ? '#F2994A' : 'rgba(255,255,255,0.7)',
      transition: 'all 200ms cubic-bezier(0.4,0,0.2,1)',
    },
    cta: {
      background: '#F2994A', color: '#fff',
      fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13,
      padding: '8px 20px', borderRadius: 4, border: 'none',
      cursor: 'pointer', transition: 'transform 300ms cubic-bezier(0.34,1.56,0.64,1), background 150ms',
      flexShrink: 0,
    },
  };

  return (
    <nav style={S.wrapper}>
      <div style={S.inner}>
        <div style={S.logo} onClick={() => onNavigate('home')}>
          COZY<span style={S.logoAccent}>-</span>COOL
        </div>
        <div style={S.links}>
          {links.map(l => (
            <button key={l}
              style={{ ...S.link, ...(currentPage === l.toLowerCase() ? S.linkActive : {}) }}
              onClick={() => onNavigate(l.toLowerCase())}>
              {l}
            </button>
          ))}
        </div>
        <div style={S.right}>
          <input style={S.searchInput} placeholder="Search…" aria-label="Search" />
          <button style={S.iconBtn} onClick={() => setSearchOpen(s => !s)}>
            <i data-lucide="search" style={{ width: 17, height: 17 }}></i>
          </button>
          <button style={S.darkToggle} onClick={onToggleDark} title={darkMode ? 'Light mode' : 'Dark mode'}>
            <i data-lucide={darkMode ? 'sun' : 'moon'} style={{ width: 16, height: 16 }}></i>
          </button>
          <button style={S.cta}
            onMouseEnter={e => e.currentTarget.style.transform='scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
            onClick={() => onNavigate('contact')}>
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
};

Object.assign(window, { Nav });
