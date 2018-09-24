import React, { Component } from 'react';
import goldMedal from '../images/gold-medal.png';
import silverMedal from '../images/silver-medal.png';
import bronzeMedal from '../images/bronze-medal.png';

class UserScore extends Component {
  render() {
    const { user, place } = this.props;
    return (
      <div className="container user-score-container">
        {place <= 3 && (
          <div className="medal-container">
            <img src={ place === 1
              ? goldMedal
              : (place === 2
                ? silverMedal
                : (place === 3 && bronzeMedal))}
              alt="Place Medal" />
          </div>
        )}
        <div className="place-container">{place}</div>
        <div className="user-score">
          <img className="avatar-big"
            src={user.avatarURL}
            title="Shawn Collins" alt="Author Avatar" />
          <div className="user-question-detail">
            <h4 className="mbl">{user.name}</h4>
            <p>Answered Questions: {user.answered}</p>
            <p>Created Questions: {user.created}</p>
          </div>
          <div className="score-container">
            <p className="center score-title">Score</p>
            <p className="score-number">{user.score}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default UserScore;