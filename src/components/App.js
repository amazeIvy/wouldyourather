import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

import Nav from './Nav';
import Login from './Login';
import Home from './Home';
import Questions from './Questions';

import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import NotFound from './NotFound';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;

    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path='/' exact render={() => (
              authedUser ? (
                <Home />
              ) : (
                <Redirect
                  to={{
                    pathname: '/login',
                    state: { referrer: '/' }
                  }} />
              )
            )} />
            <Route path='/questions/:id' component={Questions} />
            <Route path='/add' render={() => (
              authedUser ? (
                <NewQuestion />
              ) : (
                <Redirect
                  to={{
                    pathname: '/login',
                    state: { referrer: '/add' }
                  }} />              )
            )} />
            <Route path='/leaderboard' render={() => (
              authedUser ? (
                <LeaderBoard />
              ) : (
                <Redirect
                  to={{
                    pathname: '/login',
                    state: { referrer: '/leaderboard' }
                  }} />              )
            )} />
            <Route path='/login' component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);
