import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import VisibilityIcon from "@material-ui/icons/Visibility";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import NoImage from "../assets/no_image.png";
import Slide from "@material-ui/core/Slide";
import { Tooltip } from "@material-ui/core";
// import { Link } from "react-router-dom";
import API from '../utils/API'
import {socket} from '../App';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    borderColor: "#2ba2ff",
    elevation: 5,
    margin: 15,
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

export default function MuiSavedBookCard(props) {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  // console.log(props.data.alreadySaved)
  // const rawBookData = {    
  //   title: props.data.title,
  //   description: props.data.description,
  //   images: props.data.image,
  //   previewLink: props.data.previewLink,
  //   pages: props.data.pageCount,
  //   authors: props.data.authors,
  //   identifiers: props.data.industryIdentifiers,
  // };


  // const getISBN=()=>{
  //   if(typeof rawBookData.identifiers === "undefined"){
  //     return '---'
  //   }
  //   else{
  //     const isbn13 =rawBookData.identifiers.find((i) => i.type === "ISBN_13");
  //     if(!isbn13){
  //       return '---'
  //     }
  //     if(typeof isbn13.identifier === 'undefined'){
  //       return '---'
  //     }
  //     else{
  //       return isbn13.identifier;
  //     }
  //   }
  // }
  // Massaged Book Data
  const bookData = {
    bookid:props.data.bookid,
    title: props.data.title,
    description: props.data.description !== ""
        ? props.data.description
        : "No Description Available",
    image:props.data.image !== "" ? props.data.image : "",
    pages: props.data.pages !== "" ? props.data.pages : "",
    authors:props.data.authors !== ""
        ? props.data.authors
        : "",
    previewLink: props.data.previewLink ? props.data.previewLink : "#",
    isbn:props.data.isbn
      
  };

  
  
  return (
    <Slide
      direction="down"
      in={true}
      mountOnEnter
      unmountOnExit
      timeout={{ appear: 2000, enter: 2000, exit: 10 }}
    >
      <Card
        className={classes.root}
        // style={{ backgroundColor: props.backgroundColor }}
        variant="elevation"
        raised
      >
        <CardHeader
          title={`${bookData.title}`}
          subheader={`${
            bookData.pages ? bookData.pages + " pages." : ""
          } author(s): ${bookData.authors}`}
        />
        <div className={classes.content}>
          <CardMedia
            className={classes.media}
            image={
             
              bookData.image
                ? bookData.image
                : NoImage
            }
            title={bookData.title}
          />
          <CardContent className={classes.cardContent}>
            <Typography
              variant="body2"
              style={{ color: "blueviolet" }}
              component="h6"
            >
              {`ISBN :${bookData.isbn}`}
            </Typography>
            {/* </CardContent>
        <CardContent className={classes.cardContent}> */}
            <Typography variant="body2" color="textSecondary" component="p">
              {bookData.description}
            </Typography>
          </CardContent>
        </div>
        <CardActions disableSpacing>
        <Tooltip title="Remove From Saved Books">
          <span>
          <IconButton aria-label="save" onClick={()=>props.removeHandler(bookData.title,bookData.authors,bookData.bookid)}>
            <HighlightOffIcon />
          </IconButton>
          </span>
          </Tooltip>
          <Tooltip title="Preview Book">
            <IconButton
              aria-label="view"
              href={bookData.previewLink}
              target="_blank"
              style={{ color: "Highlight" }}
            >
              {/* <Link href={props.data.volumeInfo.previewLink} target='_blank'> */}
              <VisibilityIcon />
              {/* </Link> */}
            </IconButton>
          </Tooltip>
          {/* <Typography variant="body2" color="textSecondary" component="p">
              {props.data.alreadySaved?<Link href="/saved" to="/saved">Book Already Saved! View Saved Books</Link>:''}
            </Typography> */}
         
        </CardActions>
      </Card>
    </Slide>
  );
}
