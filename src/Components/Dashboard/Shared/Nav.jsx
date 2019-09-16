import React from 'react';

import { connect } from 'react-redux';

import Overview from '../Overview';
import Summary from '../Summary/Summary';
import Cashflow from '../Cashflow';
import Trends from '../Trends'
import PastMonths from '../PastMonths'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core/';

import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Calendar from '@material-ui/icons/DateRange';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import Wallet from '@material-ui/icons/AccountBalanceWallet'


function TabPanel(props) {
const { children, value, index, ...other } = props;

return (
    <Typography
    component="div"
    role="tabpanel"
    hidden={value !== index}
    id={`scrollable-force-tabpanel-${index}`}
    aria-labelledby={`scrollable-force-tab-${index}`}
    {...other}
    >
    <Box p={3}>{children}</Box>
    </Typography>
);
}

TabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.any.isRequired,
value: PropTypes.any.isRequired,
};

function a11yProps(index) {
return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
};
}

const useStyles = makeStyles(theme => ({
root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
},
}));

export function Dashboard(props) {
const classes = useStyles();
const [value, setValue] = React.useState(0);

function handleChange(event, newValue) {
    setValue(newValue);
}

return (
    <div className={classes.root}>
        <header className='header'>
            <h2>hello { props.user_data.username }</h2>
        </header>

    <AppBar position="static" color="default" className='flexRowCenter'>
        <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="on"
        indicatorColor="primary"
        textColor="primary"
        aria-label="scrollable force tabs example"
        >
        <Tab label="Dashboard" icon={<DashboardIcon />} {...a11yProps(0)} />
        <Tab label="Overview" icon={<FavoriteIcon />} {...a11yProps(1)} />
        <Tab label="Summary" icon={<PersonPinIcon />} {...a11yProps(2)} />
        <Tab label="Cash flow" icon={<Wallet />} {...a11yProps(3)} />
        <Tab label="Trends" icon={<ShoppingBasket />} {...a11yProps(4)} />
        <Tab label="Past Months" icon={<Calendar />} {...a11yProps(5)} />
        </Tabs>
    </AppBar>
    <TabPanel value={value} index={0}>
        Dashboard
    </TabPanel>
    <TabPanel value={value} index={1}>
        <Overview />
    </TabPanel>
    <TabPanel value={value} index={2}>
        <Summary />
    </TabPanel>
    <TabPanel value={value} index={3}>
        <Cashflow />
    </TabPanel>
    <TabPanel value={value} index={4}>
        <Trends />
    </TabPanel>
    <TabPanel value={value} index={5}>
        <PastMonths />
    </TabPanel>
    </div>
);
}


function mapStateToProps(state) {
    const { user_data } = state
    return { user_data }
}

export default connect(mapStateToProps)(Dashboard);
