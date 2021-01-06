import React, { useState,useEffect } from 'react'
import {Card,CardHeader, CardContent, Typography, CardActions,IconButton,Collapse } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      border:'5px',
      backgroundColor:'#e0ebeb'
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
   
  }));

const FirstTabMovieList = ({movie}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const [movieData , setMovieData] = useState([]);
  //getting movie Imdb id from movie obj and then using it for fetching Movies by Imdb id to get full info
    
      //fetches only when new movie obj is passed
    useEffect(() => {
      const getMoviesData = async () => {
        const url = `https://www.omdbapi.com/?i=${movie.imdbID}&y=${movie.year}&apikey=7a336e41`
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log('movieData'+responseJson);
        if(responseJson){
            setMovieData(responseJson);
        } 
      };
        getMoviesData();
    },[movie])
    return (
      //Card component from Material UI
        <div style={{margin:'20px', backgroundColor:'grey'}}>
        
            <Card className={classes.root}>
                   <CardHeader
                    
                     action={
                       <IconButton aria-label="settings">
                         <MoreVertIcon />
                       </IconButton>
                     }
                     title={movieData.Title}
                     subheader={movieData.Released}
                   />

                   <Typography paragraph style={{marginLeft:'25px'}}>
                         {movieData.imdbRating > 7 ? <h2>boxoffice: Hit</h2> : <h2>boxoffice: flop</h2>}
                         <Typography>
                            Actors:  {movieData.Actors}
                       </Typography>
                    </Typography>
                   
                   <CardContent>
                     <Typography variant="body2" color="textSecondary" component="p">
                       <Typography>
                       {movieData.Plot}
                       </Typography>

                     </Typography>
                   </CardContent>
                   <CardActions disableSpacing>
                     <IconButton
                       className={clsx(classes.expand, {
                         [classes.expandOpen]: expanded,
                       })}
                       onClick={handleExpandClick}
                       aria-expanded={expanded}
                       aria-label="show more"
                       title="show more"
                     >
                       <ExpandMoreIcon />
                     </IconButton>
                   </CardActions>
                   <Collapse in={expanded} timeout="auto" unmountOnExit>
                     <CardContent>
                       <Typography paragraph>IMDB: {movieData.imdbRating}</Typography>
                       <Typography>
                        Type:  {movieData.Type}
                       </Typography>
                       <Typography paragraph>
                         Runtime : {movieData.Runtime}
                       </Typography>
                       <Typography paragraph>
                         Genre : {movieData.Genre}
                       </Typography>
                       <Typography paragraph>
                        Director : {movieData.Director}
                       </Typography>
                       <Typography>
                         Actors : {movieData.Actors}
                       </Typography>
                     </CardContent>
                   </Collapse>
                 </Card>
        </div>
    )
}

export default FirstTabMovieList
