import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteUser = ({ users, setUsers, currentUserId }) => {
  const [id, setId] = useState(currentUserId || '');

  useEffect(() => {
    if (currentUserId) {
      setId(currentUserId);
    }
  }, [currentUserId]);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      // Replace 'http://localhost:3000/api/' with your actual API endpoint
      const response = await axios.delete(`http://localhost:3000/api/delete/${id}`);
      if (response.status === 200) {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
        setId('');
      } else {
        console.error('Failed to delete user:', response.status, response.data);
      }
    } catch (error) {
      console.error('There was an error deleting the user!', error);
    }
  };

  return (
    <div>
      <h1>Delete User</h1>
      <form onSubmit={handleDelete}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteUser;