import React, { Component } from 'react'

import ContactPage from './ContactPage.js';
import LoadingPage from './LoadingPage.js';
import MusicPage from './MusicPage.js';
import HomePage from './HomePage.js';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';



export default class App extends React.Component {
  render() {
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

      )
  }
}

