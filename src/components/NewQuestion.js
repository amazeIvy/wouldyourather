import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    isSubmited: false
  }
  handleOptionOneChange = (e) => {
    this.setState({
      optionOne: e.target.value
    })
  }
  handleOptionTwoChange = (e) => {
    this.setState({
      optionTwo: e.target.value
    })
  }
  handleSubmit = () => {
    // Todo
    const { optionOne, optionTwo } = this.state
    const { authedUser, dispatch } = this.props
    console.log('submit')
    dispatch(handleAddQuestion(optionOne, optionTwo, authedUser))

    this.setState({
      isSubmited: true
    })
  }
  render () {
    const { optionOne, optionTwo, isSubmited } = this.state

    if (isSubmited) {
      return <Redirect exact to='/' />;
    }

    return (
      <section className="container new-question-container">
        <h2 className="center new-question-header">Create New Question</h2>
        <hr />
        <p className="mtbm">Complete the question:</p>
        <form className="mtl">
          <h3 className="center mtbm">Would You Rather</h3>
          <div className="mtbm">
            <input type="text" value={optionOne} placeholder="Option One" onChange={this.handleOptionOneChange} />
          </div>
          <h4 className="center mtbm">OR</h4>
          <div className="mtbm">
            <input type="text" value={optionTwo} placeholder="Option Two" onChange={this.handleOptionTwoChange} />
          </div>
          <button type="button"
          className="center mtbm btn"
          disabled={optionOne === '' || optionTwo === ''}
          onClick={this.handleSubmit}>Submit</button>
        </form>
      </section>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NewQuestion);