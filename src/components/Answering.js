import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectOptionOne, selectOptionTwo } from '../actions/questions';
import { handleSaveQuestionAnswer } from '../actions/shared';


class Answering extends Component {
  state = {
    isAnswered: false
  }
  handleSelect = (option) => {
    // Todo: Change store
    const { dispatch, id, authedUser } = this.props;

    if (option === 'left') {
      dispatch(selectOptionOne(id, authedUser))
    } else if (option === 'right') {
      dispatch(selectOptionTwo(id, authedUser))
    }

    this.setState({
      isAnswered: true
    })
  }
  handleAnswerQuestion = (option) => {
    const { dispatch, id, authedUser } = this.props;

    if (option === 'left') {
      dispatch(handleSaveQuestionAnswer(authedUser, id, 'optionOne'))
    } else if (option === 'right') {
      dispatch(handleSaveQuestionAnswer(authedUser, id, 'optionTwo'))
    }

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
          <div className="option-left" onClick={() => {this.handleAnswerQuestion('left')}}>
            <p>{question && question.optionOne.text}</p>
          </div>
          <div className="option-right" onClick={() => {this.handleAnswerQuestion('right')}}>
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
