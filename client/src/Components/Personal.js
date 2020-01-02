import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MobileFriendly from '@material-ui/icons/MobileFriendly';
import Email from '@material-ui/icons/Email';
import LocationCity from '@material-ui/icons/LocationCity';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import ProfileImg from '../assets/images/kumar_r_photo.JPG';
import Loader from './Loader';

const useStyles = makeStyles({
    bigAvatar: {
        height: 250,
        width: 250,
        margin: 10,
        borderRadius: "50%",
        position: 'relative',
        overflow: 'hidden'
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    },
    icon: {
        minWidth: 30,
        color: '#e91e63'
    },
    profileInfo: {
        color: '#00818A'
    }
});

export default function Personal(props) {
    const URLPath = "/api/personalinfo";
    const classes = useStyles();
    const [personal, setPersonal] = useState();
    const [loaderStatus, setLoaderStatus] = useState(true);

    useEffect(() => {
        const FetchData = async () => {
            const res = await fetch(URLPath);
            const json = await res.json();
            setPersonal(json);
            setLoaderStatus(false);
        };
        FetchData();
    }, [URLPath]);

    if(loaderStatus) {
        return <Loader />
    }

    return (
        <div>
            {personal &&
                <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}>
                    <img alt="Profile Content" src={ProfileImg} className={classes.bigAvatar} />
                    <div>
                        <h1>{personal.profile_name}</h1>
                        <h3>{personal.position}</h3>
                    </div>
                    <div>
                        <List className={classes.flexContainer}>
                            <ListItem>
                                <ListItemIcon className={classes.icon}><MobileFriendly /></ListItemIcon>
                                <ListItemText primary={personal.mobile_number} className={classes.profileInfo} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon className={classes.icon}><Email /></ListItemIcon>
                                <ListItemText primary={personal.email_id} className={classes.profileInfo} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon className={classes.icon}><LocationCity /></ListItemIcon>
                                <ListItemText primary={personal.location} className={classes.profileInfo} />
                            </ListItem>
                            <ListItem component="a" href={personal.github} target="_blank">
                                <ListItemIcon className={classes.icon}><GitHub /></ListItemIcon>
                                <ListItemText primary={"Github"} className={classes.profileInfo} />
                            </ListItem>
                            <ListItem component="a" href={personal.linked_in} target="_blank">
                                <ListItemIcon className={classes.icon}><LinkedIn /></ListItemIcon>
                                <ListItemText primary={"LinkedIn"} className={classes.profileInfo} />
                            </ListItem>
                        </List>
                    </div>
                </Grid>}
        </div>
    );
}
