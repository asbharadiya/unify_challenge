import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import Header from './components/header/header';

class App extends Component {
  render() {
    return (
      <div className="app-container">
          <Header/>
          <div className="main-content">
            <Dashboard/>
          </div>
      </div>
    );
  }
}

export default App;
