import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js"

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
         <Route exact path="/" component={Home}/>
    </Switch>
    </div>
    </Router>
  );
}
export default App;