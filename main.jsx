/*import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import Apps from './Apps';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps />
  </StrictMode>
);
*/

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Signin.jsx';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page.jsx';

const App = () => {
  return (
    <div>
      <Page />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));