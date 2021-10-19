import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import ContextProvider from './ContextObj';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import NavBar from './Components/NavBar/NavBar';
import EventCalendar from './Components/Calendar/EventCalendar';
import Livestream from './Components/Livestream/Livestream';
import Profile from './Components/Profile/Profile';
import Home from './Components/Home/Home';
import Market from './Components/Market/Market';

const App = () => (
  <div className="App">
    <ContextProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/market" component={Market} />
          <Route exact path="/events" component={EventCalendar} />
          <Route exact path="/livestream" component={Livestream} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Signup} />
          <Route exact path="/navbar" component={NavBar} />
        </Switch>
      </Router>
    </ContextProvider>
  </div>
);

export default App;
