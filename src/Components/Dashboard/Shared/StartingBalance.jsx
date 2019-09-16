import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, MenuItem, TextField, Grid } from '@material-ui/core';

import { connect } from 'react-redux'

const StartingBalance = (props) => {
    console.log(props.user_data.balance)
    return (
        <div className='topRight'>
            <h3>Starting Balance: </h3>
            <h3><span id='startingBalance'>${props.user_data.balance}</span></h3>
        </div>
    );
}

function mapStateToProps(state){
    const { user_data } = state;
    return { user_data }
}

export default connect(mapStateToProps)(StartingBalance);
