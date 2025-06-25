import React, { useState } from 'react';
import axios from 'axios';

function CreateEquipment() {
  const [equipmentData, setEquipmentData] = useState({
    name: '',
    quantity: 1,
    type: '',
  });
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/equipments/createEquipment', equipmentData)
      .then(response => {
        setMessage('Equipment created successfully!');
        setEquipmentData({
          name: '',
          quantity: 1,
          type: '',
        });
      })
      .catch(error => {
        setMessage('Error creating equipment');
        console.error(error);
      });
  };

  return (
    <div
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "2rem",
        color: "#333",
      }}
    >
      <h2>Create Equipment</h2>
      <form onSubmit={handleSubmit}>
        <label>Equipment Name:</label>
        <input
          type="text"
          placeholder="Enter Equipment Name"
          value={equipmentData.name}
          onChange={(e) => setEquipmentData({ ...equipmentData, name: e.target.value })}
          required
        />
        <br />
        <label>Equipment Quantity:</label>
        <input
          type="number"
          placeholder="Enter Equipment Quantity"
          value={equipmentData.quantity}
          onChange={(e) => setEquipmentData({ ...equipmentData, quantity: parseInt(e.target.value) })}
          min="1"
          required
        />
        <br />
        <label>Equipment Type:</label>
        <input
          type="text"
          placeholder="Enter Equipment Type"
          value={equipmentData.type}
          onChange={(e) => setEquipmentData({ ...equipmentData, type: e.target.value })}
          required
        />
        <br />
        <button
          type="submit"
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Create Equipment
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateEquipment;
