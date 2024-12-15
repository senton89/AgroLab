// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // Define the test user object
    const testUser  = {
        id: 1,
        name: 'test',
        surname: 'test',
        patronymic: 'test', // Corrected the spelling from 'patronicname' to 'patronymic'
        login: "test",
        email: "test@example.com", // Added a valid email format
        role: 'admin'
    };

    // Store the test user in localStorage as a JSON string
    localStorage.setItem('user', JSON.stringify(testUser));

    // Retrieve the user from localStorage and parse it
    const user = JSON.parse(localStorage.getItem('user')); // Check if user exists in localStorage

    // Check if user is null or undefined
    if (!user) {
        return <Navigate to="/login" />; // Redirect to login if user is not found
    }

    return children; // Render the children if user exists
};

export default ProtectedRoute;