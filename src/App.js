import React, { useEffect } from 'react';

import Register from './Components/auth/Register';
import Login from './Components/auth/Login';
import Dashboard from './Components//Dashboard/Dashboard'

import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';

import { connect } from 'react-redux'
import Axios from 'axios'

import './App.css';

function App(props) {

  useEffect(() => {
    Axios
      .get('/auth/session')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(props)
  return (
    <Router>
      
      {routes}

      {
        !props.user_data ?
        <Login />
        :
        <Dashboard />
      }

    </Router>
  );
}

function mapStateToProps(state) {
  const { user_data } = state
  return { user_data }
}

export default connect(mapStateToProps)(App);
