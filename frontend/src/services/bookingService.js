// frontend/src/services/bookingService.js

// Original backend integration code (COMMENTED OUT for frontend-only demo):
/*
import axios from 'axios';

const createBooking = (booking) => {
  return axios.post('/bookings/createBooking', booking);
};

const getAllBookings = () => {
  return axios.get('/bookings/getAllBookings');
};

const updateBooking = (id, updatedDetails) => {
  return axios.put(`/bookings/updateBooking/${id}`, updatedDetails);
};

const deleteBooking = (id) => {
  return axios.delete(`/bookings/deleteBooking/${id}`);
};

export { createBooking, getAllBookings, updateBooking, deleteBooking };
*/

// Mock Data Implementation (ACTIVE for frontend-only demo):

// Define your mock data here for demonstration purposes
// This data will be used by your frontend instead of making API calls
let mockBookings = [
    { bookingId: 1, studentId: 'S001', equipmentId: 'EQ001', bookingDate: '2025-07-01', startTime: '10:00', endTime: '11:00', status: 'Confirmed' },
    { bookingId: 2, studentId: 'S002', equipmentId: 'EQ003', bookingDate: '2025-07-02', startTime: '14:00', endTime: '15:30', status: 'Pending' },
    { bookingId: 3, studentId: 'S001', equipmentId: 'EQ002', bookingDate: '2025-07-03', startTime: '09:00', endTime: '10:00', status: 'Cancelled' },
];

// Modify each function to return mock data using Promises to simulate async operations
// These functions will now work entirely on the frontend without backend interaction
export const getAllBookings = async () => {
    console.log("Fetching mock booking data...");
    // Simulate a network delay for a more realistic feel
    return new Promise(resolve => setTimeout(() => resolve([...mockBookings]), 500)); // Return a copy of mock data
};

export const createBooking = async (bookingData) => {
    console.log("Creating mock booking:", bookingData);
    return new Promise(resolve => setTimeout(() => {
        // Generate a new ID for the mock booking
        const newId = Math.max(...mockBookings.map(b => b.bookingId)) + 1;
        const newBooking = { ...bookingData, bookingId: newId };
        mockBookings.push(newBooking); // Add the new mock booking to the array
        resolve(newBooking); // Resolve with the newly created mock booking
    }, 500));
};

export const updateBooking = async (id, bookingData) => {
    console.log(`Updating mock booking with ID ${id}:`, bookingData);
    return new Promise(resolve => setTimeout(() => {
        const index = mockBookings.findIndex(b => b.bookingId === id);
        if (index > -1) {
            // Update the existing mock booking
            mockBookings[index] = { ...mockBookings[index], ...bookingData, bookingId: id };
            resolve(mockBookings[index]); // Resolve with the updated mock booking
        } else {
            resolve(null); // Resolve with null if mock booking not found
        }
    }, 500));
};

export const deleteBooking = async (id) => {
    console.log(`Deleting mock booking with ID ${id}`);
    return new Promise(resolve => setTimeout(() => {
        const initialLength = mockBookings.length;
        mockBookings = mockBookings.filter(b => b.bookingId !== id); // Filter out the deleted mock booking
        // Resolve with true if a booking was actually removed, false otherwise
        resolve(initialLength > mockBookings.length);
    }, 500));
};
