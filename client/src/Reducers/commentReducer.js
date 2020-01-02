import { COMMENT_ACTION } from '../Actions/constants';
const defaultState = null;

export const commentReducer = (state = defaultState, action) => {
  console.log("reducer data", action);
  switch (action.type) {    
    case COMMENT_ACTION:
      return action.response;            
    default:
        return state;
  }
};
                 