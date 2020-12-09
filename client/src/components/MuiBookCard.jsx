import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import NoImage from "../assets/no_image.png";
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    borderColor: "#2ba2ff",
    elevation: 5, 
    margin:15,  
    
  },
  media: {
    height: 150,
    // paddingTop: '56.25%', // 16:9
    width: "20%",
    // float:'left'
    margin: 20,
    borderColor: "#9ea2a3",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyItems: "center",
    flexWrap: "wrap",
    
  },
  cardContent: {
    width: "70%",
    paddingTop: 5,
    color: "#202124",
  },
}));

export default function MUIBookCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Slide direction={props.direction} in={true} mountOnEnter unmountOnExit timeout={{appear: 2000,enter:2000, exit: 10 }}>
    <Card
      className={classes.root}
      // style={{ backgroundColor: props.backgroundColor }}
      variant="elevation"
      raised
      
    >
      <CardHeader
        title={props.bookName}
        subheader={`${props.pageCount} pages`}
      />
      <div className={classes.content}>
        <CardMedia
          className={classes.media}
          image={props.image ? props.image : NoImage}
          title={props.bookName}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          
        </IconButton>
      </CardActions>
      
    </Card>
    </Slide>
  );
}
