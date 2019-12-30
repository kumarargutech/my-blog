import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
  card: {
    maxWidth: 700,
  },
  rightArrow: {
    position: 'relative',
    top: 7
  },
  star: {
    color: "#f7be16",
    position: "relative",
    top: 4
  }
});

export default function GetExperience(props) {
  const classes = useStyles();

  const { company_name, position, start_year, end_year, achievement, description } = props.experienceInfo;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {company_name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {position}
          </Typography>
          <Button variant="contained" color="secondary">
            {start_year}
          </Button>
          <ArrowRightAltIcon className={classes.rightArrow} />
          <Button variant="contained" color="secondary">
            {end_year}
          </Button>
        </CardContent>
        <CardContent>
          <Typography>
            <StarIcon className={classes.star} /> {achievement}
          </Typography>
          <div>
            <Typography variant="body2" color="textSecondary" component="p">
              <p>{description}</p>
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
