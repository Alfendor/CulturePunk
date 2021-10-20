import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';

import SpotLightCanvas from './SpotLightCanvas';

const useStyles = makeStyles({
  root: {
    transition: 'transform 0.5s ease-in-out',
    '&:hover': { transform: 'scale3d(1.01, 1.01, 1.01)' },
  },
});

export default function LandingCard({ src }) {
  const classes = useStyles();
  return (
    <div>
      <Card
        className={classes.root}
        sx={{
          width: 300,
        }}
      >
        {/* <CardMedia
        component="img"
        height="400"
        image="./img/touch.jpg"
        alt="green iguana"
      /> */}
        <SpotLightCanvas src={src} />
        <CardContent sx={{
          // height: 130,
        }}
        >
          <Typography gutterBottom variant="h4" component="div">
            Venusaur
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Venusaur are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" >100 ETH</Button>
          <Button size="medium">Watch Live Now!</Button>
        </CardActions>
      </Card>
      <h1>THIS WEEKS SPOTLIGHT</h1>
    </div>
  );
}