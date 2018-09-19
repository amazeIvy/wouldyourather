import { saveQuestion } from '../utils/api'

export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';

export const SELECT_OPTION_ONE = 'SELECT_OPTION_ONE';
export const SELECT_OPTION_TWO = 'SELECT_OPTION_TWO';

export function receiveQuestions (questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions
  }
}

function addNewQuestion (question) {
  return {
    type: ADD_NEW_QUESTION,
    question
  }
}

export function handleAddQuestion (optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return saveQuestion({ optionOneText, optionTwoText, author })
      .then((question) => dispatch(addNewQuestion(question)))
  }
}

export function selectOptionOne (id, userId) {
  return {
    type: SELECT_OPTION_ONE,
    id,
    userId
  }
}

export function selectOptionTwo (id, userId) {
  return {
    type: SELECT_OPTION_TWO,
    id,
    userId
  }
}
