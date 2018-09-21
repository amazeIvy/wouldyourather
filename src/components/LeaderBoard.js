import React, { Component } from 'react';
import UserScore from './UserScore';

class LeaderBoard extends Component {
  render () {
    return (
      <div>
        <div className='container leader-board-container'>
          <UserScore />
        </div>
      </div>
    )
  }
}

export default LeaderBoard;