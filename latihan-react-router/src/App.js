import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import PageNotFound from './pages/PageNotFound';
import Overview from './pages/Overview';
import Stats from './pages/Stats';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleAuth = () => {
    setisLoggedIn(!isLoggedIn);
  };

  return (
    <Router>
      <div className="App">
        <nav className="topnav">
          <div>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              {isLoggedIn && (
                <>
                  <Link to="/dashboard">
                    <li>Dashboard</li>
                  </Link>
                  <Link to="/user">
                    <li>User Profile</li>
                  </Link>
                </>
              )}
            </ul>
            <button onClick={handleAuth}>
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute
                element={<Dashboard />}
                isAuthenticated={isLoggedIn}
              />
            }>
            <Route path="overview" element={<Overview />} />
            <Route path="stats" element={<Stats />} />
          </Route>
          <Route
            path="/about"
            element={
              <ProtectedRoute
                element={<About />}
                isAuthenticated={isLoggedIn}
              />
            }
          />
          <Route
            path="/user/*"
            element={
              <ProtectedRoute
                element={<Users />}
                isAuthenticated={isLoggedIn}
              />
            }>
            {/* <Route path="details/:userId/*" element={<UserDetails />} /> */}
          </Route>

          <Route
            path="/user/details/:userId/*"
            element={
              <ProtectedRoute
                element={<UserDetails />}
                isAuthenticated={isLoggedIn}
              />
            }></Route>
          {/* Tambahkan rute login jika perlu */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
