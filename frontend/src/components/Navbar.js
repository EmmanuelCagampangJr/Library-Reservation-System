import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../AppStyles';

function Navbar() {
  const [navHover, setNavHover] = useState([false, false, false, false]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/students", label: "Student Management", icon: "👥" },
    { path: "/reservations", label: "Reservation Management", icon: "📅" },
    { path: "/bookings", label: "Booking Management", icon: "📚" },
    { path: "/equipment", label: "Equipment Management", icon: "🔧" }
  ];

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <nav style={{
      ...styles.nav,
      background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: isScrolled ? '1px solid var(--gray-200)' : '1px solid transparent',
      boxShadow: isScrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transition: 'all 0.3s ease'
    }}>
      {/* Logo */}
      <Link to="/" style={{ ...styles.logo, textDecoration: 'none' }}>
        <img
          src="/book.png"
          alt="Logo"
          style={{ height: '40px', marginRight: '10px' }}
        />
        <span style={styles.gradientText}>Library Management System</span>
      </Link>

      {/* Desktop Navigation */}
      <div style={{
        ...styles.navLinks,
        display: 'flex',
        alignItems: 'center',
        height: '48px',
      }}>
        {navItems.map((item, idx) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              ...styles.navLink,
              lineHeight: '1.5',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              ...(location.pathname === item.path ? styles.navLinkActive : {}),
              ...(navHover[idx] ? {
                color: 'var(--primary-700)',
                backgroundColor: 'var(--primary-50)',
                transform: 'translateY(-1px)'
              } : {})
            }}
            onMouseEnter={() => setNavHover(navHover.map((v, i) => i === idx))}
            onMouseLeave={() => setNavHover([false, false, false, false])}
          >
            <span style={{ marginRight: '8px' }}>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>

      {/* User Menu & Mobile Toggle */}
      <div style={{
        ...styles.flex,
        ...styles.itemsCenter,
        ...styles.gap4
      }}>
        {/* User Info */}
        <div style={{
          ...styles.flex,
          ...styles.itemsCenter,
          ...styles.gap2,
          padding: 'var(--space-2) var(--space-4)',
          background: 'var(--primary-50)',
          borderRadius: 'var(--radius-lg)',
          color: 'var(--primary-700)',
          fontWeight: 500,
          fontSize: 'var(--font-size-sm)'
        }}>
          <span>👤</span>
          <span>Admin User</span>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          style={{
            ...styles.button,
            ...styles.buttonSecondary,
            padding: 'var(--space-2) var(--space-4)',
            fontSize: 'var(--font-size-sm)',
            height: '36px'
          }}
          title="Logout"
        >
          🚪 Logout
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: { xs: 'flex', md: 'none' },
            ...styles.button,
            ...styles.buttonSecondary,
            padding: 'var(--space-2)',
            width: '40px',
            height: '40px',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 'var(--font-size-lg)'
          }}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid var(--gray-200)',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 1000,
          padding: 'var(--space-4)',
          display: { xs: 'block', md: 'none' }
        }}>
          <div style={{
            ...styles.flex,
            ...styles.flexCol,
            ...styles.gap2
          }}>
            {navItems.map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...styles.navLink,
                  ...(location.pathname === item.path ? styles.navLinkActive : {}),
                  padding: 'var(--space-3) var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: 'var(--font-size-base)',
                  textAlign: 'left'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span style={{ marginRight: '12px' }}>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;