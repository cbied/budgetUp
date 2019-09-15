import React, { useEffect, Component } from 'react';

import Register from './Components/auth/Register';
import Login from './Components/auth/Login';
import Dashboard from './Components//Dashboard/Dashboard'

import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';

import lifecycle from 'react-pure-lifecycle';
import { connect } from 'react-redux'
import { handleSessionData } from './redux/authReducer'
import Axios from 'axios'

import './App.css';


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_data: null
    }
  }

  componentDidMount() {
    Axios
      .get('/auth/session')
      .then(res => {
        console.log(res.data)
        handleSessionData(res.data)})
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Router>
      
      {routes}

      {
        !this.props.user_data ?
        <Login />
        :
        <Dashboard />
      }

    </Router>
    )
  }
}


function mapStateToProps(state) {
  const { user_data } = state
  return { user_data }
}


export default connect(mapStateToProps, { handleSessionData })(App)

