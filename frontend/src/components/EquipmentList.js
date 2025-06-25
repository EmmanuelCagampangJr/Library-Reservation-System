import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EquipmentList = () => {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    fetchEquipment();
  }, []);

  const fetchEquipment = async () => {
    const response = await axios.get('/equipments/getAllEquipments');
    setEquipment(response.data);
  };

  const updateEquipment = async (id, updatedDetails) => {
    await axios.put(`/equipments/updateEquipment/${id}`, updatedDetails);
    fetchEquipment();
  };

  const deleteEquipment = async (id) => {
    await axios.delete(`/equipments/deleteEquipment/${id}`);
    fetchEquipment();
  };

  const styles = {
    container: {
      padding: '2rem',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
    },
    equipmentList: {
      listStyleType: 'none',
      padding: 0,
    },
    equipmentItem: {
      marginBottom: '1rem',
      padding: '1rem',
      border: '1px solid #ddd',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
    },
    button: {
      marginRight: '0.5rem',
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    increaseButton: {
      backgroundColor: 'green',
      color: 'white',
    },
    deleteButton: {
      backgroundColor: 'red',
      color: 'white',
    },
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
    <div style={styles.container}>
      <h2>Equipment List</h2>
      <ul style={styles.equipmentList}>
        {equipment.map((item) => (
          <li key={item.equipmentId} style={styles.equipmentItem}>
            <p>
              <strong>Name:</strong> {item.name}
            </p>
            <p>
              <strong>Quantity:</strong> {item.quantity}
            </p>
            <p>
              <strong>Type:</strong> {item.type}
            </p>
            <button
              onClick={() =>
                updateEquipment(item.equipmentId, { ...item, quantity: item.quantity + 1 })
              }
              style={{ ...styles.button, ...styles.increaseButton }}
            >
              Increase Quantity
            </button>
            <button
              onClick={() => deleteEquipment(item.equipmentId)}
              style={{ ...styles.button, ...styles.deleteButton }}
            >
              Delete Equipment
            </button>
          </li>
        ))}
      </ul>
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
            <p>Cajegas, Angelo</p>
            <p>Tesaluna, Josh</p>
            <p>Basalo, Michael</p>
            <p>Paquero, Ronan</p>
            <p>Cagampang, Emmanuel</p>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>© 2020 TeknoLib. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EquipmentList;
