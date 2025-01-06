/*import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import CreateUser from './Createuser.jsx';
import UpdateUser from './Updateuser.jsx';
import DeleteUser from './DeleteUser.jsx';
import Signin from'./Signin.jsx';
const Apps = () => {
  const [users, setUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home users={users} setUsers={setUsers} setCurrentUserId={setCurrentUserId} />} />
          <Route path="/createuser" element={<CreateUser users={users} setUsers={setUsers} />} />
          <Route path="/updateuser" element={<UpdateUser users={users} setUsers={setUsers} currentUserId={currentUserId} />} />
          <Route path="/deleteuser" element={<DeleteUser users={users} setUsers={setUsers} currentUserId={currentUserId} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Apps;
*/
import React from 'react';
import Page from './Page';
import './Page.css';
const Apps = () => {
  return (
    <div>
      <Page />
    </div>
  );
};
export default Apps;
