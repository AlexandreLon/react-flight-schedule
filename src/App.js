import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Airport } from './Airport/Airport';
import { Airline } from './Airline/Airline';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AirplanemodeActive from '@material-ui/icons/AirplanemodeActive';
import { makeStyles } from '@material-ui/core/styles';
import FlightLand from '@material-ui/icons/FlightLand';
import { useHistory } from 'react-router';
import ExploreIcon from '@material-ui/icons/Explore';
import { WhereDoWeGo } from './WhereDoWeGo/WhereDoWeGo';

const Home = () => {
  return <div>Dahsboard</div>;
};

const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
});

export default function App() {
  const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
  const [value, setValue] = React.useState('/');
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <div>
      <Switch>
        <Route exact path="/airline">
          <Airline />
        </Route>
        <Route exact path="/airport">
          <Airport />
        </Route>
        <Route exact path="/where-do-we-go">
          <WhereDoWeGo />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        className={classes.stickToBottom}
      >
        <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Airline"
          value="/airline"
          icon={<AirplanemodeActive />}
        />
        <BottomNavigationAction
          label="Airport"
          value="/airport"
          icon={<FlightLand />}
        />
        <BottomNavigationAction
          label="WhereDoWeGo"
          value="/where-do-we-go"
          icon={<ExploreIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
