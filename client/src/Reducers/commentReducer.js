import { COMMENT_ACTION } from '../Actions/constants';
const defaultState = null;

export const commentReducer = (state = defaultState, action) => {
  switch (action.type) {    
    case COMMENT_ACTION:
      return action.res;            
    default:
        return state;
  }
};
                 