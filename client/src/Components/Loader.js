import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import LoaderGIF from '../assets/images/loader.gif';

const useStyles = makeStyles({
    gifLoader: {
      position: "relative",
      top:350
    },
  });

function Loader() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.gifLoader}>
            <div><img src={LoaderGIF} alt="Loader" /></div>
        </Container>
    );
}

export default Loader;