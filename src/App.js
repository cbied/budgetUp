import React from 'react';
import Register from './Components/auth/Register'
import Login from './Components/auth/Login'
import { HashRouter as Router } from 'react-router-dom'
import routes from './routes'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      
      {routes}

    </div>
    </Router>
  );
}

export default App;
