import { combineReducers } from 'redux'
import authedUser from './authedUser'
import activePath from './activePath'
import users from './users'
import questions from './questions'

export default combineReducers({
  authedUser,
  activePath,
  users,
  questions
})
