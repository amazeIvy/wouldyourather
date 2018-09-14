export const  RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'

export const SELECT_OPTION_ONE = 'SELECT_OPTION_ONE';
export const SELECT_OPTION_TWO = 'SELECT_OPTION_TWO';

export function receiveQuestions (questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions
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
