import React from 'react';
import Resume from '../assets/files/Kumar-Resume.pdf';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import ResumeDownload from '../assets/images/download-resume.png';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: 200
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    resumeImg: {
        width: "56%",
        float: "right"
    },
    downloadDoc: {
        cursor: "pointer",
        position: "relative",
        top: 196,
        float: "left",
        fontSize: 15
    }
}));

function Download() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Container maxWidth="md">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <img src={ResumeDownload} alt="resume-download" className={classes.resumeImg} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Chip
                                icon={<CloudDownloadIcon />}
                                label="Resume | Download"
                                color="secondary"
                                component="a"
                                href={Resume}
                                target="_blank"
                                download
                                className={classes.downloadDoc}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default Download;
