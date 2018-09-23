import { RECEIVE_USERS, UPDATE_USERS } from '../actions/users';

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
    default :
      return state
  }
}
