import { SET_ACTIVE_PATH } from '../actions/activePath';

export default function activePath (state = null, action) {
  switch (action.type) {
    case SET_ACTIVE_PATH :
      return action.path;
    default :
      return state
  }
}
