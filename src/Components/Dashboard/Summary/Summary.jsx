import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, MenuItem, TextField, Grid } from '@material-ui/core';

import TableBreakdown from './TableBreakdown';
import StartingBalance from '../Shared/StartingBalance'


const Summary = () => {
    

    return (
        <div>
            {/* Starting Balance */}
            <StartingBalance />
            {/* Add Expense or Income Category */}
            {/* Delete Expense or Income Category */}

            {/* Display start balance vs end balance */}
            {/* Display Increase in Total Savings */}
            {/* Display saved this month */}

            {/* Table */}
            <TableBreakdown />
            {/* Expenses Col: Planned, Actual, Diff. */}
            {/* Income Col: Planned, Actual, Diff. */}
        </div>
    );
}

export default Summary;
