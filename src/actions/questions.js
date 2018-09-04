export const  RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'

export function receiveQuestions (questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions
  }
}