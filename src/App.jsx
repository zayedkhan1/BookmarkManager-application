import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Bookmarks from './pages/Bookmarks';
// import ContactPage from './pages/ContactPage';

import Login from './pages/Login';
import Navbar from './components/Navbar';
import ContactPage from './pages/seetings';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('user')) || null;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleLogin = (username) => {
    setUser({ username });
    localStorage.setItem('user', JSON.stringify({ username }));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar user={user} onLogout={handleLogout} onLogin={handleLogin}  />
      <Routes>
        <Route
          path="/"
          element={user ? <Home user={user} /> : <Navigate to="/login" />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/bookmarks" element={<Bookmarks></Bookmarks>  } />
      </Routes>
    </div>
  );
}

export default App;

///



