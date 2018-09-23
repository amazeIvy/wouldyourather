export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_USERS = 'UPDATE_USERS';
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION';

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}


/*
 * info: Object{}
 *  authedUser,
 *  id(Question Id),
 *  answer('optionOne'/'optionTwo')
 */
export function updateUsers (info) {
  return {
    type: UPDATE_USERS,
    info
  }
}

/*
 * info: Object{}
 *  authedUser,
 *  id(Question Id),
 */
export function handleUserAddQuestion (authedUser, questionId) {
  return {
    type: USER_ADD_QUESTION,
    authedUser,
    questionId
  }
}