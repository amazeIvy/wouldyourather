import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserScore from './UserScore';

class LeaderBoard extends Component {
  render () {
    const { orderedUsers } = this.props;

    return (
      <div>
        <div className='container leader-board-container'>
        {orderedUsers.map((user, index) => (
          <UserScore key={user.id} user={user} place={index + 1} />
        ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  let orderedUsers = Object.keys(users).map(id => {
    const answeredNum = Object.keys(users[id].answers).length;
    const createdNum = users[id].questions.length;

    return {
      id,
      name: users[id].name,
      avatarURL: users[id].avatarURL,
      answered: answeredNum,
      created: createdNum,
      score: answeredNum + createdNum
    }
  })

  return {
    orderedUsers: orderedUsers.sort((a, b) => {
      return b.score - a.score
    })
  }
}

export default connect(mapStateToProps)(LeaderBoard);
