import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {  getImgUrl } from "../../helpers/service";
import { Link } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "59vh",
    margin: "27px",
    border: "1px solid dimgrey"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(props);

  return (
    <Card className={classes.root}>
            <Link to={`/${props.id}`}>
      <CardHeader
        title={props.title}
        subheader={props.release_date}
      />
      <CardMedia
        className={classes.media}
        image={getImgUrl(props.path)}
        title={props.title}
      />
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <p>{props.overview.slice(0,70)}...</p>
                  </Typography>
                  {props.genre.map((genre, index)=>{
                    return (
            <span key={index}>{genre} </span>)
          })}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
       </CardActions>
    </Card>
  );
}
