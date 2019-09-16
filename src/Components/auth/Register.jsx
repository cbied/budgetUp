import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import 'typeface-roboto';
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

export default function Register() {
const [ username, setUsername ] = useState('');
const [ firstName, setFirstName ] = useState('');
const [ lastName, setLastName ] = useState('');
const [ email, setEmail ] = useState('');
const [ password, setPassword ] = useState('');
const [ balance, setChangeStartBalance] = useState(0)

const classes = useStyles();

const register = () => {
    Axios
        .post('/auth/register', { username, password, firstName, lastName, email, balance })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

const handleChangeUsername = e => {
    setUsername(e.target.value);
}

const handleChangeFirstName = e => {
    setFirstName(e.target.value);
}

const handleChangeLastName = e => {
    setLastName(e.target.value);
}

const handleChangeEmail = e => {
    setEmail(e.target.value);
}

const handleChangePassword = e => {
    setPassword(e.target.value);
}

const handleChangeStartBalance = e => {
    setChangeStartBalance(e.target.value)
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
                    <TextField label="First Name" name='firstName' 
                    onChange={handleChangeFirstName}
                    />
                </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} >
                <Grid item>
                    <TextField label="Last Name" name='lastName' 
                    onChange={handleChangeLastName}
                    />
                </Grid>
                </Grid>
            </div>
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
                    <TextField type='email' label="Email" name='email' 
                    onChange={handleChangeEmail}
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
            <div className={classes.margin}>
                <Grid container spacing={1} >
                <Grid item>
                    <TextField type='decimal' label="startingBalance" name='startingBalance' value={balance}
                    onChange={handleChangeStartBalance}
                    />
                </Grid>
                </Grid>
            </div>

            <Button variant="contained" color="primary" className={classes.button}
            onClick={register}
            >
                Register
            </Button>
            </Paper>

            <Typography variant="caption" component="" className='login-register-message'>
                <Link to='/login'>Already a member? Login here!</Link>
            </Typography>
            
        </Grid>

        <Grid item xs>
            
        </Grid>

    </Grid>
    </div>
);
}
