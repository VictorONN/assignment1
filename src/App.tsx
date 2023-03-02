import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import axios from "axios";

function App() {

  return (
    <div >

      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">My simple app</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/abouts">Abouts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>

            </ul>
          </div>
        </nav>
      </div>
      <Switch>

        <Route path="/abouts">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>


      </Switch >
    </div >
  );
}

export default App;
