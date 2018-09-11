import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleLogOut = () => {
    const { dispatch } = this.props;
    dispatch(removeAuthedUser());
  }

  render () {
    const { userName, userAvatarUrl } = this.props;
    return (
      <section className="nav-bar">
        <div className="nav-links-container">
          <NavLink to ='/' exact  activeClassName="nav-active">
            Home
          </NavLink>
          <NavLink to ='/new' activeClassName='nav-active'>
            New Question
          </NavLink>
          <NavLink to ='/leader-board' activeClassName='nav-active'>
            Leader Board
          </NavLink>
        </div>
        {
          userName && (
            <div className="nav-user-login-container">
              <div className="nav-user-info">
                <span>{userName}</span>
                <img className="avatar-x-small" src={userAvatarUrl} alt="user avatar small" />
              </div>
              <a onClick={this.handleLogOut}>Log Out</a>
            </div>
          )
        }
      </section>
    );
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    userName: users[authedUser] && users[authedUser].name,
    userAvatarUrl: users[authedUser] && users[authedUser].avatarURL
  };
}

export default connect(mapStateToProps)(Nav);