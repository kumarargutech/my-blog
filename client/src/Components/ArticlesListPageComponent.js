import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import ArticleList from './ArticleList';
import Container from '@material-ui/core/Container';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddArticle from '../Containers/AddArticle';
import { Link } from 'react-router-dom';

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
    addArticleDiv: {
        position: "relative",
        float: "right",
        cursor: "pointer"
    },
    addArticle: {
        color: "#e91e63"
    },
    addArticleSpan: {
        fontSize: 16,
        position: "relative",
        top: -12,
        paddingLeft: 10
    }
}));

function ArticlesListPageComponent(props) {
    const URLPath = "/api/articles";
    const classes = useStyles();
    const [article, setArticle] = useState();
    useEffect(() => {
        const FetchData = async () => {
            const res = await fetch(URLPath);
            const json = await res.json();
            setArticle(json);
        };
        FetchData();
    }, [URLPath]);

    return (
        <>
            <div className={classes.root}>
                <Container fixed>
                    <h1>Tech Blog</h1>
                    <div className={classes.addArticleDiv}>
                    <Link to={`/add-article/`} className="addArticleLink"><AddCircleIcon fontSize="large" className={classes.addArticle}/><span className={classes.addArticleSpan}>Add Article</span></Link>
                    </div>
                    {article && article.map((item, index) => <ArticleList article={item} key={index} keyIndex={index} />)}
                </Container>
            </div>
        </>
    )
}

export default ArticlesListPageComponent;