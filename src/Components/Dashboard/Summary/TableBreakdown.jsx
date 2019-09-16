import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, MenuItem, TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

//   delete when bring in data
const rows = [
    createData('Food', 159, 24, 4.0),
    createData('Groceries', 90, 37, 4.3),
    createData('Eclair', 262, 16.0, 6.0),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
  ];

export class TableBreakdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            plannedValue: 0
        }
    }

    // bring in start data 0s
    componentDidMount() {

    }

    // add a category added
    // put dummy data in postman
    // display data

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        // console.log(this.state.plannedValue)
        return (
            <div>
                <h2>Expenses</h2>
            
            <div className='tableRow'>
            
            <Grid item xs={1}></Grid>
            <Grid item xs={4}>
            <Paper className=''>
            <Paper >
                    <Table >
                        <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Planned</TableCell>
                            <TableCell align="right">Actual</TableCell>
                            <TableCell align="right">Diff.</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">
                            <TextField
                                id="outlined-bare"
                                defaultValue="Bare"
                                margin="normal"
                                variant="outlined"
                                inputProps={{ 'aria-label': 'bare' }}
                                name='plannedValue'
                                value={row.calories}
                                onChange={e => this.handleChange(e)}
                            />
                            
                            </TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.calories - row.fat}</TableCell>
                            
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </Paper>
            </Paper>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
                <Paper className=''>
                            <h1>hello</h1>
                </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
            </div> 
            </div> 
        )
    }
}

export default TableBreakdown

