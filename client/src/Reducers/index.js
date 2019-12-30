import { combineReducers } from "redux";
import { commentReducer } from "./commentReducer";
import { addArticleReducer } from "./addArticleReducer";

export const rootReducer = combineReducers({
    comments: commentReducer,
    addArticle: addArticleReducer
});