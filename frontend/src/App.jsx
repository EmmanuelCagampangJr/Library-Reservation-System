import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './components/HomePage';
import StudentManagement from './components/StudentManagement';
import ReservationManagement from './components/ReservationManagement';
import BookingManagement from './components/BookingManagement';
import EquipmentManagement from './components/EquipmentManagement';
import Login from './components/Login';
import Signup from './components/Signup';

// Protect private routes
const PrivateRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected */}
        <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
        <Route path="/students" element={<PrivateRoute element={<StudentManagement />} />} />
        <Route path="/reservations" element={<PrivateRoute element={<ReservationManagement />} />} />
        <Route path="/bookings" element={<PrivateRoute element={<BookingManagement />} />} />
        <Route path="/equipment" element={<PrivateRoute element={<EquipmentManagement />} />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
