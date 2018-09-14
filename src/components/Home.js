import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class Home extends Component {
  state = {
    tab: 'unanswered',

  }

  handleToggleTab = (e) => {
    const tabName = e.target.name;

    this.setState({
      tab: tabName
    })
  }

  render () {
    const { unansweredQuestionIDs, answeredQuestionIDs } = this.props;
    const { tab } = this.state;

    return (
      <section className="container questions-container">
        <div className="questions-tab-container">
          <div className={ tab === 'unanswered' ? 'questions-list-tab-selected' : '' }>
            <a name="unanswered" onClick={this.handleToggleTab}>Unanswered</a>
          </div>
          <div className={ tab === 'answered' ? 'questions-list-tab-selected' : '' }>
            <a name="answered" onClick={this.handleToggleTab}>Answered</a>
          </div>
        </div>
        {
          tab === 'unanswered'
          ? unansweredQuestionIDs.map(id => (
            <Question key={id} id={id} btnName='Answer' />
            ))
          : answeredQuestionIDs.map(id => (
            <Question key={id} id={id} btnName='View' />
            ))
        }
      </section>
    )
  }
}

function mapStateToProps ({ questions, authedUser }) {
  return {
    unansweredQuestionIDs: Object.keys(questions)
      .filter(id => !questions[id].optionOne.votes.includes(authedUser) && !questions[id].optionTwo.votes.includes(authedUser))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestionIDs: Object.keys(questions)
      .filter(id => questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    authedUser
  };
}

export default connect(mapStateToProps)(Home);