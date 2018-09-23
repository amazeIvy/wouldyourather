import { saveQuestion } from '../utils/api'

export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

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

/*
 * info: Object{}
 *  authedUser,
 *  id(Question Id),
 *  answer('optionOne'/'optionTwo')
 */
export function saveSelectOption (info) {
  return {
    type: SAVE_QUESTION_ANSWER,
    info,
  }
}

export function handleAddQuestion (optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return saveQuestion({ optionOneText, optionTwoText, author })
      .then(question => dispatch(addNewQuestion(question)))
  }
}
