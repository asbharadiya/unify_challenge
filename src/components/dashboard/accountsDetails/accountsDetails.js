import React, { Component } from 'react';
import {connect} from 'react-redux';
import './accountsDetails.css';
import {deleteAccount} from "../../../actions";

class AccountsDetails extends Component {
  render() {
    const details = this.props.account_details;
    return (
        <div className="accounts-details">
            <div className="accounts-details_panel">
                <p className="form-header">Login info</p>
                <div className="form-container">
                    <div className="form-container_group">
                        <label className="form-container_group__label">Website</label>
                        <p className="form-container_group__value">{details.website}</p>
                    </div>
                    <div className="form-container_group">
                        <label className="form-container_group__label">Username</label>
                        <p className="form-container_group__value">{details.username}</p>
                    </div>
                    <div className="form-container_group">
                        <label className="form-container_group__label">Password</label>
                        <p className="form-container_group__value">{details.password_id}</p>
                    </div>
                    <div className="form-container_group">
                        <button className="input-btn" onClick={() => {
                            this.props.deleteAccount(this.props.index)
                        }}>Delete</button>
                    </div>
                </div>
            </div>
            <div className="accounts-details_panel">
                <p className="form-header">Sharing</p>
                <div className="form-container">
                    <div className="form-container_group input-group">
                        <input className="input-control" placeholder="Search"/>
                        <button className="input-btn">Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        account_details:state.testReducer.current_account_details,
        index:state.testReducer.current_index
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteAccount : (index) => dispatch(deleteAccount(index))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AccountsDetails);
