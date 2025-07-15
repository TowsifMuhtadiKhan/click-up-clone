const Header = () => {
    return (
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 232, // match sidebar width
          right: 0,
          height: 60,
          backgroundColor: '#333',
          color: 'white',
          padding: '1rem',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '1.2rem' }}>🧠 My App</h1>
      </header>
    );
  };
  
  export default Header;
  