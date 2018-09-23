import { RECEIVE_USERS, UPDATE_USERS, USER_ADD_QUESTION } from '../actions/users';

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users,
      }
    case UPDATE_USERS :
      const { authedUser, id, answer } = action.info
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [id]: answer
          }
        }
      }
    case USER_ADD_QUESTION :
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: {
            ...state[action.authedUser].questions,
            ...state[action.authedUser].questions.concat([action.questionId])
          }
        }
      }
    default :
      return state
  }
}
