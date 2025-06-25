import React, { useState } from 'react';

import axios from 'axios';
 
function CreateBooking() {

  const [bookingData, setBookingData] = useState({

    bookingDate: '',

    duration: 1,

    name: '',

    contactNumber: '',

    email: '',

    paymentAmount: 0,

    startTime: '',

    endTime: '',

    status: 'Upcoming',

    bookingType: '',

  });

  const [message, setMessage] = useState('');
 
  const handleSubmit = (event) => {

    event.preventDefault();
 
    // Validate the email domain

    if (!bookingData.email.endsWith('@cit.edu')) {

      setMessage('Invalid email domain. Use @cit.edu email.');

      return;

    }
 
    axios.post('/bookings/createBooking', bookingData)

      .then(() => {

        setMessage('Booking created successfully!');

        setBookingData({

          bookingDate: '',

          duration: 1,

          name: '',

          contactNumber: '',

          email: '',

          paymentAmount: 0,

          startTime: '',

          endTime: '',

          status: 'Upcoming',

          bookingType: '',

        });

      })

      .catch(() => {

        setMessage('Error creating booking');

      });

  };
 
  const styles = {

    container: {

      backgroundImage: "url('/bookingbg.jpg')",

      backgroundSize: 'cover',

      backgroundPosition: 'center',

      minHeight: '100vh',

      display: 'flex',

      justifyContent: 'center',

      alignItems: 'center',

      color: 'white',

    },

    formContainer: {

      backgroundColor: 'rgba(0, 0, 0, 0.8)',

      padding: '30px',

      borderRadius: '10px',

      width: '450px', // Updated to make it look proportional

      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',

    },

    label: {

      fontSize: '0.9rem',

      color: '#ccc',

      marginBottom: '5px',

      display: 'block',

    },

    input: {

      width: '100%',

      padding: '10px',

      marginBottom: '15px',

      borderRadius: '5px',

      border: '1px solid #ccc',

    },

    button: {

      width: '100%',

      padding: '12px',

      backgroundColor: '#ffa500',

      color: 'white',

      border: 'none',

      borderRadius: '5px',

      cursor: 'pointer',

      marginTop: '10px',

    },

    buttonHover: {

      backgroundColor: '#cc8400',

    },

    message: {

      marginTop: '15px',

      color: '#4caf50',

      textAlign: 'center',

    },

  };
 
  return (
<div style={styles.container}>
<div style={styles.formContainer}>
<h2>Create Booking</h2>
<p>
<strong>Function:</strong> This function allows users to create a new booking.
</p>
<form onSubmit={handleSubmit}>
<label style={styles.label}>UserName:</label>
<input

            type="text"

            placeholder="UserName"

            value={bookingData.name}

            onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}

            style={styles.input}

            required

          />
<label style={styles.label}>Contact Number:</label>
<input

            type="tel"

            placeholder="Enter Contact Number"

            value={bookingData.contactNumber}

            onChange={(e) => setBookingData({ ...bookingData, contactNumber: e.target.value })}

            style={styles.input}

            required

          />
<label style={styles.label}>Email (@cit.edu only):</label>
<input

            type="email"

            placeholder="Enter Email"

            value={bookingData.email}

            onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}

            style={styles.input}

            required

          />
<label style={styles.label}>Payment Amount:</label>
<input

            type="number"

            placeholder="Enter Payment Amount"

            value={bookingData.paymentAmount}

            onChange={(e) => setBookingData({ ...bookingData, paymentAmount: parseFloat(e.target.value) })}

            style={styles.input}

            min="0"

            required

          />
<label style={styles.label}>Booking Date:</label>
<input

            type="date"

            value={bookingData.bookingDate}

            onChange={(e) => setBookingData({ ...bookingData, bookingDate: e.target.value })}

            style={styles.input}

            required

          />
<label style={styles.label}>Time to Come In:</label>
<input

            type="time"

            value={bookingData.startTime}

            onChange={(e) => setBookingData({ ...bookingData, startTime: e.target.value })}

            style={styles.input}

            required

          />
<label style={styles.label}>Time to End Out:</label>
<input

            type="time"

            value={bookingData.endTime}

            onChange={(e) => setBookingData({ ...bookingData, endTime: e.target.value })}

            style={styles.input}

            required

          />
<label style={styles.label}>Booking Type:</label>
<select

            value={bookingData.bookingType}

            onChange={(e) => setBookingData({ ...bookingData, bookingType: e.target.value })}

            style={styles.input}

            required
>
<option value="" disabled>Select Booking Type</option>
<option value="Room">Room</option>
<option value="Equipment">Equipment</option>
<option value="Event">Event</option>
<option value="Other">Other</option>
</select>
<button

            type="submit"

            style={styles.button}

            onMouseEnter={(e) => (e.target.style.backgroundColor = '#cc8400')}

            onMouseLeave={(e) => (e.target.style.backgroundColor = '#ffa500')}
>

            Create Booking
</button>
</form>

        {message && <p style={styles.message}>{message}</p>}
</div>
</div>

  );

}
 
export default CreateBooking;

 