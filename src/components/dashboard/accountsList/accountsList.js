import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showDetails} from "../../../actions/index";
import './accountsList.css';

class AccountsList extends Component {

  componentDidMount(){
    if(this.props.accounts.length>0){
      this.props.showDetails(this.props.accounts[0],0);
    }
  }

  render() {
    return (
        <div className="accounts-list">
            <ul className="vendors-list">
                {
                    this.props.accounts.map((account,index) => {
                        return(
                            <li className="vendors-list_single" key={index}>
                                <p className="vendors-list_single__name" onClick={() => {
                                    this.props.showDetails(account,index)
                                }}>{account.website}<span> > </span></p>
                                <ul className="emails-list">
                                    <li className="emails-list_single">
                                        <p className="emails-list_single__name">{account.username}</p>
                                    </li>
                                </ul>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {accounts:state.testReducer.own_credentials};
}

function mapDispatchToProps(dispatch) {
    return {
        showDetails : (account,index) => dispatch(showDetails(account,index))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountsList);
