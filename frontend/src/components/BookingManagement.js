import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../AppStyles';

function BookingManagement() {
  const [username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [payment, setPayment] = useState('');
  const [date, setDate] = useState('');
  const [timeIn, setTimeIn] = useState('');
  const [timeOut, setTimeOut] = useState('');
  const [type, setType] = useState('');
  const [buttonHover, setButtonHover] = useState(false);
  const [navHover, setNavHover] = useState([false, false, false, false]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.endsWith('@cit.edu')) {
      alert('Email must end with @cit.edu');
      return;
    }
    alert(`Booking created for ${username}`);
    setUsername('');
    setContact('');
    setEmail('');
    setPayment('');
    setDate('');
    setTimeIn('');
    setTimeOut('');
    setType('');
  };

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
          background: 'url("/images/bookingbg.jpg") center/cover no-repeat',
          boxShadow: '0 8px 32px rgba(128,0,0,0.13)',
          backgroundColor: 'rgba(255,255,255,0.95)',
          position: 'relative',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          <form
            style={{
              ...styles.formContainer,
              background: 'rgba(30,30,30,0.7)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
              color: '#fff',
            }}
            onSubmit={handleSubmit}
          >
            <div style={{
              ...styles.overlay,
              color: '#fff',
              textShadow: '0 2px 16px rgba(0,0,0,0.45)',
              fontSize: '2.2rem',
              textAlign: 'center',
              marginBottom: '8px',
            }}>
              Booking Management
            </div>

            <div style={{
              ...styles.subText,
              color: '#fff',
              textShadow: '0 1px 8px rgba(0,0,0,0.35)',
              textAlign: 'center',
              marginBottom: '16px',
            }}>
              Book rooms or areas here.
            </div>

            <label style={{ ...styles.label, color: '#fff' }}>Username:</label>
            <input style={styles.input} value={username} onChange={e => setUsername(e.target.value)} required />

            <label style={{ ...styles.label, color: '#fff' }}>Contact Number:</label>
            <input style={styles.input} value={contact} onChange={e => setContact(e.target.value)} required />

            <label style={{ ...styles.label, color: '#fff' }}>Email (@cit.edu):</label>
            <input type="email" style={styles.input} value={email} onChange={e => setEmail(e.target.value)} required />

            <label style={{ ...styles.label, color: '#fff' }}>Payment Amount (₱):</label>
            <input type="number" style={styles.input} value={payment} onChange={e => setPayment(e.target.value)} required />

            <label style={{ ...styles.label, color: '#fff' }}>Booking Date:</label>
            <input type="date" style={styles.input} value={date} onChange={e => setDate(e.target.value)} required />

            <label style={{ ...styles.label, color: '#fff' }}>Time to Come In:</label>
            <input type="time" style={styles.input} value={timeIn} onChange={e => setTimeIn(e.target.value)} required />

            <label style={{ ...styles.label, color: '#fff' }}>Time to End Out:</label>
            <input type="time" style={styles.input} value={timeOut} onChange={e => setTimeOut(e.target.value)} required />

            <label style={{ ...styles.label, color: '#fff' }}>Booking Type:</label>
            <select style={styles.select} value={type} onChange={e => setType(e.target.value)} required>
              <option value="" disabled>Select type</option>
              <option value="Study">Study</option>
              <option value="Event">Event</option>
              <option value="Group">Group</option>
              <option value="Other">Other</option>
            </select>

            <button
              type="submit"
              style={{
                ...styles.button,
                ...(buttonHover ? styles.buttonHover : {}),
                marginTop: '18px',
              }}
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
            >
              Create Booking
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default BookingManagement;
