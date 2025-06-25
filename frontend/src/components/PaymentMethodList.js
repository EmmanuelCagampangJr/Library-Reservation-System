import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const PaymentMethodList = () => {
    const [paymentMethods, setPaymentMethods] = useState([]);
 
    useEffect(() => {
        fetchPaymentMethods();
    }, []);
 
    const fetchPaymentMethods = async () => {
        try {
            const response = await axios.get('/paymentMethods/getAllPaymentMethods');
            setPaymentMethods(response.data);
        } catch (error) {
            console.error('Error fetching payment methods:', error);
        }
    };
 
    const updatePaymentMethod = async (id, updatedDetails) => {
        try {
            await axios.put(`/paymentMethods/updatePaymentMethod/${id}`, updatedDetails);
            fetchPaymentMethods(); // Refresh payment methods
        } catch (error) {
            console.error('Error updating payment method:', error);
        }
    };
 
    const deletePaymentMethod = async (id) => {
        try {
            await axios.delete(`/paymentMethods/deletePaymentMethod/${id}`);
            fetchPaymentMethods(); // Refresh payment methods
        } catch (error) {
            console.error('Error deleting payment method:', error);
        }
    };
 
    const styles = {
        container: {
            padding: '20px',
            backgroundColor: '#FFF8DC',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            maxWidth: '1900px',
            margin: 'auto'
        },
        header: {
            color: '#8C363C',
            textAlign: 'center',
            marginBottom: '20px'
        },
        list: {
            listStyle: 'none',
            padding: 0
        },
        item: {
            backgroundColor: '#FFF',
            marginBottom: '15px',
            padding: '15px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        },
        buttonDeactivate: {
            backgroundColor: '#FFA07A',
            color: '#FFF',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px'
        },
        buttonDelete: {
            backgroundColor: '#DC143C',
            color: '#FFF',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }
    };
 
    return (
<div style={styles.container}>
<h1 style={styles.header}>Payment Methods</h1>
<ul style={styles.list}>
                {paymentMethods.map(paymentMethod => (
<li key={paymentMethod.paymentMethodId} style={styles.item}>
<p><strong>Payment Amount:</strong> {`₱${paymentMethod.paymentAmount.toFixed(2)}`}</p>
<p><strong>Payment Date:</strong> {new Date(paymentMethod.paymentDate).toLocaleDateString()}</p>
<button style={styles.buttonDeactivate} onClick={() => updatePaymentMethod(paymentMethod.paymentMethodId, { ...paymentMethod, status: 'Inactive' })}>
                            Deactivate
</button>
<button style={styles.buttonDelete} onClick={() => deletePaymentMethod(paymentMethod.paymentMethodId)}>
                            Delete Payment Method
</button>
</li>
                ))}
</ul>
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
<p>Cajegas, Angelo</p>
<p>Tesaluna, Josh</p>
<p>Basalo, Michael</p>
<p>Paquero, Ronan</p>
<p>Cagampang, Emmanuel</p>
</div>
<div className="footer-bottom">
<p>© 2020 TeknoLib. All rights reserved.</p>
</div>
</footer>
 
            <style>{`
                .footer {
                    display: flex;
                    justify-content: space-around;
                    background-color: #404040;
                    padding: 40px 20px;
                    color: #fff;
                    margin-top: 50px;
                }
 
                .footer-section {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
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
                    margin-top: 20px;
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
 
export default PaymentMethodList;