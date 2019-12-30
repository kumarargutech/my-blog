import { ADD_ARTICLE_ACTION } from './constants';

export const addArticle = response => ({
    type: ADD_ARTICLE_ACTION,
    response
})

export const addArticleAction = (data) => async dispatch => {
    console.log("data: ", JSON.stringify(data));
    let reqData = { article_title: data.article_title, article_content: data.article_content };
    await fetch(`/api/add-article`, {
        method: 'post',
        body: JSON.stringify(reqData),
        headers: {
            'Content-Type': 'application/json'
        },
        })
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            dispatch(addArticle(response));
        })
};
