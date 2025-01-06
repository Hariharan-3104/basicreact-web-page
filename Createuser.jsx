import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = ({ users, setUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email, Address };

    try {
      // Replace 'http://localhost:3000/api/' with your actual API endpoint
      const response = await axios.post('http://localhost:3000/api/', newUser);
      if (response.status === 201) {
        console.log('User created:', response.data.message);
        setUsers([...users, response.data.message]);
        setName('');
        setEmail('');
        setAddress('');
      } else {
        console.error('Failed to create user:', response.status, response.data);
      }
    } catch (error) {
      console.error('There was an error creating the user!', error);
    }
  };

  return (
    <div>
      <h1>Create User</h1>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;