import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateUser = ({ users, setUsers, currentUserId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUserId !== null) {
      const user = users.find((user) => user._id === currentUserId);
      if (user) {
        setName(user.name);
        setEmail(user.email);
        setAddress(user.Address);
      }
    }
  }, [currentUserId, users]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email, Address };

    try {
      // Replace 'http://localhost:3000/api/' with your actual API endpoint
      const response = await axios.put(`http://localhost:3000/api/update/${currentUserId}`, updatedUser);
      if (response.status === 200) {
        const updatedUsers = users.map((user) =>
          user._id === currentUserId ? response.data.data : user
        );
        setUsers(updatedUsers);
        navigate('/'); // Redirect to Home page after successful update
      } else {
        console.error('Failed to update user:', response.status, response.data);
      }
    } catch (error) {
      console.error('There was an error updating the user!', error);
    }
  };

  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;