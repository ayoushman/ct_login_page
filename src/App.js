import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PrivateRoute from "./auth/PrivateRoute";
import SignIn from "./components/Signin";
import UserPage from "./components/user";
import Home from "./components/Home";
import "./css/App.css"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-in" exact component={SignIn} />
          <PrivateRoute path="/user" exact component={UserPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
