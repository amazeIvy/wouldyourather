import { getInitialData, saveQuestion } from '../utils/api'
import { receiveUsers, handleUserAddQuestion } from './users'
import { receiveQuestions, addNewQuestion } from './questions'
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

export function handleAddQuestion (optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return saveQuestion({ optionOneText, optionTwoText, author })
      .then(question => {
        dispatch(addNewQuestion(question))
        dispatch(handleUserAddQuestion(author, question.id))
      })
  }
}
