import React, { useState } from 'react';
import { Table, MenuItem, TextField } from '@material-ui/core';


const Summary = () => {
    const [ startingBalance, setStartingBalance ] = useState('');

    const StartingBalanceHandleChange = (e) => {
        setStartingBalance(e.target.value)
    }

    return (
        <div>
            {/* Starting Balance */}
            <TextField
            label="starting balance"
            value={startingBalance}
            onChange={e => StartingBalanceHandleChange(e)}
            type='number'
            margin="normal"
            variant="filled"
            />
            {/* Add Expense or Income Category */}
            {/* Delete Expense or Income Category */}

            {/* Display start balance vs end balance */}
            {/* Display Increase in Total Savings */}
            {/* Display saved this month */}

            {/* Table */}
            {/* Expenses Col: Planned, Actual, Diff. */}
            {/* Income Col: Planned, Actual, Diff. */}
        </div>
    );
}

export default Summary;
