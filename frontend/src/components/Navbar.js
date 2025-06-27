import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  background: '#fff',
  padding: '15px 20px',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  marginBottom: '20px',
  flexWrap: 'wrap',
};

const linkStyle = {
  textDecoration: 'none',
  backgroundColor: '#800000',
  color: '#fff',
  padding: '10px 15px',
  borderRadius: '20px',
  fontSize: '14px',
  fontWeight: 'bold',
};

function Navbar() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/students" style={linkStyle}>Student</Link>
      <Link to="/reservations" style={linkStyle}>Reservation</Link>
      <Link to="/bookings" style={linkStyle}>Booking</Link>
      <Link to="/equipment" style={linkStyle}>Equipment</Link>
    </nav>
  );
}

export default Navbar;
