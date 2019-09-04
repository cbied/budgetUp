import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios'

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

const classes = useStyles();

const register = () => {
    Axios
        .post('/auth/register', { username, password, firstName, lastName, email })
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
                    <TextField id="input-with-icon-grid" label="First Name" name='firstName' 
                    onChange={handleChangeFirstName}
                    />
                </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} >
                <Grid item>
                    <TextField id="input-with-icon-grid" label="Last Name" name='lastName' 
                    onChange={handleChangeLastName}
                    />
                </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} >
                <Grid item>
                    <TextField id="input-with-icon-grid" label="Username" name='username'
                    onChange={handleChangeUsername}
                    />
                </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} >
                <Grid item>
                    <TextField type='email' id="input-with-icon-grid" label="Email" name='email' 
                    onChange={handleChangeEmail}
                    />
                </Grid>
                </Grid>
            </div>
            <div className={classes.margin}>
                <Grid container spacing={1} >
                <Grid item>
                    <TextField type='password' id="input-with-icon-grid" label="password" name='password' 
                    onChange={handleChangePassword}
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

            
            
        </Grid>

        <Grid item xs>
            
        </Grid>

    </Grid>
    </div>
);
}
