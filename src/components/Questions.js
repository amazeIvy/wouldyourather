import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Answering from './Answering';
import Answered from './Answered';

const Questions = ({ id, authedUser, isExist, isAnswered }) => {
  if(!authedUser) {
    return <Redirect to={{
      pathname: '/login',
      state: { referrer: '/questions/'+id }
    }} />
  }

  if(!isExist) {
    return <Redirect to='/notfound' />
  }

  if (isAnswered) {
    return <Answered id={id} />
  }

  return (
    <Answering id={id} />
  )
}

function mapStateToProps ({users, questions, authedUser}, props) {
  const { id } = props.match.params;

  return {
    id,
    authedUser,
    isExist: questions && Boolean(questions[id]),
    isAnswered: authedUser && Boolean(users[authedUser].answers[id]),
  }
}

export default connect(mapStateToProps)(Questions);

