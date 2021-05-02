import React from "react";
import "../App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Winners from './Winners';
import Home from "./Home";



export default function App() {
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <NavLink exact activeClassName="selected" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="selected" to="/winners">Winners</NavLink>
          </li>
        </ul>

        <hr />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/winners">
              <Winners />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

