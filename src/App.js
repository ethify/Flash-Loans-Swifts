import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import Home from "./Home";
import NavBar from "./NavBar";
import NewZap from "./NewZap";
import FzapName from "./FzapName";
import Profile from "./Profile";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  HashRouter,
} from "react-router-dom";
import Landing from "./Landing";
class App extends React.Component {
  render() {
    return (
      <div className="MainContainer">
        <div>
          <NavBar />
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/home" component={Home} />
              <Route path="/new-zap" component={NewZap} />
              <Route path="/profile" component={Profile} />
              <Route path="/swift/:swiftUUID" component={FzapName} />
            </Switch>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;
