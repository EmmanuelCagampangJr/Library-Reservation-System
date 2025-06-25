import React, { useState } from 'react';
import axios from 'axios';
 
function CreatePaymentMethod() {
  const [paymentData, setPaymentData] = useState({
    paymentAmount: 0,
    paymentDate: '',
  });
  const [message, setMessage] = useState('');
 
  const handleSubmit = (event) => {
    event.preventDefault();
 
    // Validate payment amount (it should be positive)
    if (paymentData.paymentAmount <= 0) {
      setMessage('Payment amount must be greater than zero.');
      return;
    }
 
    // Validate payment date
    if (!paymentData.paymentDate) {
      setMessage('Please select a valid payment date.');
      return;
    }
 
    axios.post('/paymentMethods/createPaymentMethod', paymentData)
      .then(response => {
        setMessage('Payment method created successfully!');
        setPaymentData({
          paymentAmount: 0,
          paymentDate: '',
        });
      })
      .catch(error => {
        setMessage('Error creating payment method');
        console.error(error);
      });
  };
 
  const styles = {
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#FFF8DC',
      padding: '20px',
      borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: 'auto'
    },
    formTitle: {
      color: '#8C363C',
      marginBottom: '20px'
    },
    formLabel: {
      fontWeight: 'bold',
      marginBottom: '5px'
    },
    inputField: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '5px',
      border: '1px solid #C0C0C0'
    },
    submitBtn: {
      backgroundColor: '#8C363C',
      color: '#FFF',
      padding: '12px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      width: '100%'
    },
    formMessage: {
      color: '#8C363C',
      marginTop: '15px'
    }
  };
 
  return (
<div style={styles.formContainer}>
<h2 style={styles.formTitle}>Create Payment Method</h2>
<form onSubmit={handleSubmit}>
<label style={styles.formLabel}>Payment Amount:</label>
<input
          type="number"
          placeholder="Enter Payment Amount"
          value={paymentData.paymentAmount}
          onChange={(e) => setPaymentData({ ...paymentData, paymentAmount: parseFloat(e.target.value) })}
          min="0"
          required
          style={styles.inputField}
        />
<label style={styles.formLabel}>Payment Date:</label>
<input
          type="date"
          value={paymentData.paymentDate}
          onChange={(e) => setPaymentData({ ...paymentData, paymentDate: e.target.value })}
          required
          style={styles.inputField}
        />
<button type="submit" style={styles.submitBtn}>Create Payment Method</button>
</form>
      {message && <p style={styles.formMessage}>{message}</p>}
</div>
  );
}
 
export default CreatePaymentMethod;