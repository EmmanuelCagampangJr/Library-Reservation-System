import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../AppStyles'; // adjust the path if needed

function StudentManagement() {
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [buttonHover, setButtonHover] = useState(false);
  const [navHover, setNavHover] = useState([false, false, false, false]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student added: ${studentName}`);
    setStudentName('');
    setStudentId('');
    setEmail('');
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
          background: 'url("/images/background.jpg") center/cover no-repeat',
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
              Student Management
            </div>

            <div style={{
              ...styles.subText,
              color: '#fff',
              textShadow: '0 1px 8px rgba(0,0,0,0.35)',
              textAlign: 'center',
              marginBottom: '16px',
            }}>
              Add or manage students here.
            </div>

            <label style={{ ...styles.label, color: '#fff' }}>Student Name:</label>
            <input style={styles.input} value={studentName} onChange={e => setStudentName(e.target.value)} required />

            <label style={{ ...styles.label, color: '#fff' }}>Student ID:</label>
            <input style={styles.input} value={studentId} onChange={e => setStudentId(e.target.value)} required />

            <label style={{ ...styles.label, color: '#fff' }}>Email (@cit.edu):</label>
            <input
              type="email"
              style={styles.input}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              style={{
                ...styles.button,
                background: '#ffc107',
                color: '#222',
                fontWeight: 700,
                fontSize: '1.1rem',
                ...(buttonHover ? styles.buttonHover : {}),
                marginTop: '18px',
                marginBottom: '0',
              }}
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
            >
              Create Student
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default StudentManagement;
