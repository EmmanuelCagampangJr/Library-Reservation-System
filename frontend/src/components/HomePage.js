import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../AppStyles'; // Make sure this file exists and is exported correctly

function HomePage() {
  const [navHover, setNavHover] = useState([false, false, false, false]);

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <Link to="/" style={{ ...styles.logo, textDecoration: 'none' }}>
        <img
          src="/book.png"
          alt="Logo"
          style={{ height: '40px', marginRight: '10px' }}
        />
        Library Management System
      </Link>
        <div style={styles.navLinks}>
          {["/students", "/reservations", "/bookings", "/equipment"].map((to, idx) => (
            <Link
              key={to}
              to={to}
              style={{
                ...styles.navLink,
                ...(navHover[idx] ? styles.navLinkHover : {})
              }}
              onMouseEnter={() => setNavHover(navHover.map((v, i) => i === idx))}
              onMouseLeave={() => setNavHover([false, false, false, false])}
            >
              {["Student Management", "Reservation Management", "Booking Management", "Equipment Management"][idx]}
            </Link>
          ))}
        </div>
      </nav>

      <main style={styles.main}>
        <div style={{
          ...styles.imageContainer,
          background: 'url("/images/homebg.jpg") center/cover no-repeat',
          backgroundColor: 'rgba(255,255,255,0.95)',
          maxWidth: '1100px',
          margin: '0 auto',
          height: '60vh',
          borderRadius: '0 0 16px 16px',
          boxShadow: '0 8px 32px rgba(128,0,0,0.13)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0
        }}>
          <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            padding: '32px 48px',
            borderRadius: '12px',
            textAlign: 'center',
            maxWidth: '90%',
          }}>
            <div style={{
              ...styles.overlay,
              color: '#fff',
              textShadow: '0 2px 8px rgba(0,0,0,0.5)'
            }}>
              Welcome to the Library Management System
            </div>
            <div style={{
              ...styles.subText,
              color: '#ddd',
              fontSize: '1.2rem',
              marginBottom: '18px'
            }}>
              Manage your library efficiently and effortlessly.
            </div>
            <div style={{ display: 'flex', gap: '18px', justifyContent: 'center' }}>
              <Link to="/login" style={{
                background: '#800000',
                color: '#fff',
                padding: '12px 32px',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '1.1rem',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                transition: 'background 0.2s',
              }}>Log In</Link>
              <Link to="/signup" style={{
                background: '#ffc107',
                color: '#222',
                padding: '12px 32px',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '1.1rem',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                transition: 'background 0.2s',
              }}>Sign Up</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
