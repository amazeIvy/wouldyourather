import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setActivePath } from './activePath'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData ()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setActivePath('/login'))
      })
  }
}
