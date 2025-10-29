import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/name', {
          headers: { Authorization: token },
        });
        setData(response.data);
      } catch (error) {
        if (error.response?.status === 401) {
          // Token invalid or expired, redirect to login
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          navigate('/login');
        } else {
          setMessage(error.response?.data?.message || 'Failed to fetch data');
        }
      }
    };
    if (token) fetchData();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome, {user.name}!</p>
      {data ? (
        <div>
          <h3>Protected Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {message && <p>{message}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;