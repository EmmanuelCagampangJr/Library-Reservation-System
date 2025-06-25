import React, { useState } from "react";
import axios from "axios";

function CreateReservation() {
  const [reservationData, setReservationData] = useState({
    reservationDate: "",
    reservationTime: "",
    status: "Pending",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/reservations/createReservation", reservationData)
      .then((response) => {
        setMessage("Reservation created successfully!");
        setReservationData({
          reservationDate: "",
          reservationTime: "",
          status: "Pending",
        });
      })
      .catch((error) => {
        setMessage("Error creating reservation");
        console.error(error);
      });
  };

  return (
    <div className="create-reservation-container">
      <h2>Create Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>Reservation Date:</label>
        <input
          type="date"
          value={reservationData.reservationDate}
          onChange={(e) =>
            setReservationData({
              ...reservationData,
              reservationDate: e.target.value,
            })
          }
          required
        />

        <label>Reservation Time:</label>
        <input
          type="time"
          value={reservationData.reservationTime}
          onChange={(e) =>
            setReservationData({
              ...reservationData,
              reservationTime: e.target.value,
            })
          }
          required
        />

        <button type="submit">Create Reservation</button>
      </form>
      {message && <p className="message">{message}</p>}

      {/* Inline CSS for preview purposes */}
      <style>{`
        .create-reservation-container {
          background-image: url('/Wildcats.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          min-height: 100vh;
          font-family: Arial, sans-serif;
          color: #fff;
        }

        h2 {
          background-color: rgba(0, 0, 0, 0.0);
          color: #fffff;
          padding: 10px 20px;
          border-radius: 8px;
          margin-bottom: 30px;
        }

        form {
          background-color: rgba(0, 0, 0, 0.2);
          padding: 30px;
          border-radius: 10px;
          width: 100%;
          max-width: 500px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        label {
          display: block;
          font-weight: bold;
          margin-bottom: 8px;
          color: #fff;
          width: 100%;
          text-align: left;
        }

        input {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border: none;
          border-radius: 5px;
          outline: none;
          font-size: 1em;
        }

        button {
          background-color: #ffb703;
          color: #fff;
          border: none;
          padding: 12px 24px;
          cursor: pointer;
          border-radius: 5px;
          font-size: 1.1em;
          transition: background-color 0.3s;
          width: 100%;
        }

        button:hover {
          background-color: #e69902;
        }

        .message {
          margin-top: 20px;
          font-size: 1em;
          padding: 10px 20px;
          border-radius: 8px;
          background-color: rgba(0, 128, 0, 0.7);
          color: #fff;
        }
      `}</style>
    </div>
  );
}

export default CreateReservation;
