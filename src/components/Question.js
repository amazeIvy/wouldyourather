import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers'

class Question extends Component {
  render () {
    const { question } = this.props;
    const { authorAvatar, authorName, optionOne, optionTwo } = question;

    return (
      <div className="question">
        <img className="avatar-big" src={authorAvatar} title={authorName} alt="Author Avatar" />
        <div className="question-content">
          <h4>Would You Rather?</h4>
          <p>... {optionOne} ...</p>
          <p>... {optionTwo} ...</p>
        </div>
        <button className="btn">View</button>
      </div>
    )
  }
}

function mapStateToProps ({users, questions}, {id}) {
  const question = questions[id]

  return {
    question: question
      ? formatQuestion(question, users[question.author])
      : null
  }
}

export default connect(mapStateToProps)(Question);