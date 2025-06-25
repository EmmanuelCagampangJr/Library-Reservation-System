import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
 
  useEffect(() => {
    fetchReservations();
  }, []);
 
  const fetchReservations = async () => {
    const response = await axios.get('/reservations/getAllReservations');
    setReservations(response.data);
  };
 
  const deleteReservation = async (id) => {
    await axios.delete(`/reservations/deleteReservation/${id}`);
    fetchReservations();
  };
 
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };
 
  const formatTime = (timeString) => {
    const time = new Date(`1970-01-01T${timeString}`);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };
 
  return (
<div>
<div className="reservation-list-container">
<h2>Current Bookings</h2>
<ul>
          {reservations.map((reservation) => (
<li key={reservation.reservationId} className="reservation-card">
<p><strong>Date:</strong> {formatDate(reservation.reservationDate)}</p>
<p><strong>Time:</strong> {formatTime(reservation.startTime)}</p>
<button onClick={() => deleteReservation(reservation.reservationId)} className="delete-button">
                Delete
</button>
</li>
          ))}
</ul>
</div>
 
      <footer className="footer">
<div className="footer-section">
<h3>TeknoLib</h3>
<p>Contact us</p>
<p>Email: TeknoLib@gmail.com</p>
<p>Phone: +1-2345-6789</p>
<p>Address: Cebu Institute of Technology University</p>
</div>
 
        <div className="footer-section">
<h3>Products</h3>
<p>Booking</p>
<p>Fermentum turpis</p>
<p>Mi consequat</p>
<p>Convallis porttitor</p>
</div>
 
        <div className="footer-section">
<h3>About Us</h3>
<p>Bebiro, Ryan</p>
<p>Cagampang, Emmanuel</p>
<p>Jumawan, Clyde</p>
</div>
 
        <div className="footer-bottom">
<p>© 2020 TeknoLib. All rights reserved.</p>
</div>
</footer>
 
      <style>{`
        .reservation-list-container {
          background-color: rgba(255, 255, 255, 0.9);
          padding: 30px;
          border-radius: 10px;
          width: 50%;
          margin: auto;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
 
        h2 {
          color: #333;
          margin-bottom: 20px;
          font-size: 1.8em;
        }
 
        ul {
          list-style: none;
          padding: 0;
        }
 
        .reservation-card {
          background-color: #fff;
          padding: 20px;
          margin: 10px 0;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }
 
        .reservation-card:hover {
          transform: scale(1.02);
        }
 
        .delete-button {
          background-color: #e63946;
          color: #fff;
          border: none;
          padding: 8px 15px;
          cursor: pointer;
          border-radius: 5px;
          font-size: 1em;
          transition: background-color 0.3s;
        }
 
        .delete-button:hover {
          background-color: #c53030;
        }
 
        .footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          background-color: #404040;
          padding: 40px 20px;
          color: #fff;
          margin-top: 50px;
        }
 
        .footer-section {
          flex: 1;
          min-width: 200px;
          margin: 10px;
        }
 
        .footer-section h3 {
          font-size: 1.3em;
          margin-bottom: 10px;
          color: #ffb703;
        }
 
        .footer-section p {
          margin: 0;
          color: #ccc;
        }
 
        .footer-bottom {
          text-align: center;
          width: 100%;
          margin-top: 20px;
          border-top: 1px solid #444;
          padding-top: 10px;
          color: #ccc;
          font-size: 0.9em;
        }
 
        .footer-bottom p {
          margin: 0;
        }
      `}</style>
</div>
  );
};
 
export default ReservationList;