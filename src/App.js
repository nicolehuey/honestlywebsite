import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js"
import Play from "./Play.js"
import GamePreview from "./GamePreview.js"
import Team from "./Team.js"

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/Play" component={Play}/>
         <Route exact path="/GamePreview" component={GamePreview}/>
         <Route exact path="/Team" component={Team}/>

    </Switch>
    </div>
    </Router>
  );
}
export default App;
