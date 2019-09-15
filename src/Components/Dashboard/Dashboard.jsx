import React from 'react';

import { connect } from 'react-redux';
import Summary from './Summary'


const Dashboard = (props) => {
    console.log(props.user_data)
    return (
        <div>
            <header className='header'>
            <h1>Dashboard</h1>
            <h3>hello { props.user_data.username }</h3>
            </header>
            
            <Summary />
        </div>
    );
}

function mapStateToProps(state) {
    const { user_data } = state
    return { user_data }
}

export default connect(mapStateToProps)(Dashboard);
