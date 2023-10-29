import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [userData, setUserData] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
  });

  const [statistics, setStatistics] = useState({
    totalUsers: 1000,
    totalOrders: 5000,
    totalRevenue: '$50,000',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get('');
        const apiData = response.data; 
        setUserData(apiData.user);
        setStatistics(apiData.statistics);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-welcome">Welcome, {userData.username}!</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h2>Total Blogers</h2>
          <p>{statistics.totalUsers}</p>
        </div>
        <div className="stat-card">
          <h2>Total Blogs</h2>
          <p>{statistics.totalOrders}</p>
        </div>
        <div className="stat-card">
          <h2>Total Revenue</h2>
          <p>{statistics.totalRevenue}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;