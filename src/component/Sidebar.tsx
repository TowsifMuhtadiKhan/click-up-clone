import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: '🏠 Home', path: '/' },
    { label: '📄 About', path: '/about' },
    { label: '⚙️ Settings', path: '/settings' },
  ];

  return (
    <aside
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 200,
        height: '100%',
        backgroundColor: '#222',
        color: 'white',
        padding: '1rem',
      }}
    >
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {navItems.map((item) => (
          <li
            key={item.path}
            style={{
              marginBottom: '1rem',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '4px',
              transition: 'background 0.2s',
            }}
            onClick={() => navigate(item.path)}
            onMouseOver={(e) => (e.currentTarget.style.background = '#333')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
