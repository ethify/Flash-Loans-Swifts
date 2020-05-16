import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import Home from "./Home";
import NavBar from "./NavBar";
import NewZap from "./NewZap";
import FzapName from "./FzapName";

import {
  Route,
  Switch,
  BrowserRouter as Router,
  HashRouter,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/new-zap" component={NewZap} />
            <Route path="/fzap-name" component={FzapName} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
