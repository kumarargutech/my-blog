import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import ArticleList from './ArticleList';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 100,
        '& > *': {
            margin: theme.spacing(1),
            marginRight: 20
        },
        marginBottom: 100
    },
    relatedArticle: {
        color: "#e91e63"
    }
}));

const RelatedArticles = ({ articles }) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Container fixed>
                    <h2 className={classes.relatedArticle}> Related Articles</h2>
                    {articles && articles.map((item, index) => <ArticleList article={item} key={index} keyIndex={index} />)}
                </Container>
            </div>
        </>
    )
}

export default RelatedArticles;