import { COMMENT_ACTION } from './constants';

export const comment = response => ({
    type: COMMENT_ACTION,
    response
})

export const commentAction = (data) => async dispatch => {
    console.log("data: ", JSON.stringify(data));
    await fetch(`/api/article/${data.articleTitle}/add-comment`, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        })
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            dispatch(comment(response));
        })
};
