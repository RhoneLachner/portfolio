import React from 'react';
import ContactPage from './pages/ContactPage.js';
import LoadingPage from './pages/LoadingPage.js';
import MusicPage from './pages/MusicPage.js';
import HomePage from './pages/HomePage.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

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
          <Route
            path="/contact"
            exact
            render={(routerProps) => <ContactPage {...routerProps} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
