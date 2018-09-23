import {
  RECIEVE_QUESTIONS,
  ADD_NEW_QUESTION,
  SAVE_QUESTION_ANSWER,
  SELECT_OPTION_ONE,
  SELECT_OPTION_TWO
} from '../actions/questions';

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECIEVE_QUESTIONS :
      return {
        ...state,
        ...action.questions,
      }
    case ADD_NEW_QUESTION :
      const { question } = action
      return {
        ...state,
        [question.id]: question
      }
    case SAVE_QUESTION_ANSWER :
      return {
        ...state,
        ...action.questions,
      }
    case SELECT_OPTION_ONE :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          optionOne: {
            ...state[action.id].optionOne,
            votes: state[action.id].optionOne.votes.concat(action.userId)
          }
        }
      }
    case SELECT_OPTION_TWO :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          optionTwo: {
            ...state[action.id].optionTwo,
            votes: state[action.id].optionTwo.votes.concat(action.userId)
          }
        }
      }
    default :
      return state
  }
}
