import { ADD_ARTICLE_ACTION } from '../Actions/constants';
const defaultState = null;

export const addArticleReducer = (state = defaultState, action) => {
  console.log("action", action);
  switch (action.type) {
    case ADD_ARTICLE_ACTION:
      return action.response;
    default:
      return state;
  }
};
