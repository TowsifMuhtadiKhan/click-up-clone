import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: 200, width: '100%' }}>
          <Header />
          <main
            style={{
              marginTop: 60, // height of header
              marginBottom: 40, // height of footer
              padding: '1rem',
              minHeight: 'calc(100vh - 100px)',
              background: '#f4f4f4',
              overflowY: 'auto',
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
