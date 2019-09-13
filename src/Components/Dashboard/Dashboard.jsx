import React from 'react';

import { connect } from 'react-redux';


const Dashboard = (props) => {
    console.log(props.user_data)
    return (
        <div>
            <h1>Dashboard</h1>
            <h3>hello { props.user_data.username }</h3>
        </div>
    );
}

function mapStateToProps(state) {
    const { user_data } = state
    return { user_data }
}

export default connect(mapStateToProps)(Dashboard);
