import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import axios from "axios";

// const axiosRequest = require("axios");

function App() {
  const [count, setCount] = useState(0);

  async function getActivity() {
    try {
      // let response = await axiosRequest.get(
      //   "https://www.boredapi.com/api/activity"
      // );

      let response = await axios.get("https://www.boredapi.com/api/activity");

      console.log(`You could ${response.data.activity}`);
    } catch (error) {
      console.error(`ERROR: ${error}`);
    }
  }

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
