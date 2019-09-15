import React, { useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

import { connect } from 'react-redux'
import { handleSessionData } from '../../redux/authReducer'

import { Link } from 'react-router-dom';
import Axios from 'axios';

const useStyles = makeStyles(theme => ({

root: {
    flexGrow: 1
},
paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
},
margin: {
    margin: theme.spacing(1),
}
}));



function Login(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const classes = useStyles();
    
    const login = () => {
        Axios
            .post('/auth/login', { username, password })
            .then(res => {
                props.handleSessionData(res.data)})
            .catch(err => alert('Wrong username or password'))
    }
    
    const handleChangeUsername = e => {
        setUsername(e.target.value);
    }
    
    
    const handleChangePassword = e => {
        setPassword(e.target.value);
    }

    
    return (
        
    <div className={classes.root}>
        <Grid container spacing={3}>

            <Grid item xs>
                
            </Grid>

            <Grid item xs={6}>
                <Paper className={classes.paper}>
                <div className={classes.margin}>
                    <Grid container spacing={1} >
                    <Grid item>
                        <TextField label="Username" name='username'
                        onChange={handleChangeUsername}
                        />
                    </Grid>
                    </Grid>
                </div>
                
                <div className={classes.margin}>
                    <Grid container spacing={1} >
                    <Grid item>
                        <TextField type='password' label="password" name='password' 
                        onChange={handleChangePassword}
                        />
                    </Grid>
                    </Grid>
                </div>

                <Button variant="contained" color="primary" className={classes.button}
                onClick={login}
                >
                    Login
                </Button>
                </Paper>

                <Typography variant="caption" component="" align='center' className='login-register-message'>
                    <Link to='register'>Not a member? Register here!</Link>
                </Typography>
                
            </Grid>

            

            <Grid item xs>
                
            </Grid>

        </Grid>
    </div>
    )
}

function mapStateToProps(state) {
    const { user_data } = state
    return { user_data }
}

export default connect(mapStateToProps, { handleSessionData })(Login)
