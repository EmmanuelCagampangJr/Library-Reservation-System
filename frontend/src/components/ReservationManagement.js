import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppStyles from '../AppStyles';

function ReservationManagement() {
  const [reservationName, setReservationName] = useState('');
  const [date, setDate] = useState('');
  const [buttonHover, setButtonHover] = useState(false);
  const [navHover, setNavHover] = useState([false, false, false, false]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation created for ${reservationName}`);
    setReservationName('');
    setDate('');
  };

  return (
    <div style={AppStyles.container}>
      {/* Navbar */}
      <nav style={AppStyles.nav}>
        <Link to="/" style={{ ...AppStyles.logo, textDecoration: 'none' }}>
          <img
            src="/book.png"
            alt="Logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
          Library Management System
        </Link>
        <div style={AppStyles.navLinks}>
          {["/students", "/reservations", "/bookings", "/equipment"].map((to, idx) => (
            <Link
              key={to}
              to={to}
              style={{
                ...AppStyles.navLink,
                ...(navHover[idx] ? AppStyles.navLinkHover : {})
              }}
              onMouseEnter={() => setNavHover(navHover.map((_, i) => i === idx))}
              onMouseLeave={() => setNavHover([false, false, false, false])}
            >
              {["Student Management", "Reservation Management", "Booking Management", "Equipment Management"][idx]}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <main style={AppStyles.main}>
        <div style={{
          ...AppStyles.imageContainer,
          background: 'url("/images/Wildcats.jpg") center/cover no-repeat',
          backgroundColor: 'rgba(255,255,255,0.95)',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '30px',
          borderRadius: '12px'
        }}>
          <form
            style={{
              ...AppStyles.formContainer,
              background: 'rgba(30,30,30,0.7)',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '25px',
              borderRadius: '12px'
            }}
            onSubmit={handleSubmit}
          >
            {/* Title */}
            <div style={{
              color: '#fff',
              textShadow: '0 2px 16px rgba(0,0,0,0.45)',
              fontSize: '2.2rem',
              textAlign: 'center',
              marginBottom: '12px'
            }}>
              Reservation Management
            </div>

            {/* Subtitle */}
            <div style={{
              color: '#fff',
              textShadow: '0 1px 8px rgba(0,0,0,0.35)',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              Reserve library resources here.
            </div>

            {/* Form Inputs */}
            <label style={{ ...AppStyles.label, color: '#fff', width: '100%' }}>Reservation Name:</label>
            <input
              style={AppStyles.input}
              value={reservationName}
              onChange={e => setReservationName(e.target.value)}
              required
            />

            <label style={{ ...AppStyles.label, color: '#fff', width: '100%' }}>Date:</label>
            <input
              type="date"
              style={AppStyles.input}
              value={date}
              onChange={e => setDate(e.target.value)}
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                ...AppStyles.button,
                background: '#ffc107',
                color: '#222',
                fontWeight: 700,
                fontSize: '1.1rem',
                ...(buttonHover ? AppStyles.buttonHover : {}),
                marginTop: '22px',
                alignSelf: 'center'
              }}
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
            >
              Create Reservation
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ReservationManagement;
