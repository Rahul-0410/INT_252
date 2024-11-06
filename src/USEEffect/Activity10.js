import React, { useState } from 'react';
import axios from 'axios';

const styles = {
    container: {
      width: '300px',
      margin: 'auto',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    input: {
      padding: '8px',
      width: '80%',
      marginBottom: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
    },
    button: {
      padding: '8px 16px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      marginTop: '10px',
    },
    userDetails: {
      marginTop: '10px',
      padding: '10px',
      borderRadius: '4px',
      backgroundColor: '#f9f9f9',
    },
  };

const UserDetails = () => {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const fetchUser = async () => {
    try {
      setError(''); 
      setUser(null); 
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setUser(response.data);
    } catch (err) {
      setError('User not found. Please enter a valid ID.');
    }
  };

  return (

    <div style={styles.container}>
      <h2>Fetch Details</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
        style={styles.input}
      />
      <button onClick={fetchUser} style={styles.button}>Fetch</button>
      
      {error && <p style={styles.error}>{error}</p>}
      {user && (
        <div style={styles.userDetails}>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>City:</strong> {user.address.city}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
