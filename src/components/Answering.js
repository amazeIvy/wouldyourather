import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { saveSelectOption } from '../actions/questions';
import { updateUsers } from '../actions/users';
import { saveQuestionAnswer } from '../utils/api';


class Answering extends Component {
  state = {
    isAnswered: false
  }

  handleAnswerQuestion = (answer) => {
    const { dispatch, id, authedUser } = this.props;

    // Dispatch store changes
    dispatch(saveSelectOption({ authedUser, id, answer }));
    dispatch(updateUsers({ authedUser, id, answer }))

    // Save changes to mock DB
    saveQuestionAnswer({ authedUser, qid: id, answer });

    this.setState({
      isAnswered: true
    })
  }

  render() {
    const { id, avatarURL, question } = this.props;
    const { isAnswered } = this.state;

    if (isAnswered) {
      return <Redirect exact to={`/answered/${id}`} />;
    }

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
          <div className="option-left" onClick={() => {this.handleAnswerQuestion('optionOne')}}>
            <p>{question && question.optionOne.text}</p>
          </div>
          <div className="option-right" onClick={() => {this.handleAnswerQuestion('optionTwo')}}>
            <p>{question && question.optionTwo.text}</p>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps ({users, questions, authedUser}, props) {
  const { id } = props.match.params;
  const userId = questions[id] && questions[id].author;

  return {
    id,
    authedUser,
    question: questions[id],
    avatarURL: users[userId] && users[userId].avatarURL
  }
}

export default connect(mapStateToProps)(Answering);
