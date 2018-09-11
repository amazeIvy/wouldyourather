import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    selectedUserId: ''
  }

  handleLogIn = (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    const { selectedUserId } = this.state;

    dispatch(setAuthedUser(selectedUserId))
  }

  handleSelectUser = (e) => {
    const id = e.target.value

    this.setState (() => ({
      selectedUserId: id
    }))
  }

  render () {
    const { users, authedUser } = this.props;

    if (authedUser) {
      return <Redirect exact to='/' />;
    }

    return (
      <div className="center container log-in-container">
        <h3>Welcome to Would You Rather<br />Please Log In to Continue</h3>
        <div>
          <img className="log-in-img"
            src="https://i.kfs.io/album/global/24208457,0v1/fit/500x500.jpg"
            alt="would you red velvet" />
        </div>
        <div className="log-in-box">
          <select defaultValue="default" onChange={this.handleSelectUser}>
            <option value="default" disabled>Select User</option>
            {
              users.map(user => (
                <option key={ user.id } value={ user.id }>{ user.name }</option>
              ))
            }
          </select>
        </div>
        <button className="btn" onClick={this.handleLogIn}>
          Log In
        </button>
      </div>
    );
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    users: Object.keys(users).map(userId => {
      return {
        id: userId,
        name: users[userId].name
      }
    }),
    authedUser
  };
}

export default connect(mapStateToProps)(Login);
