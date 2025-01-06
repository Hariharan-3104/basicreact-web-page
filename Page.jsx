/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      constry });
      locaresponsesetawait axios.post('http://localhost:3000/api/auth/signin', { email, password }), response.data.token);
      navigateresponse.data.token Redirect to home page or protected route
    } catch (error) {
      setEcatch (error)('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Sign ={handleSubmit}>
        <div>
          <label>Email:</label>
          <="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            t     value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignIn;
*/
import React from 'react';
import './page.css';
const Page = () => {
  return (
    <div className="image-container">
      <img src="F:\react\frontend\src\assets\school image.avif" alt="Image 1" className="responsive-image" />
      <img src="F:\react\frontend\src\assets\download (2).jpg" alt="Image 2" className="responsive-image" />
      <img src="F:\react\frontend\src\assets\download (3).jpg" alt="Image 3" className="responsive-image" />
    </div>
  );
};
export default Page;