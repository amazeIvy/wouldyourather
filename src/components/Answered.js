import React, { Component } from 'react';
import { connect } from 'react-redux';
import checkMark from '../images/checkmark.png';

class Answered extends Component {
  render() {
    const {
      id,
      avatarURL,
      question,
      isOptionOneSelected,
      isOptionTwoSelected,
      optionOnePercentage,
      optionTwoPercentage
    } = this.props;

    return (
      <section className="container answer-container">
        <div className="answer-title">
          <div>
            <img src={avatarURL} alt="avatar" />
          </div>
          <h3>Would you rather</h3>
        </div>
        <div className="option-container">
          <p className="or-icon"><span>or</span></p>
          <div className="option-left">
          {isOptionOneSelected && (
            <div className="your-choice-icon">
              <img src={checkMark} alt="check mark" />
            </div>
          )}
            <div className="result-container">
              <p className="result-percent">{optionOnePercentage}%</p>
              <p>{question && question.optionOne.text}</p>
            </div>
          </div>
          <div className="option-right">
          {isOptionTwoSelected && (
            <div className="your-choice-icon">
              <img src={checkMark} alt="check mark" />
            </div>
          )}
            <div className="result-container">
              <p className="result-percent">{optionTwoPercentage}%</p>
              <p>{question && question.optionTwo.text}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps ({users, questions, authedUser}, props) {
  const { id } = props.match.params;
  const question = questions && questions[id];
  const userId = question && question.author;

  const numOne = question ? question.optionOne.votes.length : 0;
  const numTwo = question ? question.optionTwo.votes.length : 0;
  const sumVotes = numOne + numTwo;

  const one = question && question.optionOne.votes.filter(vote => vote === authedUser);
  const two = question && question.optionTwo.votes.filter(vote => vote === authedUser);

  return {
    id,
    authedUser,
    isOptionOneSelected: one && one.length > 0,
    isOptionTwoSelected: two && two.length > 0,
    question,
    avatarURL: users[userId] && users[userId].avatarURL,
    optionOnePercentage: sumVotes !== 0
      ? (numOne / sumVotes * 100).toFixed(2)
      : 0,
    optionTwoPercentage: sumVotes !== 0
      ? (numTwo / sumVotes * 100).toFixed(2)
      : 0,
  }
}

export default connect(mapStateToProps)(Answered);
