import React from "react";
import { Switch, Route } from "react-router-dom";
import App from './App';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';

export default (
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
    </Switch>
)