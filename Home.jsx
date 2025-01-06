/*import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = ({ users, setUsers, setCurrentUserId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/api/find')
      .then(result => {
        console.log(result.data.message);
        setUsers(result.data.message);
      })
      .catch(err => {
        console.error('Error fetching users:', err);
      });
  }, [setUsers]);

  const handleUpdateClick = (id) => {
    setCurrentUserId(id);
    navigate('/updateuser');
  };

  const handleDeleteClick = (id) => {
    setCurrentUserId(id);
    navigate('/deleteuser');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/createuser">Create User</Link>
          </li>
        </ul>
      </nav>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.Address}</td>
              <td>
                <button onClick={() => handleUpdateClick(user._id)}>Update</button>
                <button onClick={() => handleDeleteClick(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
*/
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the protected home page!</p>
    </div>
  );
};

export default Home;