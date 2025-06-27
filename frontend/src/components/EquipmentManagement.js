import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../AppStyles';

function EquipmentManagement() {
  const [equipmentName, setEquipmentName] = useState('');
  const [equipmentType, setEquipmentType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [buttonHover, setButtonHover] = useState(false);
  const [navHover, setNavHover] = useState([false, false, false, false]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Equipment added: ${equipmentName} (${equipmentType})`);
    setEquipmentName('');
    setEquipmentType('');
    setQuantity('');
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
          background: 'url("/images/Studentbg.jpg") center/cover no-repeat',
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
              color: '#fff',
              textShadow: '0 2px 16px rgba(0,0,0,0.45)',
              fontSize: '2.2rem',
              textAlign: 'center',
              marginBottom: '12px'
            }}>
              Equipment Management
            </div>

            <div style={{
              ...styles.subText,
              color: '#fff',
              textShadow: '0 1px 8px rgba(0,0,0,0.35)',
              textAlign: 'center',
              marginBottom: '16px',
            }}>
              Manage library equipment here.
            </div>

            <label style={{ ...styles.label, color: '#fff' }}>Equipment Name:</label>
            <input
              style={styles.input}
              value={equipmentName}
              onChange={e => setEquipmentName(e.target.value)}
              required
            />

            <label style={{ ...styles.label, color: '#fff' }}>Equipment Type:</label>
            <input
              style={styles.input}
              value={equipmentType}
              onChange={e => setEquipmentType(e.target.value)}
              required
            />

            <label style={{ ...styles.label, color: '#fff' }}>Quantity:</label>
            <input
              type="number"
              style={styles.input}
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              required
            />

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
              Add Equipment
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default EquipmentManagement;
