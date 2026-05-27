// COZY-COOL — Cards Component (v2)
// Real photography + light-mode card design

const CARD_DATA = [
  {
    id: 1,
    img: '../../assets/images/wildflowers-sunset.png',
    title: 'Wildflowers at Dusk',
    body: 'Soft light, delicate stems, warm bokeh. The beauty hiding in the quiet corners of an ordinary evening.',
    cta: 'Read more', ctaStyle: 'orange',
  },
  {
    id: 2,
    img: '../../assets/images/purple-daisy-droplet.png',
    title: 'The Detail in the Drop',
    body: 'A single droplet holds an entire world. Looking closely is always worth it.',
    cta: 'Discover', ctaStyle: 'primary',
  },
  {
    id: 3,
    img: '../../assets/images/children-golden-field.png',
    title: 'Golden Hour Chasing',
    body: 'Children, butterflies, and a cat running through a field of dandelions at golden hour. Pure cozy-cool.',
    cta: 'Explore', ctaStyle: 'outline',
  },
  {
    id: 4,
    img: '../../assets/images/grape-hyacinth.png',
    title: 'Grape Hyacinth',
    body: 'Blue-violet clusters against a blurred pink horizon. Cool colour, warm feeling — the brand in a bloom.',
    cta: 'Read more', ctaStyle: 'orange',
  },
  {
    id: 5,
    img: '../../assets/images/underwater-green.png',
    title: 'Underwater Light',
    body: 'Sunlight fracturing through water into a thousand bright coins. Fresh, alive, unexpectedly magical.',
    cta: 'Discover', ctaStyle: 'primary',
  },
  {
    id: 6,
    img: '../../assets/images/wildflowers-sunset.png',
    title: 'Soft Purple Evening',
    body: 'When the light turns violet and everything slows down. This is the cozy moment we design for.',
    cta: 'Explore', ctaStyle: 'outline',
  },
];

const CardItem = ({ card, onClick, darkMode }) => {
  const [hovered, setHovered] = React.useState(false);

  const ctaColors = {
    primary: { background: '#0D2847', color: '#fff', border: 'none' },
    outline:  { background: 'transparent', color: darkMode ? '#F8F6F2' : '#0D2847', border: `1.5px solid ${darkMode ? 'rgba(255,255,255,0.3)' : '#0D2847'}` },
    orange:   { background: '#F2994A', color: '#fff', border: 'none' },
  };

  return (
    <div
      style={{
        background: darkMode ? '#122f55' : '#fff',
        borderRadius: 4,
        boxShadow: hovered
          ? '0 8px 24px rgba(0,0,0,0.14)'
          : darkMode ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-3px)' : 'none',
        transition: 'transform 200ms cubic-bezier(0.4,0,0.2,1), box-shadow 200ms cubic-bezier(0.4,0,0.2,1)',
        display: 'flex', flexDirection: 'column',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div style={{ height: 200, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
        <img
          src={card.img}
          alt={card.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 400ms cubic-bezier(0.4,0,0.2,1)',
          }}
        />
      </div>
      <div style={{ padding: '18px 18px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: darkMode ? '#F8F6F2' : '#333', marginBottom: 8, lineHeight: 1.3 }}>{card.title}</div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: darkMode ? 'rgba(248,246,242,0.65)' : '#828282', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>{card.body}</div>
        <button style={{
          fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13,
          padding: '8px 18px', borderRadius: 4, cursor: 'pointer',
          alignSelf: 'flex-start',
          transition: 'opacity 150ms',
          ...ctaColors[card.ctaStyle],
        }}>
          {card.cta}
        </button>
      </div>
    </div>
  );
};

const Cards = ({ onNavigate, darkMode, title = 'Explore our collection', subtitle = 'Curated moments for every kind of day.' }) => {
  const bg = darkMode ? '#0a2038' : '#F8F6F2';
  return (
    <section style={{ background: bg }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 48px' }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 36, fontWeight: 900, color: darkMode ? '#F8F6F2' : '#0D2847', marginBottom: 8, letterSpacing: '-0.01em' }}>{title}</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: darkMode ? 'rgba(248,246,242,0.6)' : '#828282' }}>{subtitle}</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {CARD_DATA.map(card => (
            <CardItem key={card.id} card={card} onClick={() => onNavigate('detail')} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Cards, CardItem });
