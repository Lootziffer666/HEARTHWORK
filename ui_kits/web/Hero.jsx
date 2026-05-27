// COZY-COOL — Hero Component (v2)
// Real photography with dark overlay + entrance animation

const SLIDES = [
  {
    img: '../../assets/images/wildflowers-sunset.png',
    label: 'New season',
    title: 'Where cozy meets cool',
    body: 'Thoughtfully designed for people who refuse to choose between comfort and style.',
    cta: 'Explore now',
  },
  {
    img: '../../assets/images/purple-daisy-droplet.png',
    label: 'Featured',
    title: 'Design in the details',
    body: 'Every detail matters. From the weight of a drop to the warmth of a petal — it all adds up.',
    cta: 'Discover more',
  },
  {
    img: '../../assets/images/children-golden-field.png',
    label: 'This moment',
    title: 'Built for the everyday magic',
    body: 'Products that fit into your life — not the other way around. Here for the golden hours.',
    cta: 'See collection',
  },
];

const Hero = ({ onNavigate }) => {
  const [current, setCurrent] = React.useState(0);
  const [animKey, setAnimKey] = React.useState(0);
  const total = SLIDES.length;

  const goTo = (idx) => {
    setCurrent(idx);
    setAnimKey(k => k + 1);
  };

  React.useEffect(() => {
    const t = setTimeout(() => goTo((current + 1) % total), 6000);
    return () => clearTimeout(t);
  }, [current]);

  const slide = SLIDES[current];

  const S = {
    wrapper: { position: 'relative', height: 520, overflow: 'hidden' },
    img: {
      position: 'absolute', inset: 0, width: '100%', height: '100%',
      objectFit: 'cover', objectPosition: 'center',
      transition: 'opacity 600ms cubic-bezier(0,0,0.2,1)',
    },
    overlay: {
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to right, rgba(13,40,71,0.72) 0%, rgba(13,40,71,0.35) 60%, rgba(13,40,71,0.1) 100%)',
    },
    content: {
      position: 'relative', zIndex: 2,
      maxWidth: 1200, margin: '0 auto', padding: '0 48px',
      height: '100%', display: 'flex', alignItems: 'center',
    },
    inner: {
      maxWidth: 560,
      animation: `cc-fade-up 500ms cubic-bezier(0,0,0.2,1) both`,
    },
    label: {
      display: 'inline-block', background: '#F2994A', color: '#fff',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
      padding: '4px 12px', borderRadius: 999, marginBottom: 18,
    },
    title: {
      fontFamily: "'Nunito', sans-serif", fontSize: 54, fontWeight: 900,
      color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 16,
    },
    body: {
      fontFamily: "'DM Sans', sans-serif", fontSize: 17,
      color: 'rgba(255,255,255,0.82)', lineHeight: 1.65, marginBottom: 28,
    },
    btnRow: { display: 'flex', gap: 12 },
    btnPrimary: {
      background: '#F2994A', color: '#fff',
      fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
      padding: '12px 28px', borderRadius: 4, border: 'none', cursor: 'pointer',
      transition: 'transform 300ms cubic-bezier(0.34,1.56,0.64,1), background 150ms',
    },
    btnOutline: {
      background: 'transparent', color: '#fff',
      fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
      padding: '12px 24px', borderRadius: 4,
      border: '1.5px solid rgba(255,255,255,0.55)', cursor: 'pointer',
      transition: 'border-color 150ms, background 150ms',
    },
    dots: {
      position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
      display: 'flex', gap: 8, zIndex: 3,
    },
    dot: {
      height: 6, borderRadius: 999,
      background: 'rgba(255,255,255,0.4)', cursor: 'pointer',
      border: 'none', transition: 'all 250ms cubic-bezier(0.4,0,0.2,1)',
    },
    dotActive: { background: '#F2994A', width: 24 },
    dotInactive: { width: 6 },
    arrow: {
      position: 'absolute', top: '50%', transform: 'translateY(-50%)',
      zIndex: 3, width: 40, height: 40, borderRadius: 4,
      background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)',
      border: '1px solid rgba(255,255,255,0.2)',
      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', transition: 'background 150ms',
    },
  };

  return (
    <div style={S.wrapper}>
      <style>{`
        @keyframes cc-fade-up {
          from { opacity:0; transform: translateY(16px); }
          to   { opacity:1; transform: translateY(0); }
        }
      `}</style>
      <img key={current} src={slide.img} style={S.img} alt="" />
      <div style={S.overlay}></div>
      <div style={S.content}>
        <div key={animKey} style={S.inner}>
          <span style={S.label}>{slide.label}</span>
          <div style={S.title}>{slide.title}</div>
          <div style={S.body}>{slide.body}</div>
          <div style={S.btnRow}>
            <button
              style={S.btnPrimary}
              onMouseEnter={e => e.target.style.transform='scale(1.04)'}
              onMouseLeave={e => e.target.style.transform='scale(1)'}
              onClick={() => onNavigate('explore')}>
              {slide.cta}
            </button>
            <button style={S.btnOutline}
              onMouseEnter={e => { e.target.style.background='rgba(255,255,255,0.1)'; e.target.style.borderColor='rgba(255,255,255,0.8)'; }}
              onMouseLeave={e => { e.target.style.background='transparent'; e.target.style.borderColor='rgba(255,255,255,0.55)'; }}
              onClick={() => onNavigate('about')}>
              Learn more
            </button>
          </div>
        </div>
      </div>
      <button style={{ ...S.arrow, left: 20 }} onClick={() => goTo((current - 1 + total) % total)}>
        <i data-lucide="chevron-left" style={{ width: 20, height: 20 }}></i>
      </button>
      <button style={{ ...S.arrow, right: 20 }} onClick={() => goTo((current + 1) % total)}>
        <i data-lucide="chevron-right" style={{ width: 20, height: 20 }}></i>
      </button>
      <div style={S.dots}>
        {SLIDES.map((_, i) => (
          <button key={i} style={{ ...S.dot, ...(i === current ? S.dotActive : S.dotInactive) }}
            onClick={() => goTo(i)}></button>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { Hero });
