import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>
      <button onClick={() => navigate('/timetable')}>Generate Timetable</button>
      <button className="logout-btn" onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
