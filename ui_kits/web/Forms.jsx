// COZY-COOL — Forms Component
// Contact form with validation states

const FormField = ({ label, type = 'text', placeholder, status, statusMsg, icon }) => {
  const [val, setVal] = React.useState('');
  const [focused, setFocused] = React.useState(false);

  const borderColor = {
    success: '#27AE60',
    warning: '#E2B93B',
    error:   '#EB5757',
    default: focused ? '#0D2847' : '#E0E0E0',
  }[status || 'default'];

  const statusColors = { success: '#27AE60', warning: '#E2B93B', error: '#EB5757' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {label && (
        <label style={{ fontSize: 13, fontWeight: 700, color: '#333' }}>{label}</label>
      )}
      <div style={{ position: 'relative' }}>
        <input
          type={type}
          placeholder={placeholder}
          value={val}
          onChange={e => setVal(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#333',
            border: `1px solid ${borderColor}`, borderRadius: 4,
            padding: icon ? '9px 36px 9px 12px' : '9px 12px',
            outline: 'none', width: '100%', transition: 'border-color 150ms',
            background: '#fff',
          }}
        />
        {icon && (
          <span style={{
            position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
            color: '#BDBDBD', display: 'flex', alignItems: 'center',
          }}>
            <i data-lucide={icon} style={{ width: 16, height: 16 }}></i>
          </span>
        )}
      </div>
      {statusMsg && (
        <span style={{ fontSize: 11, fontWeight: 700, color: statusColors[status] }}>
          {statusMsg}
        </span>
      )}
    </div>
  );
};

const TextArea = ({ label, placeholder, rows = 4 }) => {
  const [focused, setFocused] = React.useState(false);
  const [val, setVal] = React.useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {label && <label style={{ fontSize: 13, fontWeight: 700, color: '#333' }}>{label}</label>}
      <textarea
        placeholder={placeholder}
        value={val}
        onChange={e => setVal(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={rows}
        style={{
          fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#333',
          border: `1px solid ${focused ? '#0D2847' : '#E0E0E0'}`,
          borderRadius: 4, padding: '9px 12px', outline: 'none',
          resize: 'vertical', transition: 'border-color 150ms', width: '100%',
        }}
      />
    </div>
  );
};

const Dropdown = ({ label, options = [] }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {label && <label style={{ fontSize: 13, fontWeight: 700, color: '#333' }}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <select style={{
          fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#333',
          border: '1px solid #E0E0E0', borderRadius: 4, padding: '9px 32px 9px 12px',
          appearance: 'none', WebkitAppearance: 'none', background: '#fff',
          width: '100%', cursor: 'pointer', outline: 'none',
        }}>
          {options.map(o => <option key={o}>{o}</option>)}
        </select>
        <span style={{
          position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
          color: '#828282', pointerEvents: 'none',
        }}>▾</span>
      </div>
    </div>
  );
};

const ContactForm = ({ onSuccess }) => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '48px 24px' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>:)</div>
        <div style={{ fontSize: 24, fontWeight: 700, color: '#0D2847', marginBottom: 8 }}>Message sent!</div>
        <div style={{ fontSize: 15, color: '#828282' }}>We'll get back to you soon. Thank you for reaching out.</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <FormField label="First name" placeholder="Input text" />
        <FormField label="Last name" placeholder="Input text" />
      </div>
      <FormField label="Email address" type="email" placeholder="you@example.com" icon="mail" />
      <Dropdown label="Topic" options={['General enquiry', 'Design feedback', 'Partnership', 'Other']} />
      <TextArea label="Message" placeholder="Enter your message here" rows={5} />
      <div style={{ display: 'flex', gap: 12 }}>
        <button type="submit" style={{
          background: '#0D2847', color: '#fff', fontFamily: 'Inter, sans-serif',
          fontWeight: 700, fontSize: 14, padding: '11px 32px', borderRadius: 4,
          border: 'none', cursor: 'pointer',
        }}>
          Send message
        </button>
        <button type="button" style={{
          background: 'transparent', color: '#828282', fontFamily: 'Inter, sans-serif',
          fontWeight: 700, fontSize: 14, padding: '11px 24px', borderRadius: 4,
          border: '1px solid #E0E0E0', cursor: 'pointer',
        }}>
          Cancel
        </button>
      </div>
    </form>
  );
};

Object.assign(window, { FormField, TextArea, Dropdown, ContactForm });
