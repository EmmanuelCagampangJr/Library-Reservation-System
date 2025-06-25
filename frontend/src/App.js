import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

// Import components for each section
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';

import CreateReservation from './components/CreateReservation';
import ReservationList from './components/ReservationList';

import CreateBooking from './components/CreateBooking';
import BookingList from './components/BookingList';

import CreatePaymentMethod from './components/CreatePaymentMethod';

import CreateEquipment from './components/CreateEquipment';
import EquipmentList from './components/EquipmentList';

// Header Component (Reusable)
function Header() {
  return (
    <header className="header">
      <h1>LIC Management System</h1>
      <nav className="nav-buttons">
        <Link to="/">Home</Link>
        <Link to="/student-management">Student Management</Link>
        <Link to="/reservation-management">Reservation Management</Link>
        <Link to="/booking-management">Booking Management</Link>
        <Link to="/equipment-management">Equipment Management</Link>
      </nav>
    </header>
  );
}

// Home Page Component
function Home() {
  return (
    <div>
      <Header />
      <div className="home"
      style={{
        backgroundImage: "url('/homebg.jpg')", // Path to the image in the public folder (directly)
        backgroundSize: "cover", // Cover the section
        backgroundPosition: "center", // Center the image
        backgroundAttachment: "fixed", // Keep the background fixed while scrolling
        color: "white", // White text to stand out on the background
        minHeight: "100vh", // Ensure the section takes full height of the viewport
        padding: "4rem 2rem", // Padding for spacing
        textAlign: "center" // Centering text
      }}>
        <h2>Welcome to the LIC Management System</h2>
        <p>Select a section from the navigation bar to get started!</p>
      </div>
    </div>
  );
}

// Student Management Page with Options
function StudentManagement() {
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    if (choice === 'booking') {
      navigate('/booking-management');
    } else if (choice === 'reservation') {
      navigate('/reservation-management');
    }
  };

  return (
    <div>
      <Header />
      <h2>Student Management</h2>
      <CreateStudent />
      <StudentList />
      <h3>What would you like to do next?</h3>
      <button onClick={() => handleChoice('booking')}>Go to Booking</button>
      <button onClick={() => handleChoice('reservation')}>Go to Reservation</button>
    </div>
  );
}

// Reservation Management → Payment
function ReservationManagement() {
  const navigate = useNavigate();

  const goToPayment = () => {
    navigate('/payment-method-management');
  };

  return (
    <div>
      <Header />
      <h2>Reservation Management</h2>
      <CreateReservation />
      <ReservationList />
      <button onClick={goToPayment}>Proceed to Payment</button>
    </div>
  );
}

// Booking Management → Equipment → Payment
function BookingManagement() {
  const navigate = useNavigate();

  const goToEquipment = () => {
    navigate('/equipment-management');
  };

  return (
    <div>
      <Header />
      <h2>Booking Management</h2>
      <CreateBooking />
      <BookingList />
      <button onClick={goToEquipment}>Proceed to Equipment</button>
    </div>
  );
}

// Equipment Management → Payment
function EquipmentManagement() {
  const navigate = useNavigate();

  const goToPayment = () => {
    navigate('/payment-method-management');
  };

  return (
    <div>
      <Header />
      <h2>Equipment Management</h2>
      <CreateEquipment />
      <EquipmentList />
      <button onClick={goToPayment}>Proceed to Payment</button>
    </div>
  );
}

// Payment → Home
function PaymentMethodManagement() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <Header />
      <h2>Payment Method Management</h2>
      <CreatePaymentMethod />
      <button onClick={goToHome}>Return to Home</button>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-management" element={<StudentManagement />} />
          <Route path="/reservation-management" element={<ReservationManagement />} />
          <Route path="/booking-management" element={<BookingManagement />} />
          <Route path="/equipment-management" element={<EquipmentManagement />} />
          <Route path="/payment-method-management" element={<PaymentMethodManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
