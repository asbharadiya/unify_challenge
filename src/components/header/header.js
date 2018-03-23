import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <img className="logo" src="assets/images/logo.png" alt="logo"/>
      </div>
    );
  }
}

export default Header;
