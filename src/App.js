import React from "react";
import LoadingPage from "./pages/LoadingPage.js";
import MusicPage from "./pages/MusicPage/MusicPage.js";
import HomePage from "./pages/HomePage/HomePage.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <HomePage {...routerProps} />}
          />
          <Route
            path="/loading"
            exact
            render={(routerProps) => <LoadingPage {...routerProps} />}
          />
          <Route
            path="/music"
            exact
            render={(routerProps) => <MusicPage {...routerProps} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
