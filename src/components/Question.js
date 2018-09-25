import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers'

import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
  toAnswerPage = (e) => {
    e.preventDefault();
    const { history, id } = this.props;

    history.push(`/questions/${id}`)
  }

  render () {
    const { id, question, btnName } = this.props;
    const { authorAvatar, authorName, optionOne, optionTwo } = question;

    return (
      <Link to={`/questions/${id}`}>
        <div className="question">
          <img className="avatar-big" src={authorAvatar} title={authorName} alt="Author Avatar" />
          <div className="question-content">
            <h4>Would You Rather?</h4>
            <p>... {optionOne} ...</p>
            <p>... {optionTwo} ...</p>
          </div>
          <button className="btn" onClick={this.toAnswerPage}>{btnName}</button>
        </div>
      </Link>
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

export default withRouter(connect(mapStateToProps)(Question));
