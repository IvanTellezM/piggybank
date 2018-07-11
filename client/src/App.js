import React, { Component } from 'react'; //I.T. 
import injectTapEventPlugin from 'react-tap-event-plugin';  //I.T. 
import getMuiTheme from 'material-ui/styles/getMuiTheme';  //I.T. 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; //I. T. 
import { BrowserRouter as Router,Route,Link } from 'react-router-dom' //I.T. 
import HomePage from './components/HomePage.jsx';
import { PrivateRoute, PropsRoute, LoggedOutRoute } from './components/Routes';  //I. T. 
import LoginPage from './pages/LoginPage.jsx';  //I. T
import LogoutFunction from './pages/LogoutFunction.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx'; //I. T. 
import Auth from './utils/Auth';  //I.T. 

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { MailFolderListItems, otherMailFolderListItems } from './tileData';
import InputAdornment from './components/Input Form/inputForm';
import Chart from './components/expense/expenseChart';
import Login from './containers/login';
import Resources from './components/resources';

const FontAwesome = require('react-fontawesome');

// remove tap delay, essential for MaterialUI to work properly  I. T. 
injectTapEventPlugin();

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});

class PersistentDrawer extends React.Component {
  state = {
    authenticated: false  //I.T
    // open: false,
    // anchor: 'left',
    // expenseReport: false,
    // addExpense: false,
    // login: false
  };

  componentDidMount() {
    // check if user is logged in on refresh  I. T
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus = () => {
    // check authenticated status and toggle state based on that  I. T 
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  addExpense = () => {
    console.log("Clicked!");
    this.setState({addExpense: true, expenseReport: false, login: false, resources: false})
  }

  expenseReport = () => {
    this.setState({expenseReport: true, addExpense: false, login: false, resources: false})
  }

  login = () => {
    this.setState({login: true, addExpense: false, expenseReport: false, resources: false})
    
  }

  resources = () => {
    console.log("Clicked!");
    this.setState({login: false, addExpense: false, expenseReport: false, resources: true})
  }
  

  

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <MailFolderListItems 
            addExpense={this.addExpense}
            resources={this.resources}
            expenseReport={this.expenseReport}
          >
          </MailFolderListItems>
        </List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }
    return (
      <div className={classes.root}>
        {

        }
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open,
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit"style={{flex: 1}}> 
                <FontAwesome name="piggy-bank" size="1.5x"  style={{ marginRight: 10}} /> 
                           Piggy Bank
              </Typography>



              {/*               
              <Button color="inherit" onClick={this.login}  >Log in</Button>
              <Button color="inherit" onClick={this.login}  >Sign Up</Button> */}

               {this.state.authenticated ? (
                <div className="top-bar-right">
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/logout">Log out</Link>
                </div>
              ) : (
                <div className="top-bar-right">
                  <Link to="/login">Log in</Link>
                  <Link to="/signup">Sign up</Link>
                </div>
              )}
              <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <PrivateRoute path="/dashboard" component={DashboardPage}/>
            <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <LoggedOutRoute path="/signup" component={SignUpPage}/>
            <Route path="/logout" component={LogoutFunction}/>

            </Toolbar>
          </AppBar>
          {before}
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}
          >
          
            <div className={classes.drawerHeader} />

            {this.state.addExpense ? <InputAdornment  /> : <div></div>}
            {this.state.expenseReport ? <Chart /> : <div></div>}
            {this.state.login ? <Login /> : <div></div>}
            {this.state.resources ? <Resources /> : <div></div>}

          </main>
          
          {after}
          
        </div>
      </div>
    );
  }
}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);