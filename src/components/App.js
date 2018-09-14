import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

import Nav from './Nav';
import Login from './Login';
import Home from './Home';
import Answering from './Answering';
import Answered from './Answered';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';

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
          <div>
            <Route path='/' exact render={() => (
              authedUser ? (
                <Home />
              ) : (
                <Redirect to='/login' />
              )
            )} />
            <Route path='/answering/:id' component={Answering} />
            <Route path='/answered/:id' component={Answered} />
            <Route path='/new' render={() => (
              authedUser ? (
                <NewQuestion />
              ) : (
                <Redirect to='/login' />
              )
            )} />
            <Route path='/leader-board' render={() => (
              authedUser ? (
                <LeaderBoard />
              ) : (
                <Redirect to='/login' />
              )
            )} />
            <Route path='/login' component={Login} />
          </div>
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
