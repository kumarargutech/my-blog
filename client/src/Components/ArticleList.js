import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  rootDiv: {
    padding: theme.spacing(3, 2),
    borderBottom: "1px solid #dcdcdc"
  },
  articleTitle: {
    position: "relative",
    float: "left"
  },
  grid: {
    padding: 0
  },
  articleContent: {
    textAlign: "initial"
  },
  readMore: {
    float: "right",
    textDecoration: "none",
    fontSize: 16,
    color: "#e91e63"
  }
}));

export default function ArticleList({ article, keyIndex }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.rootDiv} key={keyIndex}>
        <Grid container>
          <Grid item xs={12} className={classes.grid}>
            <h2 className={classes.articleTitle}>{article.article_title}</h2>
          </Grid>
          <Grid>
            <p className={classes.articleContent}>{article.article_content.substring(0, 200)}</p>
          </Grid>
        </Grid>
        <div><Link to={`/article/${article.article_title}`} className={classes.readMore}>{article.article_content.length > 200 && "Read more ..."}</Link></div>
      </div>
    </>
  );
}
