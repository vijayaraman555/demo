import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './pages/demo'
import Login from './pages/login'
import Curd from './pages/curd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/demo">
            <Demo />
          </Route>
          <Route path="/curd">
            <Curd />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
