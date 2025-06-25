import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        const response = await axios.get('/bookings/getAllBookings');
        setBookings(response.data);
    };

    const updateBooking = async (id, updatedDetails) => {
        await axios.put(`/bookings/updateBooking/${id}`, updatedDetails);
        fetchBookings(); // Refresh bookings
    };

    const deleteBooking = async (id) => {
        await axios.delete(`/bookings/deleteBooking/${id}`);
        fetchBookings(); // Refresh bookings
    };

    const formatDateTime = (dateString, timeString) => {
        const date = new Date(dateString);
        const time = new Date(`1970-01-01T${timeString}`);
        
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);
        
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        const formattedHours = hours % 12 || 12; // Convert to 12-hour format
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Add leading zero if needed
        
        return `${formattedDate} at ${formattedHours}:${formattedMinutes} ${ampm}`;
    };

    const styles = {
        footer: {
            backgroundColor: '#2e2e2e',
            color: '#ffffff',
            padding: '20px 0',
            marginTop: '40px',
        },
        footerSection: {
            padding: '10px 20px',
            flex: '1',
            textAlign: 'left',
        },
        footerTitle: {
            fontSize: '1.2rem',
            marginBottom: '10px',
            color: '#ffcc00',
        },
        footerBottom: {
            marginTop: '20px',
            textAlign: 'center',
            borderTop: '1px solid #444',
            paddingTop: '10px',
            fontSize: '0.8rem',
            color: '#cccccc',
        },
    };

    return (
        <div>
            <h1>Booking System</h1>

            <h2>Current Bookings</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.bookingId}>
                        <p><strong>Name:</strong> {booking.name}</p>
                        <p><strong>Contact Number:</strong> {booking.contactNumber}</p>
                        <p><strong>Email:</strong> {booking.email}</p>
                        <p><strong>Payment Amount:</strong> {`pesos ${booking.paymentAmount}`}</p>
                        <p><strong>Start Time:</strong> {formatDateTime(booking.bookingDate, booking.startTime)}</p>
                        <p><strong>End Time:</strong> {formatDateTime(booking.bookingDate, booking.endTime)}</p>
                        <p><strong>Status:</strong> {booking.status}</p>
                        <button onClick={() => updateBooking(booking.bookingId, { ...booking, status: 'Completed' })}>
                            Mark as Completed
                        </button>
                        <button onClick={() => deleteBooking(booking.bookingId)}>
                            Delete Booking
                        </button>
                    </li>
                ))}
            </ul>

            {/* Footer Section */}
            <footer style={styles.footer}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div style={styles.footerSection}>
                        <h3 style={styles.footerTitle}>TeknoLib</h3>
                        <p>Contact us</p>
                        <p>Email: TeknoLib@gmail.com</p>
                        <p>Phone: +1-2345-6789</p>
                        <p>Address: Cebu Institute of Technology University</p>
                    </div>
                    <div style={styles.footerSection}>
                        <h3 style={styles.footerTitle}>Products</h3>
                        <p>Booking</p>
                        <p>Fermentum turpis</p>
                        <p>Mi consequat</p>
                        <p>Convallis porttitor</p>
                    </div>
                    <div style={styles.footerSection}>
                        <h3 style={styles.footerTitle}>About Us</h3> 
                        <p>Bebiro, Ryan</p>
                        <p>Cagampang, Emmanuel</p>
                        <p>Jumawan, Clyde</p>
                    </div>
                </div>
                <div style={styles.footerBottom}>
                    <p>© 2020 TeknoLib. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default BookingList;
