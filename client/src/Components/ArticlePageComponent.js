import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Comments from '../Containers/Comments';
import CommentsList from '../Containers/CommentsList';
import RelatedArticles from './RelatedArticles';
import Divider from '@material-ui/core/Divider';

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
    },
    articleTitle: {
        position: "relative",
        float: "left"
    },
    articleContent: {
        textAlign: "justify"
    }
}));

const ArticlePageComponent = ({ match }) => {
    const classes = useStyles();
    const name = match.params.name;
    const [article, setArticle] = useState();
    const [relatedArticle, setRelatedArticle] = useState();
    
    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(`/api/article/${name}`);
            let result = await response.json();
            console.log("result", result);
            setArticle(result.articles);
            setRelatedArticle(result.relatedArticles);
        }
        fetchData();
    }, [name]);

    return (
        <>
            {article && <div className={classes.root}>
                <Container fixed>
                    <Grid container>
                        <Grid item xs={12} className={classes.grid}>
                            <h2 className={classes.articleTitle}>{article.article_title}</h2>
                        </Grid>
                        <Grid>
                            <p className={classes.articleContent}>{article.article_content}</p>
                        </Grid>
                    </Grid>
                    <Divider variant="inset" />
                    <Comments article={article.article_title} />
                    <CommentsList commentsList={article.comments} />
                    <RelatedArticles articles={relatedArticle} />
                </Container>
            </div>}
        </>
    )
}

export default ArticlePageComponent;