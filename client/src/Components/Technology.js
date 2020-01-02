import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Loader from './Loader';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 200,
    '& > *': {
      margin: theme.spacing(1),
      marginRight: 20
    },
  },
  chipStyle: {
    marginRight: 20,
    marginTop: 10,
    backgroundColor: "#e91e63",
    fontSize: 16
  }
}));

export default function Technology() {
  const URLPath = "/api/technologies";
  const classes = useStyles();
  const [technology, setTechnology] = useState();
  const [loaderStatus, setLoaderStatus] = useState(true);

  useEffect(() => {
    const FetchData = async () => {
      const res = await fetch(URLPath);
      const json = await res.json();
      setTechnology(json);
      setLoaderStatus(false);
    };
    FetchData();
  }, [URLPath]);

  if(loaderStatus) {
    return <Loader />
  }

  return (
    <div className={classes.root}>
      { technology && <Container maxWidth="md">
        {technology.name.map((item, index) => {
          return <Chip
            key={index}
            label={item}
            clickable
            color="primary"
            className={classes.chipStyle}
          />
        })}
        </Container> }
    </div>
  );
}
