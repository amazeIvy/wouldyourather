import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, updateUsers } from './users'
import { receiveQuestions, saveSelectOption } from './questions'
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

/*
 * info: Object{}
 *  authedUser,
 *  qid(Question Id),
 *  answer('optionOne'/'optionTwo')
 */
export function handleSaveQuestionAnswer (authedUser, qid, answer) {
  return (dispatch) => {
    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(({ users, questions }) => {
        questions && dispatch(saveSelectOption(questions))
        users && dispatch(updateUsers(users))
      })
  }
}
