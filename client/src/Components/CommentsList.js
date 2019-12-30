import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PersonIcon from '@material-ui/icons/Person';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: 100,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  personIcon: {
    color: "#f50057"
  }
}));

function CommentsList(props) {
  const classes = useStyles();

  let commentsData = (props.comments === null) ? props.commentsList : props.comments.comments;

  return (
    <>
      <Container maxWidth="md" className={classes.root}>
        {commentsData && commentsData.map((comment, index) => {
          return (<List key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <PersonIcon className={classes.personIcon} />
              </ListItemAvatar>
              <ListItemText
                primary={comment.username}
                secondary={
                  <React.Fragment>
                    <span>{comment.comment}</span>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>)
        })}
      </Container>
    </>
  )
}

export default CommentsList;
