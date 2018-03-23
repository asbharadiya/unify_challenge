import React, { Component } from 'react';
import './dashboard.css';
import AccountsDetails from './accountsDetails/accountsDetails';
import AccountsList from './accountsList/accountsList';

class Dashboard extends Component {
  render() {
    return (
        <div className="dashboard-wrapper">
            <AccountsList/>
            <AccountsDetails/>
        </div>
    );
  }
}

export default Dashboard;
