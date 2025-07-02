import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './components/HomePage';
import StudentManagement from './components/StudentManagement';
import ReservationManagement from './components/ReservationManagement';
import BookingManagement from './components/BookingManagement';
import EquipmentManagement from './components/EquipmentManagement';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

// Protect private routes
const PrivateRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? element : <Navigate to="/login" />;
};

// Layout component for protected routes
const ProtectedLayout = ({ children }) => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 100%)',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <Navbar />
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes with Layout */}
        <Route path="/" element={
          <PrivateRoute 
            element={
              <ProtectedLayout>
                <HomePage />
              </ProtectedLayout>
            } 
          />
        } />
        <Route path="/students" element={
          <PrivateRoute 
            element={
              <ProtectedLayout>
                <StudentManagement />
              </ProtectedLayout>
            } 
          />
        } />
        <Route path="/reservations" element={
          <PrivateRoute 
            element={
              <ProtectedLayout>
                <ReservationManagement />
              </ProtectedLayout>
            } 
          />
        } />
        <Route path="/bookings" element={
          <PrivateRoute 
            element={
              <ProtectedLayout>
                <BookingManagement />
              </ProtectedLayout>
            } 
          />
        } />
        <Route path="/equipment" element={
          <PrivateRoute 
            element={
              <ProtectedLayout>
                <EquipmentManagement />
              </ProtectedLayout>
            } 
          />
        } />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;