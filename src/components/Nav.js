import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeAuthedUser } from '../actions/authedUser'
import { setActivePath } from '../actions/activePath'

class Nav extends Component {
  handlePathChange = (path) => {
    this.props.dispatch(setActivePath(path))
  }

  handleLogOut = () => {
    const { dispatch } = this.props;
    dispatch(removeAuthedUser());
    dispatch(setActivePath('/login'));
  }

  render () {
    const { userName, userAvatarUrl, activePath } = this.props;

    return (
      <section className="nav-bar">
        <div className="nav-links-container">
          <NavLink
            to ='/' exact
            className={ activePath === '/' ? 'active' : ''}
            onClick={() => this.handlePathChange('/')}
          >
            Home
          </NavLink>
          <NavLink
            to ='/new'
            className={ activePath === '/new' ? 'active' : ''}
            onClick={() => this.handlePathChange('/new')}
          >
            New Question
          </NavLink>
          <NavLink
            to ='/leader-board'
            className={ activePath === '/leader-board' ? 'active' : ''}
            onClick={() => this.handlePathChange('/leader-board')}
          >
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

function mapStateToProps ({ users, authedUser, activePath }) {
  return {
    userName: users[authedUser] && users[authedUser].name,
    userAvatarUrl: users[authedUser] && users[authedUser].avatarURL,
    activePath
  };
}

export default connect(mapStateToProps)(Nav);