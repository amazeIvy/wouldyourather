import React, { Component } from 'react';
import goldMedal from '../images/gold-medal.png';

class UserScore extends Component {
  render() {
    return (
      <div className="container user-score-container">
        <div className="medal-container">
          <img src={goldMedal} alt="Place Medal" />
        </div>
        <div className="user-score">
          <img className="avatar-big"
            src="https://image.flaticon.com/icons/svg/206/206857.svg"
            title="Shawn Collins" alt="Author Avatar" />
          <div className="user-question-detail">
            <h4 className="mbl">Shawn Collins</h4>
            <p>Answered Questions: 7</p>
            <p>Created Questions: 3</p>
          </div>
          <div className="score-container">
            <p className="center score-title">Score</p>
            <p className="score-number">10</p>
          </div>
        </div>
      </div>
    )
  }
}

export default UserScore;