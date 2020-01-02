import { COMMENT_ACTION } from './constants';

export const articleComment = response => ({
    type: COMMENT_ACTION,
    response
})

export const commentAction = (data) => async dispatch => {
    await fetch(`/api/article/${data.articleId}/add-comment`, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            return response.json()
        }).then((response) => {
            dispatch(articleComment(response));
        })
};
